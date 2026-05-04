(function () {
  const hfManifest = {
    packageMeta: {
      screenshotBase: "portfolio-highfi-handoff/screenshots/"
    },
    functions: [
      {
        functionId: "function1",
        pageName: "Album",
        displayLabel: "Album 📸",
        functionTitle: "Shared Album with Pet-Carried Notes",
        tabSummary: "Photo sharing with short pet notes and low-pressure reactions.",
        uiPurpose: "Photo sharing, quick acknowledgement, and recap.",
        tourSteps: [
          {
            stepId: "function1-step1",
            screenshot: "function1_01_entry.png",
            stateLabel: "Family overview",
            stateHint: "Recent updates are easy to scan first.",
            position: { x: "50%", y: "33%", width: "86%", height: "56%" },
            tooltipTitle: "Open a family album",
            tooltipBody: "<strong>Large preview cards</strong> help the user spot whose update to open next.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "<strong>Tap</strong> a family card.",
            designValue: "<strong>Low-pressure entry:</strong> the interface makes a new update easy to notice before any reply is needed."
          },
          {
            stepId: "function1-step2",
            screenshot: "function1_02_interaction.png",
            stateLabel: "Detail view",
            stateHint: "The main photo becomes the interaction surface.",
            position: { x: "79%", y: "62%", width: "18%", height: "14%" },
            tooltipTitle: "React without starting a chat",
            tooltipBody: "<strong>One-tap reactions</strong> let family members respond without writing a full message.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "<strong>Tap</strong> the reaction button on the photo.",
            designValue: "<strong>Gentle acknowledgement:</strong> care can be shown quickly, with little communication pressure."
          },
          {
            stepId: "function1-step3",
            screenshot: "function1_03_result.png",
            stateLabel: "Reaction feedback",
            stateHint: "The chosen response stays visible on screen.",
            position: { x: "16%", y: "71%", width: "13%", height: "10%" },
            tooltipTitle: "Keep the response visible",
            tooltipBody: "<strong>Feedback remains lightweight</strong>, but it is still easy to notice later.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "<strong>Notice</strong> the visible reaction badge.",
            designValue: "<strong>Clear reassurance:</strong> the user can see that care was received without opening a longer thread."
          },
          {
            stepId: "function1-step4",
            screenshot: "function1_04_feedback.png",
            stateLabel: "Summary recap",
            stateHint: "Several posts are condensed into one card.",
            position: { x: "36%", y: "38%", width: "64%", height: "34%" },
            tooltipTitle: "Turn posts into a quick recap",
            tooltipBody: "<strong>The summary card</strong> gathers several updates into one readable moment.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "<strong>Read</strong> the recap card.",
            designValue: "<strong>Cumulative meaning:</strong> everyday sharing becomes a small family narrative instead of isolated posts."
          }
        ]
      },
      {
        functionId: "function2",
        pageName: "Jar",
        displayLabel: "Jar 🫙",
        functionTitle: "Mood Jar with Graduated Sharing Controls",
        tabSummary: "Private mood tracking with explicit sharing thresholds.",
        uiPurpose: "Private check-ins, sharing control, and gentle family care.",
        tourSteps: [
          {
            stepId: "function2-step1",
            screenshot: "function2_01_entry.png",
            stateLabel: "Private entry",
            stateHint: "Mood logging begins with one lightweight prompt.",
            position: { x: "28%", y: "72%", width: "44%", height: "13%" },
            tooltipTitle: "Start with one quick check-in",
            tooltipBody: "<strong>The jar begins simply</strong> so mood sharing does not feel like a diary task.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "<strong>Tap</strong> the mood-bead entry row.",
            designValue: "<strong>Low effort:</strong> emotional check-ins stay manageable and easy to repeat."
          },
          {
            stepId: "function2-step2",
            screenshot: "function2_02_interaction.png",
            stateLabel: "Mood picker",
            stateHint: "The user chooses from a short visual set.",
            position: { x: "42%", y: "43%", width: "68%", height: "48%" },
            tooltipTitle: "Choose from a small mood set",
            tooltipBody: "<strong>A constrained mood vocabulary</strong> keeps the choice quick and emotionally lighter.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "<strong>Select</strong> one mood bead.",
            designValue: "<strong>Reduced friction:</strong> the user can express a feeling without composing a longer explanation."
          },
          {
            stepId: "function2-step3",
            screenshot: "function2_02_interaction.png",
            stateLabel: "Sharing threshold",
            stateHint: "Visibility is decided before anything leaves the private view.",
            position: { x: "50%", y: "92%", width: "78%", height: "17%" },
            tooltipTitle: "Control what family can see",
            tooltipBody: "<strong>Private, Soft Share, and Full Share</strong> create clear boundaries around mood visibility.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "<strong>Pick</strong> a sharing level.",
            designValue: "<strong>User control:</strong> private reflection and family awareness remain clearly separated."
          },
          {
            stepId: "function2-step4",
            screenshot: "function2_03_result.png",
            stateLabel: "Shared jar",
            stateHint: "Only filtered information reaches the family view.",
            position: { x: "50%", y: "60%", width: "76%", height: "56%" },
            tooltipTitle: "Filter what becomes family-visible",
            tooltipBody: "<strong>The shared jar</strong> shows only the level of awareness the user has allowed.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "<strong>Compare</strong> the jar with the status area below.",
            designValue: "<strong>Safer awareness:</strong> family members get a soft signal without seeing the full private mood record."
          },
          {
            stepId: "function2-step5",
            screenshot: "function2_04_feedback.png",
            stateLabel: "Care response",
            stateHint: "Support stays gentle and bounded.",
            position: { x: "50%", y: "53%", width: "76%", height: "13%" },
            tooltipTitle: "Reply with a small care gesture",
            tooltipBody: "<strong>Hug, Tea, and Pet</strong> keep the response supportive without asking for a longer conversation.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "<strong>Tap</strong> a care option.",
            designValue: "<strong>Bounded support:</strong> the family can respond warmly without turning the moment into emotional pressure."
          }
        ]
      },
      {
        functionId: "function3",
        pageName: "Weekly Echo",
        displayLabel: "Weekly Echo ✨",
        functionTitle: "Weekly Echo and Keepsake Reflection",
        tabSummary: "Weekly recap, keepsake reveal, and reflective prompts.",
        uiPurpose: "Weekly recap, memory-making, and reflective reward.",
        tourSteps: [
          {
            stepId: "function3-step1",
            screenshot: "function3_01_entry.png",
            stateLabel: "Weekly recap board",
            stateHint: "The week is gathered into one calm summary.",
            position: { x: "49%", y: "44%", width: "82%", height: "54%" },
            tooltipTitle: "Read the week in one board",
            tooltipBody: "<strong>The recap board</strong> turns scattered traces into one readable weekly story.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "<strong>Scan</strong> the board and metric tiles.",
            designValue: "<strong>Readable reflection:</strong> small interactions become easier to remember and discuss."
          },
          {
            stepId: "function3-step2",
            screenshot: "function3_02_interaction.png",
            stateLabel: "Keepsake reveal",
            stateHint: "The next step turns activity into a reward.",
            position: { x: "50%", y: "39%", width: "68%", height: "11%" },
            tooltipTitle: "Reveal this week's keepsake",
            tooltipBody: "<strong>The keepsake button</strong> turns repeated actions into a visible weekly reward.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "<strong>Tap</strong> the reveal button.",
            designValue: "<strong>Memory-making:</strong> the interface rewards small moments by framing them as something worth keeping."
          },
          {
            stepId: "function3-step3",
            screenshot: "function3_02_interaction.png",
            stateLabel: "Pet prompts",
            stateHint: "Reflection can continue with light prompts.",
            position: { x: "50%", y: "69%", width: "82%", height: "20%" },
            tooltipTitle: "Keep reflection lightweight",
            tooltipBody: "<strong>Quick reply chips</strong> let the user continue the moment without leaving the recap space.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "<strong>Use</strong> a quick prompt such as Summary or Thanks.",
            designValue: "<strong>Low-pressure continuation:</strong> the user can stay reflective without opening a heavier chat flow."
          },
          {
            stepId: "function3-step4",
            screenshot: "function3_03_summary.png",
            stateLabel: "Unlocked keepsake",
            stateHint: "The final state presents a lasting family memory.",
            position: { x: "50%", y: "49%", width: "74%", height: "56%" },
            tooltipTitle: "Present the reward as a keepsake",
            tooltipBody: "<strong>The final card</strong> names the reward and explains why the week earned it.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "<strong>Read</strong> the unlocked keepsake card.",
            designValue: "<strong>Longer-term meaning:</strong> weekly activity becomes a memory object rather than disappearing after one interaction."
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
    hfSection.getAttribute("data-hf-screenshot-base") || hfManifest.packageMeta.screenshotBase;

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

  const hfState = {
    functionIndex: 0,
    stepIndex: 0
  };

  function hfGetCurrentFunction() {
    return hfManifest.functions[hfState.functionIndex];
  }

  function hfGetCurrentStep() {
    return hfGetCurrentFunction().tourSteps[hfState.stepIndex];
  }

  function hfGetNextFunction() {
    return hfManifest.functions[hfState.functionIndex + 1] || null;
  }

  function hfGetPreviousFunction() {
    return hfManifest.functions[hfState.functionIndex - 1] || null;
  }

  function hfBuildTabs() {
    hfManifest.functions.forEach(function (item, index) {
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
        hfRender();
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
      if (index === hfState.stepIndex) {
        button.classList.add("is-active");
      }
      button.innerHTML = [
        '<span class="hf-steprail-step">Step ' + (index + 1) + "</span>",
        '<span class="hf-steprail-title">' + step.tooltipTitle + "</span>",
        '<span class="hf-steprail-caption">' + step.stateLabel + "</span>"
      ].join("");

      button.addEventListener("click", function () {
        hfState.stepIndex = index;
        hfRender();
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

  function hfGetNextButtonLabel(isLastStep) {
    if (!isLastStep) {
      return "Next step";
    }

    const nextFunction = hfGetNextFunction();
    if (nextFunction) {
      return "Explore " + nextFunction.displayLabel + " →";
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

  function hfRender() {
    const currentFunction = hfGetCurrentFunction();
    const step = hfGetCurrentStep();
    const isLastStep = hfState.stepIndex === currentFunction.tourSteps.length - 1;
    const isFirstTourStep = hfState.functionIndex === 0 && hfState.stepIndex === 0;

    hfRenderTabs();
    hfRenderStepRail(currentFunction);
    hfRenderBadges(step);

    hfEls.screenImage.src = hfScreenshotBase + step.screenshot;
    hfEls.screenImage.alt = step.tooltipTitle + " in the " + currentFunction.pageName + " walkthrough";
    hfEls.screenName.textContent = step.stateLabel;
    hfEls.screenPurpose.textContent = step.stateHint;
    hfEls.stepProgress.textContent =
      currentFunction.displayLabel + " • Step " + (hfState.stepIndex + 1) +
      " of " + currentFunction.tourSteps.length;
    hfEls.functionName.textContent = currentFunction.displayLabel + " • " + currentFunction.uiPurpose;
    hfEls.tooltipTitle.textContent = step.tooltipTitle;
    hfEls.tooltipBody.innerHTML = step.tooltipBody;
    hfEls.actionText.innerHTML = step.suggestedAction;
    hfEls.resultText.innerHTML = step.designValue;

    hfEls.hotspotButton.style.setProperty("--hf-x", step.position.x);
    hfEls.hotspotButton.style.setProperty("--hf-y", step.position.y);
    hfEls.hotspotButton.style.setProperty("--hf-width", step.position.width);
    hfEls.hotspotButton.style.setProperty("--hf-height", step.position.height);
    hfEls.hotspotButton.setAttribute("aria-label", step.suggestedAction.replace(/<[^>]+>/g, ""));

    hfEls.prevButton.disabled = isFirstTourStep;
    hfEls.prevButton.textContent = hfGetPrevButtonLabel();
    hfEls.nextButton.disabled = false;
    hfEls.nextButton.textContent = hfGetNextButtonLabel(isLastStep);
  }

  function hfGoToPreviousStep() {
    if (hfState.stepIndex > 0) {
      hfState.stepIndex -= 1;
      hfRender();
      return;
    }

    const previousFunction = hfGetPreviousFunction();
    if (previousFunction) {
      hfState.functionIndex -= 1;
      hfState.stepIndex = previousFunction.tourSteps.length - 1;
      hfRender();
    }
  }

  function hfGoToNextTarget() {
    const currentFunction = hfGetCurrentFunction();
    if (hfState.stepIndex < currentFunction.tourSteps.length - 1) {
      hfState.stepIndex += 1;
      hfRender();
      return;
    }

    const nextFunction = hfGetNextFunction();
    if (nextFunction) {
      hfState.functionIndex += 1;
      hfState.stepIndex = 0;
      hfRender();
      return;
    }

    hfState.functionIndex = 0;
    hfState.stepIndex = 0;
    hfRender();
  }

  function hfReplayCurrentFunction() {
    hfState.stepIndex = 0;
    hfRender();
  }

  hfBuildTabs();
  hfRender();

  hfEls.hotspotButton.addEventListener("click", hfGoToNextTarget);
  hfEls.prevButton.addEventListener("click", hfGoToPreviousStep);
  hfEls.nextButton.addEventListener("click", hfGoToNextTarget);
  hfEls.replayButton.addEventListener("click", hfReplayCurrentFunction);
})();
