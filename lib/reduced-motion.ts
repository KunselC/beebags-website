"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the user has requested reduced motion.
 * SSR-safe: defaults to `false` on the server and first client render,
 * then updates after mount so we never hydrate a mismatch.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export type DeviceTier = "low" | "mid" | "high";

/**
 * Rough device capability tiering used to scale WebGL cost
 * (DPR, particle counts, postprocessing). Heuristic only — errs low.
 */
export function detectDeviceTier(): DeviceTier {
  if (typeof window === "undefined") return "mid";

  const cores = navigator.hardwareConcurrency ?? 4;
  // deviceMemory is non-standard but widely supported on Chrome/Android.
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const smallScreen = Math.min(window.innerWidth, window.innerHeight) < 768;

  const mobileLike = coarse && smallScreen;

  if (cores <= 4 || memory <= 4 || mobileLike) return "low";
  if (cores <= 8 || memory <= 8) return "mid";
  return "high";
}

/** True only when WebGL is actually available in this browser. */
export function supportsWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/**
 * Combined hook: should we mount the heavy WebGL experience at all?
 * Mounts only when the browser supports WebGL AND the user hasn't asked
 * for reduced motion. Also exposes the device tier for scaling.
 */
export function useCanRenderWebGL(): { enabled: boolean; tier: DeviceTier } {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState<{ webgl: boolean; tier: DeviceTier }>({
    webgl: false,
    tier: "mid",
  });

  useEffect(() => {
    setState({ webgl: supportsWebGL(), tier: detectDeviceTier() });
  }, []);

  return { enabled: state.webgl && !reduced, tier: state.tier };
}
