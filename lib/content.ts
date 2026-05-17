import {
  Bot,
  Braces,
  Brush,
  Database,
  Gauge,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Arbeit", href: "#work" },
  { label: "Leistungen", href: "#services" },
  { label: "Prozess", href: "#process" },
  { label: "Kontakt", href: "#contact" },
];

export const selectedWork = [
  {
    title: "Vienna Event Radar",
    eyebrow: "Full-Stack Produkt",
    description:
      "Ein gelaunchtes Event-Discovery-Produkt mit Auth, Admin-Flows, KI-gestützter Recherche und mobile-first User Experience.",
    meta: "Next.js / Supabase / Vercel / iOS",
  },
  {
    title: "KI-Workflow-Systeme",
    eyebrow: "Interne Tools",
    description:
      "Recherche-, Anreicherungs- und Review-Pipelines, die unklare Abläufe in ruhige, wiederholbare Workflows verwandeln.",
    meta: "Automation / APIs / KI-gestützte Ops",
  },
  {
    title: "Premium Launch Pages",
    eyebrow: "Conversion-Flächen",
    description:
      "Fokussierte Landingpages für Gründer und kleine Teams, die Vertrauen, Klarheit und einen polierten ersten Eindruck brauchen.",
    meta: "UX/UI / Frontend / SEO",
  },
];

export const caseStudyFacts = [
  "Von null bis Launch gebaut",
  "Full-Stack Webprodukt",
  "Mobile-first Dashboard",
  "Supabase Auth, Datenbank und RLS",
  "KI-gestützte Recherche-Pipeline",
  "Admin-Workflows",
  "SEO- und Security-Polish",
  "iOS App Erweiterung",
  "Vercel Deployment",
];

export const services = [
  {
    title: "Premium Websites und Landingpages",
    description:
      "Hochwertige, mobile-first Seiten für Gründer, Consultants und kleine Unternehmen, die schnell glaubwürdig wirken müssen.",
    icon: Brush,
  },
  {
    title: "MVPs und Full-Stack Web Apps",
    description:
      "Von Produktform und UX-Flows bis Auth, Datenbank, Dashboard, Deployment und Iteration.",
    icon: Layers3,
  },
  {
    title: "KI-Automationen und interne Tools",
    description:
      "Workflow-Systeme, die wiederkehrende Arbeit reduzieren, APIs verbinden und Teams ein klareres Operating Cockpit geben.",
    icon: Workflow,
  },
  {
    title: "UX/UI und Conversion Audits",
    description:
      "Ein praktischer Review von Struktur, Vertrauen, Klarheit, Mobile Experience und Conversion-Reibung.",
    icon: Gauge,
  },
];

export const processSteps = [
  {
    title: "Schärfen",
    description:
      "Angebot, User Journey und Produktscope klären, bevor das Interface entsteht.",
  },
  {
    title: "Design",
    description:
      "Ein präzises visuelles System mit responsiven Layouts, Interaktionsdetails und Conversion-Absicht gestalten.",
  },
  {
    title: "Umsetzung",
    description:
      "Das Produkt mit sauberer Full-Stack Architektur, KI-unterstützter Geschwindigkeit und Production Standards umsetzen.",
  },
  {
    title: "Launch",
    description:
      "Auf Vercel ausliefern, SEO-/Security-Basics härten und aus echtem Feedback iterieren.",
  },
];

export const capabilities = [
  { label: "Next.js", icon: Rocket },
  { label: "React", icon: Braces },
  { label: "TypeScript", icon: Sparkles },
  { label: "Supabase", icon: Database },
  { label: "Vercel", icon: Rocket },
  { label: "Tailwind CSS", icon: Brush },
  { label: "KI-gestützte Workflows", icon: Bot },
  { label: "Automation und APIs", icon: Workflow },
  { label: "iOS App Entwicklung", icon: Smartphone },
  { label: "Auth, RLS und Security", icon: ShieldCheck },
];
