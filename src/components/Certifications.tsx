import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const C = { navy: '#1E3A5F', gold: '#C8A96B', muted: '#6B7280', divider: '#D1CBC0', parchment: '#F8F6F1', warmWhite: '#FDFCFA' }
const serif = "'Playfair Display', Georgia, serif"
const editorial = "'Cormorant Garamond', Georgia, serif"
const sans = 'Inter, sans-serif'

export default function Certifications() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-border" style={{ padding: '7rem 0', backgroundColor: C.warmWhite }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 8.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Continuing Education</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Certifications
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{ maxWidth: '36rem' }}
        >
          <div
            style={{
              position: 'relative',
              border: `1px solid rgba(200, 169, 107, 0.28)`,
              backgroundColor: C.parchment,
              padding: '2.5rem 2.75rem',
            }}
          >
            {/* Corner decorations */}
            {[
              { top: '8px', left: '8px', borderTop: true, borderLeft: true },
              { top: '8px', right: '8px', borderTop: true, borderRight: true },
              { bottom: '8px', left: '8px', borderBottom: true, borderLeft: true },
              { bottom: '8px', right: '8px', borderBottom: true, borderRight: true },
            ].map((corner, idx) => (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  width: '14px',
                  height: '14px',
                  ...corner,
                  borderTop: corner.borderTop ? `1px solid rgba(200,169,107,0.38)` : 'none',
                  borderLeft: corner.borderLeft ? `1px solid rgba(200,169,107,0.38)` : 'none',
                  borderBottom: corner.borderBottom ? `1px solid rgba(200,169,107,0.38)` : 'none',
                  borderRight: corner.borderRight ? `1px solid rgba(200,169,107,0.38)` : 'none',
                  top: corner.top,
                  bottom: corner.bottom,
                  left: corner.left,
                  right: corner.right,
                }}
              />
            ))}

            <p style={{ fontFamily: sans, fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.5rem' }}>
              Certificate Course
            </p>

            <h3 style={{ fontFamily: serif, fontSize: '1.35rem', color: C.navy, fontWeight: 500, lineHeight: 1.25, marginBottom: '0.5rem' }}>
              Corporate Law and Capital Markets
            </h3>

            <p style={{ fontFamily: editorial, fontSize: '1rem', color: C.muted, fontStyle: 'italic', marginBottom: '1.5rem' }}>
              National Law University of Odisha
            </p>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(209,203,192,0.5)', marginBottom: '1.5rem' }} />

            <p style={{ fontFamily: sans, fontSize: '0.85rem', color: C.muted, lineHeight: 1.75 }}>
              Foundational and practical understanding of corporate legal frameworks and capital markets regulation in India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
