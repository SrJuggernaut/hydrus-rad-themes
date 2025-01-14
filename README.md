# hydrus-rad-themes

A set of themes for [QT](https://www.qt.io/) using Qt Style Sheets, especially for [Hydrus](https://github.com/hydrusnetwork/hydrus).

# Features

This themes uses the [Radix UI](https://www.radix-ui.com/colors) color palettes, this guives you a consistent look and feel for your Hydrus instance.

## Fonts

By default this theme uses [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) font, which is a monospace font that is easy to read and easy to use. Over this font the theme uses the [RobotoMono Nerd Font Mono](https://www.nerdfonts.com/font-downloads) font, which is a modified version of the Roboto Mono font [with icons](https://www.nerdfonts.com/cheat-sheet) that can be user all over the app.

This theme also includes the 'Noto Color Emoji' font, which is a font that includes emoji glyphs, so you can use emojis in your Hydrus instance.

> [!NOTE]
> The theme uses Mono fonts to let the icons look better over the interface, but you can change this by modifying the `fonts` variable in the code.

# Usage

To use this theme, you need to add this theme to your Hydrus instance.

## Installation

- Copy one or various of the `qss` files in the `dist` folder to the `static\qss` folder of your Hydrus instance.
- Copy the `resources` folder to the `static\qss\resources` folder of your Hydrus instance.
- Enable the theme in your Hydrus instance `file > options > style`.
- Apply the theme to see all the changes.

# Build

If you want to modify this theme, you can build it yourself. To do this, you need to have [bun](https://bun.sh/) installed.

## Install dependencies

```bash
bun install
```

## Modify the theme

To modify the theme, you need to modify the `index.ts` file.

## Build the theme

```bash
bun run build
```

## Develop

If you want to make multiple changes to the theme and see them in real time, you can use the `watch` command.

```bash
bun run watch
```

this will watch for changes in the `index.ts` file and rebuild the theme automatically.
