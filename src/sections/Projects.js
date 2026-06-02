import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`;
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 60px rgba(0,0,0,0.4), 0 0 40px ${project.color}22`;
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    card.style.boxShadow = 'none';
    card.style.borderColor = 'var(--border)';
  };

  const onMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.borderColor = project.color + '55';
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: index * 0.12 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        background: 'rgba(12,18,35,0.8)', backdropFilter: 'blur(20px)',
        border: '1px solid var(--border)',
        borderRadius: '16px', overflow: 'hidden',
        transition: 'transform 0.15s ease, border-color 0.3s, box-shadow 0.3s',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      {/* Top visual — real image if provided, gradient fallback */}
      <div style={{
        height: 200,
        background: project.image
          ? 'var(--bg-card)'
          : `linear-gradient(135deg, ${project.colorDark}, ${project.color}33)`,
        position: 'relative', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.fullTitle}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            {/* Overlay so text stays readable on top of photo */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to top, ${project.colorDark}cc 0%, transparent 60%)`,
            }} />
          </>
        ) : (
          <>
            {/* Grid pattern fallback */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `linear-gradient(${project.color}18 1px, transparent 1px), linear-gradient(90deg, ${project.color}18 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }} />
            <span style={{
              fontFamily: 'var(--serif)', fontSize: '7rem', fontWeight: 700,
              color: project.color + '15', lineHeight: 1, zIndex: 1, userSelect: 'none',
              position: 'absolute', right: '5%', bottom: '-10%',
            }}>
              {String(project.id).padStart(2, '0')}
            </span>
          </>
        )}

        {/* Title overlay — always visible */}
        <div style={{ zIndex: 2, textAlign: 'center', padding: '0 2rem', position: project.image ? 'absolute' : 'relative', bottom: project.image ? '1rem' : 'auto' }}>
          {!project.image && (
            <>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700,
                color: '#fff', fontStyle: 'italic',
              }}>{project.title}</div>
              <div style={{
                fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                color: project.color, marginTop: '0.4rem',
              }}>{project.category}</div>
            </>
          )}
        </div>

        {/* Year badge */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          padding: '0.25rem 0.7rem', borderRadius: '4px',
          background: 'rgba(0,0,0,0.5)', border: `1px solid ${project.color}44`,
          fontSize: '0.7rem', color: project.color, letterSpacing: '0.1em', zIndex: 3,
        }}>
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 'clamp(1rem, 3vw, 1.6rem)' }}>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--text-1)', marginBottom: '0.6rem', fontWeight: 700 }}>
          {project.fullTitle}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.72, fontWeight: 300, marginBottom: '1.3rem', minHeight: '4em' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tech.map(t => (
            <span key={t} style={{
              fontSize: '0.7rem', padding: '0.2rem 0.65rem',
              background: project.color + '15',
              color: project.color,
              border: `1px solid ${project.color}30`,
              borderRadius: '4px', letterSpacing: '0.04em',
            }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.8rem', borderTop: '1px solid var(--border)', paddingTop: '1.2rem', flexWrap: 'wrap' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.78rem', color: 'var(--text-2)', letterSpacing: '0.08em', transition: 'color 0.3s', cursor: 'pointer' }}
            onMouseEnter={e => e.target.style.color = project.color}
            onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
          >
            GitHub ↗
          </a>
          {project.live && project.live !== '#' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.78rem', color: 'var(--text-2)', letterSpacing: '0.08em', transition: 'color 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.color = project.color}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
        <div className="section-label">Selected Work</div>
        <h2 className="section-title" style={{ marginBottom:'0.5rem' }}>
          Projects I've<em> built</em>
        </h2>
        <p style={{ color:'var(--text-2)', fontWeight:300, marginBottom:'4rem', fontSize:'1rem' }}>
          Real-world applications I designed and shipped end to end.
        </p>
      </motion.div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'1.5rem' }}>
        {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </div>
    </section>
  );
}
