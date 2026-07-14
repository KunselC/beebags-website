import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { problem, promise } from "@/lib/content";

// Section: The Problem (was the brand "Story" slot).
export function Story() {
  return (
    <section id="problem" className="border-t border-border bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <SectionHeader eyebrow={problem.eyebrow} title={problem.title} />
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-charcoal/80">
              {problem.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Kraft callout: the regulatory "why now". */}
          <aside className="md:col-span-5 md:self-center">
            <div className="bg-kraft p-8">
              <span className="eyebrow text-forest">{problem.whyNow.label}</span>
              <span className="hairline mt-3" aria-hidden />
              <p className="mt-4 leading-relaxed text-charcoal/85">{problem.whyNow.text}</p>
            </div>
          </aside>
        </div>

        {/* The single pull-quote on the homepage — the brand promise. */}
        <blockquote className="mx-auto mt-24 max-w-4xl">
          <p className="pullquote text-2xl leading-snug sm:text-3xl md:text-4xl">
            &ldquo;{promise}&rdquo;
          </p>
        </blockquote>
      </Container>
    </section>
  );
}
