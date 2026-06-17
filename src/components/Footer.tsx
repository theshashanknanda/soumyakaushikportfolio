const C = { navy: '#1E3A5F', gold: '#C8A96B', parchment: '#F8F6F1' }
const serif = "'Playfair Display', Georgia, serif"
const editorial = "'Cormorant Garamond', Georgia, serif"
const sans = 'Inter, sans-serif'

export default function Footer() {
  return (
    <footer style={{ position: 'relative', backgroundColor: C.navy, padding: '5rem 0 3.5rem' }}>
      <div className="section-container">
        <div className="footer-grid">
          {/* Name */}
          <div>
            <h3 style={{ fontFamily: serif, fontSize: '1.5rem', color: C.parchment, fontWeight: 500, marginBottom: '0.5rem' }}>
              Soumya Kaushik
            </h3>
            <p style={{ fontFamily: editorial, fontSize: '0.95rem', fontStyle: 'italic', color: 'rgba(248,246,241,0.45)' }}>
              Aspiring Litigation &amp; Arbitration Lawyer
            </p>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: sans, fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>
              Correspondence
            </p>
            <a
              href="mailto:22bal130@nirmauni.ac"
              style={{ display: 'block', fontFamily: sans, fontSize: '0.85rem', color: 'rgba(248,246,241,0.55)', textDecoration: 'none', marginBottom: '0.5rem', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,241,0.55)')}
            >
              22bal130@nirmauni.ac
            </a>
            <a
              href="tel:+916376204653"
              style={{ display: 'block', fontFamily: sans, fontSize: '0.85rem', color: 'rgba(248,246,241,0.55)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,241,0.55)')}
            >
              +91 63762 04653
            </a>
          </div>

          {/* Connect */}
          <div style={{ textAlign: 'left' }} className="footer-connect">
            <p style={{ fontFamily: sans, fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: C.gold, marginBottom: '1rem' }}>
              Connect
            </p>
            <a
              href="https://www.linkedin.com/in/soumya-kaushik-04a204298"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', fontFamily: sans, fontSize: '0.85rem', color: 'rgba(248,246,241,0.55)', textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.gold)}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,246,241,0.55)')}
            >
              LinkedIn →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: '4rem', paddingTop: '1.75rem', borderTop: '1px solid rgba(248,246,241,0.08)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: sans, fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(248,246,241,0.25)' }}>
            © {new Date().getFullYear()} Soumya Kaushik. All rights reserved.
          </p>
          <p style={{ fontFamily: sans, fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(248,246,241,0.18)' }}>
            Digital Dossier
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 3rem; }
          .footer-connect { text-align: right; }
        }
      `}</style>
    </footer>
  )
}
