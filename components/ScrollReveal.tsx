'use client'

import { type ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

export default function ScrollReveal({
  children,
  className = '',
  y = 40,
  duration = 0.8,
  delay = 0,
  stagger = 0,
}: {
  children?: ReactNode
  className?: string
  y?: number
  duration?: number
  delay?: number
  stagger?: number
}) {
  const hasStagger = stagger > 0

  const parentVariants: Variants = hasStagger
    ? {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }
    : {}

  const childVariants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  }

  if (hasStagger) {
    return (
      <motion.div
        className={className}
        variants={parentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {Array.isArray(children)
          ? children.map((child, i) => (
              <motion.div key={i} variants={childVariants}>
                {child}
              </motion.div>
            ))
          : <motion.div variants={childVariants}>{children}</motion.div>
        }
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
