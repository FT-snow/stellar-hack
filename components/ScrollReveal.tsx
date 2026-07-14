'use client'

import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollReveal({
  children,
  className = '',
  y = 40,
  duration = 0.8,
  delay = 0,
  stagger = 0,
  children: childrenProp,
}: {
  children?: ReactNode
  className?: string
  y?: number
  duration?: number
  delay?: number
  stagger?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger > 0 ? el.children : el
    const ctx = gsap.context(() => {
      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger: stagger || 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      })
    })
    return () => ctx.revert()
  }, [y, duration, delay, stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
