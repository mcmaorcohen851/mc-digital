/* MC Digital — רשת חלקיקים ניאון בהירו (vanilla canvas) */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.getElementById("particles");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var hero = canvas.parentElement;

  var isMobile = window.matchMedia("(max-width: 760px)").matches;
  var COUNT = isMobile ? 28 : 70;
  var LINK_DIST = 130;
  var COLORS = ["139,92,246", "34,211,238", "244,114,182"];

  var dots = [];
  var mouse = { x: -9999, y: -9999 };
  var running = true;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0;

  function resize() {
    W = hero.offsetWidth; H = hero.offsetHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function init() {
    dots = [];
    for (var i = 0; i < COUNT; i++) {
      dots.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.7,
        c: COLORS[(Math.random() * COLORS.length) | 0]
      });
    }
  }

  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      d.x += d.vx; d.y += d.vy;

      // דחייה עדינה מהעכבר
      var mdx = d.x - mouse.x, mdy = d.y - mouse.y;
      var md = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < 110 && md > 0.1) {
        d.x += (mdx / md) * 0.8;
        d.y += (mdy / md) * 0.8;
      }

      if (d.x < 0 || d.x > W) d.vx *= -1;
      if (d.y < 0 || d.y > H) d.vy *= -1;
      d.x = Math.max(0, Math.min(W, d.x));
      d.y = Math.max(0, Math.min(H, d.y));

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + d.c + ",.85)";
      ctx.fill();
    }

    for (var a = 0; a < dots.length; a++) {
      for (var b = a + 1; b < dots.length; b++) {
        var dx = dots[a].x - dots[b].x, dy = dots[a].y - dots[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.beginPath();
          ctx.moveTo(dots[a].x, dots[a].y);
          ctx.lineTo(dots[b].x, dots[b].y);
          ctx.strokeStyle = "rgba(" + dots[a].c + "," + (0.16 * (1 - dist / LINK_DIST)) + ")";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }

  // עצירה כשההירו לא נראה — חיסכון בסוללה
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      if (visible && !running) { running = true; tick(); }
      else if (!visible) { running = false; }
    }).observe(hero);
  }

  hero.addEventListener("pointermove", function (e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener("pointerleave", function () { mouse.x = -9999; mouse.y = -9999; });

  var rT;
  window.addEventListener("resize", function () {
    clearTimeout(rT);
    rT = setTimeout(function () { resize(); init(); }, 150);
  });

  resize(); init(); tick();
})();
