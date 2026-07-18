/* =============================================================================
 *  🍪 MC Digital — באנר הסכמה לעוגיות
 *  מציג באנר תחתון בכניסה הראשונה בלבד, שומר את הבחירה ב-localStorage,
 *  ומפעיל את כלי האנליטיקס (Clarity + GA4) רק אם המשתמש אישר.
 *  ר' privacy-policy.html סעיף 2 להסבר המלא.
 * ===========================================================================*/
(function () {
  "use strict";
  var KEY = "mc_cookie_consent_v1";

  function getConsent() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function setConsent(analyticsAllowed) {
    var value = { analytics: !!analyticsAllowed, ts: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) { /* ignore */ }
    return value;
  }

  // תמיכה בדפים תת-תיקייה (למשל blog/) שבהם הנתיבים היחסיים מתחילים ב-../
  function siteRoot() {
    return /\/blog\//.test(location.pathname) ? "../" : "";
  }

  function build() {
    if (getConsent()) return;               // המשתמש כבר בחר בעבר — לא מציגים שוב
    if (document.getElementById("cookieBar")) return;

    var bar = document.createElement("div");
    bar.className = "cookie-bar";
    bar.id = "cookieBar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "הודעת עוגיות ופרטיות");
    bar.innerHTML =
      '<div class="cookie-bar__text">🍪 האתר משתמש בעוגיות ובכלי ניתוח (Google Analytics, Microsoft Clarity) כדי להבין איך גולשים משתמשים באתר ולשפר אותו — כולל מפות חום והקלטות גלישה אנונימיות. ' +
      'תוכלו לבחור אילו עוגיות לאשר. פרטים מלאים ב<a href="' + siteRoot() + 'privacy-policy.html">מדיניות הפרטיות</a>.</div>' +
      '<div class="cookie-bar__actions">' +
        '<button type="button" class="btn btn-ghost cookie-btn" id="cookieEssential">רק הכרחיים</button>' +
        '<button type="button" class="btn btn-grad cookie-btn" id="cookieAcceptAll">אישור הכול</button>' +
      "</div>";
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add("show"); });

    function close() {
      bar.classList.remove("show");
      setTimeout(function () { bar.remove(); }, 350);
    }

    document.getElementById("cookieAcceptAll").addEventListener("click", function () {
      setConsent(true);
      if (typeof window.mcInitAnalytics === "function") window.mcInitAnalytics();
      close();
    });
    document.getElementById("cookieEssential").addEventListener("click", function () {
      setConsent(false); // רק עוגיות הכרחיות — Clarity ו-GA4 לא ייטענו
      close();
    });
  }

  if (document.readyState !== "loading") build();
  else document.addEventListener("DOMContentLoaded", build);
})();
