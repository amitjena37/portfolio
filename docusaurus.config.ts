import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Amit Kumar Jena',
  tagline: 'Staff Technical AI Content Strategist | AI Documentation Engineer',
  favicon: 'img/favicon.ico',

  url: 'https://your-github-username.github.io', 
  baseUrl: '/',

  organizationName: 'your-github-username', 
  projectName: 'portfolio', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/your-github-username/portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-github-username/portfolio/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Amit Kumar Jena',
      logo: {
        alt: 'Portfolio Logo',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Portfolio'},
        {to: '/blog', label: 'AI Insights', position: 'left'},
        {
          href: 'https://github.com/amitjena37',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/amit-k-jena',
          label: 'LinkedIn',
          position: 'right',
      },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Amit Kumar Jena. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;