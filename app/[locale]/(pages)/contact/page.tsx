import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { DetailPage, detailMetadata } from "../detail-page";

export function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return detailMetadata("contact", props);
}

export default async function ContactPage(props: LocaleParams) {
  return <DetailPage slug="contact" locale={await resolveLocale(props)} />;
}
