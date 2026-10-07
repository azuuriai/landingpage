import type {
  ContactFormCopy,
  ContactSectionCopy,
  HomeCopy,
  SiteCopy,
  UiCopy,
} from "../types";

export const site: SiteCopy = {
  title: "Lukas Kaffer · Websites, Web Apps and iOS Apps",
  description:
    "Lukas Kaffer designs and builds websites, web products and native iOS apps from idea to launch. Live proof: the Indeed Unique dance studio website with Sanity CMS and Eversports, and Vienna Event Radar on the web and in the App Store.",
  ogDescription:
    "Live proof: the Indeed Unique dance studio website with its own CMS, and Vienna Event Radar on the web and in the App Store.",
  ogImageAlt: "Lukas Kaffer · Websites, web products and native iOS apps",
  keywords: [
    "web developer Vienna",
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
  jobTitle: "Web designer and developer",
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
    headline: "Websites, web products and native iOS apps, built all the way to launch.",
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
  sendIdea: "Share your idea",
  backHome: "Home",
  backShowcase: "Showcase",
  learnMore: "Learn more",
  askAnotherQuestion: "Ask a different question",
  imprint: "Imprint",
  privacy: "Privacy",
  copyright: "© 2026 Lukas Kaffer",
  copyrightHome: "© 2026 Lukas Kaffer, Vienna",
  updatedLabel: "Last updated:",
  showcaseLabel: "Showcase",
  caseStudyLink: "{name} – view the case study",
  siteTour: "{name}: a tour of the website",
  appRecording: "{name} – recording of the app",
  siteRecording: "{name} – recording of the website",
  phoneRecording: "{name} – recording on the iPhone",
  serviceIndexLabel: "Services",
  languageSwitch: "Language",
  languageNames: { de: "Deutsch", en: "English" },
  notFound: {
    title: "This page doesn't exist.",
    text: "The link may be outdated or mistyped. The homepage leads to services, showcase and contact.",
  },
};

export const home: HomeCopy = {
  descriptor: "Websites, web apps and iOS apps · Vienna, Austria",
  headline: "From idea to product. Launch included.",
};

export const contactSection: ContactSectionCopy = {
  eyebrow: "Straight to my inbox",
  title: "Send me the short version.",
  body: "You don't need a finished brief. Two or three sentences are enough for me to tell how we should start.",
};

export const contactForm: ContactFormCopy = {
  name: "Name",
  namePlaceholder: "Your name",
  email: "Email",
  emailPlaceholder: "name@example.com",
  message: "Your idea",
  messagePlaceholder:
    "In two or three sentences: what do you want to launch, who is it for, and where is it stuck right now?",
  submit: "Share your idea",
  sending: "Sending …",
  note: "The form is delivered through Web3Forms.",
  successTitle: "Received – thank you!",
  successBody: "I have your message and will reply personally.",
  errorBody: "That didn't go through. Feel free to email me directly:",
  fallbackPrefix: "Prefer email?",
  subject: "New inquiry via lukaskaffer.com",
  languageName: "English",
};
