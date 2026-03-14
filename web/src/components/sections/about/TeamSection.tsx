"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const team = [
  { name: "Coming Soon", title: "CEO & Founder", initials: "CS" },
  { name: "Coming Soon", title: "CTO", initials: "CS" },
  { name: "Coming Soon", title: "Head of AI", initials: "CS" },
  { name: "Coming Soon", title: "Head of Product", initials: "CS" },
];

export function TeamSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Our Team"
          subtitle="A team of AI engineers, business strategists, and domain experts building the future of intelligent systems."
        />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {team.map((member, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan/20 to-purple/20 border border-white/10 flex items-center justify-center mb-4">
                <span className="text-xl font-heading font-bold text-foreground-muted">{member.initials}</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-foreground-muted">{member.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
