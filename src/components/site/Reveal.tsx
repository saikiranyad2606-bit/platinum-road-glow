import { useEffect, useRef, type ReactNode } from "react";
import { loadGsap, prefersReducedMotion } from "@/lib/anim";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

/**
 * Scroll-triggered fade/rise entrance. Skipped entirely for visitors who
 * prefer reduced motion. GSAP context is reverted on unmount so triggers
 * never accumulate.
 */
export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    let disposed = false;
    let ctx: { revert: () => void } | undefined;

    void loadGsap().then((bundle) => {
      if (!bundle || disposed) return;
      const { gsap } = bundle;
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { y, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            delay,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });
    });

    return () => {
      disposed = true;
      ctx?.revert();
    };
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
