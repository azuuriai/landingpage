import { RECORDINGS, type Recording } from "./media";

export type ProjectSlug = "indeed-unique" | "vienna-event-radar";
export type CaseStudySlug = ProjectSlug | "wien-event-radar-ios" | "operations-app";

// `internal` links stay on this site; all others open the live product.
export type ProjectLink = { label: string; href: string; internal?: boolean };

export type Fact = { label: string; value: string };

// Everything a case study page needs for its opening and metadata.
export type CaseStudyData = {
  slug: CaseStudySlug;
  path: `/work/${CaseStudySlug}`;
  name: string;
  summary: string;
  eyebrow: string;
  title: string;
  description: string;
  facts: Fact[];
  links: ProjectLink[];
  metaTitle: string;
  metaDescription: string;
  lastModified: Date;
};

// The two web projects also drive the homepage showcase (desktop + phone).
export type ProjectData = CaseStudyData & {
  slug: ProjectSlug;
  desktop: Recording;
  phone: Recording;
};

export const INDEED_UNIQUE_URL = "https://indeedunique.com";
export const VIENNA_EVENT_RADAR_URL = "https://viennaeventradar.at";
export const APP_STORE_URL = "https://apps.apple.com/at/app/wien-event-radar/id6771109823";

const IOS_APP_PATH = "/work/wien-event-radar-ios";
const VER_PATH = "/work/vienna-event-radar";

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
      "Für das Tanzstudio Indeed Unique in Wien und Mödling habe ich die Website von Grund auf neu konzipiert, gestaltet und gebaut. Das Team pflegt alle Inhalte in einem auf das Studio zugeschnittenen CMS selbst. Stundenplan, Preise und Buchung kommen über die Eversports-Anbindung direkt aus dem System, mit dem das Studio ohnehin arbeitet.",
    facts: [
      { label: "Umfang", value: "Konzept, Design, Entwicklung, CMS, Umzug und Go-live" },
      { label: "Technik", value: "Astro, Sanity, Eversports, Cloudflare" },
      { label: "Laufende Kosten", value: "Nur die Domain" },
    ],
    links: [{ label: "indeedunique.com öffnen", href: INDEED_UNIQUE_URL }],
    desktop: RECORDINGS.indeedUniqueDesktop,
    phone: RECORDINGS.indeedUniqueMobile,
    metaTitle: "Case Study · Indeed Unique – Website mit CMS und Eversports",
    metaDescription:
      "Neue Website für ein Tanzstudio in Wien und Mödling: Astro, ein zugeschnittenes Sanity CMS zum Selbstpflegen, Eversports-Buchung im eigenen Design und Hosting ohne laufende Plattformkosten.",
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
  },
  "vienna-event-radar": {
    slug: "vienna-event-radar",
    path: VER_PATH,
    name: "Vienna Event Radar",
    summary:
      "Events in Wien an einem Ort: Plattform mit geprüften Empfehlungen, Filtern, Vorschlägen für Freunde und einem Assistenten.",
    eyebrow: "Event-Plattform im Web",
    title: "Wiens Events an einem Ort.",
    description:
      "Vienna Event Radar sammelt Events in Wien, prüft sie vor der Veröffentlichung und macht sie in wenigen Klicks findbar: nach Tag, Preis und Stimmung gefiltert, mit Vorschlägen für Freunde und einem Assistenten, der passende Ideen sucht. Produkt, Design, Entwicklung und Betrieb liegen bei mir.",
    facts: [
      { label: "Umfang", value: "Produkt, Design, Entwicklung, Redaktion und Betrieb" },
      { label: "Technik", value: "Next.js, Supabase, Vercel" },
      { label: "Sprachen", value: "Deutsch und Englisch" },
    ],
    links: [
      { label: "viennaeventradar.at öffnen", href: VIENNA_EVENT_RADAR_URL },
      { label: "Zur iOS-App", href: IOS_APP_PATH, internal: true },
    ],
    desktop: RECORDINGS.viennaEventRadarDesktop,
    phone: RECORDINGS.viennaEventRadarApp,
    metaTitle: "Case Study · Vienna Event Radar – Event-Plattform für Wien",
    metaDescription:
      "Vienna Event Radar: Next.js-Plattform mit Supabase, geprüfter Event-Recherche, Admin-Freigabe, Gruppenplanung und dem Assistenten „Frag dein Radar“.",
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
  },
};

export const iosApp: CaseStudyData = {
  slug: "wien-event-radar-ios",
  path: IOS_APP_PATH,
  name: "Wien Event Radar für iOS",
  summary:
    "Native iPhone-App zu Vienna Event Radar: Entdecken, Suchen und gemeinsam planen, mit Widgets, Live-Aktivität und Kalender.",
  eyebrow: "Native iOS-App",
  title: "Wiens Events als echte iPhone-App.",
  description:
    "Die native App zu Vienna Event Radar: in SwiftUI gebaut, im App Store veröffentlicht und eng mit iOS verzahnt, von Widgets über die Live-Aktivität bis zum Kalender. Konten, Favoriten und Gruppen teilt sie mit der Webplattform.",
  facts: [
    { label: "Umfang", value: "Konzept, Design, Entwicklung und App-Store-Release" },
    { label: "Technik", value: "SwiftUI, Supabase, optimiert für iOS 27" },
    { label: "Verfügbar", value: "Im App Store" },
  ],
  links: [
    { label: "Im App Store ansehen", href: APP_STORE_URL },
    { label: "Zur Webplattform", href: VER_PATH, internal: true },
  ],
  metaTitle: "Case Study · Wien Event Radar – native iOS-App in SwiftUI",
  metaDescription:
    "Wien Event Radar für iOS: native SwiftUI-App mit Widgets, Live-Aktivität, Kalender, Karte und Gruppenplanung, im App Store und mit gemeinsamem Backend zur Webplattform.",
  lastModified: new Date("2026-09-24T00:00:00.000Z"),
};

// A private tool, so there is no live link: the page itself is the proof.
// Facts come from the radar-admin-ios repository (build 26, README and test
// suite, October 2026); the screens are its preview mode with sample data.
export const operationsApp: CaseStudyData = {
  slug: "operations-app",
  path: "/work/operations-app",
  name: "Operations-App mit Social Studio",
  summary:
    "Private iPhone-App für den Betrieb einer Content-Plattform: Systemstatus, Social-Media-Grafiken aus echten Inhalten, Newsletter und Startseite an einem Ort.",
  eyebrow: "Internes Werkzeug · native iOS-App",
  title: "Eine Plattform betreiben, direkt vom iPhone.",
  description:
    "Eine private iPhone-App, mit der eine Content-Plattform im Alltag läuft. Sie zeigt, ob alle Hintergrund-Jobs arbeiten, macht aus aktuellen Inhalten fertige Instagram-Grafiken, stellt den wöchentlichen Newsletter zusammen und legt fest, was oben auf der Startseite steht. Konzept, Design, App und die Schnittstellen im Backend stammen von mir.",
  facts: [
    { label: "Umfang", value: "Konzept, Design, iOS-App und Backend-Schnittstellen" },
    { label: "Technik", value: "SwiftUI, Next.js-API, Supabase" },
    { label: "Einsatz", value: "Privat, nicht im App Store" },
  ],
  links: [],
  metaTitle: "Case Study · Operations-App mit Social Studio in SwiftUI",
  metaDescription:
    "Interne iPhone-App in SwiftUI: Monitoring von Hintergrund-Jobs und Fehlern, halbautomatisches Social Studio für Instagram-Karussells und Stories, Newsletter-Redaktion und Startseiten-Steuerung, abgesichert mit Google-Login, Face ID und Rollenprüfung im Backend.",
  lastModified: new Date("2026-10-06T00:00:00.000Z"),
};

// All case study pages, in Showcase order (sitemap).
export const caseStudies: CaseStudyData[] = [
  projects["indeed-unique"],
  projects["vienna-event-radar"],
  iosApp,
  operationsApp,
];

// "indeedunique.com" from the live link, for browser bars and link labels.
export function projectDomain(project: CaseStudyData) {
  return new URL(project.links[0].href).host;
}

// Entries on the Showcase page. The iOS app gets its own entry next to the
// web platform it belongs to; every entry says what it does, not whose it is.
// Private tools have no `live` link.
export type ShowcaseEntry = {
  id: string;
  name: string;
  summary: string;
  facts: Fact[];
  href: string;
  live?: ProjectLink;
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
      { label: "Technik", value: "SwiftUI, optimiert für iOS 27" },
      { label: "Verfügbar", value: "Im App Store" },
    ],
    href: iosApp.path,
    live: { label: "Im App Store", href: APP_STORE_URL },
    media: { kind: "app", phone: RECORDINGS.viennaEventRadarApp },
  },
  {
    id: "operations-app",
    name: "Operations-App",
    summary:
      "Internes Werkzeug fürs iPhone: Systemstatus, Social-Media-Grafiken aus echten Inhalten, Newsletter und Startseite an einem Ort.",
    facts: [
      { label: "Bereiche", value: "Monitor, Social Studio, Top Picks" },
      { label: "Export", value: "Instagram-Karussell und Story" },
      { label: "Technik", value: "SwiftUI + Next.js-API" },
    ],
    href: operationsApp.path,
    media: { kind: "app", phone: RECORDINGS.operationsAppTour },
  },
];
