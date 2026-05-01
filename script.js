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

      section.photos.forEach((photo, photoIndex) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("photo-item");
        wrapper.onclick = () => openLightbox(photo.src, photo.text, allPhotos.findIndex(p => p.src === photo.src));

        const img = document.createElement("img");
        img.dataset.src = photo.src;   // lazy load
        img.alt = photo.text || section.name;
        img.classList.add("lazy");

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
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            img.classList.add("loaded");
            observer.unobserve(img);
          }
        });
      }, { rootMargin: "200px 0px" });
      lazyImgs.forEach(img => observer.observe(img));
    } else {
      lazyImgs.forEach(img => { img.src = img.dataset.src; img.classList.add("loaded"); });
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
  fetch("https://hits.sh/shahriaalam.github.io/EWU-Photo-Dairy.json")
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById("visit-count");
    if (el) el.textContent = Number(data.total).toLocaleString();
  })
  .catch(() => {
    const el = document.getElementById("visit-count");
    if (el) el.textContent = "N/A";
  });

});