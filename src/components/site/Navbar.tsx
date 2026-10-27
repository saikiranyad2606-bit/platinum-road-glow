import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { BookingButton } from "@/components/site/BookingButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BOOKING_URL, BUSINESS, NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-8">
        {/* Wordmark — a text treatment, not the business's official logo */}
        <a href="/" className="flex flex-col leading-none" aria-label="Home">
          <span className="font-display text-2xl tracking-wide text-foreground">
            Platinum
          </span>
          <span className="eyebrow mt-1 text-[0.5625rem] text-muted-foreground">
            Detailing &amp; Coatings · TX
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground xl:flex"
          >
            <Phone className="size-4" aria-hidden />
            {BUSINESS.phoneDisplay}
          </a>
          <BookingButton size="sm" className="hidden sm:inline-flex" />
          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-border bg-background p-6"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">
                  Platinum
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-3 text-base text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3">
                <BookingButton
                  href={BOOKING_URL}
                  className="w-full justify-center"
                />
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" aria-hidden />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
