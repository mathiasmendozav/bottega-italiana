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
  gold: '#E2BB00',
}

function FleurDeLis({ size = 24, color = COLORS.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2M7 7C6 7 5 8 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 8 8 7 7 7M17 7C16 7 15 8 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 8 18 7 17 7M12 8C10 8 9 10 9 12C9 13 9 14 8 14C7 14 7 13 7 12C7 11 7 9 8 8C7 8 6 9 6 10C6 12 7 13 8 14C9 15 10 15 11 15L11 20C11 21 11 22 12 22C13 22 13 21 13 20L13 15C14 15 15 15 16 14C17 13 18 12 18 10C18 9 17 8 16 8C17 9 17 11 17 12C17 13 17 14 16 14C15 14 15 13 15 12C15 10 14 8 12 8Z" />
    </svg>
  )
}

/* ── Animated Hero ────────────────────────────────────────*/
function AnimatedHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '85vh',
        background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: 'clamp(140px,18vw,180px) clamp(20px,6%,80px) clamp(80px,10vw,100px)',
      }}
    >
      {/* Diagonal lines decoration */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: i * 0.2 }}
          style={{
            position: 'absolute',
            left: 0,
            top: `${20 + i * 20}%`,
            width: '100%',
            height: '1px',
            background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
            transformOrigin: 'left',
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="hero-content">
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          >
            <FleurDeLis size={40} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(3.5rem,9vw,7rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: COLORS.gold,
              letterSpacing: '3px',
              marginTop: '32px',
              marginBottom: '40px',
              lineHeight: 1,
            }}
          >
            Nuestra Historia
          </motion.h1>

          {/* Italian flag divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '40px',
            }}
          >
            {[COLORS.green, COLORS.snow, COLORS.inferno].map((color, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: '4px' }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                style={{ width: '60px', background: color }}
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              fontFamily: SANS,
              fontSize: 'clamp(1rem,2vw,1.2rem)',
              color: COLORS.snow,
              letterSpacing: '1px',
              lineHeight: 2,
            }}
          >
            Una historia de pasión, tradición y excelencia italiana
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

/* ── Bottega Story ──────────────────────────────────────── */
function BottegaStory() {
  return (
    <section style={{ padding: 'clamp(120px,15vw,180px) clamp(20px,6%,80px)', background: COLORS.snow }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(60px, 10vw, 140px)',
            alignItems: 'center',
          }}
          className="historia-grid"
        >
          {/* Logo Frame */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                width: '100%',
                maxWidth: '550px',
                aspectRatio: '1',
                background: `linear-gradient(135deg, ${COLORS.snow} 0%, #F5F0E8 100%)`,
                border: `4px solid ${COLORS.gold}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src="/images/bottega/logo.png"
                alt="Bottega Italiana"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '24px' }}
            >
              <FleurDeLis size={28} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.2rem,5.5vw,4rem)',
                fontFamily: SERIF,
                fontWeight: 300,
                fontStyle: 'italic',
                color: COLORS.black,
                lineHeight: 1.15,
                marginBottom: '32px',
                letterSpacing: '1px',
              }}
            >
              Trayendo Italia<br />a Bolivia
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                width: '100px',
                height: '3px',
                background: COLORS.gold,
                marginBottom: '32px',
                transformOrigin: 'left',
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: '16px',
                lineHeight: 2,
                color: '#4A4A4A',
                fontWeight: 400,
                marginBottom: '24px',
                fontFamily: SANS,
                letterSpacing: '0.5px',
              }}
            >
              Bottega Italiana nace con la misión de acercar lo mejor de la tradición italiana a Bolivia.
              Importamos productos artesanales premium que representan siglos de maestría siciliana.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '16px',
                lineHeight: 2,
                color: '#4A4A4A',
                fontWeight: 400,
                fontFamily: SANS,
                letterSpacing: '0.5px',
              }}
            >
              Cada producto que ofrecemos ha sido cuidadosamente seleccionado por su calidad excepcional,
              autenticidad y el legado de tradición que representa.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Johanna Section ────────────────────────────────────── */
function JohannaSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={ref} style={{ padding: 'clamp(120px,15vw,180px) clamp(20px,6%,80px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="grid-2 two-col-reverse">
          <div>
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <FleurDeLis size={28} />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.2rem,5.5vw,4rem)',
                fontFamily: SERIF,
                fontWeight: 300,
                fontStyle: 'italic',
                color: COLORS.black,
                lineHeight: 1.2,
                marginTop: '20px',
                marginBottom: '24px',
                letterSpacing: '1px',
              }}
            >
              Johanna Vargas
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '13px',
                letterSpacing: '3px',
                color: COLORS.gold,
                textTransform: 'uppercase',
                marginBottom: '32px',
                fontFamily: SANS,
                fontWeight: 500,
              }}
            >
              Fundadora e Importadora
            </motion.div>

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
                style={{
                  fontSize: '16px',
                  lineHeight: 2,
                  color: '#4A4A4A',
                  fontWeight: 400,
                  marginBottom: '24px',
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02, boxShadow: `0 10px 30px ${COLORS.gold}40` }}
              style={{
                padding: '28px 32px',
                background: `${COLORS.gold}15`,
                border: `2px solid ${COLORS.gold}`,
                marginTop: '32px',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '2px',
                  color: COLORS.gold,
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  fontFamily: SANS,
                  fontWeight: 600,
                }}
              >
                ✦ Importadora Oficial
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#4A4A4A',
                  lineHeight: 1.8,
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                }}
              >
                Productos italianos premium en Santa Cruz de la Sierra
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <motion.div
              style={{ scale: imageScale }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{
                position: 'relative',
                height: 'clamp(500px,58vw,700px)',
                overflow: 'hidden',
                border: `4px solid ${COLORS.gold}`,
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
            >
              <img
                src="/images/bottega/johannavargas.jpg"
                alt="Johanna Vargas"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Values Section ─────────────────────────────────────── */
function ValuesSection() {
  const navigate = useNavigate()

  return (
    <section style={{ padding: 'clamp(120px,14vw,160px) clamp(20px,6%,80px)', background: COLORS.black }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FleurDeLis size={36} />

          <h2
            style={{
              fontSize: 'clamp(2.8rem,6.5vw,4.5rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: COLORS.gold,
              lineHeight: 1.2,
              marginTop: '32px',
              marginBottom: '24px',
              letterSpacing: '2px',
            }}
          >
            Nuestros Valores
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              width: '100px',
              height: '3px',
              background: COLORS.gold,
              margin: '0 auto 60px',
              transformOrigin: 'center',
            }}
          />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '40px',
            marginTop: '80px',
          }}
        >
          {[
            { title: 'Calidad Premium', desc: 'Solo importamos productos de la más alta calidad artesanal' },
            { title: 'Autenticidad', desc: 'Productos 100% italianos con certificados de origen' },
            { title: 'Servicio Personalizado', desc: 'Atención dedicada y asesoramiento experto' },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              style={{
                padding: '50px 35px',
                background: `${COLORS.gold}10`,
                border: `2px solid ${COLORS.gold}`,
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3, type: 'spring' }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <FleurDeLis size={24} />
              </motion.div>

              <div
                style={{
                  fontSize: 'clamp(1.3rem,2.8vw,1.7rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: COLORS.gold,
                  marginTop: '24px',
                  marginBottom: '20px',
                  letterSpacing: '0.5px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {v.title}
              </div>

              <div
                style={{
                  fontSize: '15px',
                  lineHeight: 2,
                  color: COLORS.snow,
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
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
          style={{ marginTop: '80px' }}
        >
          <motion.button
            onClick={() => navigate('/catalogo')}
            whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.gold}60` }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: COLORS.gold,
              border: `3px solid ${COLORS.gold}`,
              color: COLORS.black,
              padding: '20px 50px',
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
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
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 9vw, 120px);
          align-items: center;
        }
        .historia-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 10vw, 140px);
          align-items: center;
        }
        @media (max-width: 968px) {
          .grid-2,
          .historia-grid {
            grid-template-columns: 1fr !important;
            gap: 50px;
          }
          .two-col-reverse {
            display: flex;
            flex-direction: column-reverse;
          }
        }
      `}</style>
      <AnimatedHero />
      <BottegaStory />
      <JohannaSection />
      <ValuesSection />
      <Footer />
    </>
  )
}