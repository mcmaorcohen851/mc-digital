# MC Digital — יומן SEO (מנוהל ע"י הסוכן mc-digital-seo)

## 2026-07-17 — ריצה שבועית: אודיט טכני + פוסט בלוג ראשון
- **אודיט טכני:** נבדקו כל 10 עמודי האתר — title/description/canonical/OG ייחודיים בכל עמוד (אין כפילויות), JSON-LD תקין בכולם (Service/FAQPage/BreadcrumbList/ProfessionalService/Person/WebSite), robots.txt תקין (חוסם רק /dashboard/, מאפשר את כל בוטי החיפוש וה-AI), sitemap.xml כלל 9 כתובות + lastmod מ-04/07. היררכיית H1 תקינה (H1 יחיד בכל עמוד תוכן). לא נמצאו תגי `<img>` באתר כלל (עיצוב מבוסס CSS/SVG) — כך שאין בעיית alt חסר. נבדקו כל הקישורים הפנימיים (href יחסיים) בכל העמודים מול קבצים בפועל — אין קישורים שבורים.
- **תוכן חדש:** נכתב ופורסם `blog/kama-ole-livnot-atar-le-esek-2026.html` — מדריך מעמיק "כמה עולה לבנות אתר לעסק ב-2026" (מילת המפתח הבאה בתור ⏳ מ-seo/keywords.md). כולל SEO head מלא (title/description/canonical/OG/Twitter), BlogPosting + FAQPage + BreadcrumbList JSON-LD, וקישוריות פנימית דו-כיוונית: הפוסט מקשר ל-website-design.html, ecommerce-stores.html, app-development.html, ai-automation.html, paid-campaigns.html, faq.html, portfolio.html ו-index.html#contact; ובחזרה — נוסף קישור לפוסט מתוך website-design.html (סעיף המחיר) ומתוך faq.html (השאלה על מחיר אתר תדמית), כדי שהעמוד לא יהיה "יתום".
- sitemap.xml עודכן: נוסף רשומת הפוסט (lastmod 2026-07-17, priority 0.7), ועודכן lastmod ל-2026-07-17 עבור website-design.html ו-faq.html (העמודים שנערכו).
- seo/keywords.md: השורה של "כמה עולה לבנות אתר לעסק 2026" סומנה ✅ עם קישור לעמוד שפורסם.
- seo/backlinks.md: שורת Google Search Console עודכנה ל-✅ (מאומת בפועל — קובץ האימות googleabfa2fb2a45b37cf.html קיים בשורש, וה-checklist בדשבורד מראה sitemap הוגש). שאר הפעולות הקריטיות (Google Business Profile, XPlace, Freelancerim, פייסבוק עסקי, LinkedIn, Bing Webmaster, דפי זהב) עדיין ⏳ — דורשות חשבון אישי של מאור ולא ניתן לבצע אותן מטעמו.
- **דשבורד:** scripts/service-account.json לא קיים — סנכרון GSC אוטומטי (sync-gsc.mjs) לא רץ הפעם. dashboard/data.js נבדק ונשאר תקף (leads/checklist ללא שינוי עובדתי חדש השבוע).


## 2026-07-04 (ערב) — מעבר למבנה רב-עמודים
- האתר הורחב מ-one-page ל-9 עמודים אינדקסביליים: בית, 5 עמודי שירות ממוקדי מילת מפתח (website-design, app-development, ecommerce-stores, paid-campaigns, ai-automation), portfolio, faq (עם סכמת FAQPage מלאה של 10 שאלות), about.
- כל עמוד: title/description ייחודיים, canonical, OG, BreadcrumbList + Service JSON-LD, מיני-FAQ, קישוריות פנימית צולבת, CTA.
- sitemap.xml עודכן ל-9 כתובות עם עדיפויות. כרטיסי השירות בעמוד הבית הפכו לקישורים לעמודי השירות; הפוטר מקשר לכל העמודים (קישוריות פנימית מלאה).
- הנחיה לסוכן השבועי: עמודי בלוג חדשים נכנסים תחת blog/ ומתווספים ל-sitemap; לקשר אליהם מעמודי השירות הרלוונטיים.

## 2026-07-04 — השקה
- האתר נבנה עם SEO מלא: title/description ממוקדי מילות מפתח, OG + Twitter cards, JSON-LD (ProfessionalService + Person + WebSite), sitemap.xml, robots.txt, alt עברי לכל התמונות, היררכיית כותרות סמנטית, פונטים עם display=swap, lazy-loading לתמונות מתחת לקפל.
- נכסי SEO נוצרו: seo/keywords.md (תוכנית מילות מפתח), seo/backlinks.md (צ'קליסט נוכחות).
- המשימות הפתוחות הדחופות: אימות Google Search Console + Google Business Profile (דורש חשבון של מאור).
