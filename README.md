# Home Services Site Template

A one-page marketing site for a local home-services business (plumbing,
electrical, HVAC, and similar trades). Plain HTML, CSS, and vanilla
JavaScript — no framework, no npm dependencies, no build step. Open
`index.html` in a browser and it works.

The entire site is driven from one file: **`js/config.js`**. Nothing
business-specific — no name, phone number, color, photo, or copy — is
hardcoded in `index.html` or `css/styles.css`. `js/main.js` reads
`config.js` at runtime and renders the page from it. To re-brand this
template for a new client, you should only ever need to edit
`js/config.js` and the files in `images/`.

## How it works

- `index.html` is a shell of empty, ID-tagged elements (`<h1
  id="hero-headline"></h1>`, etc.) plus the static structural chrome
  (header, nav, footer, form markup) that doesn't vary per client.
- `js/config.js` holds every piece of content and every brand color as
  one big JavaScript object, `window.SITE_CONFIG`.
- `js/main.js` runs on page load, reads `SITE_CONFIG`, and fills in the
  page — text content, image `src`/`alt`, colors (as CSS custom
  properties), nav links, the JSON-LD structured data, etc.
- `css/styles.css` holds all visual styling, driven by the CSS custom
  properties `main.js` sets from `config.js`'s `colors` block.

Because everything is rendered client-side, a visitor with JavaScript
disabled will only see a "JavaScript Required" notice on the homepage —
see **Known limitations** below.

## Quick start

1. Open `index.html` directly in a browser (double-click it, or serve the
   folder with any static file server). No install, no build.
2. Edit `js/config.js` to change anything about the site's content.
3. Refresh the browser to see changes — there's nothing to compile.

## config.js field reference

Every top-level block in `SITE_CONFIG`, and what it controls:

### `meta`
Page-level SEO tags, written into `<head>` by `main.js`.
- `pageTitle`, `description` — the `<title>` and meta description. Leave
  `""` and they're auto-generated from `business.name` + the first entry
  in `services.items` + `contact.address` (city/state). Set either to
  override the template.
- `favicon` — path to the favicon file.
- `appleTouchIcon` — optional 180×180 PNG for iOS/iPadOS home-screen
  icons. Leave `""` to omit the tag (SVG favicons aren't reliably
  supported here, so this needs its own raster file).
- `siteUrl` — the live domain (no trailing slash). Drives `og:url`, the
  `<link rel="canonical">` tag, and the JSON-LD `url` field — this one
  field **is** the canonical URL. Also referenced by (but not
  auto-synced with — see Known limitations) `robots.txt`/`sitemap.xml`.
- `ogImage` — social share preview image, ideally 1200×630 PNG/JPG.
- `twitterHandle` — optional `@handle`; omitted if blank.

### `business`
- `name`, `shortName`, `initials` — full name, short header/footer name,
  and initials used for the logo tile when no `logoImage` is set.
- `logoImage` — path to a real logo file; falls back to a colored
  initials tile when blank.
- `tagline`, `foundedYear` — used in hero/about/footer copy.
- `schemaType` — the schema.org `@type` for JSON-LD (e.g. `"Plumber"`,
  `"Electrician"`, or the default `"HomeAndConstructionBusiness"` for a
  multi-trade shop).
- `priceRange` — schema.org `priceRange` (e.g. `"$$"` or a real range).
  Omitted from JSON-LD while still bracketed.
- `geo.lat` / `geo.lng` — exact coordinates. Feed the JSON-LD `geo`
  property AND are the preferred map-embed fallback (see `hours` below).

### `contact`
- `phoneDisplay` / `phoneHref` — formatted phone number and its `tel:`
  value. Used everywhere a phone number appears (header, contact list,
  footer, mobile bar) as an actual `tel:` link.
- `email` — used as a `mailto:` link wherever it appears.
- `address` — `line1`, `city`, `state`, `zip`, `country`.
- `eyebrow`, `heading`, `subheading` — contact section copy.
- `web3FormsAccessKey` — the client's Web3Forms access key (see "Set the
  Web3Forms access key" below for why each client should have their own).
  Left blank or bracketed, the form shows a clear "not connected" error
  instead of silently failing.
- `formSuccessMessage` — shown in the confirmation panel that replaces
  the form on a successful submission.
- `formErrorMessage` — shown on failure; the business phone number is
  always appended automatically as a fallback, so don't repeat it here.
- `otherServiceLabel` — one extra catch-all option appended to the
  "Service Needed" dropdown (which is otherwise generated automatically
  from `services.items`, not set here). `""` omits it.

### `social`
`facebook` / `instagram` / `google` URLs. Any left blank simply don't
render a social icon.

### `nav`
- `links` — array of `{ label, href }`. A link only renders if its
  `#anchor` target still exists on the page (i.e. if you haven't toggled
  that section off in `sections` below) — no manual syncing needed.
- `ctaLabel` / `ctaHref` — the header's call-to-action button.

### `hero`, `about`, `services`, `gallery`, `testimonials`, `faq`, `hours`
Section content. Each has `eyebrow`/`heading`/`subheading`-style copy
fields plus its own list:
- `services.items[]` — `{ icon, title, description }`. `icon` is a name
  from the Lucide-sourced icon set baked into `main.js` (`droplet`,
  `waves`, `flame`, `zap`, `thermometer`, `shield-alert`, `wrench`, ...).
- `gallery.images[]` — `{ src, alt }`. `alt` is required and shown in the
  lightbox and as the accessible name for the "view larger" button.
- `testimonials.items[]` — `{ quote, name, location, rating }`. **Never
  invent these** — see the placeholder note below.
- `faq.items[]` — `{ question, answer }`. Renders as an accessible
  accordion and also emits FAQPage JSON-LD.
- `about.stats[]` — `{ number, label }`. Numbers animate/count up into
  view automatically if they start with a digit (e.g. `"500+"`,
  `"4.9"`); non-numeric/bracketed values just render as static text.
- `hero.image` / `about.image` — see **Image dimensions** below for
  sizing.

### `hours` (map-specific fields)
- `schedule[]` — display text, `{ day, time }`.
- `structuredSchedule[]` — machine-readable mirror for JSON-LD
  `openingHoursSpecification` (`{ days: [...], opens: "HH:MM", closes:
  "HH:MM" }`). Keep this in sync with `schedule` by hand.
- `mapQuery` — plain-text address, used for "Get Directions" always, and
  as the last-resort map fallback.
- `mapEmbedSrc` — the map picks the first of three sources that's filled
  in: (1) `mapEmbedSrc` — a real embed URL pasted from Google Maps
  → Share → Embed a map (the only option that can show reviews/business
  info, not just a pin); (2) `business.geo.lat`/`lng` — an exact
  coordinate pin, reliable even for an unlisted address; (3) `mapQuery`
  — a plain-text search, which resolves only to city/zip level for a
  fictional or not-yet-indexed address (like this template's default).

### `serviceAreas`
Array of town/city names served, beyond the home city in
`contact.address`. Renders as an "Areas We Serve" line in the footer and
feeds the JSON-LD `areaServed` field from the same list. Empty array
omits both.

### `footer`
`tagline`, column headings, and `licenseNote` (license number and
insurance/bonding status — a real, confirmed claim, not a guess).

### `mobileBar`
`callLabel` / `quoteLabel` — button text for the mobile-only sticky call
bar ("Call Now" / "Get a Quote").

### `sections`
Boolean on/off switches: `gallery`, `testimonials`, `faq`, `stats`,
`about`, `hours`, `map`. Setting any of the whole-section flags
(`gallery`/`testimonials`/`faq`/`about`/`hours`) to `false` removes that
section, its nav link, and its footer link entirely — no leftover gap.
`stats` and `map` are sub-toggles (hide just the stat row inside About,
or just the map embed inside Hours) with no nav link of their own.
Omitted keys default to `true`; the whole object can be left out.

### `colors`
CSS custom properties, applied to `:root` at runtime. To re-brand a
client, you'll normally only touch three fields:
- `accent` — the client's brand color. A calm, muted-but-saturated color
  (deep teal, terracotta, muted blue) reads best, but any shade works —
  accent is never placed as foreground text/icons directly on a dark
  section background, so contrast holds up regardless of how dark,
  vivid, or muted it is.
- `accentHover` — a hover/active shade (usually a bit darker).
- `accentText` — the text/icon color on top of solid accent buttons —
  `"#FFFFFF"` for a dark/vivid accent, something like `"#111111"` if a
  client's accent is itself very light.

`accentSoft` (a light wash of accent, used for icon-tile and card-hover
backgrounds) is auto-derived from `accent` if left unset — only set it
explicitly for a specific tint. `text`/`textMuted`/`bg`/`bgAlt`/`border`
define the warm neutral scale and rarely need to change.
`success`/`error` are fixed-meaning form feedback colors, independent of
the accent system.

## Launching a new client site

1. **Clone/copy** this project folder for the new client.
2. **Edit `js/config.js`** top to bottom — business info, contact info,
   hours, services, nav, hero/about/gallery/testimonials/FAQ copy,
   footer, and `colors`.
3. **Replace images** — swap every `images/placeholder.svg` reference in
   `config.js` for real photos (see dimensions below), and set
   `business.logoImage` if a logo file exists. Update `meta.ogImage` too.
4. **Set the Web3Forms access key** — have the client create their own free
   access key at [web3forms.com](https://web3forms.com) using their own
   email address, and paste it into `contact.web3FormsAccessKey`. Use the
   client's email, not yours: the key is tied to whatever inbox creates it,
   so this makes the client the owner of their own form. It keeps working
   on its own — no dependency on you, and no per-client setup on your
   end — and submissions land straight in their inbox instead of yours.
5. **Update the map embed** — get the real address-based embed from
   Google Maps (Share → Embed a map) into `hours.mapEmbedSrc`, or at
   minimum fill in `business.geo.lat`/`lng` (see the `hours` field notes
   above for why this matters).
6. **Toggle unused sections** — set any of `sections.gallery` /
   `testimonials` / `faq` / `about` / `hours` / `stats` / `map` to
   `false` for anything the client doesn't need.
7. **Update `meta.siteUrl`** to the real domain, and manually mirror it
   into `robots.txt` and `sitemap.xml` (see Known limitations — these
   two files can't read `config.js`).
8. **Deploy to Cloudflare Pages** — connect the repo (or drag-and-drop
   the folder) in the Cloudflare dashboard under Workers & Pages → Create
   → Pages. No build command or output directory needed — this is a
   static site, so "framework preset: None" with build command left
   blank works.
9. **Connect the domain** — add the client's custom domain under the
   Pages project's Custom Domains tab, and update DNS as instructed.
10. **Final pass**: search `config.js` for any remaining `[BRACKET]`
    placeholder and replace it with a real, confirmed value (see below).

## Image dimensions

Every image is displayed inside a container with a fixed CSS
`aspect-ratio`, cropped via `object-fit: cover` — so an image doesn't
need to be pixel-exact, just close to the right shape and high enough
resolution not to look soft when cropped.

| Image | Aspect ratio | Recommended size |
|---|---|---|
| `hero.image` | 1:1 (square) | at least 1200×1200px |
| `about.image` | ~4:4.6 (slightly tall portrait) | at least 1000×1150px |
| `gallery.images[]` | 4:3 | at least 1200×900px |
| `meta.ogImage` | 1200:630 | exactly 1200×630px, PNG/JPG (not SVG — several social crawlers don't render it) |
| `business.logoImage` | any (contained, not cropped) | SVG preferred; a square PNG works too |
| `meta.appleTouchIcon` | 1:1 (square) | exactly 180×180px PNG |

## Never invent content

Every `[BRACKETED_LIKE_THIS]` value in `config.js` is a placeholder for
information only the client can confirm — license numbers, review
counts, years in business, founded year, pricing, insurance/bonding
status, payment methods, and every testimonial (quote, name, location,
rating). **Replace each one with a real, verified value before the site
goes live — never with a plausible-sounding guess.** If a real value
isn't available yet, delete that stat, testimonial, or line rather than
publish a number, review, or claim nobody can vouch for. This applies
in particular to:
- **Services and pricing** — only list services actually offered, at
  terms the business will actually honor.
- **Reviews/testimonials** — paste real reviews (with permission) from
  Google, Facebook, etc.; never write a plausible-sounding fake one.
- **Hours** — must match the business's real, current hours.
- **Licensing/insurance claims** — `footer.licenseNote` and any
  `[LICENSE_INSURANCE_STATUS]` text must be a confirmed, current fact —
  an incorrect licensing claim is a legal liability, not just a content
  bug.

## Known limitations

- **`robots.txt` and `sitemap.xml` are static files.** A crawler fetches
  them directly and never runs `js/main.js`, so they can't read
  `meta.siteUrl` from `config.js` automatically. Update both by hand
  whenever the real domain changes.
- **The homepage needs JavaScript.** Since all content is rendered from
  `config.js` at runtime, a visitor with JavaScript disabled sees a
  "JavaScript Required" notice rather than the real page — there's no
  server-side or build-time rendering step to fall back to without
  either introducing a build step or duplicating every piece of content
  as hardcoded HTML (which would defeat the single-source-of-config
  design). `404.html` is the exception: its content is static HTML, so
  it reads fine with JavaScript disabled (only the header/footer
  branding, which comes from `config.js`, won't populate).
- **Two structured-data scripts.** LocalBusiness JSON-LD and (if the FAQ
  section is enabled) FAQPage JSON-LD are separate `<script>` tags in
  `<head>`, both written by `main.js`.
