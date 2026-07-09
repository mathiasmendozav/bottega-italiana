import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import Footer from '../components/Footer'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  snow: '#FFFCFE',
  inferno: '#AB0502',
  green: '#0C7A2A',
  black: '#010001',
  gold: '#c86915',
}

function FleurDeLis({ size = 24, color = COLORS.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2M7 7C6 7 5 8 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 8 8 7 7 7M17 7C16 7 15 8 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 8 18 7 17 7M12 8C10 8 9 10 9 12C9 13 9 14 8 14C7 14 7 13 7 12C7 11 7 9 8 8C7 8 6 9 6 10C6 12 7 13 8 14C9 15 10 15 11 15L11 20C11 21 11 22 12 22C13 22 13 21 13 20L13 15C14 15 15 15 16 14C17 13 18 12 18 10C18 9 17 8 16 8C17 9 17 11 17 12C17 13 17 14 16 14C15 14 15 13 15 12C15 10 14 8 12 8Z" />
    </svg>
  )
}

/* ─── HERO ──────────────────────────────────────────────── */
function Hero() {
  const navigate = useNavigate()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} style={{
      position: 'relative', minHeight: '100svh', overflow: 'hidden',
      background: COLORS.black,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Parallax background – Sicily/Taormina */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1533769222343-6b23c83879e9?w=1920&q=85"
          alt="Sicilia, Italia"
          onError={(e) => {
            e.target.src = 'https://wallpapercat.com/w/full/b/9/0/774515-1920x1200-desktop-hd-sicily-background-image.jpg'
          }}
          style={{ width: '100%', height: '140%', objectFit: 'cover',
            filter: 'brightness(0.2) saturate(0.6) contrast(1.2)' }}
        />
      </motion.div>

      {/* Layered gradients */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: `radial-gradient(ellipse at center, ${COLORS.black}80 0%, ${COLORS.black}D0 70%)` }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to top, ${COLORS.black} 0%, transparent 60%)` }} />

      {/* Animated vertical rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.02, 0.07, 0.02] }}
          transition={{ duration: 4 + i * 0.5, delay: i * 0.4, repeat: Infinity }}
          style={{ position: 'absolute', top: 0, left: `${10 + i * 16}%`,
            width: '1px', height: '100%', zIndex: 1,
            background: `linear-gradient(180deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)` }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity, position: 'relative', zIndex: 2,
          textAlign: 'center', padding: '0 clamp(24px,6%,100px)',
          maxWidth: '1000px', width: '100%' }}
      >
        {/* Fleur de Lis */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        >
          <FleurDeLis size={44} />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ margin: '36px auto' }}
        >
          <motion.img
            src="/images/bottega/logo.png"
            alt="Bottega Italiana"
            animate={{ boxShadow: [
              `0 0 0px ${COLORS.gold}00`,
              `0 0 40px ${COLORS.gold}50`,
              `0 0 0px ${COLORS.gold}00`,
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ height: 'clamp(110px, 14vw, 150px)',
              width: 'clamp(110px, 14vw, 150px)',
              borderRadius: '50%', margin: '0 auto',
              border: `3px solid ${COLORS.gold}60`,
              objectFit: 'cover' }}
          />
        </motion.div>

        {/* Italian flag */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center',
            gap: '8px', marginBottom: '36px', transformOrigin: 'center' }}
        >
          {[COLORS.green, COLORS.snow, COLORS.inferno].map((c, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              style={{ width: 'clamp(60px,8vw,100px)', height: '4px', background: c }}
            />
          ))}
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(3rem,9vw,7rem)', color: COLORS.gold,
            letterSpacing: '3px', marginBottom: '20px', lineHeight: 1 }}
        >
          Bottega Italiana
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{ width: 'clamp(80px,12vw,140px)', height: '2px',
            background: COLORS.gold, margin: '0 auto 32px' }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ fontSize: 'clamp(1rem,2.2vw,1.4rem)', color: `${COLORS.snow}CC`,
            letterSpacing: '1.5px', lineHeight: 1.8,
            maxWidth: '680px', margin: '0 auto 56px', fontFamily: SANS }}
        >
          Productos desde Italia a Bolivia
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => navigate('/catalogo')}
            whileHover={{ scale: 1.06, boxShadow: `0 12px 40px ${COLORS.gold}50` }}
            whileTap={{ scale: 0.95 }}
            style={{ background: COLORS.gold, border: 'none', color: COLORS.black,
              padding: 'clamp(14px,2vw,18px) clamp(32px,5vw,52px)',
              fontSize: 'clamp(10px,1.2vw,13px)', letterSpacing: '3px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Ver Catálogo
          </motion.button>
          <motion.button
            onClick={() => navigate('/historia')}
            whileHover={{ scale: 1.06, borderColor: COLORS.gold,
              boxShadow: `0 12px 40px ${COLORS.gold}30` }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'transparent', border: `2px solid ${COLORS.snow}60`,
              color: COLORS.snow, padding: 'clamp(14px,2vw,18px) clamp(32px,5vw,52px)',
              fontSize: 'clamp(10px,1.2vw,13px)', letterSpacing: '3px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Nuestra Historia
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '28px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
      >
        <div style={{ fontSize: '8px', letterSpacing: '3px', color: `${COLORS.snow}60`, fontFamily: SANS }}>SCROLL</div>
        <div style={{ width: '1px', height: '40px', background: `linear-gradient(${COLORS.gold}, transparent)` }} />
      </motion.div>
    </section>
  )
}

/* ─── STATS STRIP ───────────────────────────────────────── */
function StatsStrip() {
  return (
    <div style={{ background: COLORS.gold }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
        maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(16px,4%,60px)' }}>
        {[
          ['2', 'Marcas Premium'],
          ['10+', 'Productos'],
          ['100+', 'Años de Tradición'],
          ['❤️', 'Italia → Bolivia'],
        ].map(([num, label], i, arr) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{ textAlign: 'center', flex: '1 1 auto', minWidth: '110px',
              padding: 'clamp(14px,3vw,22px) clamp(16px,3vw,48px)',
              borderRight: i < arr.length - 1 ? `1px solid ${COLORS.black}20` : 'none' }}
          >
            <div style={{ fontSize: 'clamp(1.4rem,4vw,2.2rem)', fontFamily: SERIF,
              fontStyle: 'italic', fontWeight: 300, color: COLORS.black, lineHeight: 1 }}>
              {num}
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: `${COLORS.black}BB`,
              textTransform: 'uppercase', fontFamily: SANS, fontWeight: 600, marginTop: '4px' }}>
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ─── BRANDS — FULL VISUAL SPLIT ───────────────────────── */
function BrandsSection() {
  const navigate = useNavigate()

  return (
    <section style={{ background: COLORS.black }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center',
          padding: 'clamp(80px,12vw,120px) clamp(20px,6%,80px) clamp(50px,8vw,70px)' }}
      >
        <FleurDeLis size={32} />
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,4rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          marginTop: '24px', marginBottom: '20px', letterSpacing: '2px' }}>
          Nuestras Marcas
        </h2>
        <div style={{ width: '80px', height: '2px', background: COLORS.gold, margin: '0 auto 24px' }} />
        <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: `${COLORS.snow}99`,
          lineHeight: 1.9, maxWidth: '600px', margin: '0 auto',
          fontFamily: SANS, letterSpacing: '0.5px' }}>
          Importamos y distribuimos las marcas más emblemáticas de la artesanía italiana
        </p>
      </motion.div>

      {/* Full-bleed brand cards */}
      {[
        {
          name: 'Morettino',
          link: '/morettino',
          subtitle: 'Café Artesanal',
          founded: 'Palermo, Sicilia · Desde 1920',
          desc: 'Cuatro generaciones dedicadas al arte del café. Maestros tostadores sicilianos desde 1920.',
          logo: '/images/morettino/morettinologo.webp',
          bg: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80',
          accentLeft: true,
        },
        {
          name: 'Kottabos',
          link: '/kottabos',
          subtitle: 'Cerveza Artesanal',
          founded: 'Montes Nebrodi, Sicilia · 2015',
          desc: 'Tres mujeres, una pasión. Cervezas artesanales no filtradas desde el corazón de Sicilia.',
          logo: '/images/kottabos/kottabos-logo.jpg',
          bg: 'https://images.unsplash.com/photo-1555658636-6e4a36218be7?w=1200&q=80',
          accentLeft: false,
        },
      ].map((brand, i) => {
        const ref = useRef(null)
        const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
        const y = useTransform(scrollYProgress, [0, 1], [60, 0])
        const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
        const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

        return (
          <motion.div
            key={brand.name}
            ref={ref}
            style={{ opacity, y }}
          >
            <div
              onClick={() => navigate(brand.link)}
              style={{ position: 'relative', minHeight: 'clamp(450px, 65vh, 650px)',
                display: 'flex', alignItems: 'flex-end',
                overflow: 'hidden', cursor: 'pointer', borderTop: `1px solid ${COLORS.gold}20` }}
              className="brand-row"
            >
              {/* Background */}
              <motion.div style={{ scale: bgScale, position: 'absolute', inset: 0, zIndex: 0 }}>
                <img src={brand.bg} alt={brand.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'brightness(0.2) saturate(0.5)' }} />
              </motion.div>

              {/* Gradient */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 1,
                background: brand.accentLeft
                  ? `linear-gradient(to right, ${COLORS.black}F0 0%, ${COLORS.black}CC 50%, ${COLORS.black}80 100%)`
                  : `linear-gradient(to left, ${COLORS.black}F0 0%, ${COLORS.black}CC 50%, ${COLORS.black}80 100%)` }} />
              <div style={{ position: 'absolute', inset: 0, zIndex: 1,
                background: `linear-gradient(to top, ${COLORS.black} 0%, transparent 50%)` }} />

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 2,
                padding: 'clamp(50px,8vw,80px) clamp(28px,7%,100px)',
                display: 'flex', flexDirection: 'column',
                alignItems: brand.accentLeft ? 'flex-start' : 'flex-end',
                width: '100%' }}
              >
                <div style={{ maxWidth: 'min(560px, 90vw)',
                  textAlign: brand.accentLeft ? 'left' : 'right',
                  marginLeft: brand.accentLeft ? 0 : 'auto' }}
                >
                  <img src={brand.logo} alt={brand.name}
                    style={{ height: 'clamp(60px,8vw,90px)', width: 'auto',
                      objectFit: 'contain', marginBottom: '24px',
                      filter: 'brightness(1.1)', display: 'block',
                      marginLeft: brand.accentLeft ? 0 : 'auto' }} />

                  <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
                    fontFamily: SANS, fontWeight: 600, marginBottom: '12px' }}>
                    {brand.founded}
                  </div>

                  <h3 style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)', fontFamily: SERIF,
                    fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
                    lineHeight: 0.95, marginBottom: '16px', letterSpacing: '1px' }}>
                    {brand.name}
                  </h3>

                  <div style={{ width: '60px', height: '2px', background: COLORS.gold,
                    marginBottom: '20px',
                    marginLeft: brand.accentLeft ? 0 : 'auto' }} />

                  <p style={{ fontSize: 'clamp(13px,1.5vw,15px)', color: `${COLORS.snow}AA`,
                    lineHeight: 1.9, fontFamily: SANS, marginBottom: '28px' }}>
                    {brand.desc}
                  </p>

                  <motion.div
                    whileHover={{ x: brand.accentLeft ? 6 : -6 }}
                    style={{ display: 'inline-flex', alignItems: 'center',
                      gap: '10px', fontSize: '11px', letterSpacing: '2px',
                      color: COLORS.gold, fontFamily: SANS, fontWeight: 600,
                      textTransform: 'uppercase' }}
                  >
                    {!brand.accentLeft && (
                      <motion.span animate={{ x: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        ←
                      </motion.span>
                    )}
                    Conocer Más
                    {brand.accentLeft && (
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                        →
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}

/* ─── SICILY INTERLUDE ──────────────────────────────────── */
function SicilyInterlude() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} style={{ position: 'relative',
      minHeight: 'clamp(380px, 55vh, 580px)', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-15%', zIndex: 0 }}>
        <img
          src="https://wallpapercat.com/w/full/b/9/0/774515-1920x1200-desktop-hd-sicily-background-image.jpg"
          alt="Sicilia, Italia"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1920&q=80'
          }}
          style={{ width: '100%', height: '130%', objectFit: 'cover',
            filter: 'brightness(0.25) saturate(0.7) contrast(1.1)' }}
        />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: `${COLORS.black}70` }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: 'relative', zIndex: 2,
          textAlign: 'center', padding: 'clamp(40px,8vw,80px) clamp(24px,8%,100px)',
          maxWidth: '800px' }}
      >
        {/* Italian flag */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '32px' }}>
          {[COLORS.green, COLORS.snow, COLORS.inferno].map((c, i) => (
            <div key={i} style={{ width: '50px', height: '3px', background: c }} />
          ))}
        </div>

        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,4.5rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          lineHeight: 1.05, marginBottom: '24px' }}>
          Lo mejor de Italia,<br />
          <span style={{ color: COLORS.gold }}>en Bolivia</span>
        </h2>

        <div style={{ width: '60px', height: '2px', background: COLORS.gold, margin: '0 auto 24px' }} />

        <p style={{ fontSize: 'clamp(14px,1.6vw,17px)', color: `${COLORS.snow}CC`,
          lineHeight: 1.9, fontFamily: SANS }}>
          Siglos de tradición artesanal italiana, seleccionados con rigor y traídos directamente a Bolivia por Bottega Italiana.
        </p>
      </motion.div>
    </section>
  )
}

/* ─── QUICK CATALOG ─────────────────────────────────────── */
function QuickCatalog() {
  const navigate = useNavigate()

  return (
    <section style={{ background: '#F5F0E8',
      padding: 'clamp(80px,12vw,120px) clamp(20px,6%,80px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px,8vw,60px)' }}
        >
          <FleurDeLis size={28} />
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.black,
            marginTop: '20px', marginBottom: '16px', letterSpacing: '1px' }}>
            Explora Nuestro Catálogo
          </h2>
          <div style={{ width: '60px', height: '2px', background: COLORS.gold, margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(16px,3vw,28px)' }}
          className="catalog-grid"
        >
          {[
            { title: 'Morettino', sub: 'Café Artesanal', bg: '#ffffff', color: COLORS.black,
              path: '/catalogo?cat=cafe', logo: '/images/morettino/morettinologo.webp' },
            { title: 'Kottabos', sub: 'Cerveza Artesanal', bg: COLORS.black, color: COLORS.snow,
              path: '/catalogo?cat=cerveza', logo: '/images/kottabos/kottabos-logo.jpg' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => navigate(item.path)}
              style={{ background: item.bg, border: `2px solid ${COLORS.gold}`,
                padding: 'clamp(40px,6vw,70px) clamp(24px,4vw,50px)',
                cursor: 'pointer', transition: 'all 0.4s ease',
                textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', inset: 0,
                background: `radial-gradient(circle at center, ${COLORS.gold}12 0%, transparent 70%)` }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <img src={item.logo} alt={item.title}
                  style={{ height: 'clamp(50px,7vw,80px)', width: 'auto',
                    objectFit: 'contain', margin: '0 auto 24px', display: 'block',
                    filter: item.bg === COLORS.black ? 'brightness(1.2)' : 'none' }} />
                <div style={{ fontSize: 'clamp(1.6rem,3.5vw,2.5rem)', fontFamily: SERIF,
                  fontStyle: 'italic', color: COLORS.gold, marginBottom: '10px' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '2px',
                  color: item.color === COLORS.snow ? `${COLORS.snow}AA` : '#666',
                  fontFamily: SANS, fontWeight: 500 }}>
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT CTA ───────────────────────────────────────── */
function ContactCTA() {
  return (
    <section style={{ padding: 'clamp(90px,12vw,130px) clamp(20px,6%,80px)',
      background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
      textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

      {/* Animated scan lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 14 + i * 4, repeat: Infinity, ease: 'linear', delay: i * 2 }}
          style={{ position: 'absolute', top: `${28 + i * 25}%`,
            width: '50%', height: '1px',
            background: `linear-gradient(90deg, transparent, ${COLORS.gold}50, transparent)`,
            opacity: 0.3 }}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FleurDeLis size={40} />
        </motion.div>

        <h2 style={{ fontSize: 'clamp(2.2rem,5.5vw,3.8rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.gold,
          marginTop: '28px', marginBottom: '20px', letterSpacing: '2px' }}>
          ¿Listo para Degustar?
        </h2>

        <div style={{ width: '60px', height: '2px', background: COLORS.gold, margin: '0 auto 24px' }} />

        <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: `${COLORS.snow}BB`,
          lineHeight: 1.9, marginBottom: '44px', fontFamily: SANS }}>
          Contáctanos para conocer más sobre nuestros productos premium italianos
        </p>

        <motion.a
          href="https://wa.me/59178006639" target="_blank" rel="noopener noreferrer"
          whileHover={{ scale: 1.06, boxShadow: `0 14px 40px #0C7A2A66` }}
          whileTap={{ scale: 0.95 }}
          style={{ display: 'inline-block', background: '#0C7A2A',
            color: COLORS.snow, padding: 'clamp(15px,2vw,20px) clamp(36px,6vw,56px)',
            fontSize: 'clamp(10px,1.2vw,13px)', letterSpacing: '3px',
            textTransform: 'uppercase', fontFamily: SANS, fontWeight: 700,
            textDecoration: 'none', transition: 'all 0.3s ease' }}
        >
          📱 Contactar por WhatsApp
        </motion.a>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .catalog-grid { grid-template-columns: 1fr !important; }
          .brand-row { min-height: 420px !important; }
        }
      `}</style>
      <Hero />
      <StatsStrip />
      <BrandsSection />
      <SicilyInterlude />
      <QuickCatalog />
      <ContactCTA />
      <Footer />
    </>
  )
}