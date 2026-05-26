import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SANS = '"Jost", sans-serif'

// Logo color palette
const COLORS = {
  snow: '#FFFCFE',
  inferno: '#AB0502',
  green: '#0C7A2A',
  black: '#010001',
  gold: '#E2BB00',
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'INICIO' },
    { to: '/catalogo', label: 'CATÁLOGO' },
    { to: '/morettino', label: 'MORETTINO' },
    { to: '/kottabos', label: 'KOTTABOS' },
    { to: '/historia', label: 'HISTORIA' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: COLORS.snow,
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? `2px solid ${COLORS.gold}` : `1px solid ${COLORS.gold}40`,
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: scrolled ? '12px clamp(20px,6%,80px)' : '16px clamp(20px,6%,80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img
            src="/images/bottega/logo.png"
            alt="Bottega Italiana"
            style={{
              height: scrolled ? '56px' : '64px',
              width: scrolled ? '56px' : '64px',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: SANS,
                fontSize: scrolled ? '16px' : '18px',
                fontWeight: 500,
                color: COLORS.gold,
                letterSpacing: '3px',
                transition: 'font-size 0.3s ease',
              }}
            >
              BOTTEGA ITALIANA
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: '10px',
                color: `${COLORS.gold}B3`,
                letterSpacing: '2px',
                marginTop: '2px',
              }}
            >
              IMPORT · EXPORT
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            gap: 'clamp(24px,4vw,40px)',
            alignItems: 'center',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: SANS,
                fontSize: scrolled ? '12px' : '13px',
                fontWeight: 500,
                letterSpacing: '2px',
                color: location.pathname === link.to ? COLORS.gold : COLORS.black,
                textDecoration: 'none',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '8px 0',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = COLORS.gold
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.to) {
                  e.currentTarget.style.color = COLORS.black
                }
              }}
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="activeLink"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: COLORS.gold,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: `2px solid ${COLORS.gold}`,
            color: COLORS.gold,
            padding: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.gold
            e.currentTarget.style.color = COLORS.black
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = COLORS.gold
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
            style={{
              overflow: 'hidden',
              background: COLORS.snow,
              borderTop: `1px solid ${COLORS.gold}40`,
            }}
          >
            <div style={{ padding: '20px' }}>
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    display: 'block',
                    fontFamily: SANS,
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    color: location.pathname === link.to ? COLORS.gold : COLORS.black,
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: `1px solid ${COLORS.gold}20`,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 968px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  )
}