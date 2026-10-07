"use client";

import { Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { isAppPathname, routing, type Locale } from "@/i18n/routing";
import { NAV_LINK } from "./button-styles";
import { beginLocaleSwitch, finishLocaleSwitch } from "./locale-switch";

// DE / EN in the running head. Each entry leads to the same page in the
// other language; the current language keeps its underline like an active
// menu entry. The hrefs come from getPathname() so German stays unprefixed
// (/about, not /de/about) and the legal slugs translate (/en/imprint).
// Switching keeps the scroll position and hands the page's state over to the
// new language (see locale-switch.ts), so only the text appears to change.
// The other language loads on intent (hover, touch, focus), not on every view.
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
  const router = useRouter();

  useEffect(() => finishLocaleSwitch(locale), [locale]);

  return (
    <nav
      aria-label={label}
      className={`flex items-center text-[11px] font-medium uppercase tracking-[0.12em] text-[#5f5f56] ${className}`}
    >
      {routing.locales.map((target, index) => {
        const targetHref = getPathname({ href, locale: target });
        const isCurrent = target === locale;
        const prefetch = () => {
          if (!isCurrent) router.prefetch(targetHref);
        };

        return (
          <Fragment key={target}>
            {index > 0 ? (
              <span aria-hidden="true" className="mx-1.5 text-[#181811]/20">
                /
              </span>
            ) : null}
            <Link
              href={targetHref}
              prefetch={false}
              scroll={false}
              onPointerEnter={prefetch}
              onTouchStart={prefetch}
              onFocus={prefetch}
              onClick={(event) => {
                // A new tab or window leaves this page as it is.
                const newTab = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
                if (!isCurrent && !newTab && event.button === 0) beginLocaleSwitch(target);
              }}
              hrefLang={target}
              lang={target}
              title={names[target]}
              aria-current={isCurrent ? "true" : undefined}
              className={NAV_LINK}
            >
              {target.toUpperCase()}
            </Link>
          </Fragment>
        );
      })}
    </nav>
  );
}
