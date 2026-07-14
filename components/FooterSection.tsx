'use client'

const awards = [
  'Best Overall',
  'Best UI/UX',
  'Best Universe Design',
  'Most Innovative',
  "People's Choice",
]

export default function FooterSection() {
  return (
    <footer
      className="py-12 px-6 md:px-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Awards one-liner */}
        <div className="mb-8">
          <p
            className="font-mono text-[10px] tracking-[0.5em] uppercase mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            AWARDS
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {awards.join(' · ')} · Top 3 in each category win goodies · Featured on COSMOS Instagram
          </p>
        </div>

        <div
          className="flex flex-col md:flex-row items-start justify-between gap-8 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-6">
            <img
              src="/cosmoslogo.png"
              alt="COSMOS"
              width={80}
              height={80}
              className="rounded-full object-cover shrink-0"
              style={{ opacity: 0.5 }}
            />
            <div className="flex flex-col gap-2">
              <p
                className="text-sm tracking-wider font-bold"
                style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--text-secondary)' }}
              >
                COSMOS
              </p>
              <p
                className="text-[11px] font-mono tracking-wider whitespace-nowrap"
                style={{ color: 'var(--text-muted)' }}
              >
                The Science Club &middot; MUJ
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                <a
                  href="tel:+916387332855"
                  className="text-[11px] font-mono tracking-wider link-underline transition-colors duration-300 hover:text-[rgba(94,234,212,0.6)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  6387332855
                </a>
                <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
                <a
                  href="tel:+919390297214"
                  className="text-[11px] font-mono tracking-wider link-underline transition-colors duration-300 hover:text-[rgba(94,234,212,0.6)]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  9390297214
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p
            className="text-[11px] font-mono tracking-wider"
            style={{ color: 'var(--text-muted)' }}
          >
            Team COSMOS &middot; Official Event Blueprint &middot; &copy; 2026 COSMOS &middot; MUJ
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://unstop.com/hackathons/stellar-hack-manipal-university-mu-jaipur-1707195"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono tracking-wider link-underline transition-colors duration-300 hover:text-[rgba(94,234,212,0.6)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              REGISTER ON UNSTOP →
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
