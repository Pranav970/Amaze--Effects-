'use client' // Needed for GSAP hooks and client-side interactions

import Hero from '@/components/Hero'
import HighlightsSection from '@/components/HighlightsSection'
import CloserLookSection from '@/components/CloserLookSection'
import TitaniumSection from '@/components/TitaniumSection'
import DisplayFeaturesSection from '@/components/DisplayFeaturesSection'
import AppleIntelligenceSection from '@/components/AppleIntelligenceSection'
import PrivacySection from '@/components/PrivacySection'
import CameraControlSection from '@/components/CameraControlSection'
// ... import other sections as they are created
import ProVideoSection from '@/components/ProVideoSection'
import AudioMixSection from '@/components/AudioMixSection'
import ShotOniPhoneSection from '@/components/ShotOniPhoneSection'
import UltraWideSection from '@/components/UltraWideSection'
import PhotographicStylesSection from '@/components/PhotographicStylesSection'
import A18ChipSection from '@/components/A18ChipSection'
import GamingSection from '@/components/GamingSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <CloserLookSection />
      <TitaniumSection />
      <DisplayFeaturesSection />
      <AppleIntelligenceSection />
      <PrivacySection />
      <CameraControlSection />
      <ProVideoSection />
      <AudioMixSection />
      <ShotOniPhoneSection />
      <UltraWideSection />
      <PhotographicStylesSection />
      <A18ChipSection />
      <GamingSection />
      {/* Add other sections here */}
    </>
  )
}
