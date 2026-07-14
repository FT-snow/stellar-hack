'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Resource {
  name: string;
  url: string;
}

interface Category {
  label: string;
  resources: Resource[];
}

const categories: Category[] = [
  {
    label: 'DESIGN INSPIRATION',
    resources: [
      { name: 'Dribbble', url: 'https://dribbble.com' },
      { name: 'Behance', url: 'https://behance.net' },
      { name: 'Awwwards', url: 'https://awwwards.com' },
      { name: 'Figma Community', url: 'https://figma.com/community' },
      { name: 'Godly.website', url: 'https://godly.website' },
    ],
  },
  {
    label: 'UI LIBRARIES',
    resources: [
      { name: 'shadcn/ui', url: 'https://ui.shadcn.com' },
      { name: 'Magic UI', url: 'https://magicui.design' },
      { name: 'Aceternity UI', url: 'https://ui.aceternity.com' },
      { name: 'DaisyUI', url: 'https://daisyui.com' },
    ],
  },
  {
    label: 'ICONS',
    resources: [
      { name: 'Lucide Icons', url: 'https://lucide.dev' },
      { name: 'Heroicons', url: 'https://heroicons.com' },
      { name: 'Tabler Icons', url: 'https://tabler.io/icons' },
    ],
  },
  {
    label: 'ILLUSTRATIONS',
    resources: [
      { name: 'Storyset', url: 'https://storyset.com' },
      { name: 'unDraw', url: 'https://undraw.co' },
      { name: 'Icons8', url: 'https://icons8.com' },
    ],
  },
  {
    label: 'FONTS',
    resources: [
      { name: 'Google Fonts', url: 'https://fonts.google.com' },
      { name: 'Fontshare', url: 'https://fontshare.com' },
    ],
  },
];

export default function InspirationResourcesSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="py-32 md:py-48 px-6 md:px-12 mt-24 md:mt-32 max-w-7xl mx-auto"
    >
      <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-6" style={{ color: 'rgba(255,255,255,0.25)' }}>
        Resources
      </p>
      <h2
        className="font-['Orbitron'] text-5xl md:text-7xl lg:text-8xl tracking-tight mb-16"
        style={{ color: 'rgba(255,255,255,0.92)' }}
      >
        INSPIRATION
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: catIdx * 0.08, ease: 'easeOut' }}
          >
            <p
              className="font-mono text-xs tracking-[0.4em] uppercase mb-5"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              {category.label}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {category.resources.map((resource, resIdx) => (
                <motion.a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-300"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'rgba(94,234,212,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                  }}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: catIdx * 0.08 + resIdx * 0.04, ease: 'easeOut' }}
                >
                  {resource.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
