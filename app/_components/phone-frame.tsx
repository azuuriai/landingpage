import type { ReactNode } from "react";
import Image from "next/image";

// Apple's iPhone 17 Pro marketing bezel (1350 × 2760) with its 1206 × 2622
// display cut-out at (72, 69). The screen content sits underneath, clipped to
// the rounded display shape by a mask traced from the bezel's own alpha, so no
// rectangular corner can peek out behind the frame. The mask PNG must carry
// the shape in its alpha channel: CSS masks ignore brightness.
const SCREEN_MASK = "url(/devices/iphone-17-pro-screen-mask.png)";

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[1350/2760] ${className}`}>
      <div
        className="absolute left-[5.333%] top-[2.5%] h-[95%] w-[89.333%] overflow-hidden bg-[#fbf9f7]"
        style={{
          maskImage: SCREEN_MASK,
          WebkitMaskImage: SCREEN_MASK,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      >
        {children}
      </div>
      {/* Served as-is: re-encoding has dropped this PNG's alpha channel before. */}
      <Image
        src="/devices/iphone-17-pro-frame.png"
        alt=""
        width={675}
        height={1380}
        unoptimized
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
      />
    </div>
  );
}
