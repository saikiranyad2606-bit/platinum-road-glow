import finalImage from "@/assets/gallery-charger.webp";
import { BookingButton } from "@/components/site/BookingButton";
import { buttonVariants } from "@/components/ui/button";
import { BUSINESS } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <img
        src={finalImage}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-background/80"
      />
      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 py-28 text-center md:px-8 md:py-40">
        <Reveal>
          <p className="eyebrow text-platinum">Book Today</p>
          <h2
            id="cta-heading"
            className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04] tracking-tight"
          >
            Your vehicle deserves the{" "}
            <em className="italic text-platinum">Platinum</em> treatment.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose the detailing service that fits your vehicle, pick a time
            that fits your week, and we&apos;ll take care of the rest — right
            outside your door.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <BookingButton size="lg" />
            <a
              href={BUSINESS.phoneHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "no-underline",
              )}
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
