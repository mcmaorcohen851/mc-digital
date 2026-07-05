#!/usr/bin/env node
/* ============================================================================
 *  MC Digital — משיכת נתונים מ-Google Search Console אל הדשבורד
 *  כותב אל: ../dashboard/gsc-data.js
 *
 *  מצב חי:   node sync-gsc.mjs           (דורש service account — ראה README.md)
 *  מצב דמו:  node sync-gsc.mjs --demo    (כותב נתוני דוגמה, בלי חיבור/התקנה)
 *
 *  הסקריפט שומר היסטוריית מיקומים: כל ריצה מוסיפה נקודה חדשה (השבוע הנוכחי)
 *  לכל מילת מפתח, בלי למחוק את העבר.
 * ==========================================================================*/

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../dashboard/gsc-data.js");

/* כתובת ה-property ב-Search Console (URL prefix — בדיוק כפי שאומת) */
const SITE_URL = process.env.GSC_SITE_URL || "https://mcmaorcohen851.github.io/mc-digital/";
/* נתיב קובץ המפתח של חשבון השירות (JSON). אפשר להעביר גם דרך משתנה סביבה. */
const KEY_FILE = process.env.GSC_KEY_FILE || resolve(__dirname, "service-account.json");

/* מילות המפתח שנעקוב אחרי המיקום שלהן לאורך זמן (בהתאם ל-seo/keywords.md) */
const TARGET_KEYWORDS = [
  "בניית אתר תדמית",
  "פיתוח אפליקציות לעסקים",
  "בניית חנות אונליין",
  "קמפיינים ממומנים לעסקים",
  "אוטומציות AI לעסקים",
];

const isDemo = process.argv.includes("--demo");

/* ---------- עזרי תאריך ---------- */
function fmt(d) {
  return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0");
}
function isoDate(d) { return d.toISOString().slice(0, 10); }
function weekLabelNow() { return fmt(new Date()); }

/* ---------- קריאת הנתונים הקיימים (לשמירת היסטוריה) ---------- */
function readExisting() {
  try {
    const raw = readFileSync(OUT, "utf8");
    const json = raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
    return JSON.parse(json);
  } catch {
    return { updated: null, topQueries: [], rankings: [], traffic: [] };
  }
}

/* ---------- שילוב נקודת מיקום חדשה לכל מילת מפתח ---------- */
function mergeRankings(existingRankings, freshByKeyword, week) {
  const map = new Map((existingRankings || []).map(r => [r.keyword, r.history.slice()]));
  for (const kw of TARGET_KEYWORDS) {
    const hist = map.get(kw) || [];
    const pos = freshByKeyword.has(kw) ? Math.round(freshByKeyword.get(kw) * 10) / 10 : null;
    const last = hist[hist.length - 1];
    if (last && last.week === week) last.position = pos;   // עדכון אם רצנו כבר השבוע
    else hist.push({ week, position: pos });
    if (hist.length > 26) hist.shift();                    // שומרים חצי שנה אחורה
    map.set(kw, hist);
  }
  return TARGET_KEYWORDS.map(kw => ({ keyword: kw, history: map.get(kw) }));
}

function write(data) {
  const body =
    "/* ============================================================\n" +
    "   MC Digital — נתוני Google Search Console (אוטומטי)\n" +
    "   נכתב ע\"י scripts/sync-gsc.mjs — אין לערוך ידנית.\n" +
    "   ============================================================ */\n" +
    "window.GSC = " + JSON.stringify(data, null, 2) + ";\n";
  writeFileSync(OUT, body, "utf8");
  console.log("✓ נכתב:", OUT);
  console.log("  ביטויים:", data.topQueries.length, "| שבועות תנועה:", data.traffic.length, "| עודכן:", data.updated);
}

/* ========================= מצב דמו ========================= */
function runDemo() {
  const today = new Date();
  const traffic = [];
  for (let i = 7; i >= 0; i--) {
    const d = new Date(today); d.setDate(d.getDate() - i * 7);
    traffic.push({ week: fmt(d), impressions: 40 + Math.round(Math.random() * 180) + (7 - i) * 25, clicks: 2 + Math.round(Math.random() * 14) + (7 - i) * 2 });
  }
  const topQueries = [
    { query: "בניית אתר תדמית לעסק קטן", impressions: 320, clicks: 18, ctr: 5.6, position: 8.4 },
    { query: "בניית אתר עם AI", impressions: 210, clicks: 12, ctr: 5.7, position: 6.1 },
    { query: "סטודיו דיגיטלי לעסקים", impressions: 155, clicks: 7, ctr: 4.5, position: 11.2 },
    { query: "פיתוח אפליקציה לעסק קטן", impressions: 98, clicks: 5, ctr: 5.1, position: 14.7 },
    { query: "בניית חנות אונליין וורדפרס", impressions: 76, clicks: 3, ctr: 3.9, position: 17.3 },
    { query: "קמפיין פייסבוק לעסק", impressions: 54, clicks: 2, ctr: 3.7, position: 21.0 },
  ];
  const existing = readExisting();
  const fresh = new Map([
    ["בניית אתר תדמית", 8.4], ["פיתוח אפליקציות לעסקים", 14.7], ["בניית חנות אונליין", 17.3],
    ["קמפיינים ממומנים לעסקים", 21.0], ["אוטומציות AI לעסקים", 9.2],
  ]);
  write({
    updated: isoDate(today) + " (דמו)",
    topQueries,
    rankings: mergeRankings(existing.rankings, fresh, weekLabelNow()),
    traffic,
  });
  console.log("ℹ️  מצב דמו — נתוני דוגמה בלבד. להריץ במצב חי אחרי הגדרת חשבון השירות.");
}

/* ========================= מצב חי ========================= */
async function runLive() {
  if (!existsSync(KEY_FILE)) {
    console.error("✗ לא נמצא קובץ מפתח:", KEY_FILE, "\n  ראה scripts/README.md ליצירת חשבון שירות, או הרץ עם --demo.");
    process.exit(1);
  }
  const { google } = await import("googleapis");
  const auth = new google.auth.GoogleAuth({ keyFile: KEY_FILE, scopes: ["https://www.googleapis.com/auth/webmasters.readonly"] });
  const gsc = google.webmasters({ version: "v3", auth });

  const today = new Date();
  const start28 = new Date(today); start28.setDate(start28.getDate() - 28);
  const start90 = new Date(today); start90.setDate(start90.getDate() - 90);

  /* 1) ביטויי חיפוש מובילים (28 יום) */
  const qRes = await gsc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: { startDate: isoDate(start28), endDate: isoDate(today), dimensions: ["query"], rowLimit: 25 },
  });
  const rows = qRes.data.rows || [];
  const topQueries = rows.map(r => ({
    query: r.keys[0],
    impressions: r.impressions,
    clicks: r.clicks,
    ctr: Math.round(r.ctr * 1000) / 10,
    position: Math.round(r.position * 10) / 10,
  }));

  /* מיקום נוכחי לכל מילת מפתח שאנחנו עוקבים אחריה */
  const fresh = new Map();
  for (const kw of TARGET_KEYWORDS) {
    const hit = rows.find(r => r.keys[0].includes(kw));
    if (hit) fresh.set(kw, hit.position);
  }

  /* 2) תנועה לפי יום (90 יום) → צבירה לשבועות */
  const dRes = await gsc.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: { startDate: isoDate(start90), endDate: isoDate(today), dimensions: ["date"], rowLimit: 100 },
  });
  const byWeek = new Map();
  for (const r of dRes.data.rows || []) {
    const d = new Date(r.keys[0]);
    const sunday = new Date(d); sunday.setDate(d.getDate() - d.getDay());
    const key = fmt(sunday);
    const acc = byWeek.get(key) || { week: key, impressions: 0, clicks: 0 };
    acc.impressions += r.impressions; acc.clicks += r.clicks;
    byWeek.set(key, acc);
  }
  const traffic = [...byWeek.values()].slice(-12);

  const existing = readExisting();
  write({
    updated: isoDate(today),
    topQueries,
    rankings: mergeRankings(existing.rankings, fresh, weekLabelNow()),
    traffic,
  });
}

(isDemo ? Promise.resolve(runDemo()) : runLive()).catch(err => {
  console.error("✗ שגיאה:", err.message);
  process.exit(1);
});
