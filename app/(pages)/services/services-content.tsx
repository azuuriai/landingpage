import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { launchSteps, services, type Service } from "@/app/services-data";
import { BrowserFrame } from "../work/project-media";

// Body of the Leistungen page. Every product form is built the same way — words
// on the left, a real still on the right — and ends with the project that
// shows it working. Stills instead of recordings keep this page calmer than
// the homepage and the Showcase.
export function ServicesContent() {
  return (
    <>
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
      <LaunchSteps />
    </>
  );
}

function ServiceSection({ service }: { service: Service }) {
  return (
    <section id={service.id} className="scroll-mt-6 border-t border-[#deded8]">
      <div className="reveal-on-scroll mx-auto grid w-full max-w-[1180px] items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <h2 className="max-w-[18ch] text-balance font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[40px]">
            {service.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
            {service.body}
          </p>
          <ul className="mt-7 max-w-[52ch] border-t border-[#deded8]">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 border-b border-[#e6e6e1] py-2.5 text-[14px] leading-6 text-[#181811] sm:text-[15px]"
              >
                <Check size={16} aria-hidden="true" className="mt-1 shrink-0 text-[#00b8ad]" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={service.proof.href}
            className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-[#006f68] transition hover:text-[#181811]"
          >
            {service.proof.label}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <ServiceMedia service={service} />
      </div>
    </section>
  );
}

function ServiceMedia({ service }: { service: Service }) {
  const { media } = service;

  if (media.kind === "web") {
    return (
      <BrowserFrame domain={media.domain}>
        <Image
          src={media.still.src}
          alt={media.still.alt}
          width={media.still.width}
          height={media.still.height}
          sizes="(min-width: 1024px) 580px, 100vw"
          className="block h-auto w-full"
        />
      </BrowserFrame>
    );
  }

  // Two phones side by side at the height a browser frame would take.
  return (
    <div className="flex items-end justify-center gap-[6%]">
      {media.stills.map((still, index) => (
        <div
          key={still.src}
          className={`w-[36%] max-w-[210px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.24)] ${index === 1 ? "mb-[8%]" : ""}`}
        >
          <PhoneFrame>
            <Image src={still.src} alt={still.alt} fill sizes="210px" className="object-cover" />
          </PhoneFrame>
        </div>
      ))}
    </div>
  );
}

// The homepage promise "Launch inklusive", as the five steps it takes.
function LaunchSteps() {
  return (
    <section className="border-t border-[#deded8]">
      <div className="reveal-on-scroll mx-auto w-full max-w-[1180px] px-6 py-14 sm:px-8 lg:px-10 lg:py-20">
        <h2 className="font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[40px]">
          Launch inklusive.
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
          Von der ersten Nachricht bis nach dem Go-live: ein Ansprechpartner für den ganzen Weg.
        </p>
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {launchSteps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-[#00b8ad] pt-4">
              <span className="text-[14px] font-medium tabular-nums text-[#006f68]">
                {index + 1}
              </span>
              <h3 className="mt-2 text-[18px] font-semibold leading-snug tracking-[-0.01em] text-[#181811]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-[#5f5f56]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
