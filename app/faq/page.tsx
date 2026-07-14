import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Procurement-grade answers on heat tolerance, freshness, food safety, cost, and the return-and-recycle process.",
};

export default function FaqPage() {
  return (
    <main id="main" className="bg-paper pt-32 pb-24">
      <Container>
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} className="max-w-3xl" />

        <dl className="mt-14 max-w-3xl border-t border-forest/20">
          {faq.items.map((item) => (
            <div key={item.q} className="border-b border-border py-8">
              <dt className="display text-xl text-forest sm:text-2xl">{item.q}</dt>
              <dd className="mt-3 leading-relaxed text-charcoal/80">{item.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 flex flex-wrap gap-4">
          <Button href="/#contact">Ask us something else</Button>
          <Button href="/about" variant="outline">
            About BeeBags
          </Button>
        </div>
      </Container>
    </main>
  );
}
