# Platinum Road Glow

# ROLE AND OBJECTIVE

Act as a senior creative director, award-winning automotive brand designer, senior frontend engineer, motion designer, and conversion-rate optimization specialist.

Design and build a complete, production-quality website for:

**Business name:** Platinum Detailing & Coatings TX  
**Current booking website:** https://platinumdetailingtx.setmore.com/  
**Business phone:** (214) 579-7923  
**Business category:** Premium mobile auto detailing and vehicle care  
**Target market:** Customers in the business's actual service area in Texas  
**Primary goal:** Turn website visitors into qualified booking customers.  
**Design ambition:** The level of visual refinement, motion quality, and attention to detail expected from a premium $5,000 custom website project.

This must NOT look like a generic car detailing template, an ordinary small-business website, or a standard AI-generated landing page.

Create a cinematic, editorial, premium automotive experience inspired by the visual storytelling of luxury automotive brands and the polished motion design of modern premium software websites. Use these as broad quality references, not as designs to copy.

The final result should feel custom-designed specifically for Platinum Detailing & Coatings TX.

# STEP 1 — INSPECT BEFORE BUILDING

Before changing any code:

1. Inspect the existing Lovable project's framework, package manager, installed dependencies, routing, components, CSS, and current functionality.
2. Identify whether the project uses React with Vite, TanStack Start, or another supported framework.
3. Preserve the existing compatible framework and project structure. Do not migrate frameworks just for this redesign.
4. Inspect all existing assets and reuse suitable, high-quality assets where appropriate.
5. Check which animation libraries are already installed before adding dependencies.
6. Review the business's existing booking page:
   https://platinumdetailingtx.setmore.com/
7. Use the booking page as the source of truth for service names, descriptions, starting prices, booking rules, business phone, opening hours, and customer reviews.
8. Create a concise implementation plan and then execute it. Do not stop after providing a plan or mockup.

Do not claim that the site has been fully inspected if a page or resource cannot be accessed. Work from the verifiable information available.

# STEP 2 — RECOMMENDED TECHNOLOGY STACK

Use the following stack where compatible with the existing project.

CORE:
- Existing Lovable-supported application framework.
- React and TypeScript if already supported by the project.
- Tailwind CSS for responsive styling and design tokens.
- Reusable, strongly typed components.
- Lucide React for consistent interface icons.

ANIMATION:
- GSAP for high-quality animation.
- GSAP ScrollTrigger for scroll-based storytelling, text reveals, and selected pinned sections.
- CSS transitions for simple interactions.
- Use Motion for React only if an existing component genuinely benefits from it. Avoid overlapping animation systems unnecessarily.

VIDEO AND IMAGERY:
- Optimized HTML5 video for cinematic footage.
- WebP or AVIF for photographs when supported.
- Responsive image sizes and lazy loading.
- Use genuine business photographs when available and appropriate.
- Use licensed stock footage only as a temporary visual placeholder when genuine footage is unavailable.

OPTIONAL 3D:
- Three.js with React Three Fiber and Drei only if a suitable, high-quality, legally usable 3D asset is available and compatible.
- Lazy-load the 3D scene.
- Provide a static image fallback.
- Do not build an elaborate 3D car from primitive shapes just to claim the site uses 3D.
- If a suitable asset is unavailable, create a compelling cinematic experience using real automotive photography, video, lighting, composition, and motion instead.

Do not install unnecessary libraries. Verify package compatibility before adding dependencies. Avoid rebuilding the application architecture without a strong technical reason.

# STEP 3 — CREATIVE DIRECTION

The website's visual identity should communicate:

- Premium craftsmanship
- Automotive sophistication
- Cleanliness and precision
- Trust and professionalism
- High-quality results
- Convenience through mobile detailing
- A premium service experience

VISUAL STYLE:

Use a refined dark automotive aesthetic.

Suggested palette:
- Obsidian black: #090A0C
- Deep charcoal: #121417
- Elevated charcoal: #1A1D21
- Soft white: #F5F4F0
- Muted grey: #A4A7AD
- Restrained metallic silver accents
- A carefully controlled platinum/champagne accent for selected highlights

Use these as starting tokens and adjust them to create the strongest visual result.

Do not use excessive gradients, bright neon colors, glowing borders, random colorful blobs, or generic glassmorphism.

TYPOGRAPHY:

- Use a premium editorial display typeface for major headlines.
- Use a highly readable modern sans-serif for body copy and controls.
- Create strong typographic contrast between headlines, labels, descriptions, and prices.
- Use large headlines with deliberate line breaks.
- Maintain comfortable line lengths and generous whitespace.
- Use uppercase micro-labels sparingly for a luxury editorial feel.

LAYOUT:

- Use a disciplined grid.
- Combine full-bleed automotive imagery with clean, structured content sections.
- Allow certain photographs to extend beyond the normal content grid.
- Use varied section heights and image compositions.
- Avoid making every section a centered heading followed by three identical cards.
- Use thin separators, carefully controlled borders, and subtle surface differences.
- Keep the experience elegant and intentional rather than overly decorative.

Every visual decision should support the brand, content, usability, or conversion.

# STEP 4 — BUILD THE COMPLETE WEBSITE

Build a complete responsive homepage with the following sections.

## A. PREMIUM NAVIGATION

Create a refined navigation bar with:

- Platinum Detailing & Coatings TX wordmark or logo treatment.
- Home
- Services
- Our Work
- Reviews
- About
- Contact
- A prominent "Book Your Detail" button.

Use a transparent or subtly dark navigation over the hero, transitioning to a readable dark background when appropriate.

On mobile, provide an accessible menu with a clear booking action.

Keep navigation elegant, compact, and easy to use. Do not invent an official logo or imply that a text treatment is the business's original logo.

## B. CINEMATIC HERO

The opening viewport must immediately communicate premium automotive detailing.

Create a dramatic, full-screen or near-full-screen hero featuring:

- A stunning automotive image or short video of a glossy, meticulously detailed vehicle.
- Sophisticated dark lighting and carefully composed contrast.
- Large editorial typography.
- Minimal but purposeful animation.
- A clear primary booking CTA.
- A secondary "Explore Our Services" CTA.
- A subtle scroll indicator.
- A small credibility line based on verifiable business information.

Possible headline direction:

"Exceptional Care.
An Extraordinary Finish."

Supporting copy direction:

"Premium mobile detailing, delivered with precision. Discover a higher standard of care for your vehicle."

Treat these as creative starting points. Refine the copy to sound natural and distinctive.

Place the main headline so it remains readable over the visual.

ANIMATION:
- Introduce the headline with a restrained masked text reveal or staggered entrance.
- Fade in the supporting text and CTAs in sequence.
- Use subtle movement in the hero image only where it improves the composition.
- Avoid excessive zooming, distracting particles, or animations that delay access to the booking button.

VIDEO REQUIREMENTS:
- Use a genuine, licensed automotive video if available.
- Autoplay background video only when muted and supported.
- Include playsInline and an appropriate poster image.
- Use preload="none" or another sensible loading strategy.
- Provide a static image fallback.
- Never allow the absence of video to leave an empty hero.
- Ensure text contrast remains strong on all screen sizes.

Do not pretend that stock footage is the business's own work.

## C. TRUST AND CREDIBILITY STRIP

Create a subtle trust section directly below the hero.

Use verifiable details such as:

- 5.0 rating
- 79 reviews, if still confirmed on the source page
- Mobile detailing convenience
- A concise quality-focused message

Do not invent awards, certifications, years in business, customer counts, guarantees, or manufacturer partnerships.

If the rating or review count changes, use the current verified value rather than treating it as permanent.

## D. BRAND STORY SECTION

Create an editorial section introducing the Platinum Detailing experience.

Use a compelling automotive photograph paired with a large headline and short copy.

Potential heading:

"Precision in Every Detail."

Communicate the actual value of the service:
- Attention to detail
- A cleaner, better-presented vehicle
- Convenience of mobile service
- Different service options for different vehicle-care needs

Do not make unsupported claims about chemical products, proprietary techniques, professional certifications, or paint protection warranties.

Use asymmetric composition and generous spacing rather than a generic centered block.

## E. CINEMATIC VIDEO INTERLUDE

Create a full-width cinematic section between the brand story and services.

Use a close-up of water flowing across paintwork, foam washing a vehicle, polishing a body panel, or a freshly detailed vehicle catching the light.

The footage should feel calm, tactile, and premium.

Optional overlay copy:

"Every Surface. Every Detail. Considered."

Use subtle scroll-triggered text movement and restrained image scaling.

The video must:
- Be optimized and appropriately compressed.
- Have a poster image.
- Load only when needed.
- Respect reduced-motion preferences.
- Never block scrolling or interfere with navigation.
- Fall back gracefully to a static image.

Do not insert a video between every section. Use cinematic interludes sparingly to maintain impact.

## F. SERVICES OVERVIEW

Build an attractive services section based on the actual booking menu.

Group the offerings into understandable categories instead of presenting the entire long booking menu as a wall of text.

Potential categories include:

1. Maintenance Detailing
2. Express Detailing
3. Premium and Full Detailing
4. Interior Detailing
5. Exterior Wash and Paint Polishing
6. Paint Correction and Graphene Coating
7. Specialist Add-on Services

Verify each category and service against the current booking page before displaying it.

Create a visually distinctive layout with strong photography, elegant service labels, short descriptions, and clear navigation.

Show only a few featured services on the homepage. Provide a "View All Services" action that leads to a dedicated services page or a well-organized full service section.

Each service should make it easy to understand:
- What the service is for
- What the service includes at a high level
- Whether the displayed price is a starting price
- How to book it

Use verified starting prices where available. Do not silently convert starting prices into guaranteed final prices.

Some services have separate sedan and SUV/truck pricing. Make these distinctions clear.

The booking page contains detailed inclusions, durations, prices, and conditions. Use it as the source of truth rather than guessing.

Do not invent packages or silently change business terms.

## G. FEATURED SERVICE SPOTLIGHT

Create one premium editorial spotlight for a suitable high-value service, such as paint correction and graphene coating.

Use a large automotive image, carefully typeset copy, a short list of verified benefits or inclusions, and a booking CTA.

The section should feel like a premium automotive campaign rather than an ordinary product card.

Use the current verified service description and price. If details are inconsistent or unclear, omit the questionable detail and direct the visitor to the official booking page.

## H. BEFORE-AND-AFTER GALLERY

Create a visually striking gallery showcasing vehicle transformations.

Preferred presentation:
- Large image-led layout.
- A mix of full-width and smaller images.
- Optional interactive before-and-after comparison slider.
- Smooth, subtle hover behavior.
- Accessible image controls and useful alt text.
- A CTA to book a detail.

IMPORTANT:
- Use actual Platinum Detailing photos if available.
- If real before-and-after pairs are not available, do not manufacture fake transformations.
- Do not use unrelated stock photographs while labeling them as the business's work.
- During development, clearly mark placeholder assets so they can be replaced.
- Build the gallery so the owner can replace images easily.

Prioritize high-quality photography over excessive animation.

## I. HOW THE MOBILE DETAILING EXPERIENCE WORKS

Create a simple, elegant process section using verified business information.

Possible structure:
1. Choose a service.
2. Select an appointment.
3. Confirm the details.
4. Have your vehicle cared for through the mobile service.

Verify this flow against the actual Setmore booking and business policies.

Do not promise that the business can service every location or vehicle type.

Use a refined numbered layout, subtle line animation, and short copy.

## J. REVIEWS AND SOCIAL PROOF

Create a premium review section.

Use genuine reviews visible on the booking page, where their wording can be verified.

Select concise, useful excerpts that highlight the actual customer experience. Attribute each review accurately when the source provides the reviewer name.

Do not invent customer testimonials, names, photos, star ratings, or review platforms.

Display the rating and review count only when verified.

Use restrained typography, clear spacing, and an editorial layout rather than a generic rotating testimonial carousel.

Include a way to see more reviews if a reliable destination is available.

## K. ABOUT THE BUSINESS

Create an About section that communicates the business's actual focus on mobile vehicle care and customer experience.

Use real team or service photographs when available.

Do not invent the owner's biography, personal story, business history, team size, or credentials.

Keep the writing confident, concise, and human.

## L. SERVICE AREA

Explain that the business offers mobile detailing, using only the service locations confirmed by the business.

Do not invent a list of cities, an address, or a service radius.

If the exact service area cannot be verified, use a short prompt asking visitors to contact the business to confirm availability for their location.

Provide a prominent contact or booking action.

## M. FAQ

Build a concise FAQ using real policies and service information from the booking page.

Potential topics:
- How do I book?
- Which service should I choose?
- Are listed prices final?
- Are there additional charges?
- What payment methods are accepted?
- How do I confirm whether mobile service is available in my area?
- What if I need help choosing a package?

Verify every answer.

The booking page currently contains policies regarding starting prices, possible additional charges for excessive dirt or pet hair, travel fees, and credit-card acceptance. Confirm that these policies are still current before reproducing them.

Do not invent cancellation policies, warranties, preparation requirements, or guarantees.

Use accessible accordion controls with clear open and closed states.

## N. FINAL CONVERSION SECTION

Create a strong closing section with premium imagery and concise copy.

Possible heading:

"Your Vehicle Deserves the Platinum Treatment."

Supporting copy should encourage the customer to select the appropriate detailing service.

Primary CTA:
"Book Your Detail"

Secondary CTA:
"Call (214) 579-7923"

The primary CTA must link to the existing booking page.

Make this section feel like the final moment of a premium campaign—not a generic colored banner.

## O. FOOTER

Include:
- Business name.
- Verified contact information.
- Navigation links.
- Services link.
- Booking CTA.
- Phone link.
- Relevant social links only if their official accounts can be verified.
- Privacy and legal links only when real pages exist.

Use a clean, dark footer with subtle typography and deliberate spacing.

Do not invent social handles, legal policies, addresses, or links.

# STEP 5 — CREATE A PROPER BOOKING EXPERIENCE

The existing Setmore booking page must remain the booking system unless the owner explicitly authorizes a replacement.

Booking destination:
https://platinumdetailingtx.setmore.com/

Every primary booking CTA should lead to this destination.

Use a consistent booking URL throughout the website.

Where appropriate, open the booking page in the same tab for a straightforward mobile experience.

Make the booking button accessible, keyboard operable, and easy to tap on mobile.

Do not create a fake booking form that claims to reserve appointments without connecting to a real booking service.

Do not collect payment information or sensitive customer information unnecessarily.

Optional: a separate inquiry form can be added only if it has a real working submission mechanism and clear success/error feedback.

# STEP 6 — MOTION DESIGN SYSTEM

Create a consistent motion language.

Use GSAP and ScrollTrigger for selected effects such as:
- Headline entrance.
- Text mask reveals.
- Staggered content entrances.
- Subtle image scaling.
- Carefully chosen pinned storytelling sections.
- Gallery reveals.
- Section transitions.
- Fine decorative-line movement.

Use animation timing that feels controlled and premium.

Prefer smooth easing, measured durations, and restrained movement.

Avoid:
- Constant movement everywhere.
- Aggressive parallax.
- Scroll hijacking.
- Forced scrolling.
- Excessive pinning.
- Repeated dramatic zooms.
- Cursor effects that interfere with usability.
- Heavy particle systems.
- Animations that hide important content until the user scrolls.
- Animation that causes layout shifts.

Respect prefers-reduced-motion.

On mobile, simplify or disable costly animation where necessary.

Use GSAP's React integration or appropriate component lifecycle cleanup so animation instances and ScrollTriggers do not accumulate after rerenders or navigation.

Test the actual production build to ensure animations work after bundling.

# STEP 7 — RESPONSIVE DESIGN

Design and test the full website for:
- Small mobile phones.
- Larger mobile phones.
- Tablets.
- Laptops.
- Large desktop screens.

Mobile must be a first-class experience, not a compressed desktop design.

Requirements:
- No horizontal overflow.
- No clipped headings.
- No overlapping buttons.
- No inaccessible navigation.
- No tiny tap targets.
- No text placed over busy imagery without sufficient contrast.
- No essential information hidden on mobile.
- Responsive typography using sensible fluid sizing.
- Images with correct aspect ratios.
- Stable layout while media loads.
- Readable service and pricing layouts.

If a pinned or scroll-driven effect feels awkward on touch devices, replace it with a simpler layout or animation.

# STEP 8 — PERFORMANCE AND ACCESSIBILITY

Build for real-world use, including mid-range mobile devices and slower connections.

Requirements:
- Use appropriately sized, compressed images.
- Lazy-load below-the-fold images.
- Avoid lazy-loading the primary above-the-fold hero image when that would delay the first impression.
- Preload only genuinely critical assets.
- Avoid unnecessary autoplay videos.
- Lazy-load 3D scenes and nonessential heavy components.
- Prevent layout shifts by defining image and video dimensions or aspect ratios.
- Use semantic HTML.
- Maintain visible keyboard focus.
- Use accessible contrast.
- Add meaningful alt text to informative images.
- Provide accessible names for icon-only buttons.
- Use correct heading hierarchy.
- Respect reduced-motion preferences.
- Avoid loading several animation libraries that perform the same job.
- Check console errors, failed network requests, and broken assets.

Aim for strong Core Web Vitals, especially on mobile.

Do not sacrifice accessibility or booking usability to achieve a visual effect.

# STEP 9 — SEARCH ENGINE AND LOCAL BUSINESS BASICS

Add:
- A relevant page title.
- A clear meta description.
- Appropriate heading hierarchy.
- Descriptive image alt text.
- Open Graph metadata.
- A favicon if a suitable brand asset exists.
- Canonical metadata only when the final canonical domain is known.
- Appropriate local-business structured data only for verified information.

Do not invent a street address, geographical coordinates, business hours, service area, or social links.

Do not claim a particular SEO ranking or guaranteed lead increase.

Keep the content focused on the actual services offered by Platinum Detailing & Coatings TX.

# STEP 10 — TECHNICAL IMPLEMENTATION RULES

- Build reusable components for navigation, buttons, service displays, reviews, gallery items, and booking CTAs.
- Keep service data in a structured configuration or typed data file so it can be updated without editing every component.
- Keep repeated colors, spacing, radii, and typography in a consistent design system.
- Use semantic and maintainable component names.
- Do not place the entire website in one enormous component.
- Avoid unnecessary dependencies.
- Do not break existing routes or working functionality.
- Do not use fake links such as href="#".
- Do not leave important buttons without working destinations.
- Do not leave broken images or unfinished visible placeholder blocks.
- Do not generate fabricated statistics, reviews, awards, or company claims.
- Do not overwrite existing project configuration unnecessarily.
- If a needed asset is unavailable, use a well-designed fallback and identify the asset that should be replaced.

# STEP 11 — IMPLEMENTATION ORDER

Work through the project in this order:

1. Inspect the current application and existing assets.
2. Establish the design tokens, typography, and global layout.
3. Build the navigation and cinematic hero.
4. Implement responsive layouts and the primary booking CTA.
5. Add trust indicators and the brand story.
6. Build the cinematic video section.
7. Add services and the featured service spotlight.
8. Create the gallery and transformation interactions.
9. Add the process section, reviews, About, service area, and FAQ.
10. Complete the closing CTA and footer.
11. Add GSAP animations carefully.
12. Add optional 3D only if suitable and worthwhile.
13. Optimize assets and responsive behavior.
14. Test the website at all major viewport sizes.
15. Run the available build, type checks, and lint checks.
16. Fix errors and verify that every visible interaction works.

Do not stop after completing only the hero section. Deliver the complete homepage and all essential interactions.

# STEP 12 — FINAL QUALITY CHECK

Before declaring the work complete, verify:

- The visual result feels custom-designed, premium, and coherent.
- The homepage is not a generic template.
- The hero makes a strong first impression.
- Typography, imagery, spacing, and motion work together.
- The services accurately reflect the source information.
- Pricing is represented accurately, including starting-price qualifications.
- Review text and attributions are genuine.
- The booking CTA opens the existing Setmore booking page.
- The phone CTA works on mobile.
- The mobile menu works.
- The FAQ accordions work.
- The gallery works with keyboard and touch input where applicable.
- Videos have fallbacks and do not block the experience.
- Animations respect reduced-motion settings.
- The page does not overflow horizontally on mobile.
- No important buttons are dead links.
- There are no fabricated business claims.
- There are no critical console or build errors.
- The website remains usable if optional video or 3D assets fail to load.

At the end, provide a concise implementation summary listing:
1. Sections completed.
2. Technologies actually used.
3. Any real assets still needed from the business.
4. Any details that require confirmation from the owner.
5. Build or testing issues that remain.

The final outcome should feel like a carefully art-directed, premium automotive brand experience—with cinematic visuals, excellent typography, restrained motion, authentic business information, and a frictionless path to booking.

Build the website now. Do not merely describe how you would build it.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/40dc2158-529e-464d-8cb8-ee2df02786db).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
