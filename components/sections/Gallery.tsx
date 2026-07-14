import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { performance } from "@/lib/content";

// Section: How it performs / Proof (was the "Gallery" slot).
export function Gallery() {
  return (
    <section id="performance" className="border-t border-border bg-paper py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <SectionHeader eyebrow={performance.eyebrow} title={performance.title} />
          <p className="mt-8 text-lg leading-relaxed text-charcoal/80">{performance.intro}</p>
        </div>

        <div className="mt-14 border-t border-forest/20">
          {performance.rows.map((row) => (
            <div
              key={row.dimension}
              className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-6"
            >
              <h3 className="display text-xl text-forest md:col-span-3">{row.dimension}</h3>
              <p className="leading-relaxed text-charcoal/80 md:col-span-6">{row.target}</p>
              <p className="text-sm text-slate md:col-span-3 md:text-right">
                <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-px rounded-full bg-honey align-middle" />
                {row.status}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
