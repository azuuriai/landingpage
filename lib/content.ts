import {
  Braces,
  Brush,
  Gauge,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const selectedWork = [
  {
    title: "Vienna Event Radar",
    eyebrow: "Web online, App im Store",
    description:
      "Eine Event-Plattform, allein konzipiert, designt und gebaut. Web auf viennaeventradar.at, native iOS App im Apple App Store.",
    meta: "Next.js / Supabase / SwiftUI / App Store",
  },
  {
    title: "AI Workflow Systems",
    eyebrow: "Interne Tools",
    description:
      "Recherche-, Anreicherungs- und Review-Pipelines, die unruhige Abläufe in ruhige, wiederholbare Workflows verwandeln.",
    meta: "Automation / APIs / AI-gestützt",
  },
  {
    title: "Native iOS Apps",
    eyebrow: "Apple Plattformen",
    description:
      "iPhone-Erlebnisse, die sich nativ anfühlen. App Store Submission und Launch inklusive, nicht als Mockup endend.",
    meta: "SwiftUI / iOS 26 / App Store",
  },
  {
    title: "Premium Launch Pages",
    eyebrow: "Conversion-Flächen",
    description:
      "Fokussierte Landingpages für Gründer und kleine Teams, die Vertrauen, Klarheit und einen hochwertigen ersten Eindruck brauchen.",
    meta: "UX/UI / Frontend / SEO",
  },
];

export const caseStudyFacts = [
  "Konzept, Design und Code aus einer Hand",
  "Webprodukt mit Auth, Datenbank und Zugriffslogik",
  "AI-gestützte Recherche und strukturierter Admin-Review",
  "Mobile-first Public Experience",
  "Native iOS 26 App im Apple App Store",
  "Apple-typische Navigation und Interaktionsmuster",
  "SEO und Security geprüft",
  "Vercel Deployment, Production-Stand",
];

export const services = [
  {
    title: "Premium Websites und Landingpages",
    description:
      "High-End, mobile-first Seiten für Gründer, Berater und kleine Unternehmen, die schnell glaubwürdig wirken müssen.",
    icon: Brush,
  },
  {
    title: "Native iOS Apps mit App Store Launch",
    description:
      "Apple-first App-Erlebnisse mit nativer Navigation und Polish, der sich zuhause auf dem iPhone anfühlt. Submission und Launch erfahren.",
    icon: Smartphone,
  },
  {
    title: "MVPs und Full-Stack-Web-Apps",
    description:
      "Von Produktform und UX-Flows bis Auth, Datenbank, Backend-Logik, Dashboard und Deployment, alles aus einer Hand.",
    icon: Layers3,
  },
  {
    title: "AI-gestützte Automationen und interne Tools",
    description:
      "Workflow-Systeme, die Routinearbeit entfernen, APIs verbinden und Teams ein klareres Operating-Cockpit geben.",
    icon: Workflow,
  },
  {
    title: "UX/UI- und Conversion-Audits",
    description:
      "Ein praktischer Review von Struktur, Vertrauen, Klarheit, Mobile-Experience und Conversion-Reibung.",
    icon: Gauge,
  },
];

export const processSteps = [
  {
    title: "Schärfen",
    description:
      "Angebot, User Journey und Scope klären, bevor das Interface entsteht.",
  },
  {
    title: "Gestalten",
    description:
      "Ein klares visuelles System mit responsive Layouts, Interaktionsdetails und Conversion-Fokus entwerfen.",
  },
  {
    title: "Bauen",
    description:
      "Sauberer Full-Stack mit modernen Werkzeugen und Production Standards.",
  },
  {
    title: "Launchen",
    description:
      "Auf Vercel und im App Store shippen, dann aus echtem Feedback iterieren.",
  },
];

export const capabilities = [
  { label: "Solo, ohne Übergaben zwischen Silos", icon: Rocket },
  { label: "Produktdenken vor Umsetzung", icon: Sparkles },
  { label: "Design und Full-Stack in einem Loop", icon: Brush },
  {
    label: "Web Stack: Next.js, React, TypeScript, Supabase, Vercel",
    icon: Braces,
  },
  { label: "Native iOS Stack: SwiftUI und iOS 26 Patterns", icon: Smartphone },
  { label: "App Store Submission und Launch erfahren", icon: ShieldCheck },
];
