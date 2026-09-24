import { projects } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { ProjectMedia } from "../project-media";
import { IndeedUniqueCaseStudy } from "./indeed-unique-case-study";

const project = projects["indeed-unique"];

export const metadata = caseStudyMetadata(project);

export default function IndeedUniquePage() {
  return (
    <CaseStudyPage
      study={project}
      media={<ProjectMedia project={project} priority />}
      closing="Du willst eine Website, die du selbst pflegen kannst? Schreib mir."
    >
      <IndeedUniqueCaseStudy />
    </CaseStudyPage>
  );
}
