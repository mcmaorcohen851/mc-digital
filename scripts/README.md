# חיבור Google Search Console לדשבורד

הסקריפט `sync-gsc.mjs` מושך מ-Search Console את ביטויי החיפוש, המיקומים והתנועה,
וכותב אותם אל `../dashboard/gsc-data.js`. הדשבורד קורא את הקובץ ומצייר את הגרפים.

## בדיקה מהירה (בלי חיבור) — מצב דמו
```bash
cd scripts
node sync-gsc.mjs --demo
```
זה כותב נתוני דוגמה כדי לראות שהדשבורד מתמלא. אחר כך מריצים במצב חי.

## החיבור הפעיל: OAuth (הוגדר 2026-11-07)
הארגון `mcdigital1991-org` חוסם מפתחות לחשבונות שירות, ולכן מתחברים כמשתמש עם הרשאת קריאה בלבד.
- פרויקט: `mc-digital-514013` בחשבון `mcdigital1991@gmail.com`. אפליקציית OAuth בשם "MC Digital Admin" (External, In production).
- `oauth-client.json` — פרטי האפליקציה. `oauth-token.json` — אישור הגישה. שניהם ב-gitignore ולא עולים לגיטהאב.
- אם האישור בוטל או נמחק, מתחברים מחדש פעם אחת: `node sync-gsc.mjs --login`, ופותחים את הכתובת שהסקריפט מדפיס בדפדפן שמחובר ל-`mcdigital1991@gmail.com`.
- כשיש `oauth-client.json`, הסקריפט מתעלם מ-service account.

## חלופה ישנה: חשבון שירות (חסום כרגע בחשבון הזה)
כל השלבים בחינם. דורש את חשבון הגוגל של מאור.

1. **צור פרויקט ב-Google Cloud** — https://console.cloud.google.com → New Project → שם: `mc-digital`.
2. **הפעל את ה-API** — בפרויקט: APIs & Services → Enable APIs → חפש **"Search Console API"** → Enable.
3. **צור חשבון שירות (Service Account):**
   - IAM & Admin → Service Accounts → **Create Service Account** → שם: `gsc-reader` → Done.
   - בכרטיס החשבון: Keys → **Add Key → Create new key → JSON** → יורד קובץ.
   - שמור אותו כאן בשם **`service-account.json`** (בתיקיית `scripts/`). הקובץ ב-gitignore ולא יעלה לגיטהאב.
4. **תן לחשבון השירות גישה ל-Search Console:**
   - העתק את כתובת האימייל של חשבון השירות (נראית כמו `gsc-reader@mc-digital.iam.gserviceaccount.com`).
   - ב-Search Console → Settings → **Users and permissions** → Add user → הדבק את האימייל → הרשאה: **Restricted** → Add.

## הרצה
```bash
cd scripts
npm install          # פעם אחת
node sync-gsc.mjs    # מושך נתונים אמיתיים ומעדכן את הדשבורד
```
אחר כך `git add -A && git commit && git push` — והדשבורד החי מתעדכן.

> הסוכן השבועי `mc-digital-seo` מריץ את זה אוטומטית בכל יום ראשון (אחרי שקובץ המפתח קיים).

## הגדרות (אופציונלי, דרך משתני סביבה)
- `GSC_SITE_URL` — כתובת ה-property (ברירת מחדל: `https://mcmaorcohen851.github.io/mc-digital/`). **לעדכן אם עוברים לדומיין חדש.**
- `GSC_KEY_FILE` — נתיב חלופי לקובץ המפתח.
