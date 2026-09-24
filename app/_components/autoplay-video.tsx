"use client";

import { useEffect, useRef } from "react";
import type { Recording } from "../media";

// Muted, looping product recording. Playback is driven here instead of by the
// autoPlay attribute so the video only runs while it is on screen, never runs
// for visitors who prefer reduced motion (they see the poster), and — when
// several recordings share one screen — only the `active` one plays. Becoming
// active restarts it, so each turn in the showcase starts at the beginning.
export function AutoplayVideo({
  recording,
  label,
  active = true,
  preload = "metadata",
  className,
}: {
  recording: Recording;
  label?: string;
  active?: boolean;
  preload?: "auto" | "metadata" | "none";
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const activeRef = useRef(active);
  const syncRef = useRef<() => void>(() => undefined);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // React does not reliably reflect `muted` to the DOM, and browsers only
    // allow unprompted playback for muted media.
    video.muted = true;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let onScreen = false;

    const sync = () => {
      if (activeRef.current && onScreen && !reducedMotion.matches) {
        video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };
    syncRef.current = sync;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    reducedMotion.addEventListener("change", sync);
    video.addEventListener("canplay", sync);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", sync);
      video.removeEventListener("canplay", sync);
    };
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video || activeRef.current === active) return;
    activeRef.current = active;
    if (active) video.currentTime = 0;
    syncRef.current();
  }, [active]);

  return (
    <video
      ref={ref}
      className={className}
      src={recording.src}
      poster={recording.poster}
      preload={preload}
      muted
      loop
      playsInline
      disablePictureInPicture
      aria-label={label}
      aria-hidden={label && active ? undefined : true}
    />
  );
}
