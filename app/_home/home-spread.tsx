import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { ICON_UP, NAV_LINK, PRIMARY_BUTTON, QUIET_LINK } from "../_components/button-styles";
import { LocaleSwitcher } from "../_components/locale-switcher";
import { PageBackdrop, SkipLink } from "../_components/site-chrome";
import { SiteLogo } from "../_components/site-logo";
import { getContent } from "../content";
import { homeLinks, showcaseItems } from "./home-content";
import { Showcase } from "./showcase";

// Desktop is a fixed single screen (lg:h-svh, no scroll). The left column is
// pinned to the showcase: the headline starts level with the monitor, the
// call to action ends level with the monitor's foot, and the free space
// between them is deliberate. The few vertical sizes that must shrink on
// short laptops use clamp(MIN, calc(MAX + 4.2vh − n), MAX), so the page fits
// from ~700px up.
// Source order is the reading order everywhere: on mobile the showcase sits
// between headline and links; on desktop the grid moves it to the right.
export function HomeSpread({ locale }: { locale: Locale }) {
  const content = getContent(locale);
  const { ui, home } = content;

  return (
    <>
      <SkipLink target="home-content" label={ui.skipToContent} />
      <main
        id="home-content"
        className="relative min-h-svh overflow-x-hidden bg-[#f2f2f0] text-[#181811]"
      >
        <PageBackdrop />

        <div className="relative mx-auto flex min-h-svh w-full max-w-[1240px] flex-col px-6 pt-6 sm:px-8 lg:h-svh lg:px-10 lg:pt-[clamp(0.4rem,calc(4.2vh-18.4px),1.25rem)]">
          {/* Running head: logo, language and contact sit tight on a hairline,
              the one-line descriptor directly beneath it. */}
          <header className="rise">
            <div className="flex items-center justify-between border-b border-[#181811]/10 pb-2.5 lg:pb-[clamp(0.35rem,calc(2.4vh-12px),0.7rem)]">
              <Link href="/" className="flex items-center" aria-label={ui.logoLabel}>
                <SiteLogo priority />
              </Link>
              <div className="flex items-center gap-5 sm:gap-7">
                <LocaleSwitcher label={ui.languageSwitch} names={ui.languageNames} />
                <Link
                  href="/contact"
                  className={`${NAV_LINK} text-[11px] font-medium uppercase tracking-[0.12em] text-[#5f5f56]`}
                >
                  {ui.contact}
                </Link>
              </div>
            </div>
            <p className="mt-1.5 text-[11px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-[#006f68] lg:mt-0">
              {home.descriptor}
            </p>
          </header>

          <div className="flex flex-1 flex-col lg:min-h-0 lg:justify-center lg:py-[clamp(0.5rem,calc(4.2vh-24px),1.5rem)]">
            <div className="flex flex-col gap-10 pb-12 pt-8 lg:grid lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:gap-x-20 lg:gap-y-0 lg:py-0">
              <h1
                className="rise max-w-[14ch] text-balance font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.035em] text-[#181811] sm:text-[50px] lg:col-start-1 lg:row-start-1 lg:text-[clamp(34px,calc(4.2vh+8px),48px)]"
                style={{ animationDelay: "0.08s" }}
              >
                {home.headline}
              </h1>

              {/* The person behind the page, where a visitor looks first: the
                  same portrait as in the email signature and on Google. On
                  mobile it sits between headline and showcase; on desktop it
                  tops the free row between headline and links. */}
              <Link
                href="/about"
                className="rise ui-byline -mt-4 flex w-fit items-center gap-3.5 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:self-start lg:pt-[1.125rem]"
                style={{ animationDelay: "0.13s" }}
              >
                <Image
                  src="/mail/lukas-kaffer.png"
                  alt=""
                  width={240}
                  height={240}
                  sizes="48px"
                  priority
                  className="h-11 w-11 shrink-0 rounded-full shadow-[0_0_0_1px_rgba(24,24,17,0.08)]"
                />
                <span className="flex flex-col gap-0.5 text-[14px] leading-5">
                  <span className="ui-link w-fit font-medium text-[#181811]">
                    {home.byline.name}
                  </span>
                  <span className="max-w-[34ch] text-[#6c6c61]">{home.byline.text}</span>
                </span>
              </Link>

              <div
                className="rise lg:col-start-2 lg:row-span-3 lg:row-start-1"
                style={{ animationDelay: "0.18s" }}
              >
                <Showcase items={showcaseItems(content)} label={ui.showcaseLabel} />
              </div>

              <div
                className="rise lg:col-start-1 lg:row-start-3 lg:pt-8"
                style={{ animationDelay: "0.28s" }}
              >
                <nav aria-label={ui.homeNav}>
                  <ul className="border-t border-[#181811]/10">
                    {homeLinks(content).map((link) => (
                      <li key={link.href} className="border-b border-[#181811]/10">
                        <Link
                          href={link.href}
                          className="ui-row ui-row--shift flex items-center justify-between py-3 text-[18px] font-medium tracking-[-0.01em] text-[#181811] lg:py-[clamp(0.4rem,calc(4.2vh-28px),0.65rem)]"
                        >
                          {link.label}
                          <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                            className={`${ICON_UP} text-[#181811]/25`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <Link
                  href="/contact"
                  className={`${PRIMARY_BUTTON} mt-8 lg:mt-[clamp(0.9rem,calc(4.2vh-18px),1.4rem)]`}
                >
                  {ui.sendIdea}
                </Link>
              </div>
            </div>
          </div>

          <footer className="flex items-center justify-between gap-4 border-t border-[#181811]/10 py-5 text-[13px] text-[#8a8a80] lg:py-[clamp(0.6rem,calc(4.2vh-18px),1.1rem)]">
            <span>{ui.copyrightHome}</span>
            <div className="flex gap-5">
              <Link href="/impressum" className={QUIET_LINK}>
                {ui.imprint}
              </Link>
              <Link href="/datenschutz" className={QUIET_LINK}>
                {ui.privacy}
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
