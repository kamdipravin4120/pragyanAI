import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";
import { solutions } from "@/data/solutions";
import { SolutionsHero } from "@/components/sections/solutions/SolutionsHero";
import { SolutionDetail } from "@/components/sections/solutions/SolutionDetail";
import { SolutionsCTA } from "@/components/sections/solutions/SolutionsCTA";

export const metadata = createPageMetadata({
  title: "AI Solutions",
  description: "Explore Pragyan AI's comprehensive AI solutions: automation, chatbots, business intelligence, education AI, custom development, and consulting. Transform your business with ethical, scalable AI.",
  path: "/solutions",
  keywords: ["AI solutions", "AI automation", "AI chatbots", "business intelligence AI", "education AI", "custom AI", "AI consulting"],
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_CONFIG.url },
        { name: "Solutions", url: `${SITE_CONFIG.url}/solutions` },
      ])} />
      {solutions.map((s) => (
        <JsonLd key={s.id} data={serviceSchema(s)} />
      ))}
      <SolutionsHero />
      {solutions.map((solution, index) => (
        <SolutionDetail key={solution.id} solution={solution} index={index} />
      ))}
      <SolutionsCTA />
    </>
  );
}
