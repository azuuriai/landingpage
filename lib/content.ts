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
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const selectedWork = [
  {
    title: "Vienna Event Radar",
    eyebrow: "Full-stack product + native iOS",
    description:
      "A launched event discovery product with auth, backend logic, admin flows, AI-first research, mobile-first UX and a native iOS 26 app direction.",
    meta: "Next.js / Supabase / Vercel / iOS 26",
  },
  {
    title: "AI workflow systems",
    eyebrow: "Internal tools",
    description:
      "Research, enrichment, backend logic and review pipelines that turn messy operations into calm, repeatable workflows.",
    meta: "Automation / APIs / AI-first ops",
  },
  {
    title: "Native iOS 26 Apple apps",
    eyebrow: "Apple platforms",
    description:
      "Focused iPhone experiences shaped around Apple-native navigation, search, accessory bars and bottom-bar interaction.",
    meta: "SwiftUI / Apple UX / Native iOS",
  },
  {
    title: "Premium launch pages",
    eyebrow: "Conversion surfaces",
    description:
      "Focused landing pages for founders and small teams that need trust, clarity and a polished first impression.",
    meta: "UX/UI / Frontend / SEO",
  },
];

export const caseStudyFacts = [
  "Von null bis Launch gebaut",
  "Full-Stack-Webprodukt",
  "Mobile-first Dashboard",
  "Supabase Auth, Datenbank und RLS",
  "AI-first Recherchepipeline",
  "Backend-Logiken und API-Flows",
  "Admin-Workflows",
  "SEO- und Security-Polish",
  "Native iOS 26 App Experience",
  "Apple-typische Navigation, Suche und Bottom Bars",
  "Vercel Deployment",
];

export const services = [
  {
    title: "Premium websites and landing pages",
    description:
      "High-end, mobile-first pages for founders, consultants and small businesses that need to look credible fast.",
    icon: Brush,
  },
  {
    title: "Native iOS 26 Apple apps",
    description:
      "Apple-first app experiences with native navigation, search, bottom bars and interaction details that feel at home on iPhone.",
    icon: Smartphone,
  },
  {
    title: "MVPs and full-stack web apps",
    description:
      "From product shape and UX flows to auth, database, backend logic, dashboard, deployment and iteration.",
    icon: Layers3,
  },
  {
    title: "AI-first automations and internal tools",
    description:
      "Workflow systems that reduce repetitive work, connect APIs, handle backend logic and give teams a clearer operating cockpit.",
    icon: Workflow,
  },
  {
    title: "UX/UI and conversion audits",
    description:
      "A practical review of structure, trust, clarity, mobile experience and conversion friction.",
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
    title: "Gestalten",
    description:
      "Ein klares visuelles System mit responsive Layouts, Interaktionsdetails und Conversion-Fokus entwerfen.",
  },
  {
    title: "Bauen",
    description:
      "Das Produkt mit sauberer Full-Stack-Architektur, AI-first Geschwindigkeit und Production Standards umsetzen.",
  },
  {
    title: "Launchen",
    description:
      "Auf Vercel shippen, SEO-/Security-Basics härten und aus echtem Feedback iterieren.",
  },
];

export const capabilities = [
  { label: "Next.js", icon: Rocket },
  { label: "React", icon: Braces },
  { label: "TypeScript", icon: Sparkles },
  { label: "Supabase", icon: Database },
  { label: "Vercel", icon: Rocket },
  { label: "Tailwind CSS", icon: Brush },
  { label: "AI-first Workflows", icon: Bot },
  { label: "Backend-Logiken", icon: Workflow },
  { label: "Automation und APIs", icon: Workflow },
  { label: "Native iOS 26 Apps", icon: Smartphone },
  { label: "Auth, RLS und Security", icon: ShieldCheck },
];
