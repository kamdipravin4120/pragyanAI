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
      {variant === "wordmark" ? (
        <Image
          src="/images/logo/logo-wordmark-color.svg"
          alt="Pragyan AI - Awakening Intelligence"
          width={180}
          height={40}
          priority
        />
      ) : (
        <Image
          src="/images/logo/logo-full-color.svg"
          alt="Pragyan AI"
          width={48}
          height={48}
          priority
        />
      )}
    </Link>
  );
}
