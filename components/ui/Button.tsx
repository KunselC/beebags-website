import Link from "next/link";
import { cn } from "@/lib/utils";

// `accent` (Honey) is the single highlighted CTA — use at most once per page.
type Variant = "solid" | "accent" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-forest";

const variants: Record<Variant, string> = {
  solid: "bg-forest text-paper hover:bg-forest/90",
  accent: "bg-honey text-forest hover:brightness-95",
  outline: "border border-forest/30 text-forest hover:border-forest hover:bg-forest/5",
};

export function Button({
  href,
  variant = "solid",
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
