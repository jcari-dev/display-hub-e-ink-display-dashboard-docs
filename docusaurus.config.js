import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Display Hub",
	tagline: "Simplifying e-ink display management.",
	favicon: "img/favicon.ico",

	url: "https://jcari-dev.github.io",
	baseUrl: "/display-hub-e-ink-display-dashboard-docs/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
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
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig: {
		colorMode: {
			defaultMode: "dark",
			disableSwitch: false,
			respectPrefersColorScheme: false,
		},
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
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Resources",
					items: [
						{
							label: "Overview",
							to: "/docs/intro",
						},
						{
							label: "Quick Start",
							to: "/docs/category/quick-start",
						},
						{
							label: "Supported Pi Models",
							to: "/docs/resources/supported-pi-models",
						},
						{
							label: "Supported Displays",
							to: "/docs/resources/supported-displays",
						},
						{
							label: "Data Reference",
							to: "/docs/resources/data-reference",
						},
					],
				},
				{
					title: "Modules",
					items: [
						{
							label: "Weather Forecast",
							to: "/docs/modules/weather",
						},
						{
							label: "News Headlines",
							to: "/docs/modules/news",
						},
						{
							label: "Traffic Incidents",
							to: "/docs/modules/traffic",
						},
						{
							label: "Stocks Prices",
							to: "/docs/modules/stocks",
						},
						{
							label: "Email Alerts",
							to: "/docs/modules/email",
						},
					],
				},
				{
					title: "Support",
					items: [
						{
							label: "FAQ",
							to: "/faqs",
						},
						{
							label: "Troubleshooting",
							to: "/docs/resources/troubleshooting",
						},
						{
							label: "Contact",
							href: "mailto:contactme@jorgecaridad.dev?subject=Inquiry%20from%20Your%20Website&body=Hi%20Jorge%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20wanted%20to%20reach%20out%20regarding%20the%20following%3A%0A%0A%5BPlease%20describe%20your%20query%20or%20request%20here.%5D%0A%0AThank%20you%20for%20your%20time%2C%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D",
						},

						{
							label: "Report a Bug in Display Hub",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard/issues/new?title=%5BBug%5D%20X%20not%20working%20as%20expected&body=Hi%2C%0A%0AI'm%20creating%20this%20issue%20because%20I%20found%20that%20**X**%20isn't%20working%20as%20intended.%20Here's%20what%20I%20observed%3A%0A%0A-**Expected%20Behavior%3A**%0A-**Actual%20Behavior%3A**%0A-**Steps%20to%20Reproduce%3A**%0A1.%0A2.%0A3.%0A%0A-**Environment%3A**%0A-Version%3A%0A-Operating%20System%3A%0A%0A**Additional%20Context%3A**%0A(Add%20any%20screenshots%2C%20logs%2C%20or%20details%20that%20might%20help.)",
						},
						{
							label: "Report a Documentation Issue",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs/issues/new?title=%5BDocs%20Issue%5D%20Documentation%20Error&body=Hi%2C%0A%0AI'm%20reporting%20an%20issue%20in%20the%20documentation.%20Here's%20what%20I%20noticed%3A%0A%0A-**Affected%20Page%20or%20Section%3A**%0A(Specify%20which%20part%20of%20the%20documentation%20has%20the%20issue.)%0A%0A-**Issue%20Description%3A**%0A(Describe%20what%20is%20incorrect%20or%20missing.)%0A%0A-**Suggested%20Fix%3A**%0A(Provide%20details%20on%20how%20it%20should%20be%20corrected%20if%20possible.)%0A%0A**Additional%20Context%3A**%0A(Add%20any%20other%20details%20that%20might%20help.)",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub Repo",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard",
						},
						{
							label: "GitHub Repo (Documentation)",
							href: "https://github.com/jcari-dev/display-hub-e-ink-display-dashboard-docs",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Jorge Caridad. Docs were written with ❤️ and by me. Powered by Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	},
};

export default config;
