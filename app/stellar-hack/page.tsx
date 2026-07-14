import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ThemeExplorerSection from '@/components/ThemeExplorerSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TechStackSection from '@/components/TechStackSection'
import FAQSection from '@/components/FAQSection'
import FooterSection from '@/components/FooterSection'

export default function StellarHackPage() {
  return (
    <div
      className="min-h-screen overflow-x-hidden relative"
      style={{ background: '#0a0a0a', color: 'rgba(255,255,255,0.85)' }}
    >
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(94,234,212,0.03)_0%,_transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ThemeExplorerSection />
        <HowItWorksSection />
        <TechStackSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  )
}
