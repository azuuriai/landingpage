import type { ReactNode } from "react";
import { ArrowUpRight, Check, CornerDownRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ICON_UP, PRIMARY_BUTTON, TEXT_LINK } from "@/app/_components/button-styles";
import { BackLink } from "@/app/_components/site-chrome";
import type { ProjectData, StudioPlan, StudiosCopy } from "@/app/content/types";
import { STUDIO_CONTACT_HREF, STUDIO_EXAMPLES } from "@/app/studios-data";
import { SectionHeading, VideoFeature } from "../work/case-study-blocks";
import { ProjectMedia } from "../work/project-media";

// Short on purpose: what the website does, how it can look, the two ways
// to get one, the way there and one next step. Built from the site's own
// blocks (case study opening, section heading, video tiles, steps).
export function StudiosContent({
  copy,
  backLabel,
  project,
  phoneLabel,
}: {
  copy: StudiosCopy;
  // Label of the link back to the Leistungen page.
  backLabel: string;
  // The studio website the examples come from, for the opening.
  project: ProjectData;
  phoneLabel: string;
}) {
  return (
    <>
      <StudiosHero copy={copy} backLabel={backLabel} project={project} phoneLabel={phoneLabel} />
      <Fit copy={copy} />
      <Examples copy={copy} />
      <Offer copy={copy} />
      <Steps copy={copy} />
      <ClosingBand copy={copy} />
    </>
  );
}

// A CaseSection with tighter vertical rhythm, so the page stays compact.
// Also used by the personal preview pages under /fuer.
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

// Same composition as a case study opening: words left, a studio website
// on laptop and iPhone right.
function StudiosHero({
  copy,
  backLabel,
  project,
  phoneLabel,
}: {
  copy: StudiosCopy;
  backLabel: string;
  project: ProjectData;
  phoneLabel: string;
}) {
  return (
    <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 pb-14 pt-8 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10 lg:pb-16 lg:pt-10">
      <div className="rise min-w-0">
        <BackLink href="/services" label={backLabel} />
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
          {copy.page.eyebrow}
        </p>
        <h1 className="mt-5 text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[54px] lg:text-[58px]">
          {copy.page.title}
        </h1>
        <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-[#5f5f56] sm:text-[17px] sm:leading-8">
          {copy.page.description}
        </p>
        {/* One of the page's two buttons; the models are a quiet text link. */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={STUDIO_CONTACT_HREF} className={PRIMARY_BUTTON}>
            {copy.cta}
          </Link>
          <a href="#angebot" className={`${TEXT_LINK} text-[15px] text-[#006f68]`}>
            {copy.modelsLink}
          </a>
        </div>
      </div>
      <div className="rise min-w-0" style={{ animationDelay: "0.1s" }}>
        <ProjectMedia project={project} phoneLabel={phoneLabel} priority />
      </div>
    </section>
  );
}

// "Kennst du das?" and the answer in one row: each everyday problem as a
// small line above what the website does about it.
function Fit({ copy }: { copy: StudiosCopy }) {
  return (
    <Band tone="tinted">
      <SectionHeading title={copy.fit.title} intro={copy.fit.intro} />
      <ul className="mt-8 grid gap-x-10 border-t border-[#d9d9d3] md:grid-cols-3">
        {copy.fit.items.map((item) => (
          <li key={item.title} className="border-b border-[#e1e1dc] py-5 md:border-b-0 md:pb-0">
            {/* The everyday problem, then the answer: a small readable line
                (#6c6c61 on the tinted band, about 5:1) with a teal turn arrow
                leading down to the title. */}
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

// Examples, not a promise: the recordings show one possible result.
function Examples({ copy }: { copy: StudiosCopy }) {
  return (
    <Band>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:gap-12">
        <div className="min-w-0">
          <SectionHeading title={copy.examples.title} intro={copy.examples.intro} />
          <Link
            href={STUDIO_EXAMPLES.caseStudyPath}
            className={`${TEXT_LINK} mt-6 text-[14px] text-[#006f68]`}
          >
            {copy.examples.caseStudyLabel}
            <ArrowUpRight size={14} aria-hidden="true" className={ICON_UP} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6">
          {copy.examples.tiles.map((tile, index) => (
            <VideoFeature
              key={tile.title}
              recording={STUDIO_EXAMPLES.recordings[index]}
              label={tile.label}
              title={tile.title}
              text={tile.text}
            />
          ))}
        </div>
      </div>
    </Band>
  );
}

// Two models side by side (stacked on phones), equal in weight: the head
// line of each card is the actual choice. No buttons and no fine print;
// the page's only two buttons are in the opening and the closing band.
function Offer({ copy }: { copy: StudiosCopy }) {
  return (
    <Band tone="tinted" id="angebot">
      <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
        {copy.offer.title}
      </h2>
      <p className="mt-5 max-w-[60ch] text-[16px] font-medium leading-7 text-[#181811] sm:text-[18px] sm:leading-8">
        {copy.offer.question}
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
        {copy.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </Band>
  );
}

export function PlanCard({ plan }: { plan: StudioPlan }) {
  return (
    <article className="relative flex min-w-0 flex-col overflow-hidden rounded-[12px] border border-[#181811]/10 bg-white/70 p-6 shadow-[0_34px_90px_-60px_rgba(17,18,17,0.45)] sm:p-8">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#006f68_0%,#00b8ad_100%)]"
      />
      <p className="text-[15px] font-semibold tracking-[-0.005em] text-[#006f68]">{plan.choice}</p>
      <h3 className="mt-4 font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#181811] sm:text-[26px]">
        {plan.name}
      </h3>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="font-display text-[40px] font-semibold leading-none tracking-[-0.03em] text-[#181811] sm:text-[52px]">
          {plan.price}
        </span>
        <span className="text-[15px] text-[#6c6c61]">{plan.priceNote}</span>
      </p>
      {plan.priceExtra ? (
        <p className="mt-2 text-[14px] text-[#5f5f56]">{plan.priceExtra}</p>
      ) : null}
      <p className="mt-5 max-w-[46ch] text-[15px] italic leading-7 text-[#5f5f56]">{plan.tagline}</p>
      <ul className="mt-5 border-t border-[#e6e6e1]">
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
    </article>
  );
}

function Steps({ copy }: { copy: StudiosCopy }) {
  return (
    <Band>
      <SectionHeading title={copy.stepsTitle} />
      {/* Ring, number and line come from .steps in globals.css. */}
      <ol className="steps mt-8 lg:grid lg:grid-cols-4">
        {copy.steps.map((step) => (
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

// Like the shared ContactBand, with the studio call to action.
function ClosingBand({ copy }: { copy: StudiosCopy }) {
  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-12">
        <h2 className="text-pretty font-display text-[25px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
          {copy.closing}
        </h2>
        <Link href={STUDIO_CONTACT_HREF} className={PRIMARY_BUTTON}>
          {copy.cta}
        </Link>
      </div>
    </section>
  );
}
