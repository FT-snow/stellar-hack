'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'When is the event?',
    a: 'Stellar Hack runs over 2 days — July 15–16, 2026. Day 1: 9 AM to 9 PM (Opening Ceremony + Rounds 1 & 2). Day 2: 10 AM to 2 PM (Final Showcase & Presentations).',
  },
  {
    q: 'Can I participate alone?',
    a: 'Teams of 1–4 are allowed — solo, duo, trio, or squad. Find teammates on our WhatsApp group.',
  },
  {
    q: 'Do I need to know coding?',
    a: 'No! Round 1 is purely design-based. You can participate with just creative ideas. For Round 2, AI tools like ChatGPT, Claude, and Cursor are allowed to help you build.',
  },
  {
    q: 'Do I need a backend?',
    a: 'No. This is frontend-only. Build with HTML, CSS, JS, React, or any frontend framework. Backend is optional and will not receive additional marks.',
  },
  {
    q: 'What AI tools are allowed?',
    a: 'You may use ChatGPT, Claude, Gemini, GitHub Copilot, Cursor, Bolt.new, Lovable, Replit AI, v0 by Vercel, and more. Teams should be prepared to explain their implementation during the final interview.',
  },
  {
    q: 'Is it online?',
    a: 'Yes. Fully online. Round 1 submissions via Unstop + Google Form (link on WhatsApp group). Round 2 submissions via GitHub + deployment link.',
  },
  {
    q: 'Do I have to use the provided themes?',
    a: 'Yes. Pick one of the 5 theme categories and build your universe, mission, and dashboard around it.',
  },
  {
    q: 'What are the judging criteria?',
    a: 'Round 1: Creativity, Universe Design, Mission Design, Dashboard Blueprint, Feasibility. Round 2: UI/UX, Story Implementation, Creativity, Interactivity. Round 3: Presentation, Technical Understanding, Design Decisions, Product Vision.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32 max-w-7xl mx-auto"
    >
      <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>
        FAQ
      </p>
      <h2
        className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight mb-16"
        style={{ color: 'rgba(255,255,255,0.92)' }}
      >
        QUESTIONS?
      </h2>

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <div key={i} className="py-7 border-b border-white/[0.04]">
            <button
              className="flex justify-between items-center w-full cursor-pointer text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-base md:text-lg font-medium pr-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {faq.q}
              </span>
              <motion.span
                className="font-mono text-xl shrink-0"
                style={{ color: 'rgba(255,255,255,0.45)' }}
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-sm md:text-base py-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
