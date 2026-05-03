import React from 'react';
import styles from './TestimonialMarquee.module.css';

interface TestimonialData {
  quote: string;
  author: string;
  title: string;
}

const testimonials: TestimonialData[] = [
  { quote: "Amit engineers content like a product. His ModelOps strategy was a game-changer.", author: "Director of Engineering", title: "Enterprise AI" },
  { quote: "A forward-thinking strategist who mastered RAG-readiness before it was a trend.", author: "Senior Product Manager", title: "AI Platforms" },
  { quote: "The bridge between complex backend logic and user-centric documentation.", author: "Lead Architect", title: "Cloud Systems" },
  { quote: "His DocOps workflow reduced our time-to-publish by 40%.", author: "Head of Content", title: "Global Tech" },
];

export default function TestimonialMarquee() {
  // We double the array to create a seamless loop
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {doubleTestimonials.map((t, idx) => (
          <div key={idx} className={styles.testimonialCard}>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{t.quote}"</p>
            <strong>{t.author}</strong>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.6 }}>{t.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}