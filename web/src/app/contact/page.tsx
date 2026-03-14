import { Suspense } from "react";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { SectionHeading } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, Clock, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export const metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Pragyan AI. Book a free consultation, discuss your AI needs, or learn how we can transform your business with intelligent automation.",
  path: "/contact",
  keywords: ["contact Pragyan AI", "AI consultation", "AI solutions India"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            title="Let's Build Something Intelligent"
            subtitle="Ready to explore what AI can do for your business? Get in touch — we'd love to hear from you."
            gradient="gold-cyan"
          />
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="glass rounded-2xl p-8 animate-pulse h-96" />}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Phone */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href={`tel:+91${SITE_CONFIG.phone}`}
                    className="text-cyan hover:text-cyan-light transition-colors text-lg font-heading font-semibold"
                  >
                    {SITE_CONFIG.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-cyan hover:text-cyan-light transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Business hours */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-light" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-foreground-muted text-sm">Monday – Saturday</p>
                  <p className="text-foreground-muted text-sm">9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-cyan hover:border-cyan/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-cyan hover:border-cyan/30 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
