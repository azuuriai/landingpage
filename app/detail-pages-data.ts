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

const lastModified = new Date("2026-09-24T00:00:00.000Z");

export const detailPageNavOrder: DetailSlug[] = [
  "services",
  "work",
  "about",
  "faq",
  "contact",
];

export const detailPages: DetailPageData[] = [
  {
    slug: "services",
    path: "/services",
    navLabel: "Leistungen",
    eyebrow: "Leistungen",
    title: "Was ich für dich baue.",
    description:
      "Ich helfe Gründern und kleinen Teams, aus einer Idee ein benutzbares Produkt zu machen: sichtbar im Web, testbar mit echten Nutzern und bei Bedarf nativ auf dem iPhone.",
    metaTitle: "Leistungen · Websites, Web-Apps und iOS-Apps",
    metaDescription:
      "Websites zum Selbstpflegen, Web-Apps mit echter Produktlogik und native iOS-Apps aus einer Hand. Von der ersten Idee bis zum Launch.",
    // The three product forms stand in the hero instead (app/services-data.ts).
    chips: [],
    lastModified,
    sections: [],
  },
  {
    slug: "work",
    path: "/work",
    navLabel: "Showcase",
    eyebrow: "Showcase",
    title: "Was ich baue – live im Einsatz.",
    description:
      "Websites, Web-Apps und native iOS-Apps – durchdacht, gestaltet und bis zum Launch gebracht. Jedes Projekt hier ist live und öffentlich nutzbar.",
    metaTitle: "Showcase · Websites, Web-Apps und iOS-Apps",
    metaDescription:
      "Live-Projekte von Lukas Kaffer: die Website des Tanzstudios Indeed Unique mit Sanity CMS und Eversports sowie Vienna Event Radar im Web und als native iOS-App.",
    chips: ["Websites", "Web-Apps", "iOS-Apps"],
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
    sections: [],
  },
  {
    slug: "about",
    path: "/about",
    navLabel: "Über mich",
    eyebrow: "Mein Weg",
    title: "Vom Klassenzimmer zu Produkten.",
    description:
      "SmartCash, Bildung und eigene Produkte: drei Stationen, die prägen, wie ich heute Probleme sortiere, erkläre und umsetze.",
    metaTitle: "Über Lukas Kaffer · Bildung, Community und digitale Produkte",
    metaDescription:
      "Von SmartCash Outreach und Support über Bildung bis zu Web- und iOS-Produkten: der Weg von Lukas Kaffer zum Product Builder.",
    chips: ["Wien, AT", "SmartCash 2017–2020", "Bildung", "Web + iOS"],
    lastModified,
    image: {
      src: "/profile/lukas-standing.jpg",
      alt: "Lukas Kaffer",
      width: 800,
      height: 1200,
    },
    sections: [
      {
        label: "2017–2020",
        title: "Outreach und Tech-Support in einer dezentralen Community.",
        body: "Von 2017 bis 2020 war ich im Outreach- und Support-Team von SmartCash aktiv, einem community-gesteuerten Blockchain-Projekt.",
      },
      {
        label: "Outreach",
        title: "Ein Projekt auch außerhalb des Internets vertreten.",
        body: "Ich vertrat SmartCash auf verschiedenen Veranstaltungen, etwa bei Crypto World Zug und AnarchaPortugal in Porto, und hielt dort unter anderem Vorträge über unser Projekt.",
      },
      {
        label: "Bildung",
        title: "Zuhören, einordnen und verständlich erklären.",
        body: "Aus der Bildung bringe ich die Fähigkeit mit, unterschiedliche Vorkenntnisse zu erkennen, komplexe Inhalte zu strukturieren und Entscheidungen nachvollziehbar zu machen. In der Produktarbeit wird daraus klares Scoping.",
      },
      {
        label: "Heute",
        title: "Aus einer groben Idee wird eine Version, die man wirklich benutzen kann.",
        body: "Heute verbinde ich diesen Hintergrund mit Produktdenken, UX und AI-assisted Development. Claude Code und ChatGPT erhöhen mein Tempo; Verantwortung für Produktlogik, Datenfluss, Prüfung und Auslieferung bleibt bei mir.",
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
    chips: ["Fester Preis", "Code gehört dir", "Direkt mit mir"],
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
        question: "Kann ich die Website danach selbst bearbeiten?",
        answer:
          "Ja, wenn du das willst. Ich richte dir ein CMS ein, in dem du Texte, Bilder, Beiträge und Listen selbst änderst, während Layout und Design im Code geschützt bleiben. Bei Indeed Unique läuft das mit Sanity im kostenlosen Plan.",
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
