export interface PricingTier {
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  featured?: boolean;
  cta: string;
  ctaHref: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    description: "For small teams exploring AI capabilities",
    price: "Contact Us",
    priceNote: "Custom pricing based on requirements",
    cta: "Get Started",
    ctaHref: "/contact?plan=starter",
    features: [
      "1 AI solution",
      "Up to 1,000 API calls/month",
      "Email support",
      "Basic analytics dashboard",
      "Standard SLA",
      "Community access",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses scaling AI operations",
    price: "Contact Us",
    priceNote: "Volume-based pricing",
    featured: true,
    cta: "Get Started",
    ctaHref: "/contact?plan=professional",
    features: [
      "Up to 3 AI solutions",
      "Up to 10,000 API calls/month",
      "Priority email & chat support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Dedicated account manager",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex AI needs",
    price: "Custom",
    priceNote: "Tailored enterprise pricing",
    cta: "Contact Sales",
    ctaHref: "/contact?plan=enterprise",
    features: [
      "All AI solutions",
      "Unlimited API calls",
      "24/7 phone & chat support",
      "Custom model training",
      "On-premise deployment option",
      "Dedicated engineering team",
      "Enterprise SLA with guarantees",
      "Security & compliance review",
    ],
  },
  {
    name: "Custom",
    description: "Unique requirements? Let's build together",
    price: "Let's Talk",
    priceNote: "Fully customized engagement",
    cta: "Schedule Consultation",
    ctaHref: "/contact?plan=custom",
    features: [
      "Bespoke AI development",
      "Full platform access",
      "Custom infrastructure",
      "White-label options",
      "Dedicated AI team",
      "Flexible engagement models",
      "Custom SLA",
      "IP ownership options",
    ],
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const pricingFAQs: FAQ[] = [
  {
    question: "How does Pragyan AI pricing work?",
    answer: "Our pricing is tailored to your specific needs and usage. We offer flexible plans based on the number of AI solutions, API call volume, and level of support required. Contact us for a custom quote that fits your budget and requirements.",
  },
  {
    question: "Do you offer a free trial or proof of concept?",
    answer: "Yes, we offer a complimentary consultation and can arrange proof-of-concept engagements for qualified enterprises. This allows you to see the value of our AI solutions before committing to a plan.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or adjust your plan at any time as your needs evolve. Our team will help ensure a smooth transition with zero downtime.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "Support ranges from email support on our Starter plan to 24/7 phone and chat support with a dedicated engineering team on our Enterprise plan. All plans include access to our knowledge base and documentation.",
  },
  {
    question: "Do you offer on-premise deployment?",
    answer: "Yes, on-premise and hybrid deployment options are available on our Enterprise and Custom plans. We can work with your infrastructure requirements to ensure data sovereignty and compliance.",
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation timelines vary based on complexity. Simple chatbot deployments can be live in 2-4 weeks, while custom enterprise solutions typically take 2-3 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, education, retail, manufacturing, technology, and government. Our AI solutions are adaptable to virtually any industry vertical.",
  },
  {
    question: "Is my data secure with Pragyan AI?",
    answer: "Data security is our top priority. We implement enterprise-grade encryption, comply with SOC2 and GDPR standards, and offer data residency options. Your data is never used to train models for other clients.",
  },
];
