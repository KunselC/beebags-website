import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { loop } from "@/lib/content";
import { LoopDiagram } from "@/components/loop/LoopDiagram";

// Section: The Loop (was the "Craft" slot) — the one animated moment.
export function Craft() {
  return (
    <section id="loop" className="border-t border-border bg-kraft py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <SectionHeader eyebrow={loop.eyebrow} title={loop.title} />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal/80">
              {loop.intro}
            </p>

            <ol className="mt-10 space-y-4">
              {loop.stages.map((s, i) => (
                <li key={s.label} className="flex gap-4">
                  <span className="display w-8 shrink-0 text-lg text-honey">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="display text-lg text-forest">{s.label}</span>
                    <span className="ml-3 text-charcoal/70">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex justify-center">
            <LoopDiagram stages={loop.stages.map(({ label, text }) => ({ label, text }))} />
          </div>
        </div>
      </Container>
    </section>
  );
}
