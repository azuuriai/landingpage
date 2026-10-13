import NextLink from "next/link";
import { ArrowUpRight, CornerDownRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ICON_UP, PRIMARY_BUTTON, TEXT_LINK } from "@/app/_components/button-styles";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { ScaledFrame } from "@/app/_components/scaled-frame";
import type { FuerPage } from "@/app/fuer-data";
import { CONTACT_EMAIL } from "@/app/site";
import { Band, PlanCard } from "../../studios/studios-content";
import { SectionHeading } from "../../work/case-study-blocks";
import { BrowserFrame } from "../../work/project-media";

// The personal preview page for one studio: the draft first and large,
// then what the draft takes from the studio, a second look (week and
// booking), the two models in CHF, the way there and one button.
// Built from the /studios blocks so it reads as the same site.
export function FuerContent({ page }: { page: FuerPage }) {
  const draftPath = `/fuer/${page.slug}/entwurf`;
  const mailHref = page.mailSubject ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(page.mailSubject)}` : undefined;

  return (
    <>
      <section className="mx-auto w-full max-w-[1180px] px-6 pb-14 pt-8 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        <div className="rise max-w-[760px]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">{page.eyebrow}</p>
          <h1 className="mt-5 text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[54px] lg:text-[64px]">
            {page.title}
          </h1>
          <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-[#5f5f56] sm:text-[18px] sm:leading-8">
            {page.intro}
          </p>
        </div>

        {/* The draft itself, live: laptop with the phone leaning in front. */}
        <div className="rise mt-10 lg:mt-12" style={{ animationDelay: "0.1s" }}>
          <div className="relative pb-[8%] pr-[9%] sm:pr-[12%]">
            <BrowserFrame domain={page.domain}>
              <ScaledFrame
                src={draftPath}
                title={`Entwurf der Startseite für ${page.studio} am Laptop`}
                width={1280}
                height={800}
              />
            </BrowserFrame>
            <div className="absolute bottom-0 right-0 w-[24%] min-w-[96px] max-w-[250px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.26)]">
              <PhoneFrame>
                <ScaledFrame
                  src={draftPath}
                  title={`Entwurf der Startseite für ${page.studio} am Handy`}
                  width={402}
                  height={874}
                />
              </PhoneFrame>
            </div>
          </div>
          <NextLink
            href={draftPath}
            target="_blank"
            className={`${TEXT_LINK} mt-6 text-[15px] text-[#006f68]`}
          >
            Entwurf in voller Grösse öffnen
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          </NextLink>
        </div>
      </section>

      <Band tone="tinted">
        <SectionHeading title={page.insightsTitle} intro={page.insightsIntro} />
        <ul className="mt-8 grid gap-x-10 border-t border-[#d9d9d3] md:grid-cols-2 lg:grid-cols-3">
          {page.insights.map((item) => (
            <li key={item.title} className="border-b border-[#e1e1dc] py-5">
              {/* What the studio has, then what the draft does with it. */}
              <p className="flex items-start gap-2 text-[14px] leading-6 text-[#6c6c61]">
                <CornerDownRight size={15} aria-hidden="true" className="mt-1 shrink-0 text-[#00b8ad]" />
                {item.fact}
              </p>
              <h3 className="mt-1.5 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[44ch] text-[15px] leading-7 text-[#5f5f56]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Band>

      {page.showcase ? (
      <Band>
        <SectionHeading title={page.showcase.title} intro={page.showcase.intro} />
        <div className="mt-8 grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.36fr)] lg:gap-12">
          <figure className="min-w-0">
            <BrowserFrame domain={page.domain}>
              <ScaledFrame
                src={`${draftPath}${page.showcase.laptop.path}`}
                title={page.showcase.laptop.caption}
                width={1280}
                height={800}
              />
            </BrowserFrame>
            <figcaption className="mt-3 text-[14px] text-[#6c6c61]">{page.showcase.laptop.caption}</figcaption>
          </figure>
          <figure className="mx-auto w-full max-w-[260px] min-w-0">
            <div className="drop-shadow-[0_26px_32px_rgba(17,18,17,0.22)]">
              <PhoneFrame>
                <ScaledFrame
                  src={`${draftPath}${page.showcase.phone.path}`}
                  title={page.showcase.phone.caption}
                  width={402}
                  height={874}
                />
              </PhoneFrame>
            </div>
            <figcaption className="mt-3 text-[14px] text-[#6c6c61]">{page.showcase.phone.caption}</figcaption>
          </figure>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          <NextLink href={`${draftPath}#woche`} target="_blank" className={`${TEXT_LINK} text-[15px] text-[#006f68]`}>
            Wochenplan ausprobieren
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          </NextLink>
          <NextLink href={`${draftPath}/kurse/paartanz`} target="_blank" className={`${TEXT_LINK} text-[15px] text-[#006f68]`}>
            Anmeldung ausprobieren
            <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
          </NextLink>
        </div>
      </Band>
      ) : null}

      <Band tone="tinted">
        <SectionHeading title={page.booking.title} intro={page.booking.intro} />
        {page.booking.options ? (
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {page.booking.options.map((option, index) => (
            <li key={option.name} className="flex flex-col rounded-[12px] border border-[#181811]/10 bg-white/70 p-6">
              <span className="font-display text-[28px] font-semibold leading-none text-[#006f68]">{index + 1}</span>
              <h3 className="mt-4 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">{option.name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-7 text-[#5f5f56]">{option.text}</p>
              <p className="mt-4 border-t border-[#e6e6e1] pt-3 text-[14px] font-medium text-[#181811]">{option.note}</p>
            </li>
          ))}
        </ol>
        ) : null}
      </Band>

      <Band>
        <SectionHeading title={page.reference.title} intro={page.reference.text} />
        <Link href={page.reference.href} className={`${TEXT_LINK} mt-6 text-[15px] text-[#006f68]`}>
          {page.reference.linkLabel}
          <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
        </Link>
      </Band>

      {page.plans && page.plans.length > 0 ? (
      <Band tone="tinted">
        <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
          {page.plansTitle}
        </h2>
        <p className="mt-5 max-w-[60ch] text-[16px] font-medium leading-7 text-[#181811] sm:text-[18px] sm:leading-8">
          {page.plansQuestion}
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:gap-6">
          {page.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Band>
      ) : null}

      {page.steps && page.steps.length > 0 ? (
      <Band>
        <SectionHeading title={page.stepsTitle ?? ""} />
        <ol className="steps mt-8 lg:grid lg:grid-cols-4">
          {page.steps.map((step) => (
            <li key={step.title}>
              <h3 className="text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[40ch] text-[14px] leading-6 text-[#5f5f56]">{step.body}</p>
            </li>
          ))}
        </ol>
      </Band>
      ) : null}

      {/* The page's only button, if the page has one at all. */}
      <section className="border-t border-[#deded8]">
        <div className="mx-auto w-full max-w-[1180px] px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="max-w-[24ch] text-pretty font-display text-[28px] font-medium leading-[1.12] tracking-[-0.018em] text-[#181811] sm:text-[38px]">
            {page.closingTitle}
          </h2>
          <p className="mt-4 max-w-[60ch] text-[16px] leading-7 text-[#5f5f56]">{page.closingText}</p>
          {page.cta && mailHref ? (
            <a href={mailHref} className={`${PRIMARY_BUTTON} mt-7`}>
              {page.cta}
            </a>
          ) : null}
          <p className="mt-10 max-w-[72ch] border-t border-[#e1e1dc] pt-5 text-[14px] leading-6 text-[#6c6c61]">
            {page.sourceNote}
          </p>
        </div>
      </section>
    </>
  );
}
