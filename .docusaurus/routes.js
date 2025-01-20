import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '003'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '48e'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c8e'),
            routes: [
              {
                path: '/docs/category/modules',
                component: ComponentCreator('/docs/category/modules', '46d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/quick-start',
                component: ComponentCreator('/docs/category/quick-start', '016'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/resources',
                component: ComponentCreator('/docs/category/resources', 'c57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/email',
                component: ComponentCreator('/docs/modules/email', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/news',
                component: ComponentCreator('/docs/modules/news', 'fd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/stocks',
                component: ComponentCreator('/docs/modules/stocks', '767'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/traffic',
                component: ComponentCreator('/docs/modules/traffic', 'dc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/modules/weather',
                component: ComponentCreator('/docs/modules/weather', '895'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/connecting-the-screen',
                component: ComponentCreator('/docs/quickstart/connecting-the-screen', '454'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/hardware-requirements',
                component: ComponentCreator('/docs/quickstart/hardware-requirements', '0f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/installation',
                component: ComponentCreator('/docs/quickstart/installation', '52c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quickstart/software-requirements',
                component: ComponentCreator('/docs/quickstart/software-requirements', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/supported-displays',
                component: ComponentCreator('/docs/resources/supported-displays', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resources/supported-pi-models',
                component: ComponentCreator('/docs/resources/supported-pi-models', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
