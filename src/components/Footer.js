import React from 'react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 8%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
      position: 'relative', zIndex: 1,
    }}>
      <span style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--text-2)', fontStyle: 'italic' }}>
        {personalInfo.name}
      </span>
      <span style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>
        © {new Date().getFullYear()} — Built with React & Three.js
      </span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {Object.entries(personalInfo.social).map(([k, v]) => (
          <a key={k} href={v} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)', transition: 'color 0.3s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
          >
            {k}
          </a>
        ))}
      </div>
    </footer>
  );
}
