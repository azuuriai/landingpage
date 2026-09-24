import { projects } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { IndeedUniqueCaseStudy } from "./indeed-unique-case-study";

const project = projects["indeed-unique"];

export const metadata = caseStudyMetadata(project);

export default function IndeedUniquePage() {
  return (
    <CaseStudyPage
      project={project}
      closing="Du willst eine Website, die du selbst pflegen kannst? Schreib mir."
    >
      <IndeedUniqueCaseStudy />
    </CaseStudyPage>
  );
}
