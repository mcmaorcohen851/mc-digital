#!/usr/bin/env node
/* ============================================================================
 *  בדיקת מצב ה-sitemap ב-Google Search Console (קריאה בלבד)
 *  node check-sitemap.mjs        → טבלה קריאה
 *  node check-sitemap.mjs --json → פלט JSON (לבדיקה האוטומטית היומית)
 *  יוצא עם קוד 0 כשגוגל קרא sitemap בלי שגיאות, ו-2 כשעדיין תקוע.
 * ==========================================================================*/
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = process.env.GSC_SITE_URL || "https://mcmaorcohen851.github.io/mc-digital/";
const CLIENT = resolve(__dirname, "oauth-client.json");
const TOKEN = resolve(__dirname, "oauth-token.json");

if (!existsSync(CLIENT) || !existsSync(TOKEN)) {
  console.error("✗ אין חיבור OAuth. להריץ: node sync-gsc.mjs --login");
  process.exit(1);
}

const { google } = await import("googleapis");
const { installed } = JSON.parse(readFileSync(CLIENT, "utf8"));
const auth = new google.auth.OAuth2(installed.client_id, installed.client_secret);
auth.setCredentials(JSON.parse(readFileSync(TOKEN, "utf8")));
const gsc = google.webmasters({ version: "v3", auth });

const [{ data: sm }, { data: live }] = await Promise.all([
  gsc.sitemaps.list({ siteUrl: SITE_URL }),
  fetch(SITE_URL + "sitemap.xml?nc=" + Date.now()).then(async (r) => ({ data: { status: r.status, urls: (await r.text()).split("<url>").length - 1 } })),
]);

const rows = (sm.sitemap || []).map((s) => ({
  path: s.path.replace(SITE_URL, "/"),
  submitted: s.lastSubmitted?.slice(0, 10) || null,
  lastRead: s.lastDownloaded?.slice(0, 10) || null,
  pending: !!s.isPending,
  errors: Number(s.errors || 0),
  warnings: Number(s.warnings || 0),
  discovered: (s.contents || []).reduce((n, c) => n + Number(c.submitted || 0), 0),
}));
const ok = rows.some((r) => r.lastRead && r.errors === 0);
const result = { checked: new Date().toISOString().slice(0, 16).replace("T", " "), ok, liveSitemap: live, sitemaps: rows };

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`בדיקה: ${result.checked} | ה-sitemap באתר: HTTP ${live.status}, ${live.urls} כתובות`);
  for (const r of rows) {
    console.log(`${r.path.padEnd(18)} הוגש ${r.submitted ?? "-"} | נקרא ${r.lastRead ?? "אף פעם"} | שגיאות ${r.errors} | עמודים שהתגלו ${r.discovered}${r.pending ? " | בתהליך" : ""}`);
  }
  console.log(ok ? "✓ גוגל קרא את ה-sitemap בהצלחה" : "⏳ גוגל עדיין לא קרא את ה-sitemap");
}
process.exit(ok ? 0 : 2);
