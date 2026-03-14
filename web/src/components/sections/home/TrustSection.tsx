"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { target: 50, suffix: "+", label: "Projects Delivered" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 24, suffix: "/7", label: "AI Uptime" },
  { target: 10, suffix: "+", label: "Industries Served" },
];

export function TrustSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} className="text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-foreground-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client logos marquee placeholder */}
        <div className="mt-16 overflow-hidden">
          <p className="text-center text-sm text-foreground-muted mb-8">Trusted by forward-thinking organizations</p>
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-32 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs text-foreground-muted/50"
              >
                Logo {(i % 5) + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
