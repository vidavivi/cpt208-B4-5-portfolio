# High-Fi Walkthrough Handoff Package

This package is a portfolio handoff for the final three high-fidelity frontend functions in the `208design` app. It is meant for a second Codex working in a separate portfolio project, where the implementation should use static screenshots, hotspot overlays, and guided-tour copy instead of live backend integration.

## Frontend Pages Analysed

The app is a single root-shell frontend with bottom-tab state switching rather than separate URL routes. In `src/app/App.tsx` and `src/app/components/bottom-nav.tsx`, the tab order is:

1. `Home`
2. `Album`
3. `Jar`
4. `Echo`
5. `Me`

This package therefore treats the final three main functions as:

- Page 2: `Album`
  Source component: `src/app/pages/connect-page.tsx`
- Page 3: `Jar`
  Source component: `src/app/pages/jar-page.tsx`
- Page 4: `Weekly Echo`
  Source component: `src/app/pages/weekly-echo-page.tsx`

## What This Package Contains

- `tour-manifest.json`
  Structured data for function metadata, screenshots, walkthrough steps, tooltip content, hotspot positions, and requirement mapping.
- `portfolio-copy.md`
  Portfolio-ready explanatory wording and tooltip copy.
- `screenshot-plan.md`
  Capture instructions and the rationale for each screenshot.
- `screenshots/`
  Captured high-fidelity UI screenshots, if available.

## How The Portfolio Codex Should Use This Package

1. Treat `tour-manifest.json` as the main implementation source.
2. Build a screenshot-based walkthrough section rather than a live app embed.
3. Render each function inside a phone mockup or a constrained portrait viewport.
4. Use the screenshot filenames from `screenshots/`.
5. Use percentage-based hotspot coordinates from the manifest so overlays remain responsive.
6. Use the tooltip titles and body text from the manifest or `portfolio-copy.md`.
7. Keep all interaction states mock-only. Taps should advance the walkthrough, not call APIs.

## Function Summaries

### Page 2: Album

- Source file/component: `src/app/pages/connect-page.tsx` / `ConnectPage`
- UI purpose: show a family photo-sharing flow where updates can carry short pet notes and receive lightweight reactions
- Key UI elements:
  family overview cards, member-specific gallery, range filter, summary card, reaction launcher, reaction badges, upload entry point
- Key interaction states:
  overview list, member detail, expanded summary, reaction selection, visible reaction feedback
- Screenshots needed:
  entry state, detail interaction state, visible reaction result, summary/feedback detail
- Walkthrough focus:
  how the user enters a member album, reacts without starting a chat, and reads a condensed recap of recent updates

### Page 3: Jar

- Source file/component: `src/app/pages/jar-page.tsx` / `JarPage`
- UI purpose: record a daily mood quickly, control its visibility, and support gentle family care responses
- Key UI elements:
  pet bubble, quick-add button, weekly mood strip, mood editor modal, private/soft/full share controls, shared jar, shared-status card, family reaction buttons, private calendar
- Key interaction states:
  default jar view, mood editor modal, shared jar visibility state, family reaction feedback, private calendar section
- Screenshots needed:
  entry state, editor interaction state, shared-result state, family-feedback state
- Walkthrough focus:
  how private tracking becomes filtered family awareness through explicit sharing thresholds

### Page 4: Weekly Echo

- Source file/component: `src/app/pages/weekly-echo-page.tsx` / `WeeklyEchoPage`
- UI purpose: turn small weekly traces into a recap, a keepsake board, and a reflective reward moment
- Key UI elements:
  blackboard carousel, recap metrics, keepsake board, reveal CTA, gift reveal state, pet reply chips
- Key interaction states:
  recap entry board, keepsake interaction board, weekly summary/reward view
- Screenshots needed:
  entry board, keepsake interaction board, summary/result board
- Walkthrough focus:
  how cumulative daily interactions are transformed into reflection and memory-making

## Design Requirement Notes

The repo does not define explicit `DR1`, `DR2`, `DR3`, or `DR4` labels in the visible frontend code or docs. The requirement matrix in this package is therefore inferred from the product logic and UI text.

## Assumptions And Uncertainties

- The three functions are tab states inside the root app shell, not standalone routes.
- Page 2 is visually and functionally `Album`, although the file name is `connect-page.tsx`.
- The portfolio build should not depend on backend calls, even when the original frontend attempts to fetch data.
- Any screenshot that still requires manual capture is documented clearly in `screenshot-plan.md`.
