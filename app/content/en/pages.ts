import { detailPageBase, PORTRAITS } from "@/app/detail-pages-data";
import { CONTACT_EMAIL } from "@/app/site";
import type { DetailPageData } from "../types";

export const detailPages: DetailPageData[] = [
  {
    ...detailPageBase.services,
    navLabel: "Services",
    eyebrow: "Services",
    title: "What I build for you.",
    description:
      "I help founders and small teams turn an idea into a product people can actually use: visible on the web, testable with real users and, where it belongs, native on the iPhone.",
    metaTitle: "Services · Websites, Web Apps and iOS Apps",
    metaDescription:
      "Websites your team edits itself, web apps with real product logic and native iOS apps, all from one person. From the first idea to launch.",
    // The three product forms stand in the hero instead (services.ts).
    chips: [],
    sections: [],
    closing: "Sounds like your project? Let’s get it started.",
  },
  {
    ...detailPageBase.work,
    navLabel: "Showcase",
    eyebrow: "Showcase",
    title: "What I build – live and in use.",
    description:
      "Websites, web apps and native iOS apps – thought through, designed and shipped. Every project here is in use, three of them open to the public.",
    metaTitle: "Showcase · Websites, Web Apps and iOS Apps",
    metaDescription:
      "Projects by Lukas Kaffer: the Indeed Unique dance studio website, Vienna Event Radar on the web and as a native iOS app, and an internal operations app.",
    chips: ["Websites", "Web apps", "iOS apps"],
    sections: [],
    closing: "Want to build something similar? Get in touch.",
  },
  {
    ...detailPageBase.about,
    navLabel: "About",
    eyebrow: "My path",
    title: "From the classroom to products.",
    description:
      "SmartCash, teaching and products of my own: three chapters that shape how I break down problems, explain them and turn them into working products.",
    metaTitle: "About Lukas Kaffer · Education, Community, Products",
    metaDescription:
      "From SmartCash outreach and support through teaching to web and iOS products: how Lukas Kaffer became a product builder.",
    chips: ["Vienna, Austria", "SmartCash 2017–2020", "Education", "Web + iOS"],
    image: { ...PORTRAITS.standing, alt: "Lukas Kaffer" },
    sections: [
      {
        label: "2017–2020",
        title: "Outreach and tech support in a decentralized community.",
        body: "From 2017 to 2020 I was part of the outreach and support team of SmartCash, a community-governed blockchain project.",
      },
      {
        label: "Outreach",
        title: "Representing a project beyond the internet.",
        body: "I represented SmartCash at events such as Crypto World Zug and AnarchaPortugal in Porto, where I also gave talks about the project.",
      },
      {
        label: "Education",
        title: "Listening, making sense of things and explaining them clearly.",
        body: "From teaching I bring the ability to recognize different levels of prior knowledge, structure complex material and make decisions easy to follow. In product work, that becomes clear scoping.",
      },
      {
        label: "Today",
        title: "A rough idea becomes a version people can actually use.",
        body: "Today I combine that background with product thinking, UX and AI-assisted development. Claude Code and ChatGPT make me faster; product logic, data flow, validation and delivery remain my responsibility.",
      },
    ],
    closing: "Sounds like a good fit? Get in touch.",
  },
  {
    ...detailPageBase.faq,
    navLabel: "FAQ",
    eyebrow: "Good to know",
    title: "Questions before a project starts.",
    description:
      "Short answers on cost, timeline, iOS, design, launch, working remotely and what happens when all you have is a rough idea.",
    metaTitle: "FAQ · Cost, Timeline, iOS Apps and Launch",
    metaDescription:
      "Answers on project cost, timeline, native iOS development, design, launch, remote collaboration and working with Lukas Kaffer.",
    chips: ["Fixed price", "You own the code", "You work with me directly"],
    sections: [],
    faq: [
      {
        question: "What does a project cost and how long does it take?",
        answer:
          "Both depend on scope. After a short intro call I narrow down the goal, the core workflow and a realistic first release. That becomes a clear proposal with scope, price and next steps.",
      },
      {
        question: "Do you build native iOS apps?",
        answer:
          "Yes. Native iOS apps in SwiftUI, from the idea to a real App Store release. If your product belongs on the iPhone, I build it natively rather than as a wrapped website.",
      },
      {
        question: "Do you handle the design as well?",
        answer:
          "Yes. Interface, interaction and code come together. You don’t necessarily need a separate design team if the scope fits the way I work.",
      },
      {
        question: "Can I edit the website myself afterward?",
        answer:
          "Yes, if you want to. I set up a CMS where you change text, images, posts and lists yourself while layout and design stay protected in code. Indeed Unique runs this way on Sanity’s free plan.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You’re not left on your own after go-live. Launch covers the SEO and security basics; after that I’m available for fixes, changes and further development. Code and accounts belong to you.",
      },
      {
        question: "Do you work with clients outside Austria?",
        answer:
          "Yes. I take on remote projects from anywhere, mostly Europe and North America, in English or German. Calls fit European business hours and US mornings; everything else happens in writing, in your tools or mine. If you prefer, we can run the project through Upwork.",
      },
      {
        question: "What if all I have is a rough idea?",
        answer:
          "That is often the best starting point. The first step then isn’t development but sharpening the idea: goal, audience, core feature and a sensible first scope.",
      },
    ],
    closing: "Didn’t find your question? Ask me directly.",
  },
  {
    ...detailPageBase.contact,
    navLabel: "Contact",
    eyebrow: "Let’s talk",
    title: "Tell me what you want to build.",
    description:
      "A rough idea is enough. Tell me what you want to create, who it’s for and where it stands right now. I reply personally.",
    metaTitle: "Contact · Send Your Project Idea to Lukas Kaffer",
    metaDescription: `Write to ${CONTACT_EMAIL} if you want to build a website, an MVP or a native iOS app.`,
    chips: ["Free intro call", CONTACT_EMAIL, "Vienna, Austria", "Remote, worldwide"],
    image: { ...PORTRAITS.seated, alt: "Lukas Kaffer, seated" },
    sections: [
      {
        label: "Good start",
        title: "Three sentences are enough for a first assessment.",
        body: "What do you want to launch? Who is it for? What’s still missing before it can go live? From that I can usually tell whether and how I can help.",
      },
      {
        label: "Process",
        title: "First a check, then a clear scope.",
        body: "If it’s a fit, we have a short call. After that you get a clear proposal with scope, price and the next step.",
      },
      {
        label: "Remote",
        title: "Based in Vienna, working across time zones.",
        body: "I take on remote projects from anywhere, mostly Europe and North America, in English or German. Calls fit European afternoons and US mornings; everything else happens in writing, in your tools or mine.",
      },
    ],
  },
];
