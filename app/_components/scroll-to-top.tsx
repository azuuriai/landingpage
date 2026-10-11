"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "@/i18n/navigation";

// Mounted in the locale layout so it also observes home <-> subpage moves.
// Next's viewport-based scrolling does not always reset the document here.
// New pages start at the top; fragment destinations and browser history
// keep Next's scrolling. A language switch remounts the locale layout, so
// it preserves the position just like the initial page load.
// Back and forward within one page (an anchor like #angebot) change no
// pathname, so they must not leave the flag set for the next real move.
export function ScrollToTop() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const restoring = useRef(false);
  const shownAt = useRef("");

  useEffect(() => {
    shownAt.current = window.location.pathname;
    const onPopState = () => {
      restoring.current = window.location.pathname !== shownAt.current;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (pathname === previous.current) return;
    previous.current = pathname;
    shownAt.current = window.location.pathname;
    if (restoring.current) {
      restoring.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
