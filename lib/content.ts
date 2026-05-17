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
    eyebrow: "Full-stack product",
    description:
      "A launched event discovery product with auth, admin flows, AI-assisted research and mobile-first user experience.",
    meta: "Next.js / Supabase / Vercel / iOS",
  },
  {
    title: "AI workflow systems",
    eyebrow: "Internal tools",
    description:
      "Research, enrichment and review pipelines that turn messy operations into calm, repeatable workflows.",
    meta: "Automation / APIs / AI-assisted ops",
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
  "Built from zero to launch",
  "Full-stack web product",
  "Mobile-first dashboard",
  "Supabase auth, database and RLS",
  "AI-assisted research pipeline",
  "Admin workflows",
  "SEO and security polish",
  "iOS app extension",
  "Vercel deployment",
];

export const services = [
  {
    title: "Premium websites and landing pages",
    description:
      "High-end, mobile-first pages for founders, consultants and small businesses that need to look credible fast.",
    icon: Brush,
  },
  {
    title: "MVPs and full-stack web apps",
    description:
      "From product shape and UX flows to auth, database, dashboard, deployment and iteration.",
    icon: Layers3,
  },
  {
    title: "AI automations and internal tools",
    description:
      "Workflow systems that reduce repetitive work, connect APIs and give teams a clearer operating cockpit.",
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
    title: "Shape",
    description:
      "Clarify the offer, user journey and product scope before touching the interface.",
  },
  {
    title: "Design",
    description:
      "Create a sharp visual system with responsive layouts, interaction details and conversion intent.",
  },
  {
    title: "Build",
    description:
      "Implement the product with clean full-stack architecture, AI-assisted speed and production standards.",
  },
  {
    title: "Launch",
    description:
      "Ship to Vercel, harden SEO/security basics and iterate from real feedback.",
  },
];

export const capabilities = [
  { label: "Next.js", icon: Rocket },
  { label: "React", icon: Braces },
  { label: "TypeScript", icon: Sparkles },
  { label: "Supabase", icon: Database },
  { label: "Vercel", icon: Rocket },
  { label: "Tailwind CSS", icon: Brush },
  { label: "AI-assisted workflows", icon: Bot },
  { label: "Automation and APIs", icon: Workflow },
  { label: "iOS app development", icon: Smartphone },
  { label: "Auth, RLS and security", icon: ShieldCheck },
];
