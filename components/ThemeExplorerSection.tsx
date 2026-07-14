'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { THEMES } from '@/components/stellar-hack/constants'

export default function ThemeExplorerSection() {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)

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
          <span
            className="font-mono text-[10px] tracking-[0.5em] uppercase"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            THEME EXPLORER
          </span>
        </div>

        <div className="flex items-end justify-between mb-14">
          <h2
            className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight"
            style={{ color: 'rgba(255,255,255,0.92)' }}
          >
            PICK A THEME
          </h2>
          <button
            onClick={() => {
              const idx = Math.floor(Math.random() * THEMES.length)
              setActive(idx)
            }}
            className="font-mono text-[10px] tracking-[0.5em] border border-white/10 px-4 py-2 hover:bg-white/5 transition-colors duration-300"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            SHUFFLE
          </button>
        </div>

        <div className="max-w-3xl">
          {THEMES.map((t, i) => {
            const isActive = active === i
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  className="w-full text-left py-7 border-b border-white/[0.04] group"
                >
                  <h3
                    className="font-['Orbitron'] text-base md:text-lg font-bold transition-colors duration-300 group-hover:text-[rgba(94,234,212,0.8)]"
                    style={{ color: isActive ? 'rgba(94,234,212,0.8)' : 'rgba(255,255,255,0.85)' }}
                  >
                    {t.name}
                  </h3>
                  <p className="text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.tagline}
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
                        <div className="pt-5 space-y-6">
                          <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: 'rgba(255,255,255,0.55)' }}
                          >
                            {t.description}
                          </p>

                          <div>
                            <span
                              className="font-mono text-[10px] tracking-[0.35em] uppercase"
                              style={{ color: 'rgba(255,255,255,0.3)' }}
                            >
                              POSSIBLE IDEAS
                            </span>
                            <ul className="mt-2 space-y-1">
                              {t.possibleIdeas.map((idea) => (
                                <li
                                  key={idea}
                                  className="text-sm pl-4 relative before:content-['—'] before:absolute before:left-0"
                                  style={{ color: 'rgba(255,255,255,0.5)' }}
                                >
                                  {idea}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span
                              className="font-mono text-[10px] tracking-[0.35em] uppercase"
                              style={{ color: 'rgba(255,255,255,0.3)' }}
                            >
                              EXAMPLE PROMPT
                            </span>
                            <p
                              className="text-sm md:text-base mt-2 leading-relaxed"
                              style={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              {t.examplePrompt}
                            </p>
                          </div>

                          <div>
                            <span
                              className="font-mono text-[10px] tracking-[0.35em] uppercase"
                              style={{ color: 'rgba(255,255,255,0.3)' }}
                            >
                              PINTEREST KEYWORDS
                            </span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {t.pinterestKeywords.map((kw) => (
                                <span
                                  key={kw}
                                  className="border border-white/10 text-[10px] font-mono px-2.5 py-1"
                                  style={{ color: 'rgba(255,255,255,0.4)' }}
                                >
                                  {kw}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            )
          })}
        </div>

        <p
          className="font-mono text-xs tracking-wider mt-8"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          Each theme comes with a built-in scenario and seed prompt. Pick one and build your universe around it.
        </p>
      </motion.div>
    </section>
  )
}
