import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Display Hub",
	tagline: "A modular Raspberry Pi dashboard for e-ink displays.",
	favicon: "img/favicon.ico",

	url: "https://jcari-dev.github.io",
	baseUrl: "/display-hub-e-ink-display-dashboard-docs/",

	organizationName: "jcari-dev",
	projectName: "display-hub",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

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
					editUrl:
						"https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs/tree/main/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig: {
		image: "img/all_modules_sample.jpg",
		metadata: [
			{
				name: "keywords",
				content:
					"e-ink dashboard, Raspberry Pi, React, Bottle, Docker, IoT, open source",
			},
		],
		navbar: {
			title: "Display Hub",
			logo: {
				alt: "Display Hub e-ink dashboard",
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
					to: "/docs/quickstart/installation",
					label: "Installation",
					position: "left",
				},
				{
					to: "/docs/category/modules",
					label: "Modules",
					position: "left",
				},
				{
					to: "/faqs",
					label: "FAQ",
					position: "left",
				},
				{
					href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Explore",
					items: [
						{ label: "Overview", to: "/docs/intro" },
						{ label: "Quick Start", to: "/docs/category/quick-start" },
						{ label: "Modules", to: "/docs/category/modules" },
						{ label: "FAQ", to: "/faqs" },
					],
				},
				{
					title: "Resources",
					items: [
						{ label: "Supported Pi Models", to: "/docs/resources/supported-pi-models" },
						{ label: "Supported Displays", to: "/docs/resources/supported-displays" },
						{ label: "Data Reference", to: "/docs/resources/data-reference" },
						{ label: "Troubleshooting", to: "/docs/resources/troubleshooting" },
					],
				},
				{
					title: "Project",
					items: [
						{
							label: "Application Source",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard",
						},
						{
							label: "Documentation Source",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs",
						},
						{
							label: "Report an Issue",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard/issues",
						},
						{
							label: "Contact Jorge",
							href: "mailto:contactme@jorgecaridad.dev",
						},
					],
				},
			],
			copyright: `Copyright \u00A9 ${new Date().getFullYear()} Jorge Caridad. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	},
};

export default config;
