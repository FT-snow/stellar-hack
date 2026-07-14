'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ease } from '@/components/stellar-hack/shared'

const events = [
  { label: 'OPENING CEREMONY', day: 'Day 1 · 9:00 AM' },
  { label: 'UNIVERSE DESIGN CHALLENGE', day: 'Day 1 · 10:30 AM – 2:00 PM' },
  { label: 'PROTOTYPE DEVELOPMENT', day: 'Day 1 · 5:00 PM – 9:00 PM' },
  { label: 'FINAL SHOWCASE', day: 'Day 2 · 10:00 AM – 2:00 PM' },
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

      <div className="mb-16">
        <span
          className="font-mono text-sm tracking-[0.2em]"
          style={{ color: 'rgba(94,234,212,0.5)' }}
        >
          JULY 15–16, 2026
        </span>
      </div>

      {/* Desktop */}
      <div className="hidden md:block relative">
        <div
          className="absolute left-0 right-0 h-px bg-white/[0.06]"
          style={{ top: '16px' }}
        />
        <div className="grid grid-cols-4">
          {events.map((event, i) => (
            <motion.div
              key={event.label}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={columnVariant}
            >
              <div className="flex items-center gap-3 h-8">
                <span
                  className="font-mono text-sm tracking-[0.3em]"
                  style={{ color: '#5eead4' }}
                >
                  {event.day}
                </span>
                <div className="w-2 h-2 rounded-full bg-[#5eead4]/40 relative z-10" />
              </div>
              <div className="mt-6">
                <h3
                  className="text-lg md:text-xl font-bold"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {event.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative">
        <div className="absolute left-[4px] top-[4px] bottom-[4px] w-px bg-white/[0.06]" />
        <div className="space-y-12">
          {events.map((event, i) => (
            <motion.div
              key={event.label}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={columnVariant}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-[4px] w-2 h-2 rounded-full bg-[#5eead4]/40" />
              <span
                className="font-mono text-sm tracking-[0.3em] block"
                style={{ color: '#5eead4' }}
              >
                {event.day}
              </span>
              <h3
                className="text-base font-bold mt-3"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                {event.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
