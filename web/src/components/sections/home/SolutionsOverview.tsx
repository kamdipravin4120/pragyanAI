"use client";

import { motion } from "framer-motion";
import { Card, SectionHeading, Button } from "@/components/ui";
import { solutions } from "@/data/solutions";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Zap, MessageSquare, BarChart3, GraduationCap, Wrench, Lightbulb,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, MessageSquare, BarChart3, GraduationCap, Wrench, Lightbulb,
};

export function SolutionsOverview() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="AI Solutions That Drive Results"
          subtitle="From intelligent automation to strategic consulting, we deliver AI solutions that create measurable business impact."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => {
            const Icon = iconMap[solution.icon];
            return (
              <motion.div key={solution.id} variants={fadeInUp}>
                <Card hover="glow" className="h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-cyan" />}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-foreground-muted text-sm flex-1">
                    {solution.shortDescription}
                  </p>
                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      href={`/solutions#${solution.id}`}
                      className="text-cyan hover:text-cyan-light p-0"
                    >
                      Learn More →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
