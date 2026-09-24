import { ImageResponse } from "next/og";
import { OG_DESCRIPTION, OG_IMAGE } from "./seo";

export const alt = OG_IMAGE.alt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f2f0",
          color: "#181811",
          padding: "70px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 0,
          }}
        >
          <div style={{ fontWeight: 700 }}>Lukas Kaffer</div>
          <div style={{ color: "#06857c" }}>Vienna, AT</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              maxWidth: 980,
              fontSize: 68,
              lineHeight: 0.96,
              fontWeight: 760,
              letterSpacing: 0,
            }}
          >
            Websites, Webprodukte und native iOS Apps, gebaut bis zum Launch.
          </div>
          <div
            style={{
              maxWidth: 760,
              color: "#54544c",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            {OG_DESCRIPTION}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#6c6c61",
            fontSize: 24,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#00b8ad",
            }}
          />
          Astro · Next.js · Sanity · SwiftUI
        </div>
      </div>
    ),
    size,
  );
}
