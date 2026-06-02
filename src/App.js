import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import './styles/global.css';

function App() {
  // Smooth scroll with Lenis if available
  useEffect(() => {
    let lenis;
    try {
      const Lenis = require('lenis').default || require('lenis');
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    } catch(e) { /* lenis optional */ }
    return () => { if (lenis) lenis.destroy(); };
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
