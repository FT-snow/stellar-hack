'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const steps = [
  { num: '01', title: 'Create a Universe' },
  { num: '02', title: 'Define a Mission' },
  { num: '03', title: 'Prototype the Future' },
  { num: '04', title: 'Present Your Vision' },
]

const stats = [
  { value: '1–4', label: 'PER TEAM', sub: 'Solo · Duo · Trio · Squad' },
  { value: 'Online', label: 'FORMAT', sub: 'Fully remote · All submissions via Unstop' },
  { value: '2 Days', label: 'DURATION', sub: 'July 15–16, 2026' },
]

const differentiators = [
  {
    number: '01',
    title: 'Design Before Development',
    description: 'Every great product starts with a vision. Define your theme, its rules, and its story before writing code.',
  },
  {
    number: '02',
    title: 'Frontend Focus',
    description: 'No backend complexity. Build beautiful, interactive dashboards with pure HTML, CSS, JS, or any frontend framework.',
  },
  {
    number: '03',
    title: 'Story-Driven Development',
    description: "Your dashboard isn't just data — it's a narrative. Every widget tells the story of your theme.",
  },
  {
    number: '04',
    title: 'Rapid Prototyping',
    description: 'Two days to turn imagination into reality. Ship a working prototype that showcases your vision.',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={(el) => { ref.current = el! }}
      className="relative py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top: Label + Heading + Description */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            ABOUT THE EVENT
          </span>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight whitespace-pre-line leading-[1.05] mb-12"
            style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
          >
            {'WHAT IS\nSTELLAR HACK?'}
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed mb-20"
            style={{ color: 'var(--text-secondary)' }}
          >
            A 2-day vibe-athon by COSMOS — the Science Club of MUJ. Teams of
            1–4 imagine a fictional universe, define a mission inside it, then
            build a frontend-only interactive dashboard that brings it to life.
            No backend. Pure creativity, design, and code. AI tools are welcome.
          </p>
        </motion.div>

        {/* Steps: 4-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24"
        >
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col">
              <span
                className="text-6xl md:text-8xl font-bold leading-none select-none"
                style={{ fontFamily: 'var(--font-orbitron)', color: 'rgba(255,255,255,0.06)' }}
              >
                {s.num}
              </span>
              <span
                className="mt-5 text-sm md:text-base tracking-wider"
                style={{ color: 'var(--text-secondary)' }}
              >
                {s.title}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Format Stats: 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24 py-12 border-t border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <span
                className="block font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.label}
              </span>
              <span
                className="block font-bold tracking-tight leading-none"
                style={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  color: 'var(--text-primary)',
                }}
              >
                {stat.value}
              </span>
              <span
                className="block font-mono text-[11px] tracking-wider mt-4"
                style={{ color: 'var(--text-muted)' }}
              >
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Differentiators: editorial numbered list */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
        >
          <span
            className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            WHY THIS FORMAT
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
            style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
          >
            How It&apos;s Different
          </h3>
          <div>
            {differentiators.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-16 pb-10 mb-10 border-b last:border-b-0 last:mb-0 last:pb-0"
                style={{ borderColor: 'var(--border)' }}
              >
                <span
                  className="text-5xl md:text-6xl font-bold flex-shrink-0"
                  style={{ fontFamily: 'var(--font-orbitron)', color: 'rgba(94,234,212,0.15)' }}
                >
                  {item.number}
                </span>
                <div>
                  <h4
                    className="text-lg md:text-xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-base md:text-lg max-w-2xl leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
