import type { Locale } from "@/i18n/routing";

// A language switch replaces the whole page: the locale is the top route
// segment, so React mounts everything below it anew. What the visitor saw
// before the click is handed over here, so the new page can carry on instead
// of starting from scratch: no entrance animations, and the showcase resumes
// the project and the spot in its recording where the old page left off.
// Module state, because it has to outlive the old page's components.

// `time` in seconds; the frames are stills of both screens at that moment,
// shown until the new recordings have caught up.
export type ShowcaseState = {
  index: number;
  time: number;
  frames: { desktop?: string; phone?: string };
};

type PendingSwitch = { locale: Locale; showcase?: ShowcaseState };

let pending: PendingSwitch | null = null;
let readShowcase: (() => ShowcaseState) | null = null;
let fallback: number | undefined;

const STYLE_ID = "locale-switch";
// Finished at once rather than switched off: removing the rule afterwards
// keeps the animations finished instead of starting them again.
const SKIP_ENTRANCE =
  ".rise { animation-duration: 0s !important; animation-delay: 0s !important; }";

function clear() {
  pending = null;
  window.clearTimeout(fallback);
  document.getElementById(STYLE_ID)?.remove();
}

// The showcase reports its state while it is on screen.
export function registerShowcase(read: () => ShowcaseState) {
  readShowcase = read;
  return () => {
    if (readShowcase === read) readShowcase = null;
  };
}

// Called on the click, while the old page is still mounted.
export function beginLocaleSwitch(locale: Locale) {
  pending = { locale, showcase: readShowcase?.() };

  // React resets the attributes of <html> when the page is replaced, but
  // leaves added elements in <head> alone, so the rule goes there.
  if (!document.getElementById(STYLE_ID)) {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = SKIP_ENTRANCE;
    document.head.append(style);
  }

  // In case the navigation never completes.
  window.clearTimeout(fallback);
  fallback = window.setTimeout(clear, 10_000);
}

// What the old page handed over, if this page replaces it.
export function pendingLocaleSwitch(locale: Locale) {
  return pending?.locale === locale ? pending : null;
}

// Called once the new page is mounted. The short delay outlasts the longest
// entrance animation, so lifting the rule cannot replay any of them.
export function finishLocaleSwitch(locale: Locale) {
  if (pending?.locale !== locale) return;
  window.clearTimeout(fallback);
  fallback = window.setTimeout(clear, 1_000);
}
