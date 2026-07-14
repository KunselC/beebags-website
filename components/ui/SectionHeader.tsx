import { cn } from "@/lib/utils";

/**
 * Eyebrow (Meadow) + condensed-caps display title + Honey hairline rule.
 * Left-aligned by default — the brand book never centers long copy.
 */
export function SectionHeader({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      <span className="hairline mt-1" aria-hidden />
    </div>
  );
}
