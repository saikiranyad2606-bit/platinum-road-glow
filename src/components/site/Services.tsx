import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import {
  CATEGORY_LABELS,
  featuredServices,
  servicesByCategory,
  type Service,
} from "@/data/services";

function priceLabel(service: Service): string {
  if (service.price === null) return service.priceNote ?? "Call for pricing";
  const base = `From $${service.price}`;
  return service.priceNote ? base : base;
}

function FeaturedCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 0.08} y={24}>
      <a
        href={service.bookingUrl}
        className="group flex h-full flex-col border border-border/70 bg-card/60 p-7 transition-colors duration-300 hover:border-platinum/40 hover:bg-card md:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow text-[0.625rem] text-muted-foreground">
            {service.vehicle}
          </span>
          <ArrowUpRight
            className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-platinum"
            aria-hidden
          />
        </div>
        <h3 className="mt-6 font-display text-2xl leading-tight text-foreground">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.blurb}
        </p>
        <div className="mt-7 flex items-baseline justify-between border-t border-border/60 pt-5">
          <span className="font-display text-3xl text-platinum">
            {service.price !== null && <>From ${service.price}</>}
          </span>
          <span className="text-xs text-muted-foreground">
            {service.duration}
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Services() {
  const featured = featuredServices();
  const groups = servicesByCategory();

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-border/60 py-24 md:py-36"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-platinum">Services</p>
              <h2
                id="services-heading"
                className="mt-5 max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight"
              >
                Care for every inch of your vehicle.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              All prices are starting prices, confirmed after in-person
              inspection and location. First-time guests begin with the Express
              Detail before moving to member maintenance pricing.
            </p>
          </div>
        </Reveal>

        {/* Featured packages */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((service, i) => (
            <FeaturedCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Full menu, grouped */}
        <div className="mt-24 md:mt-32">
          {groups.map(({ category, label, services }, gi) => (
            <div
              key={category}
              className={`grid gap-x-16 gap-y-4 border-t border-border/60 py-10 md:grid-cols-12 md:py-12 ${
                gi > 0 ? "" : "mt-10"
              }`}
            >
              <Reveal y={16}>
                <h3 className="eyebrow text-[0.6875rem] text-platinum md:sticky md:top-28">
                  {label}
                </h3>
              </Reveal>
              <div className="md:col-span-9 lg:col-span-9">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={service.bookingUrl}
                    className="group grid gap-2 border-b border-border/40 py-5 transition-colors last:border-0 hover:border-border sm:grid-cols-12 sm:items-baseline sm:gap-4"
                  >
                    <span className="sm:col-span-6">
                      <span className="text-base font-semibold text-foreground transition-colors group-hover:text-platinum">
                        {service.name}
                      </span>
                      <span className="ml-3 text-xs text-muted-foreground">
                        {service.vehicle} · {service.duration}
                      </span>
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground sm:col-span-4">
                      {service.blurb.split(".")[0]}.
                    </span>
                    <span className="flex items-baseline gap-3 sm:col-span-2 sm:justify-end">
                      <span className="font-display text-xl text-platinum">
                        {priceLabel(service)}
                      </span>
                    </span>
                    {service.priceNote && (
                      <span className="text-xs text-muted-foreground sm:col-span-12">
                        {service.priceNote}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
