import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Display / headlines / large numerals only (brand book fallback for Archivo Condensed).
const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

// Body + UI.
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Pull quotes / mission-statement moments only — at most once per page.
const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

const SITE_URL = "https://beebags.example";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BeeBags — Made to return.",
    template: "%s · BeeBags",
  },
  description:
    "Food packaging made from beeswax and plant fibers that preserves freshness, reseals naturally, and returns to manufacturers to be remade. Designed to replace single-use plastic snack bags.",
  keywords: [
    "sustainable food packaging",
    "circular packaging",
    "plastic snack bag alternative",
    "beeswax packaging",
    "returnable packaging",
    "EPR compliance",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "BeeBags — Made to return.",
    description:
      "Packaging designed to come back. Beeswax and plant-fiber snack packaging built for a return loop, not a landfill.",
    siteName: "BeeBags",
  },
  twitter: {
    card: "summary_large_image",
    title: "BeeBags — Made to return.",
    description:
      "Packaging designed to come back, not thrown away. A return loop for snack packaging.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${serif.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:bg-forest focus:px-5 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
