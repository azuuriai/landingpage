import {
  APP_STORE_URL,
  caseStudyBase,
  INDEED_UNIQUE_URL,
  IOS_APP_PATH,
  projectRecordings,
  showcaseMedia,
  STUDIO_PATH,
  VER_PATH,
  VIENNA_EVENT_RADAR_URL,
} from "@/app/projects-data";
import type { CaseStudyData, ProjectData, ProjectSlug, ShowcaseEntry } from "../types";

export const projects: Record<ProjectSlug, ProjectData> = {
  "indeed-unique": {
    ...caseStudyBase["indeed-unique"],
    ...projectRecordings["indeed-unique"],
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
    links: [
      { label: "indeedunique.com öffnen", href: INDEED_UNIQUE_URL },
      { label: "Zur Redaktion dahinter", href: STUDIO_PATH, internal: true },
    ],
    metaTitle: "Case Study · Indeed Unique – Website mit CMS und Eversports",
    metaDescription:
      "Neue Website für ein Tanzstudio in Wien und Mödling: Astro, ein Sanity CMS zum Selbstpflegen, Eversports-Buchung im eigenen Design, keine Plattformkosten.",
    tourLabel: "Indeed Unique – Aufnahme der Website am Desktop",
    closing: "Du willst eine Website, die du selbst pflegen kannst?",
  },
  "vienna-event-radar": {
    ...caseStudyBase["vienna-event-radar"],
    ...projectRecordings["vienna-event-radar"],
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
      { label: "Zur Operations-App", href: caseStudyBase["operations-app"].path, internal: true },
    ],
    metaTitle: "Case Study · Vienna Event Radar – Event-Plattform für Wien",
    metaDescription:
      "Vienna Event Radar: Next.js-Plattform mit Supabase, geprüfter Event-Recherche, Admin-Freigabe, Gruppenplanung und dem Assistenten „Frag dein Radar“.",
    tourLabel: "Vienna Event Radar – Aufnahme der Website am Desktop",
    closing: "Du planst eine Plattform mit echter Produktlogik?",
  },
};

export const iosApp: CaseStudyData = {
  ...caseStudyBase["wien-event-radar-ios"],
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
    "Wien Event Radar für iOS: native SwiftUI-App mit Widgets, Live-Aktivität, Kalender, Karte und Gruppenplanung, im App Store und mit der Webplattform verbunden.",
  tourLabel: "Wien Event Radar für iOS: Entdecken, Eventdetails, Merken und Karte",
  closing: "Dein Produkt gehört aufs iPhone?",
};

// A private tool, so there is no live link: the page itself is the proof. It
// links to the platform it runs, and that case study links back.
export const operationsApp: CaseStudyData = {
  ...caseStudyBase["operations-app"],
  name: "Operations-App mit Social Studio",
  summary:
    "Die private iPhone-App, mit der ich Vienna Event Radar im Alltag betreibe: Systemstatus, Social-Media-Grafiken aus echten Inhalten, Newsletter und Startseite an einem Ort.",
  eyebrow: "Internes Werkzeug · native iOS-App",
  title: "Eine Plattform betreiben, direkt vom iPhone.",
  description:
    "Eine private iPhone-App, mit der Vienna Event Radar im Alltag läuft. Sie zeigt, ob alle Hintergrund-Jobs arbeiten, macht aus aktuellen Inhalten fertige Instagram-Grafiken, stellt den wöchentlichen Newsletter zusammen und legt fest, was oben auf der Startseite steht. Konzept, Design, App und die Schnittstellen im Backend stammen von mir.",
  facts: [
    { label: "Umfang", value: "Konzept, Design, iOS-App und Backend-Schnittstellen" },
    { label: "Technik", value: "SwiftUI, Next.js-API, Supabase" },
    { label: "Einsatz", value: "Privat, nicht im App Store" },
  ],
  links: [{ label: "Zu Vienna Event Radar", href: VER_PATH, internal: true }],
  metaTitle: "Case Study · Operations-App mit Social Studio in SwiftUI",
  metaDescription:
    "Interne iPhone-App in SwiftUI: überwacht Hintergrund-Jobs und Fehler, entwirft Instagram-Karussells und Stories, betreut Newsletter und Startseite.",
  tourLabel: "Operations-App: Monitor, Social Studio mit vier Slides und Top Picks",
  closing: "Dein Team braucht ein Werkzeug für wiederkehrende Abläufe?",
};

// The editorial studio behind indeedunique.com. Login only, so there is no
// live link: the page shows the real studio, and the website's case study
// links here.
export const indeedUniqueStudio: CaseStudyData = {
  ...caseStudyBase["indeed-unique-redaktion"],
  name: "Redaktion für Indeed Unique",
  summary:
    "Das maßgeschneiderte Sanity Studio hinter indeedunique.com: ein Menü nach Aufgaben, Bausteine mit Vorschaubild, Schutzregeln und eine Statuszeile, damit das Tanzstudio seine Website ohne Entwickler pflegt.",
  eyebrow: "Internes Werkzeug · Redaktion auf Sanity",
  title: "Eine Redaktion, die zum Studio passt.",
  description:
    "Hinter der Website von Indeed Unique steht ein Sanity Studio, das ich auf die Arbeit einer Ein-Personen-Redaktion zugeschnitten habe. Es öffnet mit den häufigsten Aufgaben, zeigt, ob die Website aktuell ist, baut neue Seiten aus 22 gestalteten Bausteinen und verhindert, dass Seiten versehentlich gelöscht oder Layouts zerstört werden. Sanity liefert Editor, Datenhaltung und Bildpipeline, die Redaktionslogik darauf stammt von mir.",
  facts: [
    { label: "Umfang", value: "Redaktionskonzept, eigene Werkzeuge im Studio, Bausteine, Betrieb" },
    { label: "Technik", value: "Sanity Studio, React, Astro, Cloudflare, GitHub Actions" },
    { label: "Einsatz", value: "Täglich beim Tanzstudio, Zugang nur für das Team" },
  ],
  links: [{ label: "Zur Website-Fallstudie", href: projects["indeed-unique"].path, internal: true }],
  metaTitle: "Case Study · Redaktion für Indeed Unique – maßgeschneidertes Sanity Studio",
  metaDescription:
    "Sanity Studio, auf ein Tanzstudio zugeschnitten: Start nach Aufgaben, Statuszeile, 22 Bausteine mit Vorschaubild, Seiten-Picker, Zuschnitt-Vorschau und Schutzregeln gegen versehentliches Löschen.",
  tourLabel:
    "Redaktion für Indeed Unique: Start, Bild mit Zuschnitt-Vorschau, Bausteine, Seiten-Picker und kursfreie Tage",
  closing: "Dein Team soll Inhalte selbst pflegen, ohne Risiko?",
};

// All case study pages, in Showcase order (sitemap).
export const caseStudies: CaseStudyData[] = [
  projects["indeed-unique"],
  projects["vienna-event-radar"],
  iosApp,
  operationsApp,
  indeedUniqueStudio,
];

// Entries on the Showcase page. The page intro says which one was client work;
// the entries themselves say what each product does.
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
    media: showcaseMedia["indeed-unique"],
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
    media: showcaseMedia["vienna-event-radar-web"],
  },
  {
    id: "vienna-event-radar-ios",
    name: "Wien Event Radar für iOS",
    summary:
      "Die native iPhone-App von Vienna Event Radar (im App Store: Wien Event Radar): Entdecken, Suchen und Planen, mit Karte, Kalender und Gruppen für gemeinsame Abende.",
    facts: [
      { label: "Funktionen", value: "Karte, Gruppen, Kalender" },
      { label: "Technik", value: "SwiftUI, optimiert für iOS 27" },
      { label: "Verfügbar", value: "Im App Store" },
    ],
    href: iosApp.path,
    live: { label: "Im App Store", href: APP_STORE_URL },
    media: showcaseMedia["vienna-event-radar-ios"],
  },
  {
    id: "operations-app",
    name: "Operations-App",
    summary:
      "Die private iPhone-App, mit der Vienna Event Radar läuft: Systemstatus, Social-Media-Grafiken aus echten Inhalten, Newsletter und Startseite an einem Ort.",
    facts: [
      { label: "Bereiche", value: "Monitor, Social Studio, Top Picks" },
      { label: "Export", value: "Instagram-Karussell und Story" },
      { label: "Technik", value: "SwiftUI + Next.js-API" },
    ],
    href: operationsApp.path,
    media: showcaseMedia["operations-app"],
  },
  {
    id: "indeed-unique-studio",
    name: "Redaktion für Indeed Unique",
    summary:
      "Das Sanity Studio hinter der Tanzstudio-Website, zugeschnitten auf eine Ein-Personen-Redaktion: Start nach Aufgaben, Bausteine mit Vorschaubild, Seiten-Picker und Schutzregeln.",
    facts: [
      { label: "Werkzeuge", value: "Start, Statuszeile, Entwürfe, Vorschau" },
      { label: "Bausteine", value: "22, mit Vorschaubild" },
      { label: "Technik", value: "Sanity Studio + React" },
    ],
    href: indeedUniqueStudio.path,
    media: showcaseMedia["indeed-unique-studio"],
  },
];
