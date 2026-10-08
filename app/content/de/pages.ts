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
      "Ich helfe Gründern und kleinen Teams, aus einer Idee ein benutzbares Produkt zu machen: im Web, als echte Web-App und als native iOS-App, wenn das Produkt aufs iPhone gehört. Oft beides, auf einem Backend.",
    metaTitle: "Leistungen · Web- und iOS-Entwicklung in Wien",
    metaDescription:
      "Websites zum Selbstpflegen, Web-Apps mit echter Produktlogik und native iOS-Apps aus einer Hand. Von der ersten Idee bis zum Launch.",
    // The three product forms stand in the hero instead (services.ts).
    chips: [],
    sections: [],
    closing: "Klingt nach deinem Projekt?",
  },
  {
    ...detailPageBase.work,
    navLabel: "Showcase",
    eyebrow: "Showcase",
    title: "Was ich baue – live im Einsatz.",
    description:
      "Websites, Web-Apps und native iOS-Apps – durchdacht, gestaltet und bis zum Launch gebracht. Jedes Projekt hier ist im Einsatz, drei davon öffentlich nutzbar. Zwei sind für einen Kunden entstanden, die Website eines Tanzstudios und das CMS dahinter; die anderen sind Produkte, die ich selbst baue und betreibe. Daher die Tiefe bei Betrieb und iOS.",
    metaTitle: "Showcase · Web- und iOS-Projekte aus Wien",
    metaDescription:
      "Projekte von Lukas Kaffer: die Website des Tanzstudios Indeed Unique, Vienna Event Radar im Web und als native iOS-App sowie eine interne Operations-App.",
    chips: ["Websites", "Web-Apps", "iOS-Apps"],
    sections: [],
    closing: "Du willst etwas Ähnliches bauen?",
  },
  {
    ...detailPageBase.about,
    navLabel: "Über mich",
    eyebrow: "Mein Weg",
    title: "Vom Klassenzimmer zu Produkten.",
    description:
      "Eigene Produkte, Bildung und Community-Arbeit: drei Stationen, die prägen, wie ich heute Probleme sortiere, erkläre und umsetze.",
    metaTitle: "Über Lukas Kaffer · Produkte, Bildung und Community",
    metaDescription:
      "Eigene Produkte, Bildung und Community-Arbeit: der Weg von Lukas Kaffer zum Web- und iOS-Product-Builder in Wien.",
    chips: ["Wien, AT", "Web + iOS", "Produktdesign", "Bildung"],
    image: { ...PORTRAITS.standing, alt: "Lukas Kaffer" },
    sections: [
      {
        label: "Heute",
        title: "Aus einer groben Idee wird eine Version, die man wirklich benutzen kann.",
        body: "Heute verbinde ich Produktdenken, UX und AI-assisted Development mit meinem Hintergrund aus Bildung und Community-Arbeit. Claude Code und ChatGPT machen mich schneller, dadurch reicht ein kleineres Budget weiter; Produktlogik, Datenfluss, Prüfung und Auslieferung bleiben meine Verantwortung, und nichts geht raus, das ich nicht gelesen und getestet habe.",
      },
      {
        label: "Bildung",
        title: "Zuhören, einordnen und verständlich erklären.",
        body: "Aus der Bildung bringe ich die Fähigkeit mit, unterschiedliche Vorkenntnisse zu erkennen, komplexe Inhalte zu strukturieren und Entscheidungen nachvollziehbar zu machen. In der Produktarbeit wird daraus klares Scoping.",
      },
      {
        label: "2017–2020",
        title: "Outreach und Tech-Support in einer dezentralen Community.",
        body: "Von 2017 bis 2020 war ich im Outreach- und Support-Team von SmartCash aktiv, einem community-gesteuerten Blockchain-Projekt, und habe es persönlich auf Konferenzen in Zug und Porto vertreten, auch mit Vorträgen.",
      },
    ],
    closing: "Klingt nach einer Zusammenarbeit?",
  },
  {
    ...detailPageBase.faq,
    navLabel: "FAQ",
    eyebrow: "Gut zu wissen",
    title: "Fragen vor dem Projektstart.",
    description:
      "Kurz beantwortet: Kosten, Dauer, iOS und Android, Design, Launch, AI-Tools und was passiert, wenn du nur mit einer groben Idee kommst.",
    metaTitle: "FAQ · Kosten, Dauer, iOS Apps und Launch",
    metaDescription:
      "Antworten zu Projektkosten, Dauer, nativer iOS Entwicklung, Android, Design, Launch, AI-Tools und Zusammenarbeit mit Lukas Kaffer.",
    chips: ["Fester Preis", "Code gehört dir", "Direkt mit mir"],
    sections: [],
    faq: [
      {
        question: "Was kostet ein Projekt und wie lange dauert es?",
        answer:
          "Beides hängt vom Umfang ab. Nach einem kurzen Erstgespräch grenze ich Ziel, Kernworkflow und einen realistischen ersten Release ab, und du bekommst einen klaren Vorschlag mit Umfang, Preis und nächsten Schritten. Die meisten Projekte biete ich zum Festpreis für einen definierten Umfang an, was darüber hinausgeht, wird separat angeboten; Abrechnung nach Stunden ist ebenfalls möglich, direkt oder über Upwork. Die Schritte sind immer dieselben: Idee schärfen, Umfang und Preis, Design und Bau, Launch, Betreuung danach. Vertrag und Rechnung kommen von einem österreichischen Einzelunternehmen, in Euro. NDA auf Wunsch.",
      },
      {
        question: "Baust du native iOS Apps?",
        answer:
          "Ja. Native iOS Apps in SwiftUI, von der Idee bis zum echten App-Store-Release. Wenn dein Produkt aufs iPhone gehört, baue ich es nativ und nicht als verpackte Website.",
      },
      {
        question: "Baust du auch Android-Apps?",
        answer:
          "Nicht als erste Plattform. Ich baue nativ für iOS in SwiftUI; Android-Nutzer bekommen die Web-App, die in jedem Browser läuft. Weil Web und App ein Backend teilen, kann eine Android-App später dazukommen, ohne dass das Produkt neu gebaut werden muss. Wenn Android von Anfang an im Vordergrund steht, bin ich wahrscheinlich nicht der Richtige, und das sage ich dir im ersten Gespräch.",
      },
      {
        question: "Entwirfst du auch das Design?",
        answer:
          "Ja. Interface, Interaktion und Code entstehen zusammen. Bei Projekten dieser Größe brauchst du meistens keinen separaten Designer.",
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
        question: "Arbeitest du mit AI-Tools?",
        answer:
          "Ja, ganz offen. Claude Code und ChatGPT machen mich schneller, dadurch reicht ein kleineres Budget weiter. Produktlogik, Datenfluss, Prüfung und Auslieferung bleiben meine Verantwortung, und nichts geht raus, das ich nicht gelesen und getestet habe.",
      },
      {
        question: "Was, wenn ich nur eine grobe Idee habe?",
        answer:
          "Das ist oft der beste Startpunkt. Der erste Schritt ist dann nicht direkt Entwicklung, sondern Schärfung: Ziel, Zielgruppe, Kernfunktion und ein sinnvoller erster Umfang.",
      },
    ],
    closing: "Frage war nicht dabei?",
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
