import type { StudiosCopy } from "../types";

// Texts of /studios: round 4 (Claude and Codex, final after Codex #5), see
// Business Studio OS/dialog/2026-09-27-texte-preis/textvorschlag.md, with
// Lukas' decisions of 28.09. (12 months visible, carefree package, no hour
// cap, all class providers) and 11.10.2026 (sign-up at the course included
// in both models). Self-editing belongs to Studio Individuell only; the
// monthly rate starts at the Onlinegang and is not stated on the page.
export const studios: StudiosCopy = {
  page: {
    eyebrow: "Für Studios und Kursanbieter",
    title: "Dein Studio. Dein Auftritt. Ein klarer Weg zur Buchung.",
    description:
      "Ich gestalte und entwickle Websites für Studios und alle, die Kurse anbieten, ob Tanz, Yoga, Fitness oder Musik. Kurse, Stundenplan und Preise sind schnell gefunden, und dein Buchungssystem ist direkt eingebunden.",
    metaTitle: "Websites für Studios und Kursanbieter",
    metaDescription:
      "Websites für Studios und Kursanbieter, ob Tanz, Yoga, Pilates, Fitness, Kampfsport oder Musik: individuell gestaltet, mit eingebundenem Buchungssystem wie Eversports. Selbst pflegen oder pflegen lassen.",
    breadcrumb: "Websites für Studios",
  },
  cta: "Studio-Projekt besprechen",
  modelsLink: "Modelle ansehen",
  fit: {
    title: "Eine Website, die für dein Studio arbeitet.",
    intro:
      "Kennst du das? Die Website ist in die Jahre gekommen, jede Änderung kostet Zeit, und die neue Saison steht vor der Tür.",
    items: [
      {
        problem: "Kurse schwer zu finden",
        title: "Alles Wichtige auf einen Blick",
        text: "Kurse, Stundenplan, Preise, Team und Anfahrt in wenigen Klicks.",
      },
      {
        problem: "Am Handy mühsam",
        title: "Gemacht fürs Handy",
        text: "Wer unterwegs nach einem Kurs sucht, findet ihn genauso schnell wie am Laptop.",
      },
      {
        problem: "Buchungsweg unklar",
        title: "Buchen ohne Umweg",
        text: "Dein Buchungssystem, etwa Eversports, wird direkt eingebunden, ob du es schon nutzt oder neu einführst.",
      },
    ],
  },
  examples: {
    title: "So kann das aussehen.",
    intro:
      "Zwei Ausschnitte aus einer Studio-Website, die ich gebaut habe. Beispiele, keine Vorlage: Deine Website entsteht passend zu deinem Studio.",
    caseStudyLabel: "Case Study ansehen",
    tiles: [
      {
        label:
          "Beispiel einer Studio-Website: Stundenplan, Semesterblöcke und Gutscheinkauf aus Eversports im Design der Website",
        title: "Buchung aus Eversports",
        text: "Stundenplan und Gutscheine aus dem Buchungssystem, im Design der Website.",
      },
      {
        label:
          "Beispiel einer Studio-Website: Beiträge blättern im Tablet, danach fährt das Regal mit allen Beiträgen nach rechts",
        title: "Neuigkeiten auf der Startseite",
        text: "Aktuelles aus dem Studio erscheint im Schaukasten der Startseite.",
      },
    ],
  },
  offer: {
    title: "Zwei Wege zu deiner Studio-Website.",
    question: "Möchtest du Änderungen selbst erledigen, oder soll ich mich darum kümmern?",
  },
  plans: [
    {
      id: "individuell",
      choice: "Du pflegst selbst",
      name: "Studio Individuell",
      price: "2.900 €",
      priceNote: "einmalig",
      tagline: "Volle Freiheit: Deine Website liegt ganz in deiner Hand.",
      includes: [
        "Individuell für dein Studio und deine Marke gestaltet",
        "Dein eigener Bearbeitungsbereich: Kurse, Team, Bilder und Neuigkeiten änderst du ohne Technikwissen",
        "Anmeldung zum Kurs direkt auf der Website, mit Bestätigung per E-Mail",
        "Ich zeige dir und auf Wunsch deinem Team persönlich, wie alles funktioniert",
        "Du entscheidest, wann sich was ändert",
      ],
    },
    {
      id: "aktuell",
      choice: "Ich pflege für dich",
      name: "Studio Aktuell",
      price: "149 €",
      priceNote: "im Monat",
      // Term decided (Lukas, 28.09.2026): 12 months, shown on the card.
      priceExtra: "12 Monate · plus 1.490 € zum Start",
      tagline: "Das Sorglos-Paket: Du kümmerst dich um dein Studio, ich mich um deine Website.",
      includes: [
        "Gestaltet im Stil deines Studios",
        "Schreib mir einfach, was sich ändert: Kurse, Preise, Team oder Ferienzeiten trage ich für dich ein",
        "Anmeldung zum Kurs direkt auf der Website, mit Bestätigung per E-Mail",
        "Um die ganze Technik kümmere ich mich im Hintergrund",
        "Ein fester Ansprechpartner für alles rund um deine Website",
      ],
    },
  ],
  stepsTitle: "So läuft ein Studio-Projekt.",
  steps: [
    {
      title: "Erstgespräch",
      body: "Wir schauen auf deine jetzige Website, dein Buchungssystem und darauf, warum du eine neue Website möchtest, und finden das passende Modell.",
    },
    {
      title: "Konzept",
      body: "Was gehört wohin, und wie finden Interessierte am schnellsten zu Kurs und Buchung?",
    },
    {
      title: "Umsetzung mit Vorschau",
      body: "Deine vorhandenen Inhalte ziehen mit um. Du siehst die Zwischenstände, bevor etwas öffentlich wird.",
    },
    {
      title: "Onlinegang",
      body: "Nach deinem letzten Okay geht die Website online. Bei Studio Individuell zeige ich dir vorher den Bearbeitungsbereich in Ruhe.",
    },
  ],
  closing: "Neue Saison, neue Website? Erzähl mir von deinem Studio.",
  servicesHint: {
    lead: "Du bietest Kurse an, ob Tanz, Yoga oder Fitness?",
    text: "Dafür gibt es ein eigenes Angebot, einmalig zum Festpreis oder monatlich.",
    link: "Websites für Studios und Kursanbieter",
  },
  service: {
    name: "Websites für Studios und Kursanbieter",
    type: "Webdesign und Webentwicklung",
  },
};
