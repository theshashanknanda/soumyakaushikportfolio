import { useState, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import DossierIntro from './components/DossierIntro'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import CaseSummary from './components/CaseSummary'
import PracticeAreas from './components/PracticeAreas'
import ExperienceDossier from './components/ExperienceDossier'
import ExpertiseMap from './components/ExpertiseMap'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import BeyondTheBrief from './components/BeyondTheBrief'
import Footer from './components/Footer'

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)
  useLenis()

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      <DossierIntro onComplete={handleIntroComplete} />

      <div
        className="min-h-screen"
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <Navigation />
        <main className="overflow-x-hidden">
          <Hero />
          <CaseSummary />
          <PracticeAreas />
          <ExperienceDossier />
          <ExpertiseMap />
          <Education />
          <Leadership />
          <Certifications />
          <BeyondTheBrief />
        </main>
        <Footer />
      </div>
    </>
  )
}
