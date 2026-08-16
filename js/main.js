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
     Small inline icon set used by the services grid + brand mark.
     Kept generic on purpose so any client's service list can map to one.
     --------------------------------------------------------------------- */
  var ICONS = {
    drop: '<path d="M12 2.5s7 8.1 7 12.6a7 7 0 1 1-14 0C5 10.6 12 2.5 12 2.5Z"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 4.6L3 17.2 6.8 21l6.3-6.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2.1-2.1 2.7-2.5Z"/>',
    flame: '<path d="M12 2s4.5 4.2 4.5 9a4.5 4.5 0 1 1-9 0c0-1.4.6-2.4 1.2-3.3.3.9.9 1.4 1.6 1.4-.4-2.4.7-5 1.7-7.1Z"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    thermometer: '<path d="M12 3a2.5 2.5 0 0 0-2.5 2.5v8.6a4.5 4.5 0 1 0 5 0V5.5A2.5 2.5 0 0 0 12 3Z"/><circle cx="12" cy="17.5" r="1.6"/>',
    shield: '<path d="M12 2.5 4.5 5.5v6c0 5 3.2 8.6 7.5 10 4.3-1.4 7.5-5 7.5-10v-6L12 2.5Z"/>',
    house: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10.5V20h12v-9.5"/>'
  };

  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      (ICONS[name] || ICONS.shield) + '</svg>';
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

  function setHTML(id, html) {
    var node = document.getElementById(id);
    if (node) node.innerHTML = html;
  }

  /* ---------------------------------------------------------------------
     1. Apply brand colors as CSS custom properties
     --------------------------------------------------------------------- */
  function applyColors() {
    var c = CONFIG.colors || {};
    var root = document.documentElement.style;
    var map = {
      primary: "--color-primary",
      primaryDark: "--color-primary-dark",
      primaryLight: "--color-primary-light",
      accent: "--color-accent",
      accentLight: "--color-accent-light",
      dark: "--color-dark",
      light: "--color-light",
      surface: "--color-surface",
      text: "--color-text",
      textMuted: "--color-text-muted",
      border: "--color-border",
      success: "--color-success"
    };
    Object.keys(map).forEach(function (key) {
      if (c[key]) root.setProperty(map[key], c[key]);
    });
  }

  /* ---------------------------------------------------------------------
     2. Page meta
     --------------------------------------------------------------------- */
  function renderMeta() {
    var meta = CONFIG.meta || {};
    if (meta.pageTitle) document.title = meta.pageTitle;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && meta.description) desc.setAttribute("content", meta.description);
    var favicon = document.getElementById("favicon-link");
    if (favicon && meta.favicon) favicon.setAttribute("href", meta.favicon);
  }

  /* ---------------------------------------------------------------------
     3. Header / Nav
     --------------------------------------------------------------------- */
  function renderHeader() {
    var b = CONFIG.business || {};
    var contact = CONFIG.contact || {};
    var nav = CONFIG.nav || {};

    set("brand-mark", b.initials || "");
    set("brand-name", b.shortName || b.name || "");
    set("footer-brand-mark", b.initials || "");
    set("footer-brand-name", b.name || "");

    var linksEl = document.getElementById("nav-links");
    if (linksEl && nav.links) {
      linksEl.innerHTML = nav.links.map(function (l) {
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
      stats.innerHTML = a.stats.map(function (st) {
        return '<div class="stat"><span class="stat-number">' + st.number +
          '</span><span class="stat-label">' + st.label + "</span></div>";
      }).join("");
    }
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
        '<button type="button" class="gallery-item reveal" style="transition-delay:' + (i % 3) * 80 + 'ms" data-full="' + im.src + '" data-alt="' + im.alt + '">' +
          '<img src="' + im.src + '" alt="' + im.alt + '" loading="lazy">' +
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
      return (
        '<div class="testimonial-card">' +
          '<div class="testimonial-stars">' + starString(item.rating) + "</div>" +
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
      cards[idx].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
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
    setHTML("hours-address", '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + ICONS.house + '</svg><span>' + fullAddress + "</span>");

    var query = encodeURIComponent(h.mapQuery || fullAddress);
    var mapFrame = document.getElementById("map-iframe");
    if (mapFrame) mapFrame.src = "https://www.google.com/maps?q=" + query + "&output=embed";

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
        '<li><svg class="icon icon-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + ICONS.bolt + '</svg><a href="tel:' + phoneHref + '">' + phoneDisplay + "</a></li>" +
        '<li><svg class="icon icon-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + ICONS.drop + '</svg><a href="mailto:' + email + '">' + email + "</a></li>" +
        '<li><svg class="icon icon-sm" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + ICONS.house + '</svg><span>' + fullAddress + "</span></li>";
    }

    renderSocialLinks("social-links");
    renderSocialLinks("footer-social-links");

    var select = document.getElementById("cf-service");
    var serviceOptions = (CONFIG.contact && CONFIG.contact.services) || [];
    if (select) {
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
        return '<a href="' + social[p.key] + '" target="_blank" rel="noopener" aria-label="' + p.label + '">' + p.label.charAt(0) + "</a>";
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

  function wireForm() {
    var form = document.getElementById("contact-form");
    var success = document.getElementById("form-success");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var btn = form.querySelector(".form-submit");
      btn.classList.add("is-loading");
      btn.disabled = true;

      setTimeout(function () {
        btn.classList.remove("is-loading");
        btn.disabled = false;
        form.reset();
        success.textContent = (CONFIG.contact && CONFIG.contact.formSuccessMessage) ||
          "Thanks — we'll be in touch shortly.";
        success.classList.add("is-visible");
        setTimeout(function () { success.classList.remove("is-visible"); }, 6000);
      }, 700);
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

    var linksList = document.getElementById("footer-links-list");
    if (linksList && nav.links) {
      linksList.innerHTML = nav.links.map(function (l) {
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
    var nav = CONFIG.nav || {};

    var call = document.getElementById("mobile-bar-call");
    if (call) { call.textContent = m.callLabel || "Call Now"; call.href = "tel:" + c.phoneHref; }

    var quote = document.getElementById("mobile-bar-quote");
    if (quote) { quote.textContent = m.quoteLabel || "Free Quote"; quote.href = nav.ctaHref || "#contact"; }
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
      header.classList.toggle("is-scrolled", y > 24);
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
     15. Mobile nav toggle
     --------------------------------------------------------------------- */
  function wireMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("main-nav");

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("no-scroll", isOpen);
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
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
      window.scrollTo({ top: top, behavior: "smooth" });
    });
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
    renderMeta();
    renderHeader();
    renderHero();
    renderServices();
    renderAbout();
    renderGallery();
    renderTestimonials();
    renderHours();
    renderContactCopy();
    renderContact();
    renderFooter();
    renderMobileBar();

    wireForm();
    wireScrollEffects();
    wireMobileNav();
    wireSmoothScroll();
    wireScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
