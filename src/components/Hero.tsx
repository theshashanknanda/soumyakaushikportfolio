import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5])
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - (rect.left + rect.width / 2))
    mouseY.set(e.clientY - (rect.top + rect.height / 2))
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
      }}
    >
      {/* Background legal texture */}
      <div className="legal-texture" style={{ position: 'absolute', inset: 0 }} />

      {/* Floating decorative squares – hidden on very small screens */}
      <motion.div
        style={{ position: 'absolute', top: '7rem', right: '1.5rem', width: '10rem', height: '10rem', opacity: 0.02 }}
        animate={{ y: [0, -10, 0], rotate: [0, 0.6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div style={{ width: '100%', height: '100%', border: '1px solid #1E3A5F', borderRadius: '2px' }} />
      </motion.div>

      {/* Section reference */}
      <div style={{ position: 'absolute', top: '5.5rem', left: '1.25rem' }}>
        <span className="brief-number">§ 1.0</span>
      </div>

      <div className="section-container" style={{ width: '100%', position: 'relative' }}>
        <div className="hero-grid">

          {/* Text column */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <p className="section-label" style={{ marginBottom: '1.25rem' }}>Counsel Profile</p>

            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.1rem, 6vw, 3.75rem)',
                fontWeight: 500,
                color: '#1E3A5F',
                lineHeight: 1.1,
                marginBottom: '0.875rem',
                letterSpacing: '-0.01em',
              }}
            >
              Soumya<br />Kaushik
            </h1>

            <div style={{ width: '2.75rem', height: '1px', backgroundColor: '#C8A96B', margin: '1.25rem 0' }} />

            <div style={{ marginBottom: '1.25rem' }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', color: '#111827' }}>
                BA LL.B. (Hons.)
              </p>
              <p style={{ fontSize: '0.85rem', color: '#6B7280', marginTop: '0.15rem' }}>
                Institute of Law, Nirma University, Ahmedabad
              </p>
            </div>

            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#2A4F7A', marginBottom: '1.25rem' }}>
              Aspiring Litigation &amp; Arbitration Lawyer
            </p>

            <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.75, maxWidth: '28rem', marginBottom: '2rem' }}>
              A law student with hands-on experience in litigation, arbitration, media law,
              legal research, regulatory compliance, contract review, and dispute resolution —
              building a practice grounded in rigour and precision.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
              <button
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#1E3A5F',
                  color: '#F8F6F1',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.67rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#142A45')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1E3A5F')}
              >
                View Dossier
              </button>
              <button
                onClick={() => document.querySelector('#beyond')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#1E3A5F',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.67rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  border: '1px solid #D1CBC0',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s, color 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8A96B'; e.currentTarget.style.color = '#C8A96B' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#D1CBC0'; e.currentTarget.style.color = '#1E3A5F' }}
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Portrait column */}
          <div className="hero-image">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{ perspective: '1000px', position: 'relative' }}
              >
                <motion.div
                  style={{ rotateX, rotateY, position: 'relative' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 30 }}
                >
                  {/* Decorative offset frames */}
                  <div style={{ position: 'absolute', top: '-8px', left: '-8px', right: 0, bottom: 0, border: '1px solid rgba(200,169,107,0.25)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: '-8px', bottom: '-8px', border: '1px solid rgba(30,58,95,0.07)', pointerEvents: 'none' }} />

                  <div className="portrait-container" style={{ overflow: 'hidden', backgroundColor: '#EDE9E0', position: 'relative' }}>
                    <img
                      src="/soumya-profile.jpg"
                      alt="Soumya Kaushik"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                      loading="eager"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,58,95,0.04), transparent)' }} />
                  </div>

                  <div style={{ marginTop: '0.625rem', textAlign: 'right' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B7280' }}>
                      IV Year · VIII Semester
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '1.75rem', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div style={{ width: '1px', height: '2.25rem', background: 'linear-gradient(to bottom, transparent, #6B7280)' }} />
      </motion.div>
    </section>
  )
}
