"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

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
    entries: string;
    startProject: string;
    viewCase: string;
    seeServices: string;
  };
  panels: Panel[];
};

const ROLE = "AI-first Web + Native iOS Product Builder";

const pageCopy: Record<Language, PageCopy> = {
  en: {
    hero: {
      name: "Lukas Kaffer",
      headline: "I build polished web products and native iOS apps.",
      subcopy:
        "Personal portfolio, real product work: websites, MVPs, backend logic, AI-first workflows and native Apple app experiences.",
      proof: ["Live product", "AI-first approach", "Native iOS 26"],
      indexLabel: "Project index",
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
      entries: "entries",
      startProject: "Start a project",
      viewCase: "View case study",
      seeServices: "See services",
    },
    panels: [
      {
        id: "work",
        title: "Showcase",
        subtitle: "Vienna Event Radar — web product and native iOS app",
        eyebrow: "Featured work",
        headline: "From idea to shipped product.",
        description:
          "A live event-discovery product, built from nothing to launch: Next.js, Supabase, auth and RLS, backend logic, admin workflows, an AI-first research pipeline, Vercel deployment and a native iOS 26 app experience.",
        chips: ["Full-stack", "AI-first", "Native iOS 26"],
        details: [
          "Full-stack web product built from zero to launch.",
          "Supabase auth, database structure, RLS policies and backend logic.",
          "AI-first event research pipeline with admin review workflows.",
          "Mobile-first dashboard, SEO/security polish and Vercel deployment.",
          "Native iOS 26 app direction with Apple-style navigation, search and bottom-bar patterns.",
        ],
        screen: {
          sideLabel: "Live",
          sideValue: "01",
          rows: [
            { label: "Pipeline", value: "AI-first research" },
            { label: "Stack", value: "Next.js + Supabase" },
            { label: "Surface", value: "Web + native iOS" },
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
            body: "The product combines AI-first event research, structured admin review, Supabase auth/database/RLS, backend logic and a mobile-first public experience.",
          },
          {
            label: "Stack",
            title: "Built with a modern full-stack and Apple-native setup.",
            body: "Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel and a native iOS 26 app direction with Apple interface patterns.",
          },
          {
            label: "Outcome",
            title: "Shipped, stable and ready to keep evolving.",
            body: "The launch included SEO/security polish, deployment discipline and a foundation that now extends into a richer iOS app experience.",
          },
        ],
        detailHref: "/work",
      },
      {
        id: "services",
        title: "Services",
        subtitle: "Websites, MVPs, backend logic and iOS apps",
        eyebrow: "What I build",
        headline: "From a landing page to a full product.",
        description:
          "Websites and landing pages, MVPs and web apps, backend logic, native iOS 26 Apple apps, internal tools, AI-first automations and UX/UI audits — scoped to what the project actually needs.",
        chips: ["Landing pages", "Backend logic", "iOS apps"],
        details: [
          "Websites and landing pages that are fast, work on mobile and make the point in the first few seconds.",
          "MVPs and full-stack web apps with auth, database, backend logic, dashboard and deployment.",
          "Native iOS 26 app interfaces with Apple-first interaction patterns.",
          "AI automations and internal tools that reduce repetitive work.",
        ],
        screen: {
          sideLabel: "Offer",
          sideValue: "04",
          rows: [
            { label: "Websites", value: "Premium launch pages" },
            { label: "Products", value: "MVPs + backend" },
            { label: "Apple", value: "Native iOS 26 apps" },
          ],
        },
        modalSections: [
          {
            label: "Web",
            title: "Sites that look right and convert.",
            body: "Clear, fast pages for founders and small teams — credible at first glance, and direct about what you do and what to do next.",
          },
          {
            label: "Product",
            title: "MVPs that actually ship.",
            body: "Auth, database, backend logic, dashboards, data flows and deployment handled as one connected product build.",
          },
          {
            label: "iOS",
            title: "Native Apple app experiences.",
            body: "iOS 26 interfaces shaped around Apple-native navigation, search, bottom bars and the details that make an app feel at home on the device.",
          },
          {
            label: "AI ops",
            title: "AI-first systems that remove repetitive work.",
            body: "Internal workflows, API integrations, backend logic and AI-first research/review systems for calmer operations.",
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
          "A simple way of working: get the scope sharp, design it, build it, ship it, then improve it from real use.",
        chips: ["Shape", "Design", "Build", "Launch"],
        details: [
          "Shape the offer, target user, core workflow and launch scope.",
          "Design the interface, interaction rhythm and responsive system.",
          "Build with a clean stack and AI-first implementation speed.",
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
            body: "The product is implemented with a clean stack, AI-first speed and production standards.",
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
        subtitle: "A personal product practice",
        eyebrow: "Lukas Kaffer",
        headline: "I like turning rough ideas into things people can actually use.",
        description:
          "I am Lukas: one person combining product thinking, interface taste and full-stack implementation. The part I enjoy most is making something feel clear, useful and polished enough to ship.",
        chips: ["Next.js", "Supabase", "Native iOS"],
        details: [
          "Product thinking before implementation: what should exist, why and for whom.",
          "An eye for design: clean interfaces, careful layout, motion used sparingly.",
          "Full-stack development with Next.js, React, TypeScript, Supabase and Vercel.",
          "Native Apple app direction with a strong eye for iOS 26 interaction patterns.",
          "AI-first workflows for faster building, research, backend logic and operational systems.",
        ],
        screen: {
          sideLabel: "Mode",
          sideValue: "AI",
          rows: [
            { label: "Taste", value: "Product + UI" },
            { label: "Depth", value: "Full-stack + iOS" },
            { label: "Speed", value: "AI-first" },
          ],
        },
        modalSections: [
          {
            label: "Point of view",
            title: "Product shape first, implementation second.",
            body: "The goal is not just to build screens, but to clarify what should exist and make it feel useful, trustworthy and personal.",
          },
          {
            label: "Execution",
            title: "Design and full-stack in one loop.",
            body: "UX/UI, frontend, data, auth, deployment and iteration stay connected instead of being handed between silos.",
          },
          {
            label: "Workflow",
            title: "AI-first, without losing taste.",
            body: "AI is part of the operating system for the work: research, backend logic, implementation and review move faster while product judgment keeps the result specific.",
          },
        ],
        detailHref: "/about",
      },
      {
        id: "contact",
        title: "Contact",
        subtitle: "Start with a rough idea",
        eyebrow: "Start here",
        headline: "Have a rough product idea?",
        description:
          "Send the idea, the current bottleneck, or the page that isn't doing its job. I'll help you figure out the next step.",
        chips: ["Email", "Project brief", "Next step"],
        details: [
          "Best starting point: one paragraph about what you want to launch.",
          "Include who it is for, what exists today and where the friction is.",
          "For small projects, the first useful step is usually a clear scope and a quick prototype.",
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
      headline: "Ich baue Webprodukte und native iOS Apps.",
      subcopy:
        "Ein persönliches Portfolio, echte Produktarbeit: Websites, MVPs, Backend-Logiken, AI-first Workflows und native Apple App Experiences.",
      proof: ["Live-Produkt", "AI-first Approach", "Native iOS 26"],
      indexLabel: "Projektindex",
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
      entries: "Einträge",
      startProject: "Projekt starten",
      viewCase: "Case Study ansehen",
      seeServices: "Leistungen ansehen",
    },
    panels: [
      {
        id: "work",
        title: "Showcase",
        subtitle: "Vienna Event Radar — Webprodukt und native iOS App",
        eyebrow: "Ausgewählte Arbeit",
        headline: "Von der Idee zum gelaunchten Produkt.",
        description:
          "Ein Live-Produkt zur Event-Entdeckung, von null bis Launch gebaut: Next.js, Supabase, Auth und RLS, Backend-Logiken, Admin-Workflows, eine AI-first Recherchepipeline, Vercel Deployment und eine native iOS 26 App Experience.",
        chips: ["Full-Stack", "AI-first", "Native iOS 26"],
        details: [
          "Full-Stack Webprodukt von null bis Launch umgesetzt.",
          "Supabase Auth, Datenbankstruktur, RLS Policies und Backend-Logiken aufgebaut.",
          "AI-first Event-Recherche mit Admin-Review-Workflows.",
          "Mobile-first Dashboard, SEO-/Security-Polish und Vercel Deployment.",
          "Native iOS 26 Ausrichtung mit Apple-typischer Navigation, Suche und Bottom-Bar-Patterns.",
        ],
        screen: {
          sideLabel: "Live",
          sideValue: "01",
          rows: [
            { label: "Pipeline", value: "AI-first Recherche" },
            { label: "Stack", value: "Next.js + Supabase" },
            { label: "Fläche", value: "Web + native iOS" },
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
            body: "Das Produkt verbindet AI-first Event-Recherche, strukturierten Admin-Review, Supabase Auth/Datenbank/RLS, Backend-Logiken und eine mobile-first Public Experience.",
          },
          {
            label: "Stack",
            title: "Mit modernem Full-Stack und Apple-nativem Setup gebaut.",
            body: "Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel und eine native iOS 26 App-Ausrichtung mit Apple Interface Patterns.",
          },
          {
            label: "Ergebnis",
            title: "Gelauncht, stabil und bereit zum Weiterentwickeln.",
            body: "Zum Launch gehörten SEO-/Security-Polish, Deployment-Disziplin und eine Grundlage, die jetzt in eine stärkere iOS App Experience hineinwächst.",
          },
        ],
        detailHref: "/work",
      },
      {
        id: "services",
        title: "Leistungen",
        subtitle: "Websites, MVPs, Backend-Logiken und iOS Apps",
        eyebrow: "Was ich baue",
        headline: "Von der Landingpage bis zum fertigen Produkt.",
        description:
          "Websites und Landingpages, MVPs und Web-Apps, Backend-Logiken, native iOS 26 Apple Apps, interne Tools, AI-first Automationen und UX/UI-Audits — zugeschnitten auf das, was das Projekt wirklich braucht.",
        chips: ["Landingpages", "Backend-Logiken", "iOS Apps"],
        details: [
          "Websites und Landingpages, die schnell laden, auf dem Handy funktionieren und in den ersten Sekunden auf den Punkt kommen.",
          "MVPs und Full-Stack-Web-Apps mit Auth, Datenbank, Backend-Logiken, Dashboard und Deployment.",
          "Native iOS 26 App Interfaces mit Apple-first Interaktionsmustern.",
          "AI-first Automationen und interne Tools, die wiederkehrende Arbeit reduzieren.",
        ],
        screen: {
          sideLabel: "Angebot",
          sideValue: "04",
          rows: [
            { label: "Websites", value: "Premium Launch Pages" },
            { label: "Produkte", value: "MVPs + Backend" },
            { label: "Apple", value: "Native iOS 26 Apps" },
          ],
        },
        modalSections: [
          {
            label: "Web",
            title: "Seiten, die wirken und konvertieren.",
            body: "Klare, schnelle Seiten für Gründer und kleine Teams — auf den ersten Blick glaubwürdig und klar darin, was du tust und was als Nächstes passieren soll.",
          },
          {
            label: "Produkt",
            title: "MVPs, die wirklich shippen.",
            body: "Auth, Datenbank, Backend-Logiken, Dashboards, Datenflüsse und Deployment als zusammenhängender Produkt-Build.",
          },
          {
            label: "iOS",
            title: "Native Apple App Experiences.",
            body: "iOS 26 Interfaces mit Apple-nativer Navigation, Suche, Bottom Bars und den Details, durch die sich eine App wirklich zuhause auf dem Gerät anfühlt.",
          },
          {
            label: "KI Ops",
            title: "AI-first Systeme, die wiederkehrende Arbeit entfernen.",
            body: "Interne Workflows, API-Integrationen, Backend-Logiken und AI-first Recherche-/Review-Systeme für ruhigere Abläufe.",
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
          "Eine einfache Arbeitsweise: den Scope scharf ziehen, gestalten, bauen, launchen — und dann aus echter Nutzung verbessern.",
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
        subtitle: "Eine persönliche Produktpraxis",
        eyebrow: "Lukas Kaffer",
        headline: "Ich mache aus groben Ideen Dinge, die man wirklich nutzen kann.",
        description:
          "Ich bin Lukas: eine Person, die Produktdenken, Interface-Gefühl und Full-Stack-Umsetzung verbindet. Am liebsten arbeite ich an Dingen, die klarer, nützlicher und hochwertig genug werden, um sie wirklich zu launchen.",
        chips: ["Next.js", "Supabase", "Native iOS"],
        details: [
          "Produktdenken vor Umsetzung: Was sollte existieren, warum und für wen?",
          "Ein Auge fürs Design: klare Interfaces, sorgfältiges Layout, Motion sparsam eingesetzt.",
          "Full-Stack-Entwicklung mit Next.js, React, TypeScript, Supabase und Vercel.",
          "Native Apple App Ausrichtung mit starkem Blick auf iOS 26 Interaktionsmuster.",
          "AI-first Workflows für schnelleres Bauen, Recherche, Backend-Logiken und operative Systeme.",
        ],
        screen: {
          sideLabel: "Modus",
          sideValue: "AI",
          rows: [
            { label: "Taste", value: "Produkt + UI" },
            { label: "Tiefe", value: "Full-Stack + iOS" },
            { label: "Tempo", value: "AI-first" },
          ],
        },
        modalSections: [
          {
            label: "Haltung",
            title: "Produktform zuerst, Umsetzung danach.",
            body: "Es geht nicht nur darum, Screens zu bauen, sondern zu klären, was existieren sollte und wie es nützlich, vertrauenswürdig und persönlich wirkt.",
          },
          {
            label: "Umsetzung",
            title: "Design und Full-Stack in einem Loop.",
            body: "UX/UI, Frontend, Daten, Auth, Deployment und Iteration bleiben verbunden statt in Silos zu zerfallen.",
          },
          {
            label: "Workflow",
            title: "AI-first, ohne Geschmack zu verlieren.",
            body: "AI ist Teil des Arbeitsmodus: Recherche, Backend-Logiken, Umsetzung und Review werden schneller, während Produkturteil das Ergebnis spezifisch hält.",
          },
        ],
        detailHref: "/about",
      },
      {
        id: "contact",
        title: "Kontakt",
        subtitle: "Mit einer groben Idee starten",
        eyebrow: "Startpunkt",
        headline: "Eine grobe Produktidee im Kopf?",
        description:
          "Schick mir die Idee, den aktuellen Engpass oder die Seite, die ihren Job nicht macht. Ich helfe dir, den nächsten Schritt zu finden.",
        chips: ["E-Mail", "Projektbrief", "Nächster Schritt"],
        details: [
          "Bester Startpunkt: ein Absatz dazu, was du launchen möchtest.",
          "Dazu: für wen es ist, was heute existiert und wo Reibung entsteht.",
          "Bei kleinen Projekten ist der erste sinnvolle Schritt meist ein klarer Scope und ein schneller Prototyp.",
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

const PANEL_ORDER = ["services", "work", "process", "about", "contact"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const copy = pageCopy[language];
  const panels = useMemo(
    () =>
      PANEL_ORDER.map((id) =>
        copy.panels.find((panel) => panel.id === id),
      ).filter((panel): panel is Panel => panel !== undefined),
    [copy.panels],
  );
  const [activeId, setActiveId] = useState(panels[0].id);
  const [modalPanelId, setModalPanelId] = useState<string | null>(null);
  const activeIndex = Math.max(
    0,
    panels.findIndex((panel) => panel.id === activeId),
  );
  const activePanel = panels[activeIndex] ?? panels[0];
  const modalPanel = modalPanelId
    ? panels.find((panel) => panel.id === modalPanelId) ?? null
    : null;

  useEffect(() => {
    const syncActivePanelFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && panels.some((panel) => panel.id === hash)) {
        setActiveId(hash);
      }
    };

    syncActivePanelFromHash();
    window.addEventListener("hashchange", syncActivePanelFromHash);

    return () => window.removeEventListener("hashchange", syncActivePanelFromHash);
  }, [panels]);

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
    <main className="relative min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_-8%,rgba(255,255,255,0.85),transparent_46%)]" />
      <div className="grain" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-[1240px] flex-col px-6 py-6 sm:px-8 lg:px-10 lg:py-5">
        {/* running head */}
        <header className="rise flex items-center justify-between gap-4 border-b border-[#e4e4e1] pb-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-lk.svg"
              alt=""
              width={30}
              height={30}
              priority
              className="block h-[30px] w-[30px] shrink-0 rounded-[9px] shadow-[0_8px_20px_rgba(0,184,173,0.12)]"
            />
            <span className="font-display text-[19px] font-medium leading-none tracking-[-0.01em] text-[#181811]">
              {copy.hero.name}
            </span>
          </div>
          <div className="flex items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="sr-only">{copy.ui.languageLabel}</span>
              {(["en", "de"] as const).map((item, index) => (
                <span key={item} className="flex items-center gap-1.5">
                  {index > 0 ? <span className="text-[#c8c6b9]">/</span> : null}
                  <button
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={`uppercase tracking-[0.12em] transition focus:outline-none focus-visible:text-[#06857c] ${
                      language === item
                        ? "text-[#181811]"
                        : "text-[#a8a89b] hover:text-[#181811]"
                    }`}
                  >
                    {item}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* editorial spread */}
        <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[minmax(0,378px)_1fr] lg:gap-24 lg:py-0">
          <section className="flex flex-col justify-center">
            <p
              className="rise font-mono text-[10px] uppercase tracking-[0.24em] text-[#06857c] sm:text-[11px]"
              style={{ animationDelay: "0.04s" }}
            >
              {ROLE}
            </p>
            <h1
              className="rise mt-4 max-w-[12ch] text-balance font-display text-[37px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#181811] sm:max-w-[16ch] sm:text-[42px]"
              style={{ animationDelay: "0.1s" }}
            >
              {copy.hero.headline}
            </h1>
            <p
              className="rise mt-3 max-w-[42ch] text-[14px] leading-6 text-[#6c6c61]"
              style={{ animationDelay: "0.16s" }}
            >
              {copy.hero.subcopy}
            </p>
            <p
              className="rise mt-4 font-mono text-[10px] uppercase tracking-[0.13em] text-[#9d9d90]"
              style={{ animationDelay: "0.22s" }}
            >
              {copy.hero.proof.join("   ·   ")}
            </p>

            <nav
              className="rise mt-7"
              aria-label={copy.ui.navLabel}
              style={{ animationDelay: "0.28s" }}
            >
              <div className="flex items-end justify-between border-b border-[#181811] pb-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#181811]">
                  {copy.hero.indexLabel}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a8a89b]">
                  {String(panels.length).padStart(2, "0")} {copy.ui.entries}
                </span>
              </div>
              <ul className="divide-y divide-[#e4e4e1]">
                {panels.map((item, index) => {
                  const isActive = item.id === activePanel.id;

                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        aria-current={isActive ? "true" : undefined}
                        className={`group grid w-full grid-cols-[2.15rem_minmax(0,1fr)_1.8rem] items-center gap-2.5 py-3 text-left transition-colors focus:outline-none sm:grid-cols-[2.35rem_minmax(0,1fr)_1.9rem] ${
                          isActive ? "bg-white/[0.22]" : "hover:bg-white/[0.14]"
                        }`}
                      >
                        <span
                          className={`font-mono text-[10.5px] tabular-nums transition-colors sm:text-[11px] ${
                            isActive
                              ? "text-[#06857c]"
                              : "text-[#b8b7aa] group-hover:text-[#7c7c70] group-focus-visible:text-[#7c7c70]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span
                            className={`block font-display leading-tight tracking-[-0.01em] transition-colors ${
                              isActive
                                ? "text-[17px] text-[#181811]"
                                : "text-[16px] text-[#8d8d82] group-hover:text-[#55554d] group-focus-visible:text-[#55554d]"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`grid transition-all duration-300 ease-out ${
                              isActive
                                ? "mt-1 grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <span className="overflow-hidden">
                              <span className="block truncate text-[11.5px] leading-5 text-[#6c6c61] sm:text-[12px]">
                                {item.subtitle}
                              </span>
                            </span>
                          </span>
                        </span>
                        <span
                          className={`ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full transition ${
                            isActive
                              ? "bg-[#00b8ad]/10 text-[#06857c]"
                              : "text-[#c8c6b9] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                          }`}
                        >
                          <ArrowUpRight size={13} />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className="rise mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ animationDelay: "0.34s" }}
            >
              <button
                type="button"
                onClick={() => setModalPanelId("contact")}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#181811] pl-5 pr-4 text-[13px] font-medium text-[#f2f2f0] transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
              >
                {copy.ui.startProject}
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <a
                href="mailto:hello@lukaskaffer.com"
                className="font-mono text-[11px] uppercase tracking-[0.13em] text-[#6c6c61] underline decoration-[#cdcbbe] underline-offset-[5px] transition hover:text-[#181811] hover:decoration-[#06857c]"
              >
                hello@lukaskaffer.com
              </a>
            </div>
          </section>

          <section
            className="relative min-h-[420px] lg:min-h-[560px]"
            aria-label="Interactive product preview"
          >
            <div className="rise h-full" style={{ animationDelay: "0.18s" }}>
              <DeviceDesk
                panel={activePanel}
                index={activeIndex}
                labels={copy.ui}
                onOpenDetails={() => setModalPanelId(activePanel.id)}
              />
            </div>
          </section>
        </div>

        {/* running foot */}
        <footer className="rise flex items-center justify-between gap-4 border-t border-[#e4e4e1] pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#9d9d90]">
          <span>© 2026 — Vienna, AT</span>
          <span className="hidden items-center gap-2 text-[#7c7c70] sm:flex">
            <span className="accent-pulse h-1.5 w-1.5 rounded-full bg-[#00b8ad]" />
            {language === "de" ? "Offen für ausgewählte Projekte" : "Open to selected projects"}
          </span>
          <div className="flex items-center gap-5">
            <a
              href="https://viennaeventradar.at"
              className="transition hover:text-[#181811]"
            >
              {copy.ui.product} ↗
            </a>
            <button
              type="button"
              onClick={() => setModalPanelId(activePanel.id)}
              className="uppercase tracking-[0.15em] transition hover:text-[#181811] focus:outline-none focus-visible:text-[#181811]"
            >
              {copy.ui.details}
            </button>
          </div>
        </footer>
      </div>

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
  index,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  index: number;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative mx-auto flex min-h-[440px] max-w-[760px] items-center justify-center lg:min-h-[560px] xl:max-w-[840px] lg:translate-x-2 xl:translate-x-8">
      <div className="absolute left-[55%] top-[43%] h-[340px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,184,173,0.11),transparent_68%)] blur-2xl" />
      <div className="absolute bottom-[58px] left-[55%] h-[74px] w-[500px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(22,23,20,0.13),transparent_72%)] blur-lg" />
      <div className="absolute bottom-[102px] left-[55%] h-px w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#dcdcd8] to-transparent" />

      <div className="relative w-full max-w-[720px] xl:max-w-[770px]">
        <div className="absolute -left-2 bottom-[44px] z-30 w-[114px] rotate-[-2deg] sm:-left-6 sm:w-[132px] lg:-left-14 lg:bottom-[62px]">
          <IPhone panel={panel} onOpenDetails={onOpenDetails} />
        </div>

        <div className="relative z-10 ml-auto w-[91%] max-w-[648px] xl:max-w-[688px]">
          <MacBook
            panel={panel}
            index={index}
            labels={labels}
            onOpenDetails={onOpenDetails}
          />
        </div>
      </div>
    </div>
  );
}

function MacBook({
  panel,
  index,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  index: number;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative">
      <div className="relative rounded-[26px] border-[9px] border-[#111211] bg-[#111211] shadow-[0_34px_110px_rgba(17,18,17,0.26)]">
        <span className="absolute left-1/2 top-2 z-30 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2a2b29] ring-1 ring-white/10" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[17px] bg-[#070b0c]">
          <MacBookScreen
            panel={panel}
            index={index}
            labels={labels}
            onOpenDetails={onOpenDetails}
          />
          <div className="screen-sheen pointer-events-none absolute inset-y-0 left-[-45%] w-[42%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
      <div className="mx-auto h-20 w-[17%] bg-gradient-to-b from-[#cfd3cc] via-[#b9bfb7] to-[#a9b0a7] shadow-[0_20px_50px_rgba(17,18,17,0.12)]" />
      <div className="relative mx-auto -mt-1 h-[24px] w-[46%] rounded-[50%] bg-gradient-to-b from-[#d9ddd8] to-[#b7bdb4] shadow-[0_22px_50px_rgba(17,18,17,0.16)]">
        <div className="absolute inset-x-8 top-1 h-px bg-white/60" />
      </div>
    </div>
  );
}

function MacBookScreen({
  panel,
  index,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  index: number;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div key={panel.id} className="screen-panel-in absolute inset-0 bg-[#070b0c]">
      {/* desktop wallpaper */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(0,184,173,0.16),transparent_40%),radial-gradient(circle_at_10%_96%,rgba(255,255,255,0.05),transparent_36%),linear-gradient(152deg,#0c1415,#0a0d0d_62%,#070b0c)]" />

      {/* screen-in-screen window */}
      <div className="absolute bottom-[8%] left-[8.5%] right-[7%] top-[7%] overflow-hidden rounded-[12px] border border-white/[0.09] bg-[#0a1113] shadow-[0_26px_56px_-22px_rgba(0,0,0,0.85)]">
        {panel.id === "work" ? (
          <WorkWindow labels={labels} onOpenDetails={onOpenDetails} />
        ) : panel.id === "about" ? (
          <AboutWindow panel={panel} labels={labels} onOpenDetails={onOpenDetails} />
        ) : (
          <SlideWindow
            panel={panel}
            index={index}
            labels={labels}
            onOpenDetails={onOpenDetails}
          />
        )}
      </div>
    </div>
  );
}

function WindowBar({ name, meta }: { name: string; meta: string }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-white/[0.025] px-3 py-2">
      <div className="flex min-w-0 items-center gap-2">
        <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#00b8ad]" />
        <span className="truncate text-[9px] font-semibold uppercase tracking-[0.15em] text-white/70">
          {name}
        </span>
      </div>
      <span className="shrink-0 text-[8.5px] uppercase tracking-[0.13em] text-white">
        {meta}
      </span>
    </div>
  );
}

function WorkWindow({
  labels,
  onOpenDetails,
}: {
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <WindowBar name="Vienna Event Radar — Showcase" meta="viennaeventradar.at" />
      <div className="relative flex-1 overflow-hidden">
        <Image
          src="/case-studies/vienna-web-desktop-tall.png"
          alt="Vienna Event Radar web product"
          width={1440}
          height={1800}
          priority
          sizes="(min-width: 1280px) 590px, (min-width: 1024px) 52vw, 91vw"
          className="product-scroll-desktop absolute inset-x-0 top-0 w-full max-w-none"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,12,0.16),transparent_24%,transparent_82%,rgba(7,11,12,0.22))]" />
        <button
          type="button"
          onClick={onOpenDetails}
          className="group/btn absolute bottom-3 left-3 inline-flex max-w-[34%] items-center gap-1 rounded-full border border-white/30 bg-[#0a1113]/58 px-2.5 py-1 text-[7.5px] font-semibold uppercase tracking-[0.1em] text-white shadow-[0_12px_26px_rgba(0,0,0,0.26)] backdrop-blur-md transition hover:border-[#00b8ad]/55 hover:bg-[#0a1113]/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
        >
          {labels.moreDetails}
          <ArrowUpRight
            size={9}
            className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}

function AboutWindow({
  panel,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="flex h-full flex-col text-white">
      <WindowBar name="Lukas Kaffer — About" meta="Personal view" />
      <div className="relative flex flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(0,184,173,0.16),transparent_38%),radial-gradient(circle_at_8%_96%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(152deg,#0c1415,#0a0d0d_62%,#070b0c)]" />
        <span className="pointer-events-none absolute -bottom-9 -left-2 select-none font-display text-[140px] font-semibold leading-none tracking-[-0.05em] text-white/[0.04]">
          04
        </span>

        <div className="relative grid flex-1 grid-cols-[minmax(0,1fr)_34%] items-center gap-[6%] px-[7%] py-[6%]">
          <div className="min-w-0">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#00b8ad]">
              {panel.eyebrow}
            </p>
            <h2 className="mt-2.5 max-w-[18ch] font-display text-[23px] font-semibold leading-[1.14] tracking-[-0.02em] text-white">
              {panel.headline}
            </h2>
            <p className="mt-2.5 max-w-[40ch] text-[11.5px] leading-[1.52] text-white/58">
              {panel.description}
            </p>
            <button
              type="button"
              onClick={onOpenDetails}
              className="group/btn mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] py-1.5 pl-3.5 pr-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/75 transition hover:border-[#00b8ad]/55 hover:bg-white/[0.1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
            >
              {labels.moreDetails}
              <ArrowUpRight
                size={11}
                className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </button>
          </div>

          <div className="relative ml-auto w-full max-w-[154px]">
            <div className="absolute -inset-3 rounded-[24px] bg-[#00b8ad]/14 blur-xl" />
            <div className="relative overflow-hidden rounded-[18px] border border-white/14 bg-white/[0.04] p-1.5 shadow-[0_24px_56px_rgba(0,0,0,0.42)]">
              <div className="relative aspect-[9/14] overflow-hidden rounded-[13px] bg-[#111714]">
                <Image
                  src="/profile/lukas-coast.webp"
                  alt="Lukas Kaffer smiling by the ocean at sunset"
                  width={1400}
                  height={2489}
                  className="h-full w-full scale-[1.14] object-cover object-[50%_55%]"
                  sizes="154px"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,12,0.03),transparent_54%,rgba(7,11,12,0.14))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideWindow({
  panel,
  index,
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  index: number;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="flex h-full flex-col text-white">
      <WindowBar name={panel.title} meta="Lukas Kaffer" />
      <div className="relative flex flex-1 flex-col justify-center overflow-hidden p-[7%]">
        <span className="pointer-events-none absolute -bottom-9 -right-2 select-none font-display text-[140px] font-semibold leading-none tracking-[-0.05em] text-white/[0.04]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="relative text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#3fe6da]">
          {panel.eyebrow}
        </p>
        <h2 className="relative mt-2.5 max-w-[18ch] font-display text-[23px] font-semibold leading-[1.14] tracking-[-0.02em] text-white">
          {panel.headline}
        </h2>
        <p className="relative mt-2.5 max-w-[44ch] text-[11.5px] leading-[1.5] text-white/55">
          {panel.description}
        </p>
        <button
          type="button"
          onClick={onOpenDetails}
          className="group/btn relative mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] py-1.5 pl-3.5 pr-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/75 transition hover:border-[#00b8ad]/55 hover:bg-white/[0.1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
        >
          {labels.moreDetails}
          <ArrowUpRight
            size={11}
            className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>
    </div>
  );
}

function IPhone({ panel, onOpenDetails }: { panel: Panel; onOpenDetails: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpenDetails}
      className="group relative block w-full text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[14%]"
      aria-label={`Open details for ${panel.title}`}
    >
      <div className="relative aspect-[1350/2760] w-full drop-shadow-[0_30px_38px_rgba(17,18,17,0.22)]">
        <IPhonePreview />
      </div>
    </button>
  );
}

function IPhonePreview() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => undefined);
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-contain [transform:translateZ(0)]"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Vienna Event Radar Spotlight Picks Loop"
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
    >
      {/* Safari prefers HEVC/.mov with alpha; Chrome/Firefox/Edge fall back to VP9 WebM. */}
      <source src="/case-studies/iphone17-spotlight.mov" type='video/mp4; codecs="hvc1"' />
      <source src="/case-studies/iphone17-spotlight.webm" type="video/webm" />
    </video>
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
      className="fixed inset-0 z-50 flex animate-[modalFade_0.22s_ease-out_both] items-center justify-center bg-[#1a1a14]/30 px-5 backdrop-blur-[10px]"
      onClick={onClose}
    >
      <article
        className="w-full max-w-[720px] animate-[modalIn_0.34s_cubic-bezier(0.22,1,0.36,1)_both] overflow-hidden rounded-[26px] border border-[#e4e4e1] bg-[#f7f7f5] shadow-[0_44px_120px_-30px_rgba(20,24,22,0.4)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative border-b border-[#e4e4e1] p-7 sm:p-9">
          <button
            type="button"
            aria-label={labels.close}
            onClick={onClose}
            className="absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e0e0dc] bg-white/70 text-[#7c7c70] transition hover:bg-[#181811] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/30"
          >
            <X size={15} />
          </button>
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#06857c]">
            {panel.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[17ch] font-display text-[32px] font-semibold leading-[1.07] tracking-[-0.03em] text-[#181811] sm:text-[38px]">
            {panel.headline}
          </h2>
          <p className="mt-4 max-w-[58ch] text-[14.5px] leading-7 text-[#6c6c61]">
            {panel.description}
          </p>
        </div>

        <div className="max-h-[56vh] overflow-y-auto p-7 sm:px-9 sm:py-7">
          {sections.length > 0 ? (
            <div>
              {sections.map((section, index) => (
                <div
                  key={section.label}
                  className={`grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] ${
                    index > 0
                      ? "border-t border-[#eaeae7] pt-5"
                      : "pt-0"
                  } pb-5`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9d9d90]">
                    <span className="text-[#06857c]">
                      {String(index + 1).padStart(2, "0")}
                    </span>{" "}
                    — {section.label}
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-medium leading-[1.25] tracking-[-0.015em] text-[#181811]">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-6 text-[#6c6c61]">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {panel.details.map((detail, index) => (
                <div
                  key={detail}
                  className={`grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 ${
                    index > 0 ? "border-t border-[#eaeae7] pt-4" : "pt-0"
                  } pb-4`}
                >
                  <span className="font-mono text-[12px] tabular-nums text-[#06857c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14.5px] leading-6 text-[#54544c]">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          )}

          {panel.id === "contact" ? (
            <a
              href="mailto:hello@lukaskaffer.com"
              className="group mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#181811] pl-5 pr-4 text-[13px] font-medium text-[#f2f2f0] transition hover:bg-black"
            >
              {labels.writeEmail}
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : null}
        </div>
      </article>
    </div>
  );
}
