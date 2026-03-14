"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "default" | "featured" | "outlined";
  hover?: "glow" | "lift" | "none";
  children: React.ReactNode;
}

export function Card({ variant = "default", hover = "glow", className, children, ...props }: CardProps) {
  const variantClasses = {
    default: "glass rounded-2xl p-6",
    featured: "glass rounded-2xl p-6 border-cyan/30",
    outlined: "border border-white/10 rounded-2xl p-6 bg-transparent",
  };

  const hoverClasses = {
    glow: "hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]",
    lift: "hover:-translate-y-1 hover:border-cyan/20",
    none: "",
  };

  return (
    <motion.div
      className={cn(
        "transition-all duration-300",
        variantClasses[variant],
        hoverClasses[hover],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
