import type {
  ContactFormCopy,
  ContactSectionCopy,
  HomeCopy,
  SiteCopy,
  UiCopy,
} from "../types";

export const site: SiteCopy = {
  title: "Lukas Kaffer · Web and iOS Developer · Vienna, Austria",
  description:
    "Lukas Kaffer is a web and iOS developer in Vienna, building websites, web apps and native iOS apps all the way to launch. Live on the web and on the App Store.",
  ogDescription:
    "Live proof: the Indeed Unique dance studio website with its own CMS, and Vienna Event Radar on the web and on the App Store.",
  ogImageAlt: "Lukas Kaffer · Web and iOS developer · Vienna, Austria",
  keywords: [
    "web developer Vienna",
    "iOS developer Vienna",
    "freelance web developer Austria",
    "iOS app developer",
    "SwiftUI developer",
    "Next.js developer",
    "website with CMS",
    "Sanity CMS",
    "MVP development",
    "native iOS app development",
    "AI-assisted development",
    "landing page design",
    "Lukas Kaffer",
  ],
  jobTitle: "Web and iOS developer",
  knowsAbout: [
    "Web development",
    "Native iOS apps",
    "SwiftUI",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Product design",
    "AI-assisted development",
  ],
  og: {
    headline: "Websites, web apps and native iOS apps, built all the way to launch.",
    location: "Vienna, Austria",
    stack: "Astro · Next.js · Sanity · SwiftUI",
  },
};

export const ui: UiCopy = {
  skipToContent: "Skip to content",
  logoLabel: "Lukas Kaffer – Home",
  headerNav: "Site navigation",
  homeNav: "Pages",
  contact: "Contact",
  sendIdea: "Tell me about your project",
  backHome: "Home",
  backShowcase: "Showcase",
  learnMore: "Case study",
  askAnotherQuestion: "Ask me directly",
  imprint: "Legal notice",
  privacy: "Privacy",
  copyright: "© 2026 Lukas Kaffer",
  copyrightHome: "© 2026 Lukas Kaffer, Vienna",
  updatedLabel: "Last updated:",
  showcaseLabel: "Showcase",
  caseStudyLink: "{name} – see the case study",
  siteTour: "{name}: a tour of the website",
  appRecording: "{name} – screen recording of the app",
  siteRecording: "{name} – screen recording of the website",
  phoneRecording: "{name} – screen recording on the iPhone",
  serviceIndexLabel: "Services",
  languageSwitch: "Language",
  languageNames: { de: "Deutsch", en: "English" },
  notFound: {
    title: "This page doesn’t exist.",
    text: "The link may be outdated or mistyped. The homepage leads to Services, Showcase and Contact.",
  },
};

export const home: HomeCopy = {
  descriptor: "Web and iOS developer · Vienna, Austria · Remote",
  headline: "From idea to product. Launch included.",
  byline: {
    name: "Lukas Kaffer",
    text: "You work with me directly, no agency in between.",
  },
};

export const contactSection: ContactSectionCopy = {
  title: "Send me the short version.",
  body: "You don’t need a finished brief yet. Two or three sentences are enough for me to tell how we’d best get started.",
};

export const contactForm: ContactFormCopy = {
  name: "Name",
  namePlaceholder: "Your name",
  email: "Email",
  emailPlaceholder: "name@example.com",
  message: "Your idea",
  messagePlaceholder:
    "In two or three sentences: what do you want to launch, who is it for, and where is it stuck right now?",
  submit: "Send",
  sending: "Sending…",
  note: "This form is sent via Web3Forms.",
  successTitle: "Got it, thank you!",
  successBody: "I have your message and will reply personally.",
  errorBody: "That didn’t go through. Feel free to email me directly:",
  fallbackPrefix: "Prefer email?",
  subject: "New inquiry via lukaskaffer.com",
  languageLabel: "Language",
  languageName: "English",
  studio: {
    message: "Your studio or classes",
    messageHint:
      "Helpful to know: your current website, your booking system (existing or planned), the occasion, and when the new site should be ready.",
    messagePlaceholder:
      "What is your studio or class offering called, and what should the new website do?",
    submit: "Send request",
    subject: "Studio inquiry via lukaskaffer.com",
    topicLine: "Topic: studio project (/en/studios)",
  },
  launch: {
    message: "Your app",
    messageHint:
      "Helpful to know: what the app is built with, which services it depends on, whether real users are on it yet, and when you want to be live.",
    messagePlaceholder: "What does your app do, and where does it stand right now?",
    submit: "Send request",
    subject: "Launch inquiry via lukaskaffer.com",
    topicLine: "Topic: Launch Check (/en/launch)",
  },
  assistant: {
    message: "Your assistant",
    messageHint:
      "Helpful to know: which calendar and inbox you use, what the assistant should report in the morning, and whether it should speak as well.",
    messagePlaceholder: "What should your assistant take care of for you?",
    submit: "Send request",
    subject: "Assistant inquiry via lukaskaffer.com",
    topicLine: "Topic: AI assistant (/en/assistant)",
  },
};
