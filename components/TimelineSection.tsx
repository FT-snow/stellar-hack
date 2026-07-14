'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ease } from '@/components/stellar-hack/shared'

const rounds = [
  { id: 'R1', time: '10:00 AM – 2:00 PM IST', title: 'UNIVERSE DESIGN CHALLENGE' },
  { id: 'R2', time: '3:00 PM – 8:00 PM IST', title: 'PROTOTYPE DEVELOPMENT' },
  { id: 'R3', time: '8:30 PM – 10:00 PM IST', title: 'FINAL SHOWCASE & INTERVIEW' },
]

const columnVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.15 },
  }),
}

export default function TimelineSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="mt-24 md:mt-32 py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <span
        className="block font-mono text-[10px] tracking-[0.5em] uppercase mb-6"
        style={{ color: 'rgba(255,255,255,0.25)' }}
      >
        TIMELINE
      </span>
      <h2
        className="font-bold tracking-tight mb-20 text-5xl md:text-7xl lg:text-8xl"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          color: 'rgba(255,255,255,0.92)',
        }}
      >
        TIMELINE
      </h2>

      <div className="mb-12">
        <span
          className="font-mono text-xs tracking-[0.3em]"
          style={{ color: 'rgba(94,234,212,0.5)' }}
        >
          JULY 15, 2026 — ALL ROUNDS SAME DAY
        </span>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative">
        <div
          className="absolute left-0 right-0 h-px bg-white/[0.06]"
          style={{ top: '12px' }}
        />
        <div className="grid grid-cols-3">
          {rounds.map((round, i) => (
            <motion.div
              key={round.id}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={columnVariant}
            >
              <div className="flex items-center gap-2.5 h-6">
                <span
                  className="font-mono text-xs tracking-[0.3em]"
                  style={{ color: '#5eead4' }}
                >
                  {round.id}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#5eead4]/40 relative z-10" />
              </div>
              <div className="mt-5">
                <span
                  className="font-mono text-[10px] block"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  {round.time}
                </span>
                <h3
                  className="text-sm md:text-base font-bold mt-3"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {round.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative">
        <div className="absolute left-[3px] top-[3px] bottom-[3px] w-px bg-white/[0.06]" />
        <div className="space-y-10">
          {rounds.map((round, i) => (
            <motion.div
              key={round.id}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={columnVariant}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-[3px] w-1.5 h-1.5 rounded-full bg-[#5eead4]/40" />
              <span
                className="font-mono text-xs tracking-[0.3em] block"
                style={{ color: '#5eead4' }}
              >
                {round.id}
              </span>
              <span
                className="font-mono text-[10px] tracking-wider block mt-2"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {round.time}
              </span>
              <h3
                className="text-sm font-bold mt-2"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                {round.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
