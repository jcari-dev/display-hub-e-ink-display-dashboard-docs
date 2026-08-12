import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

const stack = ["React", "Bottle", "SQLAlchemy", "Docker", "Nginx", "Raspberry Pi"];

function HomepageHeader() {
	const demoVideo = useBaseUrl("media/display-hub-demo.mp4");
	const demoPoster = useBaseUrl("img/all_modules_sample.jpg");

	return (
		<header className={styles.hero}>
			<div className="container">
				<div className={styles.heroGrid}>
					<div className={styles.heroCopy}>
						<p className={styles.eyebrow}>Open-source Raspberry Pi project</p>
						<Heading as="h1" className={styles.heroTitle}>
							Build the dashboard. Arrange it visually. Send it to e-ink.
						</Heading>
						<p className={styles.heroDescription}>
							Display Hub turns live weather, news, traffic, and market data
							into a configurable e-ink dashboard through a drag-and-drop web
							interface.
						</p>

						<div className={styles.actions}>
							<Link className={styles.primaryAction} to="#architecture">
								Explore the architecture
							</Link>
							<Link
								className={styles.secondaryAction}
								to="/docs/quickstart/installation"
							>
								Read the setup guide
							</Link>
						</div>

						<ul className={styles.stack} aria-label="Project technology stack">
							{stack.map((technology) => (
								<li key={technology}>{technology}</li>
							))}
						</ul>
					</div>

					<div className={styles.demoCard}>
						<div className={styles.demoMeta}>
							<span>
								<span className={styles.liveDot} aria-hidden="true" />
								Real project demo
							</span>
							<span>1 min 51 sec</span>
						</div>
						<div className={styles.videoShell}>
							<video
								controls
								preload="metadata"
								poster={demoPoster}
								aria-label="Display Hub project demonstration"
							>
								<source src={demoVideo} type="video/mp4" />
								Your browser does not support embedded video.
							</video>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout
			title={siteConfig.title}
			description="Display Hub is a modular Raspberry Pi e-ink dashboard with a drag-and-drop React interface, live data modules, and containerized deployment."
		>
			<div className={styles.page}>
				<HomepageHeader />
				<main>
					<HomepageFeatures />
				</main>
			</div>
		</Layout>
	);
}
