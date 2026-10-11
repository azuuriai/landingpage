import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ICON_UP, TEXT_LINK } from "@/app/_components/button-styles";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { FixedPricesCopy, LaunchCopy, Service } from "@/app/content/types";
import { BrowserFrame } from "../work/project-media";

// Body of the Leistungen page. Every product form is built the same way — words
// on the left, a real still on the right — and ends with the projects that
// show it working. Stills instead of recordings keep this page calmer than
// the homepage and the Showcase.
export function ServicesContent({
  services,
  launch,
  fixedPrices,
}: {
  services: Service[];
  launch: LaunchCopy;
  fixedPrices: FixedPricesCopy;
}) {
  return (
    <>
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
      <FixedPrices copy={fixedPrices} />
      <LaunchSteps launch={launch} />
    </>
  );
}

// The three offers with a price on the site, each card a link to its page
// (/studios, /launch, /assistent). Entry prices only; the pages carry the
// details. Prices in euros without a tax line, like the FAQ.
function FixedPrices({ copy }: { copy: FixedPricesCopy }) {
  return (
    <section id="festpreise" className="scroll-mt-6 border-t border-[#deded8] bg-[#fafafa]">
      <div className="reveal-on-scroll mx-auto w-full max-w-[1180px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[40px]">
          {copy.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
          {copy.intro}
        </p>
        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
          {copy.cards.map((card) => (
            <li key={card.path} className="min-w-0">
              <Link
                href={card.path}
                className="ui-row ui-row--card relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#181811]/10 bg-white/70 p-6 shadow-[0_34px_90px_-60px_rgba(17,18,17,0.45)] sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#006f68_0%,#00b8ad_100%)]"
                />
                <span className="block font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#181811] sm:text-[24px]">
                  {card.name}
                </span>
                <span className="mt-4 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                  <span className="font-display text-[34px] font-semibold leading-none tracking-[-0.03em] text-[#181811] sm:text-[40px]">
                    {card.price}
                  </span>
                  <span className="text-[14px] text-[#6c6c61]">{card.priceNote}</span>
                </span>
                <span className="mt-4 block max-w-[40ch] text-[15px] leading-7 text-[#5f5f56]">
                  {card.text}
                </span>
                <span className={`${TEXT_LINK} mt-auto pt-6 text-[15px] text-[#006f68]`}>
                  {card.link}
                  <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceSection({ service }: { service: Service }) {
  return (
    <section id={service.id} className="scroll-mt-6 border-t border-[#deded8]">
      <div className="reveal-on-scroll mx-auto grid w-full max-w-[1180px] items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[40px]">
            {service.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
            {service.body}
          </p>
          <ul className="mt-7 max-w-[52ch] border-t border-[#deded8]">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-[#e6e6e1] py-2.5 text-[14px] leading-6 text-[#181811] sm:text-[15px]"
              >
                <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-[#00b8ad]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            {service.proofs.map((proof) => (
              <Link
                key={proof.href}
                href={proof.href}
                className={`${TEXT_LINK} text-[15px] text-[#006f68]`}
              >
                {proof.label}
                <ArrowUpRight size={15} aria-hidden="true" className={ICON_UP} />
              </Link>
            ))}
          </div>
        </div>

        <ServiceMedia service={service} />
      </div>
    </section>
  );
}

function ServiceMedia({ service }: { service: Service }) {
  const { media } = service;

  if (media.kind === "web") {
    return (
      <BrowserFrame domain={media.domain}>
        <Image
          src={media.still.src}
          alt={media.still.alt}
          width={media.still.width}
          height={media.still.height}
          sizes="(min-width: 1024px) 580px, 100vw"
          className="block h-auto w-full"
        />
      </BrowserFrame>
    );
  }

  // Two phones side by side at the height a browser frame would take.
  return (
    <div className="flex items-end justify-center gap-[6%]">
      {media.stills.map((still, index) => (
        <div
          key={still.src}
          className={`w-[36%] max-w-[210px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.24)] ${index === 1 ? "mb-[8%]" : ""}`}
        >
          <PhoneFrame>
            <Image src={still.src} alt={still.alt} fill sizes="210px" className="object-cover" />
          </PhoneFrame>
        </div>
      ))}
    </div>
  );
}

// The homepage promise "Launch inklusive", as the five steps it takes.
function LaunchSteps({ launch }: { launch: LaunchCopy }) {
  return (
    <section className="border-t border-[#deded8]">
      <div className="reveal-on-scroll mx-auto w-full max-w-[1180px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[40px]">
          {launch.title}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
          {launch.intro}
        </p>
        {/* Ring, number and line come from .steps in globals.css. */}
        <ol className="steps mt-10 lg:grid lg:grid-cols-5">
          {launch.steps.map((step) => (
            <li key={step.title}>
              <h3 className="text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[40ch] text-[14px] leading-6 text-[#5f5f56]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
