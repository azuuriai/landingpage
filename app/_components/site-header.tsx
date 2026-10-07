"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { DetailPath } from "../content/types";
import { NAV_LINK } from "./button-styles";
import { LocaleSwitcher } from "./locale-switcher";
import { SiteLogo } from "./site-logo";

export type NavItem = { path: DetailPath; label: string };

// Header for every subpage. It lives in the shared layout, so it stays mounted
// while visitors move between pages; the active entry follows the URL. A page
// below an entry (e.g. a case study under Showcase) marks that entry as the
// current section rather than the current page.
export function SiteHeader({
  items,
  logoLabel,
  navLabel,
  languageLabel,
  languageNames,
}: {
  items: NavItem[];
  logoLabel: string;
  navLabel: string;
  languageLabel: string;
  languageNames: Record<Locale, string>;
}) {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#e4e4e1]">
      <div className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-col gap-5 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="flex w-fit items-center" aria-label={logoLabel}>
          <SiteLogo priority />
        </Link>
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <nav aria-label={navLabel}>
            <ul className="-mx-2 flex flex-wrap gap-x-2 gap-y-1 text-[14px] font-medium text-[#5f5f56]">
              {items.map((item) => {
                const isPage = pathname === item.path;
                const inSection = !isPage && pathname.startsWith(`${item.path}/`);

                return (
                  <li key={item.path} className="shrink-0 whitespace-nowrap">
                    <Link
                      href={item.path}
                      aria-current={isPage ? "page" : inSection ? "true" : undefined}
                      className={`block px-2 py-1 [--ui-nav-inset:0.5rem] ${NAV_LINK}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <LocaleSwitcher label={languageLabel} names={languageNames} />
        </div>
      </div>
    </header>
  );
}
