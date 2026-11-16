/* STAF Films: video loading from Google Drive + the home hero. No dependencies. */
(function () {
  "use strict";

  // ---------- Videos (Google Drive) ----------
  // Every <video data-video="key"> gets its source from /staf/assets/videos.json.
  // A key without a Drive id keeps its poster image, so the page still looks finished.
  function driveUrl(id) {
    return "https://drive.usercontent.google.com/download?id=" + encodeURIComponent(id) + "&export=download&confirm=t";
  }

  var videoMap = null;
  var videoReady = fetch("/staf/assets/videos.json", { cache: "no-cache" })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .catch(function () { return {}; })
    .then(function (json) { videoMap = json || {}; return videoMap; });

  function loadVideo(el) {
    if (!el || el.dataset.loaded) return;
    var key = el.dataset.video;
    var entry = videoMap && videoMap[key];
    var id = entry && (typeof entry === "string" ? entry : entry.drive_id);
    el.dataset.loaded = "1";
    if (!id) return; // stays on its poster
    el.addEventListener("error", function () { el.removeAttribute("src"); el.load(); }, { once: true });
    el.src = driveUrl(id);
    if (el.hasAttribute("autoplay") || el.dataset.play === "1") {
      var p = el.play(); if (p && p.catch) p.catch(function () {});
    }
  }

  function playVideo(el) {
    if (!el) return;
    videoReady.then(function () {
      loadVideo(el);
      if (el.src) { var p = el.play(); if (p && p.catch) p.catch(function () {}); }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Page videos outside the hero: load when they scroll into view.
    var pageVideos = [].slice.call(document.querySelectorAll("video[data-video]")).filter(function (v) { return !v.closest(".hero"); });
    if (reduce) pageVideos.forEach(function (v) { v.removeAttribute("autoplay"); });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { videoReady.then(function () { loadVideo(e.target); }); io.unobserve(e.target); }
        });
      }, { rootMargin: "200px" });
      pageVideos.forEach(function (v) { io.observe(v); });
    } else {
      videoReady.then(function () { pageVideos.forEach(loadVideo); });
    }
    initMenu();
    initHero(reduce);
  });

  // ---------- Phone menu ----------
  // On small screens the header shows only the logo and a MENU button that opens a full-screen menu.
  function initMenu() {
    var header = document.querySelector("header");
    var nav = header && header.querySelector('nav[aria-label="Main"]');
    if (!nav) return;
    var logo = header.querySelector("a");
    var contact = header.querySelector('a[href="/staf/contact/"]');
    var here = location.pathname;

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "menu-toggle";
    toggle.textContent = "MENU";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "staf-menu");
    if (logo && !header.classList.contains("hero-header")) toggle.style.color = getComputedStyle(logo).color;
    header.appendChild(toggle);

    var panel = document.createElement("div");
    panel.className = "menu-panel";
    panel.id = "staf-menu";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-label", "Menu");
    var top = document.createElement("div");
    top.className = "menu-top";
    var home = document.createElement("a");
    home.href = "/staf/"; home.className = "menu-logo"; home.textContent = "STAF. FILMS";
    var close = document.createElement("button");
    close.type = "button"; close.className = "menu-close"; close.textContent = "CLOSE";
    top.appendChild(home); top.appendChild(close);
    var list = document.createElement("nav");
    list.className = "menu-links";
    list.setAttribute("aria-label", "Main");
    [].slice.call(nav.querySelectorAll("a")).concat(contact ? [contact] : []).forEach(function (a) {
      var link = document.createElement("a");
      var path = a.getAttribute("href");
      link.href = path;
      link.textContent = a.textContent.replace("↗", "").trim();
      if (here.indexOf(path) === 0 || /border-bottom/.test(a.getAttribute("style") || "")) link.setAttribute("aria-current", "page");
      list.appendChild(link);
    });
    panel.appendChild(top); panel.appendChild(list);
    document.body.appendChild(panel);

    function set(open) {
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      (open ? close : toggle).focus();
    }
    toggle.addEventListener("click", function () { set(true); });
    close.addEventListener("click", function () { set(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) set(false);
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function (m) {
      if (m.matches && document.body.classList.contains("menu-open")) set(false);
    });
  }

  // ---------- Home hero ----------
  function initHero(reduce) {
    var hero = document.getElementById("hero");
    if (!hero) return;
    var slides = [].slice.call(hero.querySelectorAll(".hero-slide"));
    var tiles = [].slice.call(hero.querySelectorAll(".rail-tile"));
    var ends = [].slice.call(hero.querySelectorAll(".end-tile"));
    var end = hero.querySelector(".hero-end");
    var title = document.getElementById("hero-title");
    var cta = document.getElementById("hero-cta");
    var close = document.getElementById("hero-close");
    var counter = document.getElementById("hero-counter");
    var lineFill = document.getElementById("hero-line-fill");
    var pauseBtn = document.getElementById("hero-pause");
    var skipBtn = document.getElementById("hero-skip");
    var soundBtn = document.getElementById("hero-sound");
    var replayBtn = document.getElementById("hero-replay");
    var seconds = parseFloat(hero.dataset.seconds) || 6;

    var state = { active: 0, mode: "reel", t: 0, paused: reduce, muted: true };
    var last = performance.now();

    function videosIn(i) { return [].slice.call(slides[i].querySelectorAll("video")); }

    function render() {
      var s = slides[state.active];
      hero.classList.toggle("is-ended", state.mode === "end");
      hero.classList.toggle("is-single", state.mode === "single");
      hero.classList.toggle("on-yellow", state.mode !== "end" && s.dataset.key === "king");
      end.hidden = state.mode !== "end";
      slides.forEach(function (el, i) { el.classList.toggle("is-active", i === state.active); });
      title.textContent = s.dataset.title;
      cta.textContent = s.dataset.cta;
      cta.href = s.dataset.href;
      close.hidden = state.mode !== "single";
      skipBtn.textContent = state.mode === "single" ? "CLOSE" : "SKIP";
      counter.textContent = (state.mode === "single" ? s.dataset.no : s.dataset.no + "/04") + " · " + s.dataset.time;
      tiles.forEach(function (el, i) { el.classList.toggle("is-active", i === state.active); el.setAttribute("aria-pressed", i === state.active ? "true" : "false"); });
      // play current slide's videos, pause the others
      slides.forEach(function (el, i) {
        videosIn(i).forEach(function (v) {
          if (i === state.active && state.mode !== "end" && !state.paused) { v.muted = state.muted; playVideo(v); }
          else if (!v.paused) v.pause();
        });
      });
      paint();
    }

    function paint() {
      var pct = Math.min(100, (state.t / seconds) * 100);
      tiles.forEach(function (el, i) {
        var fill = el.querySelector(".rail-fill");
        var w = i === state.active ? pct : (state.mode === "reel" && i < state.active ? 100 : 0);
        fill.style.width = w + "%";
      });
      lineFill.style.width = pct + "%";
    }

    function go(i, mode) { state.active = i; state.mode = mode; state.t = 0; render(); }
    function toEnd() { state.mode = "end"; state.t = 0; render(); }

    function tick(now) {
      var dt = (now - last) / 1000; last = now;
      if (state.mode !== "end" && !state.paused) {
        state.t += dt;
        if (state.t >= seconds) {
          if (state.mode === "single") toEnd();
          else if (state.active < slides.length - 1) go(state.active + 1, "reel");
          else toEnd();
        } else paint();
      }
      requestAnimationFrame(tick);
    }

    tiles.forEach(function (el) {
      el.addEventListener("click", function () { go(+el.dataset.index, state.mode === "single" ? "single" : "reel"); });
    });
    ends.forEach(function (el) {
      el.addEventListener("click", function () { go(+el.dataset.index, "single"); });
    });
    close.addEventListener("click", toEnd);
    skipBtn.addEventListener("click", toEnd);
    replayBtn.addEventListener("click", function () { go(0, "reel"); });
    pauseBtn.addEventListener("click", function () {
      state.paused = !state.paused;
      pauseBtn.textContent = state.paused ? "PLAY" : "PAUSE";
      pauseBtn.setAttribute("aria-pressed", state.paused ? "true" : "false");
      render();
    });
    soundBtn.addEventListener("click", function () {
      state.muted = !state.muted;
      soundBtn.textContent = state.muted ? "SOUND OFF" : "SOUND ON";
      soundBtn.setAttribute("aria-pressed", state.muted ? "false" : "true");
      videosIn(state.active).forEach(function (v) { v.muted = state.muted; });
    });

    if (reduce) { pauseBtn.textContent = "PLAY"; pauseBtn.setAttribute("aria-pressed", "true"); }
    render();
    requestAnimationFrame(tick);
  }
})();

/* Contact form: opens the visitor's email app; nothing is stored or sent by the site. */
document.addEventListener("submit", function (e) {
  var form = e.target;
  if (!form.matches || !form.matches("form[data-mailto]")) return;
  e.preventDefault();
  var f = new FormData(form);
  var subject = "[STAF] " + (f.get("subject") || "General") + (f.get("name") ? " — " + f.get("name") : "");
  var body = (f.get("message") || "") + "\n\n— " + (f.get("name") || "") + (f.get("email") ? " (" + f.get("email") + ")" : "");
  window.location.href = "mailto:" + form.dataset.mailto + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
