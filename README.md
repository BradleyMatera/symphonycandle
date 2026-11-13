# Symphony Bath & Candle — 10 Interactive Storefront Concepts

**Matera Digital × Symphony Bath & Candle** · proposal workspace, public brand-reference archive, and GitHub Pages design gallery.

> **Project status:** Ten interactive storefront **mockups** are published through GitHub Pages. They are design proposals—not ten installed Shopify themes, live product catalogs, or checkout-enabled stores. The client's actual Shopify storefront has **not** been modified, and no contract/design/price approval is recorded.

## Composition redesign — November 13, 2026

**The ten live mockups now have ten different page structures**, not just different palettes. The design engine and composition CSS are shared, while the layouts intentionally vary: editorial journal, cinematic immersive, botanical orbit, horizontal product rail, romantic collage, museum exhibition, playful circular market, minimalist zen, broadsheet newspaper, and graphic brutalism.

- [Ten-composition implementation matrix](docs/COMPOSITION-SYSTEM.md)
- [New shared interaction logic](assets/showcase-v4.js)
- [New responsive style systems](assets/showcase-v4.css)

All ten still use real source photographs, are GitHub Pages previews, and **do not run Shopify checkout**. The Shopify theme scaffold is separate; porting the selected design's unique composition into Shopify sections remains necessary.

## Latest upgrade — custom art and Shopify-portable source

The ten hosted concepts now include added editorial layouts, responsive photo collages, interactive archive lookbooks, and **30 original procedural PNG assets** (a textured surface, editorial panel and decorative seal for each concept). The PNGs are original procedural graphic artwork, not AI-rendered product photography; the image-generation service failed during this build.

- **[Browse the ten updated interactive concepts](https://bradleymatera.github.io/symphonycandle/)**
- **[Custom PNG art packs](assets/concepts/)** — `assets/concepts/<concept>/signature-texture.png`, `editorial-panel.png`, and `decorative-seal.png`
- **[Shared front-end enhancements](assets/lux-enhancements.css)** and **[interactivity](assets/lux-enhancements.js)**
- **[Shopify Online Store 2.0 theme source](shopify-theme/)** — Liquid, native product and cart support, sections, JSON templates, ten visual style settings, and all 30 PNG graphics copied into Shopify's flat `assets/` directory
- **[Shopify integration and handoff guide](docs/SHOPIFY-PORT.md)**

**Deployment distinction:** GitHub Pages hosts working visual mockups, not Shopify checkout. The Shopify theme files are an implementation scaffold and have **not** been installed, validated with Shopify Theme Check, or end-to-end tested in the client's store. Pricing, inventory, shipping, product claims, and photo permissions must be confirmed before production use.

## 🚀 Open the demos

**[OPEN THE MAIN GALLERY — ALL 10 DESIGNS](https://bradleymatera.github.io/symphonycandle/)**

The gallery lets you browse and compare all ten concepts, filter styles, and search concept names.

| # | Concept | Design direction | Live demo | Source |
|---|---|---|---|---|
| 01 | **Original Atelier** | Warm, editorial boutique; the original preserved mockup | [Open Atelier](https://bradleymatera.github.io/symphonycandle/demos/atelier/) | [index.html](demos/atelier/index.html) |
| 02 | **Nocturne** | Dark luxury, gold accents, atmospheric photography | [Open Nocturne](https://bradleymatera.github.io/symphonycandle/demos/nocturne/) | [index.html](demos/nocturne/index.html) |
| 03 | **Botanical Studio** | Organic, nature-led, softly shaped imagery | [Open Botanical](https://bradleymatera.github.io/symphonycandle/demos/botanical/) | [index.html](demos/botanical/index.html) |
| 04 | **Modern Apothecary** | Clean, minimalist, product-led layouts | [Open Apothecary](https://bradleymatera.github.io/symphonycandle/demos/modern-apothecary/) | [index.html](demos/modern-apothecary/index.html) |
| 05 | **Rose Atelier** | Romantic, soft-colored boutique | [Open Rose Atelier](https://bradleymatera.github.io/symphonycandle/demos/rose-atelier/) | [index.html](demos/rose-atelier/index.html) |
| 06 | **Gallery House** | Editorial, art-gallery-style presentation | [Open Gallery House](https://bradleymatera.github.io/symphonycandle/demos/gallery-house/) | [index.html](demos/gallery-house/index.html) |
| 07 | **Sunday Market** | Bright, colorful, gifting-oriented retail | [Open Sunday Market](https://bradleymatera.github.io/symphonycandle/demos/sunday-market/) | [index.html](demos/sunday-market/index.html) |
| 08 | **Ritual Collective** | Calm, contemporary sea-glass palette | [Open Ritual Collective](https://bradleymatera.github.io/symphonycandle/demos/ritual-collective/) | [index.html](demos/ritual-collective/index.html) |
| 09 | **Heritage Craft** | Warm, artisan, heritage-inspired storytelling | [Open Heritage Craft](https://bradleymatera.github.io/symphonycandle/demos/heritage-craft/) | [index.html](demos/heritage-craft/index.html) |
| 10 | **Studio Monochrome** | Bold black-and-white typography and photography | [Open Monochrome](https://bradleymatera.github.io/symphonycandle/demos/studio-monochrome/) | [index.html](demos/studio-monochrome/index.html) |

**Main gallery source:** [root `index.html`](index.html).  
**Designs index and implementation notes:** [`demos/README.md`](demos/README.md).

### What works in the demos

- Responsive desktop/mobile layouts and internal navigation
- Existing Symphony product and branding photographs
- Gallery filters by imagery category, detail-view modals, and search
- An inspiration-saving interaction (temporary browser-session state; **not a Shopify wishlist account**)
- Links back to the ten-concept comparison gallery

**Important limitations:** Demo photo cards are visual references, not verified purchasable products. The static GitHub Pages demos do **not** process payments, call a Shopify Storefront API, read live inventory, or create Shopify orders. Prices, ingredients, stock, policies, variants, and claims must be approved by the business before a real launch.

## Custom art and reusable code

Each concept has three original PNG design assets. These are **abstract, code-generated graphic treatments**—not AI-rendered product photography, custom product cutouts, or representations of inventory. Existing product photos come from Symphony's archived public imagery. The image-generation service failed, so photorealistic composite/cutout artwork is **not** included in this release.

- [All 30 source graphics](assets/concepts/)
- [Custom CSS used by every demo](assets/lux-enhancements.css)
- [Interactive gallery/FAQ implementation](assets/lux-enhancements.js)
- [Shopify theme assets](shopify-theme/assets/)
- [Porting and verification requirements](docs/SHOPIFY-PORT.md)

## 🗂 Repository map

```text
/
├── index.html                  # Live GitHub Pages comparison gallery
├── demos/
│   ├── README.md               # Demo documentation
│   ├── atelier/index.html
│   ├── nocturne/index.html
│   ├── botanical/index.html
│   ├── modern-apothecary/index.html
│   ├── rose-atelier/index.html
│   ├── gallery-house/index.html
│   ├── sunday-market/index.html
│   ├── ritual-collective/index.html
│   ├── heritage-craft/index.html
│   └── studio-monochrome/index.html
├── assets/
│   ├── brand/                  # Current logo
│   ├── facebook-full/          # 180 archived full-viewer Facebook renditions
│   ├── facebook/               # 16 initial low-resolution previews
│   ├── manifest.json           # Asset provenance, dimensions and SHA-256 hashes
│   ├── gallery.html            # Reference gallery
│   └── README.md               # Asset handling notes
├── docs/                       # Research, planning and client proposal documents
├── AGENTS.md                   # Instructions for future coding agents
└── README.md                   # You are here
```

### Project research and client proposal

| File | What to look for |
|---|---|
| [Project brief](docs/PROJECT-BRIEF.md) | What the client requested; observed vs. unverified information |
| [Proposal plan](docs/PROPOSAL-PLAN.md) | Proposed scope, price considerations and delivery path |
| [Client intake checklist](docs/CLIENT-INTAKE.md) | Questions to confirm products, shipping, branding and store access |
| [Research notes](docs/RESEARCH.md) | Business research and source log |
| [Asset review](docs/ASSET-REVIEW.md) | Selected photos, visual direction and cautions |
| [Project status](docs/STATUS.md) | Previous research status and next steps |
| [Asset manifest](assets/manifest.json) | Individual image source records and sizes |
| [Logo](assets/brand/storefront-logo.png) | Existing Symphony logo |

### External project links

- **Matera Digital portfolio demos:** https://bradleymatera.dev/demos/
- **Client's existing Shopify domain:** https://www.symphonybathandcandle.com/ — observed displaying Shopify's opening-soon page on Nov 13, 2026; not the mockup site
- **Client Facebook:** https://www.facebook.com/people/Symphony-Bath-and-Candle/100085785163287/
- **Public proposal gallery:** https://bradleymatera.github.io/symphonycandle/

## 🛍 Shopify integration plan

GitHub Pages is hosting the **design previews**, not a Shopify store. To turn a selected preview into an operational Shopify theme:

1. Have the client choose a concept and approve photos, text and product descriptions.
2. Build or adapt that design as a Shopify **Online Store 2.0** theme using Liquid, JSON templates, sections, blocks and theme settings.
3. Bind product cards and product detail screens to actual Shopify product/variant objects; do not guess inventory or prices.
4. Add collection filters, cart actions, search, and Shopify-hosted checkout using Shopify-supported theme patterns.
5. Connect and verify merchant policies, shipping, taxes, contact forms, domain, analytics and mobile accessibility.
6. Test the full product → variant → cart → checkout flow in the client's authorized Shopify store before publishing.

**No Shopify theme is currently installed into the client's store by this repository.** The hosted HTML proposals are not automatically installable themes.

## 🌐 GitHub Pages / deployment

- **Published URL:** https://bradleymatera.github.io/symphonycandle/
- **Repo branch:** `main`
- **Deployment method:** GitHub Pages native branch build from `main` (the competing custom deployment workflow was removed after it caused cancelled deployments).
- **Workflow runs:** [GitHub Actions](https://github.com/BradleyMatera/symphonycandle/actions)
- **Pages settings (owner only):** [Repository Pages settings](https://github.com/BradleyMatera/symphonycandle/settings/pages)

Pushing changes to `main` triggers GitHub Pages' native build and deployment. Check the latest **pages build and deployment** run in Actions. A previous custom workflow was removed to avoid competing deployments. If a page seems old, consult Actions and refresh after the latest run succeeds.

## Brand asset rights and privacy

The archive contains **197 image files**: one current website logo, 180 Facebook full-viewer renditions (not guaranteed camera originals), and 16 low-resolution previews. These remain the property of the respective rights holders. Their presence here does not grant a reuse license or imply approval for a commercial launch.

The public repository intentionally omits private emails, credentials, billing details and customer communications. Obtain approval before commercial reuse of assets and keep any Shopify credentials out of GitHub.

## Project owner

**Matera Digital** · https://bradleymatera.dev/  
**Repository:** https://github.com/BradleyMatera/symphonycandle
