"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SolutionsCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading font-bold gradient-text">
          Not Sure Which Solution Fits?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-lg text-foreground-muted">
          Book a free consultation with our AI experts. We&apos;ll analyze your needs and recommend the right approach.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8">
          <Button href="/contact" size="lg">
            Book Free Consultation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
