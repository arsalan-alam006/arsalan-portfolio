<<<<<<< HEAD
import React, { useRef, useMemo, Suspense } from 'react';
=======
import React, { useRef, useMemo } from 'react';
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* Floating icosahedron wireframe */
function FloatingGem() {
  const meshRef = useRef();
  const edgesRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18;
      meshRef.current.rotation.y = t * 0.26;
      meshRef.current.position.y = Math.sin(t * 0.7) * 0.25;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = t * 0.18;
      edgesRef.current.rotation.y = t * 0.26;
      edgesRef.current.position.y = Math.sin(t * 0.7) * 0.25;
    }
  });

  return (
    <group>
<<<<<<< HEAD
=======
      {/* Glowing solid core */}
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#1a4aff"
          emissive="#0a2aaa"
          emissiveIntensity={0.6}
          transparent
          opacity={0.12}
          wireframe={false}
        />
      </mesh>
<<<<<<< HEAD
=======
      {/* Wireframe shell */}
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
      <lineSegments ref={edgesRef}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.15, 1)]} />
        <lineBasicMaterial color="#4f8aff" transparent opacity={0.55} />
      </lineSegments>
    </group>
  );
}

<<<<<<< HEAD
=======
/* Small orbiting spheres */
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
function OrbitRing({ radius, speed, color, size = 0.06 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 0.4;
    }
  });
  return (
    <mesh ref={ref}>
<<<<<<< HEAD
      <sphereGeometry args={[size, 10, 10]} />
=======
      <sphereGeometry args={[size, 12, 12]} />
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
    </mesh>
  );
}

<<<<<<< HEAD
/* Reduced star count for performance */
function Stars() {
  const count = 900; // was 1800 — cut in half for mobile perf
=======
/* Starfield particles */
function Stars() {
  const count = 1800;
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 30;
    return arr;
  }, []);

  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#8ab4ff" size={0.03} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

<<<<<<< HEAD
=======
/* Ring torus */
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
function Ring() {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = 1.1 + Math.sin(t * 0.4) * 0.1;
      ref.current.rotation.z = t * 0.12;
    }
  });
  return (
    <mesh ref={ref}>
<<<<<<< HEAD
      <torusGeometry args={[1.9, 0.008, 8, 80]} />
=======
      <torusGeometry args={[1.9, 0.008, 8, 100]} />
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
      <meshBasicMaterial color="#4f8aff" transparent opacity={0.3} />
    </mesh>
  );
}

export default function Scene3D({ style }) {
  return (
    <Canvas
      style={{ ...style, background: 'transparent' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
<<<<<<< HEAD
      dpr={[1, 1.2]}  /* was [1,1.5] — lower max DPR = less GPU load */
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      frameloop="always"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#4f8aff" />
        <pointLight position={[-5, -3, -5]} intensity={0.6} color="#a259ff" />
        <Stars />
        <FloatingGem />
        <Ring />
        <OrbitRing radius={2.2} speed={0.5}  color="#4f8aff" size={0.05} />
        <OrbitRing radius={2.6} speed={0.32} color="#a259ff" size={0.04} />
        <OrbitRing radius={1.8} speed={0.8}  color="#00c896" size={0.035} />
      </Suspense>
=======
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#4f8aff" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#a259ff" />

      <Stars />
      <FloatingGem />
      <Ring />
      <OrbitRing radius={2.2} speed={0.5}  color="#4f8aff" size={0.05} />
      <OrbitRing radius={2.6} speed={0.32} color="#a259ff" size={0.04} />
      <OrbitRing radius={1.8} speed={0.8}  color="#00c896" size={0.035} />
>>>>>>> d5408dbe1f0fd20a071e58a9467f39c6c7a51472
    </Canvas>
  );
}
