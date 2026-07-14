import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-forest text-paper">
      <Container className="py-16">
        {/* Single Honey hairline — the one sanctioned flourish. */}
        <span className="hairline mb-10" aria-hidden />

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" aria-label="BeeBags home" className="text-honey">
              <Logo className="h-14" />
            </Link>
            <p className="mt-4 text-paper/70">
              Packaging designed to come back. Made to return.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex bg-honey px-6 py-3 text-sm font-semibold tracking-wide text-forest transition-colors hover:brightness-95"
            >
              Request a pilot
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Explore" links={nav.map((n) => ({ label: n.label, href: n.href }))} />
            <FooterCol
              title="Follow"
              links={[
                { label: "LinkedIn", href: site.social.linkedin },
                { label: "Instagram", href: site.social.instagram },
              ]}
            />
            <FooterCol
              title="Contact"
              links={[{ label: site.email, href: `mailto:${site.email}` }]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}</p>
          <p>Made to return.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow text-honey">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-paper/70 transition-colors hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
