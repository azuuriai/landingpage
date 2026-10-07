import { detailPageBase, PORTRAITS } from "@/app/detail-pages-data";
import { CONTACT_EMAIL } from "@/app/site";
import type { DetailPageData } from "../types";

export const detailPages: DetailPageData[] = [
  {
    ...detailPageBase.services,
    navLabel: "Leistungen",
    eyebrow: "Leistungen",
    title: "Was ich für dich baue.",
    description:
      "Ich helfe Gründern und kleinen Teams, aus einer Idee ein benutzbares Produkt zu machen: sichtbar im Web, testbar mit echten Nutzern und bei Bedarf nativ auf dem iPhone.",
    metaTitle: "Leistungen · Websites, Web-Apps und iOS-Apps",
    metaDescription:
      "Websites zum Selbstpflegen, Web-Apps mit echter Produktlogik und native iOS-Apps aus einer Hand. Von der ersten Idee bis zum Launch.",
    // The three product forms stand in the hero instead (services.ts).
    chips: [],
    sections: [],
    closing: "Klingt nach deinem Projekt? Dann lass es uns angehen.",
  },
  {
    ...detailPageBase.work,
    navLabel: "Showcase",
    eyebrow: "Showcase",
    title: "Was ich baue – live im Einsatz.",
    description:
      "Websites, Web-Apps und native iOS-Apps – durchdacht, gestaltet und bis zum Launch gebracht. Jedes Projekt hier ist im Einsatz, drei davon öffentlich nutzbar.",
    metaTitle: "Showcase · Websites, Web-Apps und iOS-Apps",
    metaDescription:
      "Projekte von Lukas Kaffer: die Website des Tanzstudios Indeed Unique mit Sanity CMS und Eversports, Vienna Event Radar im Web und als native iOS-App sowie eine interne Operations-App mit Social Studio.",
    chips: ["Websites", "Web-Apps", "iOS-Apps"],
    sections: [],
    closing: "Du willst etwas Ähnliches bauen? Schreib mir.",
  },
  {
    ...detailPageBase.about,
    navLabel: "Über mich",
    eyebrow: "Mein Weg",
    title: "Vom Klassenzimmer zu Produkten.",
    description:
      "SmartCash, Bildung und eigene Produkte: drei Stationen, die prägen, wie ich heute Probleme sortiere, erkläre und umsetze.",
    metaTitle: "Über Lukas Kaffer · Bildung, Community und digitale Produkte",
    metaDescription:
      "Von SmartCash Outreach und Support über Bildung bis zu Web- und iOS-Produkten: der Weg von Lukas Kaffer zum Product Builder.",
    chips: ["Wien, AT", "SmartCash 2017–2020", "Bildung", "Web + iOS"],
    image: { ...PORTRAITS.standing, alt: "Lukas Kaffer" },
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
    closing: "Klingt nach einer Zusammenarbeit? Schreib mir.",
  },
  {
    ...detailPageBase.faq,
    navLabel: "FAQ",
    eyebrow: "Gut zu wissen",
    title: "Fragen vor dem Projektstart.",
    description:
      "Kurz beantwortet: Kosten, Dauer, iOS, Design, Launch und was passiert, wenn du nur mit einer groben Idee kommst.",
    metaTitle: "FAQ · Kosten, Dauer, iOS Apps und Launch",
    metaDescription:
      "Antworten zu Projektkosten, Dauer, nativer iOS Entwicklung, Design, Launch und Zusammenarbeit mit Lukas Kaffer.",
    chips: ["Fester Preis", "Code gehört dir", "Direkt mit mir"],
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
    closing: "Frage war nicht dabei? Frag mich direkt.",
  },
  {
    ...detailPageBase.contact,
    navLabel: "Kontakt",
    eyebrow: "Lass uns reden",
    title: "Erzähl mir, was du bauen willst.",
    description:
      "Eine grobe Idee reicht. Schreib mir, was entstehen soll, für wen es ist und wo es gerade steckt. Ich antworte direkt persönlich.",
    metaTitle: "Kontakt · Projektidee an Lukas Kaffer schicken",
    metaDescription: `Schreib an ${CONTACT_EMAIL}, wenn du eine Website, ein MVP oder eine native iOS App bauen willst.`,
    chips: ["Kostenloses Erstgespräch", CONTACT_EMAIL, "Vienna, AT"],
    image: { ...PORTRAITS.seated, alt: "Lukas Kaffer sitzend" },
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
