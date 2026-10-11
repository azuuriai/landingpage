import { defineRouting } from "next-intl/routing";

// German is the home language and stays at the root (/services); English
// lives under /en (/en/services). Only the legal pages carry a translated
// slug. Nobody is redirected by browser language or cookie: visitors choose
// with the switcher, and /en links can be shared as they are.
export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "as-needed",
  localeDetection: false,
  localeCookie: false,
  // The <link rel="alternate"> tags come from the page metadata instead.
  alternateLinks: false,
  pathnames: {
    "/": "/",
    "/services": "/services",
    "/work": "/work",
    "/work/indeed-unique": "/work/indeed-unique",
    "/work/vienna-event-radar": "/work/vienna-event-radar",
    "/work/wien-event-radar-ios": "/work/wien-event-radar-ios",
    "/work/operations-app": "/work/operations-app",
    "/work/betreiber-cms": "/work/betreiber-cms",
    "/work/mission-control": "/work/mission-control",
    "/about": "/about",
    "/faq": "/faq",
    "/contact": "/contact",
    "/studios": "/studios",
    "/launch": "/launch",
    "/assistent": { de: "/assistent", en: "/assistant" },
    "/impressum": { de: "/impressum", en: "/imprint" },
    "/datenschutz": { de: "/datenschutz", en: "/privacy" },
  },
});

export type Locale = (typeof routing.locales)[number];

// Every internal link target; next-intl's Link only accepts these.
export type AppPathname = keyof typeof routing.pathnames;

export const APP_PATHNAMES = Object.keys(routing.pathnames) as AppPathname[];

export function isAppPathname(value: string): value is AppPathname {
  return Object.hasOwn(routing.pathnames, value);
}

// Pages that exist in German only: the personal preview pages for single
// studios (/fuer/<slug>, unlisted, never linked, so not in the list above).
// The language switch hides itself there, and next.config.ts sends their
// /en URLs to the German page.
export const GERMAN_ONLY_PATHS = ["/fuer"];

export function isGermanOnly(pathname: string) {
  return GERMAN_ONLY_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}
