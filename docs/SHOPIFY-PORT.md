# Shopify porting guide — Symphony Bath & Candle

## Location
Theme source is under [shopify-theme/](../shopify-theme/). To upload, ZIP the **contents** of that directory so `layout/theme.liquid`, `templates/index.json`, and all other theme directories are at the ZIP root.

## What is connected
The scaffold uses native Shopify Liquid objects for real products, variants, collections, cart, search, and checkout. It has merchant-editable sections and a 10-concept style selector. Shopify JSON templates make sections editable and reorderable in the Shopify theme editor.

## What is still required
This is an initial implementation, not an installed or merchant-tested Shopify theme. The merchant must upload and configure the theme, choose palettes and brand imagery, verify its catalog, configure navigation/collections/policies/shipping/tax, and test the full checkout flow. Theme Check and a live Shopify preview test are still pending. No third-party paid apps are required by this code.

## Style selector
Use Theme settings → Design direction to choose a preset. Then change Background, Foreground and Accent to the corresponding concept colors. Custom procedural PNG textures are stored in `assets/` and referenced through Shopify's `asset_url` filter. All ten concepts have independent custom PNG surface textures, including Sunday Market.

## Design sources
[10 hosted prototypes](https://bradleymatera.github.io/symphonycandle/), [source asset manifest](../assets/manifest.json), [brand review](ASSET-REVIEW.md).

## Implementation requirements
* Never hardcode unverified prices, ingredients, reviews, fulfillment promises, or fake products.
* Shopify product data and checkout are rendered only inside the actual store, not GitHub Pages.
* Owner approval is required before production reuse of the captured brand photography.
* Use Shopify-native product form and cart routes; test variant updates, inventory and payment settings with the client.

## Concept asset packs
Each of the ten concepts includes three original procedural PNG assets: signature texture, editorial panel and transparent decorative seal. Copies are also placed in `shopify-theme/assets/` using Shopify-safe flattened filenames, alongside the theme CSS and scripts. The product images in the demo remain archived photos and are not generated product representations.
