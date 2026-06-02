import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data';

export default function Contact() {
<<<<<<< HEAD
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
=======
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1400));
    setStatus('sent');
    setForm({ name:'', email:'', message:'' });
  };

  const v = {
    hidden: { opacity: 0, y: 28 },
    show: (i) => ({ opacity: 1, y: 0, transition: { duration:0.7, ease:[0.4,0,0.2,1], delay: i*0.1 } }),
  };

  const inputStyle = {
    width:'100%', background:'rgba(12,18,35,0.7)', backdropFilter:'blur(8px)',
    border:'1px solid var(--border)', borderRadius:'8px',
    padding:'0.85rem 1.1rem', color:'var(--text-1)',
    fontFamily:'var(--sans)', fontSize:'0.95rem', fontWeight:300,
    outline:'none', transition:'border-color 0.3s',
    appearance:'none',
  };

  return (
    <section id="contact" className="section" ref={ref}>
<<<<<<< HEAD
      <div className="contact-grid">
=======
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:'6rem', alignItems:'start' }}>
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472

        {/* Left */}
        <div>
          <motion.div custom={0} variants={v} initial="hidden" animate={inView?"show":"hidden"}>
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title" style={{ marginBottom:'1.2rem' }}>
              Let's work<br /><em>together</em>
            </h2>
          </motion.div>

          <motion.p custom={1} variants={v} initial="hidden" animate={inView?"show":"hidden"}
            style={{ color:'var(--text-2)', lineHeight:1.8, fontWeight:300, marginBottom:'2.5rem', fontSize:'1rem' }}>
            I'm currently open to full-time opportunities. If you have a project you'd like to discuss, or just want to say hi — my inbox is always open.
          </motion.p>

          {/* Contact items */}
          {[
            { label:'Email', value: personalInfo.email, href:`mailto:${personalInfo.email}` },
            { label:'Location', value: personalInfo.location, href: null },
          ].map(({ label, value, href }, i) => (
            <motion.div key={label} custom={i+2} variants={v} initial="hidden" animate={inView?"show":"hidden"}
              style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.2rem' }}>
              <div style={{
                width:40, height:40, borderRadius:'8px',
                background:'rgba(79,138,255,0.1)',
                border:'1px solid rgba(79,138,255,0.2)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'1rem', flexShrink:0,
              }}>
                {label === 'Email' ? '✉' : '📍'}
              </div>
<<<<<<< HEAD
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize:'0.68rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'0.1rem' }}>{label}</div>
                {href
                  ? <a href={href} style={{ fontSize:'0.92rem', color:'var(--text-2)', transition:'color 0.3s', wordBreak:'break-all' }}
=======
              <div>
                <div style={{ fontSize:'0.68rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'0.1rem' }}>{label}</div>
                {href
                  ? <a href={href} style={{ fontSize:'0.92rem', color:'var(--text-2)', transition:'color 0.3s' }}
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
                      onMouseEnter={e=>e.target.style.color='var(--accent)'}
                      onMouseLeave={e=>e.target.style.color='var(--text-2)'}
                    >{value}</a>
                  : <span style={{ fontSize:'0.92rem', color:'var(--text-2)' }}>{value}</span>
                }
              </div>
            </motion.div>
          ))}

          {/* Socials */}
          <motion.div custom={4} variants={v} initial="hidden" animate={inView?"show":"hidden"}
            style={{ display:'flex', gap:'0.7rem', marginTop:'1.5rem', flexWrap:'wrap' }}>
            {Object.entries(personalInfo.social).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ padding:'0.5rem 1.1rem', fontSize:'0.75rem', letterSpacing:'0.1em', textTransform:'uppercase' }}>
                {platform} ↗
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Form */}
        <motion.div custom={1} variants={v} initial="hidden" animate={inView?"show":"hidden"}>
          {status === 'sent' ? (
            <div style={{
              textAlign:'center', padding:'4rem 2rem',
              background:'rgba(12,18,35,0.7)', border:'1px solid var(--border)',
              borderRadius:'16px',
            }}>
              <div style={{ fontSize:'3rem', marginBottom:'1rem' }}>✅</div>
              <h3 style={{ fontFamily:'var(--serif)', fontSize:'1.5rem', color:'var(--text-1)', marginBottom:'0.5rem' }}>Message Sent!</h3>
              <p style={{ color:'var(--text-2)', fontWeight:300, marginBottom:'1.5rem' }}>Thanks, I'll get back to you soon.</p>
              <button className="btn btn-ghost" onClick={() => setStatus(null)}>Send another →</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{
              background:'rgba(12,18,35,0.7)', backdropFilter:'blur(20px)',
              border:'1px solid var(--border)', borderRadius:'16px',
<<<<<<< HEAD
              padding:'clamp(1.5rem, 4vw, 2.5rem)',
=======
              padding:'2.5rem',
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
            }}>
              {[
                { id:'name',    label:'Name',    type:'text',  ph:'Your full name' },
                { id:'email',   label:'Email',   type:'email', ph:'your@email.com' },
              ].map(f => (
                <div key={f.id} style={{ marginBottom:'1.3rem' }}>
                  <label htmlFor={f.id} style={{ display:'block', fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'0.5rem' }}>{f.label}</label>
                  <input id={f.id} type={f.type} name={f.id} placeholder={f.ph}
                    value={form[f.id]} onChange={e => setForm({...form, [f.id]: e.target.value})}
                    style={inputStyle} required
                    onFocus={e=>e.target.style.borderColor='rgba(79,138,255,0.5)'}
                    onBlur={e=>e.target.style.borderColor='var(--border)'}
                  />
                </div>
              ))}
              <div style={{ marginBottom:'2rem' }}>
                <label htmlFor="message" style={{ display:'block', fontSize:'0.72rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-3)', marginBottom:'0.5rem' }}>Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project…" rows={5}
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  style={{ ...inputStyle, resize:'vertical', minHeight:130, lineHeight:1.6 }} required
                  onFocus={e=>e.target.style.borderColor='rgba(79,138,255,0.5)'}
                  onBlur={e=>e.target.style.borderColor='var(--border)'}
                />
              </div>
              <button type="submit" className="btn btn-primary"
                style={{ width:'100%', justifyContent:'center', opacity: status==='sending'?0.7:1 }}
                disabled={status==='sending'}>
                {status==='sending' ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </motion.div>
      </div>

<<<<<<< HEAD
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 6rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
=======
      <style>{`@media(max-width:900px){ #contact > .section > div { grid-template-columns:1fr !important; } }`}</style>
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
    </section>
  );
}
