/* ============================================================
   MC Digital — טוען אנליטיקס
   • Microsoft Clarity — מפת חום + הקלטות סשן + מעקב מבקרים (חינם, ללא הגבלה)
   • Google Analytics 4 — תנועה, מקורות, המרות (משלים)

   הפעלה: הדבק את המזהים בשתי השורות למטה. עד שהם ריקים — לא נטען כלום.
   • CLARITY_ID  — מ-https://clarity.microsoft.com  (New project → Setup → מזהה קצר)
   • GA_ID       — מ-https://analytics.google.com    (Measurement ID, למשל G-XXXXXXXXXX)
   ============================================================ */
(function () {
  "use strict";

  var CLARITY_ID = "xkakzpuo6x";  // ← מזהה ה-Clarity (מפת חום + כניסות) — פעיל
  var GA_ID = "G-N0RNFEQJZQ";       // ← מזהה ה-GA4 — פעיל

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
    window.gtag("config", GA_ID);
  }
})();
