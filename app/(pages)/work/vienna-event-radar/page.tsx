import { projects } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { ProjectMedia } from "../project-media";
import { ViennaEventRadarCaseStudy } from "./vienna-event-radar-case-study";

const project = projects["vienna-event-radar"];

export const metadata = caseStudyMetadata(project);

export default function ViennaEventRadarPage() {
  return (
    <CaseStudyPage
      study={project}
      media={<ProjectMedia project={project} priority withPhone={false} />}
      closing="Du planst eine Plattform mit echter Produktlogik? Schreib mir."
    >
      <ViennaEventRadarCaseStudy />
    </CaseStudyPage>
  );
}
