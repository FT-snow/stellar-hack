'use client'

import React from 'react'
import { ArrowRight, Mail, MessageCircle, Globe } from 'lucide-react'

export default function FooterSection() {
  return (
    <footer
      className="py-16 px-6 md:px-12"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/cosmoslogo.png"
              alt="COSMOS"
              className="h-8 w-auto"
              style={{ opacity: 0.4 }}
            />
            <div>
              <p
                className="text-xs tracking-wider font-bold"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255,255,255,0.4)',
                }}
              >
                COSMOS
              </p>
              <p
                className="text-[9px] font-mono tracking-wider"
                style={{ color: 'rgba(255,255,255,0.2)' }}
              >
                THE SCIENCE CLUB · MUJ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: <Globe className="w-3.5 h-3.5" />, href: '#' },
              { icon: <MessageCircle className="w-3.5 h-3.5" />, href: '#' },
              {
                icon: <Mail className="w-3.5 h-3.5" />,
                href: 'mailto:cosmos@muj.manipal.edu',
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-[rgba(255,255,255,0.25)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p
            className="text-[10px] font-mono tracking-wider"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Team COSMOS · Official Event Blueprint · &copy; 2026 COSMOS · MUJ
          </p>
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[rgba(255,255,255,0.25)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
          >
            REGISTER ON UNSTOP <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
