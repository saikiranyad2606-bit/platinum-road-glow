import heroImage from "@/assets/hero-charger.webp";
import { BookingButton } from "@/components/site/BookingButton";
import { buttonVariants } from "@/components/ui/button";
import { BOOKING_URL, BUSINESS } from "@/data/site";
import { cn } from "@/lib/utils";

const lineClass = "hero-line";
const fadeClass = "hero-fade";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* Hero visual — the business's own photo of a freshly corrected purple Charger */}
      <img
        src={heroImage}
        alt="A freshly detailed purple Dodge Charger with a mirror-gloss finish, parked outside a Dallas home"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      {/* Legibility gradients: darken top for nav, bottom for copy */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-16 pt-36 md:px-8 md:pb-24">
        <p className={`${fadeClass} eyebrow text-platinum`} style={{ animationDelay: "0.05s" }}>
          Premium Mobile Detailing · Dallas, TX
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[1.02] tracking-tight text-foreground">
          <span className="block overflow-hidden pb-1">
            <span className={lineClass} style={{ animationDelay: "0.15s" }}>
              Exceptional Care.
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span className={lineClass} style={{ animationDelay: "0.3s" }}>
              An{" "}
              <em className="italic text-platinum">Extraordinary</em> Finish.
            </span>
          </span>
        </h1>

        <p
          className={`${fadeClass} mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg`}
          style={{ animationDelay: "0.55s" }}
        >
          Premium mobile detailing, delivered with precision — at your driveway,
          on your schedule. Discover a higher standard of care for your vehicle.
        </p>

        <div
          className={`${fadeClass} mt-9 flex flex-wrap items-center gap-4`}
          style={{ animationDelay: "0.7s" }}
        >
          <BookingButton size="lg" />
          <a
            href="#services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "no-underline",
            )}
          >
            Explore Our Services
          </a>
        </div>

        <div
          className={`${fadeClass} mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/60 pt-6 text-[0.8125rem] text-muted-foreground`}
          style={{ animationDelay: "0.85s" }}
        >
          <span className="flex items-center gap-2">
            <span className="font-semibold text-foreground">5.0</span>
            <span aria-hidden className="text-platinum">★</span>
            <span>from {BUSINESS.reviewCount} reviews</span>
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-border md:block" />
          <span>Mobile service — we come to you</span>
          <span aria-hidden className="hidden h-4 w-px bg-border md:block" />
          <a
            href={BUSINESS.phoneHref}
            className="transition-colors hover:text-foreground"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BOOKING_URL}
            className="ml-auto hidden items-center gap-2 transition-colors hover:text-foreground md:flex"
          >
            Scroll
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" aria-hidden>
              <path d="M6 1v13m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
