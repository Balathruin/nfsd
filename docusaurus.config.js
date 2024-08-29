// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Need for SpeedDocs',
  tagline: 'Speedrunning documentation for Need for Speed games.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://balathruin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/nfsd',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Balathruin', // Usually your GitHub org/user name.
  projectName: 'nfsd', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
		  routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          /* Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',*/
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nfsd-logo.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'NFSD',
        logo: {
          alt: 'NFSD',
          src: 'img/nfsd-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'ug1Sidebar',
            position: 'left',
            label: 'UG1',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mw05Sidebar',
            position: 'left',
            label: 'MW05',
          },
          {
            type: 'docSidebar',
            sidebarId: 'carbonSidebar',
            position: 'left',
            label: 'Carbon',
          },
          {
            type: 'docSidebar',
            sidebarId: 'shiftSidebar',
            position: 'left',
            label: 'Shift',
          },
          {
            type: 'docSidebar',
            sidebarId: 'shift2Sidebar',
            position: 'left',
            label: 'Shift 2',
          },
          {
            href: 'https://github.com/Balathruin/nfsd',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Black Box Games',
            items: [
              {
                label: 'Underground',
                to: '/ug1',
              },
              {
                label: 'Most Wanted (2005)',
                to: '/mw05',
              },
              {
                label: 'Carbon',
                to: '/carbon',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Speedrun.com',
                href: 'https://www.speedrun.com/series/need_for_speed',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/0q21vTfIVQ7xibxy',
              },
            ],
          },
          {
            title: 'Other Games',
            items: [
              {
                label: 'Shift',
                to: '/shift',
              },
              {
                label: 'Shift 2: Unleashed',
                to: '/shift2',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Need for SpeedDocs by Balathruin, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
	  'docusaurus-lunr-search',
	],
};

export default config;
