# Portfolio High-Fi Handoff

This package regenerates the portfolio walkthrough from the current frontend-only implementation.

The captures and step flow were produced from the local demo frontend with `VITE_DEMO_MODE=true`, so the package stays independent from backend setup and uses seeded interface states only.

## Frontend Structure

- Root shell: `src/app/App.tsx`
- Bottom navigation: `src/app/components/bottom-nav.tsx`
- Album / Connect: `src/app/pages/connect-page.tsx`
- Jar: `src/app/pages/jar-page.tsx`
- Weekly Echo: `src/app/pages/weekly-echo-page.tsx`
- Jar calendar subcomponent: `src/app/components/mood-calendar.tsx`

## Navigation Model

- These three functions are not standalone routes.
- They are tab states inside the root app shell.
- Current tab keys in `App.tsx` are `album`, `jar`, and `echo`.
- Current visible bottom-nav labels are `Album`, `Jar`, and `Echo`.

## Detectable Updates From The Current Frontend

- `Connect` now survives mainly as the internal page/component name `ConnectPage`; the visible tab label is `Album`.
- `Weekly Echo` is still the page heading, but the visible nav label is now `Echo`.
- `Album / Connect` now has a clear two-stage flow: member overview, then per-member gallery detail.
- `Album / Connect` detail now depends on overlay states such as the range dropdown, emoji reaction tray, upload sheet, draft confirm modal, and delete confirmation.
- `Jar` now centers on a mood-candy jar with a private calendar popup, day editor, shared-status care popup, and candy-detail modal.
- `Weekly Echo` now uses a three-board carousel (`summary`, `moments`, `keepsakes`) plus a separate keepsake reveal scene.

## Manifest Compatibility

- `tour-manifest.json` keeps flat function objects with `steps` arrays.
- Each step keeps flat fields for `screenshot`, `target`, `hotspot`, `spotlight`, `title`, `body`, `requirementBadge`, `mockAction`, and `expectedEffect`.
- Screenshot references stay filename-only so the existing portfolio implementation can keep its current screenshot path prefixing.
- Added metadata such as `navLabel`, `tabKey`, `component`, and `entryFiles` is optional and can be ignored by the portfolio code if unnecessary.

## Screenshot Notes

- All screenshots in this package were successfully captured.
- No manual screenshot capture is currently required.
- Captured viewport size is `599 x 769`.

