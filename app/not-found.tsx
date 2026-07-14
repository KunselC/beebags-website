import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-[80svh] place-items-center bg-paper py-24">
      <Container className="max-w-2xl">
        <p className="display text-8xl text-forest sm:text-9xl">404</p>
        <h1 className="display mt-4 text-3xl text-forest sm:text-4xl">Page not found</h1>
        <span className="hairline mt-5" aria-hidden />
        <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
          That page isn&apos;t here. Let&apos;s get you back.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Back home</Button>
          <Button href="/#contact" variant="outline">
            Contact us
          </Button>
        </div>
      </Container>
    </main>
  );
}
