import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Footer from '../components/Footer'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  snow: '#FFFCFE',
  inferno: '#AB0502',
  green: '#0C7A2A',
  black: '#010001',
  gold: '#E2BB00',
  amber: '#C8860A',
}

// LOCAL images only for products
const BEERS = [
  {
    id: 'despina',
    name: 'Despina',
    style: 'Special Weiss',
    abv: '4.7%', ibu: '15',
    image: '/images/kottabos/despina-bottle.png',
    color: '#D4A020',
    notes: 'Fruta tropical · Manzana verde · Crust de pan',
    desc: 'Cerveza de trigo refrescante con notas cítricas y especiadas. Suave, con un regusto frutal agradable.',
    pairing: 'Pescado crudo · Quesos frescos · Pizza',
  },
  {
    id: 'ipazia',
    name: 'Ipazia',
    style: 'American IPA',
    abv: '6%', ibu: '60',
    image: '/images/kottabos/Ipazia-bottle.png',
    color: '#B06820',
    notes: 'Pomelo · Mango · Lúpulo tropical',
    desc: 'Suave en boca, muy agradable y limpia. Al principio casi dulce, la amargura llega al final frutal y cítrica.',
    pairing: 'Carnes especiadas · Hamburguesas · Cheddar intenso',
  },
  {
    id: 'zora',
    name: 'Zora',
    style: 'Winter Ale',
    abv: '5.5%', ibu: '28',
    image: '/images/kottabos/zora-bottle.png',
    color: '#7A4A20',
    notes: 'Malta dulce · Miel de abeja negra siciliana · Especias',
    desc: 'Birra di meditazione. La dulzura de la malta, acentuada con miel de abeja negra siciliana. Especias invernales típicas.',
    pairing: 'Carnes asadas · Estofados · Postres especiados',
  },
  {
    id: 'zaira',
    name: 'Zaira',
    style: 'British Golden Ale',
    abv: '5%', ibu: '22',
    image: '/images/kottabos/zaira-bottle.png',
    color: '#B89010',
    notes: 'Bouquet floral · Notas herbáceas · Lúpulo elegante',
    desc: 'Golden Ale de carácter. Lo que la distingue es su bouquet de aromas florales que emana del vaso.',
    pairing: 'Pollo asado · Pescado frito · Quesos semi-curados',
  },
]

/* ─── HERO ──────────────────────────────────────────────── */
function Hero() {
  const navigate = useNavigate()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} style={{
      position: 'relative', minHeight: '100svh', overflow: 'hidden',
      background: COLORS.black, display: 'flex', alignItems: 'flex-end',
    }}>
      {/* Parallax background - real Kottabos brewery image */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <img
          src="https://www.giornaledellabirra.it/wp-content/uploads/2018/10/kottabos-3.jpg"
          alt="Birrificio Kottabos"
          style={{
            width: '100%', height: '140%', objectFit: 'cover',
            filter: 'brightness(0.3) contrast(1.2) saturate(0.7)',
          }}
        />
      </motion.div>

      {/* Gradient */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(100deg, ${COLORS.black}F0 0%, ${COLORS.black}80 50%, transparent 100%)`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to top, ${COLORS.black} 0%, transparent 55%)`,
      }} />

      

      {/* FIX 2: increased bottom padding so buttons aren't clipped on scroll */}
      <motion.div
        style={{ y: textY, opacity, position: 'relative', zIndex: 3,
          padding: 'clamp(100px,14vw,160px) clamp(24px,7%,100px) clamp(120px,14vw,160px)',
          maxWidth: 'min(680px, 90vw)',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '11px', letterSpacing: '5px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, textTransform: 'uppercase', marginBottom: '20px' }}
        >
          Rocca di Capri Leone · Sicilia · 2015
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(3rem,8.5vw,7rem)', color: COLORS.snow,
            lineHeight: 0.92, marginBottom: '28px', letterSpacing: '-0.5px' }}
        >
          Una birra<br />
          <span style={{ color: COLORS.gold }}>nata da</span><br />
          un gioco.
        </motion.h1>

        {/* Italian flag */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: '4px', marginBottom: '24px', transformOrigin: 'left' }}
        >
          {[COLORS.green, COLORS.snow, COLORS.inferno].map((c, i) => (
            <div key={i} style={{ width: '36px', height: '3px', background: c }} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{ fontSize: 'clamp(0.9rem,1.5vw,1rem)', color: `${COLORS.snow}B0`,
            lineHeight: 1.9, marginBottom: '44px', fontFamily: SANS, maxWidth: '440px' }}
        >
          Cervecería artesanal siciliana fundada por tres mujeres apasionadas. No filtrada, no pasteurizada. Auténtica Sicilia en cada botella de vidrio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => navigate('/catalogo?cat=cerveza')}
            whileHover={{ scale: 1.04, boxShadow: `0 10px 30px ${COLORS.gold}40` }}
            whileTap={{ scale: 0.96 }}
            style={{ background: COLORS.gold, border: 'none', color: COLORS.black,
              padding: 'clamp(13px,2vw,17px) clamp(28px,4vw,44px)',
              fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Ver Cervezas
          </motion.button>
          <motion.button
            onClick={() => document.getElementById('kottabos-historia')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ borderColor: COLORS.gold, color: COLORS.gold }}
            whileTap={{ scale: 0.96 }}
            style={{ background: 'transparent', border: `1px solid ${COLORS.snow}50`,
              color: `${COLORS.snow}CC`, padding: 'clamp(13px,2vw,17px) clamp(28px,4vw,44px)',
              fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease' }}
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
        <div style={{ width: '1px', height: '40px',
          background: `linear-gradient(${COLORS.gold}, transparent)` }} />
      </motion.div>
    </section>
  )
}

/* ─── GOLD STRIP ────────────────────────────────────────── */
function GoldStrip() {
  return (
    <div style={{ background: COLORS.gold, overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
        padding: '0 clamp(16px,4%,60px)' }}>
        {[
          ['2015', 'Fundación'],
          ['3', 'Fundadoras'],
          ['100%', 'Artesanal'],
          ['330ml', 'Botella vidrio'],
        ].map(([num, label], i, arr) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{ textAlign: 'center',
              padding: 'clamp(14px,3vw,22px) clamp(20px,4vw,48px)',
              borderRight: i < arr.length - 1 ? `1px solid ${COLORS.black}25` : 'none',
              flex: '1 1 auto', minWidth: '100px' }}
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

/* ─── STORY ─────────────────────────────────────────────── */
function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08])

  return (
    <section id="kottabos-historia" ref={ref} style={{
      background: COLORS.black,
      padding: 'clamp(80px,12vw,140px) clamp(20px,6%,80px)',
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px,8vw,100px)', alignItems: 'center' }}
        className="story-grid"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative' }}
        >
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <motion.img
              style={{ scale: imgScale }}
              src="https://www.giornaledellabirra.it/wp-content/uploads/2018/10/kottabos-3.jpg"
              alt="Birrificio Kottabos - Rocca di Capri Leone"
              onError={(e) => {
                e.target.src = '/images/kottabos/kottabos-logo.jpg'
                e.target.style.objectFit = 'contain'
                e.target.style.background = '#111'
                e.target.style.padding = '40px'
              }}
              style={{ width: '100%', height: 'clamp(320px, 48vw, 580px)',
                objectFit: 'cover', display: 'block',
                filter: 'brightness(0.85) contrast(1.05)' }}
            />
          </div>
          {/* Gold frame accent */}
          <div style={{ position: 'absolute', top: '-10px', left: '-10px',
            right: '10px', bottom: '10px',
            border: `2px solid ${COLORS.gold}`, zIndex: -1, pointerEvents: 'none' }} />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: `linear-gradient(transparent, ${COLORS.black}DD)`,
            padding: '50px 20px 16px',
          }}>
            <div style={{ fontSize: '10px', letterSpacing: '2px',
              color: COLORS.gold, fontFamily: SANS, fontWeight: 600 }}>
              BIRRIFICIO KOTTABOS · ROCCA DI CAPRI LEONE, SICILIA
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
            fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
            NUESTRA HISTORIA
          </div>

          <h2 style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
            marginBottom: '24px', lineHeight: 1.1 }}>
            Tres mujeres,<br />
            <span style={{ color: COLORS.gold }}>una pasión</span>
          </h2>

          <div style={{ width: '60px', height: '2px', background: COLORS.gold, marginBottom: '28px' }} />

          <p style={{ fontSize: 'clamp(14px,1.5vw,15px)', lineHeight: 1.9,
            color: `${COLORS.snow}BB`, fontFamily: SANS, marginBottom: '20px' }}>
            Kottabos nació en 2015 gracias a la pasión de tres mujeres que elaboraban cerveza en casa y decidieron que era el momento de dar el salto. En el corazón de los Montes Nebrodi, abrieron el Birrificio con brew-pub adjunto.
          </p>

          <p style={{ fontSize: 'clamp(14px,1.5vw,15px)', lineHeight: 1.9,
            color: `${COLORS.snow}BB`, fontFamily: SANS, marginBottom: '28px' }}>
            Sus cervezas son <strong style={{ color: COLORS.snow }}>no filtradas, no pasteurizadas</strong>, refermentadas en barril y botella. Elaboradas exclusivamente con agua, malta, lúpulo y levadura. Autenticidad absoluta.
          </p>

          <p style={{ fontSize: 'clamp(14px,1.5vw,15px)', lineHeight: 1.9,
            color: `${COLORS.snow}BB`, fontFamily: SANS, marginBottom: '32px' }}>
            Sus nombres vienen de las <em style={{ color: COLORS.snow }}>"Ciudades Invisibles"</em> de Italo Calvino, leído en aquellas tardes de verano sicilianas que inspiraron todo el proyecto.
          </p>

          <blockquote style={{ borderLeft: `3px solid ${COLORS.gold}`,
            paddingLeft: '20px', margin: 0 }}>
            <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', fontFamily: SERIF,
              fontStyle: 'italic', color: COLORS.gold, lineHeight: 1.6, margin: 0 }}>
              "Un piccolo birrificio, un grande cuore."
            </p>
            <div style={{ fontSize: '10px', letterSpacing: '2px', color: `${COLORS.snow}70`,
              fontFamily: SANS, fontWeight: 600, marginTop: '10px' }}>
              — BIRRIFICIO KOTTABOS
            </div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── BEERS SHOWCASE ────────────────────────────────────── */
function BeerShowcase({ beer, index }) {
  const navigate = useNavigate()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const yCard = useTransform(scrollYProgress, [0, 1], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -15])
  const isEven = index % 2 === 0

  return (
    <motion.div ref={ref} style={{ opacity, y: yCard }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        minHeight: 'clamp(420px, 60vh, 620px)',
        borderTop: `1px solid ${beer.color}30`,
      }} className="beer-showcase-row">
        {/* Image side */}
        <div style={{
          order: isEven ? 0 : 1,
          background: `radial-gradient(ellipse at center, ${beer.color}18 0%, ${COLORS.black} 70%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'clamp(32px,5vw,70px)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: '55%', height: '55%', borderRadius: '50%',
            background: `radial-gradient(circle, ${beer.color}25, transparent)`,
            bottom: '10%',
          }} />
          <motion.img
            style={{ y: imgY }}
            src={beer.image}
            alt={beer.name}
            style={{
              height: 'clamp(220px, 38vh, 440px)', width: 'auto',
              objectFit: 'contain', position: 'relative', zIndex: 1,
              filter: `drop-shadow(0 24px 50px ${beer.color}40)`,
            }}
          />
        </div>

        {/* Info side */}
        <div style={{
          order: isEven ? 1 : 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(32px,5vw,70px)',
          borderLeft: isEven ? `1px solid ${beer.color}20` : 'none',
          borderRight: !isEven ? `1px solid ${beer.color}20` : 'none',
        }}>
          <div style={{ fontSize: '10px', letterSpacing: '3px', color: beer.color,
            fontFamily: SANS, fontWeight: 600, marginBottom: '12px' }}>
            {beer.style}
          </div>

          <h2 style={{ fontSize: 'clamp(2.4rem,5.5vw,4.5rem)', fontFamily: SERIF,
            fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
            lineHeight: 0.95, marginBottom: '20px' }}>
            {beer.name}
          </h2>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {[`ABV ${beer.abv}`, `IBU ${beer.ibu}`, '330ml · Vidrio'].map(tag => (
              <span key={tag} style={{
                padding: '4px 10px', border: `1px solid ${beer.color}50`,
                fontSize: '9px', letterSpacing: '1.5px', color: beer.color,
                fontFamily: SANS, fontWeight: 500,
              }}>
                {tag}
              </span>
            ))}
          </div>

          <p style={{ fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.85,
            color: `${COLORS.snow}AA`, fontFamily: SANS, marginBottom: '20px' }}>
            {beer.desc}
          </p>

          <div style={{ padding: '16px 0', borderTop: `1px solid ${beer.color}20`,
            borderBottom: `1px solid ${beer.color}20`, marginBottom: '20px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: beer.color,
              fontFamily: SANS, fontWeight: 600, marginBottom: '8px' }}>NOTAS</div>
            <div style={{ fontSize: '13px', color: `${COLORS.snow}CC`, fontFamily: SANS }}>
              {beer.notes}
            </div>
          </div>

          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '9px', letterSpacing: '2px', color: beer.color,
              fontFamily: SANS, fontWeight: 600, marginBottom: '8px' }}>MARIDAJE</div>
            <div style={{ fontSize: '13px', color: `${COLORS.snow}CC`, fontFamily: SANS }}>
              {beer.pairing}
            </div>
          </div>

          <motion.button
            whileHover={{ background: COLORS.gold, color: COLORS.black, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate(`/producto/kottabos-${beer.id}`)}
            style={{ alignSelf: 'flex-start', background: 'transparent',
              border: `1px solid ${beer.color}`,
              color: beer.color, padding: '12px 28px',
              fontSize: '10px', letterSpacing: '2px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Ver Detalles →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

function AllBeers() {
  return (
    <section style={{ background: '#080808' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center',
          padding: 'clamp(70px,10vw,120px) clamp(20px,6%,80px) clamp(40px,6vw,60px)' }}
      >
        <div style={{ fontSize: '10px', letterSpacing: '5px', color: COLORS.gold,
          fontFamily: SANS, fontWeight: 600, marginBottom: '16px' }}>
          SELEZIONE 330ML · SOLO BOTELLA DE VIDRIO
        </div>
        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          marginBottom: '16px', letterSpacing: '1px' }}>
          Cuatro Cervezas, Cuatro Historias
        </h2>
        <div style={{ width: '50px', height: '2px', background: COLORS.gold, margin: '0 auto 20px' }} />
        <p style={{ fontSize: '14px', color: `${COLORS.snow}88`, lineHeight: 1.8,
          fontFamily: SANS, maxWidth: '550px', margin: '0 auto' }}>
          No filtradas · No pasteurizadas · Refermentadas en botella
        </p>
      </motion.div>
      {BEERS.map((beer, i) => (
        <BeerShowcase key={beer.id} beer={beer} index={i} />
      ))}
    </section>
  )
}

/* ─── BOTTLES TOGETHER ──────────────────────────────────── */
function FourBottles() {
  return (
    <section style={{ background: COLORS.black,
      padding: 'clamp(70px,10vw,120px) clamp(20px,5%,60px)' }}>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          textAlign: 'center', marginBottom: 'clamp(40px,8vw,70px)' }}
      >
        La colección completa
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'clamp(12px,2vw,24px)', maxWidth: '1100px', margin: '0 auto' }}
        className="four-bottles-grid"
      >
        {BEERS.map((beer, i) => (
          <motion.div
            key={beer.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -14 }}
            style={{ display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '16px', cursor: 'default',
              transition: 'all 0.4s ease' }}
          >
            <div style={{ position: 'relative', width: '100%',
              height: 'clamp(180px, 28vw, 320px)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', bottom: 0, left: '15%', right: '15%',
                height: '40%', borderRadius: '50%',
                background: `radial-gradient(circle, ${beer.color}35, transparent)`,
                filter: 'blur(20px)' }} />
              <img src={beer.image} alt={beer.name}
                style={{ height: '100%', width: 'auto', objectFit: 'contain',
                  filter: `drop-shadow(0 16px 30px ${beer.color}30)`,
                  position: 'relative', zIndex: 1 }} />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '9px', letterSpacing: '2px', color: beer.color,
                fontFamily: SANS, fontWeight: 600, marginBottom: '4px' }}>
                {beer.style}
              </div>
              <div style={{ fontSize: 'clamp(1.1rem,2.5vw,1.7rem)', fontFamily: SERIF,
                fontStyle: 'italic', color: COLORS.snow, fontWeight: 300 }}>
                {beer.name}
              </div>
              <div style={{ fontSize: '10px', color: `${COLORS.snow}55`,
                fontFamily: SANS, marginTop: '3px' }}>
                {beer.abv} · 330ml
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── FIX 3: SICILIA section with the provided image ────── */
function Nebrodi() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} style={{ position: 'relative',
      minHeight: 'clamp(400px, 60vh, 700px)', overflow: 'hidden',
      display: 'flex', alignItems: 'center' }}>

      {/* Beautiful Sicily wallpaper provided by user */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-15%', zIndex: 0 }}>
        <img
          src="https://wallpapercat.com/w/full/b/9/0/774515-1920x1200-desktop-hd-sicily-background-image.jpg"
          alt="Sicilia, Italia"
          onError={(e) => {
            // fallback to Wikipedia Nebrodi if Brave proxy fails
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Parco_dei_Nebrodi_-_San_Fratello.jpg/1280px-Parco_dei_Nebrodi_-_San_Fratello.jpg'
          }}
          style={{ width: '100%', height: '130%', objectFit: 'cover',
            filter: 'brightness(0.28) saturate(0.8) contrast(1.1)' }}
        />
      </motion.div>

      {/* Gradient: dark on left for text, fades to see landscape on right */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to right, ${COLORS.black}EE 0%, ${COLORS.black}80 50%, ${COLORS.black}40 100%)` }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: 'relative', zIndex: 2,
          padding: 'clamp(60px,10vw,100px) clamp(24px,8%,100px)',
          maxWidth: 'min(650px, 90vw)' }}
      >
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: COLORS.gold,
          fontFamily: SANS, fontWeight: 600, marginBottom: '18px' }}>
          PARCO DEI NEBRODI · SICILIA
        </div>
        <h2 style={{ fontSize: 'clamp(2.2rem,6vw,4.5rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.snow,
          lineHeight: 1.05, marginBottom: '28px' }}>
          Nacida en el corazón<br />
          <span style={{ color: COLORS.gold }}>de Sicilia</span>
        </h2>
        <div style={{ width: '60px', height: '2px', background: COLORS.gold, marginBottom: '24px' }} />
        <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: `${COLORS.snow}CC`,
          lineHeight: 1.9, fontFamily: SANS }}>
          A más de mil metros, frente a la costa norte de Sicilia. En Rocca di Capri Leone damos vida a cervezas que evocan los aromas y sabores intensos de nuestro territorio.
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
      padding: 'clamp(70px,10vw,120px) clamp(20px,6%,80px)' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', fontFamily: SERIF,
          fontStyle: 'italic', fontWeight: 300, color: COLORS.black,
          marginBottom: '16px' }}>
          Disponible en Bolivia
        </h2>
        <p style={{ fontSize: '14px', color: `${COLORS.black}BB`, lineHeight: 1.9,
          marginBottom: '36px', fontFamily: SANS, maxWidth: '480px', margin: '0 auto 36px' }}>
          Importadas exclusivamente por Bottega Italiana · Santa Cruz de la Sierra
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/catalogo?cat=cerveza')}
            style={{ background: COLORS.black, border: 'none', color: COLORS.snow,
              padding: 'clamp(13px,2vw,17px) clamp(28px,4vw,44px)',
              fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease' }}
          >
            Ver Catálogo
          </motion.button>
          <motion.a
            href="https://wa.me/59178594506" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            style={{ background: COLORS.green, border: 'none', color: COLORS.snow,
              padding: 'clamp(13px,2vw,17px) clamp(28px,4vw,44px)',
              fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease',
              textDecoration: 'none', display: 'inline-block' }}
          >
            📱 WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default function KottabosPage() {
  return (
    <>
      <style>{`
        .hero-bottle { display: block; }
        @media (max-width: 900px) {
          .hero-bottle { display: none !important; }
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .beer-showcase-row { grid-template-columns: 1fr !important; }
          .beer-showcase-row > div:first-child { order: 0 !important; min-height: 300px; }
          .beer-showcase-row > div:last-child { order: 1 !important; border-left: none !important; border-right: none !important; }
          .four-bottles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .four-bottles-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
        }
      `}</style>
      <Hero />
      <GoldStrip />
      <Story />
      <AllBeers />
      <FourBottles />
      <Nebrodi />
      <CTA />
      <Footer />
    </>
  )
}