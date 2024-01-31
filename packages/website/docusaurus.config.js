// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const url = 'https://janghye0k.github.io';
// const baseUrl = '/';
const baseUrl = process.env.NODE_ENV === 'development' ? '/' : '/doumi';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doumi',
  tagline: 'Utility library for JavaScript',
  favicon: 'favicons/favicon.ico',

  // Set the production url of your site here
  url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'janghye0k', // Usually your GitHub org/user name.
  projectName: 'doumi', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        htmlLang: 'en',
      },
      // ko: {
      //   htmlLang: 'ko',
      // },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsed: false,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {any} */ (
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        ({
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          language: ['en'],
        })
      ),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keyword', content: 'javascript, utilities, utility, doumi' },
      ],
      headTags: [
        {
          tagName: 'script',
          attributes: {
            type: 'application/ld+json',
          },
          innerHTML: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: url + baseUrl,
            name: 'Doumi',
            author: {
              '@type': 'Person',
              name: 'JangHyeok Kim',
            },
            description: 'Utility library for JavaScript',
            sameAs: ['https://www.npmjs.com/package/doumi'],
          }),
        },
      ],
      image: 'images/doumi.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        title: 'DOUMI',
        logo: {
          alt: 'Doumi Logo',
          src: 'images/doumi_icons.png',
          className: 'doumi-logo',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/demo', label: 'Demo', position: 'left' },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/janghye0k/doumi',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        copyright: `Doumi © 2024, JangHyeok Kim`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
