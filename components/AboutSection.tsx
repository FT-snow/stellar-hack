'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STEPS } from '@/components/stellar-hack/constants'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={(el) => {
        ref.current = el!
      }}
      className="relative mt-0 min-h-screen flex items-center py-32 md:py-48 px-6 md:px-12"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            ABOUT THE EVENT
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight whitespace-pre-line leading-[1.05] mb-12"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            {'WHAT IS\nSTELLAR HACK?'}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg max-w-3xl leading-relaxed mb-20"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            A 1-day vibe-athon by COSMOS — the Science Club of MUJ. Teams of
            1–4 imagine a fictional universe, define a mission inside it, then
            build a frontend-only interactive dashboard that solves it. No
            backend. Pure creativity, design, and code.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {STEPS.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="flex flex-col">
                <span
                  className="text-6xl md:text-7xl font-bold leading-none select-none"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255,255,255,0.06)',
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="mt-4 text-xs tracking-wider"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {s.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
