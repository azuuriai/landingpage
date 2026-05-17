"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";

type Language = "en" | "de";

type ScreenRow = {
  label: string;
  value: string;
};

type ModalSection = {
  label: string;
  title: string;
  body: string;
};

type Panel = {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  headline: string;
  description: string;
  chips: string[];
  details: string[];
  screen: {
    sideLabel: string;
    sideValue: string;
    rows: ScreenRow[];
  };
  modalSections?: ModalSection[];
  detailHref?: string;
};

type PageCopy = {
  hero: {
    name: string;
    headline: string;
    subcopy: string;
    proof: string[];
    indexLabel: string;
  };
  ui: {
    navLabel: string;
    email: string;
    product: string;
    brief: string;
    details: string;
    moreDetails: string;
    close: string;
    writeEmail: string;
    languageLabel: string;
  };
  panels: Panel[];
};

const pageCopy: Record<Language, PageCopy> = {
  en: {
    hero: {
      name: "Lukas Kaffer",
      headline: "Turning rough ideas into polished digital products.",
      subcopy:
        "AI-native product builder for websites, MVPs, internal tools and AI-powered workflows from concept to launch.",
      proof: ["Live product shipped", "Web + iOS experience", "AI research pipeline"],
      indexLabel: "Studio index",
    },
    ui: {
      navLabel: "Portfolio preview controls",
      email: "Email",
      product: "Product",
      brief: "Project brief",
      details: "Details",
      moreDetails: "More details",
      close: "Close modal",
      writeEmail: "Write an email",
      languageLabel: "Language",
    },
    panels: [
      {
        id: "work",
        title: "Vienna Event Radar",
        subtitle: "Full-stack product case",
        eyebrow: "Featured work",
        headline: "From idea to shipped product.",
        description:
          "Built from zero to launch with Next.js, Supabase, auth, RLS, admin flows, AI-assisted research and Vercel deployment.",
        chips: ["Full-stack", "AI pipeline", "iOS extension"],
        details: [
          "Full-stack web product built from zero to launch.",
          "Supabase auth, database structure and RLS policies.",
          "AI-assisted event research pipeline with admin review workflows.",
          "Mobile-first dashboard, SEO/security polish and Vercel deployment.",
          "Extended toward a companion iOS app experience.",
        ],
        screen: {
          sideLabel: "Live",
          sideValue: "01",
          rows: [
            { label: "Pipeline", value: "AI research" },
            { label: "Stack", value: "Next.js + Supabase" },
            { label: "Surface", value: "Web + iOS" },
          ],
        },
        modalSections: [
          {
            label: "Context",
            title: "A real product, not a concept mockup.",
            body: "Vienna Event Radar started as a rough idea and moved into a live event discovery product with user-facing flows, admin operations and production deployment.",
          },
          {
            label: "System",
            title: "Research, review and publish in one workflow.",
            body: "The product combines AI-assisted event research, structured admin review, Supabase auth/database/RLS and a mobile-first public experience.",
          },
          {
            label: "Stack",
            title: "Built with a modern full-stack setup.",
            body: "Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel and an expanding iOS companion experience.",
          },
          {
            label: "Outcome",
            title: "Shipped, polished and ready to iterate.",
            body: "The launch included SEO/security polish, deployment discipline and a foundation for continued product iteration.",
          },
        ],
        detailHref: "/work",
      },
      {
        id: "services",
        title: "Services",
        subtitle: "Websites, MVPs and AI workflows",
        eyebrow: "What I build",
        headline: "Premium digital products without handoff drag.",
        description:
          "Mobile-first websites, MVPs, internal tools, AI automations and focused UX/UI audits for founders and small teams.",
        chips: ["Landing pages", "MVPs", "Automations"],
        details: [
          "Premium mobile-first websites and landing pages with strong first-impression design.",
          "MVPs and full-stack web apps with auth, data, dashboard and deployment.",
          "AI automations and internal tools that reduce repetitive work.",
          "UX/UI and conversion audits for pages that need clearer structure and trust.",
        ],
        screen: {
          sideLabel: "Offer",
          sideValue: "04",
          rows: [
            { label: "Websites", value: "Premium launch pages" },
            { label: "Products", value: "MVPs + dashboards" },
            { label: "Ops", value: "AI workflows" },
          ],
        },
        modalSections: [
          {
            label: "Web",
            title: "Premium first impressions.",
            body: "Focused pages for founders, consultants and small teams that need credibility, clarity and conversion without bloated marketing theatre.",
          },
          {
            label: "Product",
            title: "MVPs that can actually ship.",
            body: "Auth, database, dashboards, data flows and deployment handled as one connected product build.",
          },
          {
            label: "AI ops",
            title: "Automations that remove repetitive work.",
            body: "Internal workflows, API integrations and AI-assisted research/review systems for calmer operations.",
          },
        ],
        detailHref: "/services",
      },
      {
        id: "process",
        title: "Process",
        subtitle: "From rough idea to launch",
        eyebrow: "How it works",
        headline: "Shape, design, build, launch.",
        description:
          "A compact workflow that clarifies scope, designs the interaction, ships the stack and iterates from real feedback.",
        chips: ["Shape", "Design", "Build", "Launch"],
        details: [
          "Shape the offer, target user, core workflow and launch scope.",
          "Design the interface, interaction rhythm and responsive system.",
          "Build with a clean stack and AI-assisted implementation speed.",
          "Launch, check SEO/security basics and iterate from real feedback.",
        ],
        screen: {
          sideLabel: "Flow",
          sideValue: "04",
          rows: [
            { label: "01 Shape", value: "Offer + user" },
            { label: "02 Design", value: "Interface rhythm" },
            { label: "03 Ship", value: "Stack + deploy" },
          ],
        },
        modalSections: [
          {
            label: "Shape",
            title: "Clarify what should exist.",
            body: "Before implementation starts, the offer, target user, core workflow and launch scope get tightened.",
          },
          {
            label: "Design",
            title: "Make the product feel intentional.",
            body: "The interface, interaction rhythm and responsive system are designed around the most important user actions.",
          },
          {
            label: "Build",
            title: "Move quickly without losing structure.",
            body: "The product is implemented with a clean stack, AI-assisted speed and production standards.",
          },
          {
            label: "Launch",
            title: "Ship, observe, iterate.",
            body: "Deployment, SEO/security basics and real feedback close the loop.",
          },
        ],
        detailHref: "/process",
      },
      {
        id: "about",
        title: "About",
        subtitle: "Product taste and full-stack execution",
        eyebrow: "Lukas Kaffer",
        headline: "Product taste with implementation depth.",
        description:
          "I combine product thinking, UX/UI, full-stack implementation and AI-native workflows to move ideas into polished reality.",
        chips: ["Next.js", "Supabase", "Design engineering"],
        details: [
          "Product thinking before implementation: what should exist, why and for whom.",
          "Design engineering taste: calm interfaces, crisp layout and motion restraint.",
          "Full-stack execution with Next.js, React, TypeScript, Supabase and Vercel.",
          "AI-native workflows for faster building, research and operational systems.",
        ],
        screen: {
          sideLabel: "Mode",
          sideValue: "AI",
          rows: [
            { label: "Taste", value: "Product + UI" },
            { label: "Depth", value: "Full-stack" },
            { label: "Speed", value: "AI-native" },
          ],
        },
        modalSections: [
          {
            label: "Point of view",
            title: "Product shape first, implementation second.",
            body: "The goal is not just to build screens, but to clarify what should exist and make it feel trustworthy.",
          },
          {
            label: "Execution",
            title: "Design and full-stack in one loop.",
            body: "UX/UI, frontend, data, auth, deployment and iteration stay connected instead of being handed between silos.",
          },
          {
            label: "Workflow",
            title: "AI-native without losing taste.",
            body: "AI accelerates research and implementation, while product judgment keeps the result focused and polished.",
          },
        ],
        detailHref: "/about",
      },
      {
        id: "contact",
        title: "Contact",
        subtitle: "Start a focused build",
        eyebrow: "Start here",
        headline: "Have a rough product idea?",
        description:
          "Send the idea, current bottleneck or page that needs to work harder. I will help shape the next move.",
        chips: ["Email", "Project brief", "Next step"],
        details: [
          "Best starting point: one paragraph about what you want to launch.",
          "Include who it is for, what exists today and where the friction is.",
          "For small projects, the first useful step is usually a focused scope and prototype.",
          "Email: hello@lukaskaffer.com",
        ],
        screen: {
          sideLabel: "Next",
          sideValue: "→",
          rows: [
            { label: "Send", value: "Rough idea" },
            { label: "Clarify", value: "Scope + flow" },
            { label: "Start", value: "Focused build" },
          ],
        },
        modalSections: [
          {
            label: "Start",
            title: "Send the rough version.",
            body: "A short paragraph is enough: what you want to launch, who it is for and what currently blocks momentum.",
          },
          {
            label: "Next",
            title: "Turn ambiguity into a focused first move.",
            body: "The first useful step is usually a sharp scope, product direction and a prototype or implementation plan.",
          },
        ],
        detailHref: "/contact",
      },
    ],
  },
  de: {
    hero: {
      name: "Lukas Kaffer",
      headline: "Aus groben Ideen werden polierte digitale Produkte.",
      subcopy:
        "AI-native Product Builder für Websites, MVPs, interne Tools und KI-gestützte Workflows von Konzept bis Launch.",
      proof: ["Live-Produkt gelauncht", "Web + iOS Experience", "KI-Recherchepipeline"],
      indexLabel: "Studio Index",
    },
    ui: {
      navLabel: "Portfolio Vorschau steuern",
      email: "E-Mail",
      product: "Produkt",
      brief: "Projektbrief",
      details: "Details",
      moreDetails: "Mehr Details",
      close: "Modal schließen",
      writeEmail: "E-Mail schreiben",
      languageLabel: "Sprache",
    },
    panels: [
      {
        id: "work",
        title: "Vienna Event Radar",
        subtitle: "Full-Stack Produktcase",
        eyebrow: "Ausgewählte Arbeit",
        headline: "Von der Idee zum gelaunchten Produkt.",
        description:
          "Von null bis Launch gebaut: mit Next.js, Supabase, Auth, RLS, Admin-Flows, KI-gestützter Recherche und Vercel Deployment.",
        chips: ["Full-Stack", "KI-Pipeline", "iOS Erweiterung"],
        details: [
          "Full-Stack Webprodukt von null bis Launch umgesetzt.",
          "Supabase Auth, Datenbankstruktur und RLS Policies aufgebaut.",
          "KI-gestützte Event-Recherche mit Admin-Review-Workflows.",
          "Mobile-first Dashboard, SEO-/Security-Polish und Vercel Deployment.",
          "Erweiterung in Richtung begleitender iOS App Experience.",
        ],
        screen: {
          sideLabel: "Live",
          sideValue: "01",
          rows: [
            { label: "Pipeline", value: "KI-Recherche" },
            { label: "Stack", value: "Next.js + Supabase" },
            { label: "Fläche", value: "Web + iOS" },
          ],
        },
        modalSections: [
          {
            label: "Ausgangslage",
            title: "Ein echtes Produkt, kein Konzept-Mockup.",
            body: "Vienna Event Radar startete als grobe Idee und wurde zu einem Live-Produkt mit User-Flows, Admin-Betrieb und Production Deployment.",
          },
          {
            label: "System",
            title: "Recherche, Review und Publishing in einem Workflow.",
            body: "Das Produkt verbindet KI-gestützte Event-Recherche, strukturierten Admin-Review, Supabase Auth/Datenbank/RLS und eine mobile-first Public Experience.",
          },
          {
            label: "Stack",
            title: "Mit modernem Full-Stack Setup gebaut.",
            body: "Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel und eine wachsende iOS Companion Experience.",
          },
          {
            label: "Ergebnis",
            title: "Gelauncht, poliert und bereit für Iteration.",
            body: "Zum Launch gehörten SEO-/Security-Polish, Deployment-Disziplin und eine Grundlage für weitere Produktiteration.",
          },
        ],
        detailHref: "/work",
      },
      {
        id: "services",
        title: "Leistungen",
        subtitle: "Websites, MVPs und KI-Workflows",
        eyebrow: "Was ich baue",
        headline: "Premium digitale Produkte ohne Übergabe-Reibung.",
        description:
          "Mobile-first Websites, MVPs, interne Tools, KI-Automationen und fokussierte UX/UI Audits für Gründer und kleine Teams.",
        chips: ["Landingpages", "MVPs", "Automationen"],
        details: [
          "Premium mobile-first Websites und Landingpages mit starkem ersten Eindruck.",
          "MVPs und Full-Stack Web Apps mit Auth, Daten, Dashboard und Deployment.",
          "KI-Automationen und interne Tools, die wiederkehrende Arbeit reduzieren.",
          "UX/UI und Conversion Audits für Seiten, die klarer und vertrauenswürdiger wirken sollen.",
        ],
        screen: {
          sideLabel: "Angebot",
          sideValue: "04",
          rows: [
            { label: "Websites", value: "Premium Launch Pages" },
            { label: "Produkte", value: "MVPs + Dashboards" },
            { label: "Ops", value: "KI-Workflows" },
          ],
        },
        modalSections: [
          {
            label: "Web",
            title: "Premium erste Eindrücke.",
            body: "Fokussierte Seiten für Gründer, Consultants und kleine Teams, die Glaubwürdigkeit, Klarheit und Conversion brauchen.",
          },
          {
            label: "Produkt",
            title: "MVPs, die wirklich shippen können.",
            body: "Auth, Datenbank, Dashboards, Datenflüsse und Deployment als zusammenhängender Produkt-Build.",
          },
          {
            label: "KI Ops",
            title: "Automationen, die wiederkehrende Arbeit entfernen.",
            body: "Interne Workflows, API-Integrationen und KI-gestützte Recherche-/Review-Systeme für ruhigere Abläufe.",
          },
        ],
        detailHref: "/services",
      },
      {
        id: "process",
        title: "Prozess",
        subtitle: "Von grober Idee bis Launch",
        eyebrow: "Wie es läuft",
        headline: "Schärfen, gestalten, bauen, launchen.",
        description:
          "Ein kompakter Ablauf, der Fokus klärt, Interaktion gestaltet, den Stack ausliefert und aus echtem Feedback iteriert.",
        chips: ["Schärfen", "Design", "Umsetzung", "Launch"],
        details: [
          "Angebot, Zielgruppe, Kernworkflow und Launch-Fokus schärfen.",
          "Interface, Interaktionsrhythmus und responsives System gestalten.",
          "Mit sauberem Stack und KI-unterstützter Umsetzungsgeschwindigkeit bauen.",
          "Launchen, SEO-/Security-Basics prüfen und anhand echtem Feedback iterieren.",
        ],
        screen: {
          sideLabel: "Ablauf",
          sideValue: "04",
          rows: [
            { label: "01 Schärfen", value: "Angebot + User" },
            { label: "02 Design", value: "Interaktionsrhythmus" },
            { label: "03 Shippen", value: "Stack + Deploy" },
          ],
        },
        modalSections: [
          {
            label: "Schärfen",
            title: "Klären, was existieren sollte.",
            body: "Bevor gebaut wird, werden Angebot, Zielgruppe, Kernworkflow und Launch-Fokus eng gezogen.",
          },
          {
            label: "Design",
            title: "Das Produkt bewusst wirken lassen.",
            body: "Interface, Interaktionsrhythmus und responsives System orientieren sich an den wichtigsten User-Aktionen.",
          },
          {
            label: "Umsetzung",
            title: "Schnell bauen, ohne Struktur zu verlieren.",
            body: "Das Produkt entsteht mit sauberem Stack, KI-unterstützter Geschwindigkeit und Production Standards.",
          },
          {
            label: "Launch",
            title: "Shippen, beobachten, iterieren.",
            body: "Deployment, SEO-/Security-Basics und echtes Feedback schließen den Kreis.",
          },
        ],
        detailHref: "/process",
      },
      {
        id: "about",
        title: "Über mich",
        subtitle: "Produktgefühl und Full-Stack Umsetzung",
        eyebrow: "Lukas Kaffer",
        headline: "Produktgefühl mit Umsetzungstiefe.",
        description:
          "Ich verbinde Produktdenken, UX/UI, Full-Stack Umsetzung und AI-native Workflows, um Ideen in polierte Realität zu bringen.",
        chips: ["Next.js", "Supabase", "Design Engineering"],
        details: [
          "Produktdenken vor Umsetzung: Was sollte existieren, warum und für wen?",
          "Design-Engineering-Gefühl: ruhige Interfaces, präzises Layout und zurückhaltende Motion.",
          "Full-Stack Umsetzung mit Next.js, React, TypeScript, Supabase und Vercel.",
          "AI-native Workflows für schnelleres Bauen, Recherche und operative Systeme.",
        ],
        screen: {
          sideLabel: "Modus",
          sideValue: "AI",
          rows: [
            { label: "Taste", value: "Produkt + UI" },
            { label: "Tiefe", value: "Full-Stack" },
            { label: "Tempo", value: "AI-native" },
          ],
        },
        modalSections: [
          {
            label: "Haltung",
            title: "Produktform zuerst, Umsetzung danach.",
            body: "Es geht nicht nur darum, Screens zu bauen, sondern zu klären, was existieren sollte und wie es vertrauenswürdig wirkt.",
          },
          {
            label: "Umsetzung",
            title: "Design und Full-Stack in einem Loop.",
            body: "UX/UI, Frontend, Daten, Auth, Deployment und Iteration bleiben verbunden statt in Silos zu zerfallen.",
          },
          {
            label: "Workflow",
            title: "AI-native, ohne Produktgefühl zu verlieren.",
            body: "KI beschleunigt Recherche und Umsetzung, während Produkturteil den Output fokussiert und poliert hält.",
          },
        ],
        detailHref: "/about",
      },
      {
        id: "contact",
        title: "Kontakt",
        subtitle: "Ein fokussiertes Projekt starten",
        eyebrow: "Startpunkt",
        headline: "Eine grobe Produktidee im Kopf?",
        description:
          "Schick mir die Idee, den aktuellen Engpass oder die Seite, die stärker performen soll. Ich helfe, den nächsten Schritt zu schärfen.",
        chips: ["E-Mail", "Projektbrief", "Nächster Schritt"],
        details: [
          "Bester Startpunkt: ein Absatz dazu, was du launchen möchtest.",
          "Dazu: für wen es ist, was heute existiert und wo Reibung entsteht.",
          "Bei kleinen Projekten ist der erste sinnvolle Schritt meist ein fokussierter Umfang und Prototyp.",
          "E-Mail: hello@lukaskaffer.com",
        ],
        screen: {
          sideLabel: "Next",
          sideValue: "→",
          rows: [
            { label: "Senden", value: "Grobe Idee" },
            { label: "Klären", value: "Scope + Flow" },
            { label: "Starten", value: "Fokussierter Build" },
          ],
        },
        modalSections: [
          {
            label: "Start",
            title: "Schick die grobe Version.",
            body: "Ein kurzer Absatz reicht: was du launchen möchtest, für wen es ist und was aktuell Momentum blockiert.",
          },
          {
            label: "Nächster Schritt",
            title: "Aus Unklarheit wird ein fokussierter erster Zug.",
            body: "Der erste sinnvolle Schritt ist meistens ein scharfer Scope, eine Produktrichtung und ein Prototyp oder Umsetzungsplan.",
          },
        ],
        detailHref: "/contact",
      },
    ],
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = pageCopy[language];
  const panels = copy.panels;
  const [activeId, setActiveId] = useState(panels[0].id);
  const [modalPanelId, setModalPanelId] = useState<string | null>(null);
  const activePanel = panels.find((panel) => panel.id === activeId) ?? panels[0];
  const modalPanel = modalPanelId
    ? panels.find((panel) => panel.id === modalPanelId) ?? null
    : null;

  useEffect(() => {
    if (!modalPanelId) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalPanelId(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [modalPanelId]);

  return (
    <main className="min-h-svh overflow-hidden bg-[#f8f9f7] text-[#1b1c1a]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(28,32,29,0.055),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(248,249,247,0.94))]" />
      <div className="fixed left-6 top-4 z-40 flex max-w-[calc(100vw-48px)] items-center gap-1 rounded-full border border-[#d9ddd8] bg-white/82 p-1 text-[11px] font-semibold text-[#8d928b] shadow-[0_12px_40px_rgba(20,24,22,0.06)] backdrop-blur sm:left-auto sm:right-5 sm:top-5 sm:text-[12px] lg:right-6">
        <span className="sr-only">{copy.ui.languageLabel}</span>
        {(["en", "de"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setLanguage(item)}
            className={`rounded-full px-3 py-1.5 transition ${
              language === item
                ? "bg-[#1b1c1a] text-white shadow-[0_0_0_3px_rgba(0,184,173,0.08)]"
                : "hover:bg-white hover:text-[#1b1c1a]"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="relative mx-auto grid min-h-svh w-full min-w-0 max-w-[1160px] grid-cols-1 px-6 py-8 lg:grid-cols-[410px_1fr] lg:items-center lg:gap-24 lg:px-0 lg:py-0">
        <section className="flex w-full min-w-0 flex-col justify-center pt-10 lg:min-h-[720px] lg:max-w-none lg:pt-0">
          <div>
            <p className="text-[21px] font-semibold tracking-[-0.03em] text-[#1b1c1a]">
              {copy.hero.name}
            </p>
          </div>
          <h1 className="mt-3 max-w-[390px] text-[29px] font-medium leading-[1.22] tracking-[-0.045em] text-[#50534f]">
            {copy.hero.headline}
          </h1>
          <p className="mt-6 max-w-[355px] text-[15px] leading-7 text-[#747872]">
            {copy.hero.subcopy}
          </p>

          <div className="mt-6 grid w-[calc(100vw-48px)] max-w-[375px] grid-cols-3 gap-1.5 sm:w-full sm:gap-2">
            {copy.hero.proof.map((proof) => (
              <div
                key={proof}
                className="rounded-[14px] border border-[#e7ebe5] bg-white/54 px-2 py-2 text-[9px] font-semibold leading-4 text-[#686d67] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:px-3 sm:text-[10px]"
              >
                <span className="mb-1 block h-1 w-5 rounded-full bg-[#00b8ad]" />
                {proof}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#9a9e98]">
            <span className="h-px w-8 bg-gradient-to-r from-[#00b8ad] to-[#d9ddd8]" />
            {copy.hero.indexLabel}
          </div>

          <nav className="mt-8 flex w-[calc(100vw-48px)] max-w-[410px] flex-col gap-2 sm:w-full" aria-label={copy.ui.navLabel}>
            {panels.map((item, index) => {
              const isActive = item.id === activePanel.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`group relative grid min-h-[60px] w-full grid-cols-[36px_minmax(0,1fr)_24px] items-center gap-2 overflow-hidden rounded-[20px] border px-3 py-3 text-left transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#00b8ad]/30 sm:min-h-[64px] sm:grid-cols-[38px_minmax(0,1fr)_28px] sm:gap-3 ${
                    isActive
                      ? "border-[#d9ddd8] bg-white/88 text-[#1b1c1a] shadow-[0_18px_54px_rgba(20,24,22,0.07)]"
                      : "border-transparent text-[#9a9e98] hover:border-[#e1e4df] hover:bg-white/62 hover:text-[#1b1c1a]"
                  }`}
                >
                  {isActive ? (
                    <span className="accent-line absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-[#00b8ad]" />
                  ) : null}
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold transition ${
                      isActive
                        ? "bg-[#1b1c1a] text-white shadow-[0_0_0_4px_rgba(0,184,173,0.08)]"
                        : "bg-[#edf0ec] text-[#9a9e98]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold tracking-[-0.02em]">
                      {item.title}
                    </span>
                    <span className="mt-1 hidden text-[12px] font-medium text-[#9fa39d] sm:block">
                      {item.subtitle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className={`transition ${
                      isActive
                        ? "opacity-70"
                        : "opacity-35 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </section>

        <section
          className="relative mt-14 min-h-[420px] min-w-0 overflow-hidden lg:mt-0 lg:min-h-[720px] lg:overflow-visible"
          aria-label="Interactive product desk preview"
        >
          <DeviceDesk
            panel={activePanel}
            labels={copy.ui}
            onOpenDetails={() => setModalPanelId(activePanel.id)}
          />
        </section>
      </div>

      <footer className="fixed bottom-5 right-6 hidden items-center gap-5 text-[13px] font-medium text-[#a2a6a0] lg:flex">
        <a className="transition hover:text-[#1b1c1a]" href="mailto:hello@lukaskaffer.com">
          {copy.ui.email}
        </a>
        <a className="transition hover:text-[#1b1c1a]" href="https://viennaeventradar.at">
          {copy.ui.product}
        </a>
        <button
          type="button"
          onClick={() => setModalPanelId("contact")}
          className="rounded-full border border-[#d9ddd8] bg-white/62 px-4 py-2 text-[#1b1c1a] transition hover:border-[#00b8ad]/45 hover:text-[#007f78]"
        >
          {copy.ui.brief}
        </button>
        <button
          type="button"
          onClick={() => setModalPanelId(activePanel.id)}
          className="transition hover:text-[#1b1c1a]"
        >
          {copy.ui.details}
        </button>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9ddd8] bg-white/62 text-[#747872] transition hover:border-[#00b8ad]/40 hover:text-[#00a69b]">
          <Mail size={14} />
        </span>
      </footer>

      {modalPanel ? (
        <DetailModal
          panel={modalPanel}
          labels={copy.ui}
          onClose={() => setModalPanelId(null)}
        />
      ) : null}
    </main>
  );
}

function DeviceDesk({
  panel,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative mx-auto flex min-h-[520px] max-w-[720px] items-center justify-center lg:min-h-[720px] xl:max-w-[820px] xl:translate-x-8 2xl:translate-x-16">
      <div className="absolute left-1/2 top-[43%] h-[460px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e1e6e2] blur-3xl" />
      <div className="absolute bottom-[64px] left-[52%] h-[138px] w-[870px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(155,165,160,0.22),rgba(247,248,246,0)_66%)]" />
      <div className="absolute bottom-[110px] left-[52%] h-px w-[820px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9ddd8] to-transparent" />

      <div className="relative w-full max-w-[720px] xl:max-w-[760px]">
        <div className="absolute -left-1 bottom-[72px] z-20 w-[128px] rotate-[-2deg] sm:-left-8 sm:w-[148px] lg:-left-12">
          <IPhone panel={panel} onOpenDetails={onOpenDetails} />
        </div>

        <div className="relative z-10 ml-auto w-[89%] max-w-[620px] xl:max-w-[660px]">
          <MacBook panel={panel} labels={labels} onOpenDetails={onOpenDetails} />
        </div>
      </div>
    </div>
  );
}

function MacBook({
  panel,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative">
      <div className="relative rounded-t-[19px] border-[7px] border-[#111211] bg-[#111211] shadow-[0_32px_96px_rgba(17,18,17,0.24)]">
        <span className="absolute left-1/2 top-1.5 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2a2b29] ring-1 ring-white/10" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-[radial-gradient(circle_at_82%_18%,rgba(0,184,173,0.34),transparent_30%),radial-gradient(circle_at_90%_82%,rgba(0,184,173,0.18),transparent_26%),linear-gradient(135deg,#fbfbf8_0%,#eef2ee_58%,#dff1ef_100%)] p-[22px]">
          <div className="screen-sheen pointer-events-none absolute inset-y-0 left-[-45%] w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/48 to-transparent" />
          <div className="relative h-full overflow-hidden rounded-[18px] border border-white/72 bg-white/82 p-4 shadow-[0_20px_54px_rgba(17,24,22,0.13)] backdrop-blur">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/54 to-transparent" />
            <ScreenPanel
              key={`desktop-${panel.id}`}
              panel={panel}
              labels={labels}
              onOpenDetails={onOpenDetails}
            />
          </div>
        </div>
      </div>
      <div className="relative -mx-8 h-[20px] rounded-b-[30px] bg-gradient-to-b from-[#e2e4df] via-[#cfd3cc] to-[#b8beb5] shadow-[0_22px_48px_rgba(17,18,17,0.14)]">
        <div className="absolute left-1/2 top-0 h-[6px] w-28 -translate-x-1/2 rounded-b-full bg-[#b8beb5] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.35)]" />
        <div className="absolute inset-x-8 top-0 h-px bg-white/70" />
      </div>
      <div className="mx-auto h-[62px] w-[84%] rounded-b-[42px] bg-[radial-gradient(ellipse_at_top,rgba(135,145,139,0.2),transparent_64%)]" />
    </div>
  );
}

function IPhone({ panel, onOpenDetails }: { panel: Panel; onOpenDetails: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpenDetails}
      className="group relative block w-full rounded-[34px] bg-[linear-gradient(135deg,#cdd2cc,#f5f6f3_24%,#272826_29%,#10110f_100%)] p-[2px] text-left shadow-[0_30px_74px_rgba(17,18,17,0.22)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#00b8ad]/30"
      aria-label={`Open details for ${panel.title}`}
    >
      <span className="absolute -left-[3px] top-[23%] h-10 w-[3px] rounded-l-full bg-[#c4cac2]" />
      <span className="absolute -left-[3px] top-[36%] h-8 w-[3px] rounded-l-full bg-[#151614]" />
      <span className="absolute -right-[3px] top-[34%] h-14 w-[3px] rounded-r-full bg-[#151614]" />
      <div className="rounded-[33px] bg-[#0d0d0c] p-[5px]">
        <div className="relative aspect-[9/19.7] overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_85%_82%,rgba(0,184,173,0.16),transparent_28%),linear-gradient(160deg,#ffffff_0%,#eef1ed_54%,#d7efeb_152%)] px-3 pb-3 pt-4">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/62 to-transparent" />
          <div className="absolute left-1/2 top-2.5 z-20 h-[15px] w-[58px] -translate-x-1/2 rounded-full bg-[#10100f] shadow-[inset_10px_0_18px_rgba(255,255,255,0.04)]" />
          <div className="absolute left-[calc(50%+20px)] top-[15px] z-20 h-1.5 w-1.5 rounded-full bg-[#2c2c2b]" />
          <PhoneScreen key={`phone-${panel.id}`} panel={panel} />
        </div>
      </div>
    </button>
  );
}

function PhoneScreen({ panel }: { panel: Panel }) {
  return (
    <div className="flex h-full animate-[softReveal_0.34s_cubic-bezier(0.22,1,0.36,1)_both] flex-col justify-between pt-8">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[7px] font-bold tracking-[-0.02em] text-[#1b1c1a]/80">9:41</span>
          <span className="h-1.5 w-6 rounded-full bg-[#1b1c1a]/18" />
        </div>
        <div className="mb-4 flex items-center gap-1.5">
          <span className="accent-pulse h-1.5 w-1.5 rounded-full bg-[#00b8ad]" />
          <span className="text-[8px] font-bold text-[#1b1c1a]">{panel.eyebrow}</span>
        </div>
        <h3 className="text-[16px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#1b1c1a]">
          {panel.title}
        </h3>
        <p className="mt-3 text-[9px] leading-4 text-[#6b6f69]">{panel.subtitle}</p>
      </div>

      <div className="space-y-1.5">
        {panel.screen.rows.slice(0, 3).map((row, index) => (
          <div
            key={row.label}
            className="rounded-[13px] border border-white/68 bg-white/54 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]"
          >
            <div className="mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1b1c1a]/28" />
              <span className="text-[7px] font-semibold text-[#747872]">0{index + 1}</span>
            </div>
            <span className="text-[8px] font-semibold text-[#5f645e]">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenPanel({
  panel,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative flex h-full animate-[softReveal_0.34s_cubic-bezier(0.22,1,0.36,1)_both] flex-col">
      <div className="mb-4 flex items-center justify-between rounded-full border border-white/64 bg-white/34 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
        <div className="flex items-center gap-2">
          <span className="accent-pulse h-2 w-2 rounded-full bg-[#00b8ad]" />
          <span className="text-[11px] font-semibold text-[#1b1c1a]">{panel.eyebrow}</span>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="h-1.5 w-8 rounded-full bg-[#1b1c1a]/10" />
          <span className="h-1.5 w-5 rounded-full bg-[#1b1c1a]/10" />
        </div>
        <button
          type="button"
          onClick={onOpenDetails}
          className="rounded-full border border-[#e1e4df] bg-white/72 px-3 py-1 text-[10px] font-semibold text-[#747872] transition hover:border-[#00b8ad]/35 hover:bg-white hover:text-[#007f78]"
        >
          {labels.moreDetails}
        </button>
      </div>

      <div className="grid flex-1 grid-cols-[1fr_96px] gap-3">
        <div className="flex flex-col justify-center rounded-[18px] border border-[#e7ebe5] bg-white/48 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
          <p className="max-w-[275px] text-[13px] font-medium text-[#747872]">{panel.subtitle}</p>
          <h2 className="mt-2 max-w-[350px] text-[31px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#1b1c1a]">
            {panel.headline}
          </h2>
          <p className="mt-5 max-w-[350px] text-[13px] leading-6 text-[#646963]">
            {panel.description}
          </p>
        </div>

        <div className="hidden flex-col gap-3 md:flex">
          <div className="flex flex-1 flex-col justify-between rounded-[18px] border border-white/58 bg-white/36 p-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8f948e]">
              {panel.screen.sideLabel}
            </span>
            <span className="text-[26px] font-semibold tracking-[-0.06em] text-[#1b1c1a]">
              {panel.screen.sideValue}
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-[18px] border border-white/58 bg-[#1b1c1a]/[0.05] p-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8f948e]">
              {panel.screen.rows[0]?.label}
            </span>
            <span className="accent-pulse h-7 w-7 rounded-full bg-[#00b8ad] shadow-[0_10px_24px_rgba(0,184,173,0.22)]" />
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {panel.screen.rows.slice(0, 3).map((row) => (
          <button
            key={row.label}
            type="button"
            onClick={onOpenDetails}
            className="rounded-[14px] border border-[#e7ebe5] bg-[#f6f8f5] px-3 py-3 text-left transition hover:-translate-y-0.5 hover:border-[#00b8ad]/22 hover:bg-white hover:shadow-[0_12px_32px_rgba(20,24,22,0.07)] focus:outline-none focus:ring-2 focus:ring-[#00b8ad]/24"
          >
            <span className="block text-[9px] font-semibold uppercase tracking-[0.11em] text-[#8f948e]">
              {row.label}
            </span>
            <span className="mt-1 block text-[11px] font-semibold text-[#626762]">{row.value}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function DetailModal({
  panel,
  labels,
  onClose,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  onClose: () => void;
}) {
  const sections = panel.modalSections ?? [];

  return (
    <div
      className="fixed inset-0 z-50 flex animate-[modalFade_0.22s_ease-out_both] items-center justify-center bg-[#f7f8f6]/60 px-5 backdrop-blur-[14px]"
      onClick={onClose}
    >
      <article
        className="w-full max-w-[760px] animate-[modalIn_0.34s_cubic-bezier(0.22,1,0.36,1)_both] overflow-hidden rounded-[34px] border border-[#d9ddd8] bg-white/94 shadow-[0_34px_130px_rgba(20,24,22,0.14)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-[#e7ebe5] bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(238,242,238,0.7))] p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#969b95]">
                {panel.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[560px] text-[34px] font-semibold leading-[1] tracking-[-0.05em] text-[#1b1c1a] sm:text-[44px]">
                {panel.headline}
              </h2>
            </div>
            <button
              type="button"
              aria-label={labels.close}
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9ddd8] bg-white/70 text-[#747872] transition hover:bg-[#1b1c1a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00b8ad]/24"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-5 max-w-[600px] text-[16px] leading-8 text-[#646963]">
            {panel.description}
          </p>
        </div>

        <div className="p-5 sm:p-6">
          {sections.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {sections.map((section) => (
                <div
                  key={section.label}
                  className="rounded-[20px] border border-[#e7ebe5] bg-white/62 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#00a69b]">
                    {section.label}
                  </span>
                  <h3 className="mt-3 text-[17px] font-semibold leading-5 tracking-[-0.03em] text-[#1b1c1a]">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-medium leading-6 text-[#646963]">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-3">
              {panel.details.map((detail, index) => (
                <div
                  key={detail}
                  className="grid grid-cols-[34px_1fr] gap-3 rounded-[20px] border border-[#e7ebe5] bg-white/62 px-4 py-4 text-[15px] font-medium leading-6 text-[#50544f]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef1ed] text-[11px] font-semibold text-[#747872]">
                    {index + 1}
                  </span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          )}

          {panel.id === "contact" ? (
            <a
              href="mailto:hello@lukaskaffer.com"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#1b1c1a] px-5 text-[14px] font-semibold text-white transition hover:bg-black"
            >
              {labels.writeEmail}
            </a>
          ) : null}
        </div>
      </article>
    </div>
  );
}
