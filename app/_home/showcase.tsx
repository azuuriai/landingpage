"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AutoplayVideo } from "../_components/autoplay-video";
import { pendingLocaleSwitch, registerShowcase } from "../_components/locale-switch";
import { MonitorFrame } from "../_components/monitor-frame";
import { PhoneFrame } from "../_components/phone-frame";
import type { ShowcaseItem } from "./home-content";
import { useShowcaseRotation } from "./use-showcase-rotation";

// The frame a recording shows right now, as an image.
function still(video: HTMLVideoElement | null | undefined) {
  if (!video || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return undefined;
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d")?.drawImage(video, 0, 0);
  return canvas.toDataURL("image/jpeg", 0.9);
}

// Opacity crossfade between projects. Monitor and iPhone stay mounted; only
// the screen contents fade, and every project's recordings stay loaded.
const LAYER = "absolute inset-0 transition-opacity duration-1000 ease-in-out";

// The homepage's one bold element: a monitor and an iPhone playing real
// recordings, quietly taking turns. Deliberately unlabelled — it shows what
// can be built; names and context live behind the link, in the case studies.
export function Showcase({ items, label }: { items: ShowcaseItem[]; label: string }) {
  const locale = useLocale();
  // After a language switch: the project and the spot in its recording where
  // the page before left off.
  const [resume] = useState(() => pendingLocaleSwitch(locale)?.showcase);
  const durations = useMemo(() => items.map((item) => item.desktop.durationMs), [items]);
  const rotation = useShowcaseRotation(durations, resume);
  const active = items[rotation.index];

  // Hands the current state over in case the visitor switches the language.
  const screenRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      registerShowcase(() => {
        const desktop = screenRef.current?.querySelectorAll("video")[rotation.index];
        const phone = phoneRef.current?.querySelectorAll("video")[rotation.index];
        return {
          index: rotation.index,
          time: desktop?.currentTime ?? 0,
          frames: { desktop: still(desktop), phone: still(phone) },
        };
      }),
    [rotation.index],
  );
  const resumeFor = (index: number, screen: "desktop" | "phone") =>
    resume?.index === index ? { time: resume.time, frame: resume.frames[screen] } : undefined;

  // The first project loads right away; the others follow about ten seconds
  // before their turn, so they never compete with first paint or the running
  // recording, and phones skip them entirely if the visitor leaves earlier.
  // After a language switch they are cached already.
  const [warm, setWarm] = useState(Boolean(resume));
  useEffect(() => {
    if (warm) return;
    const timer = window.setTimeout(
      () => setWarm(true),
      Math.max(4000, durations[rotation.index] - 10_000),
    );
    return () => window.clearTimeout(timer);
  }, [warm, durations, rotation.index]);
  const preloadFor = (isActive: boolean) => (isActive || warm ? "auto" : "none");

  return (
    <section aria-label={label} className="flex h-full min-h-0 flex-col justify-center">
      {/* Width follows the viewport height on desktop so monitor and stand
          always fit the single screen. */}
      <div className="mx-auto w-full max-w-[460px] sm:max-w-[640px] lg:max-w-[min(720px,calc((100svh-270px)*1.6))]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[42%] h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,184,173,0.12),transparent_68%)] blur-2xl"
          />

          <Link
            href={active.href}
            aria-label={active.linkLabel}
            className="group relative ml-auto block w-[90%] focus:outline-none"
          >
            <MonitorFrame className="transition group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[#181811]">
              <div ref={screenRef} className="absolute inset-0">
                {items.map((item, index) => {
                  const isActive = index === rotation.index;

                  return (
                    <div
                      key={item.slug}
                      className={`${LAYER} flex flex-col ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      <div className="flex shrink-0 items-center justify-center border-b border-black/[0.06] bg-[#f6f6f4] py-[1.1cqw]">
                        <span className="rounded-full bg-black/[0.05] px-[2.4cqw] py-[0.35cqw] text-[clamp(7px,1.5cqw,10px)] text-[#5f5f56]">
                          {item.domain}
                        </span>
                      </div>
                      <div className="relative flex-1 overflow-hidden">
                        <AutoplayVideo
                          recording={item.desktop}
                          label={item.tourLabel}
                          active={isActive}
                          preload={preloadFor(isActive)}
                          resume={resumeFor(index, "desktop")}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </MonitorFrame>
          </Link>

          {/* Same destination as the monitor, so it stays out of the tab order. */}
          <Link
            href={active.href}
            tabIndex={-1}
            aria-hidden="true"
            className="absolute bottom-[8%] left-0 z-10 block w-[22%] rotate-[-2deg] drop-shadow-[0_26px_32px_rgba(17,18,17,0.24)]"
          >
            <PhoneFrame priority>
              {/* display: contents keeps the layers positioned by the frame. */}
              <div ref={phoneRef} className="contents">
                {items.map((item, index) => {
                  const isActive = index === rotation.index;

                  return (
                    <div
                      key={item.slug}
                      className={`${LAYER} ${isActive ? "opacity-100" : "opacity-0"}`}
                    >
                      <AutoplayVideo
                        recording={item.phone}
                        active={isActive}
                        preload={preloadFor(isActive)}
                        resume={resumeFor(index, "phone")}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </PhoneFrame>
          </Link>
        </div>
      </div>
    </section>
  );
}
