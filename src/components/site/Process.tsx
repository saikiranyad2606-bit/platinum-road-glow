import { Reveal } from "@/components/site/Reveal";
import { PROCESS_STEPS } from "@/data/site";

export function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="border-t border-border/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <Reveal>
          <p className="eyebrow text-platinum">The Experience</p>
          <h2
            id="process-heading"
            className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight"
          >
            Booked in minutes.{" "}
            <em className="italic text-platinum">Detailed</em> at your door.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden border border-border/60 md:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} y={20}>
              <li className="relative h-full border-border/60 bg-card/40 p-7 md:border-r md:p-8 md:last:border-r-0">
                <span
                  aria-hidden
                  className="font-display text-5xl text-platinum/25"
                >
                  {step.number}
                </span>
                <h3 className="mt-6 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
