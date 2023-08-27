// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { Script } = require('vm');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aelysium Wiki',
  tagline: 'Need help? Click the link below for the wiki',
  favicon: 'images/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.aelysium.group',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aelysium Group', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        maxSearchResults: 6,
      },
      
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./config/sidebars.ts'),
          editUrl:
            'https://github.com/Aelysium-Group/wiki',
        },
        /* The BLOG function is not used and this configuration is useless.
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Aelysium-Group/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'images/og-social-card.jpg',
      navbar: {
        title: 'Aelysium',
        logo: {
          alt: 'Aelysium Logo',
          src: 'images/logo.png',
        },
        items: [
          /*
          {
            type: 'docSidebar',
            sidebarId: 'default_sidebar',
            position: 'left',
            label: 'ALL',
          },
          */
          {
            type: 'docSidebar',
            sidebarId: 'wiki_nav_sidebar',
            position: 'left',
            label: 'Wiki',
          },
          {
            type: 'docSidebar',
            sidebarId: 'plugins_wiki_rusty_connector',
            position: 'left',
            label: 'Rusty Connector',
          },
          {
            type: 'docSidebar',
            sidebarId: 'misc_sidebar',
            position: 'left',
            label: 'Misc',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: 'https://github.com/Aelysium-Group/wiki',
                label: '💖 Help us translate',
              },
            ],
          },
          {
            href: 'https://github.com/Aelysium-Group',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/wiki',
              },
              {
                label: 'Plugins Wiki',
                to: '/wiki/plugins-wiki',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://join.aelysium.group',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Aelysium-Group',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} © Aelysium`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
