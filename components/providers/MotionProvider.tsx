"use client";

import { useEffect } from "react";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/reduced-motion";

/**
 * Registers GSAP/ScrollTrigger and handles in-page anchor links with native
 * smooth scroll. No smooth-scroll library (Lenis) — the brand book calls for
 * fast, no-scroll-jacking pages, so we let the browser scroll natively.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGsap();
    ScrollTrigger.refresh();

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href*="#"]',
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const url = new URL(href, window.location.href);
      // Only smooth-scroll same-page hash links; let cross-page links navigate.
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.querySelector(url.hash);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", url.hash);
    };

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, [reduced]);

  return <>{children}</>;
}
