# Symphony Bath & Candle — Ten genuinely different compositions

Instead of ten recolored copies of the same square product grid, these prototypes now use separate visual systems while sharing only the content model, accessibility primitives, photograph source records, and interactive functionality.

| Concept | Composition approach | Archive presentation |
|---|---|---|
| Atelier | editorial | asymmetric journal cards |
| Nocturne | cinema | staggered masonry with variable portrait heights |
| Botanical Studio | organic | arched organic masks and staggered clusters |
| Modern Apothecary | catalogue | horizontally scrollable numbered product rail |
| Rose Atelier | collage | rotated scrapbook-style overlapping photo cards |
| Gallery House | exhibition | museum labels and uneven two-column exhibits |
| Sunday Market | market | circular pop-art product crops |
| Ritual Collective | zen | large negative space and alternate two-column pairing |
| Heritage Craft | newspaper | four-column vintage newspaper with featured spreads |
| Studio Monochrome | brutalist | high-contrast typography and hard-edged 2-column tiles |

## Interaction behavior
Every preview retains a category filter, accessible detail dialog, temporary saved-inspiration panel, mobile navigation, and direct links to the master gallery. Saved images are session-only and are **not** a Shopify wishlist or customer account.

## Shopify port mapping
- Hero -> editable custom hero section per selected design
- Archive -> featured collection / collection products, sourced from real Shopify products
- Story -> editable rich text + image section
- Questions -> FAQ section with editable blocks
- Header/footer -> Shopify navigation and policy links
- Detail dialog -> production product page (real variants, prices, cart, checkout)

**Important:** The shared theme scaffold in `shopify-theme/` does not yet implement ten separate hero and collection compositions. This is the next Shopify engineering step after visual selection. The GitHub Pages previews are not live e-commerce and do not imply products are available.
