# Gennet Tech Solutions — Rebuilt Frontend

A full rebuild of the Gennet Tech website: same stack (Vite + React 19 + Tailwind v4),
same brand colors and asset filenames, but a cleaner architecture and a more
modern, conversion-focused design.

## How to use

This package contains the **source files only**. Your existing `public/` folder
(logo, photos, videos) is reused as-is — keep it.

1. Back up your current project (or work on a branch).
2. Copy these into your repo, replacing the old versions:
   - `index.html`
   - `package.json`
   - `vite.config.js`
   - `tailwind.config.js`
   - the entire `src/` folder
3. Delete the now-unused `src/App.css` (no longer imported).
4. Reinstall and run:
   ```bash
   npm install
   npm run dev
   ```

> Tested: `npm run build` compiles cleanly with no errors.

## Edit your details in one place

All company info — phone, email, WhatsApp number, services, team, testimonials,
projects — lives in **`src/data/site.js`**. Change it there and the whole site updates.

The contact and booking forms send enquiries straight to your **WhatsApp**
(with an email fallback), since the site has no backend. Update the number in
`site.js` (`whatsappRaw`) if it changes.

## What changed

**Fixed**
- Navbar links now work (smooth-scroll anchors) instead of dead `href=""`.
- Navbar is transparent over the hero and turns solid on scroll.
- Footer cleaned up: removed the "QUICK aS" typo and the duplicate "CITIES"
  column, and standardized on one email address.
- Scroll-to-top button rewritten with React state (the old one mutated classes
  directly and could break).
- Forms now actually deliver leads (WhatsApp + email) instead of discarding them.

**Added**
- Dedicated **Services** section (all 5 services, previously only in the footer).
- **Stats** band, **How it works** process, **Projects** gallery,
  **Testimonials**, and a pre-footer **call-to-action**.
- Real **SEO**: descriptive title, meta description, Open Graph / Twitter tags.
- Scroll-reveal animations (respecting `prefers-reduced-motion`).
- Google Fonts pairing — **Sora** (display) + **Inter** (body).

**Improved**
- Consistent design system with brand tokens defined in `src/index.css` (`@theme`).
- Cleaner, modular component structure (`components/`, `pages/`, `data/`, `hooks/`).
- Accessibility: keyboard focus styles, alt text, aria labels.
- Removed 6 unused dependencies (MUI, Emotion, Heroicons, react-icons,
  react-multi-carousel) — standardized on `lucide-react`. Smaller bundle.

## A couple of things to double-check
- Confirm the correct email (the old site had `info@gennettech.com` and
  `info@gennetechsolution.com`). Currently set to `info@gennetechsolution.com`.
- The stats and testimonials are realistic placeholders — swap in your real
  numbers and customer quotes in `site.js`.
