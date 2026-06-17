import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const C = {
  navy: '#1E3A5F',
  navyDeep: '#142A45',
  gold: '#C8A96B',
  muted: '#6B7280',
  divider: '#D1CBC0',
  parchment: '#F8F6F1',
  warmWhite: '#FDFCFA',
}
const serif = "'Playfair Display', Georgia, serif"
const sans = 'Inter, sans-serif'

const experiences = [
  { id: 'psa', organization: 'PSA Legal Counsellors', location: 'New Delhi', type: 'Full-Service Law Firm', period: 'Current', tagline: 'Corporate litigation, regulatory advisory, and dispute resolution practice.', current: true },
  { id: 'bccl', organization: 'Bennett Coleman & Co. Ltd.', location: 'Mumbai', type: 'Media Law', period: 'December 2025', tagline: 'Advertising compliance, FSSAI regulations, and defamation matter tracking at Times Group.' },
  { id: 'asv', organization: 'ASV Legal LLP', location: 'New Delhi', type: 'Litigation & Arbitration', period: 'July 2025', tagline: 'Arbitration research, medical negligence matters, and writ petition analysis.' },
  { id: 'samvitti', organization: 'Samvitti Legal', location: 'Ahmedabad', type: 'Litigation', period: 'January 2025', tagline: 'Summary suits, copyright compliance, and employment dispute resolution.' },
  { id: 'bhel', organization: 'Bharat Heavy Electricals Ltd.', location: 'Noida', type: 'In-House Counsel', period: 'July 2024', tagline: 'Contract research, arbitration matters, and environmental compliance at a Maharatna PSU.' },
  { id: 'chiramel', organization: 'Chiramel & Co.', location: 'New Delhi', type: 'Litigation & Arbitration', period: 'June 2024', tagline: 'Arbitral disputes, electricity law research, and DIAC hearing preparation.' },
  { id: 'mkassociates', organization: 'Mohit Khandelwal & Associates', location: 'Jaipur', type: 'Litigation', period: 'January 2023', tagline: 'Foundational litigation practice and courtroom exposure.' },
  { id: 'nitinwatts', organization: 'Advocate Nitin Watts', location: 'Sri Ganganagar', type: 'Litigation', period: 'July 2022', tagline: 'Early litigation training and trial court proceedings.' },
]

export default function ExperienceDossier() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedExp, setSelectedExp] = useState<string | null>(null)
  const selected = experiences.find(e => e.id === selectedExp)

  return (
    <section
      id="experience"
      ref={ref}
      className="section-border"
      style={{ padding: '7rem 0', backgroundColor: C.warmWhite }}
    >
      {/* Header */}
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 4.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Professional Record</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55 }}
                style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
              >
                Experience Dossier
              </motion.h2>
              <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
            </div>
            <p style={{ fontFamily: sans, fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted }}>
              Scroll →
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div
        className="experience-scroll"
        style={{ overflowX: 'auto', paddingBottom: '2rem' }}
      >
        <div className="exp-scroll-inner">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
              onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
              className="exp-card-container"
              style={{
                position: 'relative',
                flexShrink: 0,
                cursor: 'pointer',
                transform: selectedExp === exp.id ? 'scale(1.02)' : 'scale(1)',
                transition: 'transform 0.4s',
              }}
            >
              {/* Folder tab */}
              <div
                style={{
                  position: 'absolute',
                  top: '-11px',
                  left: '1.25rem',
                  padding: '0.2rem 0.65rem',
                  fontFamily: sans,
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  backgroundColor: exp.current ? C.gold : 'rgba(30,58,95,0.06)',
                  color: exp.current ? C.navyDeep : C.muted,
                  transition: 'background-color 0.3s',
                }}
              >
                {exp.current ? 'Current Engagement' : exp.period}
              </div>

              {/* Card body */}
              <div
                style={{
                  border: `1px solid ${selectedExp === exp.id || exp.current ? (exp.current ? 'rgba(200,169,107,0.38)' : 'rgba(30,58,95,0.18)') : C.divider}`,
                  padding: '1.625rem',
                  backgroundColor: C.parchment,
                  position: 'relative',
                  transition: 'border-color 0.4s',
                  minHeight: '13rem',
                }}
              >
                {/* Fold corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '1.5rem',
                    height: '1.5rem',
                    backgroundColor: exp.current ? 'rgba(200,169,107,0.1)' : 'rgba(30,58,95,0.025)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }}
                />

                <p style={{ fontFamily: sans, fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: exp.current ? C.gold : C.muted, marginBottom: '1rem' }}>
                  {exp.type}
                </p>
                <h3 style={{ fontFamily: serif, fontSize: '1.1rem', color: C.navy, fontWeight: 500, marginBottom: '0.25rem', lineHeight: 1.2 }}>
                  {exp.organization}
                </h3>
                <p style={{ fontFamily: sans, fontSize: '0.78rem', color: C.muted, marginBottom: '1rem' }}>{exp.location}</p>
                <div style={{ width: '1.5rem', height: '1px', backgroundColor: C.divider, marginBottom: '1rem' }} />
                <p style={{ fontFamily: sans, fontSize: '0.78rem', color: C.muted, lineHeight: 1.65 }}>{exp.tagline}</p>

                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: selectedExp === exp.id ? C.gold : C.divider, transition: 'background-color 0.3s' }} />
                  <span style={{ fontFamily: sans, fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted }}>
                    {selectedExp === exp.id ? 'Selected' : 'View details'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="section-container"
          style={{ marginTop: '2rem' }}
        >
          <div style={{ border: `1px solid ${C.divider}`, backgroundColor: C.parchment, padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                {selected.current && (
                  <span style={{ display: 'inline-block', padding: '0.2rem 0.75rem', backgroundColor: 'rgba(200,169,107,0.1)', color: C.gold, fontFamily: sans, fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, border: '1px solid rgba(200,169,107,0.2)', marginBottom: '0.75rem' }}>
                    Current Engagement
                  </span>
                )}
                <h3 style={{ fontFamily: serif, fontSize: '1.5rem', color: C.navy, fontWeight: 500 }}>{selected.organization}</h3>
                <p style={{ fontFamily: sans, fontSize: '0.85rem', color: C.muted, marginTop: '0.25rem' }}>{selected.location} · {selected.type}</p>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: sans, fontSize: '0.85rem', color: C.muted, transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = C.navy)}
                onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
              >
                Close ×
              </button>
            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: C.divider, marginBottom: '1.5rem' }} />
            <p style={{ fontFamily: sans, fontSize: '0.875rem', color: C.muted, lineHeight: 1.75, maxWidth: '40rem' }}>{selected.tagline}</p>
          </div>
        </motion.div>
      )}

    </section>
  )
}
