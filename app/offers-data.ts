import type { AppPathname } from "@/i18n/routing";
import { RECORDINGS, type Recording } from "./media";
import { caseStudyBase } from "./projects-data";

// The two fixed-price offer pages next to /studios: /launch (founders with
// half-finished or AI-built apps) and /assistent (a personal AI assistant on
// the customer's own accounts). The words live in
// app/content/<locale>/launch-offer.ts and assistant.ts; this is the
// structure both languages share. Prices were decided by Lukas on
// 08.10.2026 (assistant) and 11.10.2026 (launch ladder), see Business Studio
// OS/12-umsetzungsplan-akquise.md, sections 4 and 9.

export const LAUNCH_PATH = "/launch" satisfies AppPathname;
export const ASSISTANT_PATH = "/assistent" satisfies AppPathname;
export const OFFERS_LAST_MODIFIED = new Date("2026-10-11T00:00:00.000Z");

// The contact form reads ?thema=… and asks questions that fit the offer.
export const LAUNCH_CONTACT_HREF = { pathname: "/contact", query: { thema: "launch" } } as const;
export const ASSISTANT_CONTACT_HREF = {
  pathname: "/contact",
  query: { thema: "assistent" },
} as const;

// Prices in numbers for the schema.org offers. The cards carry the same
// prices as words (content: launchOffer.plans / assistant.plans), matched by
// id. A card without an entry here gets no Offer.
export type OfferPrice =
  | { price: number; perMonth?: boolean }
  | { minPrice: number; perMonth?: boolean }
  // A start fee plus a monthly rate over a fixed number of months.
  | { startFee: number; perMonthPrice: number; months: number };

export const LAUNCH_PRICES: Record<string, OfferPrice> = {
  check: { price: 290 },
  sprint: { minPrice: 1200 },
  "app-store": { price: 450 },
  partner: { price: 590, perMonth: true },
};

export const ASSISTANT_PRICES: Record<string, OfferPrice> = {
  briefing: { price: 890 },
  assistant: { price: 1490 },
  voice: { price: 2290 },
  care: { price: 149, perMonth: true },
};

export const STUDIO_PRICES: Record<string, OfferPrice> = {
  individuell: { price: 2900 },
  // "149 € im Monat · 12 Monate · plus 1.490 € zum Start", as on the card.
  aktuell: { startFee: 1490, perMonthPrice: 149, months: 12 },
};

// The proof on /launch: Lukas' own platform and its iOS app, both live.
export const LAUNCH_PROOF = {
  webCaseStudyPath: caseStudyBase["vienna-event-radar"].path,
  iosCaseStudyPath: caseStudyBase["wien-event-radar-ios"].path,
};

// The proof on /assistent: Mission Control in its demo mode. The loop is the
// silent endless zoom; the phone still is the showreel's Telegram scene.
export const ASSISTANT_PROOF: {
  caseStudyPath: AppPathname;
  loop: Recording;
  phoneStill: string;
} = {
  caseStudyPath: caseStudyBase["mission-control"].path,
  loop: RECORDINGS.missionControlLoop,
  phoneStill: "/case-studies/mission-control/telegram-chat.jpg",
};

// schema.org Offer for one card. Monthly prices become a unit price per
// month; "from" prices carry a minimum instead of a fixed price.
export function offerJsonLd(
  id: string,
  name: string,
  price: OfferPrice,
  url: string,
) {
  const base = {
    "@type": "Offer",
    "@id": `${url}#offer-${id}`,
    name,
    url,
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  };
  if ("startFee" in price) {
    return {
      ...base,
      priceSpecification: {
        "@type": "CompoundPriceSpecification",
        priceCurrency: "EUR",
        priceComponent: [
          { "@type": "UnitPriceSpecification", price: price.startFee, priceCurrency: "EUR" },
          {
            "@type": "UnitPriceSpecification",
            price: price.perMonthPrice,
            priceCurrency: "EUR",
            unitCode: "MON",
            billingDuration: price.months,
          },
        ],
      },
    };
  }
  if ("minPrice" in price) {
    return {
      ...base,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: price.minPrice,
        priceCurrency: "EUR",
      },
    };
  }
  if (price.perMonth) {
    return {
      ...base,
      price: price.price,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: price.price,
        priceCurrency: "EUR",
        unitCode: "MON",
      },
    };
  }
  return { ...base, price: price.price };
}

export function offersJsonLd(
  plans: { id: string; name: string }[],
  prices: Record<string, OfferPrice>,
  url: string,
) {
  return plans.flatMap((plan) => {
    const price = prices[plan.id];
    return price ? [offerJsonLd(plan.id, plan.name, price, url)] : [];
  });
}
