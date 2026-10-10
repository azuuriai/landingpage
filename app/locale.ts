import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";

export type LocaleParams = { params: Promise<{ locale: string }> };

// The [locale] segment of a page or layout, typed. The root layout has
// already rejected unknown values with a 404.
export async function localeFromParams({ params }: LocaleParams): Promise<Locale> {
  const { locale } = await params;
  return hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
}

// Same, and enables static rendering for the page or layout that calls it.
export async function resolveLocale(props: LocaleParams): Promise<Locale> {
  const locale = await localeFromParams(props);
  setRequestLocale(locale);
  return locale;
}
