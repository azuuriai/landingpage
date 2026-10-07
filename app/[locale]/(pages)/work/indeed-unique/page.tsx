import type { Metadata } from "next";
import { getContent, withName } from "@/app/content";
import { localeFromParams, resolveLocale, type LocaleParams } from "@/app/locale";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { ProjectMedia } from "../project-media";
import { IndeedUniqueCaseStudy } from "./indeed-unique-case-study";

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  const locale = await localeFromParams(props);
  return caseStudyMetadata(getContent(locale).projects["indeed-unique"], locale);
}

export default async function IndeedUniquePage(props: LocaleParams) {
  const locale = await resolveLocale(props);
  const { projects, caseStudyCopy, ui } = getContent(locale);
  const project = projects["indeed-unique"];

  return (
    <CaseStudyPage
      study={project}
      locale={locale}
      media={
        <ProjectMedia
          project={project}
          phoneLabel={withName(ui.phoneRecording, project.name)}
          priority
        />
      }
    >
      <IndeedUniqueCaseStudy copy={caseStudyCopy.indeedUnique} />
    </CaseStudyPage>
  );
}
