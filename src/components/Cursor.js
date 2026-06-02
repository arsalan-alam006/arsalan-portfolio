<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch-only device — hide custom cursor entirely
    const isTouch = window.matchMedia('(hover: none)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animFrame;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      animFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    animFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position: 'fixed', top: -4, left: -4,
        width: 8, height: 8,
        borderRadius: '50%',
        background: 'var(--accent)',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s',
        willChange: 'transform',
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed', top: -20, left: -20,
        width: 40, height: 40,
        borderRadius: '50%',
        border: '1px solid rgba(79,138,255,0.5)',
        pointerEvents: 'none',
        zIndex: 99998,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s',
        willChange: 'transform',
      }} />
=======
import React, { useEffect, useRef } from 'react';

const styles = {
  outer: {
    position: 'fixed', top: 0, left: 0, zIndex: 99999,
    width: 32, height: 32,
    borderRadius: '50%',
    border: '1.5px solid rgba(79,138,255,0.6)',
    pointerEvents: 'none',
    transition: 'transform 0.12s ease, opacity 0.3s ease, width 0.25s ease, height 0.25s ease, background 0.25s ease',
    mixBlendMode: 'normal',
    transform: 'translate(-50%,-50%)',
  },
  inner: {
    position: 'fixed', top: 0, left: 0, zIndex: 99999,
    width: 5, height: 5,
    borderRadius: '50%',
    background: 'rgba(79,138,255,0.9)',
    pointerEvents: 'none',
    transition: 'transform 0.06s ease',
    transform: 'translate(-50%,-50%)',
  }
};

export default function Cursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let ox = -100, oy = -100, ix = -100, iy = -100;
    let raf;

    const onMove = e => {
      ix = e.clientX; iy = e.clientY;
      inner.style.left = ix + 'px';
      inner.style.top  = iy + 'px';
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        ox += (ix - ox) * 0.12;
        oy += (iy - oy) * 0.12;
        outer.style.left = ox + 'px';
        outer.style.top  = oy + 'px';
      });
    };

    const onEnter = () => {
      outer.style.width = '50px';
      outer.style.height = '50px';
      outer.style.background = 'rgba(79,138,255,0.08)';
      outer.style.borderColor = 'rgba(79,138,255,0.9)';
    };
    const onLeave = () => {
      outer.style.width = '32px';
      outer.style.height = '32px';
      outer.style.background = 'transparent';
      outer.style.borderColor = 'rgba(79,138,255,0.6)';
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} style={styles.outer} aria-hidden="true" />
      <div ref={innerRef} style={styles.inner} aria-hidden="true" />
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
    </>
  );
}
