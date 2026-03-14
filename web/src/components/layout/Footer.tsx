import Link from "next/link";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-secondary">
      {/* Gradient top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-foreground-muted max-w-xs">
              {SITE_CONFIG.tagline}. Building ethical, intelligent, and scalable AI systems that augment human decision making.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-foreground font-heading uppercase tracking-wider">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground font-heading uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground font-heading uppercase tracking-wider">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:+91${SITE_CONFIG.phone}`} className="text-sm text-foreground-muted hover:text-cyan transition-colors">
                  {SITE_CONFIG.phoneFormatted}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-foreground-muted hover:text-cyan transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground-muted hover:text-cyan transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-center text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
