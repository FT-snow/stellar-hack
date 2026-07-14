'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

const awards = [
  'Best Overall Prototype',
  'Best UI/UX Design',
  'Best Theme Design',
  'Best Mission Design',
  'Best Interactive Experience',
  'Most Innovative Solution',
  "People's Choice",
];

export default function AwardsSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32 max-w-7xl mx-auto"
    >
      <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>
        Awards
      </p>
      <h2
        className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight mb-16"
        style={{ color: 'rgba(255,255,255,0.92)' }}
      >
        PRIZES
      </h2>

      <div className="max-w-2xl">
        {awards.map((award, i) => (
          <motion.div
            key={award}
            className="flex items-center gap-6 py-6 border-b border-white/[0.04] group cursor-default"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
          >
            <span className="font-mono text-xs tracking-wider w-8" style={{ color: 'rgba(255,255,255,0.15)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className="text-base md:text-lg font-medium transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = 'rgba(94,234,212,0.8)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              {award}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="font-mono text-xs tracking-wider mt-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Top 10 featured on COSMOS page · Top 3 win goodies
      </p>
    </section>
  );
}
