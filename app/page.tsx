"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Moon, Plus, Sun } from "lucide-react";

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
  faq?: { q: string; a: string }[];
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
    overview: string;
    openDetail: string;
  };
  panels: Panel[];
};

const pageCopy: Record<Language, PageCopy> = {
  en: {
    hero: {
      name: "Lukas Kaffer",
      role: "Web and native iOS, Vienna.",
      headline: "I turn rough ideas into products that go live.",
      subcopy:
        "For founders and small teams: websites, MVPs and native iOS apps — built all the way to launch, not just a mockup.",
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
      overview: "Overview",
      openDetail: "Open detail",
    },
    panels: [
      {
        id: "work",
        title: "Showcase",
        subtitle: "Web and native iOS, live in Apple's App Store",
        eyebrow: "Featured work",
        headline: "From idea to App Store.",
        description:
          "Vienna Event Radar is the running example: the web product is live, the app is in the App Store. I built all of it myself, start to finish.",
        chips: ["Web live", "iOS in App Store", "Built solo"],
        details: [
          "Idea. Make events in Vienna discoverable in one place instead of scattered across twenty sources.",
          "Build. A web product with backend, AI-supported research, admin workflow and auth. Plus a native iOS 26 app with Apple-native interactions. Built end to end.",
          "Live. The web product runs on viennaeventradar.at. The app is available in the Apple App Store. Something you can tap and install.",
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
            title: "An active product, in daily use.",
            body: "Vienna Event Radar started as a rough idea and now runs as a product: web, native app, its own users and admin operation.",
          },
          {
            label: "System",
            title: "Research, review and publish in one workflow.",
            body: "AI-supported event research, structured admin review, a clean database with auth and access logic, plus a mobile-first public experience across web and native iOS.",
          },
          {
            label: "Stack",
            title: "Modern on the web, Apple-native on iPhone.",
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
          "You get exactly what your project needs next, built cleanly and taken all the way to launch. Because it's just me, the path from idea to live stays short and direct.",
        chips: ["Become visible", "Test an idea", "Go online"],
        details: [
          "Become visible. A website or landing page that makes your offer clear in the first few seconds and turns visitors into inquiries.",
          "Test an idea. An MVP with login, database and the logic behind it — enough to put in front of users and learn from how they use it.",
          "Go online. A finished product taken through launch. Web, and a native iOS app when your product belongs on iPhone.",
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
            title: "MVPs that ship.",
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
        id: "faq",
        title: "FAQ",
        subtitle: "Cost, timeline, and what happens after launch",
        eyebrow: "Good to know",
        headline: "The questions that usually come up.",
        description:
          "What it costs, how long it takes, what happens after launch — the questions that come up before working together, answered straight.",
        chips: ["Honest", "No lock-in"],
        details: [],
        screen: {
          sideLabel: "FAQ",
          sideValue: "?",
          rows: [
            { label: "Cost", value: "Fixed price" },
            { label: "After launch", value: "Not dropped" },
            { label: "Slots", value: "Selected work" },
          ],
        },
        faq: [
          {
            q: "What does a project cost, and how long does it take?",
            a: "Both depend on scope. After a short, free first call you get a clear, fixed price for a clearly defined scope — so you know exactly what you're paying for from the start. And because everything stays in one pair of hands, it moves noticeably faster than the agency route with its handoffs and approval loops; you always know the current step and what's next.",
          },
          {
            q: "Do you build native iOS apps?",
            a: "Yes — and increasingly it's my main focus. Native iOS apps in SwiftUI, from the idea to a real App Store release. If your product belongs on the iPhone, I build it natively, not as a wrapped website.",
          },
          {
            q: "What happens after launch?",
            a: "You're not dropped at go-live. Launch includes the SEO and security basics, and afterwards I'm available for fixes and adjustments. You own the code and all accounts — no lock-in.",
          },
          {
            q: "Are you available right now?",
            a: "I work solo and take on a limited number of projects at a time, so quality stays high. If I'm booked out I'll tell you honestly and give a realistic start date. Reaching out early is the best way to hold a slot.",
          },
          {
            q: "Do you design too, or do I need a separate designer?",
            a: "Design and build sit with the same person. You don't need a separate designer — interface, interaction and code are shaped together, which is exactly what keeps the result consistent.",
          },
          {
            q: "What if I only have a rough idea?",
            a: "That's the ideal starting point. The first step — sharpening — exists precisely to turn a rough idea into a clear scope. The initial assessment is free and without obligation.",
          },
        ],
        detailHref: "/faq",
      },
      {
        id: "about",
        title: "About",
        subtitle: "Vienna, Austria. Solo. From idea to launch.",
        eyebrow: "Lukas Kaffer",
        headline: "From a blank screen to the App Store.",
        description:
          "I'm Lukas. I design and build web and iOS products — design and code in one hand, until it's actually live.\n\nDecisions happen in minutes instead of ten emails, and what we agree at the start is what ships at the end.\n\nVienna Event Radar is my own proof point — my idea, my design, my code. Web online, app in the Apple Store.",
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
            { label: "Shape", value: "Offer + user" },
            { label: "Build", value: "Full-stack + iOS" },
            { label: "Launch", value: "Web + App Store" },
          ],
        },
        modalSections: [
          {
            label: "Point of view",
            title: "Product shape first, implementation second.",
            body: "What should exist, why and for whom. These questions come before every pixel and every line of code. Otherwise you get something that looks good and nobody needs.",
          },
          {
            label: "Sharpen",
            title: "Clarify what should exist.",
            body: "Offer, audience, core workflow and launch focus are pulled tight before anything is built. This is the step that saves or sinks most projects.",
          },
          {
            label: "Design",
            title: "Design that follows how it's used.",
            body: "Interface, rhythm and responsive behavior are built around the most important actions your users take. Clear, polished and just as good on mobile.",
          },
          {
            label: "Build",
            title: "Clean stack, production standards.",
            body: "Modern tools and high output, with architecture, design and taste held to one consistent bar instead of diluted between disciplines.",
          },
          {
            label: "Launch",
            title: "Ship, observe, iterate.",
            body: "It goes online — deployment, SEO and security basics — and then improves from user feedback.",
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
      headline: "Aus deiner Idee wird ein Produkt, das live geht.",
      subcopy:
        "Für Gründer und kleine Teams: Websites, MVPs und native iOS Apps — gebaut bis zum Launch, nicht nur bis zum Mockup.",
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
      overview: "Übersicht",
      openDetail: "Detail öffnen",
    },
    panels: [
      {
        id: "work",
        title: "Showcase",
        subtitle: "Web und nativ in Apples App Store",
        eyebrow: "Ausgewählte Arbeit",
        headline: "Von der Idee in den App Store.",
        description:
          "Vienna Event Radar als laufendes Beispiel: Das Webprodukt ist online, die App im App Store. Alles selbst gebaut, von der ersten Idee bis zur fertigen App.",
        chips: ["Web live", "iOS im App Store", "Solo gebaut"],
        details: [
          "Idee. Events in Wien an einem Ort entdeckbar machen, statt verteilt über zwanzig Quellen.",
          "Bau. Webprodukt mit Backend, AI-gestützter Recherche, Admin-Workflow und Auth. Dazu eine native iOS 26 App mit Apple-typischen Interaktionen. Alles aus einer Hand.",
          "Live. Web läuft auf viennaeventradar.at. App im Apple App Store verfügbar. Etwas, das man antippen und installieren kann.",
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
            title: "Ein Produkt im täglichen Einsatz.",
            body: "Vienna Event Radar begann als grobe Idee und läuft heute als Produkt: Web, native App, eigene Nutzer, eigener Admin-Betrieb.",
          },
          {
            label: "System",
            title: "Recherche, Review und Publishing in einem Workflow.",
            body: "AI-gestützte Event-Recherche, strukturierter Admin-Review, sauber gebaute Datenbank mit Auth und Zugriffslogik, dazu eine mobile-first Public Experience im Web und nativ auf iOS.",
          },
          {
            label: "Stack",
            title: "Modern im Web, Apple-nativ auf dem iPhone.",
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
        headline: "Von einer Landingpage bis hin zum fertigen Produkt.",
        description:
          "Dein Projekt bis zum Launch gebracht. Der Weg von der Idee bis zu Live direkt und unkompliziert.",
        chips: ["Sichtbar werden", "Idee testen", "Online gehen"],
        details: [
          "Sichtbar werden. Eine Website oder Landingpage, die in den ersten Sekunden klar macht, was du tust, und Besucher zu Anfragen macht.",
          "Idee testen. Ein MVP mit Login, Datenbank und allem dahinter — genug, um es Nutzern vorzulegen und aus ihrem Verhalten zu lernen.",
          "Online gehen. Ein fertiges Produkt bis zum Launch. Web, und eine native iOS App dann, wenn dein Produkt aufs iPhone gehört.",
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
            title: "MVPs, die shippen.",
            body: "Login, Datenbank, die Logik dahinter, Dashboard und Launch als ein zusammenhängender Build statt loser Teile.",
          },
          {
            label: "iOS",
            title: "Apps, die sich nativ anfühlen.",
            body: "Wenn dein Produkt aufs iPhone gehört, baue ich es nativ. Mit Navigation, Details und Polish, die dafür sorgen, dass sich die App auf dem iPhone nativ anfühlt.",
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
        id: "faq",
        title: "FAQ",
        subtitle: "Kosten, Dauer und was nach dem Launch kommt",
        eyebrow: "Gut zu wissen",
        headline: "Die Fragen, die meistens kommen.",
        description:
          "Was kostet's, wie lange dauert's, was kommt nach dem Launch? Die Fragen vor einer Zusammenarbeit — kurz und ehrlich beantwortet.",
        chips: ["Ehrlich", "Kein Lock-in"],
        details: [],
        screen: {
          sideLabel: "FAQ",
          sideValue: "?",
          rows: [
            { label: "Kosten", value: "Festpreis" },
            { label: "Nach Launch", value: "Nicht allein" },
            { label: "Plätze", value: "Ausgewählt" },
          ],
        },
        faq: [
          {
            q: "Was kostet ein Projekt und wie lange dauert es?",
            a: "Beides hängt vom Umfang ab. Nach einem kurzen, kostenlosen Erstgespräch bekommst du einen klaren Festpreis für einen klar umrissenen Umfang — damit du von Anfang an genau weißt, wofür du zahlst. Und weil alles in einer Hand bleibt, geht es spürbar schneller als der Agentur-Weg mit Übergaben und Abstimmungsschleifen; du kennst jederzeit den aktuellen und den nächsten Schritt.",
          },
          {
            q: "Baust du auch native iOS Apps?",
            a: "Ja — und das wird zunehmend mein Schwerpunkt. Native iOS Apps in SwiftUI, von der Idee bis zur Veröffentlichung im App Store. Wenn dein Produkt aufs iPhone gehört, baue ich es nativ — nicht als verpackte Website.",
          },
          {
            q: "Was passiert nach dem Launch?",
            a: "Du wirst beim Go-Live nicht fallen gelassen. Der Launch umfasst die SEO- und Security-Basics, und danach bin ich für Fixes und Anpassungen erreichbar. Code und alle Zugänge gehören dir — kein Lock-in.",
          },
          {
            q: "Bist du gerade verfügbar?",
            a: "Ich arbeite solo und nehme bewusst nur eine begrenzte Zahl an Projekten gleichzeitig, damit die Qualität hoch bleibt. Wenn ich ausgebucht bin, sage ich das ehrlich und nenne einen realistischen Starttermin. Früh anfragen sichert dir am ehesten einen Platz.",
          },
          {
            q: "Machst du auch das Design, oder brauche ich extra einen Designer?",
            a: "Design und Umsetzung sitzen in einer Person. Du brauchst keinen separaten Designer — Interface, Interaktion und Code entstehen zusammen, und genau das hält das Ergebnis konsistent.",
          },
          {
            q: "Was, wenn ich nur eine grobe Idee habe?",
            a: "Das ist der ideale Startpunkt. Der erste Schritt, das Schärfen, ist genau dafür da, aus einer groben Idee einen klaren Plan zu machen. Die erste Einschätzung ist kostenlos und unverbindlich.",
          },
        ],
        detailHref: "/faq",
      },
      {
        id: "about",
        title: "Über mich",
        subtitle: "Wien, Österreich. Solo. Von der Idee bis zum Launch.",
        eyebrow: "Lukas Kaffer",
        headline: "Vom leeren Bildschirm bis in den App Store.",
        description:
          "Ich bin Lukas. Ich entwerfe und programmiere Web- und iOS-Produkte — Design und Code aus einer Hand, bis es wirklich live ist.\n\nEntscheidungen fallen in Minuten statt in zehn E-Mails, und was am Anfang besprochen wird, ist am Ende auch das, was läuft.",
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
            { label: "Schärfen", value: "Angebot + User" },
            { label: "Bauen", value: "Full-Stack + iOS" },
            { label: "Launch", value: "Web + App Store" },
          ],
        },
        modalSections: [
          {
            label: "Haltung",
            title: "Produktform zuerst, Umsetzung danach.",
            body: "Was sollte existieren, wofür, für wen. Diese Fragen kommen vor jedem Pixel und vor jeder Zeile Code. Sonst entsteht etwas, das gut aussieht und niemand braucht.",
          },
          {
            label: "Schärfen",
            title: "Klären, was existieren soll.",
            body: "Angebot, Zielgruppe, Kernworkflow und Launch-Fokus werden eng gezogen, bevor gebaut wird. Der Schritt, der die meisten Projekte rettet oder versenkt.",
          },
          {
            label: "Design",
            title: "Design, das der Nutzung folgt.",
            body: "Interface, Rhythmus und responsives Verhalten orientieren sich an den wichtigsten Aktionen deiner Nutzer. Klar, hochwertig, auf dem Handy genauso gut.",
          },
          {
            label: "Umsetzung",
            title: "Sauberer Stack, Production Standards.",
            body: "Moderne Werkzeuge und hoher Output, mit Architektur, Design und Geschmack auf einem konsistenten Niveau statt zwischen Disziplinen zerrieben.",
          },
          {
            label: "Launch",
            title: "Shippen, beobachten, iterieren.",
            body: "Es geht online — Deployment, SEO- und Security-Basics — und wird danach mit Nutzer-Feedback besser.",
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
            { label: "Klären", value: "Umfang + Ablauf" },
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
            body: "Du bekommst eine ehrliche Einschätzung und, wenn es passt, einen klar umrissenen Umfang plus Prototyp-Plan.",
          },
        ],
        detailHref: "/contact",
      },
    ],
  },
};

const PANEL_ORDER = ["services", "work", "about", "faq", "contact"];

// Shared name that lets the View Transitions API morph the on-screen monitor into
// the detail surface (and back), so the screen visibly "becomes" the page.
const MORPH_NAME = "detail-surface";

// --- Showcase detail content (Vienna Event Radar + Aurea Clinic) ------------
const APP_STORE_URL =
  "https://apps.apple.com/app/wien-event-radar/id6771109823";
const CLINIC_URL = "/clinic";

// App Store marketing previews (designed), shown as a horizontal iOS strip.
const IOS_PREVIEWS = [
  "02_entdecken",
  "03_suche_filter",
  "04_event_details",
  "05_persoenliches_radar",
  "06_merken_teilen_kalender",
  "07_gruppenplanung",
].map((name) => `/case-studies/appstore/${name}.png`);

type Capability = { title: string; body: string };

type WorkShowcaseContent = {
  brandCaption: string;
  webLabel: string;
  webMeta: string;
  capabilitiesLabel: string;
  capabilities: Capability[];
  techLine: string;
  iosLabel: string;
  iosTitle: string;
  iosBody: string;
  badgeSrc: string;
  badgeAlt: string;
  aureaLabel: string;
  aureaTitle: string;
  aureaBody: string;
  aureaCta: string;
};

const WORK_SHOWCASE: Record<Language, WorkShowcaseContent> = {
  de: {
    brandCaption: "Gestaltet und gebaut, komplett aus einer Hand.",
    webLabel: "Web-Plattform",
    webMeta: "viennaeventradar.at",
    capabilitiesLabel: "Was drinsteckt",
    capabilities: [
      {
        title: "Ein Produkt, zwei native Erlebnisse",
        body: "Web-Plattform und native iOS-App auf einem gemeinsamen Backend.",
      },
      {
        title: "KI-gestützte Recherche",
        body: "Findet und filtert automatisch, was in Wien läuft.",
      },
      {
        title: "Vollwertige Infrastruktur",
        body: "Login, Datenbank, automatische E-Mails, Fehler-Monitoring.",
      },
      {
        title: "Von Anfang an auffindbar",
        body: "SEO und live im App Store.",
      },
      {
        title: "iOS-nativ",
        body: "Kalender, Benachrichtigungen, System-Suche, Login mit Apple.",
      },
    ],
    techLine:
      "Unter der Haube: Next.js · React · Supabase · SwiftUI · Vercel · Cloudflare · Perplexity API · Sentry · Resend",
    iosLabel: "Native iOS-App",
    iosTitle: "Dieselbe Idee, nativ auf dem iPhone.",
    iosBody:
      "Eine native iOS-App mit flüssiger Navigation, System-Gesten und einem Tempo, das sich am iPhone richtig anfühlt.",
    badgeSrc: "/case-studies/appstore-badge-de.svg",
    badgeAlt: "Laden im App Store",
    aureaLabel: "Concept",
    aureaTitle: "Aurea Clinic",
    aureaBody:
      "Eine Premium-Website für eine ästhetische Klinik, vollständig gestaltet und gebaut — ein eigenes Konzept.",
    aureaCta: "Live ansehen",
  },
  en: {
    brandCaption: "Designed and built end to end by one person.",
    webLabel: "Web platform",
    webMeta: "viennaeventradar.at",
    capabilitiesLabel: "What's inside",
    capabilities: [
      {
        title: "One product, two native experiences",
        body: "A web platform and a native iOS app on one shared backend.",
      },
      {
        title: "AI-assisted research",
        body: "Automatically finds and filters what's happening in Vienna.",
      },
      {
        title: "Production-grade infrastructure",
        body: "Login, database, automated emails, error monitoring.",
      },
      {
        title: "Findable from the start",
        body: "SEO and live in the App Store.",
      },
      {
        title: "Native on iOS",
        body: "Calendar, notifications, system search, Sign in with Apple.",
      },
    ],
    techLine:
      "Under the hood: Next.js · React · Supabase · SwiftUI · Vercel · Cloudflare · Perplexity API · Sentry · Resend",
    iosLabel: "Native iOS app",
    iosTitle: "The same idea, native on iPhone.",
    iosBody:
      "An iOS app with fluid navigation, system gestures and a speed that feels right on iPhone.",
    badgeSrc: "/case-studies/appstore-badge-en.svg",
    badgeAlt: "Download on the App Store",
    aureaLabel: "Concept",
    aureaTitle: "Aurea Clinic",
    aureaBody:
      "A premium website for an aesthetic clinic, fully designed and built as my own concept.",
    aureaCta: "View it live",
  },
};

// Run a state update inside a view transition when supported, so the browser can
// morph between the two DOM states. flushSync makes React apply the change inside
// the transition callback. Falls back to a plain update otherwise.
function withViewTransition(update: () => void) {
  if (
    typeof document !== "undefined" &&
    "startViewTransition" in document &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    (
      document as Document & {
        startViewTransition: (cb: () => void) => void;
      }
    ).startViewTransition(() => flushSync(update));
  } else {
    update();
  }
}

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
  const [detailId, setDetailId] = useState<string | null>(null);
  const activeIndex = Math.max(
    0,
    panels.findIndex((panel) => panel.id === activeId),
  );
  const activePanel = panels[activeIndex] ?? panels[0];
  const detailPanel = detailId
    ? panels.find((panel) => panel.id === detailId) ?? null
    : null;

  const openDetail = (id: string) => {
    withViewTransition(() => {
      setActiveId(id);
      setDetailId(id);
    });
  };

  const closeDetail = () => {
    withViewTransition(() => setDetailId(null));
  };

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

  return (
    <main className="relative min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_-8%,rgba(255,255,255,0.85),transparent_46%)]" />
      <div className="grain" />

      <div className="desktop-stage-clip relative mx-auto flex min-h-svh w-full max-w-[1240px] flex-col px-6 pb-28 pt-6 sm:px-8 lg:h-svh lg:max-h-svh lg:px-10 lg:py-[clamp(0.4rem,calc(4.2vh-18.4px),1.25rem)]">
        {/* running head */}
        <header className="rise flex items-center justify-between gap-4 border-b border-[#e4e4e1] pb-2.5 lg:pb-[clamp(0.35rem,calc(2.4vh-12px),0.7rem)]">
          <div className="flex items-center">
            <Image
              src="/logo-lockup-clean.svg"
              alt="Lukas Kaffer"
              width={286}
              height={70}
              priority
              className="block h-auto w-[178px] shrink-0 sm:w-[194px]"
            />
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

        {/* editorial spread
            Desktop is a fixed single screen (lg:h-svh, no scroll). To keep it
            from clipping / the CTA from touching the footer on short laptop
            viewports, every vertical size + spacing below scales linearly with
            viewport height: clamp(min, calc(MAX + 4.2vh − 38.4px), MAX). At
            ≥~915px tall everything sits at its design MAX; below that it shrinks
            at ~the same rate as the viewport, so the column always fits with a
            roughly constant gap above the footer. (38.4 = 4.2 × 9.15.) */}
        <div className="relative flex min-h-0 flex-1 flex-col items-stretch gap-12 py-10 lg:grid lg:grid-cols-[minmax(0,378px)_1fr] lg:items-center lg:gap-24 lg:py-0">
          <section
            className={`contents lg:relative lg:flex lg:flex-col lg:justify-center lg:self-stretch lg:pt-7 ${detailId ? "invisible" : ""}`}
            aria-hidden={detailId ? true : undefined}
          >
            {/* intro group — on mobile this sits first, on desktop it dissolves
                into the section's flex column (lg:contents) so spacing is unchanged */}
            <div className="order-1 flex flex-col lg:contents">
              <p
                className="rise font-mono text-[10px] uppercase tracking-[0.24em] text-[#06857c] sm:text-[11px] lg:absolute lg:left-0 lg:top-0"
                style={{ animationDelay: "0.04s" }}
              >
                {copy.hero.role}
              </p>
              <h1
                className="rise mt-8 max-w-[12ch] text-balance font-display text-[37px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#181811] sm:max-w-[16ch] sm:text-[42px] lg:mt-[clamp(0.6rem,calc(4.2vh-14.4px),1.5rem)] lg:text-[clamp(28px,calc(4.2vh+3.6px),42px)]"
                style={{ animationDelay: "0.1s" }}
              >
                {copy.hero.headline}
              </h1>
              {copy.hero.subcopy ? (
                <p
                  className="rise mt-3 max-w-[42ch] text-[14px] leading-6 text-[#6c6c61] lg:mt-[clamp(0.3rem,calc(4.2vh-26.4px),0.75rem)] lg:leading-[1.5]"
                  style={{ animationDelay: "0.16s" }}
                >
                  {copy.hero.subcopy}
                </p>
              ) : null}
              <div
                className="rise mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.13em] text-[#06857c] lg:mt-[clamp(0.55rem,calc(4.2vh-18.4px),1.25rem)]"
                style={{ animationDelay: "0.22s" }}
              >
                {copy.hero.proof.map((item, index) => (
                  <span key={item} className="flex items-center gap-x-3">
                    {index > 0 ? (
                      <span className="text-[#06857c]/40" aria-hidden="true">
                        ·
                      </span>
                    ) : null}
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* nav + CTA group — on mobile this sits after the device (order-3) */}
            <div className="order-3 flex flex-col lg:contents">
            <nav
              className="rise mt-8 lg:mt-[clamp(0.55rem,calc(4.2vh-18.4px),1.25rem)]"
              aria-label={copy.ui.navLabel}
              style={{ animationDelay: "0.28s" }}
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-[#b1b1a4]">
                {copy.hero.indexLabel}
              </span>
              <ul className="mt-1.5 border-t border-[#e7e7e3]">
                {panels.map((item) => {
                  const isActive = item.id === activePanel.id;

                  return (
                    <li key={item.id} className="border-b border-[#e7e7e3]">
                      <button
                        type="button"
                        onClick={() => openDetail(item.id)}
                        onMouseEnter={() => setActiveId(item.id)}
                        onFocus={() => setActiveId(item.id)}
                        aria-current={isActive ? "true" : undefined}
                        aria-label={`${item.title} — ${copy.ui.openDetail}`}
                        className="group relative flex w-full items-center gap-3 py-3.5 pl-4 pr-2 text-left transition-colors focus:outline-none lg:py-[clamp(4px,calc(4.2vh-26.4px),12px)]"
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 top-1/2 w-[2px] -translate-y-1/2 rounded-full bg-[#00b8ad] transition-all duration-300 ease-out ${
                            isActive ? "h-[62%] opacity-100" : "h-0 opacity-0"
                          }`}
                        />
                        <span className="min-w-0 flex-1">
                          <span
                            className={`block font-display leading-[28px] tracking-[-0.015em] transition-all duration-300 ${
                              isActive
                                ? "text-[21px] text-[#181811]"
                                : "text-[19px] text-[#9a9a8e] group-hover:text-[#3d3d36]"
                            }`}
                          >
                            {item.title}
                          </span>
                          {/* Height snaps instantly (no transition on h/mt) so swapping
                              the active item never changes the column's total height —
                              no re-centering bounce. Only opacity fades. */}
                          <span
                            className={`block overflow-hidden transition-opacity duration-300 ease-out ${
                              isActive ? "mt-1 h-5 opacity-100" : "h-0 opacity-0"
                            }`}
                          >
                            <span className="block truncate text-[12.5px] leading-5 text-[#6c6c61]">
                              {item.subtitle}
                            </span>
                          </span>
                        </span>
                        <span
                          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isActive
                              ? "translate-x-0 bg-[#00b8ad]/10 text-[#06857c] opacity-100"
                              : "-translate-x-1 text-[#c2c1b4] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                          }`}
                        >
                          <ArrowUpRight size={15} />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className="rise mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-[clamp(0.55rem,calc(4.2vh-18.4px),1.25rem)]"
              style={{ animationDelay: "0.34s" }}
            >
              <button
                type="button"
                onClick={() => openDetail("contact")}
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#181811] pl-5 pr-4 text-[13px] font-medium text-[#f2f2f0] transition hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40 lg:h-[clamp(38px,calc(4.2vh+5.6px),44px)]"
              >
                {copy.ui.startProject}
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
            {!copy.hero.subcopy ? (
              <div className="hidden h-8 lg:block" aria-hidden="true" />
            ) : null}
            </div>
          </section>

          <section
            className={`relative order-2 min-h-[340px] lg:order-none lg:h-full lg:min-h-0 ${
              detailId ? "invisible" : ""
            }`}
            aria-label="Interactive product preview"
            aria-hidden={detailId ? true : undefined}
          >
            <div className="rise h-full" style={{ animationDelay: "0.18s" }}>
              <DeviceDesk
                panel={activePanel}
                labels={copy.ui}
                morphName={detailId ? undefined : MORPH_NAME}
                onOpenDetails={() => openDetail(activePanel.id)}
              />
            </div>
          </section>

          {detailPanel ? (
            <DetailView
              panel={detailPanel}
              labels={copy.ui}
              language={language}
              onClose={closeDetail}
            />
          ) : null}
        </div>

        {/* running foot */}
        <footer className="rise flex items-center justify-between gap-4 border-t border-[#e4e4e1] pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#9d9d90] lg:pt-[clamp(0.5rem,calc(4.2vh-22.4px),1rem)]">
          <span>© 2026 — Vienna, AT</span>
          <span className="hidden items-center gap-2 text-[#7c7c70] sm:flex">
            <span className="accent-pulse h-1.5 w-1.5 rounded-full bg-[#00b8ad]" />
            {language === "de" ? "Offen für ausgewählte Projekte" : "Open to selected projects"}
          </span>
          <a
            href="mailto:hello@lukaskaffer.com"
            className="transition hover:text-[#181811]"
          >
            hello@lukaskaffer.com
          </a>
        </footer>
      </div>

      {detailId ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label={copy.ui.overview}
            onClick={closeDetail}
            className="fixed inset-y-0 left-0 z-40 hidden cursor-default lg:block"
            style={{
              width: "calc(((100vw - min(100vw, 1240px)) / 2) + 2.5rem)",
            }}
          />
          <button
            type="button"
            tabIndex={-1}
            aria-label={copy.ui.overview}
            onClick={closeDetail}
            className="fixed inset-y-0 right-0 z-40 hidden cursor-default lg:block"
            style={{
              width: "calc(((100vw - min(100vw, 1240px)) / 2) + 2.5rem)",
            }}
          />
        </>
      ) : null}

      {/* sticky mobile CTA — keeps the primary action in reach while scrolling */}
      {!detailId ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4e4e1] bg-[#f2f2f0]/85 px-6 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur-md lg:hidden">
          <button
            type="button"
            onClick={() => openDetail("contact")}
            className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#181811] text-[14px] font-medium text-[#f2f2f0] transition active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
          >
            {copy.ui.startProject}
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      ) : null}
    </main>
  );
}

function DeviceDesk({
  panel,
  labels,
  morphName,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  morphName?: string;
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative mx-auto flex min-h-[340px] max-w-[760px] items-center justify-center lg:h-full lg:min-h-0 xl:max-w-[840px] lg:translate-x-2 xl:translate-x-8">
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
            labels={labels}
            morphName={morphName}
            onOpenDetails={onOpenDetails}
          />
        </div>
      </div>
    </div>
  );
}

function MacBook({
  panel,
  labels,
  morphName,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  morphName?: string;
  onOpenDetails: () => void;
}) {
  return (
    <div className="relative">
      <div className="relative rounded-[26px] border-[9px] border-[#111211] bg-[#111211] shadow-[0_34px_110px_rgba(17,18,17,0.26)]">
        <span className="absolute left-1/2 top-2 z-30 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2a2b29] ring-1 ring-white/10" />
        <div
          className="relative aspect-[16/10] overflow-hidden rounded-[17px] bg-[#070b0c]"
          style={{ viewTransitionName: morphName }}
        >
          <MacBookScreen
            panel={panel}
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
  labels,
  onOpenDetails,
}: {
  panel: Panel;
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
      <WindowBar name="Über Mich" meta="Lukas Kaffer" />
      <div className="relative flex flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(0,184,173,0.16),transparent_38%),radial-gradient(circle_at_8%_96%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(152deg,#0c1415,#0a0d0d_62%,#070b0c)]" />

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
                  src="/profile/lukas-standing.jpg"
                  alt="Lukas Kaffer — studio portrait"
                  width={732}
                  height={1100}
                  className="h-full w-full scale-[1.32] object-cover object-[50%_6%]"
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
  labels,
  onOpenDetails,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  onOpenDetails: () => void;
}) {
  return (
    <div className="flex h-full flex-col text-white">
      <WindowBar name={panel.title} meta="Lukas Kaffer" />
      <div className="relative flex flex-1 flex-col justify-center overflow-hidden p-[7%]">
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

// Rich showcase body for the "work" detail: brand → web + capabilities →
// native iOS app + App Store badge → Aurea Clinic concept (links to /clinic).
// Autoplaying, muted, looping video. Forces the DOM `muted` property (React's
// `muted` prop is unreliable and would block autoplay) and actively retries
// play() on canplay/loadeddata, since the dev server can serve media late.
function AutoplayVideo({
  webm,
  mp4,
  poster,
  className,
}: {
  webm: string;
  mp4: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    v.addEventListener("loadeddata", tryPlay);
    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, [webm, mp4]);
  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={poster}
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  );
}

// Horizontal row that also supports click-and-drag (mouse) scrolling, on top of
// native wheel/trackpad/touch scrolling. Touch is left to the browser.
function DragScrollRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0 });
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return; // let touch/trackpad scroll natively
    const el = ref.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    el.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };
  const end = (e: ReactPointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    drag.current.down = false;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };
  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={end}
      onPointerCancel={end}
      className={className}
    >
      {children}
    </div>
  );
}

function WorkShowcase({ content }: { content: WorkShowcaseContent }) {
  const [webDark, setWebDark] = useState(true);
  return (
    <div className="pb-2">
      {/* Brand */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-7">
        <Image
          src="/case-studies/wer-logo.png"
          alt="Wien Event Radar"
          width={2000}
          height={500}
          className="h-8 w-auto sm:h-9"
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9d9d90]">
          {content.brandCaption}
        </span>
      </div>

      {/* Web platform */}
      <section className="border-t border-[#eaeae7] pt-7">
        <div className="flex items-center justify-between gap-3 pb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9d9d90]">
            {content.webLabel}
          </span>
          <a
            href="https://viennaeventradar.at"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#06857c] transition hover:text-[#181811]"
          >
            {content.webMeta}
            <ArrowUpRight
              size={12}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
        <div
          className={`overflow-hidden rounded-[16px] border shadow-[0_24px_60px_-28px_rgba(12,14,13,0.4)] transition-colors ${
            webDark ? "border-[#0a1113] bg-[#0a1113]" : "border-[#e4e4e1] bg-[#f4f3f0]"
          }`}
        >
          <div
            className={`flex items-center gap-2 border-b px-3.5 py-2 ${
              webDark ? "border-white/[0.08]" : "border-black/[0.06]"
            }`}
          >
            <span className="h-[8px] w-[8px] rounded-full bg-[#00b8ad]" />
            <span
              className={`text-[9.5px] font-semibold uppercase tracking-[0.15em] ${
                webDark ? "text-white/70" : "text-[#6c6c61]"
              }`}
            >
              viennaeventradar.at
            </span>
            {/* light / dark theme toggle — switches which recording plays */}
            <div
              className={`ml-auto inline-flex items-center rounded-full p-0.5 ${
                webDark ? "bg-white/10" : "bg-black/[0.06]"
              }`}
            >
              <button
                type="button"
                onClick={() => setWebDark(false)}
                aria-label="Helles Theme"
                aria-pressed={!webDark}
                className={`flex h-[18px] w-[18px] items-center justify-center rounded-full transition ${
                  !webDark
                    ? "bg-white text-[#181811] shadow-sm"
                    : "text-white/45 hover:text-white/80"
                }`}
              >
                <Sun size={11} />
              </button>
              <button
                type="button"
                onClick={() => setWebDark(true)}
                aria-label="Dunkles Theme"
                aria-pressed={webDark}
                className={`flex h-[18px] w-[18px] items-center justify-center rounded-full transition ${
                  webDark
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-[#9d9d90] hover:text-[#54544c]"
                }`}
              >
                <Moon size={11} />
              </button>
            </div>
          </div>
          <AutoplayVideo
            key={webDark ? "dark" : "light"}
            webm={`/case-studies/vienna-web-${webDark ? "dark" : "light"}.webm`}
            mp4={`/case-studies/vienna-web-${webDark ? "dark" : "light"}.mp4`}
            poster={`/case-studies/vienna-web-${webDark ? "dark" : "light"}-poster.jpg`}
            className="block w-full"
          />
        </div>

        {/* Capabilities */}
        <p className="pb-4 pt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-[#9d9d90]">
          {content.capabilitiesLabel}
        </p>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {content.capabilities.map((cap) => (
            <div key={cap.title} className="flex gap-3">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b8ad]" />
              <div>
                <h3 className="font-display text-[15.5px] font-medium leading-snug tracking-[-0.01em] text-[#181811]">
                  {cap.title}
                </h3>
                <p className="mt-1 text-[13.5px] leading-[1.55] text-[#6c6c61]">
                  {cap.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono text-[10.5px] leading-relaxed text-[#a8a89b]">
          {content.techLine}
        </p>
      </section>

      {/* Native iOS app */}
      <section className="mt-9 border-t border-[#eaeae7] pt-7">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9d9d90]">
          {content.iosLabel}
        </span>
        <h3 className="mt-3 max-w-[28ch] font-display text-[19px] font-medium leading-[1.24] tracking-[-0.015em] text-[#181811] sm:text-[21px]">
          {content.iosTitle}
        </h3>
        <p className="mt-2 max-w-[56ch] text-[14px] leading-[1.6] text-[#6c6c61]">
          {content.iosBody}
        </p>
        <div className="relative mt-5">
          <DragScrollRow className="flex cursor-grab snap-x snap-proximity gap-3 overflow-x-auto pb-2 select-none touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden">
            {IOS_PREVIEWS.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={720}
                height={1561}
                sizes="200px"
                loading="eager"
                draggable={false}
                className="h-[340px] w-auto shrink-0 snap-start rounded-[20px] border border-[#e4e4e1]"
              />
            ))}
          </DragScrollRow>
          {/* right-edge fade hints that more screens are scrollable */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#fafafa] to-transparent" />
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex transition hover:opacity-80"
          aria-label={content.badgeAlt}
        >
          <Image
            src={content.badgeSrc}
            alt={content.badgeAlt}
            width={140}
            height={47}
            unoptimized
            className="h-[46px] w-auto"
          />
        </a>
      </section>

      {/* Aurea Clinic concept */}
      <section className="mt-9 border-t border-[#eaeae7] pt-7">
        <div className="flex items-center justify-between gap-3 pb-3">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#e0e0dc] bg-white/60 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-[#7c7c70]">
              {content.aureaLabel}
            </span>
            <span className="font-display text-[15px] font-medium tracking-[-0.01em] text-[#181811]">
              {content.aureaTitle}
            </span>
          </div>
          <a
            href={CLINIC_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#06857c] transition hover:text-[#181811]"
          >
            {content.aureaCta}
            <ArrowUpRight
              size={12}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
        <a
          href={CLINIC_URL}
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden rounded-[16px] border border-[#e4e4e1] bg-[#1a1a1a] shadow-[0_24px_60px_-28px_rgba(12,14,13,0.4)]"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] px-3.5 py-2">
            <span className="h-[8px] w-[8px] rounded-full bg-[#c4a882]" />
            <span className="text-[9.5px] font-semibold uppercase tracking-[0.15em] text-white/70">
              lukaskaffer.com/clinic
            </span>
          </div>
          <AutoplayVideo
            webm="/case-studies/aurea-preview.webm"
            mp4="/case-studies/aurea-preview.mp4"
            poster="/case-studies/aurea-preview-poster.jpg"
            className="block w-full"
          />
        </a>
        <p className="mt-4 max-w-[58ch] text-[14px] leading-[1.6] text-[#6c6c61]">
          {content.aureaBody}
        </p>
      </section>
    </div>
  );
}

const CONTACT_EMAIL = "hello@lukaskaffer.com";

const FORM_COPY: Record<
  Language,
  {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    note: string;
    successTitle: string;
    successBody: string;
    errorBody: string;
    fallbackPrefix: string;
    fallbackLink: string;
  }
> = {
  de: {
    name: "Name",
    namePlaceholder: "Wie heißt du?",
    email: "E-Mail",
    emailPlaceholder: "name@beispiel.com",
    message: "Deine Idee",
    messagePlaceholder:
      "In zwei, drei Sätzen: Was willst du launchen, für wen, und wo hakt es gerade?",
    submit: "Idee schicken",
    sending: "Wird gesendet …",
    note: "Kostenlos und unverbindlich. Deine Angaben gehen direkt an mich.",
    successTitle: "Angekommen — danke!",
    successBody:
      "Ich melde mich in der Regel innerhalb von 24 Stunden. Schau zur Sicherheit auch im Spam-Ordner nach.",
    errorBody: "Hat gerade nicht geklappt. Schreib mir gern direkt:",
    fallbackPrefix: "Lieber direkt mailen?",
    fallbackLink: CONTACT_EMAIL,
  },
  en: {
    name: "Name",
    namePlaceholder: "What's your name?",
    email: "Email",
    emailPlaceholder: "name@example.com",
    message: "Your idea",
    messagePlaceholder:
      "In two or three sentences: what you want to launch, who it is for and where it is stuck.",
    submit: "Send idea",
    sending: "Sending …",
    note: "Free and no obligation. Your message comes straight to me.",
    successTitle: "Got it — thank you!",
    successBody:
      "I usually reply within 24 hours. Just in case, keep an eye on your spam folder too.",
    errorBody: "That didn't go through. Feel free to email me directly:",
    fallbackPrefix: "Rather email directly?",
    fallbackLink: CONTACT_EMAIL,
  },
};

type FormStatus = "idle" | "sending" | "sent" | "error";

function ContactForm({ language }: { language: Language }) {
  const t = FORM_COPY[language];
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const honeypot = String(fd.get("company") ?? "").trim();

    // Honeypot: bots fill this hidden field. Pretend success, send nothing.
    if (honeypot) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    const subject = `Neue Anfrage über lukaskaffer.com — ${name}`;
    const body = [
      `Name:    ${name}`,
      `E-Mail:  ${email}`,
      `Sprache: ${language}`,
      "",
      message,
    ].join("\n");

    try {
      // Web3Forms free tier only accepts browser-side submissions, so we POST
      // straight from here (api.web3forms.com is allowlisted in the CSP).
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: "lukaskaffer.com",
          replyto: email,
          name,
          email,
          message: body,
          botcheck: false,
        }),
      });
      const json = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !json?.success) throw new Error("web3forms");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="mt-2 border-t border-[#e7e7e3] pb-12 pt-9">
        <div className="rounded-[18px] border border-[#cdeae6] bg-[#eef9f7] p-6 sm:p-7">
          <span className="accent-pulse inline-block h-2 w-2 rounded-full bg-[#00b8ad]" />
          <p className="mt-3 font-display text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181811]">
            {t.successTitle}
          </p>
          <p className="mt-2 max-w-[46ch] text-[14px] leading-[1.6] text-[#5c6b68]">
            {t.successBody}
          </p>
        </div>
      </div>
    );
  }

  const labelClass =
    "font-mono text-[10px] uppercase tracking-[0.18em] text-[#9d9d90]";
  const fieldClass =
    "mt-2 w-full rounded-[12px] border border-[#e0e0dc] bg-white/70 px-3.5 py-2.5 text-[14px] leading-6 text-[#181811] outline-none transition placeholder:text-[#abab9f] focus:border-[#00b8ad] focus:bg-white focus:ring-2 focus:ring-[#00b8ad]/25";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-2 border-t border-[#e7e7e3] pb-12 pt-9"
    >
      {/* Honeypot — visually hidden, off-screen, ignored by real users. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{t.name}</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{t.email}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>{t.message}</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder={t.messagePlaceholder}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-[#181811] pl-5 pr-4 text-[13px] font-medium text-[#f2f2f0] transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00b8ad]/40"
        >
          {status === "sending" ? t.sending : t.submit}
          {status === "sending" ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-[1.5px] border-[#f2f2f0]/40 border-t-[#f2f2f0]" />
          ) : (
            <ArrowUpRight
              size={15}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </button>
        <p className="max-w-[40ch] text-[12px] leading-5 text-[#8a8a7e]">{t.note}</p>
      </div>

      {status === "error" ? (
        <p className="mt-4 text-[13px] leading-6 text-[#9a4a3c]">
          {t.errorBody}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium underline decoration-[#d6b3ab] underline-offset-2 hover:text-[#181811]"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      ) : (
        <p className="mt-4 text-[12.5px] leading-5 text-[#a0a094]">
          {t.fallbackPrefix}{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="underline decoration-[#d8d8d2] underline-offset-2 transition hover:text-[#181811]"
          >
            {t.fallbackLink}
          </a>
        </p>
      )}
    </form>
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="pb-10 pt-2">
      <div className="border-y border-[#eaeae7]">
        {items.map((item, index) => (
          <details
            key={item.q}
            className={`group ${index > 0 ? "border-t border-[#eaeae7]" : ""}`}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-[16px] font-medium leading-[1.32] tracking-[-0.01em] text-[#181811] sm:text-[17px]">
                {item.q}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e0e0dc] text-[#7c7c70] transition-transform duration-300 group-open:rotate-45">
                <Plus size={15} />
              </span>
            </summary>
            <p className="max-w-[62ch] pb-5 pr-10 text-[14px] leading-[1.65] text-[#6c6c61]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

function DetailView({
  panel,
  labels,
  language,
  onClose,
}: {
  panel: Panel;
  labels: PageCopy["ui"];
  language: Language;
  onClose: () => void;
}) {
  const isWork = panel.id === "work";
  const isContact = panel.id === "contact";
  const isFaq = panel.id === "faq";
  const isAbout = panel.id === "about";
  const sections = isWork ? [] : panel.modalSections ?? [];
  // Only rendered on the client (gated by interaction), so reading `document`
  // here is safe and avoids a hydration mismatch.
  const [supportsVT] = useState(
    () => typeof document !== "undefined" && "startViewTransition" in document,
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    // The main area itself reshapes: the monitor screen morphs into this surface
    // (View Transitions). No overlay, no card chrome — same page, edge to edge.
    <div
      className={`absolute inset-0 z-30 flex flex-col bg-[#fafafa] text-[#181811] ${
        supportsVT ? "" : "detail-fallback-in"
      }`}
      style={{ viewTransitionName: MORPH_NAME }}
      role="region"
      aria-label={panel.title}
    >
      {/* back row — part of the page, not dialog chrome */}
      <div className="shrink-0 border-b border-[#e7e7e3]">
        <div
          className="mx-auto flex w-full max-w-[760px] items-center justify-between gap-4 py-3"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#7c7c70] transition hover:text-[#181811] focus:outline-none focus-visible:text-[#181811]"
          >
            <ArrowLeft
              size={15}
              className="transition group-hover:-translate-x-0.5"
            />
            {labels.overview}
          </button>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#a8a89b]">
            {panel.title}
          </span>
        </div>
      </div>

      {/* scroll body */}
      <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain">
        {isAbout ? (
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 hidden w-[48%] max-w-[490px] overflow-hidden lg:block">
            <Image
              src="/profile/lukas-seated.jpg"
              alt=""
              width={733}
              height={1100}
              aria-hidden
              className="h-full w-full object-cover object-[50%_18%] opacity-[0.48] grayscale"
              sizes="(min-width: 1024px) 490px, 0px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#fafafa_0%,rgba(250,250,250,0.72)_18%,rgba(250,250,250,0.16)_54%,rgba(250,250,250,0.12)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#fafafa_0%,rgba(250,250,250,0)_18%,rgba(250,250,250,0)_82%,#fafafa_100%)]" />
          </div>
        ) : null}
        <div
          className="relative z-10 mx-auto w-full max-w-[760px]"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="pb-8 pt-9 sm:pt-10">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[#06857c]">
              {panel.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[20ch] font-display text-[29px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#181811] sm:text-[38px]">
              {panel.headline}
            </h1>
            <p className="mt-4 max-w-[58ch] whitespace-pre-line text-[15px] leading-7 text-[#6c6c61] sm:text-[16px]">
              {panel.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              {!isContact ? (
                <a
                  href="mailto:hello@lukaskaffer.com"
                  className="group inline-flex h-10 items-center gap-2 rounded-full bg-[#181811] pl-4 pr-3.5 text-[12.5px] font-medium text-[#f2f2f0] transition hover:bg-black"
                >
                  {labels.writeEmail}
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ) : null}
              {panel.chips.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {panel.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[#e0e0dc] bg-white/60 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-[#7c7c70]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </header>

          {isWork ? <WorkShowcase content={WORK_SHOWCASE[language]} /> : null}

          {isFaq && panel.faq ? <FaqList items={panel.faq} /> : null}

          {sections.length > 0 ? (
            <div className="pb-4 pt-7">
              {sections.map((section, index) => (
                <div
                  key={section.label}
                  className={`grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] ${
                    index > 0 ? "border-t border-[#eaeae7] pt-6" : "pt-1"
                  } pb-6`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9d9d90]">
                    {section.label}
                  </span>
                  <div>
                    <h3 className="max-w-[28ch] font-display text-[19px] font-medium leading-[1.24] tracking-[-0.015em] text-[#181811] sm:text-[21px]">
                      {section.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-[14px] leading-[1.6] text-[#6c6c61]">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {!isWork && panel.details.length > 0 ? (
            <div className="pb-10">
              <div className="rounded-[18px] border border-[#e4e4e1] bg-white/55 p-5 sm:p-6">
                <div className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {panel.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex gap-3 text-[14px] leading-6 text-[#54544c]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b8ad]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {isContact ? (
            <>
              <div className="mt-1 flex items-center gap-4 pb-1 pt-2">
                <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border border-[#e0e0dc]">
                  <Image
                    src="/profile/lukas-seated.jpg"
                    alt="Lukas Kaffer"
                    width={733}
                    height={1100}
                    className="h-full w-full object-cover object-[50%_18%]"
                    sizes="58px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-[15px] font-medium leading-tight text-[#181811]">
                    Lukas Kaffer
                  </p>
                  <p className="mt-1 max-w-[46ch] text-[13px] leading-[1.5] text-[#6c6c61]">
                    {language === "de"
                      ? "Du schreibst direkt an mich — kein Ticket-System, kein Vertrieb dazwischen."
                      : "You're writing directly to me — no ticket system, no sales team in between."}
                  </p>
                </div>
              </div>
              <ContactForm language={language} />
            </>
          ) : (
            <div className="mt-2 border-t border-[#e7e7e3]">
              <div className="flex flex-col items-start gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="max-w-[28ch] font-display text-[19px] font-medium leading-[1.22] tracking-[-0.02em] text-[#181811]">
                    {language === "de"
                      ? "Eine Idee im Kopf? Erzähl sie mir."
                      : "Got an idea? Tell me about it."}
                  </p>
                  <p className="mt-1.5 text-[12.5px] leading-5 text-[#8a8a7e]">
                    {language === "de"
                      ? "Kostenlos und unverbindlich — direkt an mich, hello@lukaskaffer.com."
                      : "Free and no obligation — straight to me at hello@lukaskaffer.com."}
                  </p>
                </div>
                <a
                  href="mailto:hello@lukaskaffer.com"
                  className="group inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#181811] pl-4 pr-3.5 text-[12.5px] font-medium text-[#f2f2f0] transition hover:bg-black"
                >
                  {labels.writeEmail}
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
