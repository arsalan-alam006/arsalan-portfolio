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

<<<<<<< HEAD
  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

=======
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
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
<<<<<<< HEAD
      <Link to="hero" smooth duration={600} style={{ cursor: 'pointer' }}>
=======
      <Link to="hero" smooth duration={600} style={{ cursor: 'none' }}>
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
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
<<<<<<< HEAD
              style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', cursor: 'pointer', transition: 'color 0.3s' }}
=======
              style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', cursor: 'none', transition: 'color 0.3s' }}
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
              activeStyle={{ color: 'var(--accent)' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
            >
              {id}
            </Link>
          </li>
        ))}
      </ul>

<<<<<<< HEAD
      {/* CTA — hidden on mobile to save space */}
      <a href={`mailto:${personalInfo.email}`} className="btn btn-primary nav-cta" style={{ fontSize: '0.78rem', padding: '0.6rem 1.4rem' }}>
=======
      {/* CTA */}
      <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ fontSize: '0.78rem', padding: '0.6rem 1.4rem' }}>
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
        Hire Me
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
<<<<<<< HEAD
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          padding: '8px', cursor: 'pointer',
          background: 'transparent', border: 'none',
        }}
=======
        aria-label="Menu"
        style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px', cursor: 'none' }}
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
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
<<<<<<< HEAD
        }}
          onClick={() => setOpen(false)}
        >
          {NAV.map(id => (
            <Link key={id} to={id} smooth duration={600} offset={-80}
              onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--text-2)', cursor: 'pointer', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
=======
        }}>
          {NAV.map(id => (
            <Link key={id} to={id} smooth duration={600} offset={-80}
              onClick={() => setOpen(false)}
              style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--text-2)', cursor: 'none' }}
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
<<<<<<< HEAD
          <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Hire Me
          </a>
=======
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
<<<<<<< HEAD
          .nav-cta { display: none !important; }
          nav { padding-left: 5% !important; padding-right: 5% !important; }
=======
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
        }
      `}</style>
    </nav>
  );
}
