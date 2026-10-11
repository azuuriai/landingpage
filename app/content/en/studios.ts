import type { StudiosCopy } from "../types";

// English version of /studios (Lukas, 11.10.2026: both languages). Same rules
// as the German page: plain words for studio owners, no trade terms, no fine
// print; the prices stay in euros. The product names stay as they are.
export const studios: StudiosCopy = {
  page: {
    eyebrow: "For studios and class providers",
    title: "Your studio. Your website. A clear path to booking.",
    description:
      "I design and build websites for studios and for everyone who offers classes, whether dance, yoga, fitness or music. Classes, timetable and prices are quick to find, and your booking system is built right in.",
    metaTitle: "Websites for studios and class providers",
    metaDescription:
      "Websites for studios and class providers, whether dance, yoga, Pilates, fitness, martial arts or music: individually designed, with your booking system such as Eversports built in. Update it yourself or have me do it.",
    breadcrumb: "Websites for studios",
  },
  cta: "Let’s talk about your studio",
  modelsLink: "See the two options",
  fit: {
    title: "A website that works for your studio.",
    intro:
      "Sound familiar? The website has seen better days, every change takes time, and the new season is just around the corner.",
    items: [
      {
        problem: "Classes hard to find",
        title: "Everything that matters at a glance",
        text: "Classes, timetable, prices, team and directions in a few clicks.",
      },
      {
        problem: "Awkward on the phone",
        title: "Made for the phone",
        text: "Someone looking for a class on the go finds it just as fast as on a laptop.",
      },
      {
        problem: "Unclear how to book",
        title: "Booking without detours",
        text: "Your booking system, such as Eversports, is built right in, whether you already use one or are introducing it now.",
      },
    ],
  },
  examples: {
    title: "This is what it can look like.",
    intro:
      "Two excerpts from a studio website I built. Examples, not a template: your website is made to fit your studio.",
    caseStudyLabel: "See the case study",
    tiles: [
      {
        label:
          "Example of a studio website: timetable, semester blocks and voucher purchase from Eversports in the website’s design",
        title: "Booking from Eversports",
        text: "Timetable and vouchers from the booking system, in the website’s design.",
      },
      {
        label:
          "Example of a studio website: posts turning in the tablet, then the shelf with all posts travels to the right",
        title: "News on the homepage",
        text: "What’s new at the studio appears in the homepage’s showcase.",
      },
    ],
  },
  offer: {
    title: "Two ways to your studio website.",
    question: "Do you want to make changes yourself, or should I take care of them?",
  },
  plans: [
    {
      id: "individuell",
      choice: "You update it yourself",
      name: "Studio Individuell",
      price: "€2,900",
      priceNote: "one-time",
      tagline: "Full freedom: your website is entirely in your hands.",
      includes: [
        "Designed individually for your studio and your brand",
        "Your own editing area: you change classes, team, pictures and news without any technical knowledge",
        "Course sign-up right on the website, with a confirmation email",
        "I show you, and your team if you like, in person how everything works",
        "You decide when something changes",
      ],
    },
    {
      id: "aktuell",
      choice: "I keep it up to date for you",
      name: "Studio Aktuell",
      price: "€149",
      priceNote: "per month",
      priceExtra: "12 months · plus €1,490 to start",
      tagline: "The carefree package: you look after your studio, I look after your website.",
      includes: [
        "Designed in the style of your studio",
        "Just tell me what changes: I enter classes, prices, team or holiday breaks for you",
        "Course sign-up right on the website, with a confirmation email",
        "I take care of all the technology in the background",
        "One fixed contact for everything to do with your website",
      ],
    },
  ],
  stepsTitle: "How a studio project runs.",
  steps: [
    {
      title: "First conversation",
      body: "We look at your current website, your booking system and why you want a new website, and find the model that fits.",
    },
    {
      title: "Concept",
      body: "What goes where, and how do people get to a class and to the booking fastest?",
    },
    {
      title: "Build with preview",
      body: "Your existing content moves with you. You see the interim versions before anything goes public.",
    },
    {
      title: "Going live",
      body: "After your final okay, the website goes live. With Studio Individuell, I walk you through the editing area beforehand, at your own pace.",
    },
  ],
  closing: "New season, new website? Tell me about your studio.",
  service: {
    name: "Websites for studios and class providers",
    type: "Web design and web development",
  },
};
