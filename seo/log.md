# MC Digital — יומן SEO (מנוהל ע"י הסוכן mc-digital-seo)

## 2026-08-25 — ריצה אגרסיבית מקיפה (הרבה מעבר לריצה השבועית)
הריצה השבועית הקודמת (שהייתה אמורה לרוץ אחרי 2026-07-17) נעצרה באמצע — לא נמצא commit SEO חדש בין 2026-07-17 לתאריך הזה. התחלנו מנקודה נקייה עם ריצה אחת גדולה שמכסה כמה שבועות תוכן בבת אחת. הכול White-Hat בלבד.

**1. אודיט טכני מלא (ולידציה חוזרת + תיקונים):**
- נבדקו מחדש כל 13 עמודי ה-HTML (היה 12 + עכשיו +1 blog/index.html): title/description/canonical/OG/Twitter ייחודיים בכולם, JSON-LD תקין (Service/FAQPage/BreadcrumbList/ProfessionalService/Person/WebSite/BlogPosting/CollectionPage/ItemList לפי סוג העמוד) — כל קובצי ה-JSON-LD נבדקו גם עם פרסינג אוטומטי (JSON.parse) ועברו תקין.
- H1 יחיד אומת מחדש בכל עמוד (סקריפט ספירה אוטומטי) — ללא חריגה.
- כל תגי ה-`<img>` באתר (מרונדרים דרך assets/js/app.js בעמוד תיק העבודות) כוללים alt עברי תיאורי — אומת ישירות בקוד.
- בדיקת קישורים שבורים מחדש על כל האתר (סקריפט שעובר על כל href יחסי מול קבצים בפועל, כולל 5 קבצי הבלוג) — 0 קישורים שבורים.
- robots.txt ו-sitemap.xml נבדקו: sitemap עודכן ל-17 כתובות (היה 12), lastmod רענן ל-2026-08-25 לכל העמודים שהשתנו בפועל (כל העמודים, בגלל קישור הבלוג החדש בניווט/פוטר).
- **שיפור מבני חדש:** נוסף קישור "בלוג" לניווט העליון ולפוטר בכל 13 העמודים (כולל הפוסט הקיים) — עד כה הבלוג היה נגיש רק דרך קישורים בודדים בגוף התוכן, בלי נראות בניווט הראשי. בוצע בסקריפט Node ממוקד (לא ידני) כדי להבטיח עקביות מדויקת בכל הקבצים.

**2. תוכן חדש — 3 עמודי בלוג (לא 1, כדי לכסות את כל תור ה-⏳ שהצטבר):**
לקחנו את שלושת הפריטים הבאים בתור מ-seo/keywords.md, בעדיפות לפי seo/keywords.md:
- `blog/pituach-aplikatzia-le-esek-katan-mechir.html` — "פיתוח אפליקציה לעסק קטן: כמה זה עולה ב-2026". FAQPage עם 4 שאלות, BlogPosting, BreadcrumbList.
- `blog/kampein-facebook-le-esek-katan.html` — "קמפיין פייסבוק לעסק קטן: המדריך המלא". כולל מקרה בוחן אמיתי (לא בדוי) מבוסס על פרויקט מורן דהן — מתואר בכנות כתהליך/אסטרטגיה (Meta Ads + Shopify + קריאייטיב AI + דשבורד Chart.js), בלי מספרי תוצאות מומצאים שאין להם גיבוי.
- `blog/bniyat-hanut-online-woocommerce.html` — "בניית חנות אונליין ב-WooCommerce". מקרה בוחן מבוסס על פרויקט שי סבג — מתואר במדויק כקטלוג שנבנה עם הכנה מלאה למעבר ל-WooCommerce (לא כטענה שגויה שהוא כבר חנות וורדפרס חיה).
- כל עמוד: 800+ מילים, SEO head מלא (title/description/canonical/OG/Twitter/robots), JSON-LD (BlogPosting+FAQPage+BreadcrumbList), קישורים פנימיים לעמודי השירות הרלוונטיים (app-development / paid-campaigns / ecommerce-stores), לפוסט הקיים, ולעמוד הבית/יצירת קשר, ו"מאמרים קשורים" בתחתית לשלושת הפוסטים האחרים.
- נוצר גם `blog/index.html` — עמוד ריכוז (hub) לבלוג עם ItemList JSON-LD, שמקשר לכל 4 הפוסטים. חסר עד כה — היה תלוי כתובות בודדות שלא היו נגישות ממקום מרכזי.
- העמוד הקודם `blog/kama-ole-livnot-atar-le-esek-2026.html` עודכן: נוספה שורת "מאמרים קשורים" עם קישור לשלושת הפוסטים החדשים, breadcrumb עודכן לכלול "בלוג", dateModified עודכן ל-2026-08-25.

**3. קישוריות פנימית — שיפור דו-כיווני:**
- app-development.html: נוסף קישור מהסעיף "כמה עולה לפתח אפליקציה" למדריך המחירים החדש.
- paid-campaigns.html: נוסף קישור מהסעיף "כמה תקציב מדיה צריך" למדריך הקמפיין החדש.
- ecommerce-stores.html: נוסף קישור מסעיף הפלטפורמות למדריך ה-WooCommerce החדש.
- faq.html: נוספו קישורים מהתשובות הרלוונטיות (מחיר אפליקציה, קידום ממומן) לשני הפוסטים החדשים.
- כל 4 פוסטי הבלוג מקושרים זה מזה ("מאמרים קשורים") ומהבלוג-האב, כך שאף עמוד בלוג אינו "יתום".

**4. באקלינקים — מחקר ותיעוד (לא בוצעו הרשמות בפועל, כולן דורשות חשבון אישי):**
- אותרו ותועדו ב-seo/backlinks.md שני דירקטוריות עסקים ישראליות לגיטימיות ונפוצות עם הרשמה עצמאית חינמית: **B144** (bezeq, כ-5 מיליון גולשים/חודש, https://www.b144.co.il/selfRegister/) ו**דפי זהב** (https://www.d.co.il/LandingPage/AddBusiness/) — נבדקו בפועל שהטפסים קיימים וזמינים.
- נבדק ונדחה במפורש שימוש ברשתות "300+ directory submission sites" גנריות שעלו בחיפוש — אלו נחשבות ספאם/PBN-adjacent ומזיקות לדומיין חדש; לא נכללו בתוכנית.
- כל שאר הפעולות (Google Business Profile, XPlace, Freelancerim, פייסבוק עסקי, LinkedIn, Bing Webmaster, B144, דפי זהב) מתועדות ב-seo/backlinks.md עם שלבי הרשמה מדויקים — כולן דורשות חשבון/אימות אישי של מאור ולא בוצעו מטעמו, בהתאם למדיניות אבטחה (איסור הזנת סיסמאות/יצירת חשבונות).

**5. עדכוני קבצים:**
- seo/keywords.md: שלושת הפריטים ⏳ סומנו ✅ עם קישור לעמוד שפורסם; נוספה טבלת "תור התוכן הבא" עם מילות מפתח חדשות (בניית אתר עם AI, בניית אתר תדמית מהיר, סטודיו דיגיטלי [עיר], דף נחיתה לעסק קטן מחיר, קידום אתר בגוגל בעצמי מול מקצועי, כמה עולה קמפיין פייסבוק לחודש).
- seo/backlinks.md: נבנה מחדש עם שלבי הרשמה מדויקים לכל פעולה, הפרדה ברורה בין "דורש חשבון אישי" ל"שוטף", והבהרה מפורשת נגד spam directories.
- dashboard/data.js: `updated` עודכן ל-2026-08-25, נוספו 2 מילות מפתח למעקב rankings (קמפיין פייסבוק לעסק קטן, בניית חנות אונליין וורדפרס). leads/checklist לא שונו בפועל — אין עדכון עובדתי מאומת חדש (Google Business Profile ו-XPlace עדיין ⏳, דורשים את מאור).
- sitemap.xml: 17 כתובות (היה 12), lastmod 2026-08-25 לכל מה שהשתנה בפועל.
- **דשבורד GSC:** scripts/service-account.json עדיין לא קיים — סנכרון אוטומטי (sync-gsc.mjs) לא רץ. יש לחבר חשבון שירות כדי שהדשבורד ימשוך נתוני חיפוש אמיתיים — ראה scripts/README.md.

**מה נשאר לשבוע הבא:** להמשיך מתור התוכן החדש ב-seo/keywords.md, לבדוק אם מאור סיים משימות ידניות (Google Business Profile בפרט) ולעדכן checklist בהתאם, ולנסות לחבר GSC service account לדשבורד.

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
