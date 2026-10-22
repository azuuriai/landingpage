"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "@/i18n/navigation";

// A hairline teal ring that trails the system pointer and grows slightly
// over anything clickable, after aneshk.design but keeping the system
// pointer. Only for a real mouse: touch screens and pens see nothing, and
// neither do client drafts under /fuer/<slug>/entwurf, which carry their
// own design.
//
// The ring is centred on the pointer's drawing, not on its hotspot, so the
// state follows the cursor the browser actually shows (arrow, hand, I-beam).
export function CustomCursor() {
  const pathname = usePathname();
  const draft = pathname.includes("/entwurf") || pathname.endsWith("/bild");
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (draft) return;
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mouse.matches) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");
    if (/Windows/.test(navigator.userAgent)) root.dataset.cursorOs = "windows";

    const target = { x: -100, y: -100 };
    const trail = { x: -100, y: -100 };
    let frame = 0;
    let shown = false;

    const paint = () => {
      // The ring eases toward the pointer; with reduced motion it snaps.
      const k = still ? 1 : 0.2;
      trail.x += (target.x - trail.x) * k;
      trail.y += (target.y - trail.y) * k;
      ring.current?.style.setProperty("--x", `${trail.x}px`);
      ring.current?.style.setProperty("--y", `${trail.y}px`);
      const settled =
        Math.abs(target.x - trail.x) < 0.1 && Math.abs(target.y - trail.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(paint);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (event.target instanceof HTMLIFrameElement) return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (!shown) {
        // First move after entering: start the ring on the pointer, not
        // sliding in from the corner.
        trail.x = target.x;
        trail.y = target.y;
        shown = true;
        root.dataset.cursor = "on";
      }
      const el = event.target instanceof Element ? event.target : null;
      const shape = el ? getComputedStyle(el).cursor : "";
      root.dataset.cursorState =
        shape === "pointer" ? "hover" : shape === "text" ? "text" : "";
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      shown = false;
      root.dataset.cursor = "";
    };
    // An embedded frame (video, map, widget) keeps the pointer's moves to
    // itself, so the ring would freeze at its edge: hide it until the
    // pointer is back on the page.
    const onOver = (event: PointerEvent) => {
      if (event.target instanceof HTMLIFrameElement) onLeave();
    };
    const onDown = () => (root.dataset.cursorPress = "on");
    const onUp = () => (root.dataset.cursorPress = "");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerover", onOver);
    window.addEventListener("blur", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerover", onOver);
      window.removeEventListener("blur", onLeave);
      root.classList.remove("has-custom-cursor");
      delete root.dataset.cursor;
      delete root.dataset.cursorState;
      delete root.dataset.cursorPress;
      delete root.dataset.cursorOs;
    };
  }, [draft]);

  if (draft) return null;

  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}
