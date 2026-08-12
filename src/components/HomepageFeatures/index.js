import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const proofPoints = [
	{ number: "01", title: "Drag-and-drop layout", detail: "Configure without editing code" },
	{ number: "02", title: "Live data integrations", detail: "Weather, news, traffic, and stocks" },
	{ number: "03", title: "One-command setup", detail: "A guided Raspberry Pi installation" },
	{ number: "04", title: "Physical output", detail: "Software that reaches real hardware" },
];

const workflow = [
	{
		number: "01",
		title: "Configure",
		technology: "React + Vite",
		description: "Arrange and size modules in the browser-based layout editor.",
	},
	{
		number: "02",
		title: "Aggregate",
		technology: "Bottle + SQLAlchemy",
		description: "Coordinate configuration and data from external providers.",
	},
	{
		number: "03",
		title: "Run",
		technology: "Docker + Nginx",
		description: "Package the application into a repeatable deployment.",
	},
	{
		number: "04",
		title: "Display",
		technology: "Raspberry Pi + e-paper",
		description: "Render the selected information on the connected panel.",
	},
];

const modules = [
	{
		title: "Weather forecast",
		provider: "Open-Meteo",
		description: "Current conditions with configurable location, units, and timezone.",
		image: "img/weather_module_sample.jpg",
		imageAlt: "Weather data rendered on the Display Hub e-ink screen",
		href: "/docs/modules/weather",
	},
	{
		title: "News headlines",
		provider: "RSS providers",
		description: "English and Spanish headlines from configurable publications and feeds.",
		image: "img/news_module_sample.jpg",
		imageAlt: "News headline rendered on the Display Hub e-ink screen",
		href: "/docs/modules/news",
	},
	{
		title: "Traffic incidents",
		provider: "TomTom Traffic API",
		description: "Location-aware road conditions and incidents near a configured ZIP code.",
		image: "img/traffic_module_sample.jpg",
		imageAlt: "Traffic incident rendered on the Display Hub e-ink screen",
		href: "/docs/modules/traffic",
	},
	{
		title: "Stock prices",
		provider: "yfinance",
		description: "A compact market snapshot for a selected ticker symbol.",
		image: "img/stocks_module_sample.jpg",
		imageAlt: "Stock price rendered on the Display Hub e-ink screen",
		href: "/docs/modules/stocks",
	},
];

const engineeringAreas = [
	{
		label: "Frontend",
		value: "React + Vite",
		detail: "Interactive layout configuration",
	},
	{
		label: "Backend",
		value: "Bottle + SQLAlchemy",
		detail: "Data, settings, and module coordination",
	},
	{
		label: "Deployment",
		value: "Docker + Nginx",
		detail: "Portable services and request routing",
	},
	{
		label: "Hardware",
		value: "Raspberry Pi + e-paper",
		detail: "GPIO-connected physical output",
	},
];

function SectionHeading({ eyebrow, title, description, id }) {
	return (
		<div className={styles.sectionHeading}>
			<p className={styles.eyebrow}>{eyebrow}</p>
			<Heading as="h2" id={id}>{title}</Heading>
			<p>{description}</p>
		</div>
	);
}

function ModuleCard({ module }) {
	const image = useBaseUrl(module.image);

	return (
		<article className={styles.moduleCard}>
			<div className={styles.moduleImage}>
				<img src={image} alt={module.imageAlt} loading="lazy" />
			</div>
			<div className={styles.moduleBody}>
				<span className={styles.provider}>{module.provider}</span>
				<Heading as="h3">{module.title}</Heading>
				<p>{module.description}</p>
				<Link className={styles.textLink} to={module.href}>
					Explore this module
				</Link>
			</div>
		</article>
	);
}

export default function HomepageFeatures() {
	const fullDashboardImage = useBaseUrl("img/all_modules_sample.jpg");

	return (
		<>
			<section className={styles.proofSection} aria-label="Project highlights">
				<div className="container">
					<div className={styles.proofGrid}>
						{proofPoints.map((point) => (
							<div className={styles.proofItem} key={point.title}>
								<span className={styles.proofNumber}>{point.number}</span>
								<div>
									<strong>{point.title}</strong>
									<span>{point.detail}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={styles.section}>
				<div className="container">
					<SectionHeading
						eyebrow="System at a glance"
						title="From browser configuration to physical display"
						description="Display Hub brings interface design, API integration, deployment, and embedded hardware into one end-to-end project."
						id="architecture"
					/>

					<ol className={styles.workflow}>
						{workflow.map((step) => (
							<li key={step.title}>
								<span className={styles.stepNumber}>{step.number}</span>
								<Heading as="h3">{step.title}</Heading>
								<code>{step.technology}</code>
								<p>{step.description}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className={styles.showcaseSection}>
				<div className="container">
					<div className={styles.showcaseGrid}>
						<div className={styles.deviceFrame}>
							<img
								src={fullDashboardImage}
								alt="Display Hub showing traffic, weather, stock, and news modules on an e-ink screen"
								loading="lazy"
							/>
							<span>Actual output from the project</span>
						</div>

						<div className={styles.showcaseCopy}>
							<p className={styles.eyebrow}>Software with a physical result</p>
							<Heading as="h2">One screen, composed from independent modules</Heading>
							<p>
								Users choose the information that matters, arrange it visually,
								and control how often the display refreshes. The result is a
								purpose-built dashboard instead of a fixed template.
							</p>
							<ul>
								<li>Modular content and layout</li>
								<li>Configurable refresh intervals</li>
								<li>Real data rendered on constrained hardware</li>
							</ul>
							<Link className={styles.textLink} to="/docs/intro">
								Read the project overview
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.section} id="modules">
				<div className="container">
					<SectionHeading
						eyebrow="Live data modules"
						title="Useful information, designed for a small canvas"
						description="Each integration has its own configuration and output documentation. These are real captures from the connected e-ink display."
					/>

					<div className={styles.moduleGrid}>
						{modules.map((module) => (
							<ModuleCard key={module.title} module={module} />
						))}
					</div>
				</div>
			</section>

			<section className={styles.engineeringSection}>
				<div className="container">
					<SectionHeading
						eyebrow="Engineering surface"
						title="A full-stack project that leaves the browser"
						description="The implementation spans the interface, service layer, containerized runtime, external APIs, and a GPIO-connected device."
					/>

					<div className={styles.engineeringGrid}>
						{engineeringAreas.map((area) => (
							<div className={styles.engineeringItem} key={area.label}>
								<span>{area.label}</span>
								<strong>{area.value}</strong>
								<p>{area.detail}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className={styles.ctaSection}>
				<div className="container">
					<div className={styles.ctaPanel}>
						<div>
							<p className={styles.eyebrow}>Explore the implementation</p>
							<Heading as="h2">See how Display Hub is put together</Heading>
							<p>Start with the installation guide or inspect the complete source on GitHub.</p>
						</div>
						<div className={styles.ctaActions}>
							<Link className={styles.primaryAction} to="/docs/quickstart/installation">
								Open installation guide
							</Link>
							<Link
								className={styles.secondaryAction}
								href="https://github.com/jcari-dev/display-hub-e-ink-display-dashboard"
							>
								View source on GitHub
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
