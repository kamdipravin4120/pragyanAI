import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "icon" | "wordmark";
  className?: string;
}

export function Logo({ variant = "wordmark", className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image
        src="/images/logo/logo.png"
        alt="Pragyan AI"
        width={variant === "wordmark" ? 40 : 48}
        height={variant === "wordmark" ? 40 : 48}
        priority
      />
      {variant === "wordmark" && (
        <span className="font-heading font-bold text-lg tracking-wide">
          <span className="text-cyan">PRAGYAN</span>{" "}
          <span className="text-gold">AI</span>
        </span>
      )}
    </Link>
  );
}
