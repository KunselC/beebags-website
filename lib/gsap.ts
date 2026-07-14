"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Central GSAP setup. Import { gsap, ScrollTrigger } from here so plugins
 * are registered exactly once, on the client only.
 */
let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  // Organic default easing for the whole site.
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  registered = true;
}

export { gsap, ScrollTrigger };
