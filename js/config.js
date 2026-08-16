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
     3. Swap the files in /images (or point paths elsewhere).
     4. Open index.html in a browser — done, no build step required.
   ========================================================================= */

window.SITE_CONFIG = {

  meta: {
    pageTitle: "Northstar Home Services | Plumbing, Electrical & HVAC in Asheville, NC",
    description: "Northstar Home Services provides trusted plumbing, electrical, and HVAC repair for Asheville, NC families. Licensed, insured, and available 24/7 for emergencies.",
    favicon: "images/favicon.svg"
  },

  business: {
    name: "Northstar Home Services",
    shortName: "Northstar",
    initials: "NHS",
    tagline: "Reliable Home Services You Can Actually Trust",
    foundedYear: 2009
  },

  contact: {
    phoneDisplay: "(828) 214-7890",
    phoneHref: "+18282147890",
    email: "hello@northstarhomeservices.com",
    address: {
      line1: "482 Maple Ridge Road",
      city: "Asheville",
      state: "NC",
      zip: "28801"
    },
    eyebrow: "Get In Touch",
    heading: "Request Your Free Quote",
    subheading: "Tell us a bit about the project and we'll get back to you within one business hour during our regular hours.",
    formSuccessMessage: "Thanks — your request has been received! A member of our team will reach out within one business hour.",
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
    eyebrow: "Asheville's Most Trusted Home Service Team",
    headline: "Reliable Home Services, Done Right the First Time",
    subheadline: "Plumbing, electrical, and HVAC experts serving Asheville families since 2009 — upfront pricing, licensed pros, and same-week appointments.",
    primaryCtaLabel: "Get a Free Quote",
    primaryCtaHref: "#contact",
    secondaryCtaLabel: "Call (828) 214-7890",
    secondaryCtaHref: "tel:+18282147890",
    ratingText: "4.9 out of 5 from 500+ neighbors",
    image: "images/hero.svg",
    imageAlt: "Illustration of a well-maintained home, representing Northstar Home Services"
  },

  about: {
    eyebrow: "Why Homeowners Choose Us",
    heading: "Built On Trust, Backed By 15 Years Of Experience",
    body: "Northstar Home Services started as a one-truck plumbing operation in 2009 and has grown into Asheville's most-referred home services team — without losing the personal touch. Every technician is background-checked, licensed, and trained to treat your home like their own. We show up on time, explain the problem in plain English, and give you an upfront price before any work begins.",
    image: "images/about.svg",
    imageAlt: "Illustration of a Northstar technician helping a homeowner",
    stats: [
      { number: "15+", label: "Years in Business" },
      { number: "4,200+", label: "Jobs Completed" },
      { number: "98%", label: "Customers Who Refer Us" },
      { number: "24/7", label: "Emergency Availability" }
    ]
  },

  services: {
    eyebrow: "What We Do",
    heading: "Full-Service Home Repair & Maintenance",
    subheading: "From a dripping faucet to a full system install, our licensed technicians handle it with the same care and attention to detail.",
    items: [
      {
        icon: "drop",
        title: "Plumbing Repair",
        description: "Leaky pipes, running toilets, and low water pressure — diagnosed and fixed fast, with no surprise charges."
      },
      {
        icon: "wrench",
        title: "Drain & Sewer Cleaning",
        description: "Fast, thorough clearing for stubborn clogs using camera inspection to find the real cause, not just the symptom."
      },
      {
        icon: "flame",
        title: "Water Heater Service",
        description: "Repair, maintenance, and same-day installation for tank and tankless water heaters, all major brands."
      },
      {
        icon: "bolt",
        title: "Electrical Services",
        description: "Panel upgrades, outlet repairs, and lighting installs completed safely and up to code, every time."
      },
      {
        icon: "thermometer",
        title: "HVAC Repair & Install",
        description: "Keep your home comfortable year-round with tune-ups, repairs, and full system replacements."
      },
      {
        icon: "shield",
        title: "Emergency Repairs",
        description: "Burst pipe at midnight? We offer true 24/7 emergency response, 365 days a year."
      }
    ]
  },

  gallery: {
    eyebrow: "Our Work",
    heading: "Recent Projects Around Asheville",
    subheading: "A look at the craftsmanship and care that goes into every job, big or small.",
    images: [
      { src: "images/gallery-1.svg", alt: "Technician repairing a kitchen sink" },
      { src: "images/gallery-2.svg", alt: "Newly installed tankless water heater" },
      { src: "images/gallery-3.svg", alt: "Electrical panel upgrade in progress" },
      { src: "images/gallery-4.svg", alt: "HVAC system installation on a residential home" },
      { src: "images/gallery-5.svg", alt: "Technician inspecting a bathroom pipe" },
      { src: "images/gallery-6.svg", alt: "Finished plumbing fixture installation" }
    ]
  },

  testimonials: {
    eyebrow: "Reviews",
    heading: "What Our Neighbors Are Saying",
    items: [
      {
        quote: "Northstar replaced our water heater the same day it failed. The technician was on time, explained everything clearly, and the price matched the quote exactly. Couldn't ask for more.",
        name: "Rachel Kim",
        location: "West Asheville, NC",
        rating: 5
      },
      {
        quote: "We've used Northstar for three separate projects now — a panel upgrade, an HVAC tune-up, and a drain clog. Every single visit has been professional and honestly priced.",
        name: "Marcus Bell",
        location: "Biltmore Park, NC",
        rating: 5
      },
      {
        quote: "Called at 11pm with a burst pipe and someone was at our door within the hour. That kind of reliability is rare. They're our go-to for anything in the house now.",
        name: "Priya Anand",
        location: "Montford, NC",
        rating: 5
      },
      {
        quote: "Fair pricing, no upselling, and they clean up after themselves — which shouldn't be rare, but it is. Highly recommend Northstar to anyone in the Asheville area.",
        name: "Tom Whitfield",
        location: "Kenilworth, NC",
        rating: 5
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
    emergencyNote: "Emergencies? We answer the phone 24/7, 365 days a year.",
    mapQuery: "482 Maple Ridge Road, Asheville, NC 28801"
  },

  footer: {
    tagline: "Licensed, insured, and locally owned — Asheville's trusted home service team since 2009.",
    quickLinksHeading: "Quick Links",
    contactHeading: "Contact",
    hoursHeading: "Hours",
    licenseNote: "NC Licensed Contractor #P-48213 · Fully Insured & Bonded"
  },

  mobileBar: {
    callLabel: "Call Now",
    quoteLabel: "Free Quote"
  },

  colors: {
    primary: "#173B4A",
    primaryDark: "#0D242E",
    primaryLight: "#2B5568",
    accent: "#C4923D",
    accentLight: "#E0B36A",
    dark: "#12181B",
    light: "#F7F5F0",
    surface: "#FFFFFF",
    text: "#242C31",
    textMuted: "#5C6870",
    border: "#E7E2D8",
    success: "#3F8F5F"
  }
};
