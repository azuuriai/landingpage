import type { Metadata } from "next";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { DetailPage, detailMetadata } from "../detail-page";

export function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return detailMetadata("work", props);
}

export default async function WorkPage(props: LocaleParams) {
  return <DetailPage slug="work" locale={await resolveLocale(props)} />;
}
