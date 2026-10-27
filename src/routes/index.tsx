import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { BrandStory } from "@/components/site/BrandStory";
import { CinematicInterlude } from "@/components/site/CinematicInterlude";
import { Services } from "@/components/site/Services";
import { Spotlight } from "@/components/site/Spotlight";
import { Gallery } from "@/components/site/Gallery";
import { Process } from "@/components/site/Process";
import { Reviews } from "@/components/site/Reviews";
import { About } from "@/components/site/About";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { BOOKING_URL, BUSINESS } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  name: BUSINESS.name,
  telephone: "+1-214-579-7923",
  url: BOOKING_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  openingHours: "Mo-Sa 08:00-17:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(BUSINESS.reviewCount),
  },
  sameAs: [BUSINESS.instagram, BUSINESS.facebook],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Platinum Detailing & Coatings TX — Premium Mobile Auto Detailing, Dallas TX",
      },
      {
        name: "description",
        content:
          "Premium mobile detailing delivered with precision, at your driveway. Full details, paint correction & graphene coatings. Rated 5.0 from 79 reviews. Book online or call (214) 579-7923.",
      },
      {
        property: "og:title",
        content:
          "Platinum Detailing & Coatings TX — Premium Mobile Auto Detailing",
      },
      {
        property: "og:description",
        content:
          "The ultimate car care experience, brought to you in Dallas, TX. Full details, paint correction & graphene coatings. Rated 5.0 from 79 reviews.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Platinum Detailing & Coatings TX — Premium Mobile Detailing",
      },
      {
        name: "twitter:description",
        content:
          "Premium mobile detailing in Dallas, TX. Rated 5.0 from 79 reviews. Book online today.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BrandStory />
        <CinematicInterlude />
        <Services />
        <Spotlight />
        <Gallery />
        <Process />
        <Reviews />
        <About />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
