import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function InfoPage({
  eyebrow,
  title,
  intro,
  children,
  ctaHref = "/contact",
  ctaLabel = "Start a project",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <main className="min-h-svh bg-[#f4f4f2] text-[#1e1e1c]">
      <div className="mx-auto flex min-h-svh w-full max-w-[980px] flex-col px-6 py-8 lg:px-0 lg:py-12">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#8b8b86] transition hover:text-[#1d1d1b]"
          >
            <ArrowLeft size={15} />
            Lukas Kaffer
          </Link>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#deded9] bg-white/60 px-4 py-2 text-[14px] font-semibold text-[#1d1d1b] transition hover:bg-white"
          >
            {ctaLabel}
            <ArrowUpRight size={14} />
          </Link>
        </header>

        <section className="grid flex-1 gap-12 py-16 lg:grid-cols-[340px_1fr] lg:items-center lg:py-0">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-[#aaa9a3]">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-[360px] text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#1d1d1b] sm:text-[56px]">
              {title}
            </h1>
            <p className="mt-6 max-w-[360px] text-[17px] leading-8 text-[#74746f]">
              {intro}
            </p>
          </div>

          <div className="rounded-[28px] border border-[#deded9] bg-white/55 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.045)] sm:p-8">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}

export function DetailList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[18px] border border-[#e8e8e3] bg-[#fbfbf9] px-5 py-4 text-[16px] font-medium leading-6 text-[#555553]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
