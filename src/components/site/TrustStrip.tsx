import { Clock, MapPin, Star, Waypoints } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BUSINESS } from "@/data/site";

const items = [
  {
    icon: Star,
    title: `${BUSINESS.rating.toFixed(1)} rating`,
    copy: `from ${BUSINESS.reviewCount} customer reviews`,
  },
  {
    icon: Waypoints,
    title: "Mobile service",
    copy: "we come to you, saving you time",
  },
  {
    icon: MapPin,
    title: "Dallas, Texas",
    copy: "our home base",
  },
  {
    icon: Clock,
    title: "Mon–Sat, 8 AM – 5 PM",
    copy: "book online in minutes",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="At a glance" className="border-b border-border/60">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 md:grid-cols-4 md:px-8 md:py-12">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} y={16}>
            <div className="flex items-start gap-3">
              <item.icon
                className="mt-0.5 size-4 shrink-0 text-platinum"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 text-[0.8125rem] text-muted-foreground">
                  {item.copy}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
