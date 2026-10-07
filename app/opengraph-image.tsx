import { ImageResponse } from "next/og";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getContent } from "./content";
import { OG_IMAGE_SIZE } from "./seo";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

// One image per language, served at /opengraph-image/de and
// /opengraph-image/en (see ogImage() in app/seo.ts).
export function generateImageMetadata() {
  return routing.locales.map((locale) => ({
    id: locale,
    alt: getContent(locale).site.ogImageAlt,
    size,
    contentType,
  }));
}

export default function Image({ id }: { id: string }) {
  const locale = hasLocale(routing.locales, id) ? id : routing.defaultLocale;
  const { site } = getContent(locale);

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
          <div style={{ color: "#06857c" }}>{site.og.location}</div>
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
            {site.og.headline}
          </div>
          <div
            style={{
              maxWidth: 760,
              color: "#54544c",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            {site.ogDescription}
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
          {site.og.stack}
        </div>
      </div>
    ),
    size,
  );
}
