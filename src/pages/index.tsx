import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Custom Components
import PromptCard from '@site/src/components/PromptCard';
import Timeline from '@site/src/components/Timeline';
import Testimonial from '@site/src/components/Testimonial';

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
      description="Portfolio of Amit Jena - Specializing in AI Infrastructure and Content Engineering.">
      <HomepageHeader />
      <main>
        
        {/* 1. PILLAR SECTION: Core Value Props */}
        <section className="container padding-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div style={{padding: '1rem'}}>
                <h3>🤖 AI Infrastructure Docs</h3>
                <p>Specialized documentation for <b>AutoML</b> and <b>ModelOps</b> platforms, focusing on developer experience and scalability.</p>
              </div>
            </div>
            <div className="col col--4">
              <div style={{padding: '1rem'}}>
                <h3>🧪 The Prompt Lab</h3>
                <p>A library of optimized prompts for automated content linting, agent-readiness, and draft generation.</p>
              </div>
            </div>
            <div className="col col--4">
              <div style={{padding: '1rem'}}>
                <h3>📈 DocOps & Efficiency</h3>
                <p>Streamlining documentation workflows using AI agents to reduce time-to-market for technical content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROMPT SHOWCASE: Content Engineering Flex */}
        <section className="container padding-vert--lg" style={{backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '24px', padding: '3rem 2rem'}}>
          <Heading as="h2" style={{marginBottom: '2rem'}}>Engineered Content Solutions</Heading>
          <PromptCard 
            title="Automated Release Notes Engine"
            logic="A few-shot prompt strategy that extracts 'Breaking Changes' and 'New Features' from raw developer logs, formatted for RAG-based AI agents."
            prompt={`ACT AS: A Senior Technical Writer. 
INPUT: {raw_developer_changelog}
TASK: Summarize changes into a neutral, authoritative Markdown format.`}
          />
        </section>

        {/* 3. CAREER JOURNEY: The 12-Year Authority */}
        <section className="container padding-vert--xl">
          <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>The Journey</Heading>
          <Timeline />
        </section>

        {/* 4. TECH STACK: The Infrastructure Grid */}
        <section className="container padding-vert--xl" style={{ borderTop: '1px solid var(--ifm-color-emphasis-200)' }}>
          <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem', marginTop: '2rem' }}>
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

        {/* 5. TESTIMONIALS: Social Proof */}
        <section className="container padding-vert--xl">
          <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem' }}>Leadership Feedback</Heading>
          <div className="row">
            <div className="col col--6">
              <Testimonial 
                quote="Amit doesn't just write; he engineers content. His approach to ModelOps documentation was a game-changer for our dev teams."
                author="Engineering Director"
                title="Global Infrastructure Team"
              />
            </div>
            <div className="col col--6">
              <Testimonial 
                quote="The most forward-thinking content strategist I have worked with. He anticipated the RAG era before it became industry standard."
                author="Senior Product Manager"
                title="AI Platforms Division"
              />
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}