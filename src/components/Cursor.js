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
    </>
  );
}
