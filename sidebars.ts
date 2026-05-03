import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // This matches the 'sidebarId' we set in docusaurus.config.ts
  tutorialSidebar: [
    {
      type: 'category',
      label: 'The Prompt Lab',
      collapsible: true,
      collapsed: false,
      items: [
        'prompt-lab/agent-fitness',
      ],
    },
    {
      type: 'category',
      label: 'Enterprise AI Docs',
      collapsible: true,
      collapsed: true,
      items: [
        // We're adding this placeholder so the category isn't empty
        'enterprise-ai/modelops-overview', 
      ],
    },
  ],
};

export default sidebars;