import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const C = { navy: '#1E3A5F', gold: '#C8A96B', muted: '#6B7280', divider: '#D1CBC0', warmWhite: '#FDFCFA' }
const serif = "'Playfair Display', Georgia, serif"
const sans = 'Inter, sans-serif'

const committees = [
  {
    title: 'Moot Court Committee (Organising)',
    role: 'Core Committee Member',
    period: '2024 – 2025',
    description: 'XIV ILNU Antitrust Moot Court Competition & Conference — planning, coordination, and successful execution of the event.',
  },
  {
    title: 'Alternate Dispute Resolution Committee',
    role: 'Core Committee Member',
    period: '2023 – 2024',
    description: 'Organised competitions and participated in "The Nuances of Arbitration" workshop by Adv. Tariq Khan and Adv. Shashank Garg.',
  },
  {
    title: 'Moot Court Committee (Internals)',
    role: 'Core Committee Member',
    period: '2023 – 2024',
    description: 'Conducted intra-mural competitions and orientation sessions to introduce foundational mooting techniques to fresher batches.',
  },
]

export default function Leadership() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leadership" ref={ref} className="section-border" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 7.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Institutional Appointments</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Leadership & Committees
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <div className="leadership-grid">
          {committees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
              className="leadership-card"
            >
              <div className="leadership-top-line" />
              <p style={{ fontFamily: sans, fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: '1.25rem' }}>
                {item.period}
              </p>
              <h3 style={{ fontFamily: serif, fontSize: '1.05rem', color: C.navy, fontWeight: 500, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: sans, fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, marginBottom: '1.25rem' }}>
                {item.role}
              </p>
              <div style={{ width: '1.5rem', height: '1px', backgroundColor: C.divider, marginBottom: '1.25rem' }} />
              <p style={{ fontFamily: sans, fontSize: '0.8rem', color: C.muted, lineHeight: 1.7 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.1rem;
        }
        .leadership-card {
          position: relative;
          border: 1px solid rgba(209, 203, 192, 0.55);
          background-color: ${C.warmWhite};
          padding: 2rem;
          overflow: hidden;
          transition: border-color 0.5s;
        }
        .leadership-card:hover { border-color: rgba(200, 169, 107, 0.28); }
        .leadership-top-line {
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 1px;
          background-color: ${C.gold};
          transition: width 0.7s ease;
        }
        .leadership-card:hover .leadership-top-line { width: 100%; }
        @media (min-width: 768px) {
          .leadership-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>
    </section>
  )
}
