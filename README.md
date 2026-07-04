# MC Digital — אתר תדמית + תיק עבודות

אתר סטטי (HTML/CSS/JS טהור, עברית RTL) שמתארח בחינם ב-GitHub Pages.

## מבנה
- `index.html` — עמוד יחיד עם כל הסקשנים + SEO מלא (meta, OG, JSON-LD)
- `assets/css/style.css` — עיצוב (dark + ניאון סגול/ציאן)
- `assets/css/fx.css` — שכבת אנימציות (preloader, reveals, tilt, HUD)
- `assets/js/app.js` — לוגיקה. **כאן מעדכנים:** מספר וואטסאפ, אימייל, Formspree ID, ורשימת הפרויקטים (מערך `PROJECTS`)
- `assets/js/particles.js` — רשת חלקיקים בהירו
- `assets/img/projects/` — ויזואלים. להחלפת SVG ב-screenshot אמיתי: לשים קובץ חדש ולעדכן את שדה `img` ב-PROJECTS
- `seo/` — תוכנית מילות מפתח, צ'קליסט באקלינקים ויומן (מנוהל ע"י הסוכן `mc-digital-seo`)
- `CLIENTS-PLAYBOOK.md` — פלייבוק גיוס לקוחות + תבניות הודעות
- `leads-tracker.md` — טבלת מעקב לידים

## עדכון האתר
עורכים קבצים → `git add -A && git commit -m "..." && git push` → GitHub Pages מתעדכן תוך ~דקה.

## טופס יצירת קשר
עובד דרך FormSubmit (חינם, בלי חשבון) — שולח ישירות ל-mcmaorcohen851@gmail.com. **בשליחה הראשונה** FormSubmit שולח מייל אימות חד-פעמי — חובה ללחוץ על הקישור שבו כדי להפעיל את הטופס.

## Google Analytics
הקוד מוכן ב-`index.html`. נשאר רק: ליצור נכס GA4 ב-analytics.google.com → להעתיק את ה-Measurement ID (G-XXXX) → להדביק במשתנה `window.GA_ID` בראש `index.html`. אירועי `generate_lead` כבר מחוברים לטופס ולכפתורי הוואטסאפ.

## דשבורד אישי
`/dashboard/` — לוח בקרה פרטי (noindex, חסום ב-robots): פניות, מיקומים בגוגל, תנועה וצ'קליסט. הנתונים ב-`dashboard/data.js` — מתעדכן ע"י הסוכן `mc-digital-seo` בריצה השבועית, או ידנית.
