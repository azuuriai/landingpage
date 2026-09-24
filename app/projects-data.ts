import { RECORDINGS, type Recording } from "./media";

export type ProjectSlug = "indeed-unique" | "vienna-event-radar";

export type ProjectLink = { label: string; href: string };

export type ProjectData = {
  slug: ProjectSlug;
  path: `/work/${ProjectSlug}`;
  name: string;
  summary: string;
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  links: ProjectLink[];
  desktop: Recording;
  phone: Recording;
  metaTitle: string;
  metaDescription: string;
  lastModified: Date;
};

export const INDEED_UNIQUE_URL = "https://indeedunique.com";
export const VIENNA_EVENT_RADAR_URL = "https://viennaeventradar.at";
export const APP_STORE_URL =
  "https://apps.apple.com/at/app/wien-event-radar/id6771109823";

export const projectOrder: ProjectSlug[] = ["indeed-unique", "vienna-event-radar"];

export const projects: Record<ProjectSlug, ProjectData> = {
  "indeed-unique": {
    slug: "indeed-unique",
    path: "/work/indeed-unique",
    name: "Indeed Unique",
    summary:
      "Neue Website für ein Tanzstudio in Wien und Mödling: Das Studio pflegt sie selbst, gebucht wird direkt über Eversports.",
    eyebrow: "Website mit CMS und Online-Buchung",
    title: "Eine Website, die das Tanzstudio selbst in der Hand hat.",
    description:
      "Indeed Unique unterrichtet in Wien und Mödling. Die bisherige Jimdo-Seite habe ich durch eine schnelle, bewegte Website ersetzt: Texte, Bilder, Kurse und Team pflegt das Studio selbst, Stundenplan, Preise und Buchung kommen direkt aus Eversports.",
    chips: ["Live", "Astro", "Sanity CMS", "Eversports", "Cloudflare"],
    links: [{ label: "indeedunique.com öffnen", href: INDEED_UNIQUE_URL }],
    desktop: RECORDINGS.indeedUniqueDesktop,
    phone: RECORDINGS.indeedUniqueMobile,
    metaTitle: "Case Study · Indeed Unique – Website mit CMS und Eversports",
    metaDescription:
      "Relaunch für ein Tanzstudio in Wien und Mödling: Astro, Sanity CMS zum Selbstpflegen, Eversports-Buchung, Animationen und Hosting ohne laufende Plattformkosten.",
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
  },
  "vienna-event-radar": {
    slug: "vienna-event-radar",
    path: "/work/vienna-event-radar",
    name: "Vienna Event Radar",
    summary:
      "Events in Wien an einem Ort: Webplattform mit Recherche- und Review-Workflow und native iOS-App im App Store.",
    eyebrow: "Event-Plattform im Web und als iOS-App",
    title: "Vom Datenfluss bis zur nativen iOS-App.",
    description:
      "Vienna Event Radar verbindet öffentliche Web-Plattform, strukturierte Recherche und Review, Supabase-Backend und eine native SwiftUI-App. Hier zeige ich Rolle, Entscheidungen und technische Grenzen.",
    chips: ["Web live", "App Store", "Next.js + Supabase", "SwiftUI"],
    links: [
      { label: "Webprodukt öffnen", href: VIENNA_EVENT_RADAR_URL },
      { label: "Im App Store ansehen", href: APP_STORE_URL },
    ],
    desktop: RECORDINGS.viennaEventRadarDesktop,
    phone: RECORDINGS.viennaEventRadarApp,
    metaTitle: "Case Study · Vienna Event Radar von Web bis App Store",
    metaDescription:
      "Vienna Event Radar als belegbare Product-Builder-Case-Study: Next.js, Supabase, AI-Research, Admin-Review, Tests und native SwiftUI-App.",
    lastModified: new Date("2026-08-12T00:00:00.000Z"),
  },
};

// "indeedunique.com" from the live link, for browser bars and link labels.
export function projectDomain(project: ProjectData) {
  return new URL(project.links[0].href).host;
}

// Entries on the Showcase page. The iOS app gets its own entry next to the
// web platform it belongs to; every entry says what it does, not whose it is.
export type ShowcaseEntry = {
  id: string;
  name: string;
  summary: string;
  facts: { label: string; value: string }[];
  href: string;
  live: ProjectLink;
  media:
    | { kind: "web"; domain: string; desktop: Recording; phone?: Recording }
    | { kind: "app"; phone: Recording };
};

export const showcaseEntries: ShowcaseEntry[] = [
  {
    id: "indeed-unique",
    name: "Indeed Unique",
    summary:
      "Studio-Website mit eigenem CMS: Das Team pflegt Inhalte selbst, Kurse werden direkt über Eversports gebucht.",
    facts: [
      { label: "Redaktion", value: "Selbst pflegbar in Sanity" },
      { label: "Buchung", value: "Eversports integriert" },
      { label: "Betrieb", value: "Keine Kosten für CMS und Hosting" },
    ],
    href: projects["indeed-unique"].path,
    live: { label: "indeedunique.com", href: INDEED_UNIQUE_URL },
    media: {
      kind: "web",
      domain: "indeedunique.com",
      desktop: RECORDINGS.indeedUniqueDesktop,
      phone: RECORDINGS.indeedUniqueMobile,
    },
  },
  {
    id: "vienna-event-radar-web",
    name: "Vienna Event Radar",
    summary:
      "Event-Plattform mit kuratierten Empfehlungen, Filtern, Teilen und einem AI-Assistenten, der passende Ideen vorschlägt.",
    facts: [
      { label: "Inhalte", value: "AI-Recherche mit Review" },
      { label: "Assistent", value: "Frag dein Radar" },
      { label: "Technik", value: "Next.js + Supabase" },
    ],
    href: projects["vienna-event-radar"].path,
    live: { label: "viennaeventradar.at", href: VIENNA_EVENT_RADAR_URL },
    media: {
      kind: "web",
      domain: "viennaeventradar.at",
      desktop: RECORDINGS.viennaEventRadarDesktop,
    },
  },
  {
    id: "vienna-event-radar-ios",
    name: "Wien Event Radar für iOS",
    summary:
      "Native iPhone-App zum Entdecken, Suchen und Planen: mit Karte, Kalender und Gruppen für gemeinsame Abende.",
    facts: [
      { label: "Funktionen", value: "Karte, Gruppen, Kalender" },
      { label: "Technik", value: "SwiftUI, iOS 27" },
      { label: "Verfügbar", value: "Im App Store" },
    ],
    href: `${projects["vienna-event-radar"].path}#ios`,
    live: { label: "Im App Store", href: APP_STORE_URL },
    media: { kind: "app", phone: RECORDINGS.viennaEventRadarApp },
  },
];
