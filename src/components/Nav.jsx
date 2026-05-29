import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  gold: '#E2BB00',
  black: '#010001',
  snow: '#FFFCFE',
  green: '#0C7A2A',
  inferno: '#AB0502',
}

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Catálogo', path: '/catalogo' },
    { label: 'Morettino', path: '/morettino' },
    { label: 'Kottabos', path: '/kottabos' },
    { label: 'Historia', path: '/historia' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: COLORS.snow,
          borderBottom: isScrolled ? `1px solid ${COLORS.gold}60` : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.07)' : 'none',
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div style={{
          maxWidth: '1440px', margin: '0 auto',
          padding: `${isScrolled ? '10px' : '16px'} clamp(20px,5%,80px)`,
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.4s ease',
        }}>

          {/* ── LOGO ───────────────────────────────────── */}
          <motion.div
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ display: 'flex', alignItems: 'center',
              gap: isScrolled ? '12px' : '16px', cursor: 'pointer',
              transition: 'gap 0.4s ease', flexShrink: 0 }}
          >
            {/* Circular logo image */}
            <motion.img
              src="/images/bottega/logo.png"
              alt="Bottega Italiana"
              style={{
                height: isScrolled ? '56px' : '76px',
                width: isScrolled ? '56px' : '76px',
                borderRadius: '50%',
                objectFit: 'cover',
                transition: 'all 0.4s ease',
                boxShadow: `0 2px 12px ${COLORS.gold}30`,
                border: `2px solid ${COLORS.gold}30`,
                flexShrink: 0,
              }}
            />

            {/* Brand text block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              {/* Main brand name */}
              <div style={{
                fontFamily: SERIF,
                fontSize: isScrolled ? '18px' : '24px',
                fontWeight: 400,
                fontStyle: 'italic',
                color: COLORS.gold,
                letterSpacing: '2px',
                lineHeight: 1,
                transition: 'font-size 0.4s ease',
                whiteSpace: 'nowrap',
              }}>
                Bottega Italiana
              </div>

              {/* Divider line + subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {/* Italian flag mini */}
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[COLORS.green, '#999', COLORS.inferno].map((c, i) => (
                    <div key={i} style={{
                      width: '14px', height: '2px', background: c,
                      opacity: isScrolled ? 0.7 : 1, transition: 'opacity 0.4s ease'
                    }} />
                  ))}
                </div>

                <div style={{
                  fontFamily: SANS,
                  fontSize: isScrolled ? '8px' : '9px',
                  fontWeight: 500,
                  color: `${COLORS.black}80`,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  transition: 'font-size 0.4s ease',
                  whiteSpace: 'nowrap',
                }}>
                  Import · Export
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── DESKTOP NAV LINKS ───────────────────── */}
          <nav style={{ display: 'flex', alignItems: 'center',
            gap: 'clamp(24px, 3vw, 44px)' }}
            className="nav-links-desktop"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.path}
                onClick={() => navigate(link.path)}
                style={{
                  background: 'none', border: 'none',
                  fontFamily: SANS,
                  fontSize: isScrolled ? '11px' : '12px',
                  letterSpacing: '2px',
                  fontWeight: isActive(link.path) ? 600 : 400,
                  color: isActive(link.path) ? COLORS.gold : `${COLORS.black}BB`,
                  cursor: 'pointer', position: 'relative',
                  padding: '10px 0',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease, font-size 0.4s ease',
                }}
                whileHover={{ color: COLORS.gold }}
              >
                {link.label}

                {/* Active underline */}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute', bottom: 0,
                      left: 0, right: 0, height: '2px',
                      background: COLORS.gold,
                      borderRadius: '1px',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover underline */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: isActive(link.path) ? 0 : 1 }}
                  style={{
                    position: 'absolute', bottom: 0,
                    left: 0, right: 0, height: '1px',
                    background: `${COLORS.gold}80`,
                    transformOrigin: 'left',
                    borderRadius: '1px',
                  }}
                  transition={{ duration: 0.25 }}
                />
              </motion.button>
            ))}

            {/* WhatsApp CTA button */}
            <motion.a
              href="https://wa.me/59178594506"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: `0 6px 20px ${COLORS.gold}40` }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: COLORS.gold,
                color: COLORS.black,
                padding: isScrolled ? '9px 18px' : '10px 22px',
                fontSize: '10px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: SANS,
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.4s ease',
                whiteSpace: 'nowrap',
              }}
              className="nav-cta"
            >
              Contactar
            </motion.a>
          </nav>

          {/* ── MOBILE HAMBURGER ─────────────────────── */}
          <motion.button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', padding: '8px', flexDirection: 'column',
              gap: '5px', alignItems: 'flex-end',
            }}
            className="mobile-menu-btn"
          >
            {[1, 0.7, 1].map((w, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: isMobileOpen && i === 0 ? 45 : isMobileOpen && i === 2 ? -45 : 0,
                  y: isMobileOpen && i === 0 ? 10 : isMobileOpen && i === 2 ? -10 : 0,
                  opacity: isMobileOpen && i === 1 ? 0 : 1,
                  width: isMobileOpen ? '24px' : `${w * 24}px`,
                }}
                transition={{ duration: 0.3 }}
                style={{ height: '2px', background: COLORS.black,
                  borderRadius: '1px', transformOrigin: 'center' }}
              />
            ))}
          </motion.button>
        </div>

        {/* Gold bottom accent line when not scrolled */}
        <motion.div
          animate={{ scaleX: isScrolled ? 0 : 1, opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          style={{ height: '2px', background: COLORS.gold,
            width: '100%', transformOrigin: 'left' }}
        />
      </motion.nav>

      {/* ── MOBILE MENU OVERLAY ─────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: COLORS.snow,
              zIndex: 999,
              display: 'flex', flexDirection: 'column',
              padding: 'clamp(100px,18vw,120px) clamp(28px,8%,60px) 40px',
            }}
          >
            {/* Logo in mobile menu */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px',
              marginBottom: '50px' }}>
              <img src="/images/bottega/logo.png" alt="Bottega Italiana"
                style={{ height: '56px', width: '56px', borderRadius: '50%',
                  border: `2px solid ${COLORS.gold}40` }} />
              <div>
                <div style={{ fontFamily: SERIF, fontSize: '20px', fontStyle: 'italic',
                  color: COLORS.gold, letterSpacing: '2px' }}>
                  Bottega Italiana
                </div>
                <div style={{ fontFamily: SANS, fontSize: '8px', letterSpacing: '3px',
                  color: `${COLORS.black}70`, textTransform: 'uppercase', marginTop: '3px' }}>
                  Import · Export
                </div>
              </div>
            </div>

            {/* Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { navigate(link.path); setIsMobileOpen(false) }}
                  style={{
                    background: 'none', border: 'none',
                    textAlign: 'left', padding: '16px 0',
                    borderBottom: `1px solid ${COLORS.gold}20`,
                    cursor: 'pointer', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between',
                  }}
                >
                  <span style={{
                    fontFamily: SERIF, fontSize: '2rem', fontStyle: 'italic',
                    fontWeight: 300, letterSpacing: '1px',
                    color: isActive(link.path) ? COLORS.gold : COLORS.black,
                  }}>
                    {link.label}
                  </span>
                  {isActive(link.path) && (
                    <div style={{ width: '6px', height: '6px',
                      borderRadius: '50%', background: COLORS.gold }} />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* WhatsApp in mobile */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              href="https://wa.me/59178594506"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', background: '#0C7A2A',
                color: COLORS.snow, textAlign: 'center',
                padding: '18px', fontFamily: SANS, fontSize: '12px',
                letterSpacing: '3px', textTransform: 'uppercase',
                fontWeight: 700, textDecoration: 'none', marginTop: '32px' }}
            >
              📱 WhatsApp
            </motion.a>

            {/* Close button */}
            <motion.button
              onClick={() => setIsMobileOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '28px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: COLORS.black, fontSize: '24px', fontFamily: SANS,
                lineHeight: 1, padding: '8px' }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .nav-cta { display: none !important; }
        }
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}