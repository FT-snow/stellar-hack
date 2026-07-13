'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const scores = [
  { label: 'R1 · 30', width: '30%', opacity: 0.3, delay: 0 },
  { label: 'R2 · 50', width: '50%', opacity: 0.5, delay: 0.15 },
  { label: 'R3 · 20', width: '20%', opacity: 0.2, delay: 0.3 },
]

export default function ScoringSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={(el) => {
        ref.current = el
      }}
      className="relative mt-24 md:mt-32 py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <span
        className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
        style={{ color: 'rgba(255,255,255,0.25)' }}
      >
        SCORING
      </span>

      <div className="relative">
        <div
          className="absolute -top-16 md:-top-24 lg:-top-32 left-0 pointer-events-none select-none"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(10rem, 18vw, 18rem)',
            fontWeight: 700,
            lineHeight: 1,
            color: 'rgba(255,255,255,0.03)',
          }}
        >
          100
        </div>

        <div className="relative z-10">
          <span
            className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-16"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            TOTAL MARKS
          </span>

          <div className="max-w-3xl mb-8">
            <div className="flex h-2 md:h-3 w-full overflow-hidden">
              {scores.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{
                    duration: 1.2,
                    ease,
                    delay: s.delay,
                  }}
                  style={{
                    width: s.width,
                    backgroundColor: `rgba(94,234,212,${s.opacity})`,
                    transformOrigin: 'left',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 max-w-3xl">
            {scores.map((s) => (
              <motion.span
                key={s.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-mono text-[10px] tracking-wider"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {s.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
