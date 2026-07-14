'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EvaluationItem {
  label: string;
  score: number;
}

interface Round {
  number: string;
  title: string;
  marks: string;
  description: string;
  deliverables: string[];
  evaluation: EvaluationItem[];
  advance: string;
}

const rounds: Round[] = [
  {
    number: '01',
    title: 'Universe Design Challenge',
    marks: '30 MARKS',
    description:
      'Submit a 3-slide PPT containing your Universe Card, Mission Card, and Dashboard Blueprint. Submit via Unstop + Google Form (link shared on WhatsApp group).',
    deliverables: [
      'Slide 1 — Universe Card: name, aesthetics, rules, lore',
      'Slide 2 — Mission Card: problem statement, goals, stakeholders',
      'Slide 3 — Dashboard Blueprint: wireframe, widget plan, data flow',
    ],
    evaluation: [
      { label: 'Creativity & Originality', score: 10 },
      { label: 'Universe Design', score: 5 },
      { label: 'Mission Design', score: 5 },
      { label: 'Dashboard Planning', score: 5 },
      { label: 'Presentation & Feasibility', score: 5 },
    ],
    advance: 'Top ~25–30 teams advance to Round 2.',
  },
  {
    number: '02',
    title: 'Prototype Development',
    marks: '50 MARKS',
    description:
      'Build a frontend dashboard from your chosen theme. Any frontend stack, no backend.',
    deliverables: [
      'Working frontend dashboard',
      'Quiz Challenge completion (10 Qs, 5 pts each, max 20 pts)',
      'Final submission via Unstop + Google Form',
    ],
    evaluation: [
      { label: 'UI/UX Design', score: 15 },
      { label: 'Story & Mission Implementation', score: 10 },
      { label: 'Creativity & Innovation', score: 10 },
      { label: 'Interactivity & Animations', score: 10 },
      { label: 'Organizer Discretion', score: 5 },
    ],
    advance: 'Top 17 teams advance to Round 3.',
  },
  {
    number: '03',
    title: 'Final Showcase & Interview',
    marks: '20 MARKS',
    description:
      'Top 17 teams present live. 5-minute demo followed by 5-minute judge Q&A.',
    deliverables: [
      'Live demo presentation (5 min)',
      'Judge Q&A session (5 min)',
      'Final pitch of product vision',
    ],
    evaluation: [
      { label: 'Presentation & Communication', score: 5 },
      { label: 'Technical Understanding', score: 5 },
      { label: 'Design Decisions & Justification', score: 5 },
      { label: 'Overall Product Vision', score: 5 },
    ],
    advance: 'Final ranking based on cumulative score (R1 + R2 + R3).',
  },
];

function RoundRow({
  round,
  isOpen,
  onToggle,
}: {
  round: Round;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-10 md:py-14 text-left transition-colors group"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-baseline gap-6 md:gap-8">
          <span
            className="text-5xl md:text-7xl font-bold leading-none select-none"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              color: isOpen ? 'rgba(94,234,212,0.15)' : 'rgba(255,255,255,0.06)',
              transition: 'color 0.3s',
            }}
          >
            {round.number}
          </span>
          <div className="flex flex-col gap-2">
            <span
              className="text-lg md:text-2xl font-bold"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {round.title}
            </span>
            <span
              className="text-xs md:text-sm font-mono uppercase tracking-wider"
              style={{ color: 'rgba(94,234,212,0.5)' }}
            >
              {round.marks}
            </span>
          </div>
        </div>

        <span
          className="text-2xl md:text-3xl transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] shrink-0 ml-4"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          aria-hidden
        >
          <span
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            +
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="max-w-4xl pb-12 pt-8">
              <p
                className="mb-10 max-w-3xl text-base md:text-lg leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {round.description}
              </p>

              <p
                className="mb-5 text-xs font-mono uppercase"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.4em',
                }}
              >
                DELIVERABLES
              </p>
              <div className="mb-10">
                {round.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="py-4 text-sm md:text-base"
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p
                className="mb-5 text-xs font-mono uppercase"
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.4em',
                }}
              >
                EVALUATION
              </p>
              <div>
                {round.evaluation.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-4 text-sm md:text-base"
                    style={{
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {item.label}
                    </span>
                    <span
                      className="text-xs font-mono tracking-wider"
                      style={{ color: 'rgba(94,234,212,0.5)' }}
                    >
                      {item.score} pts
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="mt-8 text-sm font-mono uppercase tracking-wider"
                style={{ color: 'rgba(94,234,212,0.4)' }}
              >
                {round.advance}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RoundDetailsSection() {
  const [openRound, setOpenRound] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenRound((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-6 md:px-12 mt-24 md:mt-32 py-32 md:py-48">
      <div className="mx-auto max-w-7xl">
        <p
          className="mb-6 text-xs font-mono uppercase"
          style={{
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.5em',
          }}
        >
          ROUND DETAILS
        </p>
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-20"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            color: 'rgba(255,255,255,0.92)',
          }}
        >
          HOW IT WORKS
        </h2>

        <div>
          {rounds.map((round, index) => (
            <RoundRow
              key={index}
              round={round}
              isOpen={openRound === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
