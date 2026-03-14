"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.06)_0%,transparent_70%)]" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text"
        >
          Ready to Transform Your Business with AI?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-6 text-lg text-foreground-muted">
          Join forward-thinking enterprises that are leveraging Pragyan AI to automate operations, unlock insights, and drive growth.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Start Your AI Journey
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            View Pricing
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
