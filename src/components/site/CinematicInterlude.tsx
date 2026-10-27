import { useEffect, useRef } from "react";
import interludeImage from "@/assets/interlude-cadillac.webp";
import { loadGsap, prefersReducedMotion } from "@/lib/anim";

/**
 * Full-bleed cinematic interlude. The still is slowly scaled as you scroll
 * through it — a quiet, tactile moment between sections. Falls back to a
 * static image for reduced-motion visitors.
 */
export function CinematicInterlude() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img || prefersReducedMotion()) return;
    let disposed = false;
    let ctx: { revert: () => void } | undefined;

    void loadGsap().then((bundle) => {
      if (!bundle || disposed) return;
      const { gsap } = bundle;
      ctx = gsap.context(() => {
        gsap.fromTo(
          img,
          { scale: 1.14 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    return () => {
      disposed = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      aria-label="Every surface, every detail"
      className="relative h-[62vh] min-h-[420px] overflow-hidden md:h-[78vh]"
    >
      <img
        ref={imageRef}
        src={interludeImage}
        alt="Deep gloss black paintwork reflecting the sky after a full detail"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-background/45"
      />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <span aria-hidden className="hairline-x h-14" />
        <p className="mt-8 max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3.75rem)] leading-[1.1] text-foreground">
          Every surface. Every detail.{" "}
          <em className="italic text-platinum">Considered.</em>
        </p>
        <span aria-hidden className="hairline-x mt-8 h-14" />
      </div>
    </section>
  );
}
