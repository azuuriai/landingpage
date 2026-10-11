import Image from "next/image";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { AssistantCopy } from "@/app/content/types";
import { ASSISTANT_CONTACT_HREF, ASSISTANT_PROOF } from "@/app/offers-data";
import {
  Band,
  FitList,
  OfferCards,
  OfferClosing,
  OfferHero,
  OfferSteps,
  ProofBand,
} from "../offer-blocks";
import { CapabilityList, SectionHeading } from "../work/case-study-blocks";

// /assistent: what the assistant takes over, the three stages and the care
// plan, the conditions as a visible list, how it gets set up, the proof
// (Mission Control) and one next step.
export function AssistantContent({
  copy,
  backLabel,
}: {
  copy: AssistantCopy;
  // Label of the link back to the Leistungen page.
  backLabel: string;
}) {
  return (
    <>
      <OfferHero
        page={copy.page}
        cta={copy.cta}
        contactHref={ASSISTANT_CONTACT_HREF}
        offersLink={copy.offersLink}
        backLabel={backLabel}
        media={<AssistantMedia copy={copy} />}
      />
      <FitList fit={copy.fit} />
      <OfferCards offer={copy.offer} plans={copy.plans} ongoing={copy.ongoing} />
      <Terms copy={copy} />
      <OfferSteps title={copy.stepsTitle} steps={copy.steps} />
      <ProofBand proof={copy.proof} />
      <OfferClosing closing={copy.closing} cta={copy.cta} contactHref={ASSISTANT_CONTACT_HREF} />
    </>
  );
}

// Mission Control in its demo mode: the silent zoom into the brain in a
// plain frame, the Telegram scene of the showreel on the phone in front.
// Same composition as a project opening, without a browser bar, because
// the tool is a desktop app.
function AssistantMedia({ copy }: { copy: AssistantCopy }) {
  return (
    <div className="relative pb-[9%] pr-[7%] sm:pr-[11%]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] border border-[#181811]/10 bg-[#0b0f0d] shadow-[0_34px_90px_-40px_rgba(17,18,17,0.45)]">
        <AutoplayVideo
          recording={ASSISTANT_PROOF.loop}
          label={copy.loopLabel}
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[23%] min-w-[92px] max-w-[190px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.26)]">
        <PhoneFrame priority>
          <Image
            src={ASSISTANT_PROOF.phoneStill}
            alt={copy.phoneAlt}
            fill
            priority
            sizes="190px"
            className="object-cover"
          />
        </PhoneFrame>
      </div>
    </div>
  );
}

// The conditions, visible and in plain words: whose accounts, who pays the
// AI usage, when the assistant may write, what happens with business mail.
function Terms({ copy }: { copy: AssistantCopy }) {
  return (
    <Band>
      <SectionHeading title={copy.terms.title} />
      <div className="mt-8">
        <CapabilityList items={copy.terms.items} />
      </div>
    </Band>
  );
}
