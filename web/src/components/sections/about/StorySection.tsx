"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function StorySection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInLeft}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            The Meaning of <span className="gradient-text-gold">Pragyan</span>
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Pragyan (&#x092A;&#x094D;&#x0930;&#x091C;&#x094D;&#x091E;&#x093E;&#x0928;)</strong> is a Sanskrit word meaning
              &ldquo;supreme knowledge&rdquo; or &ldquo;awakened intelligence&rdquo;. It represents the
              highest form of understanding — wisdom that comes from deep insight and awareness.
            </p>
            <p>
              We founded Pragyan AI with a singular vision: to blend this timeless pursuit of wisdom with
              the transformative power of modern artificial intelligence. We believe AI should not replace
              human judgment but augment it — making organizations smarter, faster, and more ethical.
            </p>
            <p>
              Based in India and serving clients globally, we are building a next-generation AI platform
              that combines advanced AI systems with practical business applications into a scalable
              ecosystem.
            </p>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInRight}>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan/10 to-purple/10 border border-white/10 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl mb-4 font-heading font-bold gradient-text-gold">&#x092A;&#x094D;&#x0930;&#x091C;&#x094D;&#x091E;&#x093E;&#x0928;</div>
                <p className="text-foreground-muted text-sm">Supreme Knowledge &#x2022; Awakened Intelligence</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple/5 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
