import type { ReactNode } from "react";
import { BackLink } from "./_components/site-chrome";

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-[900px] px-6 pb-12 pt-8 sm:px-8 lg:px-10 lg:pb-20 lg:pt-10">
        <BackLink href="/" label="Startseite" />
        <header className="border-b border-[#d9d9d3] pb-10 pt-8 lg:pb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-pretty font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.03em] sm:text-[60px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[62ch] text-[16px] leading-7 text-[#5f5f56] sm:text-[18px] sm:leading-8">
            {intro}
          </p>
          {updated ? (
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5f5f56]">
              Stand: {updated}
            </p>
          ) : null}
        </header>
        <div className="legal-copy py-4 [&_a]:font-medium [&_a]:text-[#006f68] [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-[25px] [&_h2]:font-medium [&_h2]:leading-[1.15] [&_h2]:tracking-[-0.018em] [&_h2]:text-[#181811] [&_li]:mt-2 [&_li]:text-[15px] [&_li]:leading-7 [&_li]:text-[#5f5f56] [&_p]:mt-4 [&_p]:max-w-[76ch] [&_p]:text-[15px] [&_p]:leading-7 [&_p]:text-[#5f5f56] [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </article>
    </>
  );
}
