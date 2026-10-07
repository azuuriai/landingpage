import type { Metadata } from "next";
import { getContent, withName } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { ProjectMedia } from "../project-media";
import { ViennaEventRadarCaseStudy } from "./vienna-event-radar-case-study";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  return caseStudyMetadata(getContent(locale).projects["vienna-event-radar"], locale);
}

export default async function ViennaEventRadarPage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { projects, caseStudyCopy, ui } = getContent(locale);
  const project = projects["vienna-event-radar"];

  return (
    <CaseStudyPage
      study={project}
      locale={locale}
      media={
        <ProjectMedia
          project={project}
          phoneLabel={withName(ui.phoneRecording, project.name)}
          priority
          withPhone={false}
        />
      }
    >
      <ViennaEventRadarCaseStudy copy={caseStudyCopy.viennaEventRadar} />
    </CaseStudyPage>
  );
}
