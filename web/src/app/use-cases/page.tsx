import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { UseCasesContent } from "./UseCasesContent";

export const metadata = createPageMetadata({
  title: "Use Cases",
  description:
    "Explore real-world AI success stories across industries. See how Pragyan AI solutions drive measurable results in customer support, sales, HR, operations, and education.",
  path: "/use-cases",
  keywords: ["AI use cases", "AI case studies", "enterprise AI results", "AI ROI"],
});

export default function UseCasesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Use Cases", url: `${SITE_CONFIG.url}/use-cases` },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            title="Real-World AI Impact"
            subtitle="Discover how organizations across industries are leveraging Pragyan AI to solve complex challenges, automate operations, and drive measurable growth."
          />
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <UseCasesContent />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-foreground-muted mb-8">
            Let&apos;s discuss how Pragyan AI can deliver similar results for your organization.
          </p>
          <Button href="/contact" size="lg">Book Free Consultation</Button>
        </div>
      </section>
    </>
  );
}
