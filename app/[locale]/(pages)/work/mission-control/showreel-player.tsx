"use client";

import { useRef, useState, type CSSProperties } from "react";
import { Play } from "lucide-react";
import { PRIMARY_BUTTON } from "@/app/_components/button-styles";
import type { Recording } from "@/app/media";

// The showreel carries a voice and music, so it never starts by itself. Until
// the visitor starts it, the title still shows with one button in the site's
// style (drawn frame, white text on the dark film) in the lower left, where
// the film's own captions sit; after that the browser's controls take over.
export function ShowreelPlayer({
  recording,
  label,
  playLabel,
}: {
  recording: Recording;
  label: string;
  playLabel: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  // The controls go on before playback starts: Chrome may pause a video that
  // starts playing without controls and only gets them on the next render.
  const start = () => {
    const video = ref.current;
    setStarted(true);
    if (!video) return;
    video.controls = true;
    video.play().catch(() => undefined);
  };

  return (
    <div className="relative overflow-hidden rounded-[12px] border border-[#181811]/10 bg-[#0a1338] shadow-[0_34px_90px_-40px_rgba(17,18,17,0.45)]">
      <video
        ref={ref}
        className="block aspect-video h-auto w-full"
        src={recording.src}
        poster={recording.poster}
        preload="metadata"
        controls={started}
        playsInline
        aria-label={label}
      />
      {started ? null : (
        <div
          className="absolute inset-0 flex cursor-pointer items-end p-3 sm:p-6"
          onClick={start}
        >
          <span className="rounded-[8px] bg-[#050a24]/55 backdrop-blur-sm">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                start();
              }}
              className={`${PRIMARY_BUTTON} max-sm:h-10 max-sm:px-4 max-sm:text-[14px]`}
              style={{ "--ink": "#ffffff" } as CSSProperties}
            >
              <Play size={15} aria-hidden="true" className="fill-current" />
              {playLabel}
            </button>
          </span>
        </div>
      )}
    </div>
  );
}
