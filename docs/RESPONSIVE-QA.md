# Responsive QA — Symphony Bath & Candle

The source of truth for all ten concepts is `assets/showcase-v4.css`, with corrective breakpoint rules in `assets/responsive-fixes.css`. Both sheets are loaded on every `demos/<concept>/index.html`.

## Viewport matrix

A GitHub Actions workflow runs Chromium against **all ten sites at 13 viewport widths**: 320, 360, 375, 390, 430, 480, 600, 768, 820, 1024, 1280, 1440 and 1920 px. This totals **130 browser cases**.

It verifies the site returns HTTP 200, JS renders, the document does not horizontally overflow, heading text does not clip or fall off-screen, and the header stays inside the viewport. Screenshots are captured at 320, 390, 768 and 1440 px for all ten designs (40 images). The workflow preserves reports even when it finds an issue.

Open [Actions → Responsive viewport audit](https://github.com/BradleyMatera/symphonycandle/actions/workflows/responsive-audit.yml) for passing/failing results and downloadable screenshot artifacts.

## Manual follow-up required

Automated geometry checks cannot guarantee every typographic detail, image crop, animation, screen-reader experience, touch interaction or actual device/browser render. Review the screenshots and test representative devices, landscape orientation, and Safari/WebKit before calling the store production-ready.

The audit checks GitHub Pages **source content locally**, to avoid a race with publishing. Check the separate GitHub Pages deployment workflow before assuming the updated public site is live.

## Known fix

- The original Atelier `THE ART OF THE EVERYDAY` masthead had `white-space: nowrap` and `overflow: hidden`, which clipped text at mid-sized viewports. The overriding stylesheet permits line wrapping and fluid sizing.
- The other nine layouts receive design-specific tablet, mobile and narrow-phone constraints while retaining their distinct compositions.
