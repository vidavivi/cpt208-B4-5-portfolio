# Screenshot Plan

This document records the required screenshot set for the portfolio walkthrough. It should be used both as a capture checklist and as a fallback manual recapture guide if any image needs to be refreshed later.

Common settings:

- App shell: root app `/`
- Navigation method: bottom tab switch
- Viewport size: `414 x 769`
- Orientation: portrait mobile

## Function 1: Album

### `function1_01_entry.png`

- Page/tab to open: `Album`
- User action before capture: none after opening the tab
- What to capture: the family album overview cards with image previews and pet-note snippets
- Purpose: establish the entry state and show how the feature begins from a family overview

### `function1_02_interaction.png`

- Page/tab to open: `Album`
- User action before capture: tap a family member card, such as `Mom`
- What to capture: the member-specific album detail view with the large photo and reaction launcher
- Purpose: show the main interaction surface after selecting one member

### `function1_03_result.png`

- Page/tab to open: `Album`
- User action before capture: open a member album, tap the reaction launcher, and select an emoji
- What to capture: the selected reaction shown on the photo and the visible reaction badge below
- Purpose: show the clearest lightweight feedback state

### `function1_04_feedback.png`

- Page/tab to open: `Album`
- User action before capture: open `Grace`'s album and expand the summary card
- What to capture: the expanded summary card over the album stream
- Purpose: show how multiple small updates are condensed into a readable recap

### Optional: `function1_05_interaction-menu.png`

- Page/tab to open: `Album`
- User action before capture: open a member album and tap the reaction launcher without choosing an emoji
- What to capture: the emoji-picker overlay
- Purpose: optional intermediate state for a more detailed guided tour

## Function 2: Jar

### `function2_01_entry.png`

- Page/tab to open: `Jar`
- User action before capture: none after opening the tab
- What to capture: the default jar view with the pet bubble, quick-add button, and privacy framing text
- Purpose: establish the function before any modal is opened

### `function2_02_interaction.png`

- Page/tab to open: `Jar`
- User action before capture: tap the `+` button to add today's mood bead
- What to capture: the mood editor modal with mood options and share controls
- Purpose: show the primary input flow and the constrained mood vocabulary

### `function2_03_result.png`

- Page/tab to open: `Jar`
- User action before capture: switch to a family account view such as `Mum`, then scroll to the shared jar and shared-status area
- What to capture: the shared jar plus the top of the family-visible status card
- Purpose: show how private mood logging becomes filtered family awareness

### `function2_04_feedback.png`

- Page/tab to open: `Jar`
- User action before capture: in a family account view, tap a care reaction such as `Hug`
- What to capture: the shared-status card with the visible feedback message after the response
- Purpose: show the bounded family feedback state

## Function 3: Weekly Echo

### `function3_01_entry.png`

- Page/tab to open: `Echo`
- User action before capture: none after opening the tab
- What to capture: the weekly recap board with its main summary and metric tiles
- Purpose: establish the reflection layer of the product

### `function3_02_interaction.png`

- Page/tab to open: `Echo`
- User action before capture: navigate to the keepsake board using the board arrows
- What to capture: the keepsake board with collected drops, reveal CTA, and quick pet reply area
- Purpose: show the transition from recap to reward interaction

### `function3_03_summary.png`

- Page/tab to open: `Echo`
- User action before capture: complete the keepsake reveal or capture the strongest recap/result state available from the frontend-only flow
- What to capture: the weekly keepsake result state or the strongest summary state suitable for the portfolio
- Purpose: provide a final reflection/reward image for the walkthrough conclusion

## Manual Recapture Notes

If any screenshot needs to be captured manually later:

1. Run the frontend locally.
2. Open the root app shell.
3. Use the bottom navigation to switch to the correct tab.
4. Follow the per-image action above exactly.
5. Save the image using the same filename into `portfolio-highfi-handoff/screenshots/`.

## Manual Capture Status

This section should be updated if any image cannot be automatically generated from the local frontend.

- Pending manual capture: none unless noted in the final verification summary
