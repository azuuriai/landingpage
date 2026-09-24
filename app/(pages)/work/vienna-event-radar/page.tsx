import { projects } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { ViennaEventRadarCaseStudy } from "./vienna-event-radar-case-study";

const project = projects["vienna-event-radar"];

export const metadata = caseStudyMetadata(project);

export default function ViennaEventRadarPage() {
  return (
    <CaseStudyPage
      project={project}
      closing="Fragen zu den Entscheidungen oder zum Build? Schreib mir."
    >
      <ViennaEventRadarCaseStudy />
    </CaseStudyPage>
  );
}
