/* =============================================================================
 *  ♿ MC Digital — מערכת נגישות (כפתור צף + תפריט התאמות + שמירה)
 *  מותאם מהמערכת של חנות שי סבג, בצבעי MC Digital.
 * ===========================================================================*/
(function () {
  "use strict";
  const KEY = "mc_acc_v1";
  const html = document.documentElement;
  const state = Object.assign(
    { font: 0, contrast: false, gray: false, links: false, motion: false },
    JSON.parse(localStorage.getItem(KEY) || "{}")
  );

  function apply() {
    html.classList.remove("acc-font-1", "acc-font-2", "acc-font-3");
    if (state.font > 0) html.classList.add("acc-font-" + state.font);
    html.classList.toggle("acc-contrast", !!state.contrast);
    html.classList.toggle("acc-gray", !!state.gray);
    html.classList.toggle("acc-links", !!state.links);
    html.classList.toggle("acc-motion", !!state.motion);
    localStorage.setItem(KEY, JSON.stringify(state));
    document.querySelectorAll("[data-toggle]").forEach(b => b.classList.toggle("active", !!state[b.dataset.toggle]));
  }
  apply();

  const icon = {
    a11y: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="3.6" r="2.1"/><path d="M21 8.4c0 .6-.5 1-1 1l-4.5-.5v3l1.8 6.3c.2.7-.2 1.3-.9 1.5-.6.2-1.3-.2-1.5-.9L12.6 14h-1.2l-2.4 5.3c-.3.6-1 .9-1.6.6-.6-.3-.9-1-.6-1.6L8.6 12v-3L4 9.4c-.6 0-1-.5-1-1.1 0-.5.5-1 1.1-.9L12 8.1l7.9-.7c.6 0 1.1.4 1.1 1z"/></svg>',
    contrast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',
    gray: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.7S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.7 12 2.7z"/></svg>',
    links: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 13a4 4 0 0 0 5.7.4l2.6-2.6a4 4 0 0 0-5.7-5.7l-1.1 1"/><path d="M15 11a4 4 0 0 0-5.7-.4L6.7 13.2a4 4 0 0 0 5.7 5.7l1.1-1"/></svg>',
    motion: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>'
  };

  function build() {
    if (document.getElementById("accBtn")) return;
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, "0"), mm = String(now.getMonth() + 1).padStart(2, "0");
    document.querySelectorAll("[data-today]").forEach(el => el.textContent = `${dd}/${mm}/${now.getFullYear()}`);

    const btn = document.createElement("button");
    btn.className = "acc-btn"; btn.id = "accBtn"; btn.type = "button";
    btn.setAttribute("aria-label", "פתיחת תפריט נגישות"); btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = icon.a11y;

    const panel = document.createElement("div");
    panel.className = "acc-panel"; panel.id = "accPanel"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "הגדרות נגישות");
    panel.innerHTML =
      `<div class="acc-panel__head"><h3>${icon.a11y} נגישות</h3>
        <button class="acc-panel__close" id="accClose" aria-label="סגירה">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button></div>
      <div class="acc-grid">
        <div class="acc-fontrow"><span>גודל טקסט</span><div>
          <button class="acc-step" data-font="-" aria-label="הקטנת טקסט">−</button>
          <button class="acc-step" data-font="+" aria-label="הגדלת טקסט">+</button>
        </div></div>
        <button class="acc-opt" data-toggle="contrast">${icon.contrast}<span>ניגודיות גבוהה</span></button>
        <button class="acc-opt" data-toggle="gray">${icon.gray}<span>גווני אפור</span></button>
        <button class="acc-opt" data-toggle="links">${icon.links}<span>הדגשת קישורים</span></button>
        <button class="acc-opt" data-toggle="motion">${icon.motion}<span>עצירת אנימציות</span></button>
        <button class="acc-reset" id="accReset">↺ איפוס הגדרות נגישות</button>
        <a class="acc-statement" href="accessibility.html">📄 הצהרת הנגישות המלאה</a>
      </div>`;

    document.body.append(btn, panel);

    function togglePanel(open) {
      const isOpen = open != null ? open : !panel.classList.contains("open");
      panel.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", String(isOpen));
    }
    btn.addEventListener("click", () => togglePanel());
    document.getElementById("accClose").addEventListener("click", () => togglePanel(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") togglePanel(false); });
    document.addEventListener("click", (e) => {
      if (panel.classList.contains("open") && !panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) togglePanel(false);
    });

    panel.addEventListener("click", (e) => {
      const t = e.target.closest("[data-toggle]");
      if (t) { state[t.dataset.toggle] = !state[t.dataset.toggle]; apply(); return; }
      const f = e.target.closest("[data-font]");
      if (f) { state.font = Math.max(0, Math.min(3, state.font + (f.dataset.font === "+" ? 1 : -1))); apply(); return; }
      if (e.target.closest("#accReset")) {
        Object.assign(state, { font: 0, contrast: false, gray: false, links: false, motion: false });
        apply();
      }
    });

    apply();
  }

  if (document.readyState !== "loading") build();
  else document.addEventListener("DOMContentLoaded", build);
})();
