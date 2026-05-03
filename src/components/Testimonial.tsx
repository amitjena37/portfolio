import React from 'react';

// Define the "shape" of the props
interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

export default function Testimonial({ quote, author, title }: TestimonialProps) {
  return (
    <div style={{
      padding: '2rem',
      borderRadius: '16px',
      border: '1px solid rgba(16, 185, 129, 0.2)',
      background: 'rgba(16, 185, 129, 0.02)',
      margin: '1rem 0'
    }}>
      <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{quote}"</p>
      <div>
        <strong>{author}</strong>
        <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>{title}</p>
      </div>
    </div>
  );
}