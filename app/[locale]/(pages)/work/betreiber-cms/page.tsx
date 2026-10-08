import type { Metadata } from "next";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { getContent } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { RECORDINGS } from "@/app/media";
import { showcaseMedia } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { BrowserFrame } from "../project-media";
import { OwnerCmsCaseStudy } from "./betreiber-cms-case-study";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  return caseStudyMetadata(getContent(locale).ownerCms, locale);
}

// The studio is a desktop tool behind a login, so the opening shows it in a
// browser frame on its own: no phone, no live link.
export default async function OwnerCmsPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { ownerCms, caseStudyCopy } = getContent(locale);
  const media = showcaseMedia["betreiber-cms"];

  return (
    <CaseStudyPage
      study={ownerCms}
      locale={locale}
      media={
        <BrowserFrame domain={media.kind === "web" ? media.domain : ""}>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#fbf9f7]">
            <AutoplayVideo
              recording={RECORDINGS.ownerCms}
              label={ownerCms.tourLabel}
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </BrowserFrame>
      }
    >
      <OwnerCmsCaseStudy copy={caseStudyCopy.ownerCms} />
    </CaseStudyPage>
  );
}
