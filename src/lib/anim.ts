type GsapBundle = {
  gsap: typeof import("gsap")["default"];
  ScrollTrigger: typeof import("gsap/ScrollTrigger")["ScrollTrigger"];
};

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Load GSAP + ScrollTrigger lazily on the client. Returns null during SSR. */
export async function loadGsap(): Promise<GsapBundle | null> {
  if (typeof window === "undefined") return null;
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}
