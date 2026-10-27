import { MapPin, Phone } from "lucide-react";
import { BookingButton } from "@/components/site/BookingButton";
import { buttonVariants } from "@/components/ui/button";
import { BUSINESS } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function ServiceArea() {
  return (
    <section
      aria-labelledby="area-heading"
      className="border-t border-border/60 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-platinum">Service Area</p>
            <h2
              id="area-heading"
              className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-tight"
            >
              Based in Dallas. Detailed at{" "}
              <em className="italic text-platinum">your</em> door.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              We&apos;re a mobile studio — we bring everything needed to
              detail your vehicle where it sits. Travel fees start at $25 and
              vary by location, so give us a call and we&apos;ll confirm
              availability and pricing for your address before you book.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 border border-border/70 bg-card/40 p-8">
              <p className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="size-4 text-platinum" aria-hidden />
                Dallas, Texas — mobile service
              </p>
              <p className="flex items-center gap-3 text-sm text-foreground">
                <Phone className="size-4 text-platinum" aria-hidden />
                <a
                  href={BUSINESS.phoneHref}
                  className="hover:text-platinum"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <BookingButton />
                <a
                  href={BUSINESS.phoneHref}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "no-underline",
                  )}
                >
                  Call to confirm your area
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
