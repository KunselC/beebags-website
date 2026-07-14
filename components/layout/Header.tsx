import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { nav } from "@/lib/content";

/** Clean sticky header — wordmark, nav, one Forest CTA. No icon, no honeycomb. */
export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-sm">
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between py-4"
        >
          <Link href="/" aria-label="BeeBags home" className="text-forest">
            <Logo className="h-9" />
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-charcoal/75 transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="bg-forest px-5 py-2 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-forest/90"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
