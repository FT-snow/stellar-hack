'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GlobeComponent from '@/components/ui/globe'

const ease = [0.22, 1, 0.36, 1] as const

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = (e.clientX - window.innerWidth / 2) / 60
    const y = (e.clientY - window.innerHeight / 2) / 60
    setMouse({ x, y })
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.6, ease, delay: 0 }}
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
        }}
      >
        <div className="w-[60vw] h-[60vw] max-w-[520px] max-h-[520px]">
          <GlobeComponent />
        </div>
      </motion.div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="h-full w-full flex flex-col justify-between p-8 md:p-14 lg:p-20">
          <div className="flex items-start justify-end">
            <motion.div
              className="text-right font-mono text-[9px] tracking-[0.2em] uppercase leading-loose"
              style={{ color: 'rgba(94,234,212,0.5)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.9 }}
            >
              <div>JULY 15, 2026</div>
              <div className="flex items-center justify-end gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse" />
                1 DAY · REGISTRATION OPEN
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 -mt-12">
            <div className="overflow-hidden">
              <motion.div
                className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold tracking-[-0.04em] leading-[0.85] text-white text-center"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                initial={{ opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1, ease, delay: 0.2 }}
              >
                STELLAR
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold tracking-[-0.04em] leading-[0.85] text-white text-center"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                initial={{ opacity: 0, y: 80, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1, ease, delay: 0.35 }}
              >
                HACK
              </motion.div>
            </div>
            <motion.div
              className="mt-5 md:mt-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.8 }}
            >
              <span
                className="font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                THE VIBE-A-THON
              </span>
            </motion.div>
          </div>

          <div className="flex items-end justify-end">
            <motion.a
              href="https://unstop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto group flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 1.1 }}
            >
              <span
                className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                REGISTER NOW
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 transition-all duration-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
