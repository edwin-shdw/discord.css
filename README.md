# discord.css
[![npm](https://img.shields.io/npm/v/discord.css)](https://www.npmjs.com/package/discord.css)

> [!WARNING]
> This package is still in development and might change at any time.

## About
discord.css is a stylesheet library for styling Discord components. It is ideal for creating previews of components like
modals or messages. You can use the production-ready CSS files or use it as a module in your SASS.

## Getting started

### Use it with CSS
There is a [minified version](./dist/css/discord.min.css) which you should prefer using. However, if you want to
customize the stylesheet you can download the [discord.css](./dist/css/discord.css) file which is not minified.


### Use it with SASS

First install the library
- [Download the latest release](https://github.com/edwin-shdw/discord.css/releases)
- Clone the repo: `git clone https://github.com/edwin-shdw/discord.css.git`
- Install with NPM: `npm install discord.css`
- Install with bun: `bun install discord.css`
- Install with yarn: `yarn add discord.css`
- Install with pnpm: `pnpm add discord.css`

Then you can include all of discord.css:

```scss
@use "/node_modules/discord.css/scss";

// Then add additional custom code here
```

or only pick the parts you need:
```scss
// 1. Include the root first
@use "/node_modules/discord.css/scss/root";

// 2. Include the parts you need
@use "/node_modules/discord.css/scss/button";
@use "/node_modules/discord.css/scss/embed";
@use "/node_modules/discord.css/scss/message";
// ...

// 3. Then add additional custom code here
```

### Prefix
To avoid collision with your own codebase discord.css uses a prefix. This prefix will be applied to all css variables as
well as all class names.

By default, the prefix is set to `dc-` (note the trailing dash). You can change it by loading the module with a
configuration. Here's an example using `fn-` as prefix:
```scss
@use "/node_modules/discord.css/scss" with ($prefix: "fn-");
```

If you are loading parts of discord.css you will need to load the `variables` module instead.
```scss
@use "/node_modules/discord.css/scss/variables" with ($prefix: "fn-");
```

> [!NOTE]
> You must load the variables module before any other discord.css module.

## Acknowledgement

Brand and Design by [Discord](https://discord.com/).

## License

Code released under the [MIT License](./LICENSE).
