import { Reveal } from "@/components/site/Reveal";
import { BUSINESS, REVIEWS, REVIEWS_URL } from "@/data/site";

export function Reviews() {
  const [lead, ...rest] = REVIEWS;

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-border/60 py-24 md:py-36"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="eyebrow text-platinum">Reviews</p>
              <h2
                id="reviews-heading"
                className="mt-5 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight"
              >
                Rated <em className="italic text-platinum">5.0</em> by our
                customers.
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <span className="font-display text-7xl leading-none text-foreground md:text-8xl">
                {BUSINESS.rating.toFixed(1)}
              </span>
              <div className="text-sm text-muted-foreground">
                <p aria-hidden className="text-lg tracking-[0.3em] text-platinum">
                  ★★★★★
                </p>
                <p className="mt-2">
                  {BUSINESS.reviewCount} verified reviews
                </p>
                <a
                  href={REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-foreground underline underline-offset-4"
                >
                  Read them all
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7" y={24}>
            <figure className="flex h-full flex-col justify-between border border-border/70 bg-card/60 p-8 md:p-10">
              <blockquote className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] text-foreground">
                <span aria-hidden className="mr-2 text-platinum">“</span>
                {lead.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 text-sm">
                <span
                  aria-hidden
                  className="flex size-9 items-center justify-center rounded-full border border-platinum/40 font-display text-base text-platinum"
                >
                  {lead.author.charAt(0)}
                </span>
                <span>
                  <span className="block font-semibold text-foreground">
                    {lead.author}
                  </span>
                  <span className="text-muted-foreground">
                    {lead.when}
                    {lead.source ? ` · via ${lead.source}` : ""}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-4 md:col-span-5 md:gap-5">
            {rest.slice(0, 2).map((review, i) => (
              <Reveal key={review.author} delay={0.08 + i * 0.08} y={24}>
                <figure className="border border-border/70 bg-card/40 p-7">
                  <blockquote className="text-sm leading-relaxed text-foreground/90">
                    <span aria-hidden className="mr-1 text-platinum">“</span>
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {review.author}
                    </span>{" "}
                    · {review.when}
                    {review.source ? ` · via ${review.source}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-4 md:col-span-12 md:grid-cols-3 md:gap-5">
            {rest.slice(2).map((review, i) => (
              <Reveal key={review.author} delay={i * 0.08} y={24}>
                <figure className="h-full border border-border/70 bg-card/40 p-7">
                  <blockquote className="text-sm leading-relaxed text-foreground/90">
                    <span aria-hidden className="mr-1 text-platinum">“</span>
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {review.author}
                    </span>{" "}
                    · {review.when}
                    {review.source ? ` · via ${review.source}` : ""}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
