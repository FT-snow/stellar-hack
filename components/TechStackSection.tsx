'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

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
]

const aiTools = [
  'ChatGPT',
  'Claude',
  'Gemini',
  'GitHub Copilot',
  'Cursor',
  'Bolt.new',
  'Lovable',
  'Replit AI',
  'v0 by Vercel',
]

export default function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32 max-w-7xl mx-auto"
    >
      <span
        className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
        style={{ color: 'var(--text-muted)' }}
      >
        ALLOWED TOOLS
      </span>
      <h2
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-16"
        style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
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
            <span className="font-mono text-xs" style={{ color: 'rgba(94,234,212,0.3)' }}>—</span>
            <span className="font-mono text-sm tracking-wider" style={{ color: 'var(--text-muted)' }}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="font-mono text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
        + any frontend-only framework
      </p>

      <span
        className="font-mono text-[10px] tracking-[0.5em] uppercase block mt-16 mb-6"
        style={{ color: 'var(--text-muted)' }}
      >
        AI TOOLS ALLOWED
      </span>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
        {aiTools.map((item) => (
          <motion.div
            key={item}
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <span className="font-mono text-xs" style={{ color: 'rgba(94,234,212,0.3)' }}>—</span>
            <span className="font-mono text-sm tracking-wider" style={{ color: 'var(--text-muted)' }}>
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="font-mono text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
        Teams should be prepared to explain their implementation during the final interview.
      </p>
    </section>
  )
}
