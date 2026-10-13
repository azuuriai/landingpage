"use client";

import { useEffect, useMemo, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";

// The signature of the Dance it draft: the basic step of the four dances
// from course 1, danced by two feet on a daylight floor: the gentleman's
// part, as taught in beginner classes. The owner examines dance teachers,
// so every step was checked against the standard basic figures.
//
// A dance is a start stance and a list of steps. Each step moves one foot
// (or only shifts the weight, when `to` is omitted) on one count.

type Point = [number, number];
type Foot = "L" | "R";
type Step = { foot: Foot; to?: Point; count: string; half?: boolean };
type Dance = { id: string; label: string; note: string; start: { L: Point; R: Point }; steps: Step[] };

const dances: Dance[] = [
  {
    id: "walzer",
    label: "Englisch Walzer",
    note: "Grundschritt des Herrn im Viereck: vor, seit, schliessen – rück, seit, schliessen.",
    start: { L: [132, 205], R: [174, 205] },
    steps: [
      { foot: "L", to: [132, 112], count: "1" },
      { foot: "R", to: [216, 112], count: "2" },
      { foot: "L", to: [174, 112], count: "3" },
      { foot: "R", to: [216, 205], count: "4" },
      { foot: "L", to: [132, 205], count: "5" },
      { foot: "R", to: [174, 205], count: "6" },
    ],
  },
  {
    id: "chacha",
    label: "Cha Cha Cha",
    note: "Grundschritt des Herrn: Wiegeschritt vor, Chassé nach links, Wiegeschritt rück, Chassé nach rechts.",
    start: { L: [150, 170], R: [190, 170] },
    steps: [
      { foot: "L", to: [150, 100], count: "2" },
      { foot: "R", count: "3" },
      { foot: "L", to: [118, 170], count: "4" },
      { foot: "R", to: [154, 170], count: "&", half: true },
      { foot: "L", to: [88, 170], count: "1" },
      { foot: "R", to: [154, 240], count: "2" },
      { foot: "L", count: "3" },
      { foot: "R", to: [186, 170], count: "4" },
      { foot: "L", to: [150, 170], count: "&", half: true },
      { foot: "R", to: [220, 170], count: "1" },
    ],
  },
  {
    id: "jive",
    label: "Jive",
    note: "Grundschritt des Herrn: Wiegeschritt rück, dann Chassé nach links und Chassé nach rechts.",
    start: { L: [150, 165], R: [190, 165] },
    steps: [
      { foot: "L", to: [144, 235], count: "1" },
      { foot: "R", count: "2" },
      { foot: "L", to: [116, 165], count: "3" },
      { foot: "R", to: [152, 165], count: "a", half: true },
      { foot: "L", to: [86, 165], count: "4" },
      { foot: "R", to: [188, 165], count: "5" },
      { foot: "L", to: [152, 165], count: "a", half: true },
      { foot: "R", to: [222, 165], count: "6" },
    ],
  },
  {
    id: "salsa",
    label: "Salsa",
    note: "Grundschritt des Herrn: vor, Platz, schliessen – rück, Platz, schliessen. Auf 4 und 8 wird nicht getreten.",
    start: { L: [148, 170], R: [190, 170] },
    steps: [
      { foot: "L", to: [148, 98], count: "1" },
      { foot: "R", count: "2" },
      { foot: "L", to: [148, 170], count: "3" },
      { foot: "R", to: [190, 242], count: "5" },
      { foot: "L", count: "6" },
      { foot: "R", to: [190, 170], count: "7" },
    ],
  },
];

const BEAT = 560;

type Pose = { L: Point; R: Point; active: Foot | null; trail: { foot: Foot; at: Point } | null };

function poseAt(dance: Dance, index: number): Pose {
  let L = dance.start.L;
  let R = dance.start.R;
  let trail: Pose["trail"] = null;
  for (let i = 0; i <= index && i < dance.steps.length; i += 1) {
    const step = dance.steps[i];
    if (step.to) {
      const from = step.foot === "L" ? L : R;
      if (i === index) trail = { foot: step.foot, at: from };
      if (step.foot === "L") L = step.to;
      else R = step.to;
    }
  }
  return { L, R, active: index >= 0 ? dance.steps[index].foot : null, trail };
}

function FootShape({ side, active, ghost = false }: { side: Foot; active: boolean; ghost?: boolean }) {
  const tilt = side === "L" ? -8 : 8;
  const fill = ghost ? "none" : active ? "#ff5a14" : side === "L" ? "#1e1d1c" : "#ffffff";
  const stroke = ghost ? "#8c8783" : active ? "#ff5a14" : "#1e1d1c";
  return (
    <g transform={`rotate(${tilt}) scale(1.22)`}>
      <ellipse cx="0" cy="-12" rx="13.5" ry="21" fill={fill} stroke={stroke} strokeWidth={ghost ? 1.5 : 2.5} strokeDasharray={ghost ? "3 4" : undefined} />
      <ellipse cx="0" cy="24" rx="9.5" ry="10" fill={fill} stroke={stroke} strokeWidth={ghost ? 1.5 : 2.5} strokeDasharray={ghost ? "3 4" : undefined} />
    </g>
  );
}

export function StepBoard({ compact = false, initial = "walzer" }: { compact?: boolean; initial?: string }) {
  const reduce = useReducedMotion();
  const [danceId, setDanceId] = useState(initial);
  const [index, setIndex] = useState(-1);
  const [playing, setPlaying] = useState(true);
  const dance = useMemo(() => dances.find((item) => item.id === danceId) ?? dances[0], [danceId]);

  // One beat per step, half a beat for "&" and "a"; after the last count a
  // short rest, then the feet glide back to the start.
  useEffect(() => {
    if (!playing || reduce) return;
    const next = index + 1;
    const delay = index === dance.steps.length - 1 ? BEAT * 1.6 : dance.steps[next]?.half ? BEAT / 2 : BEAT;
    const timer = window.setTimeout(() => setIndex(next >= dance.steps.length ? -1 : next), index === -1 ? BEAT * 0.9 : delay);
    return () => window.clearTimeout(timer);
  }, [index, playing, reduce, dance]);

  const pose = poseAt(dance, index);
  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.7 };

  return (
    <div className={`rounded-[18px] border border-[#1e1d1c]/10 bg-white shadow-[0_40px_80px_-50px_rgba(30,29,28,0.45)] ${compact ? "p-4" : "p-5 md:p-6"}`}>
      <LayoutGroup id={`dances-${compact ? "c" : "f"}`}>
        <div role="tablist" aria-label="Tanz wählen" className="flex flex-wrap gap-1 rounded-full bg-[color:var(--di-band)] p-1">
          {dances.map((item) => {
            const active = item.id === danceId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setDanceId(item.id);
                  setIndex(-1);
                  setPlaying(true);
                }}
                className="relative flex-1 whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-semibold transition-colors"
              >
                {active ? (
                  <motion.span
                    layoutId="dance-pill"
                    className="absolute inset-0 rounded-full bg-[#1e1d1c]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className={`relative ${active ? "text-white" : "text-[#1e1d1c]/70 hover:text-[#1e1d1c]"}`}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* The floor: light planks, the two feet, a fading trail. */}
      <div className="relative mt-4 overflow-hidden rounded-[12px] bg-[color:var(--di-floor)]">
        <svg viewBox="40 50 240 245" className="block w-full" role="img" aria-label={`Grundschritt ${dance.label}, Schritte des Herrn`}>
          <defs>
            {/* Laminate: long narrow planks, joints staggered by thirds. */}
            <pattern id="planks" width="240" height="42" patternUnits="userSpaceOnUse" x="40" y="50">
              <line x1="0" y1="13.5" x2="240" y2="13.5" stroke="#1e1d1c" strokeOpacity="0.05" />
              <line x1="0" y1="27.5" x2="240" y2="27.5" stroke="#1e1d1c" strokeOpacity="0.05" />
              <line x1="0" y1="41.5" x2="240" y2="41.5" stroke="#1e1d1c" strokeOpacity="0.05" />
              <line x1="96" y1="0" x2="96" y2="13.5" stroke="#1e1d1c" strokeOpacity="0.04" />
              <line x1="176" y1="14" x2="176" y2="27.5" stroke="#1e1d1c" strokeOpacity="0.04" />
              <line x1="36" y1="28" x2="36" y2="41.5" stroke="#1e1d1c" strokeOpacity="0.04" />
            </pattern>
          </defs>
          <rect x="40" y="50" width="240" height="245" fill="url(#planks)" />
          {reduce
            ? dance.steps.map((step, i) =>
                step.to ? (
                  <g key={i} transform={`translate(${step.to[0]} ${step.to[1]})`} opacity={0.35 + (0.65 * (i + 1)) / dance.steps.length}>
                    <FootShape side={step.foot} active={false} />
                  </g>
                ) : null,
              )
            : null}
          {pose.trail && !reduce ? (
            <motion.g
              key={`${dance.id}-${index}`}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              transform={`translate(${pose.trail.at[0]} ${pose.trail.at[1]})`}
            >
              <FootShape side={pose.trail.foot} active={false} ghost />
            </motion.g>
          ) : null}
          {(["L", "R"] as Foot[]).map((side) => {
            const [x, y] = pose[side];
            const active = pose.active === side && !reduce;
            return (
              <motion.g key={side} initial={false} animate={{ x, y, scale: active ? 1.08 : 1 }} transition={spring}>
                <FootShape side={side} active={active} />
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ol className="flex flex-1 flex-wrap items-baseline gap-x-2.5 gap-y-1" aria-label="Zählzeit">
          {dance.steps.map((step, i) => (
            <li
              key={i}
              className={`font-extrabold leading-none transition-colors duration-200 ${step.half ? "text-[20px]" : "text-[30px]"} ${
                i === index ? "text-[#ff5a14]" : i < index ? "text-[#1e1d1c]" : "text-[#1e1d1c]/25"
              }`}
              style={{ fontFamily: "var(--font-di-display), Arial Narrow, sans-serif" }}
            >
              {step.count}
            </li>
          ))}
        </ol>
        {!reduce ? (
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause" : "Abspielen"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#1e1d1c]/15 transition-colors hover:border-[#1e1d1c] hover:bg-[#1e1d1c] hover:text-white"
          >
            {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          </button>
        ) : null}
      </div>
      {!compact ? <p className="mt-3 text-[14px] leading-6 text-[#5d5955]">{dance.note}</p> : null}
    </div>
  );
}
