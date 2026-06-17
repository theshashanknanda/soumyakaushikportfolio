import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const C = { navy: '#1E3A5F', gold: '#C8A96B', muted: '#6B7280', divider: '#D1CBC0', parchment: '#F8F6F1', warmWhite: '#FDFCFA' }
const serif = "'Playfair Display', Georgia, serif"
const editorial = "'Cormorant Garamond', Georgia, serif"
const sans = 'Inter, sans-serif'

const educationData = [
  { institution: 'Institute of Law, Nirma University', location: 'Ahmedabad, Gujarat', degree: 'BA LL.B. (Hons.)', period: 'July 2022 — Present', details: 'IV Year, VIII Semester · CGPA: 7.39 / 10.0', current: true },
  { institution: 'Guru Harikrishna Public School', location: 'Hanumangarh, Rajasthan', degree: 'Indian School Certificate (Class XII)', period: '2022', details: '70%', current: false },
  { institution: 'Nosegay Public School', location: 'Sri Ganganagar, Rajasthan', degree: 'Indian Certificate of Secondary Education (Class X)', period: '2020', details: '84%', current: false },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" ref={ref} className="section-border" style={{ padding: '7rem 0', backgroundColor: C.warmWhite }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 6.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Academic Record</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Education
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <div style={{ maxWidth: '48rem', position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '1px', backgroundColor: C.divider }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
                style={{ position: 'relative', paddingLeft: '3rem' }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '1.25rem',
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    border: `2px solid ${edu.current ? C.gold : 'rgba(30,58,95,0.22)'}`,
                    backgroundColor: edu.current ? 'rgba(200,169,107,0.12)' : C.warmWhite,
                  }}
                />

                <div
                  style={{
                    border: `1px solid ${C.divider}`,
                    backgroundColor: C.parchment,
                    padding: '1.75rem 2rem',
                    transition: 'border-color 0.4s',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      {edu.current && (
                        <span style={{ display: 'inline-block', padding: '0.15rem 0.6rem', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, border: `1px solid rgba(200,169,107,0.28)`, marginBottom: '0.625rem', fontFamily: sans }}>
                          Current
                        </span>
                      )}
                      <h3 style={{ fontFamily: serif, fontSize: '1.1rem', color: C.navy, fontWeight: 500 }}>{edu.institution}</h3>
                      <p style={{ fontFamily: sans, fontSize: '0.8rem', color: C.muted, marginTop: '0.15rem' }}>{edu.location}</p>
                    </div>
                    <p style={{ fontFamily: sans, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted }}>{edu.period}</p>
                  </div>

                  <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(209,203,192,0.5)', margin: '1rem 0' }} />

                  <p style={{ fontFamily: editorial, fontSize: '1rem', color: C.navy, fontStyle: 'italic' }}>{edu.degree}</p>
                  <p style={{ fontFamily: sans, fontSize: '0.82rem', color: C.muted, marginTop: '0.2rem' }}>{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
