/**
 * Verified business information for Platinum Detailing & Coatings TX.
 * Source of truth: https://platinumdetailingtx.setmore.com/ (checked 2026-10-27).
 * Do not invent details here — every value below comes from the booking page.
 */

export const BOOKING_URL = "https://platinumdetailingtx.setmore.com/";
export const REVIEWS_URL =
  "https://platinumdetailingtx.setmore.com/reviews?sortBy=highestRated";
export const GALLERY_URL = "https://platinumdetailingtx.setmore.com/gallery";

export const BUSINESS = {
  name: "Platinum Detailing & Coatings",
  nameWithState: "Platinum Detailing & Coatings TX",
  phoneDisplay: "(214) 579-7923",
  phoneHref: "tel:+12145797923",
  city: "Dallas",
  state: "TX",
  rating: 5.0,
  reviewCount: 79,
  hours: "Mon–Sat, 8 AM – 5 PM",
  instagram: "https://www.instagram.com/platinumdetailingtx/",
  facebook: "https://www.facebook.com/PlatinumMobileDetailingTX",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Review {
  author: string;
  when: string;
  source?: string;
  quote: string;
}

/**
 * Verbatim excerpts from reviews published on the booking page.
 * Only genuine, attributable reviews are listed.
 */
export const REVIEWS: Review[] = [
  {
    author: "Mark Meraz",
    when: "Last month",
    source: "Google",
    quote:
      "Great customer service and knowledge! Results look like AI but trust me, they are real!",
  },
  {
    author: "Mark N",
    when: "Last month",
    quote:
      "Appreciate the timely appointment recently made with Jonathan and the excellent job of the exterior wash done with my two SUV's. Would recommend Platinum Detailing to others.",
  },
  {
    author: "Ashley Stanley",
    when: "2 months ago",
    source: "Google",
    quote:
      "The team was very professional, prompt, and proficient! My car looked brand new. 10/10 I have my new car maintenance team",
  },
  {
    author: "Wesly Romulus",
    when: "3 months ago",
    source: "Google",
    quote:
      "Jonathan did an outstanding job on my boat! The attention to detail was incredible — everything came out cleaner than I expected. Jonathan is professional, punctual, friendly, and charges a very fair price for the quality of work he provides.",
  },
  {
    author: "Leslie Reyna",
    when: "5 months ago",
    quote:
      "Great service, always on time and prompt. Great communication and always offers outstanding craftsmanship and detail to his work. Been booking with Jonathan for years. He is the only one that details our vehicles.",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  copy: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Choose your service",
    copy: "Browse the packages, compare what each one includes, and pick the right level of care for your vehicle — or call and we'll help you decide.",
  },
  {
    number: "02",
    title: "Pick your appointment",
    copy: "Book online in a few taps. Appointments are available Monday through Saturday, 8 AM to 5 PM.",
  },
  {
    number: "03",
    title: "We come to you",
    copy: "Our mobile service brings the full detail to your driveway — no drop-off, no waiting rooms, no disrupting your day.",
  },
  {
    number: "04",
    title: "Enjoy the finish",
    copy: "Hand back the keys to a vehicle that looks and feels exceptional. Book again to keep it that way, year-round.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Answers reflect the booking policies published on the Setmore page:
 * starting prices, $30+ upcharge for pet hair / excessive dirtiness,
 * $25+ travel fee depending on location, and no credit cards.
 */
export const FAQS: Faq[] = [
  {
    question: "How do I book a detail?",
    answer:
      "Book online through our booking page — choose a package, pick a date and time, and confirm. Prefer to talk it through first? Call us at (214) 579-7923.",
  },
  {
    question: "Which service should I choose?",
    answer:
      "If it's your first detail with us, start with the Express Detail Package — it deep cleans the vehicle before any ongoing maintenance plan. Want the works? The Platinum Full Detail covers engine bay, clay bar, machine polish, and a full interior restore. Call us anytime and we'll recommend the right package for your vehicle.",
  },
  {
    question: "Are the listed prices final?",
    answer:
      "No — all prices are starting prices. Final pricing depends on the vehicle's condition and your location, confirmed in person before we begin.",
  },
  {
    question: "Are there additional charges?",
    answer:
      "Yes, in some cases. Pet hair or excessive stains and dirtiness carry an automatic upcharge of $30 or more. A travel fee of $25 or more also applies depending on your location.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We do not accept credit cards. Call us at (214) 579-7923 and we'll arrange payment for your appointment.",
  },
  {
    question: "Is mobile service available in my area?",
    answer:
      "We're based in Dallas, Texas and bring the detail to you. Travel fees vary by location — call us to confirm availability and pricing for your address.",
  },
];
