"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { BackLink, Chips } from "@/app/_components/site-chrome";
import { detailPages } from "@/app/detail-pages-data";
import { ServiceIndex } from "./services/service-index";

// The opening block of every navigation page (Über mich, Showcase,
// Leistungen, FAQ, Kontakt). It lives in the shared layout and shares one
// minimum height on desktop, so switching pages only swaps words and
// portrait; nothing jumps, reloads or animates in again. Case
// studies and legal pages bring their own opening and render nothing here.
export function SubpageHero() {
  const pathname = usePathname();
  const page = detailPages.find((item) => item.path === pathname);
  if (!page) return null;

  return (
    <section className="mx-auto grid w-full max-w-[1180px] gap-10 px-6 pb-12 pt-8 sm:px-8 lg:min-h-[450px] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-10 lg:pb-12 lg:pt-8">
      <div className="min-w-0">
        <BackLink href="/" label="Startseite" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
          {page.eyebrow}
        </p>
        <h1 className="mt-4 text-pretty font-display text-[43px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#181811] sm:text-[60px] lg:text-[72px]">
          {page.title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-7 text-[#6c6c61] sm:text-[18px] sm:leading-8">
          {page.description}
        </p>
        <Chips items={page.chips} />
      </div>

      {page.slug === "services" ? <ServiceIndex /> : null}

      {page.image ? (
        <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden rounded-lg border border-[#e0e0dc] bg-[#e9e9e4] lg:aspect-auto lg:w-[270px]">
          <Image
            key={page.image.src}
            src={page.image.src}
            alt={page.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 270px, 300px"
            className="object-cover object-[50%_18%]"
          />
        </div>
      ) : null}
    </section>
  );
}
