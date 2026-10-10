import type { ReactNode } from "react";

// The homepage's desktop display: a thin-bezel aluminium monitor on a tilt
// stand. The chassis is CSS (globals.css, "Monitor"), the stand an inline
// SVG, so both stay crisp at every size and pixel density. Every length is a
// fraction of the display's width (cqw in the CSS, viewBox units here), so
// the proportions never drift. The screen keeps the 16:10 of the recordings;
// `className` reaches the chassis, e.g. for the focus ring.
//
// Light comes from the top left, like the page's own backdrop: the arm's left
// edge catches it, the plate's top surface is lit, its front edge is not.
export function MonitorFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="monitor">
      <div className={`monitor-rim ${className}`}>
        <div className="monitor-front">
          <div className="monitor-screen">{children}</div>
        </div>
      </div>
      <svg className="monitor-stand" viewBox="0 0 100 15.4" aria-hidden="true" overflow="visible">
        <defs>
          <linearGradient id="monitor-arm" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#a1a49e" />
            <stop offset="0.05" stopColor="#cbcec8" />
            <stop offset="0.22" stopColor="#e4e6e1" />
            <stop offset="0.5" stopColor="#dadcd7" />
            <stop offset="0.82" stopColor="#bfc2bc" />
            <stop offset="1" stopColor="#8e928c" />
          </linearGradient>
          {/* The display above shades the top of the arm. */}
          <linearGradient id="monitor-arm-shade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#111211" stopOpacity="0.3" />
            <stop offset="0.35" stopColor="#111211" stopOpacity="0.06" />
            <stop offset="0.7" stopColor="#111211" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="monitor-plate" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#f2f4f0" />
            <stop offset="1" stopColor="#d5d8d2" />
          </linearGradient>
          <linearGradient id="monitor-plate-edge" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#c3c6bf" />
            <stop offset="1" stopColor="#999d96" />
          </linearGradient>
          <filter id="monitor-ambient" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="1.1" />
          </filter>
          <filter id="monitor-contact" x="-10%" y="-60%" width="120%" height="220%">
            <feGaussianBlur stdDeviation="0.32" />
          </filter>
          <clipPath id="monitor-plate-top">
            <rect x="31" y="11.7" width="38" height="1.8" rx="0.9" />
          </clipPath>
        </defs>

        {/* Shadows on the surface: soft ambient, firm contact under the plate. */}
        <ellipse cx="50" cy="14.9" rx="36" ry="2.4" fill="#111211" opacity="0.16" filter="url(#monitor-ambient)" />
        <ellipse cx="50" cy="14.5" rx="20.5" ry="0.75" fill="#111211" opacity="0.42" filter="url(#monitor-contact)" />

        {/* Arm, leaning back so it narrows a touch towards the plate, rounded
            towards its sides; its top disappears behind the display. */}
        <path d="M42.25 0h15.5v12.2a0.8 0.8 0 0 1-0.8 0.8H43.05a0.8 0.8 0 0 1-0.8-0.8z" fill="url(#monitor-arm)" />
        <path d="M42.25 0h15.5v12.2a0.8 0.8 0 0 1-0.8 0.8H43.05a0.8 0.8 0 0 1-0.8-0.8z" fill="url(#monitor-arm-shade)" />
        <rect x="42.7" y="0" width="0.45" height="12.4" fill="#ffffff" opacity="0.38" />

        {/* Plate: the front edge first, the lit top surface over it. */}
        <rect x="31" y="12.5" width="38" height="2" rx="0.9" fill="url(#monitor-plate-edge)" />
        <rect x="31" y="11.7" width="38" height="1.8" rx="0.9" fill="url(#monitor-plate)" />
        <ellipse
          cx="50"
          cy="11.95"
          rx="8.6"
          ry="0.55"
          fill="#111211"
          opacity="0.26"
          filter="url(#monitor-contact)"
          clipPath="url(#monitor-plate-top)"
        />
      </svg>
    </div>
  );
}
