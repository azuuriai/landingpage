import type { ReactNode } from "react";
import { PageBackdrop, SiteFooter, SkipLink } from "@/app/_components/site-chrome";
import { SiteHeader } from "@/app/_components/site-header";
import { SubpageHero } from "./subpage-hero";

// Shared frame for every subpage. Because it is a layout, header, hero and
// footer stay mounted during client navigation — moving between Über mich,
// Showcase, Leistungen, FAQ and Kontakt only swaps the words and the content
// below, instead of rebuilding and re-animating the whole page.
export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink target="content" />
      <main id="content" className="min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]">
        <PageBackdrop />
        <div className="relative z-10">
          <SiteHeader />
          <SubpageHero />
          {children}
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
