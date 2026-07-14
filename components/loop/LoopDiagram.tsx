"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/lib/reduced-motion";

type Stage = { label: string; text: string };

const CENTER = 200;
const RADIUS = 150;

/**
 * The Loop — a continuous Forest ring with six labelled nodes representing
 * Snack → Reseal → Reuse → Return → Recycle → Repeat. The ring draws itself in
 * once on mount (lightweight SVG, no WebGL bundle). Static under
 * prefers-reduced-motion.
 */
export function LoopDiagram({ stages }: { stages: Stage[] }) {
  const ringRef = useRef<SVGCircleElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    registerGsap();
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Draw the ring in once on mount.
      if (ringRef.current) {
        const len = ringRef.current.getTotalLength();
        gsap.fromTo(
          ringRef.current,
          { strokeDasharray: len, strokeDashoffset: len },
          { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" },
        );
      }
    });
    return () => ctx.revert();
  }, [reduced]);

  const nodes = stages.map((s, i) => {
    const angle = (-90 + i * 60) * (Math.PI / 180);
    const x = CENTER + RADIUS * Math.cos(angle);
    const y = CENTER + RADIUS * Math.sin(angle);
    const anchor: "start" | "middle" | "end" =
      x < CENTER - 1 ? "end" : x > CENTER + 1 ? "start" : "middle";
    const dx = anchor === "end" ? -14 : anchor === "start" ? 14 : 0;
    const dy = y < CENTER ? -14 : 22;
    return { ...s, i, x, y, anchor, dx, dy };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      className="h-auto w-full max-w-md"
      role="img"
      aria-label="The BeeBags loop: Snack, Reseal, Reuse, Return, Recycle, Repeat, returning to the start."
    >
      {/* the loop ring */}
      <circle
        ref={ringRef}
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        fill="none"
        stroke="var(--forest)"
        strokeWidth={2}
      />

      {/* nodes + labels */}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r={5} fill="var(--forest)" />
          <text
            x={n.x + n.dx}
            y={n.y + n.dy}
            textAnchor={n.anchor}
            className="fill-forest"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
