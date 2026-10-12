document.addEventListener("DOMContentLoaded", function () {

  // ── Password Protection ──────────────────────────────────────────────────────
  const loginBtn = document.getElementById("login-btn");
  const passwordInput = document.getElementById("password");

  function attemptLogin() {
    if (passwordInput.value === "fall21") {
      document.getElementById("login-screen").classList.add("hidden");
      document.getElementById("gallery").classList.remove("hidden");
      window.scrollTo(0, 0);
      initGallery();
    } else {
      const err = document.getElementById("error-message");
      err.innerText = "Incorrect password!";
      passwordInput.classList.add("shake");
      setTimeout(() => passwordInput.classList.remove("shake"), 500);
    }
  }

  loginBtn.addEventListener("click", attemptLogin);
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { e.preventDefault(); attemptLogin(); }
  });

  // ── Slideshow ────────────────────────────────────────────────────────────────
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");

  function showSlides() {
    Array.from(slides).forEach(s => s.style.display = "none");
    slideIndex = (slideIndex % slides.length) + 1;
    if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500);
  }
  if (slides.length) showSlides();

  // ── Music ────────────────────────────────────────────────────────────────────
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");
  if (music) {
    music.volume = 0.3;
    music.play().catch(() => {
      const startOnce = () => {
        music.play().catch(() => {});
        document.removeEventListener("click", startOnce);
        document.removeEventListener("keydown", startOnce);
      };
      document.addEventListener("click", startOnce);
      document.addEventListener("keydown", startOnce);
    });
  }

  window.toggleMusic = function () {
    if (!music) return;
    if (music.paused) { music.play(); musicBtn.innerHTML = "🎵"; }
    else { music.pause(); musicBtn.innerHTML = "🔇"; }
  };

  // ── Scroll to section ────────────────────────────────────────────────────────
  window.scrollToSection = function (sectionId) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ── Gallery init ─────────────────────────────────────────────────────────────
  let allPhotos = [];

  function initGallery() {
    // SECTIONS comes from photos.js (auto-generated) or falls back to inline
    const sections = (typeof SECTIONS !== "undefined") ? SECTIONS : FALLBACK_SECTIONS;

    allPhotos = sections.flatMap(s => s.photos);

    const container = document.getElementById("photo-gallery");
    container.innerHTML = "";

    sections.forEach((section, index) => {
      if (section.photos.length === 0) return; // skip empty sections

      const sectionDiv = document.createElement("div");
      sectionDiv.classList.add("semester-section");
      sectionDiv.id = `section-${index + 1}`;
      if (index === 0) sectionDiv.classList.add("section-family");
      // Header
      const header = document.createElement("div");
      header.classList.add("section-header");

      const title = document.createElement("h2");
      title.classList.add("semester-title");
      title.innerText = section.name;

      const badge = document.createElement("span");
      badge.classList.add("photo-count");
      badge.innerText = `${section.photos.length} photos`;

      header.appendChild(title);
      header.appendChild(badge);
      sectionDiv.appendChild(header);

      // Masonry grid
      const grid = document.createElement("div");
      grid.classList.add("photo-grid");

      section.photos.forEach((photo) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("photo-item");
        wrapper.onclick = () => openLightbox(photo.src, photo.text, allPhotos.findIndex(p => p.src === photo.src));

        const img = document.createElement("img");
        const thumbSrc = photo.thumb || photo.src;
        img.dataset.src = thumbSrc;
        img.dataset.full = photo.src;
        img.alt = photo.text || section.name;
        img.loading = "lazy";
        img.decoding = "async";
        img.classList.add("lazy");

        // Error fallback: if thumbnail fails or is missing, fall back to original image
        img.onerror = function () {
          if (this.src !== photo.src) {
            this.src = photo.src;
          }
        };

        img.onload = function () {
          img.classList.remove("lazy");
          img.classList.add("loaded");
          wrapper.classList.add("has-loaded");
        };

        const overlay = document.createElement("div");
        overlay.classList.add("photo-overlay");

        wrapper.appendChild(img);
        wrapper.appendChild(overlay);
        grid.appendChild(wrapper);
      });

      sectionDiv.appendChild(grid);
      container.appendChild(sectionDiv);
    });

    initLazyLoad();
    updateNavBadges(sections);
    document.dispatchEvent(new Event('gallerydone'));
  }

  // ── Lazy Loading ─────────────────────────────────────────────────────────────
  function initLazyLoad() {
    const lazyImgs = document.querySelectorAll("img.lazy");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            observer.unobserve(img);
          }
        });
      }, { rootMargin: "300px 0px" });
      lazyImgs.forEach(img => observer.observe(img));
    } else {
      lazyImgs.forEach(img => {
        if (img.dataset.src) img.src = img.dataset.src;
      });
    }
  }

  // ── Nav badges ───────────────────────────────────────────────────────────────
  function updateNavBadges(sections) {
    document.querySelectorAll(".semester-filter button[data-index]").forEach(btn => {
      const idx = parseInt(btn.dataset.index);
      const section = sections[idx];
      if (section && section.photos.length > 0) {
        const span = document.createElement("span");
        span.classList.add("nav-badge");
        span.textContent = section.photos.length;
        btn.appendChild(span);
      }
    });
  }

  // ── Lightbox Preloading ──────────────────────────────────────────────────────
  function preloadAdjacentLightbox(index) {
    if (!allPhotos || allPhotos.length <= 1) return;
    const nextIdx = (index + 1) % allPhotos.length;
    const prevIdx = (index - 1 + allPhotos.length) % allPhotos.length;
    [nextIdx, prevIdx].forEach(i => {
      if (allPhotos[i] && allPhotos[i].src) {
        const pre = new Image();
        pre.src = allPhotos[i].src;
      }
    });
  }

  // ── Lightbox ─────────────────────────────────────────────────────────────────
  let currentPhotoIndex = 0;

  window.openLightbox = function (imgSrc, imgText, index) {
    currentPhotoIndex = (index !== undefined) ? index : allPhotos.findIndex(p => p.src === imgSrc);
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    lbImg.classList.remove("lb-ready");
    lbImg.src = imgSrc;
    lbImg.onload = () => lbImg.classList.add("lb-ready");
    document.getElementById("lightbox-text").innerText = imgText || "";
    document.getElementById("lb-counter").innerText = `${currentPhotoIndex + 1} / ${allPhotos.length}`;
    lb.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    preloadAdjacentLightbox(currentPhotoIndex);
  };

  window.closeLightbox = function () {
    document.getElementById("lightbox").classList.add("hidden");
    document.body.style.overflow = "";
  };

  window.navigateLightbox = function (direction) {
    currentPhotoIndex += direction;
    if (currentPhotoIndex < 0) currentPhotoIndex = allPhotos.length - 1;
    if (currentPhotoIndex >= allPhotos.length) currentPhotoIndex = 0;
    const photo = allPhotos[currentPhotoIndex];
    const lbImg = document.getElementById("lightbox-img");
    lbImg.classList.remove("lb-ready");
    lbImg.src = photo.src;
    lbImg.onload = () => lbImg.classList.add("lb-ready");
    document.getElementById("lightbox-text").innerText = photo.text || "";
    document.getElementById("lb-counter").innerText = `${currentPhotoIndex + 1} / ${allPhotos.length}`;
    preloadAdjacentLightbox(currentPhotoIndex);
  };

  // Close on backdrop click
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (!document.getElementById("lightbox").classList.contains("hidden")) {
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft")  navigateLightbox(-1);
      if (e.key === "Escape")     closeLightbox();
    }
  });

  // Touch swipe for lightbox
  let touchStartX = 0;
  document.getElementById("lightbox").addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; });
  document.getElementById("lightbox").addEventListener("touchend", e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) navigateLightbox(diff > 0 ? 1 : -1);
  });

  // ── Visitor Counter ──────────────────────────────────────────────────────────
  const visitEl = document.getElementById("visit-count");
  if (visitEl) {
    const COUNTER_KEY = "shahriaalam-ewu-photo-dairy";
    const API_BASE = "https://countapi.mileshilliard.com/api/v1";

    const updateDisplay = (count) => {
      if (visitEl && count != null && !isNaN(count)) {
        visitEl.textContent = Number(count).toLocaleString();
      }
    };

    let hasVisitedThisSession = false;
    try {
      hasVisitedThisSession = Boolean(sessionStorage.getItem("ewu_visited"));
    } catch (_) {}

    // Only increment once per browser session; subsequent views retrieve current count
    const endpoint = hasVisitedThisSession
      ? `${API_BASE}/get/${COUNTER_KEY}`
      : `${API_BASE}/hit/${COUNTER_KEY}`;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) {
          // If GET failed because key wasn't initialized, try hit
          if (endpoint.includes("/get/")) {
            return fetch(`${API_BASE}/hit/${COUNTER_KEY}`).then(r => r.json());
          }
          throw new Error("HTTP error " + res.status);
        }
        return res.json();
      })
      .then(data => {
        const count = data?.value;
        if (typeof count === "number") {
          updateDisplay(count);
          try {
            sessionStorage.setItem("ewu_visited", "true");
            localStorage.setItem("ewu_cached_visitors", count);
          } catch (_) {}
        } else {
          throw new Error("Invalid count response");
        }
      })
      .catch(() => {
        // Fallback to locally cached count if network/API is unavailable
        try {
          const cached = localStorage.getItem("ewu_cached_visitors");
          if (cached) {
            updateDisplay(cached);
            return;
          }
        } catch (_) {}
        // Graceful fallback display
        updateDisplay(1);
      });
  }

});