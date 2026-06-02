import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay },
});

export default function Hero() {
  const scrollRef = useRef(null);
  const [Scene3D, setScene3D] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile — skip 3D on small screens for performance
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Lazy-load 3D only on desktop
  useEffect(() => {
    if (!isMobile) {
      import('../components/Scene3D').then(m => setScene3D(() => m.default));
    }
  }, [isMobile]);

  // Subtle parallax on title — desktop only
  useEffect(() => {
    if (isMobile) return;
    const el = scrollRef.current;
    if (!el) return;
    const fn = () => { el.style.transform = `translateY(${window.scrollY * 0.18}px)`; };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [isMobile]);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8%',
      paddingTop: '100px',
      paddingBottom: '60px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* 3D canvas — desktop only */}
      {!isMobile && Scene3D && (
        <Scene3D style={{
          position: 'absolute',
          right: '-5%', top: '5%',
          width: '55%', height: '90%',
          pointerEvents: 'none',
        }} />
      )}

      {/* Radial glow */}
      <div style={{
        position: 'absolute', right: '10%', top: '50%',
        transform: 'translate(50%,-50%)',
        width: 500, height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,138,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Left content */}
      <div ref={scrollRef} style={{ maxWidth: 620, position: 'relative', zIndex: 2, width: '100%' }}>

        <motion.p {...fadeUp(0)} style={{
          fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem',
          flexWrap: 'wrap',
        }}>
          <span style={{ width: 24, height: 1, background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
          {personalInfo.title} · {personalInfo.location}
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2.8rem, 10vw, 7rem)',
          fontWeight: 700,
          lineHeight: 1.0,
          color: 'var(--text-1)',
          marginBottom: '0.15em',
        }}>
          Hi, I'm<br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Arsalan</em>
          <span style={{ color: 'rgba(240,242,255,0.15)' }}>.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.1rem, 3vw, 1.9rem)',
          color: 'var(--text-2)',
          marginBottom: '1.8rem',
          lineHeight: 1.3,
          fontStyle: 'italic',
          fontWeight: 400,
        }}>
          "{personalInfo.tagline}"
        </motion.p>

        <motion.p {...fadeUp(0.3)} style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
          color: 'var(--text-2)',
          lineHeight: 1.75, maxWidth: 480,
          fontWeight: 300, marginBottom: '2.5rem',
        }}>
          {personalInfo.subtitle}
        </motion.p>

        <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className="btn btn-primary">View Projects ↓</button>
          </Link>
          <a href={`mailto:${personalInfo.email}`} className="btn btn-ghost">
            Say Hello →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.5)} style={{
          display: 'flex', gap: 'clamp(1.2rem, 4vw, 2.5rem)', flexWrap: 'wrap',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                fontWeight: 700, color: 'var(--text-1)', lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontSize: '0.72rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--text-3)',
                marginTop: '0.25rem',
              }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on mobile */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '8%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
      }} className="scroll-indicator">
        <div style={{
          width: 1, height: 50,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', writingMode: 'vertical-lr' }}>scroll</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .scroll-indicator { display: none; }
          #hero { padding-left: 5% !important; padding-right: 5% !important; }
        }
      `}</style>
    </section>
  );
}
