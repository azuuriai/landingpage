import type {
  ContactFormCopy,
  ContactSectionCopy,
  HomeCopy,
  SiteCopy,
  UiCopy,
} from "../types";

export const site: SiteCopy = {
  title: "Lukas Kaffer · Websites, Web-Apps und iOS-Apps",
  description:
    "Lukas Kaffer baut Websites, Webprodukte und native iOS-Apps von der Idee bis zum Launch. Live-Belege: die Website des Tanzstudios Indeed Unique mit Sanity CMS und Eversports sowie Vienna Event Radar im Web und im App Store.",
  ogDescription:
    "Live-Belege: die Website des Tanzstudios Indeed Unique mit eigenem CMS und Vienna Event Radar im Web und im App Store.",
  ogImageAlt: "Lukas Kaffer · Websites, Webprodukte und native iOS Apps",
  keywords: [
    "Webentwicklung Wien",
    "Website mit CMS",
    "Sanity CMS",
    "iOS App Entwicklung",
    "SwiftUI Entwickler",
    "Next.js Entwickler",
    "Website für Tanzstudio",
    "Website für Yogastudio",
    "AI-assisted Development",
    "MVP Entwicklung",
    "Landing Page Wien",
    "Lukas Kaffer",
  ],
  jobTitle: "Webdesigner und Entwickler",
  knowsAbout: [
    "Webentwicklung",
    "Native iOS Apps",
    "SwiftUI",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Produktdesign",
    "AI-assisted Development",
  ],
  og: {
    headline: "Websites, Webprodukte und native iOS Apps, gebaut bis zum Launch.",
    location: "Vienna, AT",
    stack: "Astro · Next.js · Sanity · SwiftUI",
  },
};

export const ui: UiCopy = {
  skipToContent: "Zum Inhalt springen",
  logoLabel: "Lukas Kaffer – Startseite",
  headerNav: "Seitennavigation",
  homeNav: "Seiten",
  contact: "Kontakt",
  sendIdea: "Idee schicken",
  backHome: "Startseite",
  backShowcase: "Showcase",
  learnMore: "Mehr erfahren",
  askAnotherQuestion: "Andere Frage stellen",
  imprint: "Impressum",
  privacy: "Datenschutz",
  copyright: "© 2026 Lukas Kaffer",
  copyrightHome: "© 2026 Lukas Kaffer, Wien",
  updatedLabel: "Stand:",
  showcaseLabel: "Showcase",
  caseStudyLink: "{name} – Case Study ansehen",
  siteTour: "{name}: Rundgang durch die Website",
  appRecording: "{name} – Aufnahme der App",
  siteRecording: "{name} – Aufnahme der Website",
  phoneRecording: "{name} – Aufnahme auf dem iPhone",
  serviceIndexLabel: "Leistungen",
  languageSwitch: "Sprache",
  languageNames: { de: "Deutsch", en: "English" },
  notFound: {
    title: "Diese Seite gibt es nicht.",
    text: "Der Link ist vielleicht veraltet oder vertippt. Die Startseite führt zu Leistungen, Showcase und Kontakt.",
  },
};

export const home: HomeCopy = {
  descriptor: "Websites, Web-Apps und iOS-Apps, Wien",
  headline: "Von der Idee zum Produkt. Launch inklusive.",
};

export const contactSection: ContactSectionCopy = {
  eyebrow: "Direkt an mich",
  title: "Schick mir die Kurzfassung.",
  body: "Du brauchst noch kein fertiges Briefing. Zwei, drei Sätze reichen, damit ich einschätzen kann, wie wir am besten starten.",
};

export const contactForm: ContactFormCopy = {
  name: "Name",
  namePlaceholder: "Wie heißt du?",
  email: "E-Mail",
  emailPlaceholder: "name@beispiel.com",
  message: "Deine Idee",
  messagePlaceholder:
    "In zwei, drei Sätzen: Was willst du launchen, für wen, und wo hakt es gerade?",
  submit: "Idee schicken",
  sending: "Wird gesendet …",
  note: "Das Formular wird technisch über Web3Forms übermittelt.",
  successTitle: "Angekommen – danke!",
  successBody: "Ich habe deine Nachricht erhalten und melde mich persönlich zurück.",
  errorBody: "Hat gerade nicht geklappt. Schreib mir gern direkt:",
  fallbackPrefix: "Lieber direkt mailen?",
  subject: "Neue Anfrage über lukaskaffer.com",
  languageName: "Deutsch",
};
