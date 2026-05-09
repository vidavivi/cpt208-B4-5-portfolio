(async function () {
  const hfFallbackManifest = {
    generatedAt: "2026-05-08",
    packageMeta: {
      screenshotBase: "portfolio-highfi-handoff/screenshots/"
    },
    functions: [
      {
        id: "album-connect",
        name: "Album / Connect",
        description: "Family photo updates are entered through an album overview, then read and acknowledged inside a per-member gallery.",
        steps: [
          {
            id: "album-1",
            screenshot: "album-overview.png",
            target: "Grace member card",
            hotspot: { x: 50, y: 24 },
            spotlight: { x: 50, y: 24, w: 80, h: 28 },
            title: "Open a family member's update stream",
            body: "The Album tab now begins with member cards, so the walkthrough starts by choosing whose recent photo updates to open.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap the Grace card from the Album overview.",
            expectedEffect: "Grace's member-specific gallery opens as the next screen."
          },
          {
            id: "album-2",
            screenshot: "album-grace-gallery.png",
            target: "Latest shared photo card",
            hotspot: { x: 50, y: 48 },
            spotlight: { x: 50, y: 48, w: 76, h: 38 },
            title: "Browse one shared moment without entering chat",
            body: "The gallery keeps the photo, time, and note together so the update can be read as a lightweight family moment.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Scroll into the first photo card and read the attached note.",
            expectedEffect: "The update feels readable without turning into an immediate conversation task."
          },
          {
            id: "album-3",
            screenshot: "album-range-menu.png",
            target: "Time-range dropdown",
            hotspot: { x: 53, y: 24 },
            spotlight: { x: 55, y: 26, w: 38, h: 22 },
            title: "Shift the gallery time window",
            body: "A compact time filter lets users focus on today's, last week's, last month's, or last year's posts.",
            requirementBadge: "Flexible Timing",
            mockAction: "Open the Last Week dropdown to inspect the available time ranges.",
            expectedEffect: "The range menu expands over the gallery and narrows the visible update set."
          },
          {
            id: "album-4",
            screenshot: "album-reaction-picker.png",
            target: "Emoji reaction tray",
            hotspot: { x: 58, y: 44 },
            spotlight: { x: 58, y: 44, w: 42, h: 12 },
            title: "Respond with a low-pressure reaction",
            body: "Acknowledgement happens through a short emoji tray instead of a full message composer.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Tap the reaction button on the photo card to open the emoji tray.",
            expectedEffect: "A quick reaction row appears above the card for light acknowledgement."
          },
          {
            id: "album-5",
            screenshot: "album-upload-sheet.png",
            target: "Camera and Library chooser",
            hotspot: { x: 50, y: 86 },
            spotlight: { x: 50, y: 86, w: 76, h: 18 },
            title: "Start a self-upload in one step",
            body: "Opening your own album leads directly to a simple Camera-or-Library chooser instead of a heavier upload flow.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap the camera icon in the top-right corner of the current user's gallery.",
            expectedEffect: "A bottom sheet offers Camera and Library as the first upload choices."
          }
        ]
      },
      {
        id: "jar",
        name: "Jar",
        description: "Jar now combines a private mood-recording flow with a shared-status care view and animated candy-drop feedback.",
        steps: [
          {
            id: "jar-1",
            screenshot: "jar-main.png",
            target: "Today's plus button",
            hotspot: { x: 18, y: 43 },
            spotlight: { x: 18, y: 43, w: 14, h: 12 },
            title: "Start today's mood check-in",
            body: "The updated Jar flow begins from one plus action, framed as adding a mood candy rather than filling in a heavy diary entry.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap the plus button beside the 'Add your own mood candy?' prompt.",
            expectedEffect: "The day-level editor opens for a new mood candy entry."
          },
          {
            id: "jar-2",
            screenshot: "jar-calendar-popup.png",
            target: "Private calendar grid",
            hotspot: { x: 50, y: 58 },
            spotlight: { x: 50, y: 58, w: 66, h: 38 },
            title: "Review moods through a private calendar",
            body: "The calendar popup makes mood history feel private while still supporting easy revisit across different dates.",
            requirementBadge: "Flexible Timing",
            mockAction: "Open 'See calendar' and scan the current month's recorded candies.",
            expectedEffect: "A private monthly calendar appears with date-based revisit."
          },
          {
            id: "jar-3",
            screenshot: "jar-mood-editor.png",
            target: "Share mode choices",
            hotspot: { x: 50, y: 73 },
            spotlight: { x: 50, y: 73, w: 74, h: 34 },
            title: "Set visibility before saving",
            body: "Private, Soft Share, and Full Share keep visibility choices explicit before the mood candy is saved.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Choose a mood, optionally add one sentence, then compare the three share modes.",
            expectedEffect: "The user decides how much family members see before the candy drops into the jar."
          },
          {
            id: "jar-4",
            screenshot: "jar-care-popup.png",
            target: "Shared-status card",
            hotspot: { x: 50, y: 45 },
            spotlight: { x: 50, y: 45, w: 74, h: 24 },
            title: "Expose only shared status in care view",
            body: "The care popup separates private mood history from the gentle status layer relatives may see.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Open 'Care for someone' and inspect the shared-status card for Mom.",
            expectedEffect: "The popup shows only the shareable status layer and withholds the private calendar."
          }
        ]
      },
      {
        id: "weekly-echo",
        name: "Weekly Echo",
        description: "Weekly Echo now unfolds across three carousel boards and a separate keepsake reveal scene.",
        steps: [
          {
            id: "echo-1",
            screenshot: "echo-summary-board.png",
            target: "Summary stats board",
            hotspot: { x: 50, y: 53 },
            spotlight: { x: 50, y: 52, w: 68, h: 54 },
            title: "Read the weekly summary board",
            body: "The first Weekly Echo board consolidates connected days, small moments, and activity counts into one compact reading surface.",
            requirementBadge: "Flexible Timing",
            mockAction: "Open Echo and land on the first board without any extra navigation.",
            expectedEffect: "The headline recap and four activity counters appear together."
          },
          {
            id: "echo-2",
            screenshot: "echo-moments-board.png",
            target: "Numbered moment list",
            hotspot: { x: 50, y: 39 },
            spotlight: { x: 50, y: 39, w: 62, h: 28 },
            title: "Scan the small-moments recap",
            body: "The second board turns totals into a short sequence of gentle weekly moments.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Move to the Small Moments board using the carousel controls.",
            expectedEffect: "A numbered list retells how the week's activity traveled home."
          },
          {
            id: "echo-3",
            screenshot: "echo-keepsakes-board.png",
            target: "Keepsake list and reveal CTA",
            hotspot: { x: 50, y: 58 },
            spotlight: { x: 50, y: 58, w: 66, h: 30 },
            title: "Review what the pet kept from the week",
            body: "The third board groups collected traces into keepsake categories and ends with a clear weekly reveal action.",
            requirementBadge: "Flexible Timing",
            mockAction: "Advance to the Shared Keepsakes board and inspect the weekly categories.",
            expectedEffect: "The interface summarizes small items and presents the reveal button for this week."
          },
          {
            id: "echo-4",
            screenshot: "echo-gift-closed.png",
            target: "Gift box",
            hotspot: { x: 50, y: 58 },
            spotlight: { x: 50, y: 58, w: 40, h: 26 },
            title: "Open the keepsake reveal scene",
            body: "The reveal button transitions into a separate tap-to-open gift scene, turning small care into a visible weekly outcome.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap 'Reveal This Week's Keepsake' to enter the gift scene.",
            expectedEffect: "A dedicated keepsake screen appears with the closed weekly gift box."
          },
          {
            id: "echo-5",
            screenshot: "echo-gift-revealed.png",
            target: "Add to Toy Box button",
            hotspot: { x: 50, y: 70 },
            spotlight: { x: 50, y: 70, w: 56, h: 12 },
            title: "Claim the unlocked keepsake",
            body: "Once the box opens, the reward card explains what was unlocked and offers a direct add-to-inventory action.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap the gift box, wait for the reveal, then focus the claim button.",
            expectedEffect: "The unlocked keepsake card appears with the 'Add to Toy Box' action."
          }
        ]
      }
    ]
  };

  const hfSection = document.querySelector("#interactive-highfi-walkthrough");
  if (!hfSection) {
    return;
  }

  const hfScreenshotBase =
    hfSection.getAttribute("data-hf-screenshot-base") ||
    hfFallbackManifest.packageMeta.screenshotBase;
  const hfManifestPath =
    hfSection.getAttribute("data-hf-manifest") ||
    "portfolio-highfi-handoff/tour-manifest.json";

  const hfCaptionMap = {
    "album-connect": [
      "Member overview",
      "Gallery detail",
      "Time filter",
      "Reaction tray",
      "Upload entry"
    ],
    jar: [
      "Entry point",
      "Private calendar",
      "Share-mode editor",
      "Shared-status care"
    ],
    "weekly-echo": [
      "Summary board",
      "Moments board",
      "Keepsakes board",
      "Gift reveal",
      "Reward claim"
    ]
  };

  const hfFunctionCopy = {
    "album-connect": {
      emoji: "📸",
      summary: "Member overview, gallery detail, time filter, quick reactions, upload.",
      purpose: "Lightweight browsing, acknowledgement, and self-upload.",
      nextLabel: "Continue to Jar 🫙 →"
    },
    jar: {
      emoji: "🫙",
      summary: "Mood candy check-ins, private calendar, share modes, care popup.",
      purpose: "Private check-ins, timing control, and gentle family visibility.",
      nextLabel: "Continue to Weekly Echo ✨ →"
    },
    "weekly-echo": {
      emoji: "✨",
      summary: "Weekly boards, keepsakes, gift reveal, reward claim.",
      purpose: "Weekly recap, keepsakes, and easy follow-through.",
      nextLabel: "Replay walkthrough ↺"
    }
  };

  const hfEls = {
    tabList: hfSection.querySelector(".hf-function-tabs"),
    screenImage: hfSection.querySelector(".hf-screen-image"),
    hotspotButton: hfSection.querySelector(".hf-hotspot-button"),
    screenName: hfSection.querySelector(".hf-screen-name"),
    screenPurpose: hfSection.querySelector(".hf-screen-purpose"),
    stepProgress: hfSection.querySelector(".hf-step-progress"),
    functionName: hfSection.querySelector(".hf-function-name"),
    tooltipTitle: hfSection.querySelector(".hf-tooltip-title"),
    tooltipBody: hfSection.querySelector(".hf-tooltip-body"),
    badgeGroup: hfSection.querySelector(".hf-badge-group"),
    actionText: hfSection.querySelector(".hf-action-text"),
    resultText: hfSection.querySelector(".hf-result-text"),
    stepRail: hfSection.querySelector(".hf-steprail"),
    prevButton: hfSection.querySelector(".hf-prev-button"),
    nextButton: hfSection.querySelector(".hf-next-button"),
    replayButton: hfSection.querySelector(".hf-replay-button")
  };

  const hfMotionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hfDesktopMedia = window.matchMedia("(min-width: 981px)");
  const hfState = {
    functionIndex: 0,
    stepIndex: 0,
    manifest: hfNormalizeManifest(hfFallbackManifest),
    activeFunctionId: null,
    stepObserver: null
  };

  function hfEscapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function hfGetFunctionMeta(functionId) {
    return (
      hfFunctionCopy[functionId] || {
        emoji: "",
        summary: "",
        purpose: "",
        nextLabel: "Next step"
      }
    );
  }

  function hfNormalizeStep(step, functionId, stepIndex) {
    const captions = hfCaptionMap[functionId] || [];
    const requirementBadges = [];
    if (step.requirementBadge) {
      requirementBadges.push(step.requirementBadge);
    }

    return {
      stepId: step.id,
      screenshot: step.screenshot,
      stateLabel: captions[stepIndex] || step.target,
      stateHint: step.target,
      hotspot: step.hotspot,
      spotlight: step.spotlight,
      tooltipTitle: step.title,
      tooltipBody: step.body,
      requirementBadges: requirementBadges,
      suggestedAction: step.mockAction,
      designValue: step.expectedEffect
    };
  }

  function hfNormalizeManifest(sourceManifest) {
    return {
      packageMeta: {
        screenshotBase:
          (sourceManifest.packageMeta && sourceManifest.packageMeta.screenshotBase) ||
          (sourceManifest.uiShell && sourceManifest.uiShell.screenshotBase) ||
          hfFallbackManifest.packageMeta.screenshotBase
      },
      functions: (sourceManifest.functions || []).map(function (item, index) {
        const functionId = item.id || "function-" + index;
        const functionMeta = hfGetFunctionMeta(functionId);
        const labelBase = item.name || item.navLabel || "Function " + (index + 1);
        const displayLabel = functionMeta.emoji ? labelBase + " " + functionMeta.emoji : labelBase;

        return {
          functionId: functionId,
          pageName: item.name || item.navLabel || labelBase,
          displayLabel: displayLabel,
          functionTitle: item.name || labelBase,
          tabSummary: functionMeta.summary || item.description || "",
          uiPurpose: functionMeta.purpose || item.description || "",
          nextLabel: functionMeta.nextLabel || "Next step",
          tourSteps: (item.steps || []).map(function (step, stepIndex) {
            return hfNormalizeStep(step, functionId, stepIndex);
          })
        };
      })
    };
  }

  function hfGetCurrentFunction() {
    return hfState.manifest.functions[hfState.functionIndex];
  }

  function hfGetCurrentStep() {
    return hfGetCurrentFunction().tourSteps[hfState.stepIndex];
  }

  function hfGetNextFunction() {
    return hfState.manifest.functions[hfState.functionIndex + 1] || null;
  }

  function hfGetPreviousFunction() {
    return hfState.manifest.functions[hfState.functionIndex - 1] || null;
  }

  function hfBuildTabs() {
    hfEls.tabList.innerHTML = "";
    hfState.manifest.functions.forEach(function (item, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hf-function-tab";
      button.setAttribute("role", "tab");
      button.setAttribute("aria-selected", index === hfState.functionIndex ? "true" : "false");
      button.innerHTML = [
        '<div class="hf-tab-topline">',
        '<p class="hf-tab-title">' + item.displayLabel + "</p>",
        '<span class="hf-tab-badge">Function ' + (index + 1) + "</span>",
        "</div>",
        '<p class="hf-tab-subtitle">' + item.tabSummary + "</p>"
      ].join("");

      button.addEventListener("click", function () {
        hfState.functionIndex = index;
        hfState.stepIndex = 0;
        hfRender({ rebuildRail: true, syncScroll: true });
      });

      hfEls.tabList.appendChild(button);
    });
  }

  function hfRenderBadges(step) {
    hfEls.badgeGroup.innerHTML = "";
    step.requirementBadges.forEach(function (badgeName) {
      const badge = document.createElement("span");
      badge.className = "hf-badge";
      badge.textContent = badgeName;
      hfEls.badgeGroup.appendChild(badge);
    });
  }

  function hfRenderStepRail(currentFunction) {
    hfEls.stepRail.innerHTML = "";
    currentFunction.tourSteps.forEach(function (step, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "hf-steprail-button";
      button.dataset.stepIndex = String(index);
      if (index === hfState.stepIndex) {
        button.classList.add("is-active");
      }
      const badgeMarkup = step.requirementBadges.map(function (badgeName) {
        return '<span class="hf-steprail-tag">' + hfEscapeHtml(badgeName) + "</span>";
      }).join("");
      button.innerHTML = [
        '<span class="hf-steprail-progress">Step ' + (index + 1) + " of " + currentFunction.tourSteps.length + "</span>",
        '<span class="hf-steprail-title">' + hfEscapeHtml(step.tooltipTitle) + "</span>",
        '<span class="hf-steprail-caption">' + hfEscapeHtml(step.stateLabel) + " · " + hfEscapeHtml(step.stateHint) + "</span>",
        badgeMarkup ? '<span class="hf-steprail-tag-row">' + badgeMarkup + "</span>" : "",
        '<span class="hf-steprail-copy">' + hfEscapeHtml(step.tooltipBody) + "</span>",
        '<span class="hf-steprail-meta"><strong>Action:</strong> ' + hfEscapeHtml(step.suggestedAction) + "</span>",
        '<span class="hf-steprail-meta"><strong>Outcome:</strong> ' + hfEscapeHtml(step.designValue) + "</span>"
      ].join("");

      button.addEventListener("click", function () {
        hfState.stepIndex = index;
        hfRender({ syncScroll: true });
      });

      hfEls.stepRail.appendChild(button);
    });

    hfBindStepObserver();
  }

  function hfRenderTabs() {
    const buttons = Array.from(hfEls.tabList.querySelectorAll(".hf-function-tab"));
    buttons.forEach(function (button, index) {
      const isActive = index === hfState.functionIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function hfRenderRailActiveState() {
    Array.from(hfEls.stepRail.querySelectorAll(".hf-steprail-button")).forEach(function (button) {
      const isActive = Number(button.dataset.stepIndex) === hfState.stepIndex;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-current", isActive ? "step" : "false");
    });
  }

  function hfGetNextButtonLabel(isLastStep) {
    if (!isLastStep) {
      return "Next step";
    }

    const currentFunction = hfGetCurrentFunction();
    const nextFunction = hfGetNextFunction();
    if (nextFunction) {
      return currentFunction.nextLabel;
    }

    return "Replay walkthrough ↺";
  }

  function hfGetPrevButtonLabel() {
    if (hfState.stepIndex > 0) {
      return "Previous step";
    }

    const previousFunction = hfGetPreviousFunction();
    if (previousFunction) {
      return "Back to " + previousFunction.displayLabel + " ←";
    }

    return "Previous step";
  }

  function hfRenderSpotlight(step) {
    hfEls.hotspotButton.style.setProperty("--hf-spotlight-x", step.spotlight.x + "%");
    hfEls.hotspotButton.style.setProperty("--hf-spotlight-y", step.spotlight.y + "%");
    hfEls.hotspotButton.style.setProperty("--hf-spotlight-width", step.spotlight.w + "%");
    hfEls.hotspotButton.style.setProperty("--hf-spotlight-height", step.spotlight.h + "%");
    hfEls.hotspotButton.style.setProperty("--hf-hotspot-x", step.hotspot.x + "%");
    hfEls.hotspotButton.style.setProperty("--hf-hotspot-y", step.hotspot.y + "%");
  }

  function hfScrollStepIntoView() {
    const activeStep = hfEls.stepRail.querySelector('[data-step-index="' + hfState.stepIndex + '"]');
    if (!activeStep) {
      return;
    }

    activeStep.scrollIntoView({
      behavior: hfMotionReduced ? "auto" : "smooth",
      block: hfDesktopMedia.matches ? "center" : "nearest",
      inline: "nearest"
    });
  }

  function hfBindStepObserver() {
    if (hfState.stepObserver) {
      hfState.stepObserver.disconnect();
      hfState.stepObserver = null;
    }

    const stepButtons = Array.from(hfEls.stepRail.querySelectorAll(".hf-steprail-button"));
    if (!stepButtons.length || !("IntersectionObserver" in window)) {
      return;
    }

    hfState.stepObserver = new IntersectionObserver(function (entries) {
      const visibleEntries = entries
        .filter(function (entry) { return entry.isIntersecting; })
        .sort(function (entryA, entryB) { return entryB.intersectionRatio - entryA.intersectionRatio; });

      if (!visibleEntries.length) {
        return;
      }

      const nextIndex = Number(visibleEntries[0].target.dataset.stepIndex || 0);
      if (nextIndex === hfState.stepIndex) {
        return;
      }

      hfState.stepIndex = nextIndex;
      hfRender({ rebuildRail: false, syncScroll: false });
    }, {
      root: null,
      rootMargin: hfDesktopMedia.matches ? "-22% 0px -46% 0px" : "-10% 0px -68% 0px",
      threshold: [0.35, 0.55, 0.75]
    });

    stepButtons.forEach(function (button) {
      hfState.stepObserver.observe(button);
    });
  }

  function hfRender(options) {
    const renderOptions = options || {};
    const currentFunction = hfGetCurrentFunction();
    const step = hfGetCurrentStep();
    const isLastStep = hfState.stepIndex === currentFunction.tourSteps.length - 1;
    const isFirstTourStep = hfState.functionIndex === 0 && hfState.stepIndex === 0;
    const functionChanged = hfState.activeFunctionId !== currentFunction.functionId;

    hfRenderTabs();
    if (functionChanged || renderOptions.rebuildRail) {
      hfRenderStepRail(currentFunction);
      hfState.activeFunctionId = currentFunction.functionId;
    }
    hfRenderRailActiveState();
    hfRenderBadges(step);
    hfRenderSpotlight(step);

    hfEls.screenImage.src = hfScreenshotBase + step.screenshot;
    hfEls.screenImage.alt = step.tooltipTitle + " in the " + currentFunction.pageName + " walkthrough";
    hfEls.screenName.textContent = step.stateLabel;
    hfEls.screenPurpose.textContent = step.stateHint;
    hfEls.stepProgress.textContent =
      currentFunction.displayLabel + " • Step " + (hfState.stepIndex + 1) +
      " of " + currentFunction.tourSteps.length;
    hfEls.functionName.textContent = currentFunction.displayLabel + " • " + currentFunction.uiPurpose;
    hfEls.tooltipTitle.textContent = step.tooltipTitle;
    hfEls.tooltipBody.textContent = step.tooltipBody;
    hfEls.actionText.textContent = step.suggestedAction;
    hfEls.resultText.textContent = step.designValue;

    hfEls.hotspotButton.setAttribute("aria-label", step.suggestedAction);

    hfEls.prevButton.disabled = isFirstTourStep;
    hfEls.prevButton.textContent = hfGetPrevButtonLabel();
    hfEls.nextButton.disabled = false;
    hfEls.nextButton.textContent = hfGetNextButtonLabel(isLastStep);

    if (renderOptions.syncScroll) {
      window.requestAnimationFrame(hfScrollStepIntoView);
    }
  }

  function hfGoToPreviousStep() {
    if (hfState.stepIndex > 0) {
      hfState.stepIndex -= 1;
      hfRender({ syncScroll: true });
      return;
    }

    const previousFunction = hfGetPreviousFunction();
    if (previousFunction) {
      hfState.functionIndex -= 1;
      hfState.stepIndex = previousFunction.tourSteps.length - 1;
      hfRender({ rebuildRail: true, syncScroll: true });
    }
  }

  function hfGoToNextTarget() {
    const currentFunction = hfGetCurrentFunction();
    if (hfState.stepIndex < currentFunction.tourSteps.length - 1) {
      hfState.stepIndex += 1;
      hfRender({ syncScroll: true });
      return;
    }

    const nextFunction = hfGetNextFunction();
    if (nextFunction) {
      hfState.functionIndex += 1;
      hfState.stepIndex = 0;
      hfRender({ rebuildRail: true, syncScroll: true });
      return;
    }

    hfState.functionIndex = 0;
    hfState.stepIndex = 0;
    hfRender({ rebuildRail: true, syncScroll: true });
  }

  function hfReplayCurrentFunction() {
    hfState.stepIndex = 0;
    hfRender({ syncScroll: true });
  }

  async function hfLoadManifest() {
    try {
      const response = await fetch(hfManifestPath, { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Failed to fetch walkthrough manifest.");
      }

      const data = await response.json();
      if (!data || !Array.isArray(data.functions) || !data.functions.length) {
        throw new Error("Walkthrough manifest did not contain any functions.");
      }

      return hfNormalizeManifest(data);
    } catch (error) {
      console.warn("Using fallback walkthrough manifest.", error);
      return hfNormalizeManifest(hfFallbackManifest);
    }
  }

  hfState.manifest = await hfLoadManifest();
  hfBuildTabs();
  hfRender({ rebuildRail: true });

  hfEls.hotspotButton.addEventListener("click", hfGoToNextTarget);
  hfEls.prevButton.addEventListener("click", hfGoToPreviousStep);
  hfEls.nextButton.addEventListener("click", hfGoToNextTarget);
  hfEls.replayButton.addEventListener("click", hfReplayCurrentFunction);
  hfDesktopMedia.addEventListener("change", hfBindStepObserver);
})();
