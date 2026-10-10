import { JsonLd } from "@/app/_components/site-chrome";
import { HomeSpread } from "@/app/_home/home-spread";
import { resolveLocale, type LocaleParams } from "@/app/locale";
import { structuredData } from "@/app/seo";

export default async function Home(props: LocaleParams) {
  const locale = await resolveLocale(props);

  return (
    <>
      <JsonLd data={structuredData(locale)} />
      <HomeSpread locale={locale} />
    </>
  );
}
