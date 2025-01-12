<p align="center">
  <img src="./site/static/img/discord-css.svg" alt="discord.css logo">
</p>

# discord.css
[![npm](https://img.shields.io/npm/v/discord.css)](https://www.npmjs.com/package/discord.css)

> [!WARNING]
> This package is still in development and might change at any time.

## About
discord.css is a lightweight stylesheet library designed for styling Discord components. It allows you to create realistic previews of components such as modals or messages. You can use the ready-to-use CSS files or integrate it as a module in your SASS projects.

## Getting started

### Using with CSS
For production, it is recommended to use the [minified version](./dist/css/discord.min.css).
If you need to customize the styles, you can work with the [non-minified version](./dist/css/discord.css).


### Using with SASS

#### Installation Options

You can include the library in your project using one of the following methods:

- [Download the latest release](https://github.com/edwin-shdw/discord.css/releases)
- Clone the repository:
  ```bash
  git clone git@github.com:edwin-shdw/discord.css.git
  ```
- Install via package managers:
  ```bash
  npm install discord.css
  bun install discord.css
  yarn add discord.css
  pnpm add discord.css
  ```

#### Importing in SASS
To include the entire library:

```scss
@use "/node_modules/discord.css/scss";

// Add your custom styles here
```

Or selectively include only the components you need:
```scss
// 1. Load the root styles first
@use "/node_modules/discord.css/scss/root";

// 2. Include specific components
@use "/node_modules/discord.css/scss/button";
@use "/node_modules/discord.css/scss/embed";
@use "/node_modules/discord.css/scss/message";
// ...

// 3. Add your custom styles here
```

### Prefix
To avoid collision with your own codebase, discord.css uses a prefix. This prefix will be applied to all css variables as
well as all class names.

By default, the prefix is set to `dc-` (note the trailing dash). You can customize it by loading the module with a
configuration. Here's an example using `fn-` as prefix:

#### Setting a Global Prefix
```scss
@use "/node_modules/discord.css/scss" with ($prefix: "fn-");
```

#### Prefix for Selective Modules
If you're importing specific parts of discord.css, load the `variables` module with your desired prefix first:
```scss
// 1. Load the root styles first
@use "/node_modules/discord.css/scss/variables" with ($prefix: "fn-");
@use "/node_modules/discord.css/scss/root";

// 2. Include specific components
@use "/node_modules/discord.css/scss/button";
@use "/node_modules/discord.css/scss/embed";
@use "/node_modules/discord.css/scss/message";
// ...

// 3. Add your custom styles here
```

> [!NOTE]
> The `variables` module must always be loaded before any other discord.css module when setting a custom prefix.

## Acknowledgement

Brand and Design by [Discord](https://discord.com/).

## License

Code released under the [MIT License](./LICENSE).
