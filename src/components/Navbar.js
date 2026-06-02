import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data';

const NAV = ['about','skills','projects','contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? '1rem 8%' : '1.5rem 8%',
      background: scrolled ? 'rgba(5,8,16,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
    }}>
      {/* Logo */}
      <Link to="hero" smooth duration={600} style={{ cursor: 'pointer' }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--text-1)', fontStyle: 'italic' }}>
          {personalInfo.firstName}<span style={{ color: 'var(--accent)', fontStyle: 'normal', fontWeight: 700 }}> {personalInfo.lastName}</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className="nav-desktop">
        {NAV.map(id => (
          <li key={id}>
            <Link
              to={id} smooth duration={600} offset={-80} spy
              style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', cursor: 'pointer', transition: 'color 0.3s' }}
              activeStyle={{ color: 'var(--accent)' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
            >
              {id}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA — hidden on mobile to save space */}
      <a href={`mailto:${personalInfo.email}`} className="btn btn-primary nav-cta" style={{ fontSize: '0.78rem', padding: '0.6rem 1.4rem' }}>
        Hire Me
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          padding: '8px', cursor: 'pointer',
          background: 'transparent', border: 'none',
        }}
        className="nav-burger"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 22, height: 1.5,
            background: 'var(--text-1)',
            transition: 'all 0.3s',
            transform: open
              ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
              : i === 1 ? 'scaleX(0)'
              : 'translateY(-6.5px) rotate(-45deg)'
              : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(5,8,16,0.97)',
          zIndex: 999, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '3rem',
        }}
          onClick={() => setOpen(false)}
        >
          {NAV.map(id => (
            <Link key={id} to={id} smooth duration={600} offset={-80}
              onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--text-2)', cursor: 'pointer', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
          .nav-cta { display: none !important; }
          nav { padding-left: 5% !important; padding-right: 5% !important; }
        }
      `}</style>
    </nav>
  );
}
