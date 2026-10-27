import storyImage from "@/assets/story-cayenne.webp";
import { Reveal } from "@/components/site/Reveal";

export function BrandStory() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36" aria-labelledby="story-heading">
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-10">
          <Reveal>
            <p className="eyebrow text-platinum">The Platinum Standard</p>
            <h2
              id="story-heading"
              className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight"
            >
              Precision in <em className="italic text-platinum">every</em>{" "}
              detail.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              At Platinum Detailing, we&apos;re on a mission to provide the
              ultimate car care experience. Our mobile service comes to you —
              your driveway, your schedule — saving you the time and hassle of
              a shop visit.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From a one-time exterior wash to a complete paint correction and
              graphene coating, every package is delivered with the same care:
              an immaculate vehicle, inside and out.
            </p>
            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              Explore our services
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-platinum transition-all duration-300 group-hover:w-12"
              />
            </a>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="relative ml-auto aspect-[16/10] w-full max-w-[720px] lg:translate-x-16">
              <img
                src={storyImage}
                alt="A Porsche Cayenne interior restored to showroom condition — steam-cleaned, dressed, and detailed"
                loading="lazy"
                className="h-full w-full rounded-sm object-cover"
              />
              {/* Editorial frame offset */}
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 -z-10 h-full w-full border border-platinum/30 lg:-bottom-6 lg:-left-10"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
