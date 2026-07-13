'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const THEMES = [
  { name: 'Aqua Nexus', desc: 'Deep-sea civilization where bioluminescence powers all technology.', seed: 'Rising ocean temperatures threaten to extinguish the light sources that sustain society.' },
  { name: 'Orbital Station Kepler-7', desc: 'Space station orbiting a dying star.', seed: 'The star is collapsing faster than predicted — evacuate or harness the final energy burst.' },
  { name: 'Neon Drift', desc: 'Cyberpunk megacity where memories are traded as currency.', seed: 'A black market dealer discovers a memory that could topple the ruling corporation.' },
  { name: 'Tundra Protocol', desc: 'Arctic research outpost studying an anomalous signal.', seed: "The signal is a distress call from something that shouldn't exist." },
  { name: 'Verdant Core', desc: 'Post-climate-collapse Earth where forests are sentient.', seed: 'Human settlements must negotiate with the forest collective for resources.' },
  { name: 'Sand Matrix', desc: 'Desert nomads using ancient tech powered by solar winds.', seed: 'A sandstorm reveals a buried artifact that could restore water to the wastelands.' },
  { name: 'Chrono Shift', desc: 'Society where time moves differently in districts.', seed: 'A clockmaker discovers the temporal distortion is artificial.' },
  { name: 'Synth Bloom', desc: 'Bio-engineered ecosystem where organisms are programmed like software.', seed: 'A rogue organism has evolved beyond its code.' },
  { name: 'Void Relay', desc: 'Interstellar communication hub connecting civilizations.', seed: "A message arrives from a galaxy that shouldn't be able to communicate." },
  { name: 'Iron Canopy', desc: "Megastructure city where the sky hasn't been seen in 200 years.", seed: 'Engineers discover the canopy is failing.' },
]

export default function ThemeExplorerSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? THEMES : THEMES.slice(0, 6)

  return (
    <section
      ref={(el) => { ref.current = el! }}
      className="relative py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto mt-24 md:mt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-end justify-between mb-6">
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
            THEME EXPLORER
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2
            className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            PICK A UNIVERSE
          </h2>
          <button
            onClick={() => {
              const idx = Math.floor(Math.random() * THEMES.length)
              setActive(idx)
              if (!showAll && idx >= 6) setShowAll(true)
            }}
            className="font-mono text-[10px] tracking-[0.5em] border border-white/10 px-4 py-2 hover:bg-white/5 transition-colors duration-300"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            SHUFFLE
          </button>
        </div>

        <div className="max-w-3xl">
          {visible.map((t, i) => {
            const isActive = active === i
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  className="w-full text-left py-6 border-b border-white/[0.04] group"
                >
                  <h3
                    className="font-['Orbitron'] text-sm font-bold transition-colors duration-300 group-hover:text-[rgba(94,234,212,0.8)]"
                    style={{ color: isActive ? 'rgba(94,234,212,0.8)' : 'rgba(255,255,255,0.85)' }}
                  >
                    {t.name}
                  </h3>
                  <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {t.desc}
                  </p>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <span className="font-mono text-[9px] tracking-[0.35em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                            MISSION SEED
                          </span>
                          <p className="text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            {t.seed}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            )
          })}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6"
          >
            <button
              onClick={() => setShowAll(true)}
              className="font-mono text-[10px] tracking-[0.5em] border border-white/10 px-4 py-2 hover:bg-white/5 transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              SHOW MORE (+{THEMES.length - 6})
            </button>
          </motion.div>
        )}

        <p
          className="font-mono text-[10px] tracking-wider mt-8"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          Stuck on ideation? Pick a theme — or invent your own universe entirely.
        </p>
      </motion.div>
    </section>
  )
}
