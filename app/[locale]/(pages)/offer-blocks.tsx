import type { ReactNode } from "react";
import { ArrowUpRight, Check, CornerDownRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ICON_UP, PRIMARY_BUTTON, TEXT_LINK } from "@/app/_components/button-styles";
import { BackLink } from "@/app/_components/site-chrome";
import type { LaunchStep, OfferPageCopy, PriceCard as PriceCardData } from "@/app/content/types";
import { SectionHeading } from "./work/case-study-blocks";

// Building blocks shared by the offer pages (/studios, /launch, /assistent):
// the opening with words left and proof right, the everyday problems and
// their answers, priced cards without buttons, numbered steps, the proof
// band and the closing band. Each page has exactly two buttons: one in the
// opening, one in the closing band. Nothing here is fine print: a limit is
// a line in the card like any other.

type ContactHref = { pathname: "/contact"; query: { thema: string } };

// A CaseSection with tighter vertical rhythm, so the pages stay compact.
export function Band({
  children,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  tone?: "plain" | "tinted";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-6 border-t border-[#d9d9d3] ${tone === "tinted" ? "bg-[#fafafa]" : ""}`}
    >
      <div className="reveal-on-scroll mx-auto w-full max-w-[1180px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        {children}
      </div>
    </section>
  );
}

// Same composition as a case study opening: words left, proof right.
export function OfferHero({
  page,
  cta,
  contactHref,
  offersLink,
  backLabel,
  media,
}: {
  page: OfferPageCopy["page"];
  cta: string;
  contactHref: ContactHref;
  offersLink: string;
  backLabel: string;
  media: ReactNode;
}) {
  return (
    <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 pb-14 pt-8 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10 lg:pb-16 lg:pt-10">
      <div className="rise min-w-0">
        <BackLink href="/services" label={backLabel} />
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
          {page.eyebrow}
        </p>
        <h1 className="mt-5 text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[54px] lg:text-[58px]">
          {page.title}
        </h1>
        <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-[#5f5f56] sm:text-[17px] sm:leading-8">
          {page.description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={contactHref} className={PRIMARY_BUTTON}>
            {cta}
          </Link>
          <a href="#angebot" className={`${TEXT_LINK} text-[15px] text-[#006f68]`}>
            {offersLink}
          </a>
        </div>
      </div>
      <div className="rise min-w-0" style={{ animationDelay: "0.1s" }}>
        {media}
      </div>
    </section>
  );
}

// The everyday problem as a small line with a teal turn arrow, then the
// answer as title and one sentence. Three or four in a row on desktop.
export function FitList({ fit }: { fit: OfferPageCopy["fit"] }) {
  // Four items sit two by two on tablets and keep their row dividers
  // there; the dividers go only where every item is in one row.
  const four = fit.items.length === 4;
  const columns = four ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3";
  const row = four ? "lg:border-b-0 lg:pb-0" : "md:border-b-0 md:pb-0";
  return (
    <Band tone="tinted">
      <SectionHeading title={fit.title} intro={fit.intro} />
      <ul className={`mt-8 grid gap-x-10 border-t border-[#d9d9d3] ${columns}`}>
        {fit.items.map((item) => (
          <li key={item.title} className={`border-b border-[#e1e1dc] py-5 ${row}`}>
            <p className="flex items-center gap-2 text-[14px] leading-6 text-[#6c6c61]">
              <CornerDownRight size={15} aria-hidden="true" className="shrink-0 text-[#00b8ad]" />
              {item.problem}
            </p>
            <h3 className="mt-1.5 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[44ch] text-[15px] leading-7 text-[#5f5f56]">{item.text}</p>
          </li>
        ))}
      </ul>
    </Band>
  );
}

// A priced card: the small line is the step or stage, then name, price and
// what is included. No button; the page's buttons are in the opening and
// the closing band. `wide` lays the list out in columns for the ongoing
// offer that spans the row.
// `compact` keeps a long price such as "from €1,200" on one line when three
// cards share a row (two on tablets): smaller where the card is narrow, the
// full size from 1280 px on.
export function PriceCard({
  plan,
  wide = false,
  compact = false,
}: {
  plan: PriceCardData;
  wide?: boolean;
  compact?: boolean;
}) {
  const priceSize = compact
    ? "text-[40px] sm:text-[52px] md:text-[40px] xl:text-[52px]"
    : "text-[40px] sm:text-[52px]";
  return (
    <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-[12px] border border-[#181811]/10 bg-white/70 p-6 shadow-[0_34px_90px_-60px_rgba(17,18,17,0.45)] sm:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#006f68_0%,#00b8ad_100%)]"
      />
      <div className={wide ? "grid gap-x-12 gap-y-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" : ""}>
        <div className="min-w-0">
          <p className="text-[15px] font-semibold tracking-[-0.005em] text-[#006f68]">{plan.choice}</p>
          <h3 className="mt-4 font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#181811] sm:text-[26px]">
            {plan.name}
          </h3>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span
              className={`font-display font-semibold leading-none tracking-[-0.03em] text-[#181811] ${priceSize}`}
            >
              {plan.price}
            </span>
            <span className="text-[15px] text-[#6c6c61]">{plan.priceNote}</span>
          </p>
          {plan.priceExtra ? (
            <p className="mt-2 text-[14px] text-[#5f5f56]">{plan.priceExtra}</p>
          ) : null}
          <p className="mt-5 max-w-[46ch] text-[15px] italic leading-7 text-[#5f5f56]">
            {plan.tagline}
          </p>
        </div>
        <ul className={`border-t border-[#e6e6e1] ${wide ? "lg:mt-1 lg:border-t-0" : "mt-5"}`}>
          {plan.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b border-[#e6e6e1] py-2.5 text-[14px] leading-6 text-[#181811] last:border-b-0 sm:text-[15px]"
            >
              <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-[#00b8ad]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// The offers: the main cards side by side, the ongoing one full width below.
export function OfferCards({
  offer,
  plans,
  ongoing,
}: {
  offer: OfferPageCopy["offer"];
  plans: PriceCardData[];
  ongoing: PriceCardData;
}) {
  return (
    <Band tone="tinted" id="angebot">
      <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
        {offer.title}
      </h2>
      <p className="mt-5 max-w-[60ch] text-[16px] font-medium leading-7 text-[#181811] sm:text-[18px] sm:leading-8">
        {offer.question}
      </p>
      {/* Two columns on tablets: a third card takes the whole second row
          instead of standing alone in the first column. */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`min-w-0 ${index === 2 && plans.length === 3 ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <PriceCard plan={plan} compact />
          </div>
        ))}
      </div>
      <div className="mt-5 lg:mt-6">
        <PriceCard plan={ongoing} wide />
      </div>
    </Band>
  );
}

// Ring, number and line come from .steps in globals.css.
export function OfferSteps({ title, steps }: { title: string; steps: LaunchStep[] }) {
  return (
    <Band>
      <SectionHeading title={title} />
      <ol className="steps mt-8 lg:grid lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.title}>
            <h3 className="text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[40ch] text-[14px] leading-6 text-[#5f5f56]">{step.body}</p>
          </li>
        ))}
      </ol>
    </Band>
  );
}

// What backs the offer, with links to the case studies that show it. The
// optional trust line (confidentiality, AI tools) stands as a normal
// paragraph, not as fine print.
export function ProofBand({ proof, media }: { proof: OfferPageCopy["proof"]; media?: ReactNode }) {
  const words = (
    <div className="min-w-0">
      <SectionHeading title={proof.title} intro={proof.body} />
      {proof.trust ? (
        <p className="mt-5 max-w-[60ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
          {proof.trust}
        </p>
      ) : null}
      <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
        {proof.links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${TEXT_LINK} text-[15px] text-[#006f68]`}
          >
            {link.label}
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <Band tone="tinted">
      {media ? (
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {words}
          <div className="min-w-0">{media}</div>
        </div>
      ) : (
        words
      )}
    </Band>
  );
}

// Like the shared ContactBand, with the offer's own call to action.
export function OfferClosing({
  closing,
  cta,
  contactHref,
}: {
  closing: string;
  cta: string;
  contactHref: ContactHref;
}) {
  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-12">
        <h2 className="text-pretty font-display text-[25px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
          {closing}
        </h2>
        <Link href={contactHref} className={PRIMARY_BUTTON}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
