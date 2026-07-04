/* MC Digital — לוגיקת האתר: ניווט, אנימציות, פורטפוליו, טופס */
(function () {
  "use strict";

  /* =========================================================
   * הגדרות — עדכן כאן בלבד
   * ======================================================= */
  var WHATSAPP = "972548058710";
  var EMAIL = "mcmaorcohen851@gmail.com";
  // הטופס נשלח דרך FormSubmit (חינם, בלי חשבון) ישירות לאימייל.
  // בשליחה הראשונה FormSubmit שולח מייל אימות חד-פעמי — ללחוץ על הקישור שבו.
  var FORMSUBMIT_URL = "https://formsubmit.co/ajax/" + EMAIL;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================================================
   * Preloader
   * ======================================================= */
  document.documentElement.classList.add("fx-loading");
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.documentElement.classList.remove("fx-loading");
      document.documentElement.classList.add("fx-ready");
    }, reduced ? 0 : 450);
  });
  // ביטחון: גם אם load מתעכב
  setTimeout(function () {
    document.documentElement.classList.remove("fx-loading");
    document.documentElement.classList.add("fx-ready");
  }, 3500);

  /* =========================================================
   * ניווט מובייל
   * ======================================================= */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* =========================================================
   * פס התקדמות גלילה
   * ======================================================= */
  var progress = document.querySelector(".fx-progress");
  if (progress) {
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    }, { passive: true });
  }

  /* =========================================================
   * זוהר עכבר
   * ======================================================= */
  var glow = document.querySelector(".fx-cursor");
  if (glow && !reduced) {
    var gx = 0, gy = 0, cx = 0, cy = 0, glowOn = false;
    document.addEventListener("pointermove", function (e) {
      gx = e.clientX; gy = e.clientY;
      if (!glowOn) { glow.classList.add("on"); glowOn = true; }
    });
    (function loop() {
      cx += (gx - cx) * 0.12; cy += (gy - cy) * 0.12;
      glow.style.transform = "translate(" + (cx - 260) + "px," + (cy - 260) + "px)";
      requestAnimationFrame(loop);
    })();
  }

  /* =========================================================
   * טקסט מתחלף (typewriter) בהירו
   * ======================================================= */
  var typeEl = document.getElementById("type-target");
  if (typeEl) {
    var PHRASES = [
      "אתרי תדמית שמוכרים",
      "אפליקציות מובייל",
      "חנויות אונליין",
      "קמפיינים ממומנים",
      "אוטומציות AI",
      "משחקים ומוצרים דיגיטליים"
    ];
    if (reduced) {
      typeEl.textContent = PHRASES[0];
    } else {
      var pi = 0, ci = 0, deleting = false;
      (function type() {
        var word = PHRASES[pi];
        typeEl.textContent = word.slice(0, ci);
        var delay = deleting ? 35 : 70;
        if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
        else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % PHRASES.length; delay = 350; }
        ci += deleting ? -1 : 1;
        setTimeout(type, delay);
      })();
    }
  }

  /* =========================================================
   * תיק עבודות — נתונים ורינדור
   * ======================================================= */
  var PROJECTS = [
    {
      id: "safenet", featured: true,
      name: "SafeNet IL — אפליקציית הגנת ילדים ברשת",
      cat: "apps", catLabel: "אפליקציות",
      desc: "אפליקציה מלאה להורים: ניטור חכם של 40+ אפליקציות מסרים בטלפון הילד, זיהוי בריונות ואיומים בזמן אמת עם AI, והתראות מיידיות לנייד ההורה.",
      tech: ["React", "Capacitor", "Supabase", "Gemini AI", "Android"],
      img: "assets/img/projects/safenet.svg",
      alt: "אפליקציית SafeNet IL — מסך ניטור הודעות עם התראות AI"
    },
    {
      id: "shai-sabag",
      name: "שי סבג — חנות מדבקות ועיטוף לרכב",
      cat: "web", catLabel: "חנויות אונליין",
      desc: "קטלוג אונליין מלא למדבקות רכב בהתאמה אישית: מאות מוצרים, סינון לפי דגם רכב, עגלת קניות והכנה מלאה למעבר ל-WooCommerce.",
      tech: ["HTML/CSS/JS", "WooCommerce", "SEO"],
      img: "assets/img/projects/shai-sabag-live.jpg",
      alt: "חנות המדבקות של שי סבג — עמוד הבית של הקטלוג"
    },
    {
      id: "luxora",
      name: "LUXORA — קטלוג דילים יוקרתי",
      cat: "web", catLabel: "אתרים",
      desc: "אתר אפיליאציה עתידני בעיצוב ניאון-זכוכית: קטלוג מוצרים דינמי, עמודי מוצר, ומערכת קישורים חכמה שמייצרת הכנסה מכל הפניה.",
      tech: ["HTML/CSS/JS", "Affiliate", "SEO"],
      img: "assets/img/projects/luxora-live.jpg",
      alt: "אתר LUXORA — קטלוג דילים בעיצוב ניאון עתידני"
    },
    {
      id: "magic-garden",
      name: "Magic Garden — משחק ילדים ויראלי",
      cat: "games", catLabel: "משחקים",
      desc: "משחק אסוף-וגדל קסום לילדים: בקיעת ביצים, גינה מתפתחת, סטריקים יומיים וחנות עם שער הורים — בנוי להתמכרות בריאה ולשיתופים.",
      tech: ["React", "TypeScript", "PWA", "Capacitor"],
      img: "assets/img/projects/magic-garden.svg",
      alt: "משחק Magic Garden — גינה קסומה עם יצורים"
    },
    {
      id: "meta-ads-mcp",
      name: "Meta Ads MCP — אוטומציית קמפיינים",
      cat: "auto", catLabel: "אוטומציות / AI",
      desc: "כלי אוטומציה שמחבר AI ישירות ל-Meta Marketing API: ניהול קמפיינים בפייסבוק ואינסטגרם, משיכת ביצועים ואופטימיזציה — בפקודה אחת.",
      tech: ["Node.js", "MCP", "Meta API", "Zod"],
      img: "assets/img/projects/meta-ads-mcp.svg",
      alt: "Meta Ads MCP — טרמינל ניהול קמפיינים אוטומטי"
    },
    {
      id: "moran-dahan",
      name: "מורן דהן — קמפיין תכשיטים + דשבורד",
      cat: "ads", catLabel: "קמפיינים",
      desc: "ליווי שיווקי מלא למותג תכשיטים: אסטרטגיית מודעות בפייסבוק ואינסטגרם, קריאייטיב בווידאו AI, ודשבורד אנליטיקס מותאם למעקב תוצאות.",
      tech: ["Meta Ads", "Shopify", "Chart.js", "AI Video"],
      img: "assets/img/projects/moran-dahan-live.jpg",
      alt: "דשבורד קמפיין מורן דהן — גרפים ומדדי ביצוע"
    }
  ];

  var grid = document.getElementById("work-grid");
  if (grid) {
    var html = "";
    PROJECTS.forEach(function (p, i) {
      html +=
        '<article class="work-card reveal' + (p.featured ? " featured" : "") + '" data-cat="' + p.cat + '" style="--i:' + i + '">' +
          '<div class="work-media">' +
            '<span class="work-tag">' + p.catLabel + "</span>" +
            '<img src="' + p.img + '" alt="' + p.alt + '" loading="lazy" width="640" height="400">' +
          "</div>" +
          '<div class="work-body">' +
            "<h3>" + p.name + "</h3>" +
            "<p>" + p.desc + "</p>" +
            '<div class="chip-row">' + p.tech.map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") + "</div>" +
          "</div>" +
        "</article>";
    });
    grid.innerHTML = html;
  }

  /* פילטר קטגוריות */
  var filterBar = document.querySelector(".filter-bar");
  if (filterBar && grid) {
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var cat = btn.dataset.cat;
      grid.querySelectorAll(".work-card").forEach(function (card) {
        card.classList.toggle("hidden", cat !== "all" && card.dataset.cat !== cat);
      });
    });
  }

  /* =========================================================
   * חשיפות בגלילה + מוני מספרים
   * ======================================================= */
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, target = +el.dataset.count, cur = 0;
        var step = Math.max(1, Math.ceil(target / 50));
        (function inc() {
          cur = Math.min(target, cur + step);
          el.textContent = cur + (el.dataset.suffix || "");
          if (cur < target) requestAnimationFrame(inc);
        })();
        cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    document.querySelectorAll("[data-count]").forEach(function (el) {
      el.textContent = el.dataset.count + (el.dataset.suffix || "");
    });
  }

  /* =========================================================
   * Tilt תלת-ממדי לכרטיסים (דסקטופ)
   * ======================================================= */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reduced) {
    document.addEventListener("pointermove", function (e) {
      var card = e.target.closest(".svc-card, .work-card");
      if (!card) return;
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "translateY(-7px) perspective(900px) rotateX(" + (-py * 6) + "deg) rotateY(" + (px * 6) + "deg)";
    });
    document.addEventListener("pointerout", function (e) {
      var card = e.target.closest(".svc-card, .work-card");
      if (card) card.style.transform = "";
    });
  }

  /* =========================================================
   * טופס יצירת קשר — Formspree או mailto fallback
   * ======================================================= */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var msg = document.getElementById("form-msg");
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = "שולח…";

      data.append("_subject", "🚀 פנייה חדשה מהאתר — " + data.get("name"));
      data.append("_template", "table");
      data.append("_captcha", "false");

      // אירוע ליד ל-Google Analytics (אם מחובר)
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", { method: "contact_form", project_type: data.get("type") });
      }

      fetch(FORMSUBMIT_URL, {
        method: "POST", body: data, headers: { Accept: "application/json" }
      }).then(function (res) {
        if (!res.ok) throw new Error();
        return res.json();
      }).then(function () {
        form.reset();
        msg.className = "form-msg ok";
        msg.textContent = "ההודעה נשלחה! נחזור אליך תוך 24 שעות 🚀";
      }).catch(function () {
        // fallback: פתיחת טיוטת מייל
        var body =
          "שם: " + data.get("name") + "\n" +
          "טלפון: " + data.get("phone") + "\n" +
          "אימייל: " + data.get("email") + "\n" +
          "סוג פרויקט: " + data.get("type") + "\n\n" +
          data.get("message");
        window.location.href = "mailto:" + EMAIL +
          "?subject=" + encodeURIComponent("פנייה חדשה מהאתר — " + data.get("name")) +
          "&body=" + encodeURIComponent(body);
        msg.className = "form-msg ok";
        msg.textContent = "נפתחה טיוטת מייל — רק ללחוץ שליחה 📩";
      }).finally(function () {
        btn.disabled = false; btn.textContent = "שלחו ונחזור אליכם ⚡";
      });
    });
  }

  /* =========================================================
   * קישורי וואטסאפ — נבנים מהמספר המוגדר למעלה
   * ======================================================= */
  var waText = encodeURIComponent("היי מאור! ראיתי את האתר של MC Digital ואשמח לשמוע פרטים");
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = "https://wa.me/" + WHATSAPP + "?text=" + waText;
    a.addEventListener("click", function () {
      if (typeof gtag === "function") gtag("event", "generate_lead", { method: "whatsapp" });
    });
  });

  /* שנה נוכחית בפוטר */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
