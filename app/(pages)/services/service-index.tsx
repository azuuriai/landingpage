import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { services, type Service } from "@/app/services-data";

// Right half of the Leistungen hero: the three product forms as jump links
// to their sections, each with a still from the project that proves it.
export function ServiceIndex() {
  return (
    <nav aria-label="Leistungen" className="w-full lg:h-full lg:w-[440px]">
      <ul className="flex flex-col gap-3 lg:h-full">
        {services.map((service) => (
          <li key={service.id} className="lg:flex-1">
            <a
              href={`#${service.id}`}
              className="ui-row ui-row--card flex h-full items-center gap-5 border border-[#181811]/10 bg-white/50 p-3"
            >
              <Thumbnail service={service} />
              <span className="min-w-0">
                <span className="block font-display text-[21px] font-semibold leading-tight tracking-[-0.02em] text-[#181811]">
                  {service.name}
                </span>
                <span className="mt-1 block text-[14px] leading-5 text-[#6c6c61]">
                  {service.teaser}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Thumbnail({ service }: { service: Service }) {
  const { media } = service;

  return (
    <span className="relative flex aspect-[16/10] w-[140px] shrink-0 justify-center overflow-hidden rounded-md border border-[#181811]/10 bg-[#e9e9e4] lg:w-[168px]">
      {media.kind === "web" ? (
        <Image
          src={media.thumb.src}
          alt=""
          fill
          sizes={media.thumb.zoomFocus ? "304px" : "168px"}
          className={`object-cover ${media.thumb.zoomFocus ? "scale-[1.8]" : ""}`}
          style={media.thumb.zoomFocus ? { transformOrigin: media.thumb.zoomFocus } : undefined}
        />
      ) : (
        <PhoneFrame className="mt-[8%] h-[150%] shrink-0">
          <Image src={media.stills[0].src} alt="" fill sizes="60px" className="object-cover" />
        </PhoneFrame>
      )}
    </span>
  );
}
