'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    number: '01',
    title: 'Design Before Development',
    description:
      'Every great product starts with a vision. Define your theme, its rules, and its story before writing code.',
  },
  {
    number: '02',
    title: 'Frontend Focus',
    description:
      'No backend complexity. Build beautiful, interactive dashboards with pure HTML, CSS, JS, or any frontend framework.',
  },
  {
    number: '03',
    title: 'Story-Driven Development',
    description:
      "Your dashboard isn't just data — it's a narrative. Every widget tells the story of your theme.",
  },
  {
    number: '04',
    title: 'Rapid Prototyping',
    description:
      'Two days to turn imagination into reality. Ship a working prototype that showcases your vision.',
  },
]

export default function DifferentSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/25 block mb-6">
            Why This Format
          </span>
          <h2 className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight text-white/92">
            How It&apos;s Different
          </h2>
        </motion.div>

        <div>
          {items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col md:flex-row gap-6 md:gap-16 pb-14 mb-14 border-b border-white/[0.06] last:border-b-0 last:mb-0 last:pb-0"
            >
              <span className="font-['Orbitron'] text-6xl md:text-7xl text-[rgba(94,234,212,0.15)] flex-shrink-0">
                {item.number}
              </span>
              <div>
                <h3 className="font-['Orbitron'] text-xl md:text-2xl font-bold text-white/85 mb-3">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
