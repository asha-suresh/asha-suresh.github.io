/* =====================================================================
   main.js — behaviour for the static portfolio
   (theme toggle, navigation, scroll animations, card effects, contact form)
   ===================================================================== */

(function () {
  "use strict";

  var app = document.getElementById("app");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme (dark / light), remembered between visits ---------- */

  var themeBtn = document.querySelector(".theme-btn");

  function applyTheme(mode) {
    app.classList.toggle("light-mode", mode === "light");
    app.classList.toggle("dark-mode", mode !== "light");
    themeBtn.setAttribute("aria-label", mode === "light" ? "Switch to dark mode" : "Switch to light mode");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", mode === "light" ? "#faf8ff" : "#0a0c10");
  }

  var savedTheme = "dark";
  try {
    savedTheme = localStorage.getItem("theme") || "dark";
  } catch (e) { /* storage unavailable */ }
  applyTheme(savedTheme);

  themeBtn.addEventListener("click", function () {
    var next = app.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) { /* storage unavailable */ }
  });

  /* ---------- Navigation ---------- */

  var navbar = document.getElementById("navigation");

  function onNavScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > navbar.clientHeight);
  }
  window.addEventListener("scroll", onNavScroll, { passive: true });
  onNavScroll();

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }

  document.querySelectorAll("[data-target]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeDrawer();
      scrollToSection(btn.getAttribute("data-target"));
    });
  });

  /* ---------- Mobile drawer ---------- */

  var menuBtn = document.querySelector(".menu-btn");
  var drawer = document.getElementById("mobile-drawer");
  var backdrop = document.querySelector(".drawer-backdrop");

  function openDrawer() {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    backdrop.hidden = false;
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    backdrop.hidden = true;
  }

  menuBtn.addEventListener("click", openDrawer);
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  /* ---------- Split section titles into letters (for the entrance) ---------- */

  document.querySelectorAll("[data-split]").forEach(function (title) {
    var text = title.textContent.trim();
    title.setAttribute("aria-label", text);
    title.textContent = "";
    text.split("").forEach(function (ch, i) {
      var span = document.createElement("span");
      span.setAttribute("aria-hidden", "true");
      span.style.setProperty("--i", i);
      span.textContent = ch === " " ? " " : ch;
      title.appendChild(span);
    });
  });

  /* ---------- Build skill chips from data-chips lists ---------- */

  document.querySelectorAll("[data-chips]").forEach(function (box) {
    box.getAttribute("data-chips").split(",").forEach(function (label, i) {
      var chip = document.createElement("div");
      chip.className = "chip";
      chip.style.setProperty("--i", i);
      var span = document.createElement("span");
      span.textContent = label.trim();
      chip.appendChild(span);
      box.appendChild(chip);
    });
  });

  /* ---------- Reveal sections when they scroll into view ---------- */

  var revealEls = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Hero scroll animation (writes progress 0 -> 1 to --p) ---------- */

  var hero = document.getElementById("home");

  if (hero && !reduceMotion) {
    var frame = 0;
    var updateHero = function () {
      frame = 0;
      var progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
      hero.style.setProperty("--p", progress.toFixed(3));
    };
    var onHeroScroll = function () {
      if (!frame) frame = requestAnimationFrame(updateHero);
    };
    updateHero();
    window.addEventListener("scroll", onHeroScroll, { passive: true });
    window.addEventListener("resize", onHeroScroll);
  }

  /* ---------- Expertise cards: 3D tilt + spotlight ---------- */

  document.querySelectorAll(".skills-grid .skill").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      card.style.setProperty("--mx", x * 100 + "%");
      card.style.setProperty("--my", y * 100 + "%");
      card.style.setProperty("--ry", (x - 0.5) * 6 + "deg");
      card.style.setProperty("--rx", (0.5 - y) * 6 + "deg");
    });
    card.addEventListener("mouseleave", function () {
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--rx", "0deg");
    });
  });

  /* ---------- Education + project cards: cursor spotlight ---------- */

  document.querySelectorAll("[data-spotlight]").forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - rect.left + "px");
      card.style.setProperty("--my", e.clientY - rect.top + "px");
    });
  });

  /* ---------- Contact form ----------
     Static hosting has no server, so a valid form opens the visitor's
     email app with the message filled in. */

  var form = document.getElementById("contact-form");

  if (form) {
    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var values = {};
      var valid = true;

      form.querySelectorAll(".field").forEach(function (field) {
        var input = field.querySelector("input, textarea");
        var error = field.querySelector(".field-error");
        var value = input.value.trim();
        values[field.getAttribute("data-field")] = value;

        var empty = value === "";
        field.classList.toggle("has-error", empty);
        error.hidden = !empty;
        if (empty) valid = false;
      });

      if (!valid) {
        status.hidden = true;
        return;
      }

      var subject = "Portfolio message from " + values.name;
      var body = values.message + "\n\n— " + values.name + "\nContact: " + values.email;
      window.location.href =
        "mailto:ashasureshdev01@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      status.textContent = "Thanks! Your email app should open with the message ready to send.";
      status.hidden = false;
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
