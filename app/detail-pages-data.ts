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

const lastModified = new Date("2026-08-11T00:00:00.000Z");

export const detailPages: DetailPageData[] = [
  {
    slug: "services",
    path: "/services",
    navLabel: "Leistungen",
    eyebrow: "Was ich für dich baue",
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
    navLabel: "Case Study",
    eyebrow: "Vienna Event Radar · Live Case",
    title: "Vom Datenfluss bis zur nativen iOS-App – als Live-Case.",
    description:
      "Vienna Event Radar verbindet öffentliche Web-Plattform, strukturierte Recherche und Review, Supabase-Backend und eine native SwiftUI-App. Hier zeige ich Rolle, Entscheidungen und technische Grenzen.",
    metaTitle: "Case Study · Vienna Event Radar von Web bis App Store",
    metaDescription:
      "Vienna Event Radar als belegbare Product-Builder-Case-Study: Next.js, Supabase, AI-Research, Admin-Review, Tests und native SwiftUI-App.",
    chips: ["Web live", "App Store", "Next.js + Supabase", "SwiftUI"],
    lastModified,
    image: {
      src: "/case-studies/vienna-web-desktop.png",
      alt: "Vienna Event Radar Webprodukt auf Desktop",
      width: 2400,
      height: 1500,
    },
    sections: [
      {
        label: "Problem",
        title: "Eine kurze, brauchbare Auswahl statt dutzender Tabs und Eventlisten.",
        body: "Vienna Event Radar begann mit einer konkreten Produktfrage: Wie werden aktuelle Events in Wien schnell auffindbar, ohne Menschen mit einer weiteren unübersichtlichen Massenliste zu überfordern?",
      },
      {
        label: "Verantwortung",
        title: "Scope, UX, Datenverträge und Auslieferung zusammenhalten.",
        body: "Mein Beitrag reicht von Problemdefinition und Informationsarchitektur über Supabase-Datenmodell, Research- und Review-Workflow bis zu Tests, Monitoring, Web-Deployment und App-Store-Veröffentlichung.",
      },
      {
        label: "Arbeitsweise",
        title: "AI-assisted entwickeln, Entscheidungen selbst verantworten.",
        body: "Claude Code und ChatGPT beschleunigen Recherche, Umsetzung und Iteration. Produktlogik, Architekturentscheidungen, Prüfung und Veröffentlichung bleiben in meiner Verantwortung.",
      },
    ],
  },
  {
    slug: "about",
    path: "/about",
    navLabel: "Über mich",
    eyebrow: "Lehrer · AI-native Product Builder",
    title: "Mein Bildungshintergrund prägt, wie ich Produkte baue.",
    description:
      "Mein Hintergrund liegt in Bildung und Vermittlung. Heute verbinde ich diese Stärke mit Produktdenken, UX und AI-assisted Development für Web- und iOS-Produkte.",
    metaTitle: "Über Lukas Kaffer · Lehrer und AI-native Product Builder",
    metaDescription:
      "Lukas Kaffer verbindet Bildungshintergrund, Produktdenken, klare Kommunikation und AI-assisted Development mit Next.js, Supabase und SwiftUI.",
    chips: ["Wien, AT", "Bildung + Produkt", "Web + iOS", "AI-assisted"],
    lastModified,
    image: {
      src: "/profile/lukas-standing.jpg",
      alt: "Lukas Kaffer",
      width: 800,
      height: 1200,
    },
    sections: [
      {
        label: "Ausgangspunkt",
        title: "Verstehen und vermitteln, bevor gebaut wird.",
        body: "Aus der Bildung bringe ich die Fähigkeit mit, unterschiedliche Vorkenntnisse zu erkennen, komplexe Inhalte zu strukturieren und Entscheidungen verständlich zu machen. Im Produktkontext wird daraus klares Scoping.",
      },
      {
        label: "Produktarbeit",
        title: "Erst Zielgruppe und Kernworkflow, dann der kleinste sinnvolle Release.",
        body: "Ich reduziere grobe Ideen auf testbare Annahmen, entscheide bewusst über Scope und Datenfluss und baue anschließend eine Version, die sich tatsächlich benutzen und prüfen lässt.",
      },
      {
        label: "AI-assisted",
        title: "Werkzeuge erhöhen das Tempo. Verantwortung bleibt bei mir.",
        body: "Claude Code und ChatGPT helfen beim Erkunden, Implementieren und Gegenprüfen. Ich übernehme die Verantwortung für Produktlogik, Architekturentscheidungen, Tests, Datenschutzabwägungen und Deployment.",
      },
      {
        label: "Beleg",
        title: "Vienna Event Radar läuft im Web und nativ auf dem iPhone.",
        body: "Der wichtigste Prüfstein ist ein öffentlich nutzbares Produkt mit Next.js-Webplattform, Supabase-Backend, Research- und Admin-Workflow, SwiftUI-App, Tests und laufendem Betrieb.",
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
          "Beides hängt vom Umfang ab. Nach einem kurzen Erstgespräch grenze ich Ziel, Kernworkflow und einen realistischen ersten Release ab. Darauf basiert ein klarer Vorschlag mit Umfang, Preis und nächsten Schritten.",
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
    eyebrow: "Lass uns reden",
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
