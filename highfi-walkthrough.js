(async function () {
  const hfFallbackManifest = {
    generatedAt: "2026-05-08",
    packageMeta: {
      screenshotBase: "portfolio-highfi-handoff/screenshots/"
    },
    functions: [
      {
        id: "album-connect",
        name: "Album",
        description: "Family photo updates are entered through an album overview, then read and acknowledged inside a per-member gallery.",
        steps: [
          {
            id: "album-1",
            screenshot: "album-overview.png",
            target: "Grace member card",
            hotspot: { x: 50, y: 30 },
            spotlight: { x: 50, y: 30, w: 57, h: 54 },
            title: "Open Grace's album",
            body: "Choose whose family updates to view from the Album overview.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap the Grace card from the Album overview.",
            expectedEffect: "Opens Grace's member-specific update stream."
          },
          {
            id: "album-2",
            screenshot: "album-grace-gallery.png",
            target: "Latest shared photo card",
            hotspot: { x: 50, y: 42 },
            spotlight: { x: 50, y: 46, w: 58, h: 57 },
            title: "Read one shared photo",
            body: "Photo, date, and note stay together as one lightweight update.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Read the first photo card in Grace's gallery.",
            expectedEffect: "Supports awareness without starting chat."
          },
          {
            id: "album-3",
            screenshot: "album-range-menu.png",
            target: "Time-range dropdown",
            hotspot: { x: 54, y: 16 },
            spotlight: { x: 56, y: 24, w: 31, h: 24 },
            title: "Filter by time range",
            body: "The gallery can switch between today, week, month, and year ranges.",
            requirementBadge: "Flexible Timing",
            mockAction: "Open the Last Week dropdown to inspect the available time ranges.",
            expectedEffect: "Narrows which updates stay on screen."
          },
          {
            id: "album-4",
            screenshot: "album-reaction-picker.png",
            target: "Emoji reaction tray",
            hotspot: { x: 71, y: 53 },
            spotlight: { x: 51, y: 46, w: 43, h: 13 },
            title: "Send a quick reaction",
            body: "Emoji reactions let users acknowledge a moment with almost no pressure.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Tap the smile button on the photo card.",
            expectedEffect: "Opens a lightweight reaction tray."
          },
          {
            id: "album-5",
            screenshot: "album-upload-sheet.png",
            target: "Camera and Library chooser",
            hotspot: { x: 50, y: 84 },
            spotlight: { x: 50, y: 87, w: 49, h: 22 },
            title: "Start a self-upload",
            body: "The camera entry opens a simple source choice for sharing.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap Camera or Library from the upload sheet.",
            expectedEffect: "Shows Camera and Library options."
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
            hotspot: { x: 28, y: 45 },
            spotlight: { x: 28, y: 45, w: 10, h: 8 },
            title: "Start a mood check-in",
            body: "Adding one mood candy keeps the check-in light and fast.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap the plus button.",
            expectedEffect: "Opens today's mood editor."
          },
          {
            id: "jar-2",
            screenshot: "jar-calendar-popup.png",
            target: "Private calendar grid",
            hotspot: { x: 50, y: 55 },
            spotlight: { x: 50, y: 60, w: 48, h: 41 },
            title: "Review the private calendar",
            body: "Mood history stays date-based and visible only to the current user.",
            requirementBadge: "Flexible Timing",
            mockAction: "Tap See calendar.",
            expectedEffect: "Opens the private month view."
          },
          {
            id: "jar-3",
            screenshot: "jar-mood-editor.png",
            target: "Share mode choices",
            hotspot: { x: 50, y: 81 },
            spotlight: { x: 50, y: 74, w: 48, h: 29 },
            title: "Choose a share mode",
            body: "Private, Soft Share, and Full Share define visibility before saving.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Compare the three sharing options.",
            expectedEffect: "Makes privacy boundaries explicit."
          },
          {
            id: "jar-4",
            screenshot: "jar-care-popup.png",
            target: "Shared-status card",
            hotspot: { x: 50, y: 46 },
            spotlight: { x: 50, y: 43, w: 48, h: 25 },
            title: "Open the care view",
            body: "Family members see only the shared status layer in this popup.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Tap Care for someone.",
            expectedEffect: "Hides the private calendar from relatives."
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
            hotspot: { x: 50, y: 47 },
            spotlight: { x: 50, y: 47, w: 54, h: 58 },
            title: "Read the summary board",
            body: "The first board gathers weekly totals and the headline recap together.",
            requirementBadge: "Flexible Timing",
            mockAction: "Open Echo.",
            expectedEffect: "Gives a compact weekly overview."
          },
          {
            id: "echo-2",
            screenshot: "echo-moments-board.png",
            target: "Numbered moment list",
            hotspot: { x: 49, y: 44 },
            spotlight: { x: 49, y: 44, w: 42, h: 25 },
            title: "Scan the moments board",
            body: "The second board turns activity into a short family story.",
            requirementBadge: "Low Reply Pressure",
            mockAction: "Move to the next board.",
            expectedEffect: "Makes the week easier to remember."
          },
          {
            id: "echo-3",
            screenshot: "echo-keepsakes-board.png",
            target: "Keepsake list and reveal CTA",
            hotspot: { x: 50, y: 69 },
            spotlight: { x: 50, y: 54, w: 46, h: 33 },
            title: "Review shared keepsakes",
            body: "The third board groups traces into weekly keepsake categories.",
            requirementBadge: "Flexible Timing",
            mockAction: "Open the Shared Keepsakes board.",
            expectedEffect: "Shows what can be revealed this week."
          },
          {
            id: "echo-4",
            screenshot: "echo-gift-closed.png",
            target: "Gift box",
            hotspot: { x: 50, y: 56 },
            spotlight: { x: 50, y: 59, w: 30, h: 23 },
            title: "Open the gift scene",
            body: "The reveal CTA moves into a separate gift-opening screen.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap 'Reveal This Week's Keepsake' to enter the gift scene.",
            expectedEffect: "Shows the closed weekly gift box."
          },
          {
            id: "echo-5",
            screenshot: "echo-gift-revealed.png",
            target: "Add to Toy Box button",
            hotspot: { x: 50, y: 70 },
            spotlight: { x: 50, y: 70, w: 41, h: 9 },
            title: "Claim the keepsake",
            body: "The unlocked card explains the reward and offers a direct claim action.",
            requirementBadge: "Easy to Start",
            mockAction: "Tap Add to Toy Box.",
            expectedEffect: "Adds the keepsake to inventory."
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
      "Overview",
      "Grace gallery",
      "Range menu",
      "Reaction tray",
      "Upload sheet"
    ],
    jar: [
      "Jar home",
      "Private calendar",
      "Mood editor",
      "Care popup"
    ],
    "weekly-echo": [
      "Summary board",
      "Moments board",
      "Keepsakes board",
      "Gift scene",
      "Reward card"
    ]
  };

  const hfFunctionCopy = {
    "album-connect": {
      emoji: "📸",
      summary: "Overview, gallery, filter, reaction, upload.",
      purpose: "Member updates, quick reactions, and self-upload.",
      nextLabel: "Continue to Jar 🫙 →"
    },
    jar: {
      emoji: "🫙",
      summary: "Check-in, calendar, share modes, care popup.",
      purpose: "Private mood logging with controlled sharing.",
      nextLabel: "Continue to Weekly Echo ✨ →"
    },
    "weekly-echo": {
      emoji: "✨",
      summary: "Summary, moments, keepsakes, reveal.",
      purpose: "Weekly recap, keepsakes, and reward follow-through.",
      nextLabel: "Replay walkthrough ↺"
    }
  };

  const hfEls = {
    tabList: hfSection.querySelector(".hf-function-tabs"),
    overlayLayer: hfSection.querySelector(".hf-overlay-layer"),
    screenShell: hfSection.querySelector(".hf-screen-shell"),
    screenImage: hfSection.querySelector(".hf-screen-image"),
    firstUseHint: hfSection.querySelector(".hf-first-use-hint"),
    hotspotButton: hfSection.querySelector(".hf-hotspot-button"),
    hotspotPulse: hfSection.querySelector(".hf-hotspot-pulse"),
    tooltipCard: hfSection.querySelector(".hf-tooltip-card"),
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
  const hfState = {
    functionIndex: 0,
    stepIndex: 0,
    manifest: hfNormalizeManifest(hfFallbackManifest),
    activeFunctionId: null,
    transitionTimer: null,
    hasClickedHotspot: false
  };

  function hfSetFirstUseHintVisibility(isVisible) {
    if (!hfEls.firstUseHint) {
      return;
    }

    hfEls.firstUseHint.classList.toggle("is-hidden", !isVisible);
    hfEls.firstUseHint.setAttribute("aria-hidden", isVisible ? "false" : "true");
  }

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
        hfRender({ rebuildRail: true, syncRail: true, animate: true });
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
        '<span class="hf-steprail-caption">' + hfEscapeHtml(step.stateLabel) + "</span>",
        badgeMarkup ? '<span class="hf-steprail-tag-row">' + badgeMarkup + "</span>" : ""
      ].join("");

      button.addEventListener("click", function () {
        hfState.stepIndex = index;
        hfRender({ syncRail: true, animate: true });
      });

      hfEls.stepRail.appendChild(button);
    });
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
    hfEls.overlayLayer.style.setProperty("--hf-hotspot-x", step.hotspot.x + "%");
    hfEls.overlayLayer.style.setProperty("--hf-hotspot-y", step.hotspot.y + "%");
    hfEls.hotspotPulse.style.setProperty("--hf-hotspot-x", step.hotspot.x + "%");
    hfEls.hotspotPulse.style.setProperty("--hf-hotspot-y", step.hotspot.y + "%");
  }

  function hfScrollStepRailToActive() {
    const rail = hfEls.stepRail;
    const activeStep = hfEls.stepRail.querySelector('[data-step-index="' + hfState.stepIndex + '"]');
    if (!rail || !activeStep) {
      return;
    }

    const gap = 12;
    const nextTop = activeStep.offsetTop - gap;
    const nextBottom = activeStep.offsetTop + activeStep.offsetHeight + gap;
    const visibleTop = rail.scrollTop;
    const visibleBottom = visibleTop + rail.clientHeight;

    if (nextTop < visibleTop) {
      rail.scrollTo({
        top: Math.max(nextTop, 0),
        behavior: "auto"
      });
      return;
    }

    if (nextBottom > visibleBottom) {
      rail.scrollTo({
        top: nextBottom - rail.clientHeight,
        behavior: "auto"
      });
    }
  }

  function hfAnimateStepPanels() {
    if (hfMotionReduced) {
      return;
    }

    window.clearTimeout(hfState.transitionTimer);
    [hfEls.screenShell, hfEls.tooltipCard].forEach(function (node) {
      if (node) {
        node.classList.add("is-transitioning");
      }
    });
    hfState.transitionTimer = window.setTimeout(function () {
      [hfEls.screenShell, hfEls.tooltipCard].forEach(function (node) {
        if (node) {
          node.classList.remove("is-transitioning");
        }
      });
    }, 180);
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

    if (renderOptions.syncRail) {
      window.requestAnimationFrame(hfScrollStepRailToActive);
    }

    if (renderOptions.animate) {
      hfAnimateStepPanels();
    }
  }

  function hfGoToPreviousStep() {
    if (hfState.stepIndex > 0) {
      hfState.stepIndex -= 1;
      hfRender({ syncRail: true, animate: true });
      return;
    }

    const previousFunction = hfGetPreviousFunction();
    if (previousFunction) {
      hfState.functionIndex -= 1;
      hfState.stepIndex = previousFunction.tourSteps.length - 1;
      hfRender({ rebuildRail: true, syncRail: true, animate: true });
    }
  }

  function hfGoToNextTarget() {
    const currentFunction = hfGetCurrentFunction();
    if (hfState.stepIndex < currentFunction.tourSteps.length - 1) {
      hfState.stepIndex += 1;
      hfRender({ syncRail: true, animate: true });
      return;
    }

    const nextFunction = hfGetNextFunction();
    if (nextFunction) {
      hfState.functionIndex += 1;
      hfState.stepIndex = 0;
      hfRender({ rebuildRail: true, syncRail: true, animate: true });
      return;
    }

    hfState.functionIndex = 0;
    hfState.stepIndex = 0;
    hfRender({ rebuildRail: true, syncRail: true, animate: true });
  }

  function hfReplayCurrentFunction() {
    hfState.hasClickedHotspot = false;
    hfSetFirstUseHintVisibility(true);
    hfState.stepIndex = 0;
    hfRender({ syncRail: true, animate: true });
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
  hfSetFirstUseHintVisibility(true);
  hfRender({ rebuildRail: true });

  hfEls.hotspotButton.addEventListener("click", function () {
    if (!hfState.hasClickedHotspot) {
      hfState.hasClickedHotspot = true;
      hfSetFirstUseHintVisibility(false);
    }

    hfGoToNextTarget();
  });
  hfEls.prevButton.addEventListener("click", hfGoToPreviousStep);
  hfEls.nextButton.addEventListener("click", hfGoToNextTarget);
  hfEls.replayButton.addEventListener("click", hfReplayCurrentFunction);
})();
