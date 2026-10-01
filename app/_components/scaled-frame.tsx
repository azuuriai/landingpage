"use client";

import { useEffect, useRef, useState } from "react";

// A live page shown at a fixed virtual viewport (e.g. 1280 × 800 for a
// laptop, 390 × 844 for a phone) and scaled down to the frame's width, so
// the page's own breakpoints decide the layout. Display only: it cannot be
// focused or clicked; the draft opens full size through a separate link.
export function ScaledFrame({
  src,
  title,
  width,
  height,
}: {
  src: string;
  title: string;
  width: number;
  height: number;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const node = box.current;
    if (!node) return;
    const update = () => setScale(node.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={box}
      className="relative h-full w-full overflow-hidden"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {scale > 0 ? (
        <iframe
          src={src}
          title={title}
          tabIndex={-1}
          loading="eager"
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{ width, height, transform: `scale(${scale})` }}
        />
      ) : null}
    </div>
  );
}
