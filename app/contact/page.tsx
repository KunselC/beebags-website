import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact, site } from "@/lib/content";
import { InquiryForm } from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.body,
};

export default function ContactPage() {
  return (
    <main id="main" className="bg-paper pt-32 pb-24">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <SectionHeader eyebrow={contact.eyebrow} title={contact.title} />
            <p className="mt-8 max-w-md text-lg leading-relaxed text-charcoal/80">{contact.body}</p>
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
    </main>
  );
}
