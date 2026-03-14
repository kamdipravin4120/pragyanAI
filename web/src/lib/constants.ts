export const SITE_CONFIG = {
  name: "Pragyan AI",
  tagline: "Awakening Intelligence",
  description: "Pragyan AI is a next-generation artificial intelligence company providing ethical, scalable, and outcome-driven AI solutions for enterprises.",
  url: "https://pragyanai.in",
  phone: "8356919181",
  phoneFormatted: "+91 83569 19181",
  email: "contact@pragyanai.in",
  logo: "/images/logo/logo.png",
  ogImage: "/images/og/og-default.png",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_LINKS = {
  solutions: [
    { label: "AI Automation", href: "/solutions#ai-automation" },
    { label: "AI Chatbots", href: "/solutions#ai-chatbots" },
    { label: "Business Intelligence", href: "/solutions#business-intelligence" },
    { label: "Education AI", href: "/solutions#education-ai" },
    { label: "Custom AI Solutions", href: "/solutions#custom-ai" },
    { label: "AI Consulting", href: "/solutions#ai-consulting" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
