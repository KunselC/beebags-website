import { cn } from "@/lib/utils";

const inputBase =
  "w-full border bg-paper px-4 py-3 text-charcoal placeholder:text-slate/70 outline-none transition-colors focus:border-forest";

/** Field label + control wrapper with accessible error wiring (light background). */
export function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-forest">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm text-meadow">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClass = (hasError?: boolean) =>
  cn(inputBase, hasError ? "border-meadow" : "border-forest/25");
