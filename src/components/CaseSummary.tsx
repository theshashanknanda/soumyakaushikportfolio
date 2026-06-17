import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const C = {
  navy: '#1E3A5F',
  gold: '#C8A96B',
  muted: '#6B7280',
  divider: '#D1CBC0',
  parchment: '#F8F6F1',
  ink: '#111827',
}

const serif = "'Playfair Display', Georgia, serif"
const sans = 'Inter, sans-serif'

const timelineItems = [
  { year: '2022', title: 'Commenced Legal Studies', detail: 'Enrolled in the BA LL.B. (Hons.) programme at the Institute of Law, Nirma University, Ahmedabad.' },
  { year: '2023', title: 'First Litigation Exposure', detail: 'Gained foundational experience in litigation practice through internships in Jaipur and Sri Ganganagar.' },
  { year: '2024', title: 'Expanded Practice Areas', detail: 'Undertook internships in corporate in-house counsel (BHEL), arbitration disputes (Chiramel & Co.), and litigation.' },
  { year: '2025', title: 'Advanced Legal Practice', detail: 'Engaged in arbitration research, media law compliance, and corporate litigation across multiple jurisdictions.' },
  { year: 'Present', title: 'Current Engagement', detail: 'Continuing to build expertise across litigation, arbitration, and regulatory compliance at PSA Legal Counsellors.' },
]

export default function CaseSummary() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="case-summary"
      ref={ref}
      className="section-border"
      style={{ padding: '7rem 0' }}
    >
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 2.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Re: Background &amp; Particulars</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Case Summary
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
          className="case-grid"
        >
          {/* Left: Brief */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div
              style={{
                borderLeft: `2px solid rgba(200, 169, 107, 0.28)`,
                paddingLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.75rem',
              }}
            >
              {[
                { label: 'Institution', value: 'Institute of Law, Nirma University', sub: 'Ahmedabad, Gujarat' },
                { label: 'Programme', value: 'BA LL.B. (Hons.)', sub: 'IV Year, VIII Semester' },
                { label: 'Academic Standing', value: 'CGPA: 7.39 / 10.0', sub: '' },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontFamily: sans, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.25rem' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: serif, fontSize: '1.05rem', color: C.navy, fontWeight: 500 }}>{item.value}</p>
                  {item.sub && <p style={{ fontSize: '0.85rem', color: C.muted }}>{item.sub}</p>}
                </div>
              ))}

              <div>
                <p style={{ fontFamily: sans, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.5rem' }}>
                  Areas of Interest
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Litigation', 'Arbitration', 'Media Law', 'Corporate Law'].map(area => (
                    <span
                      key={area}
                      style={{
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.62rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        border: `1px solid ${C.divider}`,
                        color: C.navy,
                        fontFamily: sans,
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <div>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: '7px', top: '8px', bottom: '8px', width: '1px', backgroundColor: C.divider }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
                {timelineItems.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.1 }}
                    style={{ position: 'relative', paddingLeft: '2.75rem' }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '6px',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        border: `2px solid ${item.year === 'Present' ? C.gold : 'rgba(30,58,95,0.25)'}`,
                        backgroundColor: item.year === 'Present' ? 'rgba(200,169,107,0.15)' : C.parchment,
                      }}
                    />
                    <p style={{ fontFamily: sans, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, fontWeight: 600, marginBottom: '0.2rem' }}>
                      {item.year}
                    </p>
                    <h3 style={{ fontFamily: serif, fontSize: '1.05rem', color: C.navy, fontWeight: 500, marginBottom: '0.25rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: C.muted, lineHeight: 1.65 }}>{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
