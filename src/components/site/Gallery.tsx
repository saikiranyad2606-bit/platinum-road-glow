import { BookingButton } from "@/components/site/BookingButton";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { BOOKING_URL } from "@/data/site";
import galleryCharger from "@/assets/gallery-charger.webp";
import galleryCayenne from "@/assets/gallery-cayenne.webp";
import galleryGwagon from "@/assets/gallery-gwagon.webp";
import galleryCorvette from "@/assets/gallery-corvette.webp";
import galleryCadillac from "@/assets/gallery-cadillac.webp";
import { cn } from "@/lib/utils";

const works = [
  {
    src: galleryCharger,
    alt: "Dodge Charger with a freshly polished, vivid purple finish",
    caption: "Dodge Charger",
    note: "Exterior correction & full detail",
    span: "md:col-span-7",
  },
  {
    src: galleryCayenne,
    alt: "Porsche Cayenne interior after a complete steam-clean and detail",
    caption: "Porsche Cayenne",
    note: "Interior detail",
    span: "md:col-span-5",
  },
  {
    src: galleryGwagon,
    alt: "Mercedes-AMG G 63 after a full exterior detail",
    caption: "Mercedes-AMG G 63",
    note: "Premium detail",
    span: "md:col-span-5",
  },
  {
    src: galleryCorvette,
    alt: "Chevrolet Corvette with deep corrected gloss",
    caption: "Chevrolet Corvette",
    note: "Paint correction",
    span: "md:col-span-7",
  },
  {
    src: galleryCadillac,
    alt: "Cadillac CT5-V with mirror-black paintwork",
    caption: "Cadillac CT5-V",
    note: "Full detail & coating prep",
    span: "md:col-span-12",
  },
] as const;

export function Gallery() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-border/60 py-24 md:py-36"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-platinum">Our Work</p>
              <h2
                id="work-heading"
                className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight"
              >
                The finish speaks for itself.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Real vehicles, detailed at our customers&apos; homes and
              workplaces across the Dallas area.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-5">
          {works.map((work, i) => (
            <Reveal
              key={work.caption}
              delay={(i % 2) * 0.1}
              y={28}
              className={cn(work.span)}
            >
              <figure className="group relative overflow-hidden rounded-sm">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-baseline justify-between gap-3 bg-gradient-to-t from-background/90 to-transparent px-5 pb-4 pt-12">
                  <span className="font-display text-lg text-foreground">
                    {work.caption}
                  </span>
                  <span className="text-[0.6875rem] uppercase tracking-widest text-muted-foreground">
                    {work.note}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-wrap items-center gap-5">
            <BookingButton size="lg" />
            <a
              href={BOOKING_URL}
              className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              See all photos on our booking page
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
