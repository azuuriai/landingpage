"use client";

import { Fragment } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { isAppPathname, routing, type Locale } from "@/i18n/routing";
import { NAV_LINK } from "./button-styles";

// DE / EN in the running head. Each entry leads to the same page in the
// other language; the current language keeps its underline like an active
// menu entry. The hrefs come from getPathname() so German stays unprefixed
// (/about, not /de/about) and the legal slugs translate (/en/imprint).
export function LocaleSwitcher({
  label,
  names,
  className = "",
}: {
  label: string;
  names: Record<Locale, string>;
  className?: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const href = isAppPathname(pathname) ? pathname : "/";

  return (
    <nav
      aria-label={label}
      className={`flex items-center text-[11px] font-medium uppercase tracking-[0.12em] text-[#5f5f56] ${className}`}
    >
      {routing.locales.map((target, index) => (
        <Fragment key={target}>
          {index > 0 ? (
            <span aria-hidden="true" className="mx-1.5 text-[#181811]/20">
              /
            </span>
          ) : null}
          <Link
            href={getPathname({ href, locale: target })}
            prefetch={false}
            hrefLang={target}
            lang={target}
            title={names[target]}
            aria-current={target === locale ? "true" : undefined}
            className={NAV_LINK}
          >
            {target.toUpperCase()}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
