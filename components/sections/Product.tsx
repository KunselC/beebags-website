import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { solution } from "@/lib/content";

// Section: The Solution (was the "Product" slot).
export function Product() {
  return (
    <section id="solution" className="border-t border-border bg-paper py-24 md:py-32">
      <Container>
        <div className="max-w-2xl">
          <SectionHeader eyebrow={solution.eyebrow} title={solution.title} />
          <p className="mt-8 text-lg leading-relaxed text-charcoal/80">{solution.body}</p>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {solution.pillars.map((p, i) => (
            <li key={p.title} className="bg-paper p-8">
              <div className="flex items-baseline gap-4">
                <span className="display text-2xl text-honey">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-2xl text-forest">{p.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-charcoal/75">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
