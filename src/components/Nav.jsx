import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SANS = '"Jost", sans-serif'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/catalogo', label: 'Catálogo' },
    { to: '/morettino', label: 'Morettino' },
    { to: '/kottabos', label: 'Kottabos' },
    { to: '/historia', label: 'Historia' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(42,24,16,0.98)' : 'rgba(42,24,16,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '2px solid #C89B3C' : '1px solid rgba(200,155,60,0.3)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 clamp(20px,6%,80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '85px' : '100px',
          transition: 'height 0.4s ease',
        }}
      >
        {/* Logo - LARGER */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              width: scrolled ? '56px' : '64px',
              height: scrolled ? '56px' : '64px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid #C89B3C',
              transition: 'all 0.4s ease',
              background: '#fff',
            }}
          >
            <img
              src="/images/bottega/BottegaItalianaLogo.jpeg"
              alt="Bottega Italiana"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: scrolled ? '1.15rem' : '1.3rem',
                fontFamily: SANS,
                fontWeight: 400,
                color: '#C89B3C',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                transition: 'font-size 0.4s ease',
              }}
            >
              Bottega Italiana
            </div>
            <div
              style={{
                fontSize: '9px',
                fontFamily: SANS,
                fontWeight: 400,
                letterSpacing: '2px',
                color: '#F5F0E8',
                textTransform: 'uppercase',
              }}
            >
              Import · Export
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(32px,4.5vw,52px)',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontSize: '13px',
                  fontFamily: SANS,
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: isActive ? '#C89B3C' : '#F5F0E8',
                  textDecoration: 'none',
                  position: 'relative',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => !isActive && (e.currentTarget.style.color = '#C89B3C')}
                onMouseLeave={(e) => !isActive && (e.currentTarget.style.color = '#F5F0E8')}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-8px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#C89B3C',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: menuOpen ? (i === 0 ? 45 : i === 1 ? 0 : -45) : 0,
                  y: menuOpen ? (i === 0 ? 8 : i === 1 ? 0 : -8) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                style={{
                  width: '26px',
                  height: '2px',
                  background: '#C89B3C',
                  transformOrigin: 'center',
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
            style={{
              display: 'none',
              background: 'rgba(42,24,16,0.98)',
              borderTop: '1px solid rgba(200,155,60,0.3)',
              padding: '24px clamp(20px,6%,80px)',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.to
              return (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{ marginBottom: '16px' }}
                >
                  <Link
                    to={link.to}
                    style={{
                      display: 'block',
                      fontSize: '14px',
                      fontFamily: SANS,
                      fontWeight: isActive ? 500 : 400,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: isActive ? '#C89B3C' : '#F5F0E8',
                      textDecoration: 'none',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(200,155,60,0.2)',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  )
}