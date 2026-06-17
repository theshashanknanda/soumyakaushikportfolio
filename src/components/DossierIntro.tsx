import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface DossierIntroProps {
  onComplete: () => void
}

export default function DossierIntro({ onComplete }: DossierIntroProps) {
  const [phase, setPhase] = useState<'stamp' | 'reveal' | 'open' | 'done'>('stamp')

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('reveal'), 280),
      setTimeout(() => setPhase('open'), 1600),
      setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 2500),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: '#1E3A5F' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Paper texture overlay */}
          <div
            className="absolute inset-0"
            style={{
              opacity: 0.04,
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(255,255,255,0.15) 23px, rgba(255,255,255,0.15) 24px)`,
            }}
          />

          {/* Top dossier fold */}
          <motion.div
            className="absolute top-0 left-0 right-0"
            style={{ backgroundColor: '#172F4D', height: '50%' }}
            animate={phase === 'open' ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Bottom dossier fold */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            style={{ backgroundColor: '#172F4D', height: '50%' }}
            animate={phase === 'open' ? { y: '100%' } : { y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Center content */}
          <div className="relative z-10 text-center" style={{ padding: '0 1.5rem' }}>
            {/* Confidential stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 2.5, rotate: -15 }}
              animate={
                phase === 'open'
                  ? { opacity: 0, scale: 0.8, rotate: -12 }
                  : { opacity: 1, scale: 1, rotate: -12 }
              }
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', top: '-6rem', left: '50%', transform: 'translateX(-50%)' }}
            >
              <div
                style={{
                  border: '2px solid #C8A96B',
                  color: '#C8A96B',
                  padding: '0.375rem 1.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                CONFIDENTIAL
              </div>
            </motion.div>

            {/* Dossier label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={phase === 'open' ? { opacity: 0, y: -20 } : phase === 'reveal' ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: phase === 'reveal' ? 0 : 0 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'rgba(200, 169, 107, 0.6)',
                marginBottom: '2rem',
              }}
            >
              Dossier
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={phase === 'open' ? { opacity: 0, y: -30 } : phase === 'reveal' ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: phase === 'reveal' ? 0.2 : 0 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 6vw, 3.75rem)',
                fontWeight: 500,
                color: '#F8F6F1',
                marginBottom: '2.5rem',
                letterSpacing: '-0.01em',
                lineHeight: 1.2,
              }}
            >
              Soumya Kaushik
            </motion.h1>

            {/* Practice areas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Litigation', 'Arbitration', 'Legal Research'].map((text, i) => (
                <motion.p
                  key={text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={phase === 'open' ? { opacity: 0, x: 20 } : phase === 'reveal' ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: phase === 'reveal' ? 0.5 + i * 0.15 : 0 }}
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '1.125rem',
                    color: 'rgba(248, 246, 241, 0.55)',
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={phase === 'open' ? { scaleX: 0, opacity: 0 } : phase === 'reveal' ? { scaleX: 1, opacity: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: phase === 'reveal' ? 1 : 0 }}
              style={{
                width: '3.5rem',
                height: '1px',
                backgroundColor: '#C8A96B',
                margin: '2.5rem auto 0',
                transformOrigin: 'center',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
