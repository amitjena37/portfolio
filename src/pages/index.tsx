import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import PromptCard from '@site/src/components/PromptCard'; // Import the component

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/prompt-lab/agent-fitness">
            Explore The Prompt Lab
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Staff Technical Content Strategist`}
      description="Portfolio of Amit Kumar Jena - Specializing in AI Infrastructure and Content Engineering.">
      <HomepageHeader />
      <main>
        {/* Pillar Section */}
        <section className="container padding-vert--xl">
          <div className="row">
            <div className="col col--4">
              <h3>🤖 AI Infrastructure Docs</h3>
              <p>Specialized documentation for <b>AutoML</b> and <b>ModelOps</b> platforms, focusing on developer experience and scalability.</p>
            </div>
            <div className="col col--4">
              <h3>🧪 The Prompt Lab</h3>
              <p>A library of optimized prompts for automated content linting, agent-readiness, and draft generation.</p>
            </div>
            <div className="col col--4">
              <h3>📈 DocOps & Efficiency</h3>
              <p>Streamlining documentation workflows using AI agents to reduce time-to-market for technical content.</p>
            </div>
          </div>
        </section>

        {/* Missing PromptCard Section */}
        <section className="container padding-vert--lg" style={{backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '16px', padding: '2rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>Engineered Content Solutions</Heading>
          <PromptCard 
            title="Automated Release Notes Engine"
            logic="A few-shot prompt strategy that extracts 'Breaking Changes', 'New Features', and 'Deprecations' from raw developer logs and styles them according to company style guides."
            prompt={`ACT AS: A Senior Technical Writer at a top-tier SaaS company.
INPUT: {raw_developer_changelog_markdown}
CONSTRAINT: Maximum 500 words. Neutral, authoritative tone.
TASK:
1. Identify all 'Breaking Changes' and list them first with migration steps.
2. Summarize key new features using benefit-driven language.
3. Output in clean Markdown.`}
          />
        </section>

        {/* Tech Stack Section */}
        <section className="container padding-vert--xl">
          <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            The Tech Stack
          </Heading>
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col col--3">
              <div style={{ padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '12px', height: '100%' }}>
                <strong>Documentation</strong>
                <p style={{marginTop: '0.5rem', opacity: 0.8}}>DITA, Markdown, Docs-as-Code</p>
              </div>
            </div>
            <div className="col col--3">
              <div style={{ padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '12px', height: '100%' }}>
                <strong>AI & ML</strong>
                <p style={{marginTop: '0.5rem', opacity: 0.8}}>AutoML, ModelOps, RAG Strategy</p>
              </div>
            </div>
            <div className="col col--3">
              <div style={{ padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '12px', height: '100%' }}>
                <strong>Automation</strong>
                <p style={{marginTop: '0.5rem', opacity: 0.8}}>n8n, Python, GitHub Actions</p>
              </div>
            </div>
            <div className="col col--3">
              <div style={{ padding: '1.5rem', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '12px', height: '100%' }}>
                <strong>Engineering</strong>
                <p style={{marginTop: '0.5rem', opacity: 0.8}}>React, Docusaurus, API Design</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}