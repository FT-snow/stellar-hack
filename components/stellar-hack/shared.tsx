import React from 'react'
import { cn } from '@/lib/utils'

export const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <span
        className="font-mono text-[10px] tracking-[0.35em] uppercase"
        style={{ color: 'rgba(255,255,255,0.35)' }}
      >
        {children}
      </span>
    </div>
  )
}

export function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] mb-6 whitespace-pre-line leading-[1.05]',
        className
      )}
      style={{
        fontFamily: "'Orbitron', sans-serif",
        color: 'rgba(255,255,255,0.9)',
      }}
    >
      {children}
    </h2>
  )
}
