import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const C = { navy: '#1E3A5F', gold: '#C8A96B', muted: '#6B7280', divider: '#D1CBC0', parchment: '#F8F6F1' }
const serif = "'Playfair Display', Georgia, serif"
const sans = 'Inter, sans-serif'

const center = { id: 'center', label: 'Legal Research', x: 50, y: 50, r: 42, isCenter: true }
const outer = [
  { id: 'litigation', label: 'Litigation', x: 50, y: 10, r: 30 },
  { id: 'arbitration', label: 'Arbitration', x: 82, y: 22, r: 30 },
  { id: 'contract', label: 'Contract Review', x: 90, y: 55, r: 30 },
  { id: 'drafting', label: 'Drafting', x: 78, y: 84, r: 30 },
  { id: 'dispute', label: 'Dispute Resolution', x: 50, y: 92, r: 30 },
  { id: 'corporate', label: 'Corporate Law', x: 22, y: 84, r: 30 },
  { id: 'media', label: 'Media Law', x: 10, y: 55, r: 30 },
  { id: 'compliance', label: 'Compliance', x: 18, y: 22, r: 30 },
]

export default function ExpertiseMap() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [size, setSize] = useState({ w: 560, h: 420 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = Math.min(containerRef.current.offsetWidth, 680)
        setSize({ w, h: Math.round(w * 0.78) })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const pos = (x: number, y: number) => ({ x: (x / 100) * size.w, y: (y / 100) * size.h })
  const allNodes = [center, ...outer]

  return (
    <section id="expertise" ref={ref} className="section-border" style={{ padding: '7rem 0' }}>
      <div className="section-container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="brief-number" style={{ display: 'block', marginBottom: '0.625rem' }}>§ 5.0</span>
          <p className="section-label" style={{ marginBottom: '0.875rem' }}>Competency Framework</p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            style={{ fontFamily: serif, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: C.navy, fontWeight: 500 }}
          >
            Legal Expertise Map
          </motion.h2>
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: C.gold, marginTop: '1rem' }} />
        </div>

        <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <svg
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            style={{ overflow: 'visible' }}
          >
            {/* Lines */}
            {outer.map(node => {
              const from = pos(center.x, center.y)
              const to = pos(node.x, node.y)
              const active = activeNode === node.id
              return (
                <motion.line
                  key={`l-${node.id}`}
                  x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                  stroke={active ? C.gold : C.divider}
                  strokeWidth={active ? 1.2 : 0.6}
                  strokeDasharray={active ? 'none' : '4 5'}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              )
            })}

            {/* Nodes */}
            {allNodes.map((node, i) => {
              const { x, y } = pos(node.x, node.y)
              const active = activeNode === node.id
              const isC = (node as any).isCenter === true
              return (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.45, delay: isC ? 0.25 : 0.4 + i * 0.07 }}
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  style={{ cursor: 'default' }}
                >
                  <motion.circle
                    cx={x} cy={y}
                    r={isC ? node.r : node.r * 0.82}
                    fill={isC ? C.navy : active ? 'rgba(200,169,107,0.07)' : 'rgba(30,58,95,0.025)'}
                    stroke={isC ? 'none' : active ? C.gold : C.divider}
                    strokeWidth={0.6}
                    animate={{ scale: active && !isC ? 1.08 : 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                  {isC ? (
                    <motion.circle
                      cx={x} cy={y} r={node.r}
                      fill="none" stroke={C.gold} strokeWidth={0.5}
                      animate={{ r: [node.r, node.r + 9], opacity: [0.4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
                    />
                  ) : null}
                  <text
                    x={x} y={y}
                    textAnchor="middle" dominantBaseline="central"
                    fill={isC ? '#F8F6F1' : active ? C.navy : C.muted}
                    fontSize={isC ? 10.5 : 8.5}
                    fontFamily={sans}
                    fontWeight={isC ? 500 : 400}
                    letterSpacing="0.04em"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {node.label}
                  </text>
                </motion.g>
              )
            })}
          </svg>
        </div>
      </div>
    </section>
  )
}
