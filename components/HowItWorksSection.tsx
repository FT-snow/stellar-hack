'use client'

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const events = [
  { label: 'OPENING CEREMONY', day: 'Day 1', time: '9:00 AM' },
  { label: 'UNIVERSE DESIGN CHALLENGE', day: 'Day 1', time: '10:30 AM – 2:00 PM' },
  { label: 'PROTOTYPE DEVELOPMENT', day: 'Day 1', time: '5:00 PM – 9:00 PM' },
  { label: 'FINAL SHOWCASE', day: 'Day 2', time: '10:00 AM – 2:00 PM' },
]

const rounds = [
  {
    number: '01',
    title: 'Universe Design Challenge',
    day: 'DAY 1',
    description:
      'You\'ve picked a theme — now define what goes wrong inside it. What\'s the crisis? The calamity? The challenge? Submit ONE PDF/PPT with your Universe Card (what the world looks like), Mission Card (what went wrong and how you respond), and Dashboard Blueprint (how your dashboard monitors/solves it). Submit via Unstop + Google Form (link on WhatsApp).',
    deliverables: [
      'Universe Card — the world we gave you, your take on it',
      'Mission Card — the crisis you chose, why it matters, how you respond',
      'Dashboard Blueprint — wireframe, widgets, data flow',
    ],
    advance: 'Top teams advance to Round 2.',
  },
  {
    number: '02',
    title: 'Prototype Development',
    day: 'DAY 1',
    description:
      'Build a frontend dashboard that responds to the crisis you defined. Monitor it, solve it, visualize it — your dashboard tells the story of how your team handles the mission. Any frontend stack, no backend. AI tools are allowed.',
    deliverables: [
      'Working frontend dashboard',
      'Public GitHub repository',
      'Live deployment link',
      'README with team details',
    ],
    advance: 'Top teams advance to Round 3.',
  },
  {
    number: '03',
    title: 'Final Showcase & Interview',
    day: 'DAY 2',
    description:
      'Top teams present live. 5-minute demo followed by 5-minute judge Q&A.',
    deliverables: [
      'Live demo presentation (5 min)',
      'Judge Q&A session (5 min)',
      'Final pitch of product vision',
    ],
    advance: 'Final ranking based on cumulative performance across all rounds.',
  },
]

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
        className="flex w-full items-center justify-between py-10 md:py-14 text-left transition-all group hover:pl-4"
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
  const [openRound, setOpenRound] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenRound((prev) => (prev === index ? null : index))
  }

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <span
            className="block font-mono text-[10px] tracking-[0.5em] uppercase mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            THE MISSION IS YOURS
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
        </ScrollReveal>

        {/* Timeline — Desktop */}
        <ScrollReveal stagger={0.12} className="hidden md:block relative mb-32">
          <div
            className="absolute left-0 right-0 h-px"
            style={{ top: '16px', backgroundColor: 'var(--border)' }}
          />
          <div className="grid grid-cols-4 gap-4">
            {events.map((event) => (
              <div key={event.label}>
                <div className="flex items-start gap-3 min-h-[32px]">
                  <div className="flex flex-col pt-0.5">
                    <span
                      className="font-mono text-xs tracking-[0.15em]"
                      style={{ color: 'var(--accent)' }}
                    >
                      {event.day}
                    </span>
                    <span
                      className="font-mono text-[10px] tracking-[0.1em]"
                      style={{ color: 'rgba(94,234,212,0.5)' }}
                    >
                      {event.time}
                    </span>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full relative z-10 shrink-0 mt-1"
                    style={{ backgroundColor: 'var(--accent)', opacity: 0.4 }}
                  />
                </div>
                <div className="mt-6">
                  <h3
                    className="text-base md:text-lg font-bold leading-snug"
                    style={{
                      fontFamily: 'var(--font-orbitron)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {event.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline — Mobile */}
        <ScrollReveal stagger={0.1} className="md:hidden relative mb-24">
          <div
            className="absolute left-[4px] top-[4px] bottom-[4px] w-px"
            style={{ backgroundColor: 'var(--border)' }}
          />
          <div className="space-y-12">
            {events.map((event) => (
              <div key={event.label} className="relative pl-8">
                <div
                  className="absolute left-0 top-[4px] w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--accent)', opacity: 0.4 }}
                />
                <span
                  className="font-mono text-xs tracking-[0.15em] block"
                  style={{ color: 'var(--accent)' }}
                >
                  {event.day} · {event.time}
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
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Round Accordion */}
        <ScrollReveal stagger={0.08}>
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
      </ScrollReveal>
      </div>
    </section>
  )
}
