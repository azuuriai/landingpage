import type { Metadata } from "next";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { getContent } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { RECORDINGS } from "@/app/media";
import { showcaseMedia } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { BrowserFrame } from "../project-media";
import { IndeedUniqueStudioCaseStudy } from "./indeed-unique-redaktion-case-study";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  return caseStudyMetadata(getContent(locale).indeedUniqueStudio, locale);
}

// The studio is a desktop tool behind a login, so the opening shows it in a
// browser frame on its own: no phone, no live link.
export default async function IndeedUniqueStudioPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { indeedUniqueStudio, caseStudyCopy } = getContent(locale);
  const media = showcaseMedia["indeed-unique-studio"];

  return (
    <CaseStudyPage
      study={indeedUniqueStudio}
      locale={locale}
      media={
        <BrowserFrame domain={media.kind === "web" ? media.domain : ""}>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#fbf9f7]">
            <AutoplayVideo
              recording={RECORDINGS.indeedUniqueStudio}
              label={indeedUniqueStudio.tourLabel}
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </BrowserFrame>
      }
    >
      <IndeedUniqueStudioCaseStudy copy={caseStudyCopy.indeedUniqueStudio} />
    </CaseStudyPage>
  );
}
