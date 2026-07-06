import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'
const MONO = '"Courier New", monospace'

const COLORS = {
  snow: '#FFFCFE',
  black: '#010001',
  gold: '#c86915',
  green: '#0C7A2A',
  steel: '#8A9BA8',
  dark: '#080808',
  gunmetal: '#141618',
}

const MACHINE_IMAGES = [
  { src: 'https://www.xlvi.it/wp-content/uploads/2025/07/XLVI_Steamhammer_Elettronica_2gr_trequarti_accesa.png', label: 'Tres cuartos', angle: '45°' },
  { src: 'https://www.xlvi.it/wp-content/uploads/2025/07/XLVI_Steamhammer_Elettronica_2gr_fronte.png', label: 'Frontal', angle: '0°' },
  { src: 'https://www.xlvi.it/wp-content/uploads/2025/07/XLVI_Steamhammer_Elettronica_2gr_lato.png', label: 'Lateral', angle: '90°' },
  { src: 'https://www.xlvi.it/wp-content/uploads/2025/07/XLVI_Steamhammer_Elettronica_2gr_retro.png', label: 'Posterior', angle: '180°' },
]

const FEATURES = [
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-10.png', title: 'Sistema PID', desc: 'Regulación automática de temperatura para máxima estabilidad térmica en cada extracción.' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-14.png', title: 'Smooth Flow', desc: 'Flujo suave y constante para un espresso de textura aterciopelada e inigualable.' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-23.png', title: 'XLVI Steaming', desc: 'Presión y flujo de vapor constantes. 3 boquillas disponibles (1, 1.2, 1.5 mm).' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-15.png', title: 'Pre-infusión', desc: 'Pre-infusión electrónica y mecánica ajustable para optimizar aroma y extracción.' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-16.png', title: 'U Can Touch', desc: 'Lanza siempre cómoda al tacto gracias a la tecnología exclusiva U Can Touch.' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-11.png', title: 'Energy Saving', desc: 'Encendido y apagado programables con modo ahorro de energía integrado.' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-24.png', title: 'Rejilla Reversible', desc: 'Rejilla reversible para facilitar el manejo de tazas de diferentes tamaños.' },
  { icon: 'https://www.xlvi.it/wp-content/uploads/2025/07/ICONE-13.png', title: 'Personalizable', desc: 'Personalizable en colores, materiales y accesorios para cada espacio.' },
]

/* ─── HERO ──────────────────────────────────────────────── */
function Hero() {
  const [activeImg, setActiveImg] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Auto-rotate images
  useEffect(() => {
    if (!isAutoPlaying) return
    const t = setInterval(() => {
      setActiveImg(i => (i + 1) % MACHINE_IMAGES.length)
    }, 3200)
    return () => clearInterval(t)
  }, [isAutoPlaying])

  return (
    <section ref={ref} style={{
      position: 'relative', minHeight: '100svh', overflow: 'hidden',
      background: COLORS.dark, display: 'flex', alignItems: 'center',
    }}>
      {/* Background parallax */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <div style={{
          width: '100%', height: '140%',
          background: `radial-gradient(ellipse at 70% 50%, #1a1200 0%, ${COLORS.dark} 60%)`,
        }} />
      </motion.div>

      {/* Grid lines decoration */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ delay: i * 0.15 }}
          style={{ position: 'absolute', top: 0, left: `${i * 14}%`,
            width: '1px', height: '100%', background: COLORS.gold, zIndex: 1 }}
        />
      ))}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.04 }}
          transition={{ delay: i * 0.1 }}
          style={{ position: 'absolute', left: 0, top: `${i * 25}%`,
            height: '1px', width: '100%', background: COLORS.gold, zIndex: 1 }}
        />
      ))}

      {/* MAIN LAYOUT: left text + right machine */}
      <motion.div
        style={{ opacity, position: 'relative', zIndex: 2,
          width: '100%', maxWidth: '1440px', margin: '0 auto',
          padding: 'clamp(120px,14vw,160px) clamp(24px,5%,80px) clamp(80px,10vw,100px)',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px,5vw,80px)', alignItems: 'center' }}
        className="hero-main-grid"
      >
        {/* ── LEFT: text + price ── */}
        <div>
          {/* XLVI logo */}
          <motion.img
            src="https://www.xlvi.it/wp-content/uploads/2025/09/XLVI-Nero-4.png"
            alt="XLVI"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ height: 'clamp(32px,4.5vw,48px)', width: 'auto',
              marginBottom: '28px', display: 'block',
              filter: 'brightness(0) invert(1)' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontSize: '10px', letterSpacing: '5px', color: COLORS.gold,
              fontFamily: SANS, fontWeight: 600, textTransform: 'uppercase',
              marginBottom: '16px' }}
          >
            Monte Cerignone · Italia · Hecho a mano
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
              fontSize: 'clamp(2.8rem,6vw,5.5rem)', color: COLORS.snow,
              lineHeight: 0.9, marginBottom: '20px' }}
          >
            Steamhammer<br />
            <span style={{ color: COLORS.gold }}>Elettronica</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ width: '70px', height: '2px', background: COLORS.gold,
              marginBottom: '24px', transformOrigin: 'left' }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ fontSize: 'clamp(13px,1.4vw,15px)', color: `${COLORS.snow}B0`,
              lineHeight: 1.9, marginBottom: '36px', fontFamily: SANS,
              maxWidth: '440px', letterSpacing: '0.3px' }}
          >
            Máquina de espresso profesional artesanal italiana. Preset de agua, uso intensivo, disponible en 1, 2 o 3 grupos. Acero, cobre, latón y madera.
          </motion.p>

          {/* PRICE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{ background: `${COLORS.gold}12`,
              border: `1px solid ${COLORS.gold}50`,
              padding: 'clamp(16px,3vw,24px) clamp(20px,4vw,32px)',
              marginBottom: '36px', display: 'inline-block' }}
          >
            <div style={{ fontSize: '10px', letterSpacing: '3px', color: `${COLORS.snow}80`,
              fontFamily: MONO, marginBottom: '6px', textTransform: 'uppercase' }}>
              Precio de referencia
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontFamily: SERIF, fontStyle: 'italic',
                fontSize: 'clamp(2rem,4.5vw,3.2rem)', color: COLORS.gold,
                fontWeight: 300, lineHeight: 1 }}>
                $30,000
              </span>
              <span style={{ fontSize: '14px', color: `${COLORS.snow}90`,
                fontFamily: SANS, letterSpacing: '2px', fontWeight: 600 }}>
                USD
              </span>
            </div>
            <div style={{ fontSize: '10px', color: `${COLORS.snow}60`,
              fontFamily: SANS, marginTop: '6px', letterSpacing: '1px' }}>
              Consultar disponibilidad y configuración
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <motion.a
              href="https://wa.me/59178594506?text=Hola!%20Me%20interesa%20la%20m%C3%A1quina%20XLVI%20Steamhammer%20E"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: `0 10px 30px ${COLORS.green}50` }}
              whileTap={{ scale: 0.96 }}
              style={{ background: COLORS.green, border: 'none', color: COLORS.snow,
                padding: 'clamp(13px,2vw,17px) clamp(24px,4vw,40px)',
                fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: SANS, fontWeight: 700, textDecoration: 'none',
                display: 'inline-block', transition: 'all 0.3s ease', cursor: 'pointer' }}
            >
              📱 Consultar
            </motion.a>
            <motion.button
              onClick={() => document.getElementById('xlvi-machine')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ borderColor: COLORS.gold, color: COLORS.gold }}
              whileTap={{ scale: 0.96 }}
              style={{ background: 'transparent', border: `1px solid ${COLORS.snow}40`,
                color: `${COLORS.snow}CC`, padding: 'clamp(13px,2vw,17px) clamp(24px,4vw,40px)',
                fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: SANS, fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease' }}
            >
              Ver más →
            </motion.button>
          </motion.div>
        </div>

        {/* ── RIGHT: machine image viewer ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          {/* Main image */}
          <div style={{ position: 'relative', width: '100%',
            maxWidth: '520px', margin: '0 auto' }}>
            {/* Glow */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', inset: '10%',
                background: `radial-gradient(circle, ${COLORS.gold}30 0%, transparent 70%)`,
                borderRadius: '50%', zIndex: 0, filter: 'blur(20px)', pointerEvents: 'none' }}
            />

            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={MACHINE_IMAGES[activeImg].src}
                alt={MACHINE_IMAGES[activeImg].label}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.04, y: -10 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                style={{ width: '100%', height: 'auto',
                  objectFit: 'contain', maxHeight: 'clamp(340px, 48vh, 560px)',
                  filter: `drop-shadow(0 24px 60px ${COLORS.gold}25)`,
                  position: 'relative', zIndex: 1, display: 'block' }}
              />
            </AnimatePresence>

            {/* Angle indicator */}
            <motion.div
              key={activeImg + '-label'}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ position: 'absolute', top: '12px', right: '12px',
                background: `${COLORS.dark}CC`, border: `1px solid ${COLORS.gold}40`,
                padding: '5px 10px', backdropFilter: 'blur(8px)' }}
            >
              <div style={{ fontSize: '9px', letterSpacing: '2px',
                color: COLORS.gold, fontFamily: MONO, fontWeight: 600 }}>
                {MACHINE_IMAGES[activeImg].angle} · {MACHINE_IMAGES[activeImg].label.toUpperCase()}
              </div>
            </motion.div>
          </div>

          {/* Thumbnails */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {MACHINE_IMAGES.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => { setActiveImg(i); setIsAutoPlaying(false) }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                style={{ background: activeImg === i ? `${COLORS.gold}20` : `${COLORS.gold}06`,
                  border: `1px solid ${activeImg === i ? COLORS.gold : `${COLORS.gold}25`}`,
                  padding: '10px 8px', cursor: 'pointer', width: 'clamp(60px,8vw,90px)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '5px', transition: 'all 0.3s ease' }}
              >
                <img src={img.src} alt={img.label}
                  style={{ height: 'clamp(40px,6vw,56px)', width: 'auto', objectFit: 'contain',
                    filter: `brightness(${activeImg === i ? 1 : 0.5})`,
                    transition: 'filter 0.3s ease' }} />
                <div style={{ fontSize: '7px', letterSpacing: '1px',
                  color: activeImg === i ? COLORS.gold : `${COLORS.snow}50`,
                  fontFamily: SANS, fontWeight: 600, textTransform: 'uppercase',
                  lineHeight: 1, textAlign: 'center' }}>
                  {img.label}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Auto-play progress bar */}
          {isAutoPlaying && (
            <motion.div style={{ width: '100%', maxWidth: '320px',
              height: '1px', background: `${COLORS.gold}20`, position: 'relative' }}>
              <motion.div
                key={activeImg}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.2, ease: 'linear' }}
                style={{ height: '100%', background: COLORS.gold, position: 'absolute', top: 0, left: 0 }}
              />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '24px', left: '50%',
          transform: 'translateX(-50%)', zIndex: 3,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}
      >
        <div style={{ fontSize: '7px', letterSpacing: '3px', color: `${COLORS.snow}50`, fontFamily: SANS }}>SCROLL</div>
        <div style={{ width: '1px', height: '36px', background: `linear-gradient(${COLORS.gold}, transparent)` }} />
      </motion.div>
    </section>
  )
}

/* ─── BRAND STORY ───────────────────────────────────────── */
function BrandStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08])

  return (
    <section id="xlvi-brand" ref={ref} style={{
      background: COLORS.gunmetal,
      padding: 'clamp(90px,13vw,150px) clamp(20px,6%,80px)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(50px,9vw,120px)', alignItems: 'center' }}
        className="story-grid"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative' }}
        >
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <motion.img
              style={{ scale: imgScale }}
              src="https://www.xlvi.it/wp-content/uploads/2025/09/Montecerignone.jpg"
              alt="Monte Cerignone – XLVI"
              style={{ width: '100%', height: 'clamp(320px, 48vw, 560px)',
                objectFit: 'cover', display: 'block',
                filter: 'brightness(0.75) contrast(1.15) saturate(0.6)' }}
            />
          </div>
          <div style={{ position: 'absolute', top: '-10px', left: '-10px',
            right: '10px', bottom: '10px',
            border: `2px solid ${COLORS.gold}`, zIndex: -1, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
            background: `linear-gradient(transparent, ${COLORS.dark}DD)`,
            padding: '40px 20px 16px' }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px',
              color: COLORS.gold, fontFamily: MONO, fontWeight: 600 }}>
              43°50′28″N 12°24′46″E · MONTE CERIGNONE
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div style={{ fontSize: '10px', letterSpacing: '5px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
            NUESTRA HISTORIA
          </div>

          <h2 style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
            marginBottom: '24px', lineHeight: 1.05 }}>
            Trabajadores del vapor,<br />
            <span style={{ color: COLORS.gold }}>artesanos del acero</span>
          </h2>

          <div style={{ width: '60px', height: '2px', background: COLORS.gold, marginBottom: '28px' }} />

          {[
            'En Monte Cerignone, materiales nobles como acero, cobre, latón y madera se transforman en máquinas de espresso profesionales reconocibles en todo el mundo.',
            'XLVI es el equilibrio entre la artesanía del siglo XX y la inclinación tecnológica del futuro. Herramientas fiables, compañeras de trabajo y de vida.',
          ].map((text, i) => (
            <p key={i} style={{ fontSize: 'clamp(14px,1.5vw,15px)', lineHeight: 1.9,
              color: `${COLORS.snow}BB`, fontFamily: SANS,
              letterSpacing: '0.3px', marginBottom: '20px' }}>
              {text}
            </p>
          ))}

          <blockquote style={{ borderLeft: `3px solid ${COLORS.gold}`, paddingLeft: '20px', marginTop: '32px' }}>
            <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', fontFamily: SERIF,
              fontStyle: 'italic', color: COLORS.gold, lineHeight: 1.6, margin: 0 }}>
              "WE ARE STEAM WORKERS."
            </p>
            <div style={{ fontSize: '10px', letterSpacing: '3px',
              color: `${COLORS.snow}70`, fontFamily: MONO, fontWeight: 600, marginTop: '10px' }}>
              — XLVI · MONTE CERIGNONE
            </div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── MACHINE DETAIL ────────────────────────────────────── */
function MachineDetail() {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <section id="xlvi-machine" style={{
      background: COLORS.dark,
      padding: 'clamp(90px,13vw,150px) clamp(20px,6%,80px)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(50px,8vw,80px)' }}
        >
          <div style={{ fontSize: '10px', letterSpacing: '5px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
            XLVI · STEAMHAMMER ELETTRONICA
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem,6vw,4.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
            marginBottom: '16px', lineHeight: 1 }}>
            Steamhammer E
          </h2>
          <div style={{ width: '60px', height: '2px', background: COLORS.gold, marginBottom: '20px' }} />
          <p style={{ fontSize: 'clamp(14px,1.5vw,16px)', color: `${COLORS.snow}99`,
            lineHeight: 1.9, fontFamily: SANS, maxWidth: '600px' }}>
            Permite preajustar la cantidad exacta de agua para cada extracción. Fiabilidad garantizada para uso intensivo.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(30px,5vw,60px)', alignItems: 'start' }}
          className="machine-grid"
        >
          <div>
            <motion.div
              key={activeImg}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ background: `${COLORS.gold}08`, border: `1px solid ${COLORS.gold}30`,
                padding: 'clamp(30px,5vw,60px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px', minHeight: 'clamp(280px, 40vw, 500px)',
                position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', width: '60%', height: '60%',
                background: `radial-gradient(circle, ${COLORS.gold}12, transparent)`,
                borderRadius: '50%' }} />
              <img src={MACHINE_IMAGES[activeImg].src} alt={MACHINE_IMAGES[activeImg].label}
                style={{ maxHeight: 'clamp(240px, 36vw, 440px)', width: 'auto',
                  objectFit: 'contain', position: 'relative', zIndex: 1,
                  filter: `drop-shadow(0 20px 40px ${COLORS.gold}20)` }} />
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {MACHINE_IMAGES.map((img, i) => (
                <motion.button key={i} onClick={() => setActiveImg(i)}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ background: `${COLORS.gold}${activeImg === i ? '20' : '08'}`,
                    border: `1px solid ${activeImg === i ? COLORS.gold : `${COLORS.gold}30`}`,
                    padding: '12px 8px', cursor: 'pointer', transition: 'all 0.3s ease',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: '6px' }}
                >
                  <img src={img.src} alt={img.label}
                    style={{ height: '50px', width: 'auto', objectFit: 'contain',
                      filter: `brightness(${activeImg === i ? 1 : 0.6})`,
                      transition: 'filter 0.3s ease' }} />
                  <div style={{ fontSize: '7px', letterSpacing: '1px',
                    color: activeImg === i ? COLORS.gold : `${COLORS.snow}60`,
                    fontFamily: SANS, fontWeight: 600, textTransform: 'uppercase' }}>
                    {img.label}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              ['Grupos', '1 · 2 · 3 grupos'],
              ['Sistema térmico', 'PID automático'],
              ['Pre-infusión', 'Mecánica + Electrónica'],
              ['Vapor', 'XLVI Steaming · 3 boquillas'],
              ['Origen', 'Monte Cerignone, Italia'],
              ['Personalización', 'Colores, materiales, accesorios'],
            ].map(([label, value], i) => (
              <motion.div key={label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', padding: '16px 0',
                  borderBottom: `1px solid ${COLORS.gold}20` }}
              >
                <span style={{ fontSize: '10px', letterSpacing: '2px',
                  color: `${COLORS.snow}70`, fontFamily: SANS,
                  fontWeight: 600, textTransform: 'uppercase' }}>
                  {label}
                </span>
                <span style={{ fontSize: '13px', color: COLORS.snow,
                  fontFamily: SANS, letterSpacing: '0.5px', textAlign: 'right' }}>
                  {value}
                </span>
              </motion.div>
            ))}

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ background: `${COLORS.gold}12`, border: `1px solid ${COLORS.gold}50`,
                padding: '20px 24px', margin: '24px 0' }}
            >
              <div style={{ fontSize: '9px', letterSpacing: '3px', color: `${COLORS.snow}70`,
                fontFamily: MONO, marginBottom: '6px' }}>PRECIO DE REFERENCIA</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontFamily: SERIF, fontStyle: 'italic',
                  fontSize: 'clamp(2rem,4vw,3rem)', color: COLORS.gold, fontWeight: 300, lineHeight: 1 }}>
                  $30,000
                </span>
                <span style={{ fontSize: '14px', color: `${COLORS.snow}90`,
                  fontFamily: SANS, letterSpacing: '2px', fontWeight: 600 }}>
                  USD
                </span>
              </div>
              <div style={{ fontSize: '10px', color: `${COLORS.snow}50`,
                fontFamily: SANS, marginTop: '6px' }}>
                Consultar disponibilidad y configuración
              </div>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <motion.a
                href="https://wa.me/59178594506?text=Hola!%20Me%20interesa%20la%20m%C3%A1quina%20XLVI%20Steamhammer%20E"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: `0 10px 30px ${COLORS.green}50` }}
                whileTap={{ scale: 0.96 }}
                style={{ display: 'block', background: COLORS.green, color: COLORS.snow,
                  padding: '16px 28px', textAlign: 'center',
                  fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
                  fontFamily: SANS, fontWeight: 700, textDecoration: 'none',
                  transition: 'all 0.3s ease' }}
              >
                📱 Consultar por WhatsApp
              </motion.a>
              <motion.a
                href="https://www.xlvi.it/en/prodotti-xlvi/steamhammer-e/"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03, borderColor: COLORS.gold, color: COLORS.gold }}
                whileTap={{ scale: 0.96 }}
                style={{ display: 'block', background: 'transparent',
                  border: `1px solid ${COLORS.gold}50`, color: `${COLORS.snow}CC`,
                  padding: '14px 28px', textAlign: 'center',
                  fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
                  fontFamily: SANS, fontWeight: 500, textDecoration: 'none',
                  transition: 'all 0.3s ease' }}
              >
                Ver en xlvi.it →
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FEATURES ──────────────────────────────────────────── */
function FeaturesGrid() {
  return (
    <section style={{ background: COLORS.gunmetal,
      padding: 'clamp(90px,13vw,150px) clamp(20px,6%,80px)' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(50px,8vw,80px)' }}
        >
          <div style={{ fontSize: '10px', letterSpacing: '5px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
            TECNOLOGÍA Y RENDIMIENTO
          </div>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.8rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
            marginBottom: '16px', lineHeight: 1 }}>
            Ingeniería italiana<br />
            <span style={{ color: COLORS.gold }}>en cada detalle</span>
          </h2>
          <div style={{ width: '60px', height: '2px', background: COLORS.gold }} />
        </motion.div>

        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: 'clamp(16px,3vw,24px)' }}>
          {FEATURES.map((feat, i) => (
            <motion.div key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -8, borderColor: `${COLORS.gold}60` }}
              style={{ padding: 'clamp(28px,4vw,36px)',
                border: `1px solid ${COLORS.gold}20`,
                background: `${COLORS.gold}05`,
                transition: 'all 0.4s ease' }}
            >
              <img src={feat.icon} alt={feat.title}
                style={{ height: '34px', width: 'auto', objectFit: 'contain',
                  marginBottom: '16px',
                  filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg)' }} />
              <h3 style={{ fontSize: 'clamp(0.95rem,2vw,1.15rem)', fontFamily: SERIF,
                fontStyle: 'italic', color: COLORS.gold,
                marginBottom: '10px', letterSpacing: '0.5px' }}>
                {feat.title}
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.8,
                color: `${COLORS.snow}AA`, fontFamily: SANS,
                letterSpacing: '0.3px', margin: 0 }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CRAFTSMANSHIP ─────────────────────────────────────── */
function Craftsmanship() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} style={{ position: 'relative',
      minHeight: 'clamp(380px, 55vh, 600px)', overflow: 'hidden',
      display: 'flex', alignItems: 'center' }}>
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-12%', zIndex: 0 }}>
        <img
          src="https://www.xlvi.it/wp-content/uploads/2025/07/XLVI_Steamhammer_Elettronica_2gr_trequarti_accesa.png"
          alt="XLVI Steamhammer E"
          style={{ width: '100%', height: '124%', objectFit: 'contain',
            filter: 'brightness(0.08) contrast(1.2)', transform: 'scale(1.4)' }}
        />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to right, ${COLORS.dark}F2 0%, ${COLORS.dark}C0 55%, ${COLORS.dark}90 100%)` }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: 'relative', zIndex: 2,
          padding: 'clamp(50px,8vw,90px) clamp(28px,8%,100px)',
          maxWidth: 'min(680px, 90vw)' }}
      >
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
          fontFamily: SANS, fontWeight: 600, marginBottom: '18px' }}>
          PERSONALIZACIÓN SIN LÍMITES
        </div>
        <h2 style={{ fontSize: 'clamp(2rem,5.5vw,4rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          lineHeight: 1.05, marginBottom: '24px' }}>
          Cada máquina,<br />
          <span style={{ color: COLORS.gold }}>una obra única</span>
        </h2>
        <div style={{ width: '60px', height: '2px', background: COLORS.gold, marginBottom: '22px' }} />
        <p style={{ fontSize: 'clamp(14px,1.5vw,15px)', color: `${COLORS.snow}CC`,
          lineHeight: 1.9, fontFamily: SANS }}>
          La Steamhammer E es completamente personalizable en colores, materiales y accesorios. Acero inoxidable, cobre, latón, madera — cada detalle forjado para reflejar la identidad de tu espacio.
        </p>
      </motion.div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────── */
function CTA() {
  const navigate = useNavigate()
  return (
    <section style={{ background: COLORS.gold, textAlign: 'center',
      padding: 'clamp(80px,12vw,130px) clamp(20px,6%,80px)' }}>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 style={{ fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.black, marginBottom: '12px' }}>
          Disponible en Bolivia
        </h2>
        <div style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontFamily: SERIF,
          fontStyle: 'italic', color: COLORS.black, marginBottom: '16px', opacity: 0.8 }}>
          $30,000 USD
        </div>
        <p style={{ fontSize: '14px', color: `${COLORS.black}BB`, lineHeight: 1.9,
          marginBottom: '36px', fontFamily: SANS, maxWidth: '480px', margin: '0 auto 36px' }}>
          Importada exclusivamente por Bottega Italiana · Santa Cruz de la Sierra
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.a
            href="https://wa.me/59178594506?text=Hola!%20Me%20interesa%20la%20m%C3%A1quina%20XLVI%20Steamhammer%20E"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ background: COLORS.black, color: COLORS.snow,
              padding: 'clamp(14px,2vw,18px) clamp(32px,5vw,52px)',
              fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 700, textDecoration: 'none',
              display: 'inline-block', transition: 'all 0.3s ease' }}
          >
            📱 Consultar por WhatsApp
          </motion.a>
          <motion.button
            onClick={() => navigate('/catalogo')}
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ background: 'transparent', border: `2px solid ${COLORS.black}`,
              color: COLORS.black, padding: 'clamp(14px,2vw,18px) clamp(32px,5vw,52px)',
              fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Ver Catálogo Completo
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default function XLVIPage() {
  return (
    <>
      <style>{`
        .hero-main-grid { grid-template-columns: 1fr 1fr; }
        .machine-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .hero-main-grid { grid-template-columns: 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .machine-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
      <Hero />
      <BrandStory />
      <MachineDetail />
      <FeaturesGrid />
      <Craftsmanship />
      <CTA />
      <Footer />
    </>
  )
}