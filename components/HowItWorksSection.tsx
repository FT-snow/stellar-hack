'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ease } from '@/components/stellar-hack/shared'

const events = [
  { label: 'OPENING CEREMONY', day: 'Day 1 · 9:00 AM' },
  { label: 'UNIVERSE DESIGN CHALLENGE', day: 'Day 1 · 10:30 AM – 2:00 PM' },
  { label: 'PROTOTYPE DEVELOPMENT', day: 'Day 1 · 5:00 PM – 9:00 PM' },
  { label: 'FINAL SHOWCASE', day: 'Day 2 · 10:00 AM – 2:00 PM' },
]

const rounds = [
  {
    number: '01',
    title: 'Universe Design Challenge',
    marks: '30 MARKS',
    day: 'DAY 1',
    description:
      'Teams create their fictional universe before writing any code. Submit ONE PDF/PPT containing Universe Card, Mission Card, and Dashboard Blueprint. Submit via Unstop + Google Form (link shared on WhatsApp group).',
    deliverables: [
      'Universe Card — name, aesthetics, rules, lore',
      'Mission Card — problem statement, goals, stakeholders',
      'Dashboard Blueprint — wireframe, widget plan, data flow',
    ],
    advance: 'Top ~25–30 teams advance to Round 2.',
  },
  {
    number: '02',
    title: 'Prototype Development',
    marks: '50 MARKS',
    day: 'DAY 1',
    description:
      'Build a frontend dashboard from your chosen theme. Any frontend stack, no backend. AI tools are allowed.',
    deliverables: [
      'Working frontend dashboard',
      'Public GitHub repository',
      'Live deployment link',
      'README with team details',
    ],
    advance: 'Top 17 teams advance to Round 3.',
  },
  {
    number: '03',
    title: 'Final Showcase & Interview',
    marks: '20 MARKS',
    day: 'DAY 2',
    description:
      'Top 17 teams present live. 5-minute demo followed by 5-minute judge Q&A.',
    deliverables: [
      'Live demo presentation (5 min)',
      'Judge Q&A session (5 min)',
      'Final pitch of product vision',
    ],
    advance: 'Final ranking based on cumulative score (R1 + R2 + R3).',
  },
]

const timelineVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.15 },
  }),
}

function RoundRow({
  round,
  isOpen,
  onToggle,
}: {
  round: (typeof rounds)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-10 md:py-14 text-left transition-colors group"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-baseline gap-6 md:gap-8">
          <span
            className="font-bold leading-none select-none text-5xl md:text-7xl"
            style={{
              fontFamily: 'var(--font-orbitron)',
              color: isOpen
                ? 'rgba(94,234,212,0.15)'
                : 'rgba(255,255,255,0.06)',
              transition: 'color 0.3s',
            }}
          >
            {round.number}
          </span>
          <div className="flex flex-col gap-2">
            <span
              className="font-bold text-lg md:text-2xl"
              style={{
                fontFamily: 'var(--font-orbitron)',
                color: 'var(--text-primary)',
              }}
            >
              {round.title}
            </span>
            <span
              className="font-mono uppercase tracking-wider text-xs md:text-sm"
              style={{ color: 'var(--accent)' }}
            >
              {round.marks}
            </span>
            <span
              className="font-mono uppercase tracking-widest text-[10px]"
              style={{ color: 'var(--text-muted)' }}
            >
              {round.day}
            </span>
          </div>
        </div>

        <span
          className="text-2xl md:text-3xl transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shrink-0 ml-4"
          style={{ color: 'var(--text-muted)' }}
          aria-hidden
        >
          <span
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="max-w-4xl pb-12 pt-8">
              <p
                className="mb-10 max-w-3xl text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {round.description}
              </p>

              <p
                className="mb-5 text-xs font-mono uppercase"
                style={{
                  color: 'var(--text-muted)',
                  letterSpacing: '0.4em',
                }}
              >
                DELIVERABLES
              </p>
              <div className="mb-10">
                {round.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="py-4 text-sm md:text-base"
                    style={{
                      color: 'var(--text-secondary)',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p
                className="mt-8 text-sm font-mono uppercase tracking-wider"
                style={{ color: 'var(--accent)' }}
              >
                {round.advance}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function HowItWorksSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [openRound, setOpenRound] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenRound((prev) => (prev === index ? null : index))
  }

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <span
          className="block font-mono text-[10px] tracking-[0.5em] uppercase mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          HOW IT WORKS
        </span>
        <h2
          className="font-bold tracking-tight mb-20 text-5xl md:text-7xl lg:text-8xl"
          style={{
            fontFamily: 'var(--font-orbitron)',
            color: 'var(--text-primary)',
          }}
        >
          HOW IT WORKS
        </h2>

        {/* Timeline — Desktop */}
        <div className="hidden md:block relative mb-32">
          <div
            className="absolute left-0 right-0 h-px"
            style={{ top: '16px', backgroundColor: 'var(--border)' }}
          />
          <div className="grid grid-cols-4">
            {events.map((event, i) => (
              <motion.div
                key={event.label}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={timelineVariant}
              >
                <div className="flex items-center gap-3 h-8">
                  <span
                    className="font-mono text-sm tracking-[0.3em]"
                    style={{ color: 'var(--accent)' }}
                  >
                    {event.day}
                  </span>
                  <div
                    className="w-2 h-2 rounded-full relative z-10"
                    style={{ backgroundColor: 'var(--accent)', opacity: 0.4 }}
                  />
                </div>
                <div className="mt-6">
                  <h3
                    className="text-lg md:text-xl font-bold"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {event.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline — Mobile */}
        <div className="md:hidden relative mb-24">
          <div
            className="absolute left-[4px] top-[4px] bottom-[4px] w-px"
            style={{ backgroundColor: 'var(--border)' }}
          />
          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={event.label}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={timelineVariant}
                className="relative pl-8"
              >
                <div
                  className="absolute left-0 top-[4px] w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', opacity: 0.4 }}
                />
                <span
                  className="font-mono text-sm tracking-[0.3em] block"
                  style={{ color: 'var(--accent)' }}
                >
                  {event.day}
                </span>
                <h3
                  className="text-base font-bold mt-3"
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {event.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Round Accordion */}
        <div>
          {rounds.map((round, index) => (
            <RoundRow
              key={index}
              round={round}
              isOpen={openRound === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
