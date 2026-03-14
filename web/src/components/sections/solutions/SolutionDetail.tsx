"use client";

import { motion } from "framer-motion";
import { Card, Button, Badge } from "@/components/ui";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, MessageSquare, BarChart3, GraduationCap, Wrench, Lightbulb, Check } from "lucide-react";
import type { Solution } from "@/data/solutions";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, MessageSquare, BarChart3, GraduationCap, Wrench, Lightbulb,
};

interface SolutionDetailProps {
  solution: Solution;
  index: number;
}

export function SolutionDetail({ solution, index }: SolutionDetailProps) {
  const { ref, isInView } = useScrollAnimation();
  const Icon = iconMap[solution.icon];
  const isEven = index % 2 === 0;

  return (
    <section
      id={solution.id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${index % 2 === 1 ? "bg-background-secondary" : ""}`}
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:direction-rtl" : ""}`}
          style={!isEven ? { direction: "rtl" } : {}}
        >
          <motion.div variants={isEven ? fadeInLeft : fadeInRight} style={{ direction: "ltr" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                {Icon && <Icon className="w-6 h-6 text-cyan" />}
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground">{solution.title}</h2>
            </div>

            <p className="text-foreground-muted leading-relaxed mb-6">{solution.description}</p>

            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Capabilities</h3>
            <ul className="space-y-2 mb-6">
              {solution.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-sm text-foreground-muted">
                  <Check className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                  {cap}
                </li>
              ))}
            </ul>

            <Button href={`/contact?solution=${solution.id}`}>
              Get Started with {solution.title}
            </Button>
          </motion.div>

          <motion.div variants={isEven ? fadeInRight : fadeInLeft} style={{ direction: "ltr" }}>
            <Card variant="featured" className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Use Cases</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.useCases.map((uc) => (
                    <Badge key={uc} variant="cyan">{uc}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Business Impact</h3>
                <ul className="space-y-2">
                  {solution.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground-muted">
                      <span className="text-gold">&#9679;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
