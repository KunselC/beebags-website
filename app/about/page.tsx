import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: about.mission.text,
};

export default function AboutPage() {
  return (
    <main id="main" className="bg-paper pt-32 pb-24">
      <Container>
        {/* Mission */}
        <div className="max-w-3xl">
          <span className="eyebrow">{about.mission.eyebrow}</span>
          <span className="hairline mt-3" aria-hidden />
          <p className="mt-6 text-2xl leading-snug text-forest sm:text-3xl">
            {about.mission.text}
          </p>
        </div>

        {/* Vision — the single pull-quote on this page */}
        <blockquote className="mt-20 border-t border-border pt-12">
          <span className="eyebrow">{about.vision.eyebrow}</span>
          <p className="pullquote mt-4 max-w-4xl text-2xl leading-snug sm:text-3xl md:text-4xl">
            &ldquo;{about.vision.text}&rdquo;
          </p>
        </blockquote>

        {/* Values */}
        <div className="mt-24">
          <SectionHeader eyebrow={about.values.eyebrow} title={about.values.title} />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {about.values.items.map((v) => (
              <div key={v.name} className="bg-paper p-8">
                <h3 className="display text-xl text-forest">{v.name}</h3>
                <p className="mt-3 leading-relaxed text-charcoal/75">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business model — kept honestly open */}
        <div className="mt-24 max-w-3xl bg-kraft p-8 md:p-10">
          <span className="eyebrow text-forest">{about.model.eyebrow}</span>
          <h2 className="display mt-3 text-3xl text-forest sm:text-4xl">{about.model.title}</h2>
          <span className="hairline mt-4" aria-hidden />
          <p className="mt-5 leading-relaxed text-charcoal/85">{about.model.text}</p>
          <ul className="mt-5 space-y-3">
            {about.model.options.map((o, i) => (
              <li key={i} className="flex gap-3 text-charcoal/85">
                <span className="display text-honey">{String.fromCharCode(65 + i)}</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-wrap gap-4">
          <Button href="/#contact">Talk to us</Button>
          <Button href="/faq" variant="outline">
            Read the FAQ
          </Button>
        </div>
      </Container>
    </main>
  );
}
