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
    role: string;
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

const pageCopy: Record<Language, PageCopy> = {
  en: {
    hero: {
      name: "Lukas Kaffer",
      role: "Web and native iOS, Vienna.",
      headline: "I turn rough ideas into products that actually go live.",
      subcopy: "",
      proof: ["Directly with me", "One mind for strategy, design and code"],
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
      writeEmail: "Send idea",
      languageLabel: "Language",
      entries: "entries",
      startProject: "Send idea",
      viewCase: "View case study",
      seeServices: "See services",
    },
    panels: [
      {
        id: "work",
        title: "Showcase",
        subtitle: "Web and native iOS, live in Apple's App Store",
        eyebrow: "Featured work",
        headline: "From idea to App Store.",
        description:
          "Vienna Event Radar is the running example: web live, app in the Store. Concept, design and code by one person, without handoffs between disciplines.",
        chips: ["Web live", "iOS in App Store", "Built solo"],
        details: [
          "Idea. Make events in Vienna discoverable in one place instead of scattered across twenty sources.",
          "Build. A web product with backend, AI-supported research, admin workflow and auth. Plus a native iOS 26 app with Apple-native interactions. Built end to end.",
          "Live. The web product runs on viennaeventradar.at. The app is available in the Apple App Store. A real product you can tap and install.",
          "Stack: Next.js · Supabase · Vercel · SwiftUI",
        ],
        screen: {
          sideLabel: "Live",
          sideValue: "01",
          rows: [
            { label: "Product", value: "Web + App Store" },
            { label: "Stack", value: "Next.js + Supabase" },
            { label: "Mode", value: "Solo built" },
          ],
        },
        modalSections: [
          {
            label: "Context",
            title: "A real product, not a concept mockup.",
            body: "Vienna Event Radar started as a rough idea and is now an active product: web, native app, real users and its own admin operation. None of it is a demo.",
          },
          {
            label: "System",
            title: "Research, review and publish in one workflow.",
            body: "AI-supported event research, structured admin review, a clean database with auth and access logic, plus a mobile-first public experience across web and native iOS.",
          },
          {
            label: "Stack",
            title: "Modern and Apple-native, without compromise.",
            body: "Next.js, React, TypeScript and Tailwind on the web. Supabase and Vercel in the background. SwiftUI and iOS 26 interface patterns on iPhone.",
          },
          {
            label: "Outcome",
            title: "In the App Store, in use, and still evolving.",
            body: "The app can be installed, the web product is live, and the foundation is ready for the next features.",
          },
        ],
        detailHref: "/work",
      },
      {
        id: "services",
        title: "Services",
        subtitle: "Websites, MVPs, backend logic and iOS apps",
        eyebrow: "What you get",
        headline: "From a landing page to a full product.",
        description:
          "No one-size-fits-all package. You get the thing your project needs next, built cleanly and launched for real. Because the setup is solo, the path from idea to live stays short and direct.",
        chips: ["Become visible", "Test an idea", "Go online"],
        details: [
          "Become visible. A website or landing page that makes your offer clear in the first few seconds and turns visitors into inquiries.",
          "Test an idea. An MVP with login, database and the logic behind it, so you can learn from real users instead of a concept deck.",
          "Go online. A finished product taken through launch. Web, and a native iOS app when your product truly belongs on iPhone.",
          "When recurring work slows you down, I also build internal tools and automations that remove routine.",
        ],
        screen: {
          sideLabel: "Offer",
          sideValue: "04",
          rows: [
            { label: "Visible", value: "Launch pages" },
            { label: "Validate", value: "MVPs + backend" },
            { label: "Launch", value: "Web + iOS" },
          ],
        },
        modalSections: [
          {
            label: "Web",
            title: "Sites that look right and convert.",
            body: "Clear, fast pages for founders and small teams. Credible at first glance, precise about what you offer and clear about what should happen next.",
          },
          {
            label: "Product",
            title: "MVPs that actually ship.",
            body: "Login, database, product logic, dashboard and launch as one coherent build instead of a pile of loose parts.",
          },
          {
            label: "iOS",
            title: "Apps that feel native.",
            body: "When your product belongs on iPhone, I build it natively: with the navigation, details and polish that make an app feel at home on the device.",
          },
          {
            label: "Faster work",
            title: "Tools that remove repetitive work.",
            body: "Internal workflows, API integrations and automations for calmer operations.",
          },
        ],
        detailHref: "/services",
      },
      {
        id: "process",
        title: "Process",
        subtitle: "From rough idea to launch",
        eyebrow: "How we work",
        headline: "Sharpen, design, build, launch.",
        description:
          "A simple way of working that keeps your project from stalling halfway through. Because everything stays in one mind, decisions move quickly and the path to launch stays short.",
        chips: ["Shape", "Design", "Build", "Launch"],
        details: [
          "Sharpen. Before a line of code exists, we define what should go live, who it is for and how success will be recognized. That saves money and detours.",
          "Design. The interface is shaped around the actions your users actually take. Clear, polished and just as good on mobile.",
          "Build. Clean stack, modern tools, high output. Architecture, design and taste stay in one mind instead of being diluted between disciplines.",
          "Launch. It really goes online, with SEO and security basics, then improves from real feedback.",
        ],
        screen: {
          sideLabel: "Flow",
          sideValue: "04",
          rows: [
            { label: "01 Sharpen", value: "Offer + user" },
            { label: "02 Design", value: "Interface rhythm" },
            { label: "03 Ship", value: "Stack + deploy" },
          ],
        },
        modalSections: [
          {
            label: "Shape",
            title: "Clarify what should exist.",
            body: "Offer, audience, core workflow and launch focus are pulled tight before anything is built. This is the step that saves or sinks most projects.",
          },
          {
            label: "Design",
            title: "Make the product feel intentional.",
            body: "Interface, rhythm and responsive behavior are built around the most important actions your users take.",
          },
          {
            label: "Build",
            title: "Highly concentrated, without handoffs.",
            body: "Clean stack, modern tools, production standards. Because concept, design and code sit with one person, the friction that slows agency projects down falls away.",
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
        subtitle: "Vienna, Austria. Solo. Web and native.",
        eyebrow: "Lukas Kaffer",
        headline: "One person who gets things finished.",
        description:
          "I shape, design and build web products and native iOS apps. Solo, from the first sketch to the App Store.\n\nWhat separates me from an agency is simple and decisive: there is nobody I hand off to. Product thinking, interface and code sit in one mind. Decisions happen in ten minutes instead of ten emails, and what is agreed at the beginning is what runs at the end.\n\nVienna Event Radar is my own proof point. My idea, my design, my code. Web online, app in the Apple Store.",
        chips: ["Solo, no handoffs", "Web + native iOS", "Vienna, AT"],
        details: [
          "Product thinking before implementation.",
          "Design and build in one loop.",
          "Web products with Next.js, React, TypeScript, Supabase and Vercel.",
          "Native iOS builds with SwiftUI and iOS 26 patterns.",
          "App Store submission and launch experience.",
        ],
        screen: {
          sideLabel: "Mode",
          sideValue: "Solo",
          rows: [
            { label: "Taste", value: "Product + UI" },
            { label: "Depth", value: "Full-stack + iOS" },
            { label: "Tempo", value: "No handoffs" },
          ],
        },
        modalSections: [
          {
            label: "Point of view",
            title: "Product shape first, implementation second.",
            body: "What should exist, why and for whom. These questions come before every pixel and every line of code. Otherwise you get something that looks good and nobody needs.",
          },
          {
            label: "Execution",
            title: "Design and full-stack in one loop.",
            body: "When the same person shapes, designs and builds, there are no translation losses. Decisions happen in ten minutes, not ten emails. That creates both speed and a consistent result.",
          },
          {
            label: "Tools",
            title: "Modern, but taste cannot be delegated.",
            body: "I use AI where it can remove routine. What goes live is still deliberately decided, not automatically generated.",
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
          "Send me two or three sentences about what you want to launch, who it is for and where it is stuck. You will get an honest assessment of whether and how I can help. Free and without obligation.",
        chips: ["Email", "Project brief", "Next step"],
        details: [
          "Best starting point: a short paragraph about what you want to launch.",
          "Add who it is for, what already exists and where the friction is.",
          "You get honest feedback and a clear first step, even if we do not end up working together.",
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
            body: "A short paragraph is enough: what you want to launch, who it is for and what is currently blocking momentum.",
          },
          {
            label: "Next",
            title: "Turn ambiguity into a focused first move.",
            body: "You get an honest assessment and, if it fits, a sharp scope plus prototype plan.",
          },
        ],
        detailHref: "/contact",
      },
    ],
  },
  de: {
    hero: {
      name: "Lukas Kaffer",
      role: "Web und Native iOS, Wien.",
      headline: "Aus deiner Idee wird ein Produkt, das wirklich live geht.",
      subcopy: "",
      proof: ["Direkt mit mir", "Ein Kopf für Konzept, Design und Code"],
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
      writeEmail: "Idee schicken",
      languageLabel: "Sprache",
      entries: "Einträge",
      startProject: "Idee schicken",
      viewCase: "Case Study ansehen",
      seeServices: "Leistungen ansehen",
    },
    panels: [
      {
        id: "work",
        title: "Showcase",
        subtitle: "Web und nativ in Apples App Store",
        eyebrow: "Ausgewählte Arbeit",
        headline: "Von der Idee in den App Store.",
        description:
          "Vienna Event Radar als laufendes Beispiel. Web online, App im Store. Konzept, Design und Code aus einer Hand, ohne Übergaben zwischen Disziplinen.",
        chips: ["Web live", "iOS im App Store", "Solo gebaut"],
        details: [
          "Idee. Events in Wien an einem Ort entdeckbar machen, statt verteilt über zwanzig Quellen.",
          "Bau. Webprodukt mit Backend, AI-gestützter Recherche, Admin-Workflow und Auth. Dazu eine native iOS 26 App mit Apple-typischen Interaktionen. Alles aus einer Hand.",
          "Live. Web läuft auf viennaeventradar.at. App im Apple App Store verfügbar. Ein echtes Produkt, das man antippen und installieren kann.",
          "Stack: Next.js · Supabase · Vercel · SwiftUI",
        ],
        screen: {
          sideLabel: "Live",
          sideValue: "01",
          rows: [
            { label: "Produkt", value: "Web + App Store" },
            { label: "Stack", value: "Next.js + Supabase" },
            { label: "Modus", value: "Solo gebaut" },
          ],
        },
        modalSections: [
          {
            label: "Ausgangslage",
            title: "Ein echtes Produkt, kein Konzept-Mockup.",
            body: "Vienna Event Radar begann als grobe Idee und ist heute ein laufendes Produkt. Web, native App, eigene Nutzer, eigener Admin-Betrieb. Nichts davon ist Demo.",
          },
          {
            label: "System",
            title: "Recherche, Review und Publishing in einem Workflow.",
            body: "AI-gestützte Event-Recherche, strukturierter Admin-Review, sauber gebaute Datenbank mit Auth und Zugriffslogik, dazu eine mobile-first Public Experience im Web und nativ auf iOS.",
          },
          {
            label: "Stack",
            title: "Modern und Apple-nativ, ohne Kompromiss.",
            body: "Next.js, React, TypeScript und Tailwind im Web. Supabase und Vercel im Hintergrund. SwiftUI und iOS 26 Interface Patterns auf dem iPhone.",
          },
          {
            label: "Ergebnis",
            title: "Im App Store, im Einsatz, in Weiterentwicklung.",
            body: "Die App ist real installierbar, das Webprodukt läuft, die Grundlage trägt die nächsten Features.",
          },
        ],
        detailHref: "/work",
      },
      {
        id: "services",
        title: "Leistungen",
        subtitle: "Websites, MVPs, Backend-Logiken und iOS Apps",
        eyebrow: "Was du bekommst",
        headline: "Von der Landingpage bis zum fertigen Produkt.",
        description:
          "Kein Baukasten für jeden. Das, was dein Projekt gerade nach vorne bringt, sauber gebaut und wirklich gelauncht. Durch das Solo-Setup bleibt der Weg von Idee zu Live kurz und direkt.",
        chips: ["Sichtbar werden", "Idee testen", "Online gehen"],
        details: [
          "Sichtbar werden. Eine Website oder Landingpage, die in den ersten Sekunden klar macht, was du tust, und Besucher zu Anfragen macht.",
          "Idee testen. Ein MVP mit Login, Datenbank und allem dahinter, damit du echte Nutzer und echtes Feedback bekommst statt nur ein Konzept.",
          "Online gehen. Ein fertiges Produkt bis zum Launch. Web, und eine native iOS App dann, wenn dein Produkt wirklich aufs iPhone gehört.",
          "Wenn wiederkehrende Arbeit dich ausbremst, baue ich auch interne Tools und Automationen, die Routine entfernen.",
        ],
        screen: {
          sideLabel: "Angebot",
          sideValue: "04",
          rows: [
            { label: "Sichtbar", value: "Launch Pages" },
            { label: "Testen", value: "MVPs + Backend" },
            { label: "Launch", value: "Web + iOS" },
          ],
        },
        modalSections: [
          {
            label: "Web",
            title: "Seiten, die wirken und konvertieren.",
            body: "Klare, schnelle Seiten für Gründer und kleine Teams. Auf den ersten Blick glaubwürdig und eindeutig darin, was du anbietest und was als Nächstes passieren soll.",
          },
          {
            label: "Produkt",
            title: "MVPs, die wirklich shippen.",
            body: "Login, Datenbank, die Logik dahinter, Dashboard und Launch als ein zusammenhängender Build statt loser Teile.",
          },
          {
            label: "iOS",
            title: "Apps, die sich nativ anfühlen.",
            body: "Wenn dein Produkt aufs iPhone gehört, baue ich es nativ. Mit der Navigation, den Details und dem Polish, durch die sich eine App wirklich zuhause auf dem Gerät anfühlt.",
          },
          {
            label: "Schnelleres Arbeiten",
            title: "Tools, die wiederkehrende Arbeit entfernen.",
            body: "Interne Workflows, API-Anbindungen und Automationen für ruhigere Abläufe.",
          },
        ],
        detailHref: "/services",
      },
      {
        id: "process",
        title: "Prozess",
        subtitle: "Von grober Idee bis Launch",
        eyebrow: "Wie wir arbeiten",
        headline: "Scharf ziehen, gestalten, bauen, launchen.",
        description:
          "Eine einfache Arbeitsweise, die verhindert, dass dein Projekt in der Mitte versandet. Weil alles in einem Kopf bleibt, sind Entscheidungen schnell getroffen und der Weg zum Launch kurz.",
        chips: ["Schärfen", "Design", "Umsetzung", "Launch"],
        details: [
          "Schärfen. Bevor eine Zeile Code entsteht, klären wir, was genau live gehen soll, für wen, und woran man Erfolg erkennt. Das spart Geld und Umwege.",
          "Gestalten. Das Interface entsteht rund um die Aktionen, die deine Nutzer wirklich machen. Klar, hochwertig, auf dem Handy genauso gut.",
          "Bauen. Sauberer Stack, moderne Werkzeuge, hoher Output. Architektur, Design und Geschmack bleiben in einem Kopf, statt zwischen Disziplinen zerrieben zu werden.",
          "Launchen. Es geht wirklich online, mit SEO- und Security-Basics, und wird danach anhand von echtem Feedback besser.",
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
            title: "Klären, was existieren soll.",
            body: "Angebot, Zielgruppe, Kernworkflow und Launch-Fokus werden eng gezogen, bevor gebaut wird. Der Schritt, der die meisten Projekte rettet oder versenkt.",
          },
          {
            label: "Design",
            title: "Das Produkt bewusst wirken lassen.",
            body: "Interface, Rhythmus und responsives Verhalten orientieren sich an den wichtigsten Aktionen deiner Nutzer.",
          },
          {
            label: "Umsetzung",
            title: "Hoch konzentriert, ohne Übergaben.",
            body: "Sauberer Stack, moderne Werkzeuge, Production Standards. Weil Konzept, Design und Code in einer Person sind, entfallen die Reibungsverluste, die Projekte bei Agenturen verlangsamen.",
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
        subtitle: "Wien, Österreich. Solo. Web und nativ.",
        eyebrow: "Lukas Kaffer",
        headline: "Eine Person, die Dinge wirklich fertig macht.",
        description:
          "Ich konzipiere, designe und baue Webprodukte und native iOS Apps. Solo, von der ersten Skizze bis in den App Store.\n\nWas mich von einer Agentur unterscheidet, ist banal und entscheidend zugleich. Es gibt niemanden, an den ich übergebe. Produktdenken, Interface und Code sitzen in einem Kopf. Entscheidungen passieren in zehn Minuten statt zehn E-Mails, und das, was am Anfang gesagt wird, ist auch das, was am Ende läuft.\n\nVienna Event Radar ist mein eigenes Beispiel dafür. Meine Idee, mein Design, mein Code. Web online, App im Apple Store.",
        chips: ["Solo, ohne Übergaben", "Web + nativ iOS", "Wien, AT"],
        details: [
          "Produktdenken vor Umsetzung.",
          "Design und Build in einem Loop.",
          "Webprodukte mit Next.js, React, TypeScript, Supabase und Vercel.",
          "Native iOS Builds mit SwiftUI und iOS 26 Patterns.",
          "App Store Submission und Launch erfahren.",
        ],
        screen: {
          sideLabel: "Modus",
          sideValue: "Solo",
          rows: [
            { label: "Taste", value: "Produkt + UI" },
            { label: "Tiefe", value: "Full-Stack + iOS" },
            { label: "Tempo", value: "Ohne Übergaben" },
          ],
        },
        modalSections: [
          {
            label: "Haltung",
            title: "Produktform zuerst, Umsetzung danach.",
            body: "Was sollte existieren, wofür, für wen. Diese Fragen kommen vor jedem Pixel und vor jeder Zeile Code. Sonst entsteht etwas, das gut aussieht und niemand braucht.",
          },
          {
            label: "Umsetzung",
            title: "Design und Full-Stack in einem Loop.",
            body: "Wenn dieselbe Person konzipiert, gestaltet und baut, gibt es keine Übersetzungsverluste. Entscheidungen sind in zehn Minuten getroffen, nicht in zehn E-Mails. Das ergibt sowohl Tempo als auch ein konsistentes Ergebnis.",
          },
          {
            label: "Werkzeuge",
            title: "Modern, aber Geschmack ist nicht delegierbar.",
            body: "AI nutze ich dort, wo sie Routine raussparen kann. Was am Ende live geht, ist trotzdem bewusst entschieden und nicht automatisiert generiert.",
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
          "Schick mir in zwei, drei Sätzen, was du launchen willst, für wen, und wo es gerade hakt. Du bekommst eine ehrliche Einschätzung, ob und wie ich helfen kann. Kostenlos und unverbindlich.",
        chips: ["E-Mail", "Projektbrief", "Nächster Schritt"],
        details: [
          "Bester Startpunkt: ein kurzer Absatz dazu, was du launchen willst.",
          "Dazu für wen es ist, was heute schon existiert und wo die Reibung sitzt.",
          "Du bekommst ehrliches Feedback und einen klaren ersten Schritt, auch wenn wir am Ende nicht zusammenarbeiten.",
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
            body: "Ein kurzer Absatz reicht: was du launchen willst, für wen, und was gerade Momentum blockiert.",
          },
          {
            label: "Nächster Schritt",
            title: "Aus Unklarheit wird ein fokussierter erster Zug.",
            body: "Du bekommst eine ehrliche Einschätzung und, wenn es passt, einen scharfen Scope plus Prototyp-Plan.",
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
              {copy.hero.role}
            </p>
            <h1
              className="rise mt-8 max-w-[12ch] text-balance font-display text-[37px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#181811] sm:max-w-[16ch] sm:text-[42px] lg:mt-9"
              style={{ animationDelay: "0.1s" }}
            >
              {copy.hero.headline}
            </h1>
            {copy.hero.subcopy ? (
              <p
                className="rise mt-3 max-w-[42ch] text-[14px] leading-6 text-[#6c6c61]"
                style={{ animationDelay: "0.16s" }}
              >
                {copy.hero.subcopy}
              </p>
            ) : null}
            <p
              className="rise mt-5 font-mono text-[10px] uppercase tracking-[0.13em] text-[#9d9d90]"
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
            {!copy.hero.subcopy ? (
              <div className="hidden h-24 lg:block" aria-hidden="true" />
            ) : null}
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
              {panel.description.split("\n\n")[0]}
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
          <p className="mt-4 max-w-[58ch] whitespace-pre-line text-[14.5px] leading-7 text-[#6c6c61]">
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
