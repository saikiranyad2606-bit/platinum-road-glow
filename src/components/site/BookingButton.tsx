import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BOOKING_URL } from "@/data/site";
import { cn } from "@/lib/utils";

interface BookingButtonProps {
  /** Override the destination, e.g. a deep link to a specific service. */
  href?: string;
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
}

/** The one true booking CTA — always points at the real booking page. */
export function BookingButton({
  href = BOOKING_URL,
  label = "Book Your Detail",
  className,
  size = "default",
}: BookingButtonProps) {
  return (
    <a
      href={href}
      className={cn(buttonVariants({ size }), "group no-underline", className)}
    >
      {label}
      <ArrowRight
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </a>
  );
}
