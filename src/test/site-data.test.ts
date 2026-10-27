import { describe, expect, it } from "vitest";
import { BOOKING_URL, BUSINESS, FAQS, REVIEWS } from "@/data/site";
import { SERVICES, featuredServices, servicesByCategory } from "@/data/services";

/**
 * Guards the verified business facts and booking wiring:
 * every value asserted here comes from the business's Setmore booking page.
 */
describe("Business data integrity", () => {
  it("keeps the one true booking destination", () => {
    expect(BOOKING_URL).toBe("https://platinumdetailingtx.setmore.com/");
  });

  it("keeps the verified phone number", () => {
    expect(BUSINESS.phoneHref).toBe("tel:+12145797923");
    expect(BUSINESS.phoneDisplay).toBe("(214) 579-7923");
  });

  it("keeps the verified rating and review count", () => {
    expect(BUSINESS.rating).toBe(5.0);
    expect(BUSINESS.reviewCount).toBe(79);
  });

  it("gives every service a working Setmore booking link", () => {
    for (const service of SERVICES) {
      expect(
        service.bookingUrl.startsWith(
          "https://platinumdetailingtx.setmore.com/book",
        ),
        `${service.id} must deep-link into the booking page`,
      ).toBe(true);
      expect(service.bookingUrl).toContain("products=");
    }
  });

  it("qualifies prices that are not simple starting prices", () => {
    for (const service of SERVICES) {
      if (service.price === null) {
        expect(
          service.priceNote,
          `${service.id} needs a price note when unlisted`,
        ).toBeTruthy();
      }
    }
    expect(featuredServices().length).toBeGreaterThanOrEqual(3);
    const categories = servicesByCategory();
    expect(categories.map((c) => c.services.length).reduce((a, b) => a + b, 0)).toBe(
      SERVICES.length,
    );
  });

  it("only publishes reviews attributed on the booking page", () => {
    const verifiedAuthors = [
      "Mark Meraz",
      "Mark N",
      "Ashley Stanley",
      "Wesly Romulus",
      "Leslie Reyna",
    ];
    for (const review of REVIEWS) {
      expect(verifiedAuthors).toContain(review.author);
      expect(review.quote.length).toBeGreaterThan(20);
    }
  });

  it("discloses the no-credit-cards policy honestly", () => {
    const payment = FAQS.find((f) => f.question.includes("payment"));
    expect(payment?.answer).toMatch(/do not accept credit cards/i);
  });

  it("discloses starting prices and surcharges", () => {
    const finalPrice = FAQS.find((f) => f.question.includes("final"));
    expect(finalPrice?.answer).toMatch(/starting prices/i);
    const charges = FAQS.find((f) => f.question.includes("additional"));
    expect(charges?.answer).toMatch(/\$30/);
    expect(charges?.answer).toMatch(/\$25/);
  });
});
