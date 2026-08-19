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
    pageTitle: "Northstar Home Services | Plumbing, Electrical & HVAC in Asheville, NC",
    description: "Northstar Home Services provides plumbing, electrical, and HVAC repair for Asheville, NC families. [LICENSE_INSURANCE_STATUS]. Emergency service: [EMERGENCY_AVAILABILITY].",
    favicon: "images/favicon.svg",
    // The live domain this site will be deployed to (no trailing slash).
    // Used for Open Graph/Twitter "og:url", the canonical link, and the
    // JSON-LD "url" field. example.com is the IANA-reserved placeholder
    // domain — replace it with the real one before launch.
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
    // Exact coordinates for the JSON-LD "geo" property (right-click the
    // business's pin in Google Maps → the lat/lng shown at the top of the
    // context menu). Left blank, "geo" is simply omitted from the
    // structured data rather than shipping a made-up location.
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
    formErrorMessage: "Something went wrong sending your request. Please try again, or call us directly.",
    services: [
      "Plumbing Repair",
      "Drain & Sewer Cleaning",
      "Water Heater Service",
      "Electrical Services",
      "HVAC Repair & Install",
      "Emergency Repair",
      "Something Else"
    ]
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
    // Plain-text address used as a fallback map search if mapEmbedSrc (below)
    // is empty. Also feeds "Get Directions" and the footer/contact address.
    mapQuery: "482 Maple Ridge Road, Asheville, NC 28801",
    // Preferred: paste the real src URL from Google Maps → Share → Embed a
    // map → copy HTML → grab the iframe's src="...". That points at the
    // exact business location instead of a generic area/zip-code pin.
    // Leave "" to fall back to a best-effort search built from mapQuery.
    mapEmbedSrc: ""
  },

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

  // A light monochrome system: everything is grayscale (text/textMuted/
  // bg/bgAlt/border) except a single accent used only for buttons, links,
  // and small highlights (eyebrows, stat numbers, icon glyphs, focus
  // rings). To re-brand a client onto this template, in almost every case
  // you only need to touch three fields:
  //   - accent:      the client's brand color. Works dark, vivid, or
  //                  muted — accent never sits directly on a dark
  //                  section background (those invert text/bg instead),
  //                  so contrast holds up regardless of the shade chosen.
  //   - accentHover: a hover/active shade of accent (usually a bit darker).
  //   - accentText:  the text/icon color placed ON TOP of solid accent
  //                  buttons — "#FFFFFF" for a dark or vivid accent,
  //                  something like "#111111" if a client's accent is
  //                  itself very light/pale.
  // The rest (text/textMuted/bg/bgAlt/border) define the grayscale scale
  // and rarely need to change — only touch them for a client who wants a
  // warmer/cooler gray instead of true neutral.
  colors: {
    accent: "#2A2A2A",
    accentHover: "#000000",
    accentText: "#FFFFFF",
    text: "#111111",
    textMuted: "#555555",
    bg: "#FFFFFF",
    bgAlt: "#F7F7F7",
    border: "#E5E5E5",
    // Functional feedback colors for the contact form's success/error
    // messages — independent of the accent system above.
    success: "#3F8F5F",
    error: "#C0392B"
  }
};
