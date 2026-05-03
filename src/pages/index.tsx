import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Bridging the gap between <b>Complex AI Infrastructure</b> and <b>Human-Centric Documentation</b>.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View My Portfolio Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Amit Jena | AI Content Strategist`}
      description="Portfolio of Amit Jena - Technical Writer and AI Content Strategist">
      <HomepageHeader />
      <main>
        <section className="container padding-vert--xl">
          <div className="row">
            <div className="col col--4">
              <h3>🤖 AI Infrastructure Docs</h3>
              <p>Specialized documentation for <b>AutoML</b> and <b>ModelOps</b> platforms, focusing on developer experience and scalability.</p>
            </div>
            <div className="col col--4">
              <h3>🧪 The Prompt Lab</h3>
              <p>A library of optimized prompts for automated content linting, agent-readiness, and first-draft generation.</p>
            </div>
            <div className="col col--4">
              <h3>📈 DocOps & Efficiency</h3>
              <p>Streamlining documentation workflows using AI agents to reduce time-to-market for technical content.</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}