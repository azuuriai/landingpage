import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PRIMARY_BUTTON } from "@/app/_components/button-styles";
import { getContent } from "@/app/content";

// The 404 for every path that no page matches ([...rest]/page.tsx throws
// notFound()). It renders inside the (pages) layout, so header and footer
// come from there and the hero stays empty: no navigation page matches the
// path. Next answers such dynamic 404s with its bare error shell and lets
// the browser render this tree, so the first HTML carries neither the
// content nor <html lang>; only the hydrated page does. A server-rendered
// 404 would need Next's experimental global-not-found.
export default async function NotFound() {
  const { ui } = getContent(await getLocale());

  return (
    <section className="mx-auto w-full max-w-[1180px] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">404</p>
      <h1 className="mt-4 max-w-[16ch] text-pretty font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[56px]">
        {ui.notFound.title}
      </h1>
      <p className="mt-5 max-w-[52ch] text-[16px] leading-7 text-[#6c6c61] sm:text-[18px] sm:leading-8">
        {ui.notFound.text}
      </p>
      <Link href="/" className={`${PRIMARY_BUTTON} mt-8`}>
        {ui.backHome}
      </Link>
    </section>
  );
}
