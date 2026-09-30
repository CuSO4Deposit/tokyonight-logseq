# 🌃 Tokyo Night for [Logseq](https://logseq.com/)

A clean, dark theme for Logseq based on the [Tokyo Night](https://github.com/folke/tokyonight.nvim) color palette.

> Ported from [Catppuccin for Logseq](https://github.com/catppuccin/logseq).

## Variants

| Flavor            | Mode  |
| ----------------- | ----- |
| Tokyo Night       | dark  |
| Tokyo Night Storm | dark  |
| Tokyo Night Moon  | dark  |
| Tokyo Night Day   | light |
| Tokyo Night OLED  | dark  |

## Usage

### Local install (unpacked plugin)

Use this to try the theme without publishing it.

1. `Settings` > `Advanced` > enable **Developer mode**.
2. Click the plugin manager icon in the top-right toolbar > **Load unpacked plugin**.
3. Select this repository folder (the one containing `package.json`).
4. Pick a flavor under `Settings` > `Themes`. Accent color is under `Settings` > `Plugins` > `Tokyo Night`.

### Logseq Plugin Marketplace

1. Search for `Tokyo Night` in `Plugins` > `Marketplace` > `Themes` and install the plugin.
2. Choose the appropriate variant from `Settings` > `Themes`.

> [!WARNING]
> The theme does **not** support Logseq's built-in accent colors. Select **no accent color** or **Logseq classical color** (one of the first two) under `Settings` > `General` for maximum compatibility.

### Importing external CSS

Add one of the following lines at the very top of your `custom.css` and restart Logseq:

```css
@import url("https://cdn.jsdelivr.net/gh/CuSO4Deposit/tokyonight-logseq@main/tokyonight-night.css");
@import url("https://cdn.jsdelivr.net/gh/CuSO4Deposit/tokyonight-logseq@main/tokyonight-storm.css");
@import url("https://cdn.jsdelivr.net/gh/CuSO4Deposit/tokyonight-logseq@main/tokyonight-moon.css");
@import url("https://cdn.jsdelivr.net/gh/CuSO4Deposit/tokyonight-logseq@main/tokyonight-day.css");
@import url("https://cdn.jsdelivr.net/gh/CuSO4Deposit/tokyonight-logseq@main/tokyonight-oled.css");
```

Or set it in `config.edn`:

```clojure
:custom-css-url "@import url('https://cdn.jsdelivr.net/gh/CuSO4Deposit/tokyonight-logseq@main/tokyonight-night.css');"
```

## Switching accent color

This option is only available when the theme is installed through the Plugins Marketplace.

1. Open `Settings` > `Plugins` > `Tokyo Night`.
2. Pick a color from the dropdown under `TNAccent`.

## Development

The CSS is compiled from SCSS with [dart-sass](https://sass-lang.com/dart-sass/).

```bash
npm install
npm run build   # compile scss/ to ./*.css
npm run start   # watch for changes
```

The palette lives in `scss/_utils.scss`; each flavor is a tiny entry file in `scss/`.

## Publishing to the marketplace

The theme is a Logseq theme plugin, so it is published the same way as any plugin.

1. Push this repo to GitHub.
2. Tag a release. The `.github/workflows/publish.yml` workflow builds the CSS, zips the plugin, and attaches `logseq-tokyonight-<tag>.zip` to a draft release.
3. Publish the release (make sure the zip is attached, not just "Source code").
4. Fork [`logseq/marketplace`](https://github.com/logseq/marketplace) and add a package directory with **two** files:

   ```
   packages/logseq-tokyonight/manifest.json
   packages/logseq-tokyonight/icon.png
   ```

   The `icon` field is resolved relative to the marketplace package directory (e.g. `packages/logseq-tokyonight/icon.png`), not against your theme repo, so the icon must be committed there too. Copy `assets/icon.png` from this repo.

   ```json
   {
     "title": "Tokyo Night",
     "description": "🌃 A clean dark theme based on the Tokyo Night palette. Includes Night, Storm, Moon, Day, and OLED flavors.",
     "author": "CuSO4Deposit",
     "repo": "CuSO4Deposit/tokyonight-logseq",
     "icon": "icon.png",
     "theme": true,
     "supportsDB": true
   }
   ```

5. Open a pull request. See the marketplace [README](https://github.com/logseq/marketplace#how-to-submit-your-plugin) for the current review checklist.

## Thanks

- [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim) for the palette.
- [Catppuccin](https://github.com/catppuccin/logseq) for the Logseq theme structure this is based on.

## License

[MIT](./LICENSE)
