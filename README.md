# About
Discord.css is a stylesheet looking almost like Discords. It is ideal for creating previews of components like modals or
messages. You can use the production-ready CSS files or use it as a module in your SASS.

You can get a preview [here](https://edwin-shdw.de/projects/discord.css/preview/)!

## Getting started
You can download Discord.css directly from this repository or from npm.
```
npm install discord.css
```

## Use it with CSS

If you want to customize the stylesheet you should download the [discord.css](./dist/css/discord.css) file. However,
there is a [minified version](./dist/css/discord.min.css) which you should prefer using. 

## Use it with SASS

You have two options for importing Discord.css's files: include all of Discord.css, or pick the parts you need.

```scss
// Option A: Include all of Discord.css

@use "/node_modules/discord.css/scss";

// Then add additional custom code here
```

```scss
// Option B: Include parts of Discord.css

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
To avoid collision with your own codebase Discord.css uses a prefix. This prefix will be applied to all css variables as
well as all class names.

By default, the prefix is set to `dc-` (note the trailing dash). You can change it by loading the module with a
configuration. Here's an example using `fn-` as prefix:
```scss
@use "/node_modules/discord.css/scss" with ($prefix: "fn-");
```

If you are loading parts of Discord.css you will need to load the `variables` module instead.
```scss
@use "/node_modules/discord.css/scss/variables" with ($prefix: "fn-");
```

**Note**: You must load the variables module before any other Discord.css module.

## Acknowledgement

Brand and Design by [Discord](https://discord.com/).

## License

Code released under the [MIT](./LICENSE).
