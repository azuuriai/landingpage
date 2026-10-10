import type { Metadata } from "next";
import { getContent } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { RECORDINGS } from "@/app/media";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { MissionControlCaseStudy } from "./mission-control-case-study";
import { ShowreelPlayer } from "./showreel-player";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  return caseStudyMetadata(getContent(locale).missionControl, locale);
}

// A private tool that runs on one Mac, so there is no live link. The opening
// shows the finished showreel instead of a screen recording: with sound and
// controls, started by the visitor, never automatically.
export default async function MissionControlPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { missionControl, caseStudyCopy } = getContent(locale);

  return (
    <CaseStudyPage
      study={missionControl}
      locale={locale}
      media={
        <ShowreelPlayer
          recording={RECORDINGS.missionControlShowreel}
          label={missionControl.tourLabel}
          playLabel={caseStudyCopy.missionControl.playLabel}
        />
      }
    >
      <MissionControlCaseStudy copy={caseStudyCopy.missionControl} />
    </CaseStudyPage>
  );
}
