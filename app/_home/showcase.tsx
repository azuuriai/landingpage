"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AutoplayVideo } from "../_components/autoplay-video";
import { pendingLocaleSwitch, registerShowcase } from "../_components/locale-switch";
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

  // The first project loads right away; the others follow a few seconds
  // later, well before their turn, so they never compete with first paint.
  // After a language switch they are cached already.
  const [warm, setWarm] = useState(Boolean(resume));
  useEffect(() => {
    const timer = window.setTimeout(() => setWarm(true), 4000);
    return () => window.clearTimeout(timer);
  }, []);
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
            className="group relative ml-auto block w-[88%] focus:outline-none"
          >
            <div className="relative rounded-[22px] border-[8px] border-[#141514] bg-[#141514] shadow-[0_34px_90px_-20px_rgba(17,18,17,0.35)] transition group-focus-visible:ring-2 group-focus-visible:ring-[#00b8ad]/50 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-[#f2f2f0]">
              <div
                ref={screenRef}
                className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-[#fbf9f7] [container-type:inline-size]"
              >
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
            </div>
            <div className="mx-auto h-[clamp(2.5rem,7vh,4.5rem)] w-[16%] bg-gradient-to-b from-[#cfd3cc] to-[#aab1a8]" />
            <div className="mx-auto -mt-px h-[18px] w-[40%] rounded-[50%] bg-gradient-to-b from-[#d9ddd8] to-[#b7bdb4] shadow-[0_18px_40px_rgba(17,18,17,0.14)]" />
          </Link>

          {/* Same destination as the monitor, so it stays out of the tab order. */}
          <Link
            href={active.href}
            tabIndex={-1}
            aria-hidden="true"
            className="absolute bottom-[8%] left-0 z-10 block w-[22%] rotate-[-2deg] drop-shadow-[0_26px_32px_rgba(17,18,17,0.24)]"
          >
            <PhoneFrame>
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
