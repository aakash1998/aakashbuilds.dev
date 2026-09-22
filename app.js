/* aakashbuilds.dev — interactions */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header border on scroll */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll */
  var els = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* Footer year */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ============ AUTO-UPDATING CONTENT ============
     GitHub  -> curated featured repos (data/projects.json); live metadata
                (description, stars, updated date) from the public API.
     Writing -> rendered from data/posts.json, which is appended
                automatically every time a new LinkedIn post goes out. */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function timeAgo(iso) {
    var days = Math.floor((Date.now() - new Date(iso)) / 86400000);
    if (days <= 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 30) return days + " days ago";
    var months = Math.floor(days / 30);
    if (months < 12) return months + (months === 1 ? " month ago" : " months ago");
    var yrs = Math.floor(months / 12);
    return yrs + (yrs === 1 ? " year ago" : " years ago");
  }

  /* LinkedIn posts */
  (function loadPosts() {
    var box = document.getElementById("postsRows");
    if (!box) return;
    fetch("data/posts.json", { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error("posts"); return r.json(); })
      .then(function (data) {
        var posts = (data && data.posts) || [];
        if (!posts.length) throw new Error("empty");
        box.innerHTML = posts.map(function (p, i) {
          var n = ("0" + (i + 1)).slice(-2);
          return '<article class="row reveal in">' +
            '<span class="row-idx">' + n + "</span>" +
            '<div class="row-main"><h3>' + esc(p.title) + "</h3><p>" + esc(p.body) + "</p></div>" +
            '<a class="row-link" href="' + esc(p.url) + '" target="_blank" rel="noopener">LinkedIn &#8599;</a>' +
            "</article>";
        }).join("");
      })
      .catch(function () {
        box.innerHTML = '<article class="row reveal in"><span class="row-idx">--</span>' +
          '<div class="row-main"><h3>Latest writing lives on LinkedIn.</h3></div>' +
          '<a class="row-link" href="https://www.linkedin.com/in/aakashpatel05" target="_blank" rel="noopener">LinkedIn &#8599;</a></article>';
      });
  })();

  /* GitHub — curated featured repos (data/projects.json), live metadata */
  (function loadGitHub() {
    var box = document.getElementById("githubRows");
    if (!box) return;
    fetch("data/projects.json", { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error("pj"); return r.json(); })
      .then(function (cfg) {
        var featured = (cfg && cfg.featured) || [];
        if (!featured.length) throw new Error("empty");
        return fetch("https://api.github.com/users/aakash1998/repos?per_page=100", { cache: "no-store" })
          .then(function (r) { if (!r.ok) throw new Error("gh"); return r.json(); })
          .then(function (repos) {
            var byName = {};
            repos.forEach(function (r) { byName[r.name.toLowerCase()] = r; });
            return featured
              .map(function (n) { return byName[String(n).toLowerCase()]; })
              .filter(function (r) { return !!r; });
          });
      })
      .then(function (list) {
        if (!list.length) throw new Error("empty");
        box.innerHTML = list.map(function (r, i) {
          var n = ("0" + (i + 1)).slice(-2);
          return '<article class="row reveal in">' +
            '<span class="row-idx">' + n + "</span>" +
            '<div class="row-main"><h3>' + esc(r.name) + "</h3><p>" + esc(r.description || "No description yet.") + "</p>" +
            '<p class="row-meta">' + esc(r.language || "code") +
            " \u00b7 updated " + timeAgo(r.pushed_at) + "</p></div>" +
            '<a class="row-link" href="' + esc(r.html_url) + '" target="_blank" rel="noopener">GitHub &#8599;</a>' +
            "</article>";
        }).join("");
      })
      .catch(function () {
        var wrap = document.getElementById("githubLive");
        if (wrap) wrap.style.display = "none";
      });
  })();
})();
