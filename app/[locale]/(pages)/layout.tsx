import type { ReactNode } from "react";
import { PageBackdrop, SiteFooter, SkipLink } from "@/app/_components/site-chrome";
import { SiteHeader } from "@/app/_components/site-header";
import { detailPage, getContent } from "@/app/content";
import { detailPageNavOrder } from "@/app/detail-pages-data";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { SubpageHero, type HeroPage } from "./subpage-hero";

// Shared frame for every subpage. Because it is a layout, header, hero and
// footer stay mounted during client navigation — moving between Über mich,
// Showcase, Leistungen, FAQ and Kontakt only swaps the words and the content
// below, instead of rebuilding and re-animating the whole page.
export default async function PagesLayout({
  children,
  ...props
}: { children: ReactNode } & LocaleParams) {
  const locale = await resolveLocale(props);
  const content = getContent(locale);
  const { ui } = content;

  const navItems = detailPageNavOrder.map((slug) => {
    const page = detailPage(content, slug);
    return { path: page.path, label: page.navLabel };
  });

  // Only what the hero shows; the client component never sees the bodies.
  const heroPages: HeroPage[] = content.detailPages.map((page) => ({
    slug: page.slug,
    path: page.path,
    eyebrow: page.eyebrow,
    title: page.title,
    description: page.description,
    chips: page.chips,
    image: page.image,
  }));

  const serviceIndex = content.services.map(({ id, name, teaser, media }) => ({
    id,
    name,
    teaser,
    media,
  }));

  return (
    <>
      <SkipLink target="content" label={ui.skipToContent} />
      <main id="content" className="min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]">
        <PageBackdrop />
        <div className="relative z-10">
          <SiteHeader
            items={navItems}
            logoLabel={ui.logoLabel}
            navLabel={ui.headerNav}
            languageLabel={ui.languageSwitch}
            languageNames={ui.languageNames}
          />
          <SubpageHero
            pages={heroPages}
            backLabel={ui.backHome}
            services={serviceIndex}
            servicesLabel={ui.serviceIndexLabel}
          />
          {children}
          <SiteFooter copyright={ui.copyright} imprint={ui.imprint} privacy={ui.privacy} />
        </div>
      </main>
    </>
  );
}
