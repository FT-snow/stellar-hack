'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Do I need to know coding?',
    a: 'No! Round 1 is purely design-based. You can participate with just creative ideas.',
  },
  {
    q: 'Can I participate alone?',
    a: 'Teams of 1–4 are allowed — solo, duo, trio, or squad. Find teammates on our WhatsApp group.',
  },
  {
    q: 'Do I need a backend?',
    a: 'No. This is frontend-only. Build with HTML, CSS, JS, React, or any frontend framework.',
  },
  {
    q: "What if I don't finish Round 1 deliverables?",
    a: 'Submit what you have. Partial submissions are still evaluated — quality over completeness.',
  },
  {
    q: 'Is it online?',
    a: 'Yes. Fully online. Round 1 submissions via Unstop + Google Form (link on WhatsApp group). Round 2 via Unstop.',
  },
  {
    q: 'Do I have to use the provided themes?',
    a: 'No. The Theme Explorer is just for inspiration. You can invent your own universe.',
  },
  {
    q: 'How does the Quiz Challenge work?',
    a: "10 questions dropped anytime via Forms/polls during Round 2. 5 pts each, max 20 pts.",
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
          <div key={i} className="py-6 border-b border-white/[0.04]">
            <button
              className="flex justify-between items-center w-full cursor-pointer text-left"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-sm md:text-base font-medium pr-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {faq.q}
              </span>
              <motion.span
                className="font-mono text-lg shrink-0"
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
                  <p className="text-sm py-4" style={{ color: 'rgba(255,255,255,0.45)' }}>
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
