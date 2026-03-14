"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const milestones = [
  { phase: "Phase 1", title: "Foundation", description: "Website launch, AI consulting services, and knowledge platform development.", status: "current" },
  { phase: "Phase 2", title: "Core Products", description: "Launch Business Copilot, AI chatbot platform, and Knowledge AI platform.", status: "upcoming" },
  { phase: "Phase 3", title: "AI Platform", description: "Release agent platform, developer APIs, and AI automation tools.", status: "upcoming" },
  { phase: "Phase 4", title: "AI Ecosystem", description: "Full platform launch with AI marketplace, plugin ecosystem, and developer community.", status: "upcoming" },
];

export function TimelineSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Our Journey" subtitle="The roadmap to building a global AI intelligence platform." />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <motion.div
                key={m.phase}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: i * 0.15, duration: 0.6 } } }}
                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Dot */}
                <div className={`absolute left-2.5 md:left-1/2 w-3 h-3 rounded-full border-2 md:-translate-x-1.5 ${m.status === "current" ? "bg-cyan border-cyan glow-cyan" : "bg-background border-white/30"}`} />

                <div className={i % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider">{m.phase}</span>
                  <h3 className="text-xl font-heading font-semibold text-foreground mt-1">{m.title}</h3>
                  <p className="text-sm text-foreground-muted mt-2">{m.description}</p>
                  {m.status === "current" && (
                    <span className="inline-block mt-2 text-xs text-cyan border border-cyan/30 rounded-full px-2 py-0.5">Current Phase</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
