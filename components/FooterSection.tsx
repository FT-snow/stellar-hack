'use client'

import React from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'

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
              style={{ opacity: 0.5 }}
            />
            <div>
              <p
                className="text-xs tracking-wider font-bold"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                COSMOS
              </p>
              <p
                className="text-[10px] font-mono tracking-wider"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                THE SCIENCE CLUB · MUJ
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="mailto:boiz.prakhar@gmail.com"
              className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-[rgba(255,255,255,0.4)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
            >
              <Mail className="w-3.5 h-3.5" />
              boiz.prakhar@gmail.com
            </a>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <a
              href="tel:+916387332855"
              className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-[rgba(255,255,255,0.4)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              6387332855
            </a>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <a
              href="tel:+919390297214"
              className="flex items-center gap-1.5 text-[11px] font-mono tracking-wider text-[rgba(255,255,255,0.4)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              9390297214
            </a>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p
            className="text-[11px] font-mono tracking-wider"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Team COSMOS · Official Event Blueprint · &copy; 2026 COSMOS · MUJ
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://chat.whatsapp.com/EcLmNIBMWfr8z3yR9J33uw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-[rgba(255,255,255,0.5)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
            >
              JOIN WHATSAPP
            </a>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <a
              href="https://unstop.com/hackathons/stellar-hack-manipal-university-mu-jaipur-1707195"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] font-mono tracking-wider text-[rgba(255,255,255,0.5)] hover:text-[rgba(94,234,212,0.6)] transition-colors duration-300"
            >
              REGISTER ON UNSTOP <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
