"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { fadeInUp } from "@/lib/animations";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas").then((m) => ({ default: m.HeroCanvas })),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroCanvas />

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
          }}
          className="space-y-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight"
          >
            <span className="gradient-text">Awakening Intelligence</span>
            <br />
            <span className="text-foreground">for the AI-Driven World</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-foreground-muted"
          >
            We blend timeless wisdom with modern artificial intelligence to build
            ethical, scalable, and outcome-driven AI solutions that transform enterprises.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button href="/solutions" size="lg">
              Explore AI Solutions
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book Free Consultation
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-foreground-muted/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
