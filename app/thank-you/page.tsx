import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thanks — we'll be in touch",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main id="main" className="grid min-h-[80svh] place-items-center bg-paper py-24">
      <Container className="max-w-2xl">
        <span className="eyebrow">Message received</span>
        <h1 className="display mt-4 text-5xl sm:text-6xl md:text-7xl">Thanks — we&apos;ll be in touch.</h1>
        <span className="hairline mt-6" aria-hidden />
        <p className="mt-8 text-lg leading-relaxed text-charcoal/80">
          We read every message. Expect a reply within a couple of working days —
          usually with a specific question about what you&apos;re packaging.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/">Back home</Button>
          <Button href="/faq" variant="outline">
            Read the FAQ
          </Button>
        </div>
      </Container>
    </main>
  );
}
