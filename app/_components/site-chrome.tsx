import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ICON_LEFT, PRIMARY_BUTTON, QUIET_LINK, TEXT_LINK } from "./button-styles";

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function SkipLink({ target }: { target: string }) {
  return (
    <a
      href={`#${target}`}
      className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-[#181811] px-4 py-2 text-[13px] text-white transition focus:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#181811]"
    >
      Zum Inhalt springen
    </a>
  );
}

// Paper background shared by every page: soft top-left light plus film grain.
export function PageBackdrop() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_15%_-8%,rgba(255,255,255,0.85),transparent_46%)]" />
      <div className="grain" />
    </>
  );
}

export function ContactBand({ heading }: { heading: string }) {
  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-10 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-12">
        <h2 className="text-pretty font-display text-[25px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
          {heading}
        </h2>
        <Link href="/contact" className={PRIMARY_BUTTON}>
          Idee schicken
        </Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[#deded8]">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-6 py-6 text-[13px] text-[#8a8a80] sm:px-8 lg:px-10">
        <span>© 2026 Lukas Kaffer, Wien</span>
        <div className="flex gap-5">
          <Link href="/impressum" className={QUIET_LINK}>
            Impressum
          </Link>
          <Link href="/datenschutz" className={QUIET_LINK}>
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className={`${TEXT_LINK} text-[14px] text-[#5f5f56]`}
    >
      <ArrowLeft size={15} aria-hidden="true" className={ICON_LEFT} />
      {label}
    </Link>
  );
}

export function Chips({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-7 flex flex-wrap gap-1.5">
      {items.map((chip) => (
        <span
          key={chip}
          className="inline-flex items-center gap-2 rounded-full border border-[#181811]/15 py-1 pl-2.5 pr-3 text-[13px] font-medium text-[#3a3a33]"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#00b8ad]" />
          {chip}
        </span>
      ))}
    </div>
  );
}
