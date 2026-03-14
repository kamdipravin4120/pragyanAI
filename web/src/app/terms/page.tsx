import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Pragyan AI Terms of Service — terms governing the use of our platform and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Terms of Service", url: `${SITE_CONFIG.url}/terms` },
        ])}
      />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-foreground-muted text-sm mb-12">Last updated: March 2026</p>

          <div className="space-y-8 text-foreground-muted text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the Pragyan AI website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. Description of Services</h2>
              <p>Pragyan AI provides artificial intelligence solutions including AI automation, chatbots, business intelligence, education AI, custom AI development, and consulting services. Specific service terms may be governed by separate agreements.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. User Obligations</h2>
              <p>You agree to provide accurate information when using our services, use our services only for lawful purposes, not attempt to gain unauthorized access to our systems, not interfere with the proper functioning of our services, and comply with all applicable laws and regulations.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>All content, technology, and materials on this website are owned by or licensed to Pragyan AI. You may not reproduce, distribute, or create derivative works without our written consent. Custom solutions developed for clients are governed by individual service agreements.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>Pragyan AI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Indemnification</h2>
              <p>You agree to indemnify and hold Pragyan AI harmless from any claims, damages, or expenses arising from your use of our services or violation of these terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">7. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">8. Termination</h2>
              <p>We reserve the right to suspend or terminate your access to our services at any time for violations of these terms or any other reason at our discretion.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">9. Changes to Terms</h2>
              <p>We may modify these Terms at any time. Continued use of our services after changes constitutes acceptance. We encourage you to review these terms periodically.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">10. Contact</h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <ul className="mt-2 space-y-1">
                <li>Phone: <a href={`tel:+91${SITE_CONFIG.phone}`} className="text-cyan hover:text-cyan-light">{SITE_CONFIG.phoneFormatted}</a></li>
                <li>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan hover:text-cyan-light">{SITE_CONFIG.email}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
