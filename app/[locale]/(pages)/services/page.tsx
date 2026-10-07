import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { DetailPage, detailMetadata } from "../detail-page";

export function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return detailMetadata("services", props);
}

export default async function ServicesPage(props: LocaleParams) {
  return <DetailPage slug="services" locale={await resolveLocale(props)} />;
}
