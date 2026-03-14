"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, Badge, Button } from "@/components/ui";
import { useCases, industries } from "@/data/useCases";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function UseCasesContent() {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered =
    activeIndustry === "All"
      ? useCases
      : useCases.filter((uc) => uc.industry === activeIndustry);

  return (
    <>
      {/* Industry filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setActiveIndustry(industry)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeIndustry === industry
                ? "bg-cyan text-background glow-cyan"
                : "bg-white/5 text-foreground-muted border border-white/10 hover:border-cyan/30 hover:text-foreground"
            }`}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Use case cards */}
      <motion.div
        key={activeIndustry}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((uc) => (
          <motion.div key={uc.id} variants={fadeInUp}>
            <Card hover="glow" className="h-full flex flex-col">
              <Badge className="mb-4 w-fit">{uc.industry}</Badge>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {uc.title}
              </h3>

              <div className="mb-3">
                <p className="text-xs font-semibold text-cyan uppercase tracking-wider mb-1">Challenge</p>
                <p className="text-sm text-foreground-muted line-clamp-3">{uc.challenge}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">Solution</p>
                <p className="text-sm text-foreground-muted line-clamp-3">{uc.solution}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="grid grid-cols-3 gap-2">
                  {uc.results.map((r) => (
                    <div key={r.metric} className="text-center">
                      <p className="text-lg font-heading font-bold text-cyan">{r.value}</p>
                      <p className="text-[10px] text-foreground-muted leading-tight">{r.metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
