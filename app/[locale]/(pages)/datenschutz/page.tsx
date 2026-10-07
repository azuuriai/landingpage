import type { Metadata } from "next";
import { getContent } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { pageMetadata } from "@/app/seo";
import { LegalPage } from "../legal-page";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  const copy = getContent(locale).legal.datenschutz;
  return pageMetadata({
    locale,
    path: "/datenschutz",
    title: copy.metaTitle,
    description: copy.metaDescription,
  });
}

export default async function DatenschutzPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { legal, ui } = getContent(locale);
  return <LegalPage copy={legal.datenschutz} backLabel={ui.backHome} updatedLabel={ui.updatedLabel} />;
}
