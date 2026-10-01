import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, CornerDownRight } from "lucide-react";
import {
  ICON_UP,
  PRIMARY_BUTTON,
  TEXT_LINK,
} from "@/app/_components/button-styles";
import { BackLink } from "@/app/_components/site-chrome";
import { RECORDINGS } from "@/app/media";
import { projects } from "@/app/projects-data";
import {
  STUDIO_CONTACT_HREF,
  STUDIO_CTA,
  studioExamples,
  studioFit,
  studioOffer,
  studioPlans,
  studioSteps,
  studiosPage,
  type StudioPlan,
} from "@/app/studios-data";
import { SectionHeading, VideoFeature } from "../work/case-study-blocks";
import { ProjectMedia } from "../work/project-media";

// Short on purpose: what the website does, how it can look, the two ways
// to get one, the way there and one next step. Built from the site's own
// blocks (case study opening, section heading, video tiles, steps).
export function StudiosContent() {
  return (
    <>
      <StudiosHero />
      <Fit />
      <Examples />
      <Offer />
      <Steps />
      <ClosingBand />
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
function StudiosHero() {
  return (
    <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 pb-14 pt-8 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10 lg:pb-16 lg:pt-10">
      <div className="rise min-w-0">
        <BackLink href="/services" label="Leistungen" />
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
          {studiosPage.eyebrow}
        </p>
        <h1 className="mt-5 text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[54px] lg:text-[58px]">
          {studiosPage.title}
        </h1>
        <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-[#5f5f56] sm:text-[17px] sm:leading-8">
          {studiosPage.description}
        </p>
        {/* One of the page's two buttons; the models are a quiet text link. */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link href={STUDIO_CONTACT_HREF} className={PRIMARY_BUTTON}>
            {STUDIO_CTA}
          </Link>
          <a href="#angebot" className={`${TEXT_LINK} text-[15px] text-[#006f68]`}>
            Modelle ansehen
          </a>
        </div>
      </div>
      <div className="rise min-w-0" style={{ animationDelay: "0.1s" }}>
        <ProjectMedia project={projects["indeed-unique"]} priority />
      </div>
    </section>
  );
}

// "Kennst du das?" and the answer in one row: each everyday problem as a
// small line above what the website does about it.
function Fit() {
  return (
    <Band tone="tinted">
      <SectionHeading title={studioFit.title} intro={studioFit.intro} />
      <ul className="mt-8 grid gap-x-10 border-t border-[#d9d9d3] md:grid-cols-3">
        {studioFit.items.map((item) => (
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
function Examples() {
  return (
    <Band>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:gap-12">
        <div className="min-w-0">
          <SectionHeading title={studioExamples.title} intro={studioExamples.intro} />
          <Link
            href={studioExamples.caseStudyPath}
            className={`${TEXT_LINK} mt-6 text-[14px] text-[#006f68]`}
          >
            Case Study ansehen
            <ArrowUpRight size={14} aria-hidden="true" className={ICON_UP} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6">
          <VideoFeature
            recording={RECORDINGS.indeedUniqueBooking}
            label="Beispiel einer Studio-Website: Stundenplan, Semesterblöcke und Gutscheinkauf aus Eversports im Design der Website"
            title="Buchung aus Eversports"
            text="Stundenplan und Gutscheine aus dem Buchungssystem, im Design der Website."
          />
          <VideoFeature
            recording={RECORDINGS.indeedUniqueNews}
            label="Beispiel einer Studio-Website: Beiträge blättern im Tablet, danach fährt das Regal mit allen Beiträgen nach rechts"
            title="Neuigkeiten auf der Startseite"
            text="Aktuelles aus dem Studio erscheint im Schaukasten der Startseite."
          />
        </div>
      </div>
    </Band>
  );
}

// Two models side by side (stacked on phones), equal in weight: the head
// line of each card is the actual choice. No buttons and no fine print;
// the page's only two buttons are in the opening and the closing band.
function Offer() {
  return (
    <Band tone="tinted" id="angebot">
      <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
        {studioOffer.title}
      </h2>
      <p className="mt-5 max-w-[60ch] text-[16px] font-medium leading-7 text-[#181811] sm:text-[18px] sm:leading-8">
        {studioOffer.question}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
        {studioPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

    </Band>
  );
}

export function PlanCard({ plan, vatNote = true }: { plan: StudioPlan; vatNote?: boolean }) {
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
      {/* TODO(Lukas): USt-Hinweis nach Gewerbeanmeldung */}
      <p className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <span className="font-display text-[40px] font-semibold leading-none tracking-[-0.03em] text-[#181811] sm:text-[52px]">
          {plan.price}
        </span>
        <span className="text-[15px] text-[#6c6c61]">{plan.priceNote}</span>
      </p>
      {plan.priceExtra ? (
        <p className="mt-2 text-[14px] text-[#5f5f56]">{plan.priceExtra}</p>
      ) : null}
      {/* Local draft only: visible until the VAT status is settled. */}
      {vatNote ? (
        <p className="mt-2 text-[12px] uppercase tracking-[0.12em] text-[#8a8a80]">USt-Hinweis folgt</p>
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

function Steps() {
  return (
    <Band>
      <SectionHeading title="So läuft ein Studio-Projekt." />
      {/* Ring, number and line come from .steps in globals.css. */}
      <ol className="steps mt-8 lg:grid lg:grid-cols-4">
        {studioSteps.map((step) => (
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
function ClosingBand() {
  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-12">
        <h2 className="text-pretty font-display text-[25px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
          Neue Saison, neue Website? Erzähl mir von deinem Studio.
        </h2>
        <Link href={STUDIO_CONTACT_HREF} className={PRIMARY_BUTTON}>
          {STUDIO_CTA}
        </Link>
      </div>
    </section>
  );
}
