/* ============================================================
   MC Digital — טוען אנליטיקס
   • Microsoft Clarity — מפת חום + הקלטות סשן + מעקב מבקרים (חינם, ללא הגבלה)
   • Google Analytics 4 — תנועה, מקורות, המרות (משלים)

   ציות לפרטיות: Clarity ו-GA4 הם כלים לא-הכרחיים (אנליטיקס/הקלטות סשן),
   ולכן הם נטענים רק לאחר קבלת הסכמת המשתמש בבאנר העוגיות
   (ר' assets/js/cookie-consent.js + privacy-policy.html סעיף 2).
   אם המשתמש כבר אישר בעבר — הטעינה קורית אוטומטית בכניסה לעמוד.
   ============================================================ */
(function () {
  "use strict";

  var CLARITY_ID = "xkakzpuo6x";  // ← מזהה ה-Clarity (מפת חום + כניסות) — פעיל
  var GA_ID = "G-N0RNFEQJZQ";       // ← מזהה ה-GA4 — פעיל
  var CONSENT_KEY = "mc_cookie_consent_v1";

  function initAnalytics() {
    if (window.__mcAnalyticsLoaded) return;
    window.__mcAnalyticsLoaded = true;

    /* ---- Microsoft Clarity — מפת חום, הקלטות, מבקרים ---- */
    if (CLARITY_ID) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CLARITY_ID);
    }

    /* ---- Google Analytics 4 ---- */
    if (GA_ID) {
      var s = document.createElement("script");
      s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, { anonymize_ip: true });
    }
  }

  // חשוף לפונקציה שקוראת לה cookie-consent.js כשהמשתמש לוחץ "אישור הכול"
  window.mcInitAnalytics = initAnalytics;

  /* אם כבר יש הסכמה שמורה מבקרים קודמים — טוען אוטומטית בלי להציג באנר שוב */
  try {
    var raw = localStorage.getItem(CONSENT_KEY);
    var consent = raw ? JSON.parse(raw) : null;
    if (consent && consent.analytics === true) initAnalytics();
  } catch (e) { /* localStorage לא זמין — לא נטען כלום, בטוח מבחינת פרטיות */ }
})();
