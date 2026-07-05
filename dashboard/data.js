/* ============================================================
   MC Digital — נתוני הדשבורד האישי
   הקובץ מתעדכן ע"י הסוכן mc-digital-seo (ריצה שבועית) וגם ידנית.
   פשוט לערוך, לשמור, ולדחוף (git push) — הדשבורד יתעדכן.
   ============================================================ */

window.DASH = {
  updated: "2026-07-04",

  /* ---------- פניות (לידים) ----------
     status: new | talking | quoted | won | lost              */
  leads: [
    // דוגמה (למחוק כשמגיעה פנייה אמיתית):
    // { date: "2026-07-05", name: "ישראל ישראלי", source: "וואטסאפ", type: "אתר תדמית", status: "talking", note: "לחזור ביום שלישי" },
  ],

  /* ---------- מיקומים בגוגל ----------
     הסוכן השבועי מוסיף נקודת מדידה לכל מילה (אחרי חיבור Search Console).
     position: null = עדיין לא מדורג / אין נתונים                */
  rankings: [
    { keyword: "בניית אתר תדמית לעסק קטן", history: [{ week: "2026-07-04", position: null }] },
    { keyword: "בניית אתר עם AI",           history: [{ week: "2026-07-04", position: null }] },
    { keyword: "סטודיו דיגיטלי לעסקים",     history: [{ week: "2026-07-04", position: null }] },
    { keyword: "פיתוח אפליקציה לעסק קטן",   history: [{ week: "2026-07-04", position: null }] }
  ],

  /* ---------- תנועה שבועית ----------
     עד שמחברים GA — הסוכן ממלא מ-Search Console (חשיפות/קליקים) */
  traffic: [
    { week: "04/07", impressions: 0, clicks: 0 }
  ],

  /* ---------- צ'קליסט הקמה ---------- */
  checklist: [
    { label: "האתר באוויר (GitHub Pages)", done: true },
    { label: "אימות טופס FormSubmit (מייל אימות בשליחה הראשונה)", done: false },
    { label: "Google Analytics — יצירת נכס GA4 והדבקת ה-ID", done: false },
    { label: "Google Search Console — אימות האתר", done: true },
    { label: "הגשת sitemap + בקשת אינדוקס לעמוד הבית", done: true },
    { label: "חיבור GSC לדשבורד (חשבון שירות) — ראה scripts/README.md", done: false },
    { label: "Google Business Profile", done: false },
    { label: "פרופיל XPlace + Freelancerim עם קישור", done: false },
    { label: "הודעת השקה ל-30 אנשי קשר (תבנית 1)", done: false },
    { label: "המלצות משי סבג וממורן", done: false }
  ]
};
