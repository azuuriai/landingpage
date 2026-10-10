"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { ShowcaseState } from "../_components/locale-switch";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Rotate only while the page is visible and the visitor has not asked for
// less motion. Server render and first paint: no rotation.
function subscribe(onChange: () => void) {
  const motion = window.matchMedia(REDUCED_MOTION);
  motion.addEventListener("change", onChange);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    motion.removeEventListener("change", onChange);
    document.removeEventListener("visibilitychange", onChange);
  };
}

const canRotateNow = () =>
  !window.matchMedia(REDUCED_MOTION).matches && document.visibilityState === "visible";

/**
 * Quietly cycles the showcase through its projects; each stays on screen for
 * `durations[index]` ms — exactly one play of its recordings — so the loop
 * reads A, B, A, B… Deliberately not paused on hover: a resting mouse would
 * otherwise keep one project looping indefinitely. `resume` continues a turn
 * that began on the page before a language switch.
 */
export function useShowcaseRotation(durations: number[], resume?: ShowcaseState) {
  const count = durations.length;
  const [index, setIndex] = useState(resume && resume.index < count ? resume.index : 0);
  // Time the resumed turn has already been on screen; only its rest is left.
  const elapsedRef = useRef(resume ? resume.time * 1000 : 0);
  const canRotate = useSyncExternalStore(subscribe, canRotateNow, () => false);

  useEffect(() => {
    if (!canRotate || count < 2) return;
    const timer = window.setTimeout(
      () => {
        elapsedRef.current = 0;
        setIndex((value) => (value + 1) % count);
      },
      Math.max(0, durations[index] - elapsedRef.current),
    );
    return () => window.clearTimeout(timer);
  }, [canRotate, count, durations, index]);

  return { index };
}
