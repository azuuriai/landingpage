import { detailPageBase, PORTRAITS } from "@/app/detail-pages-data";
import { CONTACT_EMAIL, UPWORK_PROFILE_URL } from "@/app/site";
import type { DetailPageData } from "../types";

export const detailPages: DetailPageData[] = [
  {
    ...detailPageBase.services,
    navLabel: "Services",
    eyebrow: "Services",
    title: "What I build for you.",
    description:
      "I help founders and small teams turn an idea into a product people can actually use: on the web, as a real web app, and as a native iOS app when the product belongs on the iPhone. Often both, on one backend.",
    metaTitle: "Services · Web and iOS Development in Vienna",
    metaDescription:
      "Websites your team edits itself, web apps with real product logic and native iOS apps, all from one person. From the first idea to launch.",
    // The three product forms stand in the hero instead (services.ts).
    chips: [],
    sections: [],
    closing: "Sounds like your project?",
  },
  {
    ...detailPageBase.work,
    navLabel: "Showcase",
    eyebrow: "Showcase",
    title: "Built, shipped and in use.",
    description:
      "Websites, web apps and native iOS apps: thought through, designed and shipped. Every project here is in use, three of them open to the public. Two were built for a client, a dance studio’s website and the CMS behind it; the others are products and tools I build and run myself, which is where the operations and iOS depth comes from.",
    metaTitle: "Showcase · Web and iOS Projects from Vienna",
    metaDescription:
      "Projects by Lukas Kaffer: the Indeed Unique dance studio website, Vienna Event Radar on the web and as a native iOS app, and an internal operations app.",
    chips: ["Websites", "Web apps", "iOS apps"],
    sections: [],
    closing: "Want to build something similar?",
  },
  {
    ...detailPageBase.about,
    navLabel: "About",
    eyebrow: "Background",
    title: "From the classroom to products.",
    description:
      "Products of my own, teaching and community work: three chapters that shape how I break down problems, explain them and turn them into working products.",
    metaTitle: "About Lukas Kaffer · Products, Teaching, Community",
    metaDescription:
      "Products of his own, teaching and community work: how Lukas Kaffer became a web and iOS product builder in Vienna.",
    chips: ["Vienna, Austria", "Web + iOS", "Product design", "Teaching"],
    image: { ...PORTRAITS.standing, alt: "Lukas Kaffer" },
    sections: [
      {
        label: "Today",
        title: "A rough idea becomes a version people can actually use.",
        body: "Today I combine product thinking, UX and AI-assisted development with a background in teaching and community work. Claude Code and ChatGPT make me faster, so a smaller budget goes further; product logic, data flow, validation and delivery remain my responsibility, and nothing ships that I haven’t read and tested.",
      },
      {
        label: "Teaching",
        title: "Listening, making sense of things and explaining them clearly.",
        body: "Teaching taught me to read where someone is starting from, structure complex material and make decisions easy to follow. In product work, that becomes clear scoping.",
      },
      {
        label: "2017–2020",
        title: "Outreach and tech support in a decentralized community.",
        body: "From 2017 to 2020 I was part of the outreach and support team of SmartCash, a community-governed blockchain project, and represented it in person at conferences in Zug and Porto, including talks about the project.",
      },
    ],
    closing: "Sounds like a good fit?",
  },
  {
    ...detailPageBase.faq,
    navLabel: "FAQ",
    eyebrow: "Good to know",
    title: "Questions before a project starts.",
    description:
      "Short answers on cost, timeline, iOS and Android, design, launch, AI tools, working remotely and what happens when all you have is a rough idea.",
    metaTitle: "FAQ · Cost, Timeline, iOS Apps and Launch",
    metaDescription:
      "Answers on project cost, timeline, native iOS development, Android, design, launch, AI tools, remote collaboration and working with Lukas Kaffer.",
    chips: ["Fixed price", "You own the code", "You work with me directly"],
    sections: [],
    faq: [
      {
        question: "What does a project cost and how long does it take?",
        answer:
          "Both depend on scope. After a short intro call I narrow down the goal, the core workflow and a realistic first release, and you get a clear proposal with scope, price and next steps. Most projects are quoted at a fixed price for a defined scope, with anything beyond it quoted separately; hourly work is possible too, directly or through Upwork. The steps are the same every time: sharpen the idea, scope and price, design and build, launch, and support after launch. Contract and invoice come from an Austrian sole proprietorship, in EUR. NDA on request.",
      },
      {
        question: "Do you build native iOS apps?",
        answer:
          "Yes. Native iOS apps in SwiftUI, from the idea to a real App Store release. If your product belongs on the iPhone, I build it natively rather than as a wrapped website.",
      },
      {
        question: "Do you also build Android apps?",
        answer:
          "Not as a first platform. I build natively for iOS in SwiftUI; Android users get the web app, which runs in every browser. Because web and app share one backend, an Android app can be added later without rebuilding the product. If Android has to come first, I’m probably not the right fit, and I’ll tell you so in the first call.",
      },
      {
        question: "Do you handle the design as well?",
        answer:
          "Yes. Interface, interaction and code come together. For projects of this size you usually don’t need a separate designer.",
      },
      {
        question: "Can I edit the website myself afterward?",
        answer:
          "Yes, if you want to. I set up a CMS where you change text, images, posts and lists yourself while layout and design stay protected in code. Indeed Unique runs this way on Sanity’s free plan.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You’re not on your own after launch. Launch covers the SEO and security basics; after that I’m available for fixes, changes and further development. Code and accounts belong to you.",
      },
      {
        question: "Do you work with clients outside Austria?",
        answer:
          "Yes. I work remotely, in English or German, and location isn’t a constraint: calls fit European afternoons and US mornings (CET/CEST), everything else happens in writing, in your tools or mine. If you prefer, we can run the project through Upwork.",
        link: { label: "My Upwork profile", href: UPWORK_PROFILE_URL },
      },
      {
        question: "Do you use AI tools?",
        answer:
          "Yes, openly. Claude Code and ChatGPT make me faster, so a smaller budget goes further. Product logic, data flow, validation and delivery remain my responsibility, and nothing ships that I haven’t read and tested.",
      },
      {
        question: "What if all I have is a rough idea?",
        answer:
          "That is often the best starting point. The first step then isn’t development but sharpening the idea: goal, audience, core feature and a sensible first scope.",
      },
    ],
    closing: "Didn’t find your question?",
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
        label: "Start here",
        title: "Three sentences are enough for a first read.",
        body: "What do you want to launch? Who is it for? What’s still missing before it can go live? From that I can usually tell whether and how I can help.",
      },
      {
        label: "Process",
        title: "A quick check first, then a clear scope.",
        body: "If it’s a fit, we have a short call. After that you get a clear proposal with scope, price and the next step.",
      },
      {
        label: "Remote",
        title: "Based in Vienna, working across time zones.",
        body: "Calls fit European afternoons and US mornings (CET/CEST); everything else happens in writing, in your tools or mine, in English or German.",
      },
    ],
  },
];
