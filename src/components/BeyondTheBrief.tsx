import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const C = { navy: '#1E3A5F', gold: '#C8A96B', muted: '#6B7280', divider: '#D1CBC0' }
const serif = "'Playfair Display', Georgia, serif"
const sans = 'Inter, sans-serif'

const interests = [
  { title: 'Swimming', description: 'Fostering physical endurance, discipline, and a focused mindset.', symbol: '〰' },
  { title: 'Dance', description: 'Cultivating creativity, expression, and collaborative teamwork.', symbol: '◆' },
]

export default function BeyondTheBrief() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="beyond" ref={ref} className="section-border" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 9.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Personal Interests</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Beyond the Brief
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              style={{
                background: 'rgba(253, 252, 250, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: `1px solid rgba(209, 203, 192, 0.5)`,
                padding: '2rem 2.25rem',
                minWidth: '14rem',
                flex: '1 1 14rem',
                maxWidth: '22rem',
                transition: 'border-color 0.4s',
              }}
            >
              <motion.span
                style={{ fontSize: '1.35rem', color: 'rgba(200,169,107,0.45)', display: 'block', marginBottom: '1.25rem' }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.6 }}
              >
                {item.symbol}
              </motion.span>
              <h3 style={{ fontFamily: serif, fontSize: '1.1rem', color: C.navy, fontWeight: 500, marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: '0.82rem', color: C.muted, lineHeight: 1.7 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
