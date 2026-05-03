import React from 'react';
import styles from './PromptCard.module.css';

export default function PromptCard({title, prompt, logic}) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.badge}>PROMPT ENGINEERING</span>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.logicSection}>
          <strong>DocOps Strategy:</strong> {logic}
        </div>
        <pre className={styles.codeBlock}>
          <code>{prompt}</code>
        </pre>
      </div>
    </div>
  );
}