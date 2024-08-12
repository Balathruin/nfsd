/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  mw05Sidebar: [
    {
      type: 'category',
      label: 'Most Wanted (2005)',
      link: {
          type: 'generated-index',
		  slug: '/mw05'
        },
      items: [
        'mw05/setup',
        'mw05/info',
        'mw05/simple-any',
        'mw05/inter-any',
        'mw05/info2',
        'mw05/expert-any',
      ],
    },
	{
	  type: 'link',
	  label: 'Speedrun.com',
	  href: 'https://www.speedrun.com/nfsmw05',
	},
	{
	  type: 'link',
	  label: 'Category Extensions',
	  href: 'https://www.speedrun.com/nfsmw05_ce',
	},
  ],
  shiftSidebar: [
    {
      type: 'category',
      label: 'Shift',
      link: {
          type: 'generated-index',
		  slug: '/shift'
        },
      items: [
	    'shift/info',
		'shift/simple-any',
		'shift/exp-any',
		'shift/pro-any',
		'shift/tier-any',
		'shift/tier-100',
		],
    },
	{
	  type: 'link',
	  label: 'Speedrun.com',
	  href: 'https://www.speedrun.com/nfsshift',
	},
  ],
  shift2Sidebar: [{type: 'autogenerated', dirName: 'shift2'}],
};

export default sidebars;