import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Case Summary', href: '#case-summary' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Leadership', href: '#leadership' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: bgOpacity,
            backgroundColor: 'rgba(248, 246, 241, 0.92)',
            borderBottom: '1px solid rgba(209, 203, 192, 0.4)',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '0 2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '4.5rem',
            }}
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ position: 'relative', zIndex: 10, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: '#1E3A5F',
                  letterSpacing: '0.02em',
                }}
              >
                S<span style={{ color: '#C8A96B' }}>.</span>K
              </span>
            </button>

            {/* Desktop nav */}
            <div
              style={{
                alignItems: 'center',
                gap: '2.5rem',
              }}
              className="desktop-nav"
            >
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.68rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#6B7280',
                    fontWeight: 500,
                    transition: 'color 0.3s',
                    padding: '0.25rem 0',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#1E3A5F')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-nav-btn"
              style={{
                position: 'relative',
                zIndex: 10,
                width: '2rem',
                height: '2rem',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
            >
              <motion.span
                style={{ display: 'block', width: '1.5rem', height: '1px', backgroundColor: '#1E3A5F' }}
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                style={{ display: 'block', width: '1rem', height: '1px', backgroundColor: '#1E3A5F' }}
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                style={{ display: 'block', width: '1.5rem', height: '1px', backgroundColor: '#1E3A5F' }}
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <style>{`
        .desktop-nav { display: none; }
        .mobile-nav-btn { display: flex; }
        .mobile-menu-overlay { display: flex; }
        @media (min-width: 768px) {
          .desktop-nav { display: flex; }
          .mobile-nav-btn { display: none; }
          .mobile-menu-overlay { display: none !important; }
        }
      `}</style>

      {/* Mobile menu */}
      <motion.div
        className="mobile-menu-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 30,
          backgroundColor: '#F8F6F1',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          pointerEvents: mobileOpen ? 'auto' : 'none',
        }}
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, i) => (
          <motion.button
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            initial={false}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: mobileOpen ? i * 0.08 : 0, duration: 0.4 }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.5rem',
              color: '#1E3A5F',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C8A96B')}
            onMouseLeave={e => (e.currentTarget.style.color = '#1E3A5F')}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  )
}
