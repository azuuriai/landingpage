import type { Metadata } from "next";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { getContent } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { RECORDINGS } from "@/app/media";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { WienEventRadarIosCaseStudy } from "./wien-event-radar-ios-case-study";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  return caseStudyMetadata(getContent(locale).iosApp, locale);
}

export default async function WienEventRadarIosPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { iosApp, caseStudyCopy } = getContent(locale);

  return (
    <CaseStudyPage
      study={iosApp}
      locale={locale}
      media={
        <div className="mx-auto w-[62%] max-w-[300px] drop-shadow-[0_34px_44px_rgba(17,18,17,0.26)]">
          <PhoneFrame>
            <AutoplayVideo
              recording={RECORDINGS.viennaEventRadarApp}
              label={iosApp.tourLabel}
              preload="auto"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      }
    >
      <WienEventRadarIosCaseStudy copy={caseStudyCopy.wienEventRadarIos} />
    </CaseStudyPage>
  );
}
