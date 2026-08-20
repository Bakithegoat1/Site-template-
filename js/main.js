/* =========================================================================
   MAIN.JS
   -------------------------------------------------------------------------
   Renders js/config.js into the DOM and wires up all interactivity.
   Nothing business-specific lives in this file — it only reads CONFIG.
   ========================================================================= */

(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};

  /* ---------------------------------------------------------------------
     Inline icons, hand-copied from the Lucide icon set (ISC license,
     lucide.dev) — no npm dependency, just the raw path data. Each service
     in config.js picks one of these by name; add more here as needed.
     --------------------------------------------------------------------- */
  var ICONS = {
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    waves: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    thermometer: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
    "shield-alert": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.79 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "map-pin": '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    "chevron-down": '<path d="m6 9 6 6 6-6"/>',
    settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>'
  };

  // Brand marks aren't in Lucide (it deliberately excludes company logos), so
  // these are sourced separately: Facebook/Instagram follow Lucide's own
  // stroke style for visual consistency; Google's "G" is a filled mark since
  // that's how the brand is universally recognized in monochrome.
  var SOCIAL_ICONS = {
    facebook: { fill: false, svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
    instagram: { fill: false, svg: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>' },
    google: { fill: true, svg: '<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>' }
  };

  function icon(name, extraClass) {
    var cls = "icon" + (extraClass ? " " + extraClass : "");
    return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || ICONS["shield-alert"]) + '</svg>';
  }

  function socialIcon(key) {
    var def = SOCIAL_ICONS[key];
    if (!def) return "";
    var attrs = def.fill
      ? 'fill="currentColor"'
      : 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';
    return '<svg class="icon" viewBox="0 0 24 24" ' + attrs + ' aria-hidden="true">' + def.svg + '</svg>';
  }

  function starString(rating) {
    var full = Math.round(rating || 5);
    var out = "";
    for (var i = 0; i < 5; i++) out += i < full ? "★" : "☆";
    return out;
  }

  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function set(id, text) {
    var node = document.getElementById(id);
    if (node) node.textContent = text;
  }

  // Renders a logo image if business.logoImage is set, otherwise falls
  // back to the colored initials tile.
  function renderBrandMark(id, name, logoImage, initials) {
    var node = document.getElementById(id);
    if (!node) return;
    if (logoImage) {
      node.classList.add("brand-mark--image");
      node.innerHTML = '<img src="' + logoImage + '" alt="' + (name || "") + ' logo" width="40" height="40" loading="lazy">';
    } else {
      node.classList.remove("brand-mark--image");
      node.textContent = initials || "";
    }
  }

  function setHTML(id, html) {
    var node = document.getElementById(id);
    if (node) node.innerHTML = html;
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* ---------------------------------------------------------------------
     0. Section toggles (config.js "sections" flags)
     -------------------------------------------------------------------
     Removes disabled sections from the DOM before anything renders into
     them, so nav links (derived from which #anchor targets still exist),
     footer links, and the render* functions below all just naturally
     skip what isn't there — no leftover spacing, no dangling nav item.
     --------------------------------------------------------------------- */
  function sectionEnabled(key) {
    var s = CONFIG.sections || {};
    return s[key] !== false;
  }

  function applySectionVisibility() {
    ["gallery", "testimonials", "faq", "about", "hours"].forEach(function (key) {
      if (!sectionEnabled(key)) {
        var node = document.getElementById(key);
        if (node) node.remove();
      }
    });

    if (sectionEnabled("about") && !sectionEnabled("stats")) {
      var statsNode = document.getElementById("about-stats");
      if (statsNode) statsNode.remove();
    }

    if (sectionEnabled("hours") && !sectionEnabled("map")) {
      var mapPanel = document.querySelector(".map-panel");
      if (mapPanel) mapPanel.remove();
      var hoursInner = document.querySelector(".hours-inner");
      if (hoursInner) hoursInner.classList.add("no-map");
    }
  }

  // A nav/footer link stays visible only if its #anchor target is still
  // in the DOM (or it isn't a same-page anchor at all).
  function visibleLinks(links) {
    return (links || []).filter(function (l) {
      if (!l.href || l.href.charAt(0) !== "#" || l.href.length < 2) return true;
      return !!document.querySelector(l.href);
    });
  }

  /* ---------------------------------------------------------------------
     1. Apply brand colors as CSS custom properties
     --------------------------------------------------------------------- */
  function applyColors() {
    var c = CONFIG.colors || {};
    var root = document.documentElement.style;
    var map = {
      accent: "--color-accent",
      accentHover: "--color-accent-hover",
      accentText: "--color-accent-text",
      // Left unset in config.js by default — CSS derives it from --color-accent
      // via color-mix() automatically. Only takes effect if a client sets it.
      accentSoft: "--color-accent-soft",
      text: "--color-text",
      textMuted: "--color-text-muted",
      bg: "--color-bg",
      bgAlt: "--color-bg-alt",
      border: "--color-border",
      success: "--color-success",
      error: "--color-error"
    };
    Object.keys(map).forEach(function (key) {
      if (c[key]) root.setProperty(map[key], c[key]);
    });
  }

  /* ---------------------------------------------------------------------
     2. Page meta, Open Graph / Twitter cards, and JSON-LD structured data

     Note: because this is a zero-build static template, these tags are
     written into <head> by JavaScript rather than baked into index.html at
     build time. That's transparent to real users and to crawlers that run
     JS (Google, Bing), but a few consumers of Open Graph tags specifically
     — Slack/Discord unfurlers, some older scrapers — fetch the raw HTML
     and never execute main.js, so they won't see these. If pixel-perfect
     link-preview support matters, duplicate the og: and twitter: tags
     below as static <meta> tags in index.html's <head> too.
     --------------------------------------------------------------------- */
  function joinUrl(base, path) {
    if (!path) return "";
    if (/^https?:\/\//i.test(path)) return path;
    if (!base) return path;
    return base.replace(/\/+$/, "") + "/" + path.replace(/^\/+/, "");
  }

  function setMetaByName(name, content) {
    if (!content) return;
    var el = document.querySelector('meta[name="' + name + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function setMetaByProperty(prop, content) {
    if (!content) return;
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("property", prop);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  // First entry in services.items — used to fill in the "primary service"
  // slot of the auto-generated title/description below.
  function primaryServiceTitle() {
    var items = (CONFIG.services && CONFIG.services.items) || [];
    return (items[0] && items[0].title) || "";
  }

  function cityStateString() {
    var addr = (CONFIG.contact && CONFIG.contact.address) || {};
    return [addr.city, addr.state].filter(Boolean).join(", ");
  }

  // Used whenever meta.pageTitle/description are left "" in config.js, so
  // a client gets a sane default without writing SEO copy by hand — and
  // it can never go stale, since it's built from the same business
  // name / services / address data as the rest of the page.
  function buildDefaultTitle() {
    var name = (CONFIG.business && CONFIG.business.name) || "";
    var service = primaryServiceTitle();
    var loc = cityStateString();
    var tail = [service, loc ? "in " + loc : ""].filter(Boolean).join(" ");
    return tail ? name + " | " + tail : name;
  }

  function buildDefaultDescription() {
    var name = (CONFIG.business && CONFIG.business.name) || "";
    if (!name) return "";
    var service = primaryServiceTitle();
    var loc = cityStateString();
    var bits = [name];
    if (service) bits.push("provides " + service.toLowerCase());
    if (loc) bits.push("for " + loc + " families");
    return bits.join(" ") + ". Contact us for a free quote.";
  }

  function renderMeta() {
    var meta = CONFIG.meta || {};
    var b = CONFIG.business || {};
    var title = meta.pageTitle || buildDefaultTitle();
    var desc = meta.description || buildDefaultDescription();
    var url = meta.siteUrl || "";
    var image = joinUrl(url, meta.ogImage);

    document.title = title;
    setMetaByName("description", desc);

    var favicon = document.getElementById("favicon-link");
    if (favicon && meta.favicon) favicon.setAttribute("href", meta.favicon);

    var appleTouchIcon = document.getElementById("apple-touch-icon-link");
    if (appleTouchIcon) {
      if (meta.appleTouchIcon) appleTouchIcon.setAttribute("href", meta.appleTouchIcon);
      else appleTouchIcon.remove();
    }

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", desc);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:site_name", b.name || "");
    if (url) setMetaByProperty("og:url", url);
    if (image) setMetaByProperty("og:image", image);

    setMetaByName("twitter:card", image ? "summary_large_image" : "summary");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", desc);
    if (image) setMetaByName("twitter:image", image);
    if (meta.twitterHandle) setMetaByName("twitter:site", meta.twitterHandle);

    if (url) {
      var canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }
  }

  // Emits schema.org LocalBusiness (or a more specific subtype) JSON-LD so
  // Google can show rich results (hours, phone, map) directly in search.
  function renderStructuredData() {
    var b = CONFIG.business || {};
    var c = CONFIG.contact || {};
    var meta = CONFIG.meta || {};
    var hours = CONFIG.hours || {};
    var addr = c.address || {};

    var data = {
      "@context": "https://schema.org",
      "@type": b.schemaType || "LocalBusiness",
      name: b.name || "",
      image: joinUrl(meta.siteUrl, meta.ogImage) || undefined,
      url: meta.siteUrl || undefined,
      telephone: c.phoneHref || undefined,
      email: c.email || undefined,
      // Bracket placeholders (e.g. unverified priceRange) are left out of
      // the structured data entirely rather than shipped as literal text.
      priceRange: (b.priceRange && b.priceRange.charAt(0) !== "[") ? b.priceRange : undefined,
      address: {
        "@type": "PostalAddress",
        streetAddress: addr.line1 || "",
        addressLocality: addr.city || "",
        addressRegion: addr.state || "",
        postalCode: addr.zip || "",
        addressCountry: addr.country || "US"
      }
    };

    var lat = parseFloat(b.geo && b.geo.lat);
    var lng = parseFloat(b.geo && b.geo.lng);
    if (isFinite(lat) && isFinite(lng)) {
      data.geo = { "@type": "GeoCoordinates", latitude: lat, longitude: lng };
    }

    if (CONFIG.serviceAreas && CONFIG.serviceAreas.length) {
      data.areaServed = CONFIG.serviceAreas.slice();
    }

    if (hours.structuredSchedule && hours.structuredSchedule.length) {
      data.openingHoursSpecification = hours.structuredSchedule.map(function (row) {
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: row.days,
          opens: row.opens,
          closes: row.closes
        };
      });
    }

    var script = document.getElementById("ld-json");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data, null, 2);
  }

  /* ---------------------------------------------------------------------
     3. Header / Nav
     --------------------------------------------------------------------- */
  function renderHeader() {
    var b = CONFIG.business || {};
    var contact = CONFIG.contact || {};
    var nav = CONFIG.nav || {};

    renderBrandMark("brand-mark", b.name, b.logoImage, b.initials);
    set("brand-name", b.shortName || b.name || "");
    renderBrandMark("footer-brand-mark", b.name, b.logoImage, b.initials);
    set("footer-brand-name", b.name || "");

    var linksEl = document.getElementById("nav-links");
    if (linksEl && nav.links) {
      linksEl.innerHTML = visibleLinks(nav.links).map(function (l) {
        return '<li><a href="' + l.href + '">' + l.label + "</a></li>";
      }).join("");
    }

    var phone = document.getElementById("header-phone");
    if (phone) {
      phone.textContent = contact.phoneDisplay || "";
      phone.href = "tel:" + (contact.phoneHref || "");
    }

    var cta = document.getElementById("header-cta");
    if (cta) {
      cta.textContent = nav.ctaLabel || "";
      cta.href = nav.ctaHref || "#contact";
    }
  }

  /* ---------------------------------------------------------------------
     4. Hero
     --------------------------------------------------------------------- */
  function renderHero() {
    var h = CONFIG.hero || {};
    set("hero-eyebrow", h.eyebrow || "");
    set("hero-headline", h.headline || "");
    set("hero-subheadline", h.subheadline || "");

    var p = document.getElementById("hero-cta-primary");
    if (p) { p.textContent = h.primaryCtaLabel || ""; p.href = h.primaryCtaHref || "#contact"; }

    var s = document.getElementById("hero-cta-secondary");
    if (s) { s.textContent = h.secondaryCtaLabel || ""; s.href = h.secondaryCtaHref || "#"; }

    set("hero-rating-text", h.ratingText || "");

    var img = document.getElementById("hero-image");
    if (img) { img.src = h.image || ""; img.alt = h.imageAlt || ""; }
  }

  /* ---------------------------------------------------------------------
     5. Services
     --------------------------------------------------------------------- */
  function renderServices() {
    var s = CONFIG.services || {};
    set("services-eyebrow", s.eyebrow || "");
    set("services-heading", s.heading || "");
    set("services-subheading", s.subheading || "");

    var grid = document.getElementById("services-grid");
    if (!grid || !s.items) return;
    grid.innerHTML = s.items.map(function (item, i) {
      return (
        '<div class="service-card reveal" style="transition-delay:' + (i % 3) * 80 + 'ms">' +
          '<div class="service-icon">' + icon(item.icon) + "</div>" +
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.description + "</p>" +
        "</div>"
      );
    }).join("");
  }

  /* ---------------------------------------------------------------------
     6. About
     --------------------------------------------------------------------- */
  function renderAbout() {
    var a = CONFIG.about || {};
    set("about-eyebrow", a.eyebrow || "");
    set("about-heading", a.heading || "");
    set("about-body", a.body || "");

    var img = document.getElementById("about-image");
    if (img) { img.src = a.image || ""; img.alt = a.imageAlt || ""; }

    var stats = document.getElementById("about-stats");
    if (stats && a.stats) {
      stats.innerHTML = a.stats.map(function (st, i) {
        var target = parseStatTarget(st.number);
        var dataAttrs = target
          ? ' data-stat-target="' + target.value + '" data-stat-decimals="' + target.decimals +
            '" data-stat-suffix="' + target.suffix.replace(/"/g, "&quot;") + '"'
          : "";
        var initial = target ? formatStatValue(target, 0) : (st.number || "");
        return '<div class="stat reveal" style="transition-delay:' + (i % 4) * 80 + 'ms">' +
          '<span class="stat-number"' + dataAttrs + '>' + initial + "</span>" +
          '<span class="stat-label">' + st.label + "</span></div>";
      }).join("");
    }
  }

  // Parses a leading number out of a stat string (e.g. "500+" → 500 with
  // suffix "+", "4.9" → 4.9 with 1 decimal, "24/7" → 24 with suffix "/7").
  // Bracket placeholders like "[JOBS_COMPLETED]" have no leading digit and
  // return null, so they render as static text instead of counting to 0.
  function parseStatTarget(raw) {
    var str = raw == null ? "" : String(raw).trim();
    var match = /^(\d[\d,]*(?:\.\d+)?)/.exec(str);
    if (!match) return null;
    var numStr = match[1].replace(/,/g, "");
    var value = parseFloat(numStr);
    if (!isFinite(value)) return null;
    return {
      value: value,
      decimals: (numStr.split(".")[1] || "").length,
      suffix: str.slice(match[1].length)
    };
  }

  function formatStatValue(target, current) {
    var num = target.decimals
      ? current.toFixed(target.decimals)
      : Math.round(current).toLocaleString("en-US");
    return num + target.suffix;
  }

  /* ---------------------------------------------------------------------
     6b. Animated stat counters — count up from 0 once, the first time
     each stat scrolls into view.
     --------------------------------------------------------------------- */
  function wireStatCounters() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll(".stat-number[data-stat-target]"));
    if (!nodes.length) return;

    var reduceMotion = prefersReducedMotion();

    function animate(el) {
      var target = {
        value: parseFloat(el.getAttribute("data-stat-target")),
        decimals: parseInt(el.getAttribute("data-stat-decimals"), 10) || 0,
        suffix: el.getAttribute("data-stat-suffix") || ""
      };
      if (reduceMotion) {
        el.textContent = formatStatValue(target, target.value);
        return;
      }
      var duration = 1400;
      var start = null;
      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatStatValue(target, target.value * eased);
        if (progress < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }

    if (!("IntersectionObserver" in window)) {
      nodes.forEach(animate);
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------------------------------------------------------------------
     7. Gallery + Lightbox
     --------------------------------------------------------------------- */
  function renderGallery() {
    var g = CONFIG.gallery || {};
    set("gallery-eyebrow", g.eyebrow || "");
    set("gallery-heading", g.heading || "");
    set("gallery-subheading", g.subheading || "");

    var grid = document.getElementById("gallery-grid");
    if (!grid || !g.images) return;
    grid.innerHTML = g.images.map(function (im, i) {
      return (
        '<button type="button" class="gallery-item reveal" style="transition-delay:' + (i % 3) * 80 + 'ms" data-full="' + im.src + '" data-alt="' + im.alt + '" aria-label="View larger photo: ' + im.alt + '">' +
          '<img src="' + im.src + '" alt="' + im.alt + '" width="800" height="600" loading="lazy">' +
        "</button>"
      );
    }).join("");

    var lightbox = document.getElementById("lightbox");
    var lbImage = document.getElementById("lightbox-image");
    var closeBtn = document.getElementById("lightbox-close");

    grid.addEventListener("click", function (e) {
      var item = e.target.closest(".gallery-item");
      if (!item) return;
      lbImage.src = item.getAttribute("data-full");
      lbImage.alt = item.getAttribute("data-alt");
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
    }

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ---------------------------------------------------------------------
     8. Testimonials (simple scroll-snap carousel with dots)
     --------------------------------------------------------------------- */
  function renderTestimonials() {
    var t = CONFIG.testimonials || {};
    set("testimonials-eyebrow", t.eyebrow || "");
    set("testimonials-heading", t.heading || "");

    var track = document.getElementById("testimonials-track");
    var dotsWrap = document.getElementById("testimonials-dots");
    if (!track || !t.items) return;

    track.innerHTML = t.items.map(function (item) {
      var ratingNum = parseFloat(item.rating);
      var ratingLabel = isFinite(ratingNum) ? "Rated " + ratingNum + " out of 5 stars" : "Rating not yet added";
      return (
        '<div class="testimonial-card">' +
          '<div class="testimonial-stars" aria-hidden="true">' + starString(item.rating) + "</div>" +
          '<span class="sr-only">' + ratingLabel + "</span>" +
          '<p class="testimonial-quote">“' + item.quote + '”</p>' +
          '<div class="testimonial-author">' +
            '<span class="testimonial-name">' + item.name + "</span>" +
            '<span class="testimonial-location">' + item.location + "</span>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    dotsWrap.innerHTML = t.items.map(function (_, i) {
      return '<button type="button" class="dot" data-index="' + i + '" aria-label="Go to review ' + (i + 1) + '"></button>';
    }).join("");

    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll(".dot"));
    var cards = Array.prototype.slice.call(track.children);

    function setActive(i) {
      dots.forEach(function (d, idx) { d.classList.toggle("is-active", idx === i); });
    }

    dotsWrap.addEventListener("click", function (e) {
      var dot = e.target.closest(".dot");
      if (!dot) return;
      var idx = parseInt(dot.getAttribute("data-index"), 10);
      cards[idx].scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", inline: "start", block: "nearest" });
    });

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(cards.indexOf(entry.target));
          }
        });
      }, { root: track, threshold: 0.6 });
      cards.forEach(function (c) { io.observe(c); });
    }

    setActive(0);
  }

  /* ---------------------------------------------------------------------
     9. Hours + Map
     --------------------------------------------------------------------- */
  // Used only when hours.mapEmbedSrc (a real URL pasted from Google Maps'
  // own Share > Embed a map dialog) is left blank. Coordinates pin an
  /* ---------------------------------------------------------------------
     8b. FAQ (accessible accordion) + FAQPage JSON-LD
     --------------------------------------------------------------------- */
  function renderFAQ() {
    var f = CONFIG.faq || {};
    set("faq-eyebrow", f.eyebrow || "");
    set("faq-heading", f.heading || "");

    var list = document.getElementById("faq-list");
    if (!list || !f.items || !f.items.length) return;

    list.innerHTML = f.items.map(function (item, i) {
      var triggerId = "faq-trigger-" + i;
      var panelId = "faq-panel-" + i;
      return (
        '<div class="faq-item reveal" style="transition-delay:' + (i % 4) * 80 + 'ms">' +
          '<h3 class="faq-question">' +
            '<button type="button" class="faq-trigger" id="' + triggerId + '" aria-expanded="false" aria-controls="' + panelId + '">' +
              "<span>" + item.question + "</span>" +
              icon("chevron-down", "faq-icon") +
            "</button>" +
          "</h3>" +
          '<div class="faq-panel-wrap">' +
            '<div class="faq-panel" id="' + panelId + '" role="region" aria-labelledby="' + triggerId + '" aria-hidden="true">' +
              "<p>" + item.answer + "</p>" +
            "</div>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    list.addEventListener("click", function (e) {
      var trigger = e.target.closest(".faq-trigger");
      if (!trigger) return;
      var item = trigger.closest(".faq-item");
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (panel) panel.setAttribute("aria-hidden", String(isOpen));
      if (item) item.classList.toggle("is-open", !isOpen);
    });
  }

  // Emits schema.org FAQPage JSON-LD so Google can show questions directly
  // in search results. Separate script tag from the LocalBusiness one
  // above — only rendered when the FAQ section itself is present.
  function renderFAQStructuredData() {
    var f = CONFIG.faq || {};
    if (!document.getElementById("faq") || !f.items || !f.items.length) return;

    var data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: f.items.map(function (item) {
        return {
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer }
        };
      })
    };

    var script = document.getElementById("ld-json-faq");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json-faq";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data, null, 2);
  }

  // exact point regardless of whether the address text can be geocoded,
  // so they're preferred over a text search — a fictional/unlisted
  // address (as ships in this template by default) geocodes only to the
  // city/zip level and shows the wrong kind of pin. Once a client's real
  // business.geo lat/lng or mapEmbedSrc is filled in, this resolves.
  function buildFallbackMapSrc(encodedAddressQuery) {
    var geo = (CONFIG.business && CONFIG.business.geo) || {};
    var lat = parseFloat(geo.lat);
    var lng = parseFloat(geo.lng);
    // Without an explicit &z=, this legacy no-API-key embed endpoint falls
    // back to a very wide default zoom for anything but a single exact
    // address match — a city/region-level query like "Denton, TX 76201"
    // renders zoomed out to roughly the whole state or further. z=15 for
    // a precise coordinate pin (street-level); z=13 for a city-level text
    // query (close enough to see streets/neighborhoods, not the globe).
    if (isFinite(lat) && isFinite(lng)) {
      return "https://www.google.com/maps?q=" + lat + "," + lng + "&z=15&output=embed";
    }
    return "https://www.google.com/maps?q=" + encodedAddressQuery + "&z=13&output=embed";
  }

  function renderHours() {
    var h = CONFIG.hours || {};
    var contact = CONFIG.contact || {};
    set("hours-eyebrow", h.eyebrow || "");
    set("hours-heading", h.heading || "");
    set("hours-subheading", h.subheading || "");
    set("hours-emergency", h.emergencyNote || "");

    var list = document.getElementById("hours-list");
    if (list && h.schedule) {
      list.innerHTML = h.schedule.map(function (row) {
        return '<li><span class="hours-day">' + row.day + '</span><span class="hours-time">' + row.time + "</span></li>";
      }).join("");
    }

    var addr = contact.address || {};
    var fullAddress = [addr.line1, addr.city + ", " + addr.state + " " + addr.zip].filter(Boolean).join(", ");
    setHTML("hours-address", icon("map-pin", "icon-sm") + "<span>" + fullAddress + "</span>");

    var query = encodeURIComponent(h.mapQuery || fullAddress);
    var mapFrame = document.getElementById("map-iframe");
    if (mapFrame) {
      mapFrame.src = h.mapEmbedSrc || buildFallbackMapSrc(query);
    }

    var directions = document.getElementById("hours-directions");
    if (directions) directions.href = "https://www.google.com/maps/dir/?api=1&destination=" + query;
  }

  /* ---------------------------------------------------------------------
     10. Contact (info list, socials, form)
     --------------------------------------------------------------------- */
  function renderContact() {
    var c = CONFIG.contact || {};
    var addr = c.address || {};
    var fullAddress = [addr.line1, addr.city + ", " + addr.state + " " + addr.zip].filter(Boolean).join(", ");

    var infoList = document.getElementById("contact-info-list");
    var phoneDisplay = c.phoneDisplay;
    var phoneHref = c.phoneHref;
    var email = c.email;

    if (infoList) {
      infoList.innerHTML =
        "<li>" + icon("phone", "icon-sm") + '<a href="tel:' + phoneHref + '">' + phoneDisplay + "</a></li>" +
        "<li>" + icon("mail", "icon-sm") + '<a href="mailto:' + email + '">' + email + "</a></li>" +
        "<li>" + icon("map-pin", "icon-sm") + "<span>" + fullAddress + "</span></li>";
    }

    renderSocialLinks("social-links");
    renderSocialLinks("footer-social-links");

    var select = document.getElementById("cf-service");
    if (select) {
      // Sourced from services.items (not a separately hand-maintained
      // list) so the dropdown can never drift out of sync with the real
      // service offerings shown in the Services section.
      var serviceItems = (CONFIG.services && CONFIG.services.items) || [];
      var serviceOptions = serviceItems.map(function (item) { return item.title; });
      if (c.otherServiceLabel) serviceOptions.push(c.otherServiceLabel);
      select.innerHTML = '<option value="" disabled selected>Select a service...</option>' +
        serviceOptions.map(function (s) { return '<option value="' + s + '">' + s + "</option>"; }).join("");
    }
  }

  function renderSocialLinks(targetId) {
    var social = CONFIG.social || {};
    var wrap = document.getElementById(targetId);
    if (!wrap) return;
    var platforms = [
      { key: "facebook", label: "Facebook" },
      { key: "instagram", label: "Instagram" },
      { key: "google", label: "Google" }
    ];
    wrap.innerHTML = platforms
      .filter(function (p) { return social[p.key]; })
      .map(function (p) {
        return '<a href="' + social[p.key] + '" target="_blank" rel="noopener" aria-label="' + p.label + '">' + socialIcon(p.key) + "</a>";
      }).join("");
  }

  /* ---------------------------------------------------------------------
     11. Contact section copy + form submission
     --------------------------------------------------------------------- */
  function renderContactCopy() {
    var cc = CONFIG.contact || {};
    set("contact-eyebrow", cc.eyebrow || "");
    set("contact-heading", cc.heading || "");
    set("contact-subheading", cc.subheading || "");
  }

  // Friendly per-field message, read off the native constraint-validation
  // API (field.validity) without ever triggering the browser's own bubble.
  function fieldErrorMessage(field) {
    var v = field.validity;
    if (v.valueMissing) return "This field is required.";
    if (v.typeMismatch && field.type === "email") return "Enter a valid email address.";
    if (v.typeMismatch && field.type === "tel") return "Enter a valid phone number.";
    if (v.tooShort) return "Please enter at least " + field.minLength + " characters.";
    return "Please check this field.";
  }

  function showFieldError(field) {
    var msgEl = document.getElementById(field.id + "-error");
    if (msgEl) msgEl.textContent = fieldErrorMessage(field);
    field.classList.add("is-invalid");
  }

  function clearFieldError(field) {
    var msgEl = document.getElementById(field.id + "-error");
    if (msgEl) msgEl.textContent = "";
    field.classList.remove("is-invalid");
  }

  // Wires per-field inline validation (minimal text under the field, no
  // native browser bubble) and returns the list of validated fields.
  function wireInlineValidation(form) {
    var fields = Array.prototype.slice.call(form.querySelectorAll("input, select, textarea"))
      .filter(function (f) { return f.name !== "_gotcha"; });

    fields.forEach(function (field) {
      // The default action of "invalid" is the native bubble — prevent
      // that, then render our own message from the same validity state.
      field.addEventListener("invalid", function (e) {
        e.preventDefault();
        showFieldError(field);
      });
      field.addEventListener("input", function () {
        if (field.classList.contains("is-invalid") && field.checkValidity()) clearFieldError(field);
      });
      field.addEventListener("change", function () {
        if (field.checkValidity()) clearFieldError(field);
      });
    });

    return fields;
  }

  function wireForm() {
    var form = document.getElementById("contact-form");
    var confirmation = document.getElementById("form-confirmation");
    var errorEl = document.getElementById("form-error");
    var subjectField = document.getElementById("cf-subject");
    if (!form) return;

    var cc = CONFIG.contact || {};
    if (subjectField) {
      subjectField.value = "New quote request — " + ((CONFIG.business && CONFIG.business.name) || "website");
    }

    wireInlineValidation(form);

    var submitBtn = form.querySelector(".form-submit");
    var submitLabel = submitBtn.querySelector(".btn-label");
    var defaultLabel = submitLabel.textContent;

    function setLoading(isLoading) {
      submitBtn.disabled = isLoading;
      submitLabel.textContent = isLoading ? "Sending…" : defaultLabel;
    }

    function hideError() { errorEl.classList.remove("is-visible"); }

    // Replaces the form with a clean confirmation instead of just showing
    // a message next to it — the user's job here is done, so the form
    // (and its now-stale "submit again?" affordance) shouldn't linger.
    function showSuccess() {
      hideError();
      form.hidden = true;
      confirmation.innerHTML =
        '<div class="form-confirmation-icon">' + icon("check") + "</div>" +
        "<h3>Request received</h3>" +
        "<p>" + (cc.formSuccessMessage || "Thanks — we'll be in touch shortly.") + "</p>";
      confirmation.hidden = false;
      confirmation.focus();
    }

    // Preserves whatever the user already typed (no form.reset() here)
    // and always surfaces the business phone as a fallback so a failed
    // submission never becomes a dead end.
    function showError(customMessage) {
      var base = customMessage || cc.formErrorMessage || "Something went wrong sending your request. Please try again,";
      var phoneLink = cc.phoneHref
        ? ' or call us at <a href="tel:' + cc.phoneHref + '">' + (cc.phoneDisplay || cc.phoneHref) + "</a>."
        : "";
      errorEl.innerHTML = base + phoneLink;
      errorEl.classList.add("is-visible");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      hideError();

      // Fires "invalid" (caught above) on every invalid field, rendering
      // inline messages, without ever showing the native bubble UI.
      if (!form.checkValidity()) {
        var firstInvalid = form.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Honeypot: real users never fill this in. If it's filled, quietly
      // drop the submission (fake success) instead of hitting the endpoint.
      var honeypot = form.querySelector('[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        showSuccess();
        return;
      }

      var endpoint = cc.formEndpoint || "";
      if (!endpoint || endpoint.charAt(0) === "[") {
        showError("This form isn't connected yet — set contact.formEndpoint in config.js to a real Formspree endpoint.");
        return;
      }

      setLoading(true);

      fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      }).then(function (res) {
        setLoading(false);
        if (res.ok) {
          showSuccess();
        } else {
          showError();
        }
      }).catch(function () {
        setLoading(false);
        showError();
      });
    });
  }

  /* ---------------------------------------------------------------------
     12. Footer
     --------------------------------------------------------------------- */
  function renderFooter() {
    var f = CONFIG.footer || {};
    var nav = CONFIG.nav || {};
    var c = CONFIG.contact || {};
    var h = CONFIG.hours || {};
    var b = CONFIG.business || {};

    set("footer-tagline", f.tagline || "");
    set("footer-links-heading", f.quickLinksHeading || "Quick Links");
    set("footer-contact-heading", f.contactHeading || "Contact");
    set("footer-hours-heading", f.hoursHeading || "Hours");

    var areasEl = document.getElementById("footer-service-areas");
    if (areasEl) {
      if (CONFIG.serviceAreas && CONFIG.serviceAreas.length) {
        areasEl.textContent = "Areas We Serve: " + CONFIG.serviceAreas.join(", ");
        areasEl.hidden = false;
      } else {
        areasEl.hidden = true;
      }
    }

    var linksList = document.getElementById("footer-links-list");
    if (linksList && nav.links) {
      linksList.innerHTML = visibleLinks(nav.links).map(function (l) {
        return "<li><a href=\"" + l.href + "\">" + l.label + "</a></li>";
      }).join("");
    }

    var addr = c.address || {};
    var fullAddress = [addr.line1, addr.city + ", " + addr.state + " " + addr.zip].filter(Boolean).join(", ");
    var contactList = document.getElementById("footer-contact-list");
    if (contactList) {
      contactList.innerHTML =
        '<li><a href="tel:' + c.phoneHref + '">' + c.phoneDisplay + "</a></li>" +
        '<li><a href="mailto:' + c.email + '">' + c.email + "</a></li>" +
        "<li>" + fullAddress + "</li>";
    }

    var hoursList = document.getElementById("footer-hours-list");
    if (hoursList && h.schedule) {
      hoursList.innerHTML = h.schedule.map(function (row) {
        return "<li>" + row.day + ": " + row.time + "</li>";
      }).join("");
    }

    set("footer-copyright", "© " + new Date().getFullYear() + " " + (b.name || "") + ". All rights reserved.");
    set("footer-license", f.licenseNote || "");
  }

  /* ---------------------------------------------------------------------
     13. Mobile sticky call bar
     --------------------------------------------------------------------- */
  function renderMobileBar() {
    var m = CONFIG.mobileBar || {};
    var c = CONFIG.contact || {};

    var call = document.getElementById("mobile-bar-call");
    if (call) {
      call.textContent = m.callLabel || "Call Now";
      call.href = "tel:" + c.phoneHref;
      call.setAttribute("aria-label", "Call us at " + (c.phoneDisplay || ""));
    }

    var quote = document.getElementById("mobile-bar-quote");
    if (quote) {
      quote.textContent = m.quoteLabel || "Free Quote";
      // Deliberately targets the form itself, not just the section, so
      // tapping this jumps straight to something fillable.
      quote.href = "#contact-form";
      quote.setAttribute("aria-label", "Jump to the free quote form");
    }
  }

  /* ---------------------------------------------------------------------
     14. Sticky nav solidify on scroll + back-to-top visibility
     --------------------------------------------------------------------- */
  function wireScrollEffects() {
    var header = document.getElementById("site-header");
    var backToTop = document.getElementById("back-to-top");
    var lastKnown = 0;
    var ticking = false;

    function update() {
      var y = window.scrollY || window.pageYOffset;
      header.classList.toggle("is-scrolled", y > 80);
      backToTop.classList.toggle("is-visible", y > 600);
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      lastKnown = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    update();

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
     15. Mobile nav toggle
     --------------------------------------------------------------------- */
  function wireMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");
    if (!toggle || !nav) return;

    function focusableInNav() {
      return Array.prototype.slice.call(nav.querySelectorAll("a[href]"));
    }

    function openMenu() {
      nav.classList.add("is-open");
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll");
      var focusable = focusableInNav();
      if (focusable.length) focusable[0].focus();
    }

    function closeMenu(returnFocusToToggle) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
      if (returnFocusToToggle) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) closeMenu(false);
      else openMenu();
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu(false);
    });

    // Traps Tab/Shift+Tab within the open menu's links, and closes on
    // Escape with focus returned to the toggle button that opened it.
    nav.addEventListener("keydown", function (e) {
      if (!nav.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        closeMenu(true);
        return;
      }

      if (e.key !== "Tab") return;
      var focusable = focusableInNav();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------------------------------------------------------------------
     16. Smooth scroll with header offset for anchor links
     --------------------------------------------------------------------- */
  function wireSmoothScroll() {
    document.addEventListener("click", function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var header = document.getElementById("site-header");
      var offset = header ? header.offsetHeight : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset - 12;
      window.scrollTo({ top: top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
     16b. Nav scroll-spy — highlights the nav link for whichever section
     is currently crossing the vertical center of the viewport.
     --------------------------------------------------------------------- */
  function wireNavScrollSpy() {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('#nav-links a[href^="#"]'));
    if (!navLinks.length || !("IntersectionObserver" in window)) return;

    var linkByTargetId = {};
    navLinks.forEach(function (a) {
      var id = a.getAttribute("href");
      if (id && id.length > 1) linkByTargetId[id.slice(1)] = a;
    });

    var targets = Object.keys(linkByTargetId)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = linkByTargetId[entry.target.id];
        if (link) link.classList.toggle("is-active", entry.isIntersecting);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------------------------------------------------------------------
     17. Scroll-reveal animations
     --------------------------------------------------------------------- */
  function wireScrollReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (i) { io.observe(i); });
  }

  /* ---------------------------------------------------------------------
     Init
     --------------------------------------------------------------------- */
  function init() {
    applyColors();
    applySectionVisibility();
    // 404.html carries its own static <title>/description/robots meta and
    // has no LocalBusiness content to describe, so it opts out of both via
    // a body class rather than getting the homepage's SEO tags stamped
    // over its own.
    if (!document.body.classList.contains("page-404")) {
      renderMeta();
      renderStructuredData();
    }
    renderHeader();
    renderHero();
    renderServices();
    renderAbout();
    renderGallery();
    renderTestimonials();
    renderFAQ();
    renderFAQStructuredData();
    renderHours();
    renderContactCopy();
    renderContact();
    renderFooter();
    renderMobileBar();

    wireForm();
    wireScrollEffects();
    wireMobileNav();
    wireSmoothScroll();
    wireNavScrollSpy();
    wireScrollReveal();
    wireStatCounters();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
