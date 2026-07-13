'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FormatSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto mt-24 md:mt-32">
      <div ref={ref}>
        <p
          className="mb-16"
          style={{
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            fontSize: '10px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
          }}
        >
          Format
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <motion.div
            className="relative md:col-span-2 mb-8 md:mb-12"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.95)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(8rem, 15vw, 16rem)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.06)',
                display: 'block',
              }}
            >
              2–4
            </span>
            <span
              className="absolute bottom-2 right-4 md:bottom-4 md:right-8"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '9px',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(94,234,212,0.4)',
              }}
            >
              Per Team
            </span>
          </motion.div>

          <motion.div
            className="relative mb-8 md:mb-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.95)',
              transition: 'opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s',
            }}
          >
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(8rem, 15vw, 16rem)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.06)',
                display: 'block',
              }}
            >
              Online
            </span>
            <span
              className="absolute bottom-2 right-4 md:bottom-4 md:right-8"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '9px',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(94,234,212,0.4)',
              }}
            >
              Format
            </span>
          </motion.div>

          <motion.div
            className="relative"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'scale(1)' : 'scale(0.95)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
            }}
          >
            <span
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(8rem, 15vw, 16rem)',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.06)',
                display: 'block',
              }}
            >
              2 Days
            </span>
            <span
              className="absolute bottom-2 right-4 md:bottom-4 md:right-8"
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: '9px',
                letterSpacing: '0.5em',
                textTransform: 'uppercase',
                color: 'rgba(94,234,212,0.4)',
              }}
            >
              Duration
            </span>
          </motion.div>
        </div>

        <div className="border-t border-white/[0.04] mt-16 pt-8">
          <p
            style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            Frontend-only · No backend · Online
          </p>
        </div>
      </div>
    </section>
  );
}
