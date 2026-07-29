"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

// Particle system for magical atmosphere
function MagicParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#C9A84C"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

// Curtain mesh component - much more visible now
function Curtain({ side }: { side: "left" | "right" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 1) {
            clearInterval(interval);
            return 1;
          }
          return p + 0.008;
        });
      }, 16);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Easing function for smooth curtain opening
      const eased = 1 - Math.pow(1 - progress, 3);
      const closedX = side === "left" ? -1.2 : 1.2;
      const openedX = side === "left" ? -4.5 : 4.5;
      meshRef.current.position.x = closedX + (openedX - closedX) * eased;
    }
  });

  // Create curtain geometry with dramatic folds
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(4, 8, 40, 80);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      // Dramatic wave-like folds
      const fold = Math.sin(x * 5) * 0.12 + Math.sin(y * 3) * 0.05 + Math.cos(x * 2 + y) * 0.04;
      positions.setZ(i, fold);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[side === "left" ? -1.2 : 1.2, 0, 0.5]}
    >
      <meshStandardMaterial
        color="#B22222"
        roughness={0.6}
        metalness={0.15}
        side={THREE.DoubleSide}
        emissive="#8B0000"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// 3D Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#FFE4B5" />
      <pointLight position={[0, 0, 4]} intensity={1.5} color="#C9A84C" distance={12} />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#FF6B6B" distance={8} />
      <pointLight position={[3, 2, 2]} intensity={0.8} color="#FF6B6B" distance={8} />
      <spotLight
        position={[0, 6, 3]}
        angle={0.6}
        penumbra={0.8}
        intensity={2}
        color="#FFD700"
      />
      <Curtain side="left" />
      <Curtain side="right" />
      <MagicParticles />
    </>
  );
}

// Fallback for SSR - prevents hydration mismatch
function HeroCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] via-[#0A0A0F] to-[#0A0A0F]" />
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true }}
    >
      <Scene />
    </Canvas>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#0A0A0F]"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0A0A0F]" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,15,0.8)_100%)]" />

      {/* Content - above canvas */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="mb-6 rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(22,22,31,0.7)] px-5 py-2 backdrop-blur-md"
        >
          <span className="text-sm tracking-wider text-[#C9A84C]">
            ✦ 奇門遁甲 · 精準預測 ✦
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 1 }}
          className="text-4xl font-bold leading-tight tracking-wide sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Noto Serif TC', serif" }}
        >
          <span className="text-gradient-gold">精準預測</span>
          <br />
          <span className="text-[#F5F5F7]">無需八字</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[#A1A1AA] sm:text-xl"
          style={{ fontFamily: "'Noto Serif TC', serif" }}
        >
          100% 準確！從不向客人索取出生年月日時，
          <br className="hidden sm:block" />
          一樣能精準點出問題。
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-[#0A0A0F] transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8B7332, #C9A84C, #E8D48B)",
              boxShadow: "0 0 30px rgba(201, 168, 76, 0.3)",
            }}
          >
            立即預約諮詢
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[#71717A]">向下滾動探索</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="h-6 w-4 rounded-full border border-[#71717A] p-1"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
