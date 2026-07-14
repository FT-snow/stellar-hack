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
      'Submit ONE combined PDF containing Universe Card (1 page), Mission Card (1 page), and Dashboard Blueprint (1 page).',
    deliverables: [
      'Universe Card — name, aesthetics, rules, lore',
      'Mission Card — problem statement, goals, stakeholders',
      'Dashboard Blueprint — wireframe, widget plan, data flow',
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
      'Build a frontend dashboard from your Universe/Mission. Any frontend stack, no backend. Kickoff at 3 PM, build 3 PM–8 PM. Quiz Challenge during build window.',
    deliverables: [
      'Working frontend dashboard',
      'Quiz Challenge completion (10 Qs, 5 pts each, max 20 pts)',
      'Final submission 7:30–8 PM via Unstop',
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
        className="flex w-full items-center justify-between py-8 text-left transition-colors"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="flex items-baseline gap-4 md:gap-6">
          <span
            className="font-['Orbitron'] text-2xl font-bold"
            style={{ color: 'rgba(255,255,255,0.08)' }}
          >
            {round.number}
          </span>
          <span
            className="font-['Orbitron'] text-base font-bold md:text-lg"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {round.title}
          </span>
          <span
            className="font-['Inter'] text-[10px] uppercase tracking-wider"
            style={{ color: 'rgba(94,234,212,0.5)' }}
          >
            {round.marks}
          </span>
        </div>

        <span
          className="font-['Inter'] text-lg transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ color: 'rgba(255,255,255,0.4)' }}
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
            <div ref={contentRef} className="max-w-4xl pb-8 pt-6">
              <p
                className="mb-8 max-w-3xl text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {round.description}
              </p>

              <p
                className="mb-4 font-['Inter'] text-[9px] uppercase"
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.35em',
                }}
              >
                DELIVERABLES
              </p>
              <div className="mb-8">
                {round.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="py-3 text-sm"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p
                className="mb-4 font-['Inter'] text-[9px] uppercase"
                style={{
                  color: 'rgba(255,255,255,0.25)',
                  letterSpacing: '0.35em',
                }}
              >
                EVALUATION
              </p>
              <div>
                {round.evaluation.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 text-sm"
                    style={{
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {item.label}
                    </span>
                    <span
                      className="font-['Inter'] text-[10px] tracking-wider"
                      style={{ color: 'rgba(94,234,212,0.5)' }}
                    >
                      {item.score} pts
                    </span>
                  </div>
                ))}
              </div>

              <p
                className="mt-6 font-['Inter'] text-[10px] uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.2)' }}
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
    <section
      className="px-6 md:px-12 mt-24 md:mt-32 py-32 md:py-48"
    >
      <div className="mx-auto max-w-7xl">
        <p
          className="mb-6 font-['Inter'] text-[10px] uppercase"
          style={{
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.5em',
          }}
        >
          ROUND DETAILS
        </p>

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
