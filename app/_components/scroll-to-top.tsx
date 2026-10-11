"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "@/i18n/navigation";

// Moving between pages inside the shared (pages) layout starts at the top.
// Next only scrolls on its own when the first element of the new page is
// out of view, and here that element is the invisible JSON-LD script, so
// coming from the bottom of a long page the old scroll offset stayed
// (visible on phones, where the hero is taller than the screen). Back and
// forward keep the browser's own restored position; the language switch
// keeps the internal pathname and therefore the position as well.
export function ScrollToTop() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const restoring = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      restoring.current = true;
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (pathname === previous.current) return;
    previous.current = pathname;
    if (restoring.current) {
      restoring.current = false;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
