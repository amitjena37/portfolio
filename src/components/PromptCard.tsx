import React from 'react';
import styles from './PromptCard.module.css';

// Define the "shape" of the props
interface PromptCardProps {
  title: string;
  prompt: string;
  logic: string;
}

export default function PromptCard({ title, prompt, logic }: PromptCardProps) {
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