import Image from "next/image";

export function SiteLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/logo-mark.svg"
        alt=""
        width={160}
        height={160}
        priority={priority}
        className="h-[38px] w-[38px] shrink-0 sm:h-[41px] sm:w-[41px]"
      />
      <span className="relative pb-2 font-sans text-[18px] font-bold leading-none tracking-[-0.035em] text-[#181811] sm:text-[20px]">
        Lukas <span className="text-[#006f68]">Kaffer</span>
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full rounded-full bg-[#00b8ad]/55"
        />
      </span>
    </span>
  );
}
