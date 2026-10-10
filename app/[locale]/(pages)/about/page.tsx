import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { DetailPage, detailMetadata } from "../detail-page";

export function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return detailMetadata("about", props);
}

export default async function AboutPage(props: LocaleParams) {
  return <DetailPage slug="about" locale={await resolveLocale(props)} />;
}
