// Content of the Dance it draft, taken from dance-it.ch (September 2026).
// Times, teachers, prices and event dates are theirs. Course start dates
// for the booking demo are marked as examples in the UI, because the
// published blocks had already started.

export type Group = "paare" | "jugend" | "sechzig" | "fitness";

export const groupLabels: Record<Group, string> = {
  paare: "Paare und Erwachsene",
  jugend: "Kinder und Jugendliche",
  sechzig: "60 plus",
  fitness: "Fitness",
};

export type Slot = {
  day: "Mo" | "Di" | "Mi" | "Do" | "Fr" | "Sa";
  time: string;
  end: string;
  title: string;
  teacher: string;
  group: Group;
  // Only the adult course 1 has its own page in the draft; `date` is the
  // matching entry in course1.dates, preselected on that page.
  href?: "kurse/paartanz";
  date?: string;
  english?: boolean;
};

export const days: Slot["day"][] = ["Mo", "Di", "Mi", "Do", "Fr", "Sa"];

export const dayNames: Record<Slot["day"], string> = {
  Mo: "Montag",
  Di: "Dienstag",
  Mi: "Mittwoch",
  Do: "Donnerstag",
  Fr: "Freitag",
  Sa: "Samstag",
};

// An excerpt of the autumn programme 2026 on dance-it.ch. Courses that
// run in different blocks at the same hour are left out, so the week
// reads as one real week.
export const week: Slot[] = [
  { day: "Mo", time: "11:00", end: "11:45", title: "Eltern-Kind-Tanzen", teacher: "Antonina", group: "jugend", english: true },
  { day: "Mo", time: "18:15", end: "19:15", title: "Hip-Hop ab 13", teacher: "Antonina", group: "jugend", english: true },
  { day: "Mo", time: "19:30", end: "20:45", title: "Paartanz Kurs 1", teacher: "Antonina", group: "paare", href: "kurse/paartanz", date: "mo", english: true },
  { day: "Mo", time: "20:45", end: "22:00", title: "Jive und Disco Fox", teacher: "Antonina", group: "paare", english: true },
  { day: "Di", time: "16:00", end: "16:45", title: "Eltern-Kind-Tanzen", teacher: "Antonina", group: "jugend", english: true },
  { day: "Di", time: "18:00", end: "19:00", title: "Jazz Funk ab 13", teacher: "Antonina", group: "jugend", english: true },
  { day: "Mi", time: "11:00", end: "11:50", title: "Everdance®", teacher: "Monika, mit Pro Senectute", group: "sechzig" },
  { day: "Mi", time: "18:00", end: "19:00", title: "Paartanz Jugendliche", teacher: "Antonina", group: "jugend", english: true },
  { day: "Mi", time: "20:15", end: "21:30", title: "Paartanz Kurs 1", teacher: "Antonina", group: "paare", href: "kurse/paartanz", date: "mi", english: true },
  { day: "Do", time: "09:30", end: "10:30", title: "Zumba", teacher: "Antonina", group: "fitness", english: true },
  { day: "Do", time: "10:00", end: "10:50", title: "Tanzen im Sitzen", teacher: "Antonina", group: "sechzig", english: true },
  { day: "Do", time: "20:45", end: "22:00", title: "Paartanz für Frauen", teacher: "Anastasia", group: "paare" },
  { day: "Fr", time: "15:25", end: "16:25", title: "Paartanz 60 plus", teacher: "Monika", group: "sechzig" },
  { day: "Fr", time: "19:15", end: "20:30", title: "Paartanz Kurs 1", teacher: "Antonina", group: "paare", href: "kurse/paartanz", date: "fr", english: true },
  { day: "Fr", time: "19:15", end: "20:30", title: "Lindy Hop", teacher: "Monika", group: "paare" },
  { day: "Sa", time: "20:00", end: "23:00", title: "Tanzabend", teacher: "Monika und Team", group: "paare" },
];

export type Happening = {
  date: string;
  month: string;
  title: string;
  text: string;
  note?: string;
};

export const happenings: Happening[] = [
  { date: "22", month: "Nov", title: "Tanz-Tee", text: "Sonntag, 14:30 bis 17:30 Uhr. Üben bei Tee und etwas zum Knabbern.", note: "CHF 15" },
  { date: "24", month: "Jan", title: "Tanz-Tee", text: "Sonntag, 14:30 bis 17:30 Uhr, zum Jahresbeginn.", note: "CHF 15" },
  { date: "14", month: "Mär", title: "Tanz-Tee", text: "Sonntag, 14:30 bis 17:30 Uhr, der letzte der Saison.", note: "CHF 15" },
  { date: "22", month: "Mai", title: "Paartanz-Wochenende", text: "Zwei Tage im Seminarhotel Lihn über dem Walensee, mit Outdoor-Dancing.", note: "22.–23.05.2027" },
];

export type Teacher = { name: string; role: string; since: string };

export const team: Teacher[] = [
  { name: "Monika Stirnimann", role: "Inhaberin, Paartanz, Everdance®", since: "unterrichtet seit 1989" },
  { name: "Anastasia Zumbühl", role: "Paartanz, Workshops", since: "unterrichtet seit 2017" },
  { name: "Antonina Kormacheva", role: "Kinder, Hip-Hop, Zumba, Paartanz", since: "Deutsch, Englisch, Russisch" },
  { name: "Thierry Schütz", role: "Paartanz", since: "unterrichtet seit 2013" },
  { name: "Alexandra Gimmi", role: "Paartanz", since: "unterrichtet seit 2011" },
];

export const everdancePlaces = ["Zürich", "Olten", "Bassersdorf", "Bad Zurzach", "Riniken"];

// Booking demo for "Paartanz Kurs 1". Weekdays, times and teacher are
// published; the start dates are examples for the next block.
export const course1 = {
  title: "Paartanz Kurs 1",
  lead: "Der Einstieg: In fünf Abenden lernen Sie die Grundschritte der beliebtesten Paartänze. Ohne Vorkenntnisse, auch ohne Tanzpartner.",
  dances: ["Disco Swing", "Jive", "Cha Cha Cha", "Salsa", "Wiener Walzer", "Englisch Walzer"],
  format: "5 Abende à 75 Minuten",
  levels: ["Kurs 1", "Kurs 2", "Kurs 3", "Kurs 4 bis 9", "Hobby und Club"],
  levelNotes: ["Grundschritte", "dazu Foxtrott", "dazu Rumba und Bolero", "neue Figuren", "mehr Technik"],
  dates: [
    { id: "mo", day: "Montag", time: "19:30–20:45", start: "Mo 19. Oktober", teacher: "Antonina Kormacheva", english: true },
    { id: "mi", day: "Mittwoch", time: "20:15–21:30", start: "Mi 21. Oktober", teacher: "Antonina Kormacheva", english: true },
    { id: "fr", day: "Freitag", time: "19:15–20:30", start: "Fr 23. Oktober", teacher: "Antonina Kormacheva", english: true },
  ],
  prices: { person: 190, couple: 360, legi: 160 },
};
