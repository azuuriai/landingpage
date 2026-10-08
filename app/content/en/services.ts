import { caseStudyBase } from "@/app/projects-data";
import { iosAppsMedia, webAppsMedia, websitesMedia } from "@/app/services-data";
import type { LaunchCopy, Service } from "../types";

export const services: Service[] = [
  {
    id: "websites",
    name: "Websites",
    teaser: "Design, CMS, booking and launch",
    title: "Websites you stay in control of.",
    body: "For businesses whose offering has to be clear and credible within seconds. Structure, copy, design and code come together so the site brings in inquiries and bookings.",
    includes: [
      "A CMS where you change text, images and posts yourself",
      "Booking and schedules built in, for example through Eversports",
      "Where the scope allows, CMS and hosting run on free tiers, so the domain is your only running cost",
      "Fast on every device, with the SEO basics covered",
    ],
    proofs: [
      { label: "See Indeed Unique", href: caseStudyBase["indeed-unique"].path },
      { label: "See the CMS behind it", href: caseStudyBase["betreiber-cms"].path },
    ],
    media: websitesMedia("Indeed Unique homepage with the showcase for the new dance season"),
  },
  {
    id: "web-apps",
    name: "Web apps",
    teaser: "Platforms, portals and internal tools",
    title: "Web apps with real product logic, not a throwaway demo.",
    body: "Enough substance to learn with real users, without getting lost in an oversized first release. And when recurring work slows you down, I build internal tools that take it off your hands.",
    includes: [
      "Sign-in, roles and database",
      "Admin area and review workflows for content",
      "Email, newsletters and integrations with other services",
      "AI features such as an assistant, where they actually add value",
      "Dashboards, back offices and automations for internal processes",
    ],
    proofs: [
      { label: "See Vienna Event Radar", href: caseStudyBase["vienna-event-radar"].path },
      // The internal-tools line above, shown working: a native iOS tool on a
      // Next.js backend, so it is listed under iOS apps as well.
      {
        label: "See the operations app, an iOS tool on a Next.js backend",
        href: caseStudyBase["operations-app"].path,
      },
    ],
    media: webAppsMedia(
      "Vienna Event Radar: the “Frag dein Radar” (Ask your Radar) assistant suggests matching events",
    ),
  },
  {
    id: "ios-apps",
    name: "iOS apps",
    teaser: "Native, all the way to the App Store",
    title: "iOS apps that feel like iOS.",
    body: "If your product belongs on the iPhone, I build it natively in SwiftUI rather than as a website dressed up as an app: with Apple’s own navigation patterns, system gestures and everything an App Store release needs.",
    includes: [
      "SwiftUI with Apple-native navigation and gestures",
      "Maps, calendar and sharing through the system features",
      "Widgets, Live Activities, Shortcuts and Spotlight",
      "Sign in with Apple and push notifications",
      "One backend shared with your web app, so accounts and data stay in sync",
      "Unit and UI tests plus error monitoring",
      "App Store submission with screenshots and preview video",
    ],
    proofs: [
      { label: "See Wien Event Radar for iOS", href: caseStudyBase["wien-event-radar-ios"].path },
      { label: "See the operations app, an internal iOS tool", href: caseStudyBase["operations-app"].path },
    ],
    media: iosAppsMedia(
      "Wien Event Radar for iOS: Discover view with recommendations",
      "Wien Event Radar for iOS: events on the map of Vienna",
    ),
  },
];

// "Launch included" from the homepage headline, spelled out. A real
// sequence, so the steps are numbered.
export const launch: LaunchCopy = {
  title: "Launch included.",
  intro: "From your first message to life after launch: one point of contact the whole way.",
  steps: [
    {
      title: "Sharpen the idea",
      body: "Goal, audience and the one thing the first release has to do.",
    },
    {
      title: "Scope and price",
      body: "A clear proposal with scope, price and next steps before anything is built.",
    },
    {
      title: "Design and build",
      body: "Interface, interaction and code come together, in short feedback loops with you.",
    },
    {
      title: "Launch",
      body: "Domain, hosting, SEO and security basics, CMS handover or App Store submission.",
    },
    {
      title: "After launch",
      body: "Fixes, changes and further development. Code and accounts belong to you.",
    },
  ],
};
