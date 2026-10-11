import { LAUNCH_PROOF } from "@/app/offers-data";
import type { LaunchOfferCopy } from "../types";

// English version of /launch. Same rules as the German page; prices stay in
// euros. The offer names are the same in both languages, except that
// "Baubegleitung" is "Build Partner" here.
export const launchOffer: LaunchOfferCopy = {
  page: {
    eyebrow: "For founders with almost-finished apps",
    title: "Your app is almost done. I get it live, safely.",
    description:
      "You built something real, maybe with Lovable, Bolt, Cursor or Claude Code. It works on your screen. Before real users and real payments go through it, I look under the hood: first a fixed-price check, then, if you want, the fixes, the App Store launch or ongoing support while you keep building.",
    metaTitle: "Launch Check, Launch Sprint and App Store launch at fixed prices",
    metaDescription:
      "Fixed prices for founders with almost-finished or AI-built apps: Launch Check €290, Launch Sprint from €1,200, App Store launch €450, Build Partner €590 per month. Report within two working days, read-only access.",
    breadcrumb: "Launch at fixed prices",
  },
  cta: "Request a Launch Check",
  offersLink: "See the offers",
  fit: {
    title: "Where AI-built apps break most often.",
    intro:
      "I build with AI tools myself and have taken my own products into production and onto the App Store. The places where things go wrong are almost always the same.",
    items: [
      {
        problem: "Everyone sees everything",
        title: "Database rules",
        text: "Whether users can only read and change their own data is decided by rules in the database. They are often left open.",
      },
      {
        problem: "Keys in the browser",
        title: "Credentials and keys",
        text: "Keys with full rights easily end up in the browser code or in the code history. Anyone can read them there.",
      },
      {
        problem: "Paid, or just pretending?",
        title: "Payments and sign-in",
        text: "The payment provider has to confirm the upgrade, not the browser. Sign-up, password reset and e-mails have to work with your real domain.",
      },
      {
        problem: "Rejected by Apple",
        title: "App Review",
        text: "Signing, privacy details, account deletion, age rating: Apple checks closely, and the requirements keep changing.",
      },
    ],
  },
  offer: {
    title: "Four offers, depending on where you stand.",
    question: "Start with the check. Everything else builds on it, and you decide item by item.",
  },
  plans: [
    {
      id: "check",
      choice: "Step 1 · Review",
      name: "Launch Check",
      price: "€290",
      priceNote: "fixed price",
      tagline:
        "An experienced second pair of eyes before you go live. Not a penetration test and not a security certificate.",
      includes: [
        "I check sign-in, database rules, keys, payments and the way to production; for iOS apps also signing and the points Apple rejects most often",
        "Read-only access: I see code and settings, no passwords and none of your users’ data",
        "Within two working days a report in plain language: what is critical, what can wait, what is fine",
        "A fixed price for each fix, so you decide item by item",
        "A 20-minute call to go through the report",
        "If you book the Launch Sprint within 14 days, the €290 is deducted",
      ],
    },
    {
      id: "sprint",
      choice: "Step 2 · Fixes",
      name: "Launch Sprint",
      price: "from €1,200",
      priceNote: "fixed price, agreed before I start",
      tagline:
        "After the check you know what is missing. In the sprint I fix it and get the app live cleanly, on your accounts.",
      includes: [
        "Lock down the database so users only see their own data",
        "Make sign-in, password reset and e-mail delivery work reliably",
        "Connect payments properly, for example with Stripe, confirmed by the provider",
        "Move keys out of the browser code",
        "Deploy on your accounts, with your domain, error tracking and backups",
        "A short update every working day and a handover at the end, so you can keep building yourself",
        "Five to ten working days",
      ],
    },
    {
      id: "app-store",
      choice: "Step 2 · for iOS apps",
      name: "App Store launch",
      price: "€450",
      priceNote: "fixed price",
      tagline:
        "Your app runs on your iPhone. Getting it onto everyone else’s is a separate job.",
      includes: [
        "Check your build against Apple’s current requirements",
        "Set up signing and TestFlight in your developer account",
        "Prepare the store page: texts, screenshots, privacy answers, age rating",
        "Submit and see it through one round of App Review",
        "Code fixes requested by App Review up to two hours included, beyond that quoted first",
        "The app appears in your account. Apple requires that, and it is better for you",
        "Three to seven working days, plus Apple’s waiting time",
      ],
    },
  ],
  ongoing: {
    id: "partner",
    choice: "Afterwards · following a check or sprint",
    name: "Build Partner",
    price: "€590",
    priceNote: "per month",
    priceExtra: "cancel any month, to the end of the month",
    tagline:
      "You keep building with AI tools. I tell you early when something will break later.",
    includes: [
      "One 45-minute call per week: your questions, your screen, your next step",
      "I read every code change within one working day and flag problems",
      "Up to two hours of help per month included, beyond that €75 per hour",
    ],
  },
  stepsTitle: "How the Launch Check runs.",
  steps: [
    {
      title: "Intake",
      body: "Seven short questions by e-mail: what the app does, what it was built with, which services it depends on, whether real users are on it yet, and where it is stuck.",
    },
    {
      title: "Read-only access",
      body: "You invite me to your code with read access and give me a read-only role in Supabase or Firebase. No passwords over chat, none of your users’ data.",
    },
    {
      title: "Report within two working days",
      body: "Every item gets a status from critical to fine, plus a fixed price per fix and a list of what is already good.",
    },
    {
      title: "A 20-minute call",
      body: "We go through the verdict, the five things that matter most and the plan. If you want, you get the offer for the sprint the same day.",
    },
  ],
  proof: {
    title: "I have been in these places myself.",
    body: "Vienna Event Radar is my own product: a platform with accounts, reviewed content, a newsletter, scheduled jobs and an admin area, plus a native iOS app on the App Store. I built both, took them live and run them. With the app I have been through App Review several times.",
    trust:
      "Code, data and findings stay between us. I work with AI tools; their use for training is switched off, and if you would rather I didn’t use them, say so beforehand.",
    links: [
      { label: "Case study Vienna Event Radar", path: LAUNCH_PROOF.webCaseStudyPath },
      { label: "Case study Wien Event Radar for iOS", path: LAUNCH_PROOF.iosCaseStudyPath },
    ],
  },
  closing: "Almost done? Then this is the moment for the check.",
  service: {
    name: "Launch Check, Launch Sprint, App Store launch and Build Partner",
    type: "Review and completion of web and iOS apps",
  },
};
