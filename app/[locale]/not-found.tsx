import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PRIMARY_BUTTON } from "@/app/_components/button-styles";
import { PageBackdrop, SiteFooter, SkipLink } from "@/app/_components/site-chrome";
import { SiteHeader } from "@/app/_components/site-header";
import { detailPage, getContent } from "@/app/content";
import { detailPageNavOrder } from "@/app/detail-pages-data";

export default async function NotFound() {
  const content = getContent(await getLocale());
  const { ui } = content;
  const navItems = detailPageNavOrder.map((slug) => {
    const page = detailPage(content, slug);
    return { path: page.path, label: page.navLabel };
  });

  return (
    <>
      <SkipLink target="content" label={ui.skipToContent} />
      <main id="content" className="min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]">
        <PageBackdrop />
        <div className="relative z-10 flex min-h-svh flex-col">
          <SiteHeader
            items={navItems}
            logoLabel={ui.logoLabel}
            navLabel={ui.headerNav}
            languageLabel={ui.languageSwitch}
            languageNames={ui.languageNames}
          />
          <section className="mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-center px-6 py-16 sm:px-8 lg:px-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">404</p>
            <h1 className="mt-4 max-w-[16ch] text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] sm:text-[56px]">
              {ui.notFound.title}
            </h1>
            <p className="mt-5 max-w-[52ch] text-[16px] leading-7 text-[#6c6c61] sm:text-[18px] sm:leading-8">
              {ui.notFound.text}
            </p>
            <Link href="/" className={`${PRIMARY_BUTTON} mt-8`}>
              {ui.backHome}
            </Link>
          </section>
          <SiteFooter copyright={ui.copyright} imprint={ui.imprint} privacy={ui.privacy} />
        </div>
      </main>
    </>
  );
}
