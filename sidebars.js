/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docSidebar: [
    {
      type: 'category',
      label: '🏁 Quick Start',
      items: ['intro', 'about', { type: 'link', label: 'Climate Solutions', href: '/solutions' }, 'contribute'],
    },
    {
      type: "doc",
      label: "👩🏽‍🚀 Job Seekers",
      id: 'jobseeker',
    },
    {
      type: "doc",
      label: "⚡️ Startups",
      id:'about',
    },
    {
      type: 'doc',
      label: '💰 Investors',
      id: 'about',
    },
    {
      type: 'doc',
      label: '🌍 Resources',
      id: 'about',
    },
    {
      type: "link",
      label: "🗞️ News",
      href: "/blog",
    },
  ],
};

// By default, Docusaurus generates a sidebar from the docs folder structure
// docSidebar: [
//   {
//     type: "category",
//     label: "Docs",
//     items: ["intro", "about", "jobseeker", "startup"],
//   },
// {
//   type: "link",
//   label: "Blog",
//   href: "/blog",
// },
// { type: "autogenerated", dirName: "." },
// ],
