import { Clock, Phone } from "lucide-react";
import { BookingButton } from "@/components/site/BookingButton";
import { BOOKING_URL, BUSINESS, NAV_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl text-foreground">
            Platinum <span className="text-platinum">Detailing</span>
          </p>
          <p className="eyebrow mt-2 text-[0.5625rem] text-muted-foreground">
            Detailing &amp; Coatings · TX
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Premium mobile auto detailing based in Dallas, Texas. We come to
            you — book online or call to experience the Platinum service.
          </p>
          <div className="mt-8">
            <BookingButton size="sm" />
          </div>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <p className="eyebrow text-muted-foreground">Explore</p>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow text-muted-foreground">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4" aria-hidden />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4" aria-hidden />
              {BUSINESS.hours} · Closed Sundays
            </li>
            <li>
              <a
                href={BOOKING_URL}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                platinumdetailingtx.setmore.com
              </a>
            </li>
            <li className="flex gap-5 pt-2">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground md:px-8">
          <p>
            © {new Date().getFullYear()} {BUSINESS.nameWithState}. All rights
            reserved.
          </p>
          <p>Prices shown are starting prices, confirmed in person.</p>
        </div>
      </div>
    </footer>
  );
}
