import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: "cyan-purple" | "gold-cyan" | "white";
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({ title, subtitle, gradient = "cyan-purple", align = "center", className }: SectionHeadingProps) {
  const gradientClasses = {
    "cyan-purple": "gradient-text",
    "gold-cyan": "gradient-text-gold",
    white: "text-white",
  };

  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", "mb-12", className)}>
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight", gradientClasses[gradient])}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
