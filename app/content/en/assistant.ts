import { ASSISTANT_PROOF } from "@/app/offers-data";
import type { AssistantCopy } from "../types";

// English version of /assistant. Same rules as the German page; prices stay
// in euros. Every claim about Mission Control comes from its case study.
export const assistant: AssistantCopy = {
  page: {
    eyebrow: "Personal AI assistant",
    title: "An assistant that knows your day.",
    description:
      "Every morning a message with your appointments, important e-mails and open tasks. On the go you ask by text or voice message, and it answers. Everything runs on your own accounts, set up at a fixed price.",
    metaTitle: "Personal AI assistant · Telegram, calendar and e-mail at a fixed price",
    metaDescription:
      "A personal AI assistant on Telegram with Google Calendar, Gmail and a task list: morning briefing, questions, appointments after your confirmation, voice messages. Setup €890, €1,490 or €2,290, care €149 per month.",
    breadcrumb: "AI assistant",
  },
  cta: "Talk about your assistant",
  offersLink: "See the three stages",
  phoneAlt:
    "Telegram chat with an assistant: an update for today, a question as a voice message and the spoken answer with its text underneath",
  loopLabel: "Mission Control, my own organizing tool: zoom into the brain with all projects",
  fit: {
    title: "What the assistant takes off your plate.",
    intro:
      "Calendar, inbox and task list are three places. The assistant turns them into one message in the morning and an answer whenever you ask.",
    items: [
      {
        problem: "Piecing the morning together",
        title: "A briefing in the morning",
        text: "Today’s appointments, e-mails that need something from you and open tasks, as one message on Telegram.",
      },
      {
        problem: "What was that again?",
        title: "Ask and note",
        text: "“What’s on today?”, “Note this for me”, “Put that in the calendar”: it answers, takes notes and adds appointments once you confirm.",
      },
      {
        problem: "Typing on the go",
        title: "Speak instead of type",
        text: "A voice message in, a voice message back, with the text underneath.",
      },
    ],
  },
  offer: {
    title: "Three stages, one care plan.",
    question: "You decide how much the assistant should do. Each stage includes the one before.",
  },
  plans: [
    {
      id: "briefing",
      choice: "Stage 1",
      name: "Morning Briefing",
      price: "€890",
      priceNote: "one-time",
      tagline: "The daily morning message, nothing more. A good first step.",
      includes: [
        "Every morning a message on Telegram from Google Calendar, Gmail and your task list",
        "Time and content of the message the way you want them",
        "Set up on your accounts: your bot, your AI key, your Google access",
        "A short guide, and the code is yours",
      ],
    },
    {
      id: "assistant",
      choice: "Stage 2",
      name: "Assistant",
      price: "€1,490",
      priceNote: "one-time",
      tagline: "Plus a bot that answers, takes notes and adds appointments.",
      includes: [
        "Everything from stage 1",
        "Answers questions about appointments, e-mails and tasks",
        "Takes notes and checks tasks off",
        "Adds appointments, but only after your explicit yes; it says “added” only once the entry has been verified",
      ],
    },
    {
      id: "voice",
      choice: "Stage 3",
      name: "Assistant with voice",
      price: "€2,290",
      priceNote: "one-time",
      tagline: "Plus voice messages both ways and a second access.",
      includes: [
        "Everything from stage 2",
        "Understands voice messages and answers with a natural voice",
        "A second account or access for your team",
      ],
    },
  ],
  ongoing: {
    id: "care",
    choice: "If you want · ongoing",
    name: "Care Plan",
    price: "€149",
    priceNote: "per month",
    priceExtra: "cancel any month, to the end of the month",
    tagline: "The assistant keeps running, even when your tools change.",
    includes: [
      "I keep the assistant running and step in when something gets stuck",
      "Small adjustments when your calendar, inbox or wishes change",
      "One fixed contact",
    ],
  },
  terms: {
    title: "Good to know before we start.",
    items: [
      {
        title: "Runs on your accounts",
        text: "Bot, AI key and Google access belong to you. You can switch everything off at any time.",
      },
      {
        title: "You pay the AI usage directly",
        text: "You settle the AI provider’s usage with them directly. It is not included in the price.",
      },
      {
        title: "Appointments only after confirmation",
        text: "The assistant adds nothing you have not confirmed with an explicit yes.",
      },
      {
        title: "When customers’ e-mails are involved",
        text: "If the assistant reads business e-mail, we sign a data processing agreement first, as the GDPR requires.",
      },
    ],
  },
  stepsTitle: "How the assistant gets to you.",
  steps: [
    {
      title: "Conversation",
      body: "Which tools do you use, what should the assistant do, and what should it never do?",
    },
    {
      title: "Plan with a fixed price",
      body: "You get a short written plan: stage, scope, price and date.",
    },
    {
      title: "Setup on your accounts",
      body: "Bot, AI key and Google access are created in your accounts, step by step with you.",
    },
    {
      title: "Handover",
      body: "We test the assistant together. You get a short guide, and the code is yours.",
    },
  ],
  proof: {
    title: "I use my own every day.",
    body: "Mission Control is my personal organizing tool: I ask by voice and hear the answer, agents check tasks in the background, appointments and important e-mails are built in, and on the go the same assistant answers in a Telegram bot. Every morning the day’s appointments and most important points arrive, even when the Mac is off.",
    links: [{ label: "Case study Mission Control", path: ASSISTANT_PROOF.caseStudyPath }],
  },
  closing: "Should your day start with a message tomorrow?",
  service: {
    name: "Personal AI assistant setup",
    type: "AI assistants and automation",
  },
};
