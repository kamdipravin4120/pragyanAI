import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { StorySection } from "@/components/sections/about/StorySection";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { ValuesSection } from "@/components/sections/about/ValuesSection";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { TimelineSection } from "@/components/sections/about/TimelineSection";

export const metadata = createPageMetadata({
  title: "About Pragyan AI",
  description: "Learn about Pragyan AI — our mission to build ethical, intelligent, scalable AI systems that augment human decision making. Discover our story, values, and team.",
  path: "/about",
  keywords: ["about Pragyan AI", "AI company India", "ethical AI", "AI team"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: SITE_CONFIG.url },
        { name: "About", url: `${SITE_CONFIG.url}/about` },
      ])} />
      <AboutHero />
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
    </>
  );
}
