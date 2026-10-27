<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- LOVABLE:BEGIN project decisions -->
## Project decisions
- Booking stays on Setmore (https://platinumdetailingtx.setmore.com/); never build a fake booking form. Service deep links live in src/data/services.ts (one entry per Setmore product ID).
- Site imagery is the business's own photography from their Setmore gallery, cropped/processed into src/assets/*.webp; replace with owner-provided photos when available. No stock photos are labeled as their work.
- Marketing homepage is a single route (src/routes/index.tsx) with hash-anchor navigation for sections; GSAP is loaded lazily via src/lib/anim.ts and all motion respects prefers-reduced-motion.
- Verified business copy (prices, policies, reviews) lives in src/data/site.ts and src/data/services.ts; edit those files, not components. Guarded by src/test/site-data.test.ts.
<!-- LOVABLE:END project decisions -->
