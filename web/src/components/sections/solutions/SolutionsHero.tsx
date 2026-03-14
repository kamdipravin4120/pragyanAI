"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function SolutionsHero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.06)_0%,transparent_60%)]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
          AI Solutions That Drive Results
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-6 text-lg text-foreground-muted max-w-2xl mx-auto">
          From intelligent automation to strategic consulting, discover how Pragyan AI transforms enterprises with ethical, scalable AI solutions.
        </motion.p>
      </motion.div>
    </section>
  );
}
