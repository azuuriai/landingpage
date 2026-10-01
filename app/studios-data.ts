// The /studios page: a website offer for owner-run dance and movement
// studios. Everything here must stay provable — no testimonials, usage or
// booking figures, rankings or guarantees. The recordings come from a studio
// website Lukas built; they are shown as examples, not as a template.

export const STUDIOS_PATH = "/studios";
export const STUDIOS_LAST_MODIFIED = new Date("2026-09-28T00:00:00.000Z");

// The contact form reads ?thema=studio and asks studio-specific questions.
export const STUDIO_CONTACT_HREF = "/contact?thema=studio";
export const STUDIO_CTA = "Studio-Projekt besprechen";

// Texts: round 4 (Claude and Codex, final after Codex #5), see
// Business Studio OS/dialog/2026-09-27-texte-preis/textvorschlag.md.
// Self-editing belongs to Studio Individuell only; no fine print.
export const studiosPage = {
  path: STUDIOS_PATH,
  eyebrow: "Für Studios und Kursanbieter",
  title: "Dein Studio. Dein Auftritt. Ein klarer Weg zur Buchung.",
  description:
    "Ich gestalte und entwickle Websites für Studios und alle, die Kurse anbieten, ob Tanz, Yoga, Fitness oder Musik. Kurse, Stundenplan und Preise sind schnell gefunden, und dein Buchungssystem ist direkt eingebunden.",
  metaTitle: "Websites für Studios und Kursanbieter",
  metaDescription:
    "Websites für Studios und Kursanbieter, ob Tanz, Yoga, Pilates, Fitness, Kampfsport oder Musik: individuell gestaltet, mit eingebundenem Buchungssystem wie Eversports. Selbst pflegen oder pflegen lassen.",
};

// "Kennst du das?" and "what the website does" in one block: the everyday
// problem as a small label, the answer as title and one sentence.
export const studioFit = {
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
};

export const studioExamples = {
  title: "So kann das aussehen.",
  intro:
    "Zwei Ausschnitte aus einer Studio-Website, die ich gebaut habe. Beispiele, keine Vorlage: Deine Website entsteht passend zu deinem Studio.",
  caseStudyPath: "/work/indeed-unique",
};

export const studioOffer = {
  title: "Zwei Wege zu deiner Studio-Website.",
  question: "Möchtest du Änderungen selbst erledigen, oder soll ich mich darum kümmern?",
};

export type StudioPlan = {
  id: "individuell" | "aktuell";
  // The actual choice, shown as the card's head line.
  choice: string;
  name: string;
  price: string;
  priceNote: string;
  // A small second price line (term and start fee).
  priceExtra?: string;
  tagline: string;
  includes: string[];
};

export const studioPlans: StudioPlan[] = [
  {
    id: "individuell",
    choice: "Du pflegst selbst",
    name: "Studio Individuell",
    // TODO(Lukas): USt-Hinweis nach Gewerbeanmeldung
    price: "2.900 €",
    priceNote: "einmalig",
    tagline: "Volle Freiheit: Deine Website liegt ganz in deiner Hand.",
    includes: [
      "Individuell für dein Studio und deine Marke gestaltet",
      "Dein eigener Bearbeitungsbereich: Kurse, Team, Bilder und Neuigkeiten änderst du ohne Technikwissen",
      "Ich zeige dir und auf Wunsch deinem Team persönlich, wie alles funktioniert",
      "Du entscheidest, wann sich was ändert",
    ],
  },
  {
    id: "aktuell",
    choice: "Ich pflege für dich",
    name: "Studio Aktuell",
    // TODO(Lukas): USt-Hinweis nach Gewerbeanmeldung
    // Decided (Lukas, 28.09.2026): the monthly rate starts only at the
    // Onlinegang, once the project is fully built. Not stated on the page.
    price: "149 €",
    priceNote: "im Monat",
    // Term decided (Lukas, 28.09.2026): 12 months, shown on the card.
    priceExtra: "12 Monate · plus 1.490 € zum Start",
    tagline: "Das Sorglos-Paket: Du kümmerst dich um dein Studio, ich mich um deine Website.",
    includes: [
      "Gestaltet im Stil deines Studios",
      "Schreib mir einfach, was sich ändert: Kurse, Preise, Team oder Ferienzeiten trage ich für dich ein",
      "Um die ganze Technik kümmere ich mich im Hintergrund",
      "Ein fester Ansprechpartner für alles rund um deine Website",
    ],
  },
];

// A real sequence, so the steps are numbered (.steps in globals.css).
export const studioSteps: { title: string; body: string }[] = [
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
];
