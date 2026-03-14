"use client";

import { motion } from "framer-motion";
import { Card, SectionHeading } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Target, Layers, Lightbulb, Eye, Users } from "lucide-react";

const values = [
  { icon: Shield, title: "Ethics First", description: "Every AI system we build respects privacy, ensures fairness, and operates with full transparency." },
  { icon: Target, title: "Results Driven", description: "We measure success by the measurable impact our solutions deliver to your business." },
  { icon: Layers, title: "Built to Scale", description: "Our architecture grows with you — from proof of concept to enterprise-wide deployment." },
  { icon: Lightbulb, title: "Innovation", description: "We stay at the forefront of AI research, continuously integrating breakthrough technologies." },
  { icon: Eye, title: "Transparency", description: "We believe in explainable AI — our clients understand how and why our systems make decisions." },
  { icon: Users, title: "Customer First", description: "Your success is our success. We build long-term partnerships, not just vendor relationships." },
];

export function ValuesSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we build." gradient="gold-cyan" />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeInUp}>
              <Card hover="lift" className="h-full">
                <v.icon className="w-8 h-8 text-cyan mb-3" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-foreground-muted">{v.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
