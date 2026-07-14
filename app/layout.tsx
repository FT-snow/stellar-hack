import type { Metadata } from 'next'
import { Orbitron, Space_Grotesk } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-orbitron',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Stellar Hack — The Vibe-a-thon | COSMOS MUJ',
  description:
    'A 2-day vibe-athon by COSMOS — the Science Club of MUJ. Teams of 1–4 imagine a fictional universe, define a mission, and build a frontend-only interactive dashboard. July 15–16, 2026.',
  icons: {
    icon: '/cosmoslogo.png',
  },
  openGraph: {
    title: 'Stellar Hack — The Vibe-a-thon',
    description:
      'A 2-day vibe-athon by COSMOS — the Science Club of MUJ. Teams of 1–4 imagine a fictional universe and build a frontend dashboard. July 15–16, 2026.',
    siteName: 'Stellar Hack',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        {children}
      </body>
    </html>
  )
}
