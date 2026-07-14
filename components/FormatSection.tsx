'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const stats = [
  { value: '1–4', label: 'PER TEAM', sub: 'Solo · Duo · Trio · Squad' },
  { value: 'Online', label: 'FORMAT', sub: 'Fully remote · All submissions via Unstop' },
  { value: '1 Day', label: 'DURATION', sub: 'July 15, 2026 · 10 AM – 10 PM IST' },
]

export default function FormatSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="mt-24 md:mt-32 py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <span
        className="block font-mono text-[10px] tracking-[0.5em] uppercase mb-6"
        style={{ color: 'rgba(94,234,212,0.5)' }}
      >
        FORMAT
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease, delay: i * 0.12 }}
          >
            <span
              className="block font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {stat.label}
            </span>
            <span
              className="block font-bold tracking-tight leading-none"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              {stat.value}
            </span>
            <span
              className="block font-mono text-[11px] tracking-wider mt-4"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              {stat.sub}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-white/[0.06] mt-16 pt-8">
        <p
          className="font-mono text-[11px] tracking-wider"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Frontend-only · No backend · Online
        </p>
      </div>
    </section>
  )
}
