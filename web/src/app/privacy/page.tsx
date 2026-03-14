import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Pragyan AI Privacy Policy — how we collect, use, and protect your data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Privacy Policy", url: `${SITE_CONFIG.url}/privacy` },
        ])}
      />

      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-foreground-muted text-sm mb-12">Last updated: March 2026</p>

          <div className="space-y-8 text-foreground-muted text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly, including your name, email address, phone number, company name, and any messages you submit through our contact forms. We also collect usage data such as IP addresses, browser type, pages visited, and interaction patterns through analytics tools.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>We use your information to respond to inquiries and provide requested services, improve our website and AI solutions, send relevant communications about our services (with your consent), analyze usage patterns to enhance user experience, and comply with legal obligations.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">3. Data Security</h2>
              <p>We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. While no method of transmission is 100% secure, we strive to use commercially acceptable means to protect your information.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">4. Third-Party Services</h2>
              <p>We may use third-party analytics, hosting, and communication services. These providers have their own privacy policies governing the use of your information. We do not sell your personal data to third parties.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">5. Cookies</h2>
              <p>Our website uses cookies and similar technologies to improve functionality and analyze usage. You can control cookie preferences through your browser settings. Essential cookies are required for basic site functionality.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data, opt out of marketing communications, request data portability, and lodge a complaint with a data protection authority. To exercise these rights, contact us using the details below.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">7. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">9. Contact Us</h2>
              <p>For questions about this Privacy Policy or your data, contact us at:</p>
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
