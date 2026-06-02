import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';

const CATS = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
const ACCENT = { Frontend: '#4f8aff', Backend: '#00c896', Tools: '#f5a623', AI: '#a259ff' };

export default function Skills() {
  const [active, setActive] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section" ref={ref} style={{ background: 'linear-gradient(to bottom, transparent, rgba(12,18,35,0.4) 50%, transparent)' }}>
      <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
        <div className="section-label">Expertise</div>
        <h2 className="section-title" style={{ marginBottom:'0.5rem' }}>Skills &<em> Tech Stack</em></h2>
        <p style={{ color:'var(--text-2)', fontWeight:300, marginBottom:'3rem', fontSize:'1rem' }}>
          Technologies I work with every day.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'3rem' }}>
        {CATS.map(cat => (
          <button key={cat} onClick={() => setActive(cat)}
            style={{
              padding:'0.45rem 1.1rem', borderRadius:'30px',
              fontSize:'0.75rem', letterSpacing:'0.1em', textTransform:'uppercase',
              fontWeight:500, cursor:'pointer', transition:'all 0.25s',
              background: active===cat ? 'var(--accent)' : 'transparent',
              color: active===cat ? '#fff' : 'var(--text-3)',
              border: active===cat ? '1px solid transparent' : '1px solid var(--border)',
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <motion.div layout style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))', gap:'1rem' }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div key={skill.name}
              layout
              initial={{ opacity:0, scale:0.92 }}
              animate={{ opacity:1, scale:1 }}
              exit={{ opacity:0, scale:0.92 }}
              transition={{ duration:0.4, delay: i * 0.04 }}
              whileHover={{ y: -3, borderColor: ACCENT[skill.category] || 'var(--border-h)' }}
              style={{
                background:'rgba(12,18,35,0.7)', backdropFilter:'blur(10px)',
                border:'1px solid var(--border)', borderRadius:'10px',
                padding:'1.2rem 1.4rem', cursor:'default',
                transition:'border-color 0.3s',
              }}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.8rem' }}>
                <span style={{ fontSize:'0.95rem', color:'var(--text-2)', fontWeight:400 }}>{skill.name}</span>
                <span style={{ fontSize:'0.75rem', color: ACCENT[skill.category] || 'var(--accent)', fontFamily:'monospace' }}>
                  {skill.level}%
                </span>
              </div>

              <div style={{ height:2, background:'rgba(255,255,255,0.06)', borderRadius:2, overflow:'hidden' }}>
                <motion.div
                  initial={{ width:0 }}
                  animate={inView ? { width:`${skill.level}%` } : { width:0 }}
                  transition={{ duration:1.2, ease:[0.4,0,0.2,1], delay: 0.3 + i*0.03 }}
                  style={{
                    height:'100%', borderRadius:2,
                    background:`linear-gradient(to right, ${ACCENT[skill.category] || '#4f8aff'}88, ${ACCENT[skill.category] || '#4f8aff'})`,
                  }}
                />
              </div>

              <div style={{ fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-3)', marginTop:'0.6rem' }}>
                {skill.category}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
