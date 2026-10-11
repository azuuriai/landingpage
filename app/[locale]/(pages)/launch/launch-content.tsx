import type { LaunchOfferCopy, ProjectData } from "@/app/content/types";
import { LAUNCH_CONTACT_HREF } from "@/app/offers-data";
import {
  FitList,
  OfferCards,
  OfferClosing,
  OfferHero,
  OfferSteps,
  ProofBand,
} from "../offer-blocks";
import { ProjectMedia } from "../work/project-media";

// /launch: where AI-built apps break, the four offers, how the check runs,
// what backs it, one next step. The opening shows Lukas' own platform and
// its iOS app, the products the offer is drawn from.
export function LaunchContent({
  copy,
  backLabel,
  project,
  phoneLabel,
}: {
  copy: LaunchOfferCopy;
  // Label of the link back to the Leistungen page.
  backLabel: string;
  // Vienna Event Radar: desktop recording plus the iOS app on the phone.
  project: ProjectData;
  phoneLabel: string;
}) {
  return (
    <>
      <OfferHero
        page={copy.page}
        cta={copy.cta}
        contactHref={LAUNCH_CONTACT_HREF}
        offersLink={copy.offersLink}
        backLabel={backLabel}
        media={<ProjectMedia project={project} phoneLabel={phoneLabel} priority />}
      />
      <FitList fit={copy.fit} />
      <OfferCards offer={copy.offer} plans={copy.plans} ongoing={copy.ongoing} />
      <OfferSteps title={copy.stepsTitle} steps={copy.steps} />
      <ProofBand proof={copy.proof} />
      <OfferClosing closing={copy.closing} cta={copy.cta} contactHref={LAUNCH_CONTACT_HREF} />
    </>
  );
}
