import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { DetailPage, detailMetadata } from "../detail-page";

export function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return detailMetadata("faq", props);
}

export default async function FaqPage(props: LocaleParams) {
  return <DetailPage slug="faq" locale={await resolveLocale(props)} />;
}
