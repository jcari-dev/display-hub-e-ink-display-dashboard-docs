// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Display Hub",
	tagline: "Simplifying e-ink display management.",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://your-docusaurus-site.example.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ["rss", "atom"],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
					// Useful options to enforce blogging best practices
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Display Hub",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Overview",
					},
					{
						to: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs",
						label: "Installation",
						position: "left",
					},
					{
						to: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs",
						label: "Modules",
						position: "left",
					},

					{
						to: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs",
						label: "About",
						position: "left",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Resources",
						items: [
							{
								label: "Tutorials",
								to: "/docs/intro",
							},
							{
								label: "Documentation",
								to: "/docs/intro",
							},

							{
								label: "Supported Pi Models",
								to: "https://example.com/devices",
							},
							{
								label: "Supported Displays",
								to: "https://example.com/devices",
							},
						],
					},
					{
						title: "Modules",
						items: [
							{
								label: "Weather Forecast",
								to: "https://stackoverflow.com/questions/tagged/docusaurus",
							},
							{
								label: "News Headlines",
								to: "https://discordapp.com/invite/docusaurus",
							},
							{
								label: "Email Alerts",
								to: "https://x.com/docusaurus",
							},
							{
								label: "Traffic Incidents",
								to: "https://x.com/docusaurus",
							},
							{
								label: "Stocks Prices",
								to: "https://x.com/docusaurus",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "GitHub Repo",
								href: "https://github.com/facebook/docusaurus",
							},
							{
								label: "About",
								to: "https://github.com/facebook/docusaurus",
							},
						],
					},
					{
						title: "Support",
						items: [
							{
								label: "FAQ",
								to: "/blog",
							},
							{
								label: "Contact",
								to: "https://github.com/facebook/docusaurus",
							},
							{
								label: "Report a Bug",
								href: "https://github.com/facebook/docusaurus",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Jorge Caridad. Built with ❤️ & Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
