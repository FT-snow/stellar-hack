import type { Metadata } from 'next'
import { Orbitron, Inter } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-orbitron',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'COSMOS · The Science Club · MUJ',
  description:
    'The official Science Club of Manipal University Jaipur — uniting students driven by curiosity in science, astronomy, technology, and innovation.',
  icons: {
    icon: '/cosmoslogo.png',
  },
  openGraph: {
    title: 'COSMOS · The Science Club',
    description:
      'Uniting students driven by curiosity in science, astronomy, technology, and innovation at MUJ.',
    siteName: 'COSMOS',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter)' }}>
        {children}
      </body>
    </html>
  )
}
