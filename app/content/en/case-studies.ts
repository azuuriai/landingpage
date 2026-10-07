import type {
  CaseStudyCopy,
  IndeedUniqueCopy,
  OperationsAppCopy,
  ViennaEventRadarCopy,
  WienEventRadarIosCopy,
} from "../types";

// Facts are taken from the project's own documentation (docs/SANITY_STATUS.md,
// DEPLOYMENT.md, DECISION_LOG.md, MIGRATION_PLAN, September 2026) and its
// source. Keep them in sync when the site changes — no numbers without a source.
const indeedUnique: IndeedUniqueCopy = {
  tour: {
    title: "A website that feels like dance.",
    intro: "Movement is the studio’s craft, so it is the website’s too.",
    entry: {
      label: "Indeed Unique’s opening animation: a figure dances itself into the logo",
      title: "Opening",
      text: "A stick figure dances itself into the logo.",
    },
    news: {
      label:
        "Indeed Unique homepage: posts flip like pages on a tablet, then the shelf with all posts slides to the right",
      title: "News",
      text: "The latest posts flip through on a tablet while the whole archive slides past behind them.",
    },
    archive: {
      label:
        "Indeed Unique video archive: film previews rotate as a spatial gallery while scrolling",
      title: "Video archive",
      text: "Ten years of performances, as a gallery that turns as you scroll.",
    },
    booking: {
      label:
        "Booking at Indeed Unique: schedule, semester passes and gift card purchase from Eversports in the website’s design",
      title: "Booking",
      text: "Find a class, pick a semester pass, give a gift card, all in the website’s own design.",
    },
  },
  cms: {
    title: "The studio runs its own website.",
    figures: [
      { value: "24", label: "fixed pages, all editable in the CMS" },
      { value: "22", label: "building blocks for new pages" },
      { value: "182", label: "posts carried over from the old website" },
      { value: "279", label: "old URLs permanently redirected" },
    ],
    tools: [
      {
        title: "One menu entry per task",
        text: "Post news, organize classes and team profiles, enter the dance year and class-free days.",
      },
      {
        title: "New pages from building blocks",
        text: "22 designed sections, freely combinable. Every page is individual and stays on brand.",
      },
      {
        title: "A dashboard with open tasks",
        text: "The studio sees at a glance what is still missing, and every draft that is not online yet.",
      },
      {
        title: "Preview before publishing",
        text: "One click builds a preview of the whole website that can be passed on for proofreading.",
      },
      {
        title: "Guardrails that prevent mistakes",
        text: "Character limits, required image descriptions, a preview of the image crop and a page picker for links.",
      },
      {
        title: "Status always visible",
        text: "A bar shows whether the latest change is live yet. Publishing triggers the rebuild automatically.",
      },
    ],
  },
  booking: {
    title: "Booking straight from Eversports.",
    intro:
      "Schedule, semester passes and gift cards come directly from Eversports, the system the studio already works with, and still look like the website. Nothing is maintained twice.",
    items: [
      {
        title: "Schedules for Vienna and Mödling",
        text: "Semester courses and drop-in classes, week by week, with a direct path to booking.",
      },
      {
        title: "Semester passes and prices",
        text: "From one class a week to the big package, bought and paid for online.",
      },
      {
        title: "Gift cards",
        text: "Pick an amount, choose a design and give it away, redeemable at both locations.",
      },
      {
        title: "Plan B",
        text: "If Eversports is ever unavailable, a direct link and the schedule as a PDF keep things moving.",
      },
    ],
  },
  mobile: {
    title: "Just as complete on the phone.",
    text: "The mobile version was planned as an equal from the start, not added later: the same content, its own navigation, an opening and showcase built for the small screen, and short paths to schedule and sign-up.",
    label: "Indeed Unique on the iPhone: opening, showcase and schedule",
  },
  operations: {
    title: "Runs without anyone having to think about it.",
    intro:
      "A studio website has to be reliable above all. So there is no server, no database and no platform fees, but automated checks and backups instead.",
    items: [
      {
        title: "No server of its own",
        text: "Every page is built in advance and delivered through Cloudflare. Nothing anyone has to maintain.",
      },
      {
        title: "Running costs: the domain only",
        text: "CMS, hosting and backups run on free plans.",
      },
      {
        title: "Checked before every release",
        text: "Automated tests for types, SEO, content rules, the Eversports integration and backups, plus a full trial build.",
      },
      {
        title: "Daily backup and refresh",
        text: "All content is backed up daily, and time-dependent pages are rebuilt every morning.",
      },
    ],
  },
};

// Facts come from the product's repositories (web: Vienna Event Dashboard,
// admin: radar-admin-ios, docs/research-system.md and
// docs/admin-operations-playbook.md, September 2026). No usage numbers until
// they are documented.
const viennaEventRadar: ViennaEventRadarCopy = {
  features: {
    title: "From browsing to making plans.",
    intro:
      "The platform answers a simple question: what are we doing today, this weekend or with friends? Every step on the way is built, from the first filter to the suggestion others reply to.",
    items: [
      {
        image: "dashboard",
        alt: "Vienna Event Radar homepage with quick filters and Top Picks",
        title: "Discover",
        text: "One homepage instead of thirty tabs: Top Picks, today and tomorrow, and quick filters for weekend, free and outdoor.",
      },
      {
        image: "event-detail",
        alt: "Event details for the Wiener Kaiser Wiesn with description and upcoming dates",
        title: "Event details",
        text: "Dates, venue, price, source and what to expect, in one view. Save, rate and share right from there.",
      },
      {
        image: "proposal",
        alt: "“Share a suggestion” dialog for the SLASH Filmfestival with sharing via email and WhatsApp",
        title: "Suggest",
        text: "Send an event to friends as a link, calendar entry included. They answer with “I’m in” or “Probably not.”",
      },
      {
        image: "radar-assistant",
        alt: "The “Ask your Radar” assistant suggests outdoor events for tomorrow",
        title: "Ask your Radar",
        text: "An assistant, called “Frag dein Radar” in the app, that understands requests like “outdoor, tomorrow, with friends.” Which events match is decided by a transparent search, not by the language model.",
      },
    ],
  },
  platform: {
    title: "More than a list of events.",
    intro:
      "Behind it is a complete product with accounts, groups, a newsletter and pages that search engines find.",
    items: [
      {
        title: "Accounts any way you like",
        text: "Sign in with Google, Apple, a password or a magic link. Favorites and your own events are the same everywhere.",
      },
      {
        title: "Plan together",
        text: "In groups, members suggest events, vote and settle on a date.",
      },
      {
        title: "Monday Radar",
        text: "The weekly Monday Radar newsletter with the best tips for the week ahead, double opt-in included.",
      },
      {
        title: "Easy to find",
        text: "Dedicated pages for every event and every category, from today’s events to free events in Vienna, in German and English.",
      },
    ],
  },
  backstage: {
    title: "Behind the scenes: research, review, approval.",
    intro:
      "AI speeds up the research but publishes nothing on its own. Every event goes through a review before it goes live, and operations can be run from the desk and from the iPhone.",
    items: [
      {
        title: "Research with duplicate check",
        text: "New events come from AI-assisted research. Before a find enters the system, it is checked against what is already there.",
      },
      {
        title: "Approval instead of autopilot",
        text: "A queue in the admin area: check source, dates and venue, then publish deliberately.",
      },
      {
        title: "Editorial work in one place",
        text: "Top Picks, translations, newsletter, moderation and a Social Studio for posts on social networks.",
      },
      {
        title: "In-house usage analytics",
        text: "Which events get opened, saved and shared, and what people search for, with minimal data and no third parties.",
      },
      {
        title: "Admin app for the iPhone",
        text: "Operations, usage, reach, newsletter and Social Studio on the go, protected with Face ID.",
      },
      {
        title: "Monitored operations",
        text: "Automated tests for data contracts, duplicates, security and date logic. Sentry reports errors from web and app.",
      },
    ],
    stack: "Next.js, React, TypeScript, Supabase, Vercel, Sentry",
  },
  ios: {
    title: "Also as a native iOS app.",
    text: "Web and app share the backend, accounts and groups. The interfaces still stand on their own: responsive in the browser, native in SwiftUI on the iPhone, with widgets, a Live Activity and calendar.",
    button: "See the iOS app",
    discoverAlt: "Wien Event Radar for iOS: Discover",
    mapAlt: "Wien Event Radar for iOS: Map",
  },
};

// Facts come from the iOS repository (Wien Event Radar, version 1.3.4,
// docs/shared-supabase-contract.md, September 2026). Screens are the clean
// App Store captures from AppStorePreviews/assets/2026-09.
const wienEventRadarIos: WienEventRadarIosCopy = {
  tabs: {
    title: "Four tabs, one radar.",
    intro:
      "Discover, For you, Favorites and Search: the app follows the patterns people know from iOS, with native navigation, gestures and system features instead of a website dressed up as an app.",
    items: [
      {
        image: "entdecken",
        alt: "Discover view with recommendations and Today & Tomorrow",
        title: "Discover",
        text: "Recommendations to swipe through and everything for today and tomorrow at a glance.",
      },
      {
        image: "fuer-dich",
        alt: "For you: the personal radar with chosen interests",
        title: "For you",
        text: "A personal radar: pick a few interests, and the feed gets sharper with every tip.",
      },
      {
        image: "suche",
        alt: "Search with quick filters and categories",
        title: "Search",
        text: "Categories, quick filters and free search. From iOS 26 on, it understands requests in natural language, right on the device.",
      },
      {
        image: "details",
        alt: "Event details for Weinwandern Wien with dates, venue and route",
        title: "Event details",
        text: "Dates, venue, route and source in one view, one tap away in Apple Maps or Google Maps.",
      },
      {
        image: "aktionen",
        alt: "Actions: set the countdown in advance, save attendance, open the source",
        title: "Save and plan",
        text: "Save it, add it to the calendar, plan it with the group or share it. The countdown can be set in advance.",
      },
      {
        image: "karte",
        alt: "Map of Vienna with events as markers",
        title: "Map",
        text: "Every event on the map of Vienna, filtered by today, this week or free.",
      },
    ],
  },
  system: {
    title: "Deeply integrated with the iPhone.",
    text: "The app doesn’t just live in its icon. It shows up where people already look: on the lock screen, in the calendar and in the system search.",
    items: [
      {
        title: "“Today in Vienna” widgets",
        text: "For the home and lock screen. Events can be saved straight from the widget.",
      },
      {
        title: "Live Activity",
        text: "A countdown to the event on the lock screen that starts on its own a few hours before it begins.",
      },
      {
        title: "Calendar and notifications",
        text: "Add events to Apple Calendar, plus reminders and push notifications.",
      },
      {
        title: "Shortcuts and Spotlight",
        text: "Find events through Shortcuts and the iPhone’s system search.",
      },
      {
        title: "Sign in with Apple",
        text: "Or with Google. One account for the app and the web platform.",
      },
    ],
    liveActivityAlt:
      "Wien Event Radar’s Live Activity on the lock screen: Weinwandern Wien is on now",
  },
  foundation: {
    title: "A standalone app, a shared core.",
    intro:
      "Web and iPhone share data, accounts and groups. The interface is still built entirely for iOS and is maintained, tested and released like a product of its own.",
    items: [
      {
        title: "One backend for web and app",
        text: "The same database as the web platform. Accounts, favorites and groups are in sync everywhere.",
      },
      {
        title: "Plan together",
        text: "Groups suggest events, vote and settle on a date, whether in the browser or on the iPhone.",
      },
      {
        title: "Tested and monitored",
        text: "Unit and UI tests, plus error monitoring with Sentry.",
      },
      {
        title: "The App Store listing",
        text: "Screenshots and preview video designed and produced by me.",
      },
    ],
    stack: "SwiftUI, MapKit, EventKit, WidgetKit, ActivityKit, App Intents, Supabase, Sentry",
  },
};

// Facts come from the radar-admin-ios repository (build 26, README, Sources and
// the 53 unit and UI tests, October 2026). Screens are the app's preview mode
// with sample data, captured in the iOS Simulator; the story graphics are real
// exports from the Social Studio (docs/screenshots, build 23).
const operationsApp: OperationsAppCopy = {
  areas: {
    title: "A platform’s daily routine, in one app.",
    intro:
      "The fourth area is the newsletter editor. Data comes live from the backend; what you see here is the preview mode with sample data.",
    items: [
      {
        image: "monitor",
        alt: "Monitor: everything in view, with usage, reach, delivery, users and a feedback question",
        title: "Monitor",
        text: "Background jobs, errors, usage and reach on one page. Problems stand out before anyone reports them.",
      },
      {
        image: "social-editor",
        alt: "Social Studio: editor with the cover graphic “Wien hat was vor.”",
        title: "Social Studio",
        text: "Current content becomes carousels and stories in the brand’s design.",
      },
      {
        image: "top-picks",
        alt: "Top Picks: the four slots on the homepage, one pinned, three automatic",
        title: "Top Picks",
        text: "Decide what sits at the top of the homepage, or leave the choice to the automation.",
      },
    ],
  },
  studio: {
    title: "From content to finished posts.",
    items: [
      {
        title: "Templates with real content",
        text: "For the week, the weekend or a single event. Dates and images come straight from the platform.",
      },
      {
        title: "Export for Instagram",
        text: "Carousel at 1080 × 1350 and story at 1080 × 1920, straight into the share sheet.",
      },
      {
        title: "Deliberately semi-automated",
        text: "The app drafts, a person decides and publishes.",
      },
    ],
    stories: [
      { image: "story-cover", alt: "Story graphic: “Wien hat was vor.” with two ideas for the weekend" },
      { image: "story-event", alt: "Story graphic for the event “Ein Abend im Museum” with iPhone view" },
      { image: "story-closing", alt: "Closing graphic of the story with a pointer to the app" },
    ],
  },
  foundation: {
    title: "Built like a product, not like a script.",
    figures: [
      { value: "4", label: "areas in one app" },
      { value: "11", label: "monitored background jobs" },
      { value: "53", label: "automated unit and UI tests" },
      { value: "2", label: "export formats for Instagram" },
    ],
    items: [
      { title: "Google sign-in and Face ID", text: "The session lives in the keychain only, and the app locks when reopened." },
      { title: "Roles checked in the backend", text: "Every request verifies the token and the admin role on the server." },
    ],
    stack:
      "SwiftUI, AuthenticationServices, LocalAuthentication, Keychain, Next.js, Supabase, PostgreSQL, Sentry",
  },
};

export const caseStudyCopy: CaseStudyCopy = {
  indeedUnique,
  viennaEventRadar,
  wienEventRadarIos,
  operationsApp,
};
