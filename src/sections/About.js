import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const v = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4,0,0.2,1], delay: i * 0.12 } }),
  };

  return (
    <section id="about" className="section" ref={ref}>
      <div className="about-grid">

        {/* Left — visual */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.4,0,0.2,1] }}
          style={{ position: 'relative' }}
        >
          {/* Avatar frame */}
          <div style={{
            width: '100%', maxWidth: 420,
            aspectRatio: '4/5',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, rgba(79,138,255,0.1), rgba(162,89,255,0.08))',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            margin: '0 auto',
          }}>
            {/* Decorative grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'linear-gradient(rgba(79,138,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,138,255,0.04) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
            {/* Initials */}
            <div style={{
              width: 140, height: 140, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(79,138,255,0.25), rgba(162,89,255,0.2))',
              border: '1px solid rgba(79,138,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--serif)', fontSize: '3.5rem', color: 'var(--accent)',
              fontStyle: 'italic', zIndex: 1,
              animation: 'glow 3s ease-in-out infinite',
            }}>
              AA
            </div>
            {/* Corner accent */}
            <div style={{
              position: 'absolute', bottom: 20, right: 20,
              padding: '0.4rem 0.9rem',
              background: 'rgba(79,138,255,0.12)',
              border: '1px solid rgba(79,138,255,0.25)',
              borderRadius: '4px',
              fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em',
            }}>
              ● {personalInfo.availability}
            </div>
          </div>

          {/* Floating card — hidden on small mobile to avoid overflow */}
          <div className="about-float-card" style={{
            position: 'absolute', top: -20, right: -20,
            background: 'rgba(12,18,35,0.9)', backdropFilter: 'blur(12px)',
            border: '1px solid var(--border)',
            borderRadius: '10px', padding: '1rem 1.3rem',
            animation: 'float 4s ease-in-out infinite',
          }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginBottom: '0.3rem', letterSpacing: '0.1em' }}>LOCATION</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-1)' }}>📍 {personalInfo.location}</div>
          </div>
        </motion.div>

        {/* Right — text */}
        <div>
          <motion.div custom={0} variants={v} initial="hidden" animate={inView ? "show" : "hidden"}>
            <div className="section-label">About Me</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Turning ideas into<br /><em>real products</em>
            </h2>
          </motion.div>

          {personalInfo.bio.map((p, i) => (
            <motion.p key={i} custom={i + 1} variants={v} initial="hidden" animate={inView ? "show" : "hidden"}
              style={{ color: 'var(--text-2)', lineHeight: 1.8, fontWeight: 300, fontSize: '1.05rem', marginBottom: '1rem' }}>
              {p}
            </motion.p>
          ))}

          {/* Details grid */}
          <motion.div custom={3} variants={v} initial="hidden" animate={inView ? "show" : "hidden"}
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem',
              marginTop: '2rem', padding: '1.5rem',
              background: 'rgba(12,18,35,0.6)',
              border: '1px solid var(--border)', borderRadius: '10px',
            }}>
            {[
              ['Email', personalInfo.email],
              ['Location', personalInfo.location],
              ['Role', personalInfo.title],
              ['Status', personalInfo.availability],
            ].map(([label, value]) => (
              <div key={label}>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.2rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-2)', wordBreak: 'break-all' }}>{value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div custom={4} variants={v} initial="hidden" animate={inView ? "show" : "hidden"}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href={personalInfo.resumeUrl} className="btn btn-primary" download>Download CV ↓</a>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">GitHub ↗</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .about-float-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
