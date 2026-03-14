import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { SectionHeading, Button, Card, Badge } from "@/components/ui";
import { pricingTiers, pricingFAQs } from "@/data/pricing";
import { SITE_CONFIG } from "@/lib/constants";
import { Check } from "lucide-react";
import { PricingFAQ } from "./PricingFAQ";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "Transparent, flexible AI pricing for startups to enterprises. Explore Pragyan AI plans — Starter, Professional, Enterprise, and Custom solutions.",
  path: "/pricing",
  keywords: ["AI pricing", "enterprise AI cost", "AI solutions pricing India"],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqSchema(pricingFAQs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Pricing", url: `${SITE_CONFIG.url}/pricing` },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that fits your needs. Every plan includes our commitment to ethical, scalable AI."
          />
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              hover="glow"
              className={`flex flex-col relative ${
                tier.featured ? "border-cyan/40 glow-cyan" : ""
              }`}
            >
              {tier.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <h3 className="text-xl font-heading font-bold text-foreground">{tier.name}</h3>
              <p className="text-sm text-foreground-muted mt-1">{tier.description}</p>

              <div className="my-6">
                <span className="text-3xl font-heading font-bold text-cyan">{tier.price}</span>
                {tier.priceNote && (
                  <p className="text-xs text-foreground-muted mt-1">{tier.priceNote}</p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground-muted">
                    <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={tier.ctaHref}
                variant={tier.featured ? "primary" : "secondary"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our pricing and plans."
          />
          <PricingFAQ />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text-gold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-foreground-muted mb-8">
            Talk to our team and get a personalized recommendation based on your needs.
          </p>
          <Button href="/contact" size="lg">Schedule a Consultation</Button>
        </div>
      </section>
    </>
  );
}
