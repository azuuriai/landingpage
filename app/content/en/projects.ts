import {
  APP_STORE_URL,
  caseStudyBase,
  INDEED_UNIQUE_URL,
  IOS_APP_PATH,
  projectRecordings,
  showcaseMedia,
  VER_PATH,
  VIENNA_EVENT_RADAR_URL,
} from "@/app/projects-data";
import type { CaseStudyData, ProjectData, ProjectSlug, ShowcaseEntry } from "../types";

export const projects: Record<ProjectSlug, ProjectData> = {
  "indeed-unique": {
    ...caseStudyBase["indeed-unique"],
    ...projectRecordings["indeed-unique"],
    name: "Indeed Unique",
    summary:
      "New website for a dance studio in Vienna and Mödling: the studio edits it itself, and classes are booked directly through Eversports.",
    eyebrow: "Website with CMS and online booking",
    title: "A website the dance studio runs on its own.",
    description:
      "I planned, designed and built the new website for Indeed Unique, a dance studio in Vienna and nearby Mödling, from the ground up. The team edits every piece of content in a CMS tailored to the studio. Schedule, prices and booking come through the Eversports integration, straight from the system the studio already works with.",
    facts: [
      { label: "Scope", value: "Concept, design, development, CMS, migration and launch" },
      { label: "Stack", value: "Astro, Sanity, Eversports, Cloudflare" },
      { label: "Running costs", value: "The domain only" },
    ],
    links: [{ label: "Open indeedunique.com", href: INDEED_UNIQUE_URL }],
    metaTitle: "Case Study · Indeed Unique – Website with CMS and Eversports",
    metaDescription:
      "New website for a Vienna dance studio: Astro, a tailored Sanity CMS the team edits itself, Eversports booking in the site’s own design and no platform fees.",
    tourLabel: "Indeed Unique – recording of the website on desktop",
    closing: "Want a website you can maintain yourself?",
  },
  "vienna-event-radar": {
    ...caseStudyBase["vienna-event-radar"],
    ...projectRecordings["vienna-event-radar"],
    name: "Vienna Event Radar",
    summary:
      "Vienna’s events in one place: a platform with curated recommendations, filters, plans you can propose to friends and an assistant.",
    eyebrow: "Event platform on the web",
    title: "Vienna’s events in one place.",
    description:
      "Vienna Event Radar collects events in Vienna, reviews them before they go live and makes them easy to find in a few clicks: filtered by day, price and mood, with suggestions for friends and an assistant that finds matching ideas. Product, design, development and operations are all mine.",
    facts: [
      { label: "Scope", value: "Product, design, development, editorial work and operations" },
      { label: "Stack", value: "Next.js, Supabase, Vercel" },
      { label: "Languages", value: "German and English" },
    ],
    links: [
      { label: "Open viennaeventradar.at", href: VIENNA_EVENT_RADAR_URL },
      { label: "See the iOS app", href: IOS_APP_PATH, internal: true },
      { label: "See the operations app", href: caseStudyBase["operations-app"].path, internal: true },
    ],
    metaTitle: "Case Study · Vienna Event Radar – Event Platform for Vienna",
    metaDescription:
      "Vienna Event Radar: a Next.js platform with Supabase, reviewed event research, admin approval, group planning and the “Frag dein Radar” (Ask your Radar) assistant.",
    tourLabel: "Vienna Event Radar – recording of the website on desktop",
    closing: "Planning a platform with real product logic?",
  },
};

export const iosApp: CaseStudyData = {
  ...caseStudyBase["wien-event-radar-ios"],
  name: "Wien Event Radar for iOS",
  summary:
    "The native iPhone app for Vienna Event Radar: discover, search and plan together, with widgets, a Live Activity and calendar.",
  eyebrow: "Native iOS app",
  title: "Vienna’s events as a real iPhone app.",
  description:
    "The native app for Vienna Event Radar: built in SwiftUI, published on the App Store and deeply integrated with iOS, from widgets and the Live Activity to the calendar. Accounts, favorites and groups are shared with the web platform.",
  facts: [
    { label: "Scope", value: "Concept, design, development and App Store release" },
    { label: "Stack", value: "SwiftUI, Supabase, optimized for iOS 27" },
    { label: "Available", value: "On the App Store" },
  ],
  links: [
    { label: "View on the App Store", href: APP_STORE_URL },
    { label: "See the web platform", href: VER_PATH, internal: true },
  ],
  metaTitle: "Case Study · Wien Event Radar – Native iOS App in SwiftUI",
  metaDescription:
    "Wien Event Radar for iOS: native SwiftUI app with widgets, Live Activity, calendar, map and group planning, sharing its backend with the web platform.",
  tourLabel: "Wien Event Radar for iOS: Discover, event details, saving and map",
  closing: "Does your product belong on the iPhone?",
};

// A private tool, so there is no live link: the page itself is the proof. It
// links to the platform it runs, and that case study links back.
export const operationsApp: CaseStudyData = {
  ...caseStudyBase["operations-app"],
  name: "Operations app with Social Studio",
  summary:
    "The private iPhone app I use to run Vienna Event Radar day to day: system status, social media graphics from real content, newsletter and homepage in one place.",
  eyebrow: "Internal tool · native iOS app",
  title: "Running a platform, straight from the iPhone.",
  description:
    "A private iPhone app that keeps Vienna Event Radar running day to day. It shows whether every background job is working, turns current content into finished Instagram graphics, assembles the weekly newsletter and decides what sits at the top of the homepage. Concept, design, app and the backend endpoints are mine.",
  facts: [
    { label: "Scope", value: "Concept, design, iOS app and backend endpoints" },
    { label: "Stack", value: "SwiftUI, Next.js API, Supabase" },
    { label: "Use", value: "Private, not on the App Store" },
  ],
  links: [{ label: "See Vienna Event Radar", href: VER_PATH, internal: true }],
  metaTitle: "Case Study · Operations App with Social Studio in SwiftUI",
  metaDescription:
    "Internal SwiftUI app for the iPhone: monitors background jobs and errors, drafts Instagram carousels and stories, edits the newsletter, controls the homepage.",
  tourLabel: "Operations app: Monitor, Social Studio with four slides and Top Picks",
  closing: "Does your team need a tool for recurring work?",
};

// All case study pages, in Showcase order (sitemap).
export const caseStudies: CaseStudyData[] = [
  projects["indeed-unique"],
  projects["vienna-event-radar"],
  iosApp,
  operationsApp,
];

// Entries on the Showcase page. The page intro says which one was client work;
// the entries themselves say what each product does.
export const showcaseEntries: ShowcaseEntry[] = [
  {
    id: "indeed-unique",
    name: "Indeed Unique",
    summary:
      "Studio website with its own CMS: the team edits content itself, and classes are booked directly through Eversports.",
    facts: [
      { label: "Editing", value: "By the team, in Sanity" },
      { label: "Booking", value: "Eversports integrated" },
      { label: "Operations", value: "No fees for CMS or hosting" },
    ],
    href: projects["indeed-unique"].path,
    live: { label: "indeedunique.com", href: INDEED_UNIQUE_URL },
    media: showcaseMedia["indeed-unique"],
  },
  {
    id: "vienna-event-radar-web",
    name: "Vienna Event Radar",
    summary:
      "Event platform with curated recommendations, filters, sharing and an AI assistant that suggests matching ideas.",
    facts: [
      { label: "Content", value: "AI-assisted, human-reviewed" },
      { label: "Assistant", value: "Natural-language search (“Frag dein Radar”)" },
      { label: "Stack", value: "Next.js + Supabase" },
    ],
    href: projects["vienna-event-radar"].path,
    live: { label: "viennaeventradar.at", href: VIENNA_EVENT_RADAR_URL },
    media: showcaseMedia["vienna-event-radar-web"],
  },
  {
    id: "vienna-event-radar-ios",
    name: "Wien Event Radar for iOS",
    summary:
      "The native iPhone app of Vienna Event Radar (App Store name: Wien Event Radar): discover, search and plan, with a map, a calendar and groups for planning nights out.",
    facts: [
      { label: "Features", value: "Map, groups, calendar" },
      { label: "Stack", value: "SwiftUI, optimized for iOS 27" },
      { label: "Available", value: "On the App Store" },
    ],
    href: iosApp.path,
    live: { label: "On the App Store", href: APP_STORE_URL },
    media: showcaseMedia["vienna-event-radar-ios"],
  },
  {
    id: "operations-app",
    name: "Operations app",
    summary:
      "The private iPhone app that runs Vienna Event Radar: system status, social media graphics from real content, newsletter and homepage in one place.",
    facts: [
      { label: "Areas", value: "Monitor, Social Studio, Top Picks" },
      { label: "Export", value: "Instagram carousel and story" },
      { label: "Stack", value: "SwiftUI + Next.js API" },
    ],
    href: operationsApp.path,
    media: showcaseMedia["operations-app"],
  },
];
