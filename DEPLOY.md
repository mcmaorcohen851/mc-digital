# פריסה + כתובת חינמית "mcdigital"

האתר סטטי (HTML/CSS/JS, ללא build) ומחובר ל-GitHub: `mcmaorcohen851/mc-digital`.

## לקבל כתובת mcdigital.netlify.app (חינם, ~3 דקות)
1. להיכנס ל-https://app.netlify.com ולהתחבר עם **GitHub** (חשבון מאור).
2. **Add new site → Import an existing project → GitHub → לבחור את `mc-digital`**.
3. ב-Publish directory להשאיר `.` (או ריק) — אין build command. ללחוץ **Deploy**.
4. אחרי הפריסה: **Site settings → Change site name → להקליד `mcdigital`**.
   הכתובת תהיה: `https://mcdigital.netlify.app`
   (אם התפוס — לנסות `mcdigital-il`, `mc-digital-studio` וכו').

## חלופה: Vercel (mcdigital.vercel.app)
1. https://vercel.com → Login with GitHub → **Add New → Project → Import `mc-digital`**.
2. Framework Preset: **Other**. Root/Output: ברירת מחדל. **Deploy**.
3. **Settings → Domains / Project Name** → לשנות ל-`mcdigital` → `https://mcdigital.vercel.app`.

## חשוב — אחרי שבחרת כתובת סופית
כל כתובות ה-canonical, ה-OG, ה-sitemap וה-JSON-LD כרגע מצביעות ל-
`https://mcmaorcohen851.github.io/mc-digital/`.
ברגע שהכתובת החדשה פעילה — **תגיד לי את הכתובת המדויקת** ואני מריץ החלפה גורפת
בכל הקבצים (canonical/OG/sitemap/robots/llms.txt/JSON-LD) + push. בלי זה גוגל
ימשיך להצביע לכתובת הישנה.

> הערה: כל push ל-`main` ב-GitHub יעדכן אוטומטית גם את Netlify/Vercel וגם את GitHub Pages — כל הכתובות נשארות מסונכרנות.
