(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

  function initCarousels() {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
      const track = carousel.querySelector("[data-carousel-track]");
      if (!track) {
        return;
      }

      const slides = Array.from(track.querySelectorAll(".carousel-slide"));
      const dotsContainer = carousel.querySelector("[data-carousel-dots]");
      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");
      const currentLabel = carousel.querySelector("[data-carousel-current]");
      const totalLabel = carousel.querySelector("[data-carousel-total]");

      if (!slides.length) {
        return;
      }

      let activeIndex = 0;

      if (totalLabel) {
        totalLabel.textContent = String(slides.length);
      }

      const dots = slides.map((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", "Go to slide " + (index + 1));
        dot.addEventListener("click", () => goToSlide(index));
        if (dotsContainer) {
          dotsContainer.appendChild(dot);
        }
        return dot;
      });

      function updateUi(index) {
        activeIndex = index;

        if (currentLabel) {
          currentLabel.textContent = String(index + 1);
        }

        dots.forEach((dot, dotIndex) => {
          const isActive = dotIndex === index;
          dot.classList.toggle("is-active", isActive);
          dot.setAttribute("aria-current", isActive ? "true" : "false");
        });

        const disableNav = slides.length <= 1;
        if (prevButton) {
          prevButton.disabled = disableNav;
        }
        if (nextButton) {
          nextButton.disabled = disableNav;
        }
      }

      function goToSlide(index) {
        const boundedIndex = Math.max(0, Math.min(index, slides.length - 1));
        slides[boundedIndex].scrollIntoView({
          behavior: scrollBehavior,
          inline: "start",
          block: "nearest"
        });
        updateUi(boundedIndex);
      }

      if (prevButton) {
        prevButton.addEventListener("click", () => {
          goToSlide(activeIndex - 1);
        });
      }

      if (nextButton) {
        nextButton.addEventListener("click", () => {
          goToSlide(activeIndex + 1);
        });
      }

      track.addEventListener("scroll", () => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        updateUi(index);
      }, { passive: true });

      updateUi(0);
    });
  }

  function initPrototypeGalleries() {
    document.querySelectorAll(".prototype-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.prototypeTab;

        document.querySelectorAll(".prototype-tab").forEach((item) => {
          item.classList.toggle("is-active", item === tab);
        });

        document.querySelectorAll(".prototype-panel").forEach((panel) => {
          panel.classList.toggle("is-active", panel.dataset.prototypePanel === target);
        });
      });
    });

    document.querySelectorAll("[data-prototype-gallery]").forEach((gallery) => {
      const track = gallery.querySelector("[data-prototype-track]");
      const prev = gallery.querySelector("[data-prototype-prev]");
      const next = gallery.querySelector("[data-prototype-next]");
      const dotsWrap = gallery.parentElement && gallery.parentElement.querySelector("[data-prototype-dots]");

      if (!track || !prev || !next || !dotsWrap) {
        return;
      }

      const slides = Array.from(track.querySelectorAll(".prototype-shot"));
      if (!slides.length) {
        return;
      }

      let activeIndex = 0;

      const dots = slides.map((_, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "prototype-dot";
        dot.setAttribute("aria-label", "Go to screen " + (index + 1));
        dot.addEventListener("click", () => goTo(index));
        dotsWrap.appendChild(dot);
        return dot;
      });

      function update(index) {
        activeIndex = index;
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("is-active", dotIndex === index);
        });
        prev.disabled = index === 0;
        next.disabled = index === slides.length - 1;
      }

      function goTo(index) {
        const bounded = Math.max(0, Math.min(index, slides.length - 1));
        slides[bounded].scrollIntoView({
          behavior: scrollBehavior,
          inline: "start",
          block: "nearest"
        });
        update(bounded);
      }

      prev.addEventListener("click", () => goTo(activeIndex - 1));
      next.addEventListener("click", () => goTo(activeIndex + 1));

      track.addEventListener("scroll", () => {
        const index = Math.round(track.scrollLeft / track.clientWidth);
        update(index);
      }, { passive: true });

      update(0);
    });
  }

  function initScrollProgressAndNav() {
    const progressBar = document.querySelector(".scroll-progress");
    const sideNavLinks = Array.from(document.querySelectorAll(".side-nav-card a"));
    const headerNavLinks = Array.from(document.querySelectorAll(".site-nav a"));
    const sectionTargets = sideNavLinks
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    function updateScrollProgress() {
      if (!progressBar) {
        return;
      }

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
    }

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    if ("IntersectionObserver" in window && sectionTargets.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          sideNavLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
          });
          headerNavLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
          });
        });
      }, {
        rootMargin: "-22% 0px -62% 0px",
        threshold: 0.01
      });

      sectionTargets.forEach((section) => observer.observe(section));
    }
  }

  function initRevealSystem() {
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      return;
    }

    const revealObserver = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16
    });

    const registered = new Set();
    let syncScheduled = false;

    function syncVisibleRevealTargets() {
      syncScheduled = false;
      registered.forEach((target) => {
        if (target.classList.contains("is-visible")) {
          return;
        }

        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          target.classList.add("is-visible");
          revealObserver.unobserve(target);
        }
      });
    }

    function scheduleRevealSync() {
      if (syncScheduled) {
        return;
      }

      syncScheduled = true;
      window.requestAnimationFrame(syncVisibleRevealTargets);
    }

    function register(target, delay, variant) {
      if (!target || registered.has(target)) {
        return;
      }

      registered.add(target);
      target.classList.add("reveal-ready");
      if (variant) {
        target.dataset.revealVariant = variant;
      }
      target.style.setProperty("--reveal-delay", delay + "ms");
      revealObserver.observe(target);
      scheduleRevealSync();
    }

    function registerGroup(selector, childSelector, variant) {
      document.querySelectorAll(selector).forEach((group) => {
        Array.from(group.querySelectorAll(childSelector)).forEach((item, index) => {
          register(item, Math.min(index, 5) * 120, variant);
        });
      });
    }

    register(document.querySelector(".hero-copy"), 0, "up");
    register(document.querySelector(".hero-panel"), 140, "up");

    document.querySelectorAll(".section-heading").forEach((heading) => {
      register(heading, 0, "up");
    });

    registerGroup(".overview-evolution-map", ":scope > .evolution-card", "up");
    registerGroup(".member-grid", ":scope > .member-card", "up");
    registerGroup(".card-grid", ":scope > .content-card", "up");
    registerGroup(".research-flow-strip", ":scope > .research-flow-step", "up");
    registerGroup(".evidence-chain-grid", ":scope > .evidence-chain-card", "up");
    registerGroup(".must-have-grid", ":scope > .must-have-item", "up");
    registerGroup(".evidence-gallery", ":scope > .evidence-item", "scale");
    registerGroup(".crazy-grid", ":scope > .crazy-card", "scale");
    registerGroup(".prototype-evolution-track", ":scope > .prototype-stage-card", "up");
    registerGroup(".challenge-grid", ":scope > .challenge-card", "up");
    registerGroup(".user-feedback-grid", ":scope > .user-feedback-card", "up");
    registerGroup(".insight-grid", ":scope > .insight-card", "up");
    registerGroup(".benchmarking-grid", ":scope > .benchmark-card", "up");
    registerGroup(".benchmark-synthesis-grid", ":scope > .benchmark-insight-card", "up");
    registerGroup(".direction-grid", ":scope > .direction-card", "up");
    registerGroup(".final-map-requirements", ":scope > .requirement-map-card", "up");
    registerGroup(".final-map-connectors", ":scope > .final-map-connector", "draw");
    registerGroup(".final-map-functions", ":scope > .final-function-card", "up");
    registerGroup(".evaluation-metric-grid", ":scope > .evaluation-metric-card", "up");
    registerGroup(".ba-stack", ":scope > .ba-card", "up");
    registerGroup(".iteration-chain", ":scope > .iteration-link-card", "up");

    document.querySelectorAll(
      ".content-card, .feedback-card, .round1-method-card, .benchmarking-intro-card, .direction-source-card, .next-step-card, .benchmark-next-card, .direction-next-card"
    ).forEach((card, index) => {
      register(card, (index % 3) * 100, "up");
    });

    window.addEventListener("scroll", scheduleRevealSync, { passive: true });
    window.addEventListener("resize", scheduleRevealSync);
    window.addEventListener("load", scheduleRevealSync, { once: true });
  }

  function initRequirementFunctionHover() {
    const requirementCards = Array.from(document.querySelectorAll("[data-requirement-card]"));
    const functionCards = Array.from(document.querySelectorAll("[data-function-target]"));

    if (!requirementCards.length || !functionCards.length) {
      return;
    }

    function setActive(targetId) {
      requirementCards.forEach((card) => {
        card.classList.toggle("is-linked-hover", card.dataset.requirementCard === targetId);
      });
      functionCards.forEach((card) => {
        card.classList.toggle("is-linked-hover", card.dataset.functionTarget === targetId);
      });
    }

    function clearActive() {
      requirementCards.forEach((card) => card.classList.remove("is-linked-hover"));
      functionCards.forEach((card) => card.classList.remove("is-linked-hover"));
    }

    functionCards.forEach((card) => {
      const targetId = card.dataset.functionTarget;
      card.addEventListener("mouseenter", () => setActive(targetId));
      card.addEventListener("focus", () => setActive(targetId));
      card.addEventListener("mouseleave", clearActive);
      card.addEventListener("blur", clearActive);
    });
  }

  function initCornerPetCompanion() {
    const petCompanion = document.querySelector(".corner-pet-companion");
    const petImage = petCompanion && petCompanion.querySelector(".corner-pet-image");

    if (!petCompanion || !petImage) {
      return;
    }

    const fallbackPetSrc = "figure/dog1.png";
    const petStages = [
      "figure/cat1.png",
      "figure/cat2.png",
      "figure/dog1.png",
      "figure/dog2.png"
    ];

    let currentPetIndex = -1;
    let switchTimeoutId = null;
    let rafId = null;

    function getPetIndex(progress) {
      if (progress < 0.25) return 0;
      if (progress < 0.5) return 1;
      if (progress < 0.75) return 2;
      return 3;
    }

    function getScrollProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      return scrollable > 0 ? window.scrollY / scrollable : 0;
    }

    function setPetImage(src) {
      if (!src || petImage.getAttribute("src") === src) {
        return;
      }

      petImage.dataset.fallbackAttempted = "false";
      petImage.src = src;
    }

    function switchPet(nextIndex) {
      currentPetIndex = nextIndex;

      if (prefersReducedMotion) {
        setPetImage(petStages[nextIndex]);
        return;
      }

      petCompanion.classList.add("is-switching");

      if (switchTimeoutId) {
        window.clearTimeout(switchTimeoutId);
      }

      switchTimeoutId = window.setTimeout(() => {
        setPetImage(petStages[nextIndex]);
        window.requestAnimationFrame(() => {
          petCompanion.classList.remove("is-switching");
        });
      }, 150);
    }

    function updatePetByScroll() {
      const nextIndex = getPetIndex(getScrollProgress());
      if (nextIndex === currentPetIndex) {
        return;
      }
      switchPet(nextIndex);
    }

    function requestPetUpdate() {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updatePetByScroll();
      });
    }

    petImage.addEventListener("error", () => {
      if (petImage.dataset.fallbackAttempted === "true" || petImage.src.endsWith(fallbackPetSrc)) {
        return;
      }

      petImage.dataset.fallbackAttempted = "true";
      petImage.src = fallbackPetSrc;
    });

    updatePetByScroll();
    window.addEventListener("scroll", requestPetUpdate, { passive: true });
    window.addEventListener("resize", requestPetUpdate);
    window.addEventListener("load", requestPetUpdate, { once: true });
  }

  initCarousels();
  initPrototypeGalleries();
  initScrollProgressAndNav();
  initRevealSystem();
  initRequirementFunctionHover();
  initCornerPetCompanion();
})();
