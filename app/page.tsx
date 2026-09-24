import { HomeSpread } from "./_home/home-spread";
import { JsonLd } from "./_components/site-chrome";
import { structuredData } from "./seo";

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <HomeSpread />
    </>
  );
}
