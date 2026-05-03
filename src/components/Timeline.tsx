import React from 'react';
import styles from './Timeline.module.css';

const events = [
  { year: '2025 - Present', title: 'Staff Technical AI Content Strategist', company: 'Teradata', desc: 'Leading AI-enabled documentation workflows and ModelOps tech content strategy.' },
  { year: '2021 - 2025', title: 'Lead Technical Writer', company: 'SymphonyAI', desc: 'Architected Docs-as-Code pipelines, created scalable developer onboarding framework, and mentored global writing teams.' },
  { year: '2018 - 2021', title: 'Technical Writer', company: 'GE Digital', desc: 'Developed comprehensive API references and end-user guides.' },
  { year: '2017 - 2018', title: 'Technical Content Developer II', company: 'Dell EMC', desc: 'Authored comprehensive API and CLI references for data backup solutions.' },
  { year: '2016 - 2017', title: 'Senior Engineer - Technical Documentation', company: 'HARMAN', desc: 'Developed help resources for SymphonySUMMIT.' },
];

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      {events.map((event, idx) => (
        <div key={idx} className={styles.timelineItem}>
          <div className={styles.timelineYear}>{event.year}</div>
          <div className={styles.timelineContent}>
            <h4>{event.title} <span className={styles.company}>@ {event.company}</span></h4>
            <p>{event.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}