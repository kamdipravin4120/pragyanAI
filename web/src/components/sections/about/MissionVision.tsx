"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Crosshair, Eye } from "lucide-react";

export function MissionVision() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card variant="featured" className="h-full">
              <Crosshair className="w-10 h-10 text-cyan mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-foreground-muted leading-relaxed">
                To build ethical, intelligent, scalable AI systems that augment human decision making.
                We are committed to delivering AI that creates measurable business value while
                maintaining the highest standards of transparency and responsibility.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card variant="featured" className="h-full">
              <Eye className="w-10 h-10 text-gold mb-4" />
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-foreground-muted leading-relaxed">
                To become a global AI intelligence platform that powers businesses, developers,
                and knowledge systems. We envision a future where every organization has access
                to intelligent, ethical AI infrastructure that drives growth and innovation.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
