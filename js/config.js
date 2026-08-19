/* =========================================================================
   SITE CONFIG
   -------------------------------------------------------------------------
   This is the ONLY file you should need to edit to re-brand this template
   for a new client. Nothing business-specific is hardcoded in index.html
   or styles.css — every string, color, image path, and content list below
   flows into the page at runtime via js/main.js.

   To reuse this template:
     1. Update BUSINESS, CONTACT, HOURS, SERVICES, GALLERY, TESTIMONIALS.
     2. Update COLORS to the client's brand palette.
     3. Replace images/placeholder.svg references with real photos (or point
        paths elsewhere), and set business.logoImage if a logo file exists.
     4. Set contact.formEndpoint to a real Formspree endpoint (formspree.io)
        so the contact form actually sends anywhere.
     5. Set meta.siteUrl to the real deployed domain, and business.geo to
        the real coordinates, before this goes live (SEO/JSON-LD fields).
     6. Open index.html in a browser — done, no build step required.

   Fields wrapped in [BRACKETS] are unverified claims (license numbers,
   review counts, years in business, testimonials, etc). Replace every one
   with a real, confirmed value before this goes live for a client — never
   leave a bracket in place, and never swap it for a plausible-sounding
   guess. If the real value isn't known yet, delete the stat/section rather
   than ship a number nobody can vouch for.
   ========================================================================= */

window.SITE_CONFIG = {

  meta: {
    // Leave pageTitle/description "" to auto-generate them from
    // business.name + the first entry in services.items + contact.address
    // (city, state) — see buildDefaultTitle()/buildDefaultDescription() in
    // main.js. Set either one explicitly to override the template, e.g.
    // once real license/insurance copy is confirmed and you want it in
    // the description.
    pageTitle: "",
    description: "",
    favicon: "images/favicon.svg",
    // Optional: a real 180x180 PNG for the iOS/iPadOS home-screen icon.
    // Apple Touch Icon needs a raster format (SVG isn't reliably
    // supported), so this is left blank rather than pointed at
    // favicon.svg. Leave "" to omit the tag entirely.
    appleTouchIcon: "",
    // The live domain this site will be deployed to (no trailing slash).
    // Used for Open Graph/Twitter "og:url", the canonical link, and the
    // JSON-LD "url" field — this one field IS the site's canonical URL.
    // example.com is the IANA-reserved placeholder domain — replace it
    // with the real one before launch. Also update robots.txt and
    // sitemap.xml at the project root to match: those are plain static
    // files a crawler fetches directly (never through index.html/JS), so
    // they can't read this value automatically and must be kept in sync
    // by hand whenever the real domain changes.
    siteUrl: "https://www.example.com",
    // Social share preview image, ideally 1200x630 and a raster format
    // (PNG/JPG) — Twitter and some Facebook crawlers don't render SVG.
    ogImage: "images/og-placeholder.png",
    // Optional, e.g. "@yourbusiness". Leave "" to omit the twitter:site tag.
    twitterHandle: ""
  },

  business: {
    name: "Northstar Home Services",
    shortName: "Northstar",
    initials: "NHS",
    // Optional: path to a logo image (e.g. "images/logo.svg"). Leave "" to
    // fall back to the colored initials tile above.
    logoImage: "",
    tagline: "Reliable Home Services You Can Actually Trust",
    foundedYear: "[FOUNDED_YEAR]",
    // schema.org type for the JSON-LD structured data. Use the most specific
    // type that still covers everything the business does — e.g. "Plumber"
    // or "Electrician" for a single-trade shop, or the broader
    // "HomeAndConstructionBusiness" (used here) for a multi-trade business.
    schemaType: "HomeAndConstructionBusiness",
    // schema.org priceRange for the JSON-LD data — a relative indicator
    // like "$$", or a real range like "$100-$5000". Left blank, the
    // "priceRange" field is simply omitted rather than guessing.
    priceRange: "[PRICE_RANGE]",
    // Exact coordinates (right-click the business's pin in Google Maps →
    // the lat/lng shown at the top of the context menu). Used for the
    // JSON-LD "geo" property, AND as the map embed fallback below when
    // hours.mapEmbedSrc is blank — a coordinate pin is exact regardless of
    // whether the address text geocodes cleanly, so fill this in even if
    // you're not pasting a full mapEmbedSrc. Left blank, "geo" is simply
    // omitted from the structured data rather than shipping a made-up
    // location.
    geo: {
      lat: "[LATITUDE]",
      lng: "[LONGITUDE]"
    }
  },

  contact: {
    phoneDisplay: "(828) 214-7890",
    phoneHref: "+18282147890",
    email: "hello@northstarhomeservices.com",
    address: {
      line1: "482 Maple Ridge Road",
      city: "Asheville",
      state: "NC",
      zip: "28801",
      country: "US"
    },
    eyebrow: "Get In Touch",
    heading: "Request Your Free Quote",
    subheading: "Tell us a bit about the project and we'll get back to you within one business hour during our regular hours.",
    // Create a form at formspree.io, then paste its endpoint here — it'll
    // look like "https://formspree.io/f/abcdwxyz". The form won't submit
    // (it shows a clear "not connected" error instead) until this bracket
    // placeholder is replaced with a real endpoint.
    formEndpoint: "[FORMSPREE_ENDPOINT]",
    formSuccessMessage: "Thanks — your request has been received! A member of our team will reach out within one business hour.",
    // The business phone is always appended automatically as a fallback
    // when this shows, so it doesn't need to be repeated here.
    formErrorMessage: "Something went wrong sending your request. Please try again,",
    // The "Service Needed" dropdown is NOT set here — it's generated
    // automatically from services.items below, so the two lists can never
    // drift out of sync. otherServiceLabel adds one extra catch-all option
    // at the end for anything not on that list; set "" to omit it.
    otherServiceLabel: "Something Else"
  },

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    google: "https://google.com"
  },

  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#testimonials" },
      { label: "Hours", href: "#hours" },
      { label: "Contact", href: "#contact" }
    ],
    ctaLabel: "Get a Free Quote",
    ctaHref: "#contact"
  },

  hero: {
    eyebrow: "Asheville's Home Service Team",
    headline: "Reliable Home Services, Done Right the First Time",
    subheadline: "Plumbing, electrical, and HVAC experts serving Asheville families since [FOUNDED_YEAR] — upfront pricing, licensed pros, and same-week appointments.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Call (828) 214-7890",
    secondaryCtaHref: "tel:+18282147890",
    ratingText: "[GOOGLE_RATING] from [REVIEW_COUNT]+ reviews",
    image: "images/placeholder.svg",
    imageAlt: "Placeholder — replace with a hero photo of your business, team, or completed work"
  },

  about: {
    eyebrow: "Why Homeowners Choose Us",
    heading: "Built On Trust, Backed By [YEARS_IN_BUSINESS] Years Of Experience",
    body: "Northstar Home Services started as a one-truck plumbing operation in [FOUNDED_YEAR] and has grown into a trusted home services team — without losing the personal touch. Every technician is background-checked, licensed, and trained to treat your home like their own. We show up on time, explain the problem in plain English, and give you an upfront price before any work begins.",
    image: "images/placeholder.svg",
    imageAlt: "Placeholder — replace with a photo of your team or business",
    // Every value below is a claim a real customer could ask you to prove.
    // Only put a real number here — never leave it looking like a finished stat.
    stats: [
      { number: "[YEARS_IN_BUSINESS]", label: "Years in Business" },
      { number: "[JOBS_COMPLETED]", label: "Jobs Completed" },
      { number: "[CUSTOMER_REFERRAL_RATE]", label: "Customers Who Refer Us" },
      { number: "[EMERGENCY_AVAILABILITY]", label: "Emergency Availability" }
    ]
  },

  services: {
    eyebrow: "What We Do",
    heading: "Full-Service Home Repair & Maintenance",
    subheading: "From a dripping faucet to a full system install, our licensed technicians handle it with the same care and attention to detail.",
    items: [
      {
        icon: "droplet",
        title: "Plumbing Repair",
        description: "Leaky pipes, running toilets, and low water pressure — diagnosed and fixed fast, with no surprise charges."
      },
      {
        icon: "waves",
        title: "Drain & Sewer Cleaning",
        description: "Fast, thorough clearing for stubborn clogs using camera inspection to find the real cause, not just the symptom."
      },
      {
        icon: "flame",
        title: "Water Heater Service",
        description: "Repair, maintenance, and same-day installation for tank and tankless water heaters, all major brands."
      },
      {
        icon: "zap",
        title: "Electrical Services",
        description: "Panel upgrades, outlet repairs, and lighting installs completed safely and up to code, every time."
      },
      {
        icon: "thermometer",
        title: "HVAC Repair & Install",
        description: "Keep your home comfortable year-round with tune-ups, repairs, and full system replacements."
      },
      {
        icon: "shield-alert",
        title: "Emergency Repairs",
        description: "Burst pipe at midnight? We offer [EMERGENCY_AVAILABILITY] emergency response."
      }
    ]
  },

  gallery: {
    eyebrow: "Our Work",
    heading: "Recent Projects Around Asheville",
    subheading: "A look at the craftsmanship and care that goes into every job, big or small.",
    // Add one object per photo. src can point anywhere (local file or URL);
    // alt should describe the actual photo once it replaces the placeholder.
    images: [
      { src: "images/placeholder.svg", alt: "Placeholder — replace with a photo of completed work" },
      { src: "images/placeholder.svg", alt: "Placeholder — replace with a photo of completed work" },
      { src: "images/placeholder.svg", alt: "Placeholder — replace with a photo of completed work" },
      { src: "images/placeholder.svg", alt: "Placeholder — replace with a photo of completed work" },
      { src: "images/placeholder.svg", alt: "Placeholder — replace with a photo of completed work" },
      { src: "images/placeholder.svg", alt: "Placeholder — replace with a photo of completed work" }
    ]
  },

  testimonials: {
    eyebrow: "Reviews",
    heading: "What Our Neighbors Are Saying",
    // Never invent quotes or reviewer names. Paste real reviews (with
    // permission) from Google, Facebook, etc. Until then, leave these
    // as visible placeholders rather than plausible-looking fake ones.
    items: [
      {
        quote: "[REVIEW_TEXT]",
        name: "[REVIEWER_NAME]",
        location: "[REVIEWER_LOCATION]",
        rating: "[REVIEW_RATING]"
      },
      {
        quote: "[REVIEW_TEXT]",
        name: "[REVIEWER_NAME]",
        location: "[REVIEWER_LOCATION]",
        rating: "[REVIEW_RATING]"
      },
      {
        quote: "[REVIEW_TEXT]",
        name: "[REVIEWER_NAME]",
        location: "[REVIEWER_LOCATION]",
        rating: "[REVIEW_RATING]"
      }
    ]
  },

  hours: {
    eyebrow: "Hours & Location",
    heading: "Stop By Or Give Us A Call",
    subheading: "Proudly serving Asheville and the surrounding communities. Emergency service is available outside regular hours.",
    schedule: [
      { day: "Monday – Friday", time: "7:00 AM – 7:00 PM" },
      { day: "Saturday", time: "8:00 AM – 4:00 PM" },
      { day: "Sunday", time: "Closed — Emergency service only" }
    ],
    // Machine-readable mirror of the schedule above, used only for the
    // JSON-LD "openingHoursSpecification" (search engines can't parse the
    // free-text version). Keep this in sync by hand whenever hours change —
    // closed days just don't get an entry. opens/closes are 24-hour "HH:MM".
    structuredSchedule: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "19:00" },
      { days: ["Saturday"], opens: "08:00", closes: "16:00" }
    ],
    emergencyNote: "Emergencies? [EMERGENCY_AVAILABILITY].",
    // Plain-text address, used two ways: (1) feeds "Get Directions" and the
    // footer/contact address always; (2) as the last-resort map fallback,
    // only if BOTH mapEmbedSrc and business.geo below are left empty.
    mapQuery: "482 Maple Ridge Road, Asheville, NC 28801",
    // The map picks the first of these three that's filled in, in order:
    //   1. mapEmbedSrc (this field) — paste the real src URL from Google
    //      Maps → Share → Embed a map → copy HTML → grab the iframe's
    //      src="...". The only option that can show reviews/business info,
    //      not just a pin.
    //   2. business.geo.lat/lng above — drops an exact pin at those
    //      coordinates. Reliable even for a brand-new listing Google
    //      hasn't fully indexed yet.
    //   3. mapQuery above — a plain-text address search. Works for any
    //      real, geocodable address, but a fictional or not-yet-listed
    //      one (like this template's placeholder default) resolves only
    //      to the city/zip level, not a street pin.
    // Leave "" to skip straight to option 2, or 3 if that's empty too.
    mapEmbedSrc: ""
  },

  // Towns/cities/neighborhoods served, beyond the home city in
  // contact.address. Renders as an "Areas We Serve" line in the footer,
  // and feeds the JSON-LD "areaServed" field — one list, two consumers,
  // so it can't drift out of sync. Leave empty to omit both.
  serviceAreas: [
    "Asheville",
    "Arden",
    "Black Mountain",
    "Weaverville"
  ],

  footer: {
    tagline: "Locally owned and operated, serving Asheville since [FOUNDED_YEAR]. [LICENSE_INSURANCE_STATUS].",
    quickLinksHeading: "Quick Links",
    contactHeading: "Contact",
    hoursHeading: "Hours",
    // Confirm the real license number and insurance/bonding status with the
    // business owner before this ships — never guess or leave it looking real.
    licenseNote: "NC Contractor License #[LICENSE_NUMBER] · [INSURANCE_BONDING_STATUS]"
  },

  mobileBar: {
    callLabel: "Call Now",
    quoteLabel: "Free Quote"
  },

  // Per-section on/off switches. Set any flag to false to drop that
  // section entirely — its nav link, footer link, and layout spacing all
  // disappear with it, no leftover gap. Omitted keys default to true, so
  // this whole object can be left out for a client who wants everything.
  //   gallery/testimonials/about/hours — hide the whole section.
  //   stats — hides just the stat row inside About (About itself stays).
  //   map   — hides just the map embed inside Hours (hours-panel expands
  //           to fill the space instead of leaving a blank column).
  sections: {
    gallery: true,
    testimonials: true,
    stats: true,
    about: true,
    hours: true,
    map: true
  },

  // Quietly colorful, not strictly monochrome: warm off-white backgrounds
  // and warm (not pure neutral) gray text, plus a real muted-but-saturated
  // accent that does visible work — eyebrow labels, icon fills, link
  // underlines, the active nav item, stat numbers, focus rings — not just
  // buttons. To re-brand a client onto this template, in almost every
  // case you only need to touch three fields:
  //   - accent:      the client's brand color. A calm, muted-but-saturated
  //                  color reads best (deep teal, terracotta, muted blue)
  //                  rather than something near-black or neon — but any
  //                  shade works: accent never sits directly on a dark
  //                  section background as foreground text/icons (those
  //                  invert text/bg instead), so contrast holds up
  //                  regardless of the shade chosen.
  //   - accentHover: a hover/active shade of accent (usually a bit darker).
  //   - accentText:  the text/icon color placed ON TOP of solid accent
  //                  buttons — "#FFFFFF" for a dark or vivid accent,
  //                  something like "#111111" if a client's accent is
  //                  itself very light/pale.
  // accentSoft is a light wash of accent (card/icon-tile backgrounds,
  // hover states) — leave it unset and it's auto-derived from accent via
  // CSS color-mix(), so it updates for free whenever accent changes.
  // Only set it explicitly if a client wants a specific tint instead.
  // The rest (text/textMuted/bg/bgAlt/border) define the warm neutral
  // scale and rarely need to change — only touch them for a client who
  // wants a cooler/more neutral gray instead of this template's warmth.
  colors: {
    accent: "#2E6659",
    accentHover: "#234F45",
    accentText: "#FFFFFF",
    // accentSoft: "",   // uncomment to override the auto-derived tint
    text: "#1C1916",
    textMuted: "#5C5650",
    bg: "#FFFEFB",
    bgAlt: "#F7F2EA",
    border: "#E6DFD3",
    // Functional feedback colors for the contact form's success/error
    // messages — independent of the accent system above.
    success: "#3F8F5F",
    error: "#C0392B"
  }
};
