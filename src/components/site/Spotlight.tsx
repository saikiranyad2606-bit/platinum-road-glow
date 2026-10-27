import spotlightImage from "@/assets/spotlight-corvette.webp";
import { BookingButton } from "@/components/site/BookingButton";
import { buttonVariants } from "@/components/ui/button";
import { BOOKING_URL, BUSINESS } from "@/data/site";
import { bookUrl } from "@/lib/booking";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const inclusions = [
  "One- or two-step machine correction",
  "Swirl mark and hologram removal",
  "Graphene coating to protect the finish",
  "Deep, wet-look gloss restoration",
];

export function Spotlight() {
  return (
    <section
      aria-labelledby="spotlight-heading"
      className="relative overflow-hidden border-t border-border/60 py-24 md:py-36"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-platinum">Featured Service</p>
            <h2
              id="spotlight-heading"
              className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight"
            >
              Paint Correction &amp;{" "}
              <em className="italic text-platinum">Graphene</em> Coating
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Looking to get swirl marks removed for good? We cut into the
              paint — a one- or two-step correction — to remove swirl marks and
              holograms, then finish with a graphene coating to protect the
              result for the long run.
            </p>
            <ul className="mt-8 space-y-3">
              {inclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rotate-45 bg-platinum"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-baseline gap-4">
              <span className="font-display text-4xl text-platinum">
                From $850
              </span>
              <span className="text-xs text-muted-foreground">
                approx. 5 hrs · final quote after inspection
              </span>
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <BookingButton
                href={bookUrl("b3b31c7b-a79c-4907-87b6-5e4c37b0e34a")}
                label="Book This Service"
              />
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "no-underline",
                )}
              >
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Pricing varies by vehicle condition — call us for an exact quote,
              or book at{" "}
              <a
                href={BOOKING_URL}
                className="underline underline-offset-4 hover:text-foreground"
              >
                platinumdetailingtx.setmore.com
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <Reveal delay={0.15} y={40}>
            <div className="relative lg:-mr-24">
              <img
                src={spotlightImage}
                alt="A black Chevrolet Corvette with corrected, mirror-deep paintwork after ceramic-grade treatment"
                loading="lazy"
                className="aspect-[16/10] w-full rounded-sm object-cover"
              />
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-platinum/30 lg:-right-8 lg:-bottom-8"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
