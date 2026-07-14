import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92svh] items-center bg-paper">
      <Container className="pt-32 pb-20">
        <div className="max-w-4xl">
          {/* The one enormous sentence. */}
          <h1 className="display text-[19vw] leading-[0.9] sm:text-[15vw] md:text-[11rem]">
            {hero.tagline}
          </h1>

          <span className="hairline mt-8" aria-hidden />

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
            {hero.subhead}
          </p>

          <div className="mt-10">
            {/* Single Honey CTA for the page. */}
            <Button href={hero.cta.href} variant="accent">
              {hero.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
