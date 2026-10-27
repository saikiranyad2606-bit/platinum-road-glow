import aboutImage from "@/assets/gallery-gwagon.webp";
import { Reveal } from "@/components/site/Reveal";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border/60 py-24 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <Reveal y={36}>
            <img
              src={aboutImage}
              alt="A Mercedes-AMG G 63 finished with a deep gloss detail"
              loading="lazy"
              className="aspect-[16/10] w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <p className="eyebrow text-platinum">About</p>
            <h2
              id="about-heading"
              className="mt-5 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight"
            >
              The ultimate car care experience,{" "}
              <em className="italic text-platinum">brought to you</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Platinum Detailing &amp; Coatings is a mobile detailing studio
              based in Dallas, Texas. Instead of sending your vehicle to a
              shop, we bring the full detail to you — your home, your office,
              wherever your day happens.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Appointments are booked directly with Jonathan, and the reviews
              our customers leave tell the story: professional, punctual, and
              obsessive about the finish. We treat every vehicle — from daily
              drivers to weekend toys and even boats — like it&apos;s our own.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
