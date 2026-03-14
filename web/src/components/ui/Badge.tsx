import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "gold" | "purple" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    cyan: "bg-cyan/10 text-cyan border-cyan/20",
    gold: "bg-gold/10 text-gold border-gold/20",
    purple: "bg-purple/10 text-purple-light border-purple/20",
    default: "bg-white/5 text-foreground-muted border-white/10",
  };

  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border", variants[variant], className)}>
      {children}
    </span>
  );
}
