'use client'

import ScrollReveal from '@/components/ScrollReveal'

const techItems = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind',
  'GSAP',
  'Framer Motion',
  'Three.js',
  'Canvas/WebGL',
]

const aiTools = [
  'ChatGPT',
  'Claude',
  'Gemini',
  'GitHub Copilot',
  'Cursor',
  'Bolt.new',
  'Lovable',
  'Replit AI',
  'v0 by Vercel',
]

export default function TechStackSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32 max-w-7xl mx-auto">
      <ScrollReveal>
        <span
          className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          ALLOWED TOOLS
        </span>
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-16"
          style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
        >
          TECH STACK
        </h2>
      </ScrollReveal>

      <ScrollReveal stagger={0.05} className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
        {techItems.map((item) => (
          <div key={item} className="flex items-center gap-3 group cursor-default">
            <span className="font-mono text-xs transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'rgba(94,234,212,0.3)' }}>—</span>
            <span className="font-mono text-sm tracking-wider transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
              {item}
            </span>
          </div>
        ))}
      </ScrollReveal>

      <p className="font-mono text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
        + any frontend-only framework
      </p>

      <ScrollReveal>
        <span
          className="font-mono text-[10px] tracking-[0.5em] uppercase block mt-16 mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          AI TOOLS ALLOWED
        </span>
      </ScrollReveal>

      <ScrollReveal stagger={0.05} className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
        {aiTools.map((item) => (
          <div key={item} className="flex items-center gap-3 group cursor-default">
            <span className="font-mono text-xs transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'rgba(94,234,212,0.3)' }}>—</span>
            <span className="font-mono text-sm tracking-wider transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
              {item}
            </span>
          </div>
        ))}
      </ScrollReveal>

      <p className="font-mono text-xs mt-8" style={{ color: 'var(--text-muted)' }}>
        Teams should be prepared to explain their implementation during the final interview.
      </p>
    </section>
  )
}
