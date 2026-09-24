import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { Recording } from "@/app/media";
import { BrowserFrame } from "./project-media";

// Building blocks shared by the case studies. Sections open with a plain
// heading — no eyebrow labels — and show the product before they explain it.

export type Still = { src: string; alt: string; width: number; height: number };

export function CaseSection({
  children,
  tone = "plain",
  id,
}: {
  children: ReactNode;
  tone?: "plain" | "tinted" | "dark";
  id?: string;
}) {
  const tones = {
    plain: "",
    tinted: "bg-[#fafafa]",
    dark: "bg-[#111714] text-[#f2f2f0]",
  };

  return (
    <section id={id} className={`scroll-mt-6 border-t border-[#d9d9d3] ${tones[tone]}`}>
      <div className="mx-auto w-full max-w-[1180px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        {children}
      </div>
    </section>
  );
}

// Heading with its intro beside it; `stacked` puts a short intro underneath.
export function SectionHeading({
  title,
  intro,
  dark = false,
  stacked = false,
}: {
  title: string;
  intro?: string;
  dark?: boolean;
  stacked?: boolean;
}) {
  return (
    <div
      className={`grid gap-5 ${stacked ? "" : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20"}`}
    >
      <h2
        className={`max-w-[20ch] text-balance font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[42px] ${
          dark ? "text-white" : "text-[#181811]"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`max-w-[60ch] text-[15px] leading-7 sm:text-[16px] ${stacked ? "" : "lg:pt-2"} ${
            dark ? "text-[#c9d0cc]" : "text-[#5f5f56]"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

// A screen of the product with a short title and one sentence underneath.
export function Feature({
  still,
  title,
  text,
  frame = "plain",
  domain,
  sizes = "(min-width: 1024px) 540px, 100vw",
}: {
  still: Still;
  title: string;
  text: string;
  frame?: "plain" | "browser";
  domain?: string;
  sizes?: string;
}) {
  const image = (
    <Image
      src={still.src}
      alt={still.alt}
      width={still.width}
      height={still.height}
      sizes={sizes}
      className="block h-auto w-full"
    />
  );

  return (
    <figure className="min-w-0">
      {frame === "browser" && domain ? (
        <BrowserFrame domain={domain}>{image}</BrowserFrame>
      ) : (
        <div className="overflow-hidden rounded-[12px] border border-[#181811]/10 bg-[#fbf9f7] shadow-[0_34px_90px_-50px_rgba(17,18,17,0.45)]">
          {image}
        </div>
      )}
      <FeatureCaption title={title} text={text} />
    </figure>
  );
}

// A screen recording in a plain rounded frame, captioned like a Feature.
// The site's address is already in the page opening, so tiles don't repeat it.
export function VideoFeature({
  recording,
  label,
  title,
  text,
}: {
  recording: Recording;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-[#181811]/10 bg-[#fbf9f7] shadow-[0_34px_90px_-50px_rgba(17,18,17,0.45)]">
        <AutoplayVideo
          recording={recording}
          label={label}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
      <FeatureCaption title={title} text={text} />
    </figure>
  );
}

function FeatureCaption({ title, text }: { title: string; text: string }) {
  return (
    <figcaption className="mt-5">
      <span className="block text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
        {title}
      </span>
      <span className="mt-1.5 block max-w-[52ch] text-[15px] leading-7 text-[#5f5f56]">{text}</span>
    </figcaption>
  );
}

// An app screen in the iPhone bezel, captioned like a Feature.
export function PhoneFeature({
  still,
  title,
  text,
}: {
  still: Still;
  title: string;
  text: string;
}) {
  return (
    <figure className="min-w-0">
      <div className="mx-auto w-[78%] max-w-[250px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.2)]">
        <PhoneFrame>
          <Image src={still.src} alt={still.alt} fill sizes="250px" className="object-cover" />
        </PhoneFrame>
      </div>
      <figcaption className="mt-6">
        <span className="block text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
          {title}
        </span>
        <span className="mt-1.5 block text-[15px] leading-7 text-[#5f5f56]">{text}</span>
      </figcaption>
    </figure>
  );
}

// Capabilities as a list of short titled items, two columns by default.
export function CapabilityList({
  items,
  dark = false,
  columns = 2,
}: {
  items: { title: string; text: string }[];
  dark?: boolean;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`grid gap-x-12 border-t ${columns === 2 ? "sm:grid-cols-2" : ""} ${
        dark ? "border-white/15" : "border-[#d9d9d3]"
      }`}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className={`flex gap-3 border-b py-5 ${dark ? "border-white/15" : "border-[#e1e1dc]"}`}
        >
          <Check
            size={17}
            aria-hidden="true"
            className={`mt-1 shrink-0 ${dark ? "text-[#61d3ca]" : "text-[#00b8ad]"}`}
          />
          <span>
            <span
              className={`block text-[16px] font-semibold leading-snug ${
                dark ? "text-white" : "text-[#181811]"
              }`}
            >
              {item.title}
            </span>
            <span
              className={`mt-1 block text-[14.5px] leading-6 ${
                dark ? "text-[#c9d0cc]" : "text-[#5f5f56]"
              }`}
            >
              {item.text}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

// Documented figures only — each one needs a source in the project's docs.
export function FigureRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.label}>
          <span className="block font-display text-[40px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[52px]">
            {item.value}
          </span>
          <span className="mt-3 block max-w-[22ch] text-[13.5px] leading-5 text-[#aeb8b3]">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
