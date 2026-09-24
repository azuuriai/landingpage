// Records a live website frame by frame at a constant 30 fps.
//
// Real-time screencasts of headless Chrome come out jerky: frames arrive
// unevenly and heavy pages drop frames while scrolling. Here Chrome instead
// plays every CSS/Web animation SLOWDOWN times slower, the scroll position is
// set from an eased timeline, and a screenshot is taken on a fixed schedule
// (one frame per SLOWDOWN × 1/30 s of wall-clock time). Played back at 30 fps
// the result is smooth, with animations at their real speed.
//
// JavaScript animations get the same treatment: the page's
// requestAnimationFrame, performance.now(), setTimeout and setInterval run on a
// recording clock that advances exactly 1/30 s per video frame (in two 60 Hz
// ticks).
// Per-frame easing (lerps), time-based glides and modal transitions therefore
// move identically in every frame instead of catching up in uneven jumps.
//
//   node scripts/record-site.mjs <config.json>
//
// config: {
//   "name": "iu-desktop", "url": "https://…", "width": 1152, "height": 720,
//   "scale": 1, "mobile": false, "settleMs": 1500, "slowdown": 6,
//   "startAt": "load" | "dom",   // "dom": record from first paint, e.g. to
//                                // catch an intro animation that would
//                                // otherwise play while the page loads
//   "steps": [
//     {"hold": 2000},                         // let time pass, no scrolling
//     {"scroll": {"to": 1200, "ms": 3000}},   // eased scroll to y (or "max",
//                                             //  or "sel:<css>" for an element)
//     {"eval": "document.querySelector('…').click()"}
//   ]
// }
// Frames land in scripts/frames-<name>/ (git-ignored). Encode with:
//   ffmpeg -framerate 30 -i scripts/frames-<name>/f_%05d.jpg -c:v libx264 …
import { spawn } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const config = JSON.parse(readFileSync(process.argv[2], "utf8"));
const FPS = 30;
const FRAME_MS = 1000 / FPS;
const out = fileURLToPath(new URL(`./frames-${config.name}/`, import.meta.url));
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${tmpdir()}/record-site-${port}`,
    "--no-first-run",
    "--hide-scrollbars",
    "--mute-audio",
    "--autoplay-policy=no-user-gesture-required",
    "about:blank",
  ],
  { stdio: "ignore" },
);

// Never leave a headless Chrome behind, whatever happens below.
const fail = (message) => {
  console.error(message);
  chrome.kill();
  process.exit(1);
};
process.on("uncaughtException", (error) => fail(error.stack ?? String(error)));
process.on("unhandledRejection", (error) => fail(String(error)));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  await sleep(200);
  try {
    const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
    target = list.find((t) => t.type === "page");
  } catch {
    // Chrome is still starting up.
  }
}
if (!target) fail("Chrome did not expose a debuggable page within 10 s.");

const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve) => ws.addEventListener("open", resolve));
let id = 0;
const pending = new Map();
const waiters = new Map();
ws.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg.result ?? msg.error);
    pending.delete(msg.id);
  } else if (msg.method && waiters.has(msg.method)) {
    waiters.get(msg.method)();
    waiters.delete(msg.method);
  }
});
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const i = ++id;
    pending.set(i, resolve);
    ws.send(JSON.stringify({ id: i, method, params }));
  });
const once = (method) => new Promise((resolve) => waiters.set(method, resolve));
const evaluate = async (expression) =>
  (await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }))
    ?.result?.value;

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: config.width,
  height: config.height,
  deviceScaleFactor: config.scale ?? 1,
  mobile: Boolean(config.mobile),
});
if (config.mobile) {
  await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });
  await send("Emulation.setUserAgentOverride", {
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1",
  });
}

const SLOWDOWN = config.slowdown ?? 6;
await send("Animation.enable");
await send("Animation.setPlaybackRate", { playbackRate: 1 / SLOWDOWN });

// Recording clock for page scripts (see header). It follows the document
// timeline, which Animation.setPlaybackRate slows down together with every
// CSS/Web animation. Pages that line a canvas or rAF animation up with their
// CSS animations (IU's intro: rig time = rAF time - animation.startTime) then
// see one clock, exactly as in a normal page load. A private clock that starts
// from the real load time ran ~160 ms ahead of the CSS, so the dancer finished
// its jump before the lettering ring closed around it.
await send("Page.addScriptToEvaluateOnNewDocument", {
  source: `(() => {
    const realNow = performance.now.bind(performance);
    const timelineNow = () => {
      const t = document.timeline && document.timeline.currentTime;
      return typeof t === "number" ? t : null;
    };
    const callbacks = new Map();
    let clock = timelineNow() ?? 0;
    let nextId = 0;
    let manual = ${config.startAt === "dom"};
    const tick = (ms) => {
      clock += ms;
      if (manual) fireTimers();
      const due = [...callbacks.values()];
      callbacks.clear();
      for (const cb of due) {
        try { cb(clock); } catch (error) { console.error(error); }
      }
    };
    performance.now = () => clock;
    window.requestAnimationFrame = (cb) => { callbacks.set(++nextId, cb); return nextId; };
    window.cancelAnimationFrame = (id) => callbacks.delete(id);

    // Timers run on the same clock. Otherwise a page that sequences an
    // animation with setTimeout (an intro that ends after N ms, a gallery
    // that settles N ms after scrolling) fires SLOWDOWN times too early and
    // cuts its own slowed-down animation short.
    const realSetTimeout = window.setTimeout.bind(window);
    const realClearTimeout = window.clearTimeout.bind(window);
    const timers = new Map();
    let nextTimer = 1e6;
    const addTimer = (fn, ms, args, every) => {
      const id = ++nextTimer;
      const delay = Math.max(0, Number(ms) || 0);
      if (!manual) {
        const run = () => {
          if (!timers.has(id)) return;
          if (typeof fn === "function") fn(...args);
          if (every) timers.set(id, { real: realSetTimeout(run, delay) });
          else timers.delete(id);
        };
        timers.set(id, { real: realSetTimeout(run, delay) });
      } else {
        timers.set(id, { due: clock + delay, fn, args, every: every ? delay : 0 });
      }
      return id;
    };
    const fireTimers = () => {
      for (const [id, t] of [...timers].sort((a, b) => (a[1].due ?? 0) - (b[1].due ?? 0))) {
        if (t.due === undefined || t.due > clock || !timers.has(id)) continue;
        if (t.every) t.due = clock + Math.max(1, t.every);
        else timers.delete(id);
        try { if (typeof t.fn === "function") t.fn(...t.args); } catch (error) { console.error(error); }
      }
    };
    window.setTimeout = (fn, ms, ...args) => addTimer(fn, ms, args, false);
    window.setInterval = (fn, ms, ...args) => addTimer(fn, ms, args, true);
    window.clearTimeout = window.clearInterval = (id) => {
      const t = timers.get(id);
      if (t?.real !== undefined) realClearTimeout(t.real);
      timers.delete(id);
    };
    const realtime = () => {
      if (manual) return;
      tick(Math.max(0, (timelineNow() ?? realNow()) - clock));
      realSetTimeout(realtime, 16);
    };
    realtime();
    window.__recordingClock = {
      start() {
        manual = true;
        const t = timelineNow();
        if (t !== null && t > clock) clock = t;
      },
      // One video frame: move to where the (slowed) document timeline is now,
      // in \`ticks\` even steps; fall back to \`ms\` if it has not moved.
      advance(ms, ticks) {
        const t = timelineNow();
        const span = t !== null && t > clock ? t - clock : ms;
        for (let i = 0; i < ticks; i++) tick(span / ticks);
      },
    };
  })();`,
});

const loaded = once(config.startAt === "dom" ? "Page.domContentEventFired" : "Page.loadEventFired");
await send("Page.navigate", { url: config.url });
await loaded;
if (config.startAt !== "dom") await sleep((config.settleMs ?? 1500) * SLOWDOWN);

// Frames are captured on a fixed wall-clock grid so that animation time
// between two frames is always exactly 1/30 s.
const TICK_MS = FRAME_MS * SLOWDOWN;
await evaluate("window.__recordingClock.start()");
let nextTick = performance.now();
// Wait for the grid first, then bring the page clock up to the timeline and
// capture right away: rAF drawing and CSS animations then show the same moment.
const advance = async () => {
  nextTick += TICK_MS;
  await sleep(Math.max(0, nextTick - performance.now()));
  await evaluate(`window.__recordingClock.advance(${FRAME_MS}, 2)`);
};

let frame = 0;
// Optional per-frame probe (config.probe: JS expression) for debugging.
const probes = [];
const capture = async () => {
  if (config.probe) probes.push(await evaluate(config.probe));
  const shot = await send("Page.captureScreenshot", { format: "jpeg", quality: 92 });
  writeFileSync(`${out}f_${String(frame++).padStart(5, "0")}.jpg`, Buffer.from(shot.data, "base64"));
};
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const resolveTarget = (to) =>
  to === "max"
    ? "document.documentElement.scrollHeight - innerHeight"
    : typeof to === "string" && to.startsWith("sel:")
      ? `document.querySelector(${JSON.stringify(to.slice(4))}).getBoundingClientRect().top + scrollY`
      : String(to);

for (const step of config.steps) {
  if (step.eval) await evaluate(step.eval);
  if (step.hold) {
    const frames = Math.round(step.hold / FRAME_MS);
    for (let i = 0; i < frames; i++) {
      await advance();
      await capture();
    }
  }
  if (step.scroll) {
    const from = await evaluate("scrollY");
    const to = await evaluate(resolveTarget(step.scroll.to));
    const frames = Math.round(step.scroll.ms / FRAME_MS);
    for (let i = 1; i <= frames; i++) {
      await evaluate(`window.scrollTo(0, ${from + (to - from) * ease(i / frames)})`);
      await advance();
      await capture();
    }
  }
}

if (frame === 0) fail("No frames were captured.");
writeFileSync(`${out}info.json`, JSON.stringify({ frames: frame, fps: FPS, probes }));
console.log(`${config.name}: ${frame} frames (${(frame / FPS).toFixed(1)} s at ${FPS} fps)`);
ws.close();
chrome.kill();
process.exit(0);
