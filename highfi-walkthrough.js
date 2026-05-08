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
        functionTitle: "Album",
        tabSummary: "Family sharing with quick reactions and recap support.",
        uiPurpose: "Photo sharing, quick acknowledgement, and recap.",
        tourSteps: [
          {
            stepId: "function1-step1",
            screenshot: "function1_01_entry.png",
            stateLabel: "Family overview",
            stateHint: "Recent updates are easy to scan first.",
            position: { x: "50%", y: "33%", width: "86%", height: "56%" },
            tooltipTitle: "Open a family update",
            tooltipBody: "Preview cards make recent family updates easy to scan.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "Tap a family card.",
            designValue: "The user can notice an update before deciding whether to respond."
          },
          {
            stepId: "function1-step2",
            screenshot: "function1_02_interaction.png",
            stateLabel: "Detail view",
            stateHint: "The main photo becomes the interaction surface.",
            position: { x: "79%", y: "62%", width: "18%", height: "14%" },
            tooltipTitle: "React in one tap",
            tooltipBody: "One-tap reactions let users respond without writing a full message.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "Tap the reaction button on the photo.",
            designValue: "Care can be acknowledged quickly without opening a longer chat."
          },
          {
            stepId: "function1-step3",
            screenshot: "function1_03_result.png",
            stateLabel: "Reaction feedback",
            stateHint: "The chosen response stays visible on screen.",
            position: { x: "16%", y: "71%", width: "13%", height: "10%" },
            tooltipTitle: "Keep the reply visible",
            tooltipBody: "The chosen reaction stays visible after the tap.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "Notice the visible reaction badge.",
            designValue: "Both sides can see acknowledgement without extending the interaction."
          },
          {
            stepId: "function1-step4",
            screenshot: "function1_04_feedback.png",
            stateLabel: "Summary recap",
            stateHint: "Several posts are condensed into one card.",
            position: { x: "36%", y: "38%", width: "64%", height: "34%" },
            tooltipTitle: "Read the recap card",
            tooltipBody: "A recap card gathers several updates into one summary.",
            requirementBadges: ["Low Reply Pressure"],
            suggestedAction: "Read the recap card.",
            designValue: "Small updates become easier to revisit as one family moment."
          }
        ]
      },
      {
        functionId: "function2",
        pageName: "Jar",
        displayLabel: "Jar 🫙",
        functionTitle: "Jar",
        tabSummary: "Private mood reflection with clear sharing control.",
        uiPurpose: "Private check-ins, sharing control, and gentle family care.",
        tourSteps: [
          {
            stepId: "function2-step1",
            screenshot: "function2_01_entry.png",
            stateLabel: "Private entry",
            stateHint: "Mood logging begins with one lightweight prompt.",
            position: { x: "28%", y: "72%", width: "44%", height: "13%" },
            tooltipTitle: "Start a quick check-in",
            tooltipBody: "The jar starts with one simple mood entry prompt.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "Tap the mood-bead entry row.",
            designValue: "The check-in stays easy to repeat at the user’s own pace."
          },
          {
            stepId: "function2-step2",
            screenshot: "function2_02_interaction.png",
            stateLabel: "Mood picker",
            stateHint: "The user chooses from a short visual set.",
            position: { x: "42%", y: "43%", width: "68%", height: "48%" },
            tooltipTitle: "Choose a mood bead",
            tooltipBody: "A small mood set keeps the choice quick and manageable.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "Select one mood bead.",
            designValue: "The user can record a feeling without writing a full explanation."
          },
          {
            stepId: "function2-step3",
            screenshot: "function2_02_interaction.png",
            stateLabel: "Sharing threshold",
            stateHint: "Visibility is decided before anything leaves the private view.",
            position: { x: "50%", y: "92%", width: "78%", height: "17%" },
            tooltipTitle: "Choose a sharing level",
            tooltipBody: "Private, Soft Share, and Full Share set clear mood boundaries.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "Pick a sharing level.",
            designValue: "Private reflection and family visibility stay clearly separated."
          },
          {
            stepId: "function2-step4",
            screenshot: "function2_03_result.png",
            stateLabel: "Shared jar",
            stateHint: "Only filtered information reaches the family view.",
            position: { x: "50%", y: "60%", width: "76%", height: "56%" },
            tooltipTitle: "Review the shared view",
            tooltipBody: "The shared jar only shows the level of awareness the user allowed.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "Compare the jar with the status area below.",
            designValue: "Family members receive a signal without seeing the full private log."
          },
          {
            stepId: "function2-step5",
            screenshot: "function2_04_feedback.png",
            stateLabel: "Care response",
            stateHint: "Support stays gentle and bounded.",
            position: { x: "50%", y: "53%", width: "76%", height: "13%" },
            tooltipTitle: "Send a care gesture",
            tooltipBody: "Small care actions respond to the moment without demanding more disclosure.",
            requirementBadges: ["Flexible Timing"],
            suggestedAction: "Tap a care option.",
            designValue: "Support stays warm without turning the moment into extra pressure."
          }
        ]
      },
      {
        functionId: "function3",
        pageName: "Weekly Echo",
        displayLabel: "Weekly Echo ✨",
        functionTitle: "Weekly Echo",
        tabSummary: "Weekly recap, keepsake reveal, and prompt support.",
        uiPurpose: "Weekly recap, memory-making, and reflective reward.",
        tourSteps: [
          {
            stepId: "function3-step1",
            screenshot: "function3_01_entry.png",
            stateLabel: "Weekly recap board",
            stateHint: "The week is gathered into one calm summary.",
            position: { x: "49%", y: "44%", width: "82%", height: "54%" },
            tooltipTitle: "Scan the weekly board",
            tooltipBody: "The recap board gathers the week into one readable summary.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "Scan the board and metric tiles.",
            designValue: "Recent activity becomes easier to notice and talk about."
          },
          {
            stepId: "function3-step2",
            screenshot: "function3_02_interaction.png",
            stateLabel: "Keepsake reveal",
            stateHint: "The next step turns activity into a reward.",
            position: { x: "50%", y: "39%", width: "68%", height: "11%" },
            tooltipTitle: "Reveal the keepsake",
            tooltipBody: "The keepsake button turns weekly activity into one visible reward.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "Tap the reveal button.",
            designValue: "The recap becomes more memorable by ending with a keepsake."
          },
          {
            stepId: "function3-step3",
            screenshot: "function3_02_interaction.png",
            stateLabel: "Pet prompts",
            stateHint: "Reflection can continue with light prompts.",
            position: { x: "50%", y: "69%", width: "82%", height: "20%" },
            tooltipTitle: "Use a prompt chip",
            tooltipBody: "Quick prompt chips continue the moment without opening a heavier flow.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "Use a quick prompt such as Summary or Thanks.",
            designValue: "The user can continue the moment without composing a message from scratch."
          },
          {
            stepId: "function3-step4",
            screenshot: "function3_03_summary.png",
            stateLabel: "Unlocked keepsake",
            stateHint: "The final state presents a lasting family memory.",
            position: { x: "50%", y: "49%", width: "74%", height: "56%" },
            tooltipTitle: "View the unlocked keepsake",
            tooltipBody: "The final card explains the keepsake earned this week.",
            requirementBadges: ["Easy to Start"],
            suggestedAction: "Read the unlocked keepsake card.",
            designValue: "Weekly activity is turned into a small memory object worth revisiting."
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
