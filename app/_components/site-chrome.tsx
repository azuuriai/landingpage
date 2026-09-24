import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PRIMARY_BUTTON } from "./button-styles";

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
      className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-[#181811] px-4 py-2 text-[13px] text-white transition focus:translate-y-0"
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
        <h2 className="max-w-[30ch] font-display text-[25px] font-medium leading-[1.14] tracking-[-0.018em] text-[#181811] sm:text-[32px]">
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
          <Link href="/impressum" className="transition hover:text-[#181811]">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-[#181811]">
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
      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#5f5f56] transition hover:text-[#181811]"
    >
      <ArrowLeft size={15} />
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
          className="rounded-md bg-[#181811]/[0.05] px-2.5 py-1 text-[13px] font-medium text-[#4a4a42]"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
