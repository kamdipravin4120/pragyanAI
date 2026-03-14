import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { serviceSchema } from "@/lib/schema";
import { solutions } from "@/data/solutions";
import {
  HeroSection,
  SolutionsOverview,
  TrustSection,
  WhyPragyanSection,
  TestimonialsSection,
  CTASection,
} from "@/components/sections/home";

export const metadata = createPageMetadata({
  title: "Pragyan AI - Awakening Intelligence",
  description:
    "Pragyan AI is a next-generation AI company providing ethical, scalable AI solutions including automation, chatbots, business intelligence, and consulting for enterprises.",
  keywords: [
    "AI platform",
    "enterprise AI",
    "AI chatbots India",
    "business intelligence AI",
    "AI consulting India",
    "AI automation",
  ],
});

export default function HomePage() {
  return (
    <>
      {solutions.map((s) => (
        <JsonLd key={s.id} data={serviceSchema(s)} />
      ))}
      <HeroSection />
      <SolutionsOverview />
      <TrustSection />
      <WhyPragyanSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
