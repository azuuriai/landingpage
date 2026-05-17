import { InfoPage } from "@/components/info-page";

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact"
      title="Have a rough product idea?"
      intro="Send the idea, the current bottleneck or the page that needs to work harder. I will help shape the next move."
      ctaHref="mailto:hello@lukaskaffer.com"
      ctaLabel="Email"
    >
      <div className="space-y-5">
        <a
          href="mailto:hello@lukaskaffer.com"
          className="block rounded-[22px] bg-[#1d1d1b] px-6 py-5 text-[18px] font-semibold text-white transition hover:bg-black"
        >
          hello@lukaskaffer.com
        </a>
        <p className="text-[15px] leading-7 text-[#74746f]">
          Best starting point: one paragraph about what you want to launch, who it is for and what should happen next.
        </p>
      </div>
    </InfoPage>
  );
}
