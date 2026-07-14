'use client'

import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    num: '01',
    title: 'We Give You a Universe',
    desc: 'Pick from 5 theme categories — Cosmic Frontiers, Digital Futures, Tomorrow\'s Earth, Beyond Human, or Reality Reimagined. The universe is ours. The theme is set.',
  },
  {
    num: '02',
    title: 'You Choose the Mission',
    desc: 'What goes wrong in your universe? A crisis? A calamity? A challenge? That\'s your mission. You decide what matters inside this world — then you solve it.',
  },
  {
    num: '03',
    title: 'Build the Dashboard',
    desc: 'Turn your mission into a working frontend dashboard that monitors, responds to, or solves the crisis you defined. Pure HTML, CSS, JS, or any framework.',
  },
]

const stats = [
  { value: '1–4', label: 'PER TEAM', sub: 'Solo · Duo · Trio · Squad' },
  { value: 'Online', label: 'FORMAT', sub: 'Fully remote · All submissions via Unstop' },
  { value: '2 Days', label: 'DURATION', sub: 'July 15–16, 2026' },
]

const differentiators = [
  {
    number: '01',
    title: 'We Set the World, You Write the Story',
    description: 'We give you a universe — its aesthetics, its rules, its setting. But the crisis inside it? The mission? That\'s all you.',
  },
  {
    number: '02',
    title: 'Frontend Focus',
    description: 'No backend complexity. Build beautiful, interactive dashboards with pure HTML, CSS, JS, or any frontend framework.',
  },
  {
    number: '03',
    title: 'Dashboard as Narrative',
    description: "Your dashboard isn't just data — it's a story. Every widget tells how your team responds to the crisis you defined.",
  },
  {
    number: '04',
    title: '48 Hours, Full Build',
    description: 'Two days to turn your mission into a working prototype. Ship something real.',
  },
]

export default function AboutSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Top: Label + Heading + Description */}
        <ScrollReveal>
          <span
            className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            ABOUT THE EVENT
          </span>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight whitespace-pre-line leading-[1.05] mb-12"
            style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
          >
            {'WHAT IS\nSTELLAR HACK?'}
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed mb-20"
            style={{ color: 'var(--text-secondary)' }}
          >
            A 2-day vibe-athon by COSMOS — the Science Club of MUJ. We give you
            a universe. You choose the mission — a crisis, a calamity, a challenge
            that matters inside that world. Then you build a frontend dashboard
            to monitor, respond to, or solve it. No backend. Pure creativity,
            design, and code. AI tools are welcome.
          </p>
        </ScrollReveal>

        {/* Steps: 3-column grid */}
        <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col">
              <span
                className="text-6xl md:text-8xl font-bold leading-none select-none"
                style={{ fontFamily: 'var(--font-orbitron)', color: 'rgba(255,255,255,0.06)' }}
              >
                {s.num}
              </span>
              <span
                className="mt-5 text-sm md:text-base font-bold tracking-wider"
                style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
              >
                {s.title}
              </span>
              <span
                className="mt-3 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {s.desc}
              </span>
            </div>
          ))}
        </ScrollReveal>

        {/* Format Stats: 3-column grid */}
        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-24 py-12 border-t border-b" style={{ borderColor: 'var(--border)' }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <span
                  className="block font-mono text-[10px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {stat.label}
                </span>
                <span
                  className="block font-bold tracking-tight leading-none whitespace-nowrap"
                  style={{
                    fontFamily: 'var(--font-orbitron)',
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="block font-mono text-[11px] tracking-wider mt-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Differentiators: editorial numbered list */}
        <ScrollReveal>
          <span
            className="font-mono text-[10px] tracking-[0.5em] uppercase block mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            WHY THIS FORMAT
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold tracking-tight mb-12"
            style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
          >
            How It&apos;s Different
          </h3>
        </ScrollReveal>
        <div>
          {differentiators.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.1}>
              <div
                className="flex flex-col md:flex-row gap-6 md:gap-16 pb-10 mb-10 border-b last:border-b-0 last:mb-0 last:pb-0"
                style={{ borderColor: 'var(--border)' }}
              >
                <span
                  className="text-5xl md:text-6xl font-bold flex-shrink-0"
                  style={{ fontFamily: 'var(--font-orbitron)', color: 'rgba(94,234,212,0.15)' }}
                >
                  {item.number}
                </span>
                <div>
                  <h4
                    className="text-lg md:text-xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-base md:text-lg max-w-2xl leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
