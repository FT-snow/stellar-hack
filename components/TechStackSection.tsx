'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const techItems = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind',
  'GSAP',
  'Framer Motion',
  'Three.js',
  'Canvas/WebGL',
];

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32 max-w-7xl mx-auto"
    >
      <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>
        Allowed Tools
      </p>
      <h2
        className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight mb-16"
        style={{ color: 'rgba(255,255,255,0.92)' }}
      >
        TECH STACK
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
        {techItems.map((item) => (
          <motion.div
            key={item}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <span className="font-mono text-xs" style={{ color: 'rgba(94,234,212,0.3)' }}>
              —
            </span>
            <span className="font-mono text-sm tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="font-mono text-xs mt-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
        + any frontend-only framework
      </p>
    </section>
  );
}
