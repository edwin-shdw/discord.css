const fs = require('node:fs');
const path = require('node:path');
const pkg = require('../package.json');

const distDir = path.join(__dirname, '..', '/dist/css');
const files = fs.readdirSync(distDir).filter(file => file.endsWith('.css'));
const year = new Date().getFullYear();

const banner = (
`/*
 * discord.css v${pkg.version}
 * Copyright 2023-${year} edwin-shdw and contributors (https://github.com/edwin-shdw/discord.css/graphs/contributors)
 * Licensed under MIT (https://github.com/edwin-shdw/discord.css/blob/main/LICENSE)
 */`
);

for(const file of files) {
  const data = fs.readFileSync(`${distDir}/${file}`).toString().split("\n");
  data.splice(0, 0, banner);
  const text = data.join("\n");

  fs.writeFile(`${distDir}/${file}`, text, function (err) {
    if (err) return err;
  });
}
