import { Container } from "@/components/ui/Container";
import { transparency } from "@/lib/content";

// Section: Radical transparency (was the "Proof"/testimonials slot).
export function Proof() {
  return (
    <section
      id="transparency"
      className="border-t border-border bg-forest py-24 text-paper md:py-32"
    >
      <Container>
        <div className="max-w-3xl">
          <span className="eyebrow text-honey">{transparency.eyebrow}</span>
          <h2 className="display mt-3 text-4xl text-paper sm:text-5xl md:text-6xl">
            {transparency.title}
          </h2>
          <span className="hairline mt-4" aria-hidden />

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-paper/80">
            {transparency.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
