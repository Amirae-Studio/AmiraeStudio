import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./Magnetic";

type Variant = "dark" | "light" | "outline" | "outline-light";

const VARIANTS: Record<Variant, string> = {
  dark: "bg-ink text-white hover:text-ink",
  light: "bg-white text-ink",
  outline: "border border-ink/20 text-ink hover:border-ink hover:text-white [--fill:var(--ink)]",
  "outline-light": "border border-white/25 text-white hover:border-white hover:text-ink [--fill:#fff]",
};

export function PillButton({
  href,
  children,
  variant = "dark",
  size = "md",
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "btn-fill inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-500",
    size === "lg" ? "h-16 px-10 text-lg" : "h-12 px-7 text-[15px]",
    VARIANTS[variant],
    className,
  );

  return (
    <Magnetic>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )}
    </Magnetic>
  );
}
