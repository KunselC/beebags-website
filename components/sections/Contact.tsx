import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact, site } from "@/lib/content";
import { InquiryForm } from "@/components/contact/InquiryForm";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-paper py-24 md:py-32">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <SectionHeader eyebrow={contact.eyebrow} title={contact.title} />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal/80">{contact.body}</p>

            {/* Always-visible fallback so a JS/API hiccup never blocks the goal. */}
            <div className="mt-8">
              <span className="eyebrow text-forest">Prefer email?</span>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-lg font-semibold text-forest underline decoration-honey decoration-2 underline-offset-4"
              >
                {site.email}
              </a>
            </div>
          </div>

          <div className="md:pt-2">
            <InquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
