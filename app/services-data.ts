import { operationsApp, projects, showcaseEntries } from "./projects-data";

// The Leistungen page: three product forms, each backed by a project that is
// live today. The hero lists them as jump links, the page body explains them.

export type ServiceStill = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Service = {
  id: "websites" | "web-apps" | "ios-apps";
  name: string;
  teaser: string;
  title: string;
  body: string;
  includes: string[];
  // The projects that show this form working, first one leading.
  proofs: { label: string; href: string }[];
  media:
    // thumb: the hero thumbnail. With `zoomFocus` it is a close-up of that
    // point (CSS position), otherwise the image is shown as it is.
    | {
        kind: "web";
        domain: string;
        still: ServiceStill;
        thumb: { src: string; zoomFocus?: string };
      }
    | { kind: "app"; stills: [ServiceStill, ServiceStill] };
};

const [, radarWeb, radarIos] = showcaseEntries;

export const services: Service[] = [
  {
    id: "websites",
    name: "Websites",
    teaser: "Frontend, Backend, CMS und Buchung",
    title: "Websites, die du selbst in der Hand hast.",
    body: "Für Angebote, die in wenigen Sekunden verständlich und glaubwürdig sein müssen. Struktur, Text, Design und Code entstehen zusammen, damit die Seite Anfragen und Buchungen auslöst.",
    includes: [
      "CMS, in dem du Texte, Bilder und Beiträge selbst änderst",
      "Buchung und Stundenplan eingebunden, etwa über Eversports",
      "Wo es passt, laufen CMS und Hosting in kostenlosen Plänen: Dann zahlst du nur die Domain",
      "Schnell auf jedem Gerät, mit SEO-Basics",
    ],
    proofs: [{ label: "Indeed Unique ansehen", href: projects["indeed-unique"].path }],
    media: {
      kind: "web",
      domain: "indeedunique.com",
      // Hero thumbnail: treatment cards from the Aurea Clinic design concept.
      thumb: { src: "/case-studies/aurea/treatments.jpg" },
      still: {
        src: "/case-studies/indeed-unique/news-stage.jpg",
        alt: "Startseite von Indeed Unique mit dem Schaukasten zur neuen Tanzsaison",
        width: 1152,
        height: 720,
      },
    },
  },
  {
    id: "web-apps",
    name: "Web-Apps",
    teaser: "Plattformen, Portale und interne Tools",
    title: "Web-Apps mit echter Produktlogik statt loser Demo.",
    body: "Genug Substanz, um mit echten Nutzern zu lernen, ohne sich in einem übergroßen ersten Release zu verlieren. Und wenn wiederkehrende Arbeit bremst, baue ich interne Werkzeuge, die sie abnehmen.",
    includes: [
      "Login, Rollen und Datenbank",
      "Admin-Bereich und Review-Abläufe für Inhalte",
      "E-Mails, Zahlungen und Schnittstellen zu anderen Diensten",
      "AI-Funktionen wie ein Assistent, wenn sie echten Nutzen bringen",
      "Dashboards, Backoffices und Automationen für interne Abläufe",
    ],
    proofs: [
      { label: `${radarWeb.name} ansehen`, href: projects["vienna-event-radar"].path },
      // The internal-tools line above, shown working.
      { label: "Operations-App ansehen", href: operationsApp.path },
    ],
    media: {
      kind: "web",
      domain: "viennaeventradar.at",
      thumb: {
        src: "/case-studies/vienna-event-radar/radar-assistant.jpg",
        zoomFocus: "42% 22%",
      },
      still: {
        src: "/case-studies/vienna-event-radar/radar-assistant.jpg",
        alt: "Vienna Event Radar: Der Assistent „Frag dein Radar“ schlägt passende Events vor",
        width: 1152,
        height: 720,
      },
    },
  },
  {
    id: "ios-apps",
    name: "iOS-Apps",
    teaser: "Nativ, bis in den App Store",
    title: "iOS-Apps, die sich wie iOS anfühlen.",
    body: "Wenn dein Produkt aufs iPhone gehört, baue ich es nativ in SwiftUI und nicht als Website im App-Kostüm: mit Apple-typischer Navigation, System-Gesten und allem, was die Veröffentlichung braucht.",
    includes: [
      "SwiftUI mit Apple-nativer Navigation und Gesten",
      "Karten, Kalender und Teilen über die Systemfunktionen",
      "App-Store-Einreichung mit Screenshots und Vorschauvideo",
    ],
    proofs: [{ label: `${radarIos.name} ansehen`, href: radarIos.href }],
    media: {
      kind: "app",
      stills: [
        {
          src: "/case-studies/vienna-event-radar/app-discover.jpg",
          alt: "Wien Event Radar für iOS: Entdecken-Ansicht mit Empfehlungen",
          width: 540,
          height: 1170,
        },
        {
          src: "/case-studies/vienna-event-radar/app-map.jpg",
          alt: "Wien Event Radar für iOS: Events auf der Karte von Wien",
          width: 540,
          height: 1170,
        },
      ],
    },
  },
];

// "Launch inklusive" from the homepage headline, spelled out. A real
// sequence, so the steps are numbered.
export const launchSteps: { title: string; body: string }[] = [
  {
    title: "Idee schärfen",
    body: "Ziel, Zielgruppe und die eine Sache, die der erste Release können muss.",
  },
  {
    title: "Umfang und Preis",
    body: "Ein klarer Vorschlag mit Umfang, Preis und nächsten Schritten, bevor gebaut wird.",
  },
  {
    title: "Design und Bau",
    body: "Interface, Interaktion und Code entstehen zusammen, in kurzen Runden mit dir.",
  },
  {
    title: "Launch",
    body: "Domain, Hosting, SEO- und Security-Basics, CMS-Übergabe oder App-Store-Einreichung.",
  },
  {
    title: "Danach",
    body: "Fixes, Anpassungen und Weiterentwicklung. Code und Accounts gehören dir.",
  },
];
