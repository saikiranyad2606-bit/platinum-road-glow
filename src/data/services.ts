/**
 * Service catalogue for Platinum Detailing & Coatings TX.
 * Every name, price, duration, and inclusion below is taken from the
 * business's Setmore booking page (verified 2026-10-27). Update this file —
 * not the components — when the menu changes.
 */

const SETMORE_BOOK_URL =
  "https://platinumdetailingtx.setmore.com/book?step=time-slot&type=service&staff=88e7ec81-a0d5-4a64-b11d-ffa4b3df7abd&staffSelected=true";

const bookUrl = (productId: string) =>
  `${SETMORE_BOOK_URL}&products=${productId}`;

export type VehicleType = "Sedans" | "SUVs & Trucks" | "Cars & boats";

export type CategoryId =
  | "maintenance"
  | "full"
  | "interior"
  | "exterior"
  | "correction"
  | "addons";

export interface Service {
  id: string;
  name: string;
  category: CategoryId;
  vehicle: VehicleType;
  duration: string;
  /** Listed starting price on the booking page. Null when quoted by phone. */
  price: number | null;
  /** Extra pricing context, e.g. member ranges or "call for pricing". */
  priceNote?: string;
  blurb: string;
  bookingUrl: string;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  maintenance: "Member Maintenance",
  full: "Full & Premium Details",
  interior: "Interior Details",
  exterior: "Exterior Washes & Polish",
  correction: "Paint Correction & Coatings",
  addons: "Add-On Services",
};

export const SERVICES: Service[] = [
  // ── Member maintenance ──────────────────────────────────────────────
  {
    id: "maintenance-sedan",
    name: "Maintenance Package",
    category: "maintenance",
    vehicle: "Sedans",
    duration: "1 hr 45 min",
    price: 100,
    priceNote: "Members only · $100–$125 by frequency",
    blurb:
      "Weekly, bi-weekly, or monthly upkeep for vehicles already detailed once by us. Foam hand wash, wheels and fenders, spray wax gloss, interior vacuum and wipe-down.",
    bookingUrl: bookUrl("5faaef1e-a864-48a5-a92c-908be5e3237b"),
  },
  {
    id: "maintenance-suv",
    name: "Maintenance Package",
    category: "maintenance",
    vehicle: "SUVs & Trucks",
    duration: "2 hrs",
    price: 125,
    priceNote: "Members only · $125–$175 by frequency",
    blurb:
      "The same year-round upkeep scaled for larger vehicles — foam hand wash, wheels and fenders, spray wax gloss, full interior vacuum and wipe-down.",
    bookingUrl: bookUrl("sa5e80f002cb832aca65fb155118a655a5133442f"),
  },

  // ── Full & premium details ──────────────────────────────────────────
  {
    id: "express-sedan",
    name: "Express Detail Package",
    category: "full",
    vehicle: "Sedans",
    duration: "2 hrs 30 min",
    price: 200,
    blurb:
      "The first-time-customer package. Full exterior treatment plus a thorough interior clean — vacuum, scrub and dressing on all touchpoints. No carpet or seat extraction.",
    bookingUrl: bookUrl("b9e6d8d7-1382-41de-8c0f-6d40b7d86570"),
    featured: true,
  },
  {
    id: "express-suv",
    name: "Express Detail Package",
    category: "full",
    vehicle: "SUVs & Trucks",
    duration: "3 hrs",
    price: 275,
    blurb:
      "The first-time-customer package, scaled for SUVs and trucks. Full exterior treatment plus a thorough interior clean — vacuum, scrub and dressing on all touchpoints.",
    bookingUrl: bookUrl("afeebd43-e44c-48f6-8852-48c87eb8ee97"),
  },
  {
    id: "premium-sedan",
    name: "Premium Detail Package",
    category: "full",
    vehicle: "Sedans",
    duration: "3 hrs 30 min",
    price: 300,
    blurb:
      "Everything in Express, plus shampoo extraction of carpets, cloth seats and mats, a full interior steam clean, and headliner cleaning.",
    bookingUrl: bookUrl("79c1dda3-a9ea-4d6d-b15f-ceefe79ac462"),
    featured: true,
  },
  {
    id: "premium-suv",
    name: "Premium Detail Package",
    category: "full",
    vehicle: "SUVs & Trucks",
    duration: "4 hrs",
    price: 375,
    blurb:
      "Everything in Express, plus shampoo extraction of carpets, cloth seats and mats, a full interior steam clean, and headliner cleaning.",
    bookingUrl: bookUrl("c875a4f0-10f1-4c74-ae75-ff4e1a67626e"),
  },
  {
    id: "platinum-full-sedan",
    name: "Platinum Full Detail",
    category: "full",
    vehicle: "Sedans",
    duration: "5 hrs",
    price: 450,
    blurb:
      "Our most complete detail. Clay bar decontamination, iron wash, engine bay detail, headlight restoration, machine polish and sealant, plus the full Premium interior.",
    bookingUrl: bookUrl("ad5de3dd-2382-4010-8aa3-75d67b323144"),
    featured: true,
  },
  {
    id: "platinum-full-suv",
    name: "Platinum Full Detail",
    category: "full",
    vehicle: "SUVs & Trucks",
    duration: "5 hrs 45 min",
    price: 500,
    blurb:
      "Our most complete detail for larger vehicles. Clay bar decontamination, iron wash, engine bay detail, headlight restoration, machine polish and sealant, plus the full Premium interior.",
    bookingUrl: bookUrl("dc97660d-611d-4384-8aba-b5dc4b667229"),
  },

  // ── Interior details ────────────────────────────────────────────────
  {
    id: "interior-sedan",
    name: "Interior Detail",
    category: "interior",
    vehicle: "Sedans",
    duration: "2 hrs",
    price: 225,
    blurb:
      "A cabin brought back to showroom condition — thorough vacuum, shampoo extraction of carpets, cloth seats and mats, full steam clean, and headliner cleaning.",
    bookingUrl: bookUrl("d778b4ee-c948-4b46-be6a-91bf0ef5ea3d"),
    featured: true,
  },
  {
    id: "interior-suv",
    name: "Interior Detail",
    category: "interior",
    vehicle: "SUVs & Trucks",
    duration: "3 hrs 30 min",
    price: 275,
    blurb:
      "The full interior restore for SUVs and trucks — thorough vacuum, shampoo extraction, steam cleaning of every surface, and headliner cleaning.",
    bookingUrl: bookUrl("s42acfbe48e4022697f81f7fea51461f34d462e93"),
  },

  // ── Exterior washes & polish ────────────────────────────────────────
  {
    id: "clay-polish-sedan",
    name: "Clay Bar & Paint Polish",
    category: "exterior",
    vehicle: "Sedans",
    duration: "2 hrs 30 min",
    price: 250,
    blurb:
      "Exterior-focused care: foam hand wash, iron wash, clay bar decontamination, then a machine polish that lifts the gloss and removes light swirl marks.",
    bookingUrl: bookUrl("66dc53fb-1f2a-442a-afcd-c3966afc6381"),
  },
  {
    id: "clay-polish-suv",
    name: "Clay Bar & Paint Polish",
    category: "exterior",
    vehicle: "SUVs & Trucks",
    duration: "3 hrs",
    price: 350,
    blurb:
      "Exterior-focused care for larger vehicles: foam hand wash, iron wash, clay bar decontamination, then a machine polish that lifts the gloss.",
    bookingUrl: bookUrl("s76acb98ae1e20ff7c99780b3b383aa1b056a7002"),
  },
  {
    id: "exterior-wash-sedan",
    name: "Exterior Wash",
    category: "exterior",
    vehicle: "Sedans",
    duration: "1 hr",
    price: 100,
    blurb:
      "Not ready for a full detail? A one-time exterior wash — foam hand wash, wheels and fenders, tire shine, and a one-month spray wax on the paint.",
    bookingUrl: bookUrl("eada11c5-74d8-4ef9-9483-b7f36466bbe2"),
  },
  {
    id: "exterior-wash-suv",
    name: "Exterior Wash",
    category: "exterior",
    vehicle: "SUVs & Trucks",
    duration: "1 hr 30 min",
    price: 140,
    blurb:
      "The one-time exterior wash for SUVs and trucks — foam hand wash, wheels and fenders, tire shine, and a one-month spray wax on the paint.",
    bookingUrl: bookUrl("ad449946-eb01-4b8b-bae3-cd7d1eb88509"),
  },

  // ── Paint correction & coatings ─────────────────────────────────────
  {
    id: "paint-correction-graphene",
    name: "Paint Correction & Graphene Coating",
    category: "correction",
    vehicle: "Cars & boats",
    duration: "5 hrs",
    price: 850,
    priceNote: "From $850 · final quote after inspection",
    blurb:
      "A one- or two-step correction that cuts into the paint to remove swirl marks and holograms, finished with a graphene coating to lock in and protect the result.",
    bookingUrl: bookUrl("b3b31c7b-a79c-4907-87b6-5e4c37b0e34a"),
  },

  // ── Add-ons ─────────────────────────────────────────────────────────
  {
    id: "headlight-restoration",
    name: "Headlight Restoration",
    category: "addons",
    vehicle: "Cars & boats",
    duration: "45 min",
    price: 60,
    blurb: "Yellow or oxidized headlights restored and protected with a coating.",
    bookingUrl: bookUrl("89eafd0a-c5f3-4454-ab4c-cc7f11be3622"),
  },
  {
    id: "engine-bay-detail",
    name: "Engine Bay Detail",
    category: "addons",
    vehicle: "Cars & boats",
    duration: "45 min",
    price: 60,
    blurb:
      "Every surface brushed, blown clean, and dressed with a subtle dull finish.",
    bookingUrl: bookUrl("s9d7db95fc1f3324bd318fb822ea3e5d9108f6f85"),
  },
  {
    id: "ppf-wrap-removal",
    name: "PPF & Wrap Removal",
    category: "addons",
    vehicle: "Cars & boats",
    duration: "3 hrs",
    price: 250,
    priceNote: "Call before booking — we'll need a few details",
    blurb: "Decals, partial wraps, or old PPF carefully removed from your paint.",
    bookingUrl: bookUrl("s86904796710c619020fffc3213645611de905b12"),
  },
  {
    id: "odor-elimination",
    name: "Odor Elimination",
    category: "addons",
    vehicle: "Cars & boats",
    duration: "1 hr 30 min",
    price: 60,
    blurb:
      "For vehicles carrying a strong odor — cigarette, humidity, or fuel smells treated at the source.",
    bookingUrl: bookUrl("s1f83f812fefdd56afb2bc8371847388bfbcb7da0"),
  },
  {
    id: "undercarriage-cleaning",
    name: "Undercarriage Cleaning",
    category: "addons",
    vehicle: "Cars & boats",
    duration: "30 min",
    price: 50,
    blurb: "Flushes out dirt, salt, and buildup from beneath the vehicle.",
    bookingUrl: bookUrl("1727531d-2df2-4b1f-aa4d-d5ef260278e0"),
  },
  {
    id: "wheel-polishing",
    name: "Wheel Polishing",
    category: "addons",
    vehicle: "Cars & boats",
    duration: "2 hrs",
    price: 199,
    priceNote: "Call for pricing",
    blurb: "Aluminum wheels brought back to a brilliant shine.",
    bookingUrl: bookUrl("a14467b9-234b-43da-83a2-9d38862b90d6"),
  },
];

export const featuredServices = () => SERVICES.filter((s) => s.featured);

export const servicesByCategory = () =>
  (Object.keys(CATEGORY_LABELS) as CategoryId[]).map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    services: SERVICES.filter((s) => s.category === category),
  }));
