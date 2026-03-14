"use client";

import { motion } from "framer-motion";
import { Card, SectionHeading } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Target, Layers } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ethical AI",
    description: "We build transparent, explainable AI systems that respect privacy, ensure fairness, and operate with integrity. Every solution is designed with responsible AI principles at its core.",
  },
  {
    icon: Target,
    title: "Practical AI",
    description: "Our AI solutions deliver measurable ROI from day one. We focus on real-world results — not theoretical possibilities — ensuring every implementation drives tangible business value.",
  },
  {
    icon: Layers,
    title: "Scalable AI",
    description: "Built for growth, our AI infrastructure scales seamlessly from MVP to enterprise deployment. Start small, prove value, and expand with confidence across your organization.",
  },
];

export function WhyPragyanSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Why Pragyan AI"
          subtitle="We combine deep AI expertise with practical business understanding to deliver solutions that matter."
          gradient="gold-cyan"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={fadeInUp}>
              <Card hover="lift" className="text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
