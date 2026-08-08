# nuxt-layer-flexoki

[Flexoki](https://stephango.com/flexoki) color theme as a Nuxt Layer, for projects using [Nuxt UI](https://ui.nuxt.com/) (v4) + Tailwind CSS v4.

This is an overlay-style theme layer: it ships no dependencies and assumes `@nuxt/ui` is already installed in your project (declared as a peer dependency).

## What it provides

- `css/palette.css` — the full Flexoki palette as Tailwind v4 `@theme` tokens. Flexoki's 8 hues replace the matching Tailwind scales, and **every other Tailwind color scale is aliased to its nearest Flexoki color** (`neutral`/`gray`/`slate`/`zinc`/`stone` → `flexoki-base`, `amber` → `orange`, `teal` → `cyan`, ...), so any color utility stays inside the Flexoki gamut and nothing falls back to `currentColor`
- `app/app.config.ts` — declares `ui.colors` (`primary: 'orange'`, `neutral: 'flexoki-base'`) so Nuxt UI resolves its color chain (`--ui-color-*`) from the Flexoki palette. Override any of these in your own `app.config.ts`
- `app/assets/css/nuxt-ui.css` — fine-tunes the Nuxt UI semantic variables (`--ui-bg`, `--ui-text`, `--ui-border`, ...) to Flexoki's official light/dark semantics with `light-dark()`. Registered automatically via this layer's `nuxt.config.ts`

## Usage

1. Extend the layer in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ['github:ryuhei373/nuxt-layer-flexoki#v0.2.0'],
  modules: ['@nuxt/ui'],
});
```

2. Import the palette from your root CSS (e.g. `app/assets/css/main.css`):

```css
@import "tailwindcss";
@import "@nuxt/ui";
@import "#layers/flexoki/css/palette.css";
```

The second step is required because Tailwind v4 only processes `@theme` blocks in CSS that goes through its pipeline (the root CSS importing `tailwindcss`). CSS registered by a layer's `nuxt.config.ts` bypasses that pipeline, so the palette must be imported from your root CSS. The `#layers/flexoki` alias is provided by this layer's `$meta.name`.

## License

MIT. Flexoki color scheme by [Steph Ango](https://stephango.com/) (MIT).
