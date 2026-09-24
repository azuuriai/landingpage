"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { detailPageMap, detailPageNavOrder } from "../detail-pages-data";
import { HOVER_RING } from "./button-styles";
import { SiteLogo } from "./site-logo";

// Header for every subpage. It lives in the shared layout, so it stays mounted
// while visitors move between pages; the active entry follows the URL. A page
// below an entry (e.g. a case study under Showcase) marks that entry as the
// current section rather than the current page.
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#e4e4e1]">
      <div className="mx-auto flex w-full max-w-[1180px] min-w-0 flex-col gap-5 px-6 py-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="flex w-fit items-center" aria-label="Lukas Kaffer – Startseite">
          <SiteLogo priority />
        </Link>
        <nav aria-label="Seitennavigation">
          <ul className="-mx-2 flex flex-wrap gap-x-2 gap-y-1 text-[14px] font-medium text-[#5f5f56]">
            {detailPageNavOrder.map((slug) => {
              const item = detailPageMap[slug];
              const isPage = pathname === item.path;
              const inSection = !isPage && pathname.startsWith(`${item.path}/`);

              return (
                <li key={slug} className="shrink-0 whitespace-nowrap">
                  <Link
                    href={item.path}
                    aria-current={isPage ? "page" : inSection ? "true" : undefined}
                    className={`block px-2 py-1 hover:text-[#181811] ${HOVER_RING} ${
                      isPage || inSection ? "text-[#006f68]" : ""
                    }`}
                  >
                    {item.navLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
