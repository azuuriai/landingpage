import { CONTACT_EMAIL } from "./seo";

export type DetailSlug = "services" | "work" | "about" | "faq" | "contact";

export type DetailSection = {
  label: string;
  title: string;
  body: string;
};

export type DetailFaq = {
  question: string;
  answer: string;
};

export type DetailPageData = {
  slug: DetailSlug;
  path: `/${DetailSlug}`;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  chips: string[];
  lastModified: Date;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  sections: DetailSection[];
  faq?: DetailFaq[];
};

const lastModified = new Date("2026-05-25T00:00:00.000Z");

export const detailPages: DetailPageData[] = [
  {
    slug: "services",
    path: "/services",
    navLabel: "Leistungen",
    eyebrow: "Leistungen",
    title: "Websites, MVPs und native iOS Apps, die wirklich live gehen.",
    description:
      "Ich helfe Gründern und kleinen Teams, aus einer Idee ein benutzbares Produkt zu machen: sichtbar im Web, testbar mit echten Nutzern und bei Bedarf nativ auf dem iPhone.",
    metaTitle: "Leistungen · Websites, MVPs und iOS Apps",
    metaDescription:
      "Websites, MVPs, Backend-Logik und native iOS Apps aus einer Hand. Von der ersten Idee bis zum Launch.",
    chips: ["Websites", "MVPs", "Backend", "SwiftUI"],
    lastModified,
    sections: [
      {
        label: "Sichtbar",
        title: "Eine Website, die in wenigen Sekunden klar macht, warum es dich gibt.",
        body: "Landing Pages und Websites für Angebote, die verständlich, glaubwürdig und schnell erfassbar sein müssen. Struktur, Text, Interface und Umsetzung entstehen zusammen, damit die Seite nicht nur schön aussieht, sondern Anfragen auslöst.",
      },
      {
        label: "Testbar",
        title: "Ein MVP mit echter Produktlogik statt einer losen Demo.",
        body: "Login, Datenbank, Rollen, Admin-Bereiche, E-Mails, Zahlungs- oder Integrationslogik: genug Substanz, um mit echten Nutzern zu lernen, ohne sich in einem übergroßen ersten Release zu verlieren.",
      },
      {
        label: "Nativ",
        title: "Wenn dein Produkt aufs iPhone gehört, baue ich es als iOS App.",
        body: "SwiftUI, Apple-native Navigation, System-Gesten, App-Store-Vorbereitung und ein Interface, das sich nicht wie eine Website im App-Kostüm anfühlt.",
      },
      {
        label: "Ruhiger",
        title: "Interne Tools und Automationen, wenn wiederkehrende Arbeit bremst.",
        body: "Dashboards, kleine Backoffices, API-Verbindungen und Workflows, die wiederkehrende Aufgaben aus dem Alltag nehmen und Teams weniger in Tabellen festhalten.",
      },
    ],
  },
  {
    slug: "work",
    path: "/work",
    navLabel: "Showcase",
    eyebrow: "Showcase",
    title: "Vienna Event Radar zeigt, wie aus einer Idee ein laufendes Produkt wird.",
    description:
      "Web-Plattform, Admin-Workflow, KI-gestützte Recherche und native iOS App: ein Produkt, das online ist, im App Store liegt und weiterentwickelt wird.",
    metaTitle: "Showcase · Vienna Event Radar und iOS App",
    metaDescription:
      "Ein Blick in Vienna Event Radar: Next.js Webprodukt, Supabase Backend, KI-Research und native SwiftUI App im App Store.",
    chips: ["Live Web", "App Store", "Next.js", "SwiftUI"],
    lastModified,
    image: {
      src: "/case-studies/vienna-web-desktop.png",
      alt: "Vienna Event Radar Webprodukt auf Desktop",
      width: 2400,
      height: 1500,
    },
    sections: [
      {
        label: "Idee",
        title: "Events in Wien an einem Ort statt verstreut über zwanzig Quellen.",
        body: "Vienna Event Radar begann als eigenes Produktproblem: Was läuft in Wien, was lohnt sich, und wie kann man das ohne endloses Suchen sichtbar machen?",
      },
      {
        label: "System",
        title: "Recherche, Review, Datenbank und Veröffentlichung in einem Workflow.",
        body: "Die Plattform kombiniert KI-gestützte Recherche, strukturierte Admin-Prüfung, Auth, Datenmodell, öffentliche Webansicht und ein gemeinsames Backend für Web und App.",
      },
      {
        label: "iOS",
        title: "Dieselbe Produktidee, aber nativ für das iPhone gebaut.",
        body: "Die App nutzt SwiftUI, Apple-nahe Interaktionsmuster, schnelle Navigation und Funktionen, die auf dem Gerät zu Hause sind: Merken, Teilen, Kalender und persönliche Radar-Ansichten.",
      },
    ],
  },
  {
    slug: "about",
    path: "/about",
    navLabel: "Über mich",
    eyebrow: "Lukas Kaffer",
    title: "Ich verbinde Produktdenken, Interface-Design und Code in einer Hand.",
    description:
      "Ich arbeite solo aus Wien. Das heißt: kurze Wege, direkte Entscheidungen und keine Übergaben zwischen Strategie, Design und Entwicklung.",
    metaTitle: "Über Lukas Kaffer · Web- und iOS-Produktentwicklung",
    metaDescription:
      "Lukas Kaffer baut Websites, Webprodukte und native iOS Apps aus Wien: Strategie, Design und Code aus einer Hand.",
    chips: ["Vienna, AT", "Solo", "Web + iOS", "Launch-Fokus"],
    lastModified,
    image: {
      src: "/profile/lukas-standing.jpg",
      alt: "Lukas Kaffer",
      width: 800,
      height: 1200,
    },
    sections: [
      {
        label: "Arbeitsweise",
        title: "Erst die Produktform, dann die Umsetzung.",
        body: "Ich schärfe zuerst, was die Seite oder App leisten muss: Zielgruppe, wichtigste Aktion, Kernworkflow und das kleinste sinnvolle Release. Danach wird gebaut.",
      },
      {
        label: "Warum solo",
        title: "Weniger Übergaben, mehr Zusammenhang.",
        body: "Wenn Konzept, Interface und Code in einem Kopf bleiben, gehen weniger Details verloren. Entscheidungen passieren schneller, und das Ergebnis fühlt sich eher wie ein Produkt an als wie zusammengesetzte Einzelteile.",
      },
      {
        label: "Beweis",
        title: "Eigene Produkte statt nur schöne Mockups.",
        body: "Vienna Event Radar ist mein eigener Prüfstein: Idee, Design, Backend, Web, iOS App und Launch. Ein Produkt, das installiert und benutzt werden kann.",
      },
    ],
  },
  {
    slug: "faq",
    path: "/faq",
    navLabel: "FAQ",
    eyebrow: "Gut zu wissen",
    title: "Fragen vor dem Projektstart.",
    description:
      "Kurz beantwortet: Kosten, Dauer, iOS, Design, Launch und was passiert, wenn du nur mit einer groben Idee kommst.",
    metaTitle: "FAQ · Kosten, Dauer, iOS Apps und Launch",
    metaDescription:
      "Antworten zu Projektkosten, Dauer, nativer iOS Entwicklung, Design, Launch und Zusammenarbeit mit Lukas Kaffer.",
    chips: ["Festpreis", "Kein Lock-in", "Direktkontakt"],
    lastModified,
    sections: [],
    faq: [
      {
        question: "Was kostet ein Projekt und wie lange dauert es?",
        answer:
          "Beides hängt vom Umfang ab. Nach einem kurzen, kostenlosen Erstgespräch bekommst du einen klaren Festpreis für einen klar definierten Umfang. Weil alles in einer Hand bleibt, bewegt sich das Projekt meist schneller als klassische Agenturprozesse.",
      },
      {
        question: "Baust du native iOS Apps?",
        answer:
          "Ja. Native iOS Apps in SwiftUI, von der Idee bis zum echten App-Store-Release. Wenn dein Produkt aufs iPhone gehört, baue ich es nativ und nicht als verpackte Website.",
      },
      {
        question: "Entwirfst du auch das Design?",
        answer:
          "Ja. Interface, Interaktion und Code entstehen zusammen. Du brauchst nicht zwingend ein separates Design-Team, wenn der Scope zu meiner Arbeitsweise passt.",
      },
      {
        question: "Was passiert nach dem Launch?",
        answer:
          "Du wirst nach dem Go-live nicht allein gelassen. Launch umfasst die SEO- und Security-Basics; danach bin ich für Fixes, Anpassungen und Weiterentwicklung verfügbar. Code und Accounts gehören dir.",
      },
      {
        question: "Was, wenn ich nur eine grobe Idee habe?",
        answer:
          "Das ist oft der beste Startpunkt. Der erste Schritt ist dann nicht direkt Entwicklung, sondern Schärfung: Ziel, Zielgruppe, Kernfunktion und ein sinnvoller erster Umfang.",
      },
    ],
  },
  {
    slug: "contact",
    path: "/contact",
    navLabel: "Kontakt",
    eyebrow: "Kontakt",
    title: "Erzähl mir, was du bauen willst.",
    description:
      "Eine grobe Idee reicht. Schreib mir, was entstehen soll, für wen es ist und wo es gerade steckt. Ich antworte direkt persönlich.",
    metaTitle: "Kontakt · Projektidee an Lukas Kaffer schicken",
    metaDescription:
      `Schreib an ${CONTACT_EMAIL}, wenn du eine Website, ein MVP oder eine native iOS App bauen willst.`,
    chips: ["Kostenloses Erstgespräch", CONTACT_EMAIL, "Vienna, AT"],
    lastModified,
    image: {
      src: "/profile/lukas-seated.jpg",
      alt: "Lukas Kaffer sitzend",
      width: 733,
      height: 1100,
    },
    sections: [
      {
        label: "Guter Start",
        title: "Drei Sätze reichen für die erste Einschätzung.",
        body: "Was willst du launchen? Für wen ist es? Was fehlt noch, damit es live gehen kann? Daraus kann ich meistens schon ableiten, ob und wie ich helfen kann.",
      },
      {
        label: "Ablauf",
        title: "Erst prüfen, dann klar abgrenzen.",
        body: "Wenn es passt, folgt ein kurzes Gespräch. Danach bekommst du einen klaren Vorschlag mit Umfang, Preis und nächstem Schritt.",
      },
    ],
  },
];

export const detailPageMap = Object.fromEntries(
  detailPages.map((page) => [page.slug, page]),
) as Record<DetailSlug, DetailPageData>;
