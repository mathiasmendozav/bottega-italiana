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
  beige: '#F5F0E8',
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
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} style={{
      position: 'relative', minHeight: '100svh', overflow: 'hidden',
      background: COLORS.black, display: 'flex', alignItems: 'flex-end',
    }}>
      {/* Parallax Sicily background */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1920&q=85"
          alt="Sicilia, Italia"
          onError={(e) => {
            e.target.src = 'https://wallpapercat.com/w/full/b/9/0/774515-1920x1200-desktop-hd-sicily-background-image.jpg'
          }}
          style={{
            width: '100%', height: '140%', objectFit: 'cover',
            filter: 'brightness(0.28) contrast(1.2) saturate(0.7)',
          }}
        />
      </motion.div>

      {/* Gradients */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(105deg, ${COLORS.black}F2 0%, ${COLORS.black}85 45%, transparent 100%)`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to top, ${COLORS.black} 0%, transparent 50%)`,
      }} />

      {/* Content */}
      <motion.div style={{ y: textY, opacity, position: 'relative', zIndex: 2,
        padding: 'clamp(100px,14vw,160px) clamp(24px,7%,100px) clamp(120px,14vw,160px)',
        maxWidth: 'min(700px, 90vw)',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          style={{ marginBottom: '24px' }}
        >
          <FleurDeLis size={40} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '11px', letterSpacing: '5px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, textTransform: 'uppercase', marginBottom: '20px' }}
        >
          Santa Cruz de la Sierra, Bolivia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(3rem,8.5vw,7rem)', color: COLORS.snow,
            lineHeight: 0.92, marginBottom: '32px', letterSpacing: '-0.5px' }}
        >
          Nuestra<br />
          <span style={{ color: COLORS.gold }}>Historia</span>
        </motion.h1>

        {/* Italian flag */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '4px', marginBottom: '28px', transformOrigin: 'left' }}
        >
          {[COLORS.green, COLORS.snow, COLORS.inferno].map((c, i) => (
            <div key={i} style={{ width: '40px', height: '3px', background: c }} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ fontSize: 'clamp(0.9rem,1.6vw,1.05rem)', color: `${COLORS.snow}B0`,
            lineHeight: 1.9, fontFamily: SANS, maxWidth: '480px' }}
        >
          Una historia de pasión, tradición y excelencia italiana. El puente entre Italia y Bolivia.
        </motion.p>
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
        padding: '0 clamp(16px,4%,60px)' }}>
        {[
          ['2', 'Marcas Premium'],
          ['10+', 'Productos'],
          ['100%', 'Artesanal'],
          ['❤️', 'Italia → Bolivia'],
        ].map(([num, label], i, arr) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{ textAlign: 'center', flex: '1 1 auto', minWidth: '100px',
              padding: 'clamp(14px,3vw,22px) clamp(20px,4vw,48px)',
              borderRight: i < arr.length - 1 ? `1px solid ${COLORS.black}20` : 'none' }}
          >
            <div style={{ fontSize: 'clamp(1.5rem,4vw,2.2rem)', fontFamily: SERIF,
              fontStyle: 'italic', fontWeight: 300, color: COLORS.black, lineHeight: 1 }}>
              {num}
            </div>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: `${COLORS.black}CC`,
              textTransform: 'uppercase', fontFamily: SANS, fontWeight: 600, marginTop: '4px' }}>
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ─── BOTTEGA STORY ─────────────────────────────────────── */
function BottegaStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={ref} style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.black,
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(50px,9vw,120px)', alignItems: 'center' }}
        className="historia-grid"
      >
        {/* Logo frame */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative', display: 'flex',
            alignItems: 'center', justifyContent: 'center' }}
        >
          <motion.div
            style={{ scale: logoScale }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{
              width: '100%', maxWidth: 'min(480px, 90vw)', aspectRatio: '1',
              background: `linear-gradient(135deg, #1A1A1A 0%, #0D0D0D 100%)`,
              border: `4px solid ${COLORS.gold}`,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', padding: 'clamp(40px,8%,80px)',
              boxShadow: `0 20px 60px ${COLORS.gold}20`,
            }}>
              <img
                src="/images/bottega/logo.png"
                alt="Bottega Italiana"
                style={{ width: '100%', height: '100%',
                  objectFit: 'contain', borderRadius: '50%' }}
              />
            </div>
          </motion.div>
          {/* Gold corner accent */}
          <div style={{ position: 'absolute', top: '-10px', right: '-10px',
            width: '40px', height: '40px',
            borderTop: `3px solid ${COLORS.gold}`,
            borderRight: `3px solid ${COLORS.gold}` }} />
          <div style={{ position: 'absolute', bottom: '-10px', left: '-10px',
            width: '40px', height: '40px',
            borderBottom: `3px solid ${COLORS.gold}`,
            borderLeft: `3px solid ${COLORS.gold}` }} />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div style={{ marginBottom: '20px' }}>
            <FleurDeLis size={28} />
          </div>

          <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
            NUESTRA MISIÓN
          </div>

          <h2 style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
            marginBottom: '24px', lineHeight: 1.1, letterSpacing: '1px' }}>
            Trayendo Italia<br />
            <span style={{ color: COLORS.gold }}>a Bolivia</span>
          </h2>

          <div style={{ width: '80px', height: '3px', background: COLORS.gold, marginBottom: '28px' }} />

          {[
            'Bottega Italiana nace con la misión de acercar lo mejor de la tradición italiana a Bolivia. Importamos productos artesanales premium que representan siglos de maestría italiana.',
            'Cada producto que ofrecemos ha sido cuidadosamente seleccionado por su calidad excepcional, autenticidad y el legado de tradición que representa.',
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              style={{ fontSize: 'clamp(14px,1.5vw,16px)', lineHeight: 2,
                color: `${COLORS.snow}CC`, fontFamily: SANS,
                letterSpacing: '0.5px', marginBottom: '20px' }}
            >
              {text}
            </motion.p>
          ))}

          {/* Italian flag */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '32px' }}>
            {[COLORS.green, COLORS.snow, COLORS.inferno].map((c, i) => (
              <div key={i} style={{ flex: 1, height: '4px', background: c, maxWidth: '60px' }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── JOHANNA SECTION ───────────────────────────────────── */
function JohannaSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08])

  return (
    <section ref={ref} style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.beige,
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(50px,9vw,120px)', alignItems: 'center' }}
        className="johanna-grid"
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <div style={{ marginBottom: '20px' }}>
            <FleurDeLis size={28} />
          </div>

          <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
            FUNDADORA
          </div>

          <h2 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.black,
            marginBottom: '16px', lineHeight: 0.95, letterSpacing: '1px' }}>
            Johanna<br />Vargas
          </h2>

          <div style={{ fontSize: '13px', letterSpacing: '3px', color: COLORS.gold,
            textTransform: 'uppercase', marginBottom: '28px',
            fontFamily: SANS, fontWeight: 600 }}>
            Fundadora e Importadora Oficial
          </div>

          <div style={{ width: '80px', height: '3px', background: COLORS.gold, marginBottom: '28px' }} />

          {[
            'Johanna Vargas es la fundadora y alma de Bottega Italiana. Con una profunda pasión por la cultura italiana y su dedicación a la excelencia, ha creado un puente entre la tradición mediterránea y Bolivia.',
            'Bajo su liderazgo, Bottega Italiana importa y ofrece productos premium italianos, garantizando calidad excepcional y servicio personalizado en cada experiencia.',
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              style={{ fontSize: 'clamp(14px,1.5vw,16px)', lineHeight: 2,
                color: '#4A4A4A', fontFamily: SANS,
                letterSpacing: '0.5px', marginBottom: '20px' }}
            >
              {text}
            </motion.p>
          ))}

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${COLORS.gold}40` }}
            style={{ padding: '24px 28px', background: `${COLORS.gold}15`,
              border: `2px solid ${COLORS.gold}`, marginTop: '32px',
              transition: 'all 0.3s ease' }}
          >
            <div style={{ fontSize: '11px', letterSpacing: '2px', color: COLORS.gold,
              textTransform: 'uppercase', marginBottom: '10px',
              fontFamily: SANS, fontWeight: 600 }}>
              ✦ Importadora Oficial
            </div>
            <div style={{ fontSize: '14px', color: '#4A4A4A',
              lineHeight: 1.8, fontFamily: SANS, letterSpacing: '0.5px' }}>
              Productos italianos premium · Santa Cruz de la Sierra, Bolivia
            </div>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative' }}
        >
          <div style={{ overflow: 'hidden', position: 'relative',
            border: `4px solid ${COLORS.gold}`,
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
          >
            <motion.img
              style={{ scale: imgScale }}
              src="/images/bottega/johannavargas.jpg"
              alt="Johanna Vargas - Bottega Italiana"
              style={{ width: '100%', height: 'clamp(450px,55vw,650px)',
                objectFit: 'cover', display: 'block' }}
            />
          </div>
          {/* Gold accent corners */}
          <div style={{ position: 'absolute', top: '-12px', right: '-12px',
            width: '40px', height: '40px',
            borderTop: `3px solid ${COLORS.gold}`,
            borderRight: `3px solid ${COLORS.gold}` }} />
          <div style={{ position: 'absolute', bottom: '-12px', left: '-12px',
            width: '40px', height: '40px',
            borderBottom: `3px solid ${COLORS.gold}`,
            borderLeft: `3px solid ${COLORS.gold}` }} />
        </motion.div>
      </div>
    </section>
  )
}

/* ─── ITALY LANDSCAPE INTERLUDE ─────────────────────────── */
function ItalyInterlude() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} style={{ position: 'relative',
      minHeight: 'clamp(380px, 55vh, 600px)', overflow: 'hidden',
      display: 'flex', alignItems: 'center' }}>
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-15%', zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=1920&q=85"
          alt="Italia - La Bella Italia"
          onError={(e) => {
            e.target.src = 'https://wallpapercat.com/w/full/b/9/0/774515-1920x1200-desktop-hd-sicily-background-image.jpg'
          }}
          style={{ width: '100%', height: '130%', objectFit: 'cover',
            filter: 'brightness(0.25) saturate(0.7) contrast(1.1)' }}
        />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to right, ${COLORS.black}EE 0%, ${COLORS.black}80 55%, ${COLORS.black}50 100%)` }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: 'relative', zIndex: 2,
          padding: 'clamp(50px,8vw,90px) clamp(24px,8%,100px)',
          maxWidth: 'min(700px, 90vw)' }}
      >
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
          fontFamily: SANS, fontWeight: 600, marginBottom: '20px' }}>
          SICILIA, ITALIA
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,4.8rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          lineHeight: 1.05, marginBottom: '28px' }}>
          Desde el corazón<br />
          <span style={{ color: COLORS.gold }}>del Mediterráneo</span>
        </h2>
        <div style={{ width: '60px', height: '2px', background: COLORS.gold, marginBottom: '24px' }} />
        <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: `${COLORS.snow}CC`,
          lineHeight: 1.9, fontFamily: SANS }}>
          Sicilia, la isla que inspiró siglos de arte, gastronomía y cultura. Aquí nacen nuestras marcas, aquí comienza cada historia.
        </p>
      </motion.div>
    </section>
  )
}

/* ─── VALUES SECTION ────────────────────────────────────── */
function ValuesSection() {
  const navigate = useNavigate()

  return (
    <section style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.black,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'clamp(60px,10vw,100px)' }}
        >
          <FleurDeLis size={36} />

          <h2 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontFamily: SERIF,
            fontWeight: 300, fontStyle: 'italic', color: COLORS.gold,
            lineHeight: 1.2, marginTop: '28px', marginBottom: '20px',
            letterSpacing: '2px' }}>
            Nuestros Valores
          </h2>

          <div style={{ width: '80px', height: '3px', background: COLORS.gold,
            margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(24px,4vw,40px)' }}
        >
          {[
            {
              title: 'Calidad Premium',
              desc: 'Solo importamos productos de la más alta calidad artesanal italiana, seleccionados con rigor.',
            },
            {
              title: 'Autenticidad',
              desc: 'Productos 100% italianos con certificados de origen. La tradición en su forma más pura.',
            },
            {
              title: 'Servicio Personalizado',
              desc: 'Atención dedicada y asesoramiento experto. Cada cliente recibe una experiencia única.',
            },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              style={{ padding: 'clamp(36px,5vw,50px) clamp(28px,4vw,36px)',
                background: `${COLORS.gold}08`, border: `2px solid ${COLORS.gold}`,
                transition: 'all 0.4s ease', position: 'relative' }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3, type: 'spring' }}
              >
                <FleurDeLis size={24} />
              </motion.div>

              <div style={{ fontSize: 'clamp(1.2rem,2.5vw,1.6rem)', fontFamily: SERIF,
                fontStyle: 'italic', color: COLORS.gold,
                marginTop: '20px', marginBottom: '16px' }}>
                {v.title}
              </div>

              <div style={{ fontSize: '15px', lineHeight: 1.9, color: `${COLORS.snow}CC`,
                fontFamily: SANS, letterSpacing: '0.5px' }}>
                {v.desc}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: 'clamp(60px,10vw,90px)' }}
        >
          <motion.button
            onClick={() => navigate('/catalogo')}
            whileHover={{ scale: 1.06, boxShadow: `0 15px 40px ${COLORS.gold}50` }}
            whileTap={{ scale: 0.95 }}
            style={{ background: COLORS.gold, border: 'none', color: COLORS.black,
              padding: 'clamp(15px,2vw,20px) clamp(36px,5vw,56px)',
              fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 700, cursor: 'pointer',
              transition: 'all 0.3s ease' }}
          >
            Ver Catálogo Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default function HistoriaPage() {
  return (
    <>
      <style>{`
        @media (max-width: 968px) {
          .historia-grid,
          .johanna-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
      <Hero />
      <StatsStrip />
      <BottegaStory />
      <JohannaSection />
      <ItalyInterlude />
      <ValuesSection />
      <Footer />
    </>
  )
}