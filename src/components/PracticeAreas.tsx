import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'
import { useRef } from 'react'

const C = {
  navy: '#1E3A5F',
  gold: '#C8A96B',
  muted: '#6B7280',
  divider: '#D1CBC0',
  warmWhite: '#FDFCFA',
}
const serif = "'Playfair Display', Georgia, serif"
const sans = 'Inter, sans-serif'

const practiceAreas = [
  { title: 'Litigation', brief: 'Trial preparation, case management, and courtroom advocacy across civil and commercial disputes.', icon: '⚖' },
  { title: 'Arbitration', brief: 'Domestic and institutional arbitration proceedings, including DIAC matters and construction disputes.', icon: '§' },
  { title: 'Legal Research', brief: 'Statutory analysis, case law research, and preparation of detailed briefs and summary notes.', icon: '¶' },
  { title: 'Media Law', brief: 'Advertising compliance, FSSAI regulations, ASCI guidelines, and content review for publications.', icon: '◈' },
  { title: 'Regulatory Compliance', brief: 'Environmental clearances, election compliance, and sectoral regulatory frameworks.', icon: '◇' },
  { title: 'Contract Drafting', brief: 'Drafting, review, and analysis of commercial agreements, MOUs, and legal notices.', icon: '✦' },
  { title: 'Corporate Law', brief: 'Capital markets, corporate governance, and in-house legal operations.', icon: '▣' },
  { title: 'Dispute Resolution', brief: 'Alternative dispute resolution mechanisms, conciliation, and settlement negotiations.', icon: '◎' },
]

function PracticeCard({ area, index }: { area: typeof practiceAreas[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-120, 120], [3.5, -3.5])
  const rotateY = useTransform(mouseX, [-120, 120], [-3.5, 3.5])

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={e => {
        if (!cardRef.current) return
        const r = cardRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - r.left - r.width / 2)
        mouseY.set(e.clientY - r.top - r.height / 2)
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0) }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      style={{ perspective: '800px' }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 160, damping: 22 }}
        whileHover={{ borderColor: 'rgba(200,169,107,0.35)' }}
        className="practice-card"
      >
        <span style={{ fontSize: '1.1rem', color: 'rgba(200,169,107,0.55)', display: 'block', marginBottom: '1.25rem', transition: 'color 0.3s' }}>
          {area.icon}
        </span>
        <h3 style={{ fontFamily: serif, fontSize: '1.05rem', color: C.navy, fontWeight: 500, marginBottom: '0.625rem' }}>
          {area.title}
        </h3>
        <p style={{ fontFamily: sans, fontSize: '0.78rem', color: C.muted, lineHeight: 1.7 }}>
          {area.brief}
        </p>
        {/* Bottom slide-in line */}
        <motion.div
          style={{ position: 'absolute', bottom: 0, left: 0, height: '1px', backgroundColor: C.gold }}
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.35 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function PracticeAreas() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="practice-areas" ref={ref} className="section-border" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 3.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Areas of Practice</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Practice Areas
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area, i) => (
            <PracticeCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
