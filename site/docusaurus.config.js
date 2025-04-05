// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'discord.css',
  tagline: 'Imagine a style',
  favicon: 'img/dcs.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'edwin-shdw', // Usually your GitHub org/user name.
  projectName: 'discord.css', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  future: {
    experimental_faster: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/edwin-shdw/discord.css/tree/main/site',
        },
        theme: {
          customCss: [
            './src/styles/styles.scss',
          ],
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/dcs.svg',
      navbar: {
        logo: {
          alt: 'discord.css',
          src: 'img/discord-css.svg',
          width: 144,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/edwin-shdw/discord.css',
            className: 'icon-link icon-link--github',
            title: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Introduction',
                to: '/docs/getting-started/introduction',
              },
              {
                label: 'Changelog',
                to: 'https://github.com/edwin-shdw/discord.css/releases',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/edwin-shdw/discord.css',
              },
              {
                label: 'Issues',
                href: 'https://github.com/edwin-shdw/discord.css/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} discord.css<br>Code licensed <a href="https://github.com/edwin-shdw/discord.css/blob/main/LICENSE" target="_blank">MIT</a>`,
      },
      prism: {
        additionalLanguages: ['bash', 'scss'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // disable light theme until discord.css supports it
      colorMode: {
        defaultMode: 'dark',
      },
    }),
};

module.exports = config;
