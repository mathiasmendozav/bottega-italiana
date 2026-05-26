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

/* ── Hero Section with Bottega Logo ─────────────────────── */
function Hero() {
  const navigate = useNavigate()

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
      }}
    >
      {/* Decorative light rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: `${15 + i * 14}%`,
            width: '2px',
            height: '100%',
            background: `linear-gradient(180deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
          }}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 clamp(20px,6%,80px)' }}>
        {/* Fleur de Lis */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <FleurDeLis size={40} />
        </motion.div>

        {/* Bottega Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginTop: '32px', marginBottom: '32px' }}
        >
          <img
            src="/images/bottega/logo.png"
            alt="Bottega Italiana"
            style={{
              height: '120px',
              width: '120px',
              borderRadius: '50%',
              margin: '0 auto',
              boxShadow: `0 8px 24px ${COLORS.gold}40`,
            }}
          />
        </motion.div>

        {/* Italian Flag Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '40px',
          }}
        >
          {[COLORS.green, COLORS.snow, COLORS.inferno].map((color, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: '4px' }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              style={{
                width: '80px',
                background: color,
              }}
            />
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: 'clamp(3rem,9vw,6rem)',
            fontFamily: SERIF,
            fontWeight: 300,
            fontStyle: 'italic',
            color: COLORS.gold,
            letterSpacing: '4px',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}
        >
          Bottega Italiana
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            width: '140px',
            height: '3px',
            background: COLORS.gold,
            margin: '0 auto 40px',
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            fontSize: 'clamp(1.1rem,2.5vw,1.5rem)',
            color: COLORS.snow,
            letterSpacing: '1px',
            lineHeight: 1.8,
            maxWidth: '800px',
            margin: '0 auto 60px',
            fontFamily: SANS,
          }}
        >
          Productos premium italianos desde Sicilia hasta Bolivia
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.button
            onClick={() => navigate('/catalogo')}
            whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.gold}60` }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: COLORS.gold,
              border: `3px solid ${COLORS.gold}`,
              color: COLORS.black,
              padding: '18px 48px',
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Ver Catálogo
          </motion.button>

          <motion.button
            onClick={() => navigate('/historia')}
            whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.gold}40` }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent',
              border: `3px solid ${COLORS.gold}`,
              color: COLORS.gold,
              padding: '18px 48px',
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            Nuestra Historia
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Stats Section ──────────────────────────────────────── */
function StatsSection() {
  const stats = [
    { number: '2', label: 'Marcas Premium' },
    { number: '10', label: 'Productos Artesanales' },
    { number: '100+', label: 'Años de Tradición' },
  ]

  return (
    <section style={{ padding: 'clamp(80px,12vw,120px) clamp(20px,6%,80px)', background: COLORS.snow }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '40px',
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                background: '#fff',
                border: `2px solid ${COLORS.gold}`,
                transition: 'all 0.4s ease',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.5rem,6vw,4rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: COLORS.gold,
                  marginBottom: '12px',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '2px',
                  color: COLORS.black,
                  textTransform: 'uppercase',
                  fontFamily: SANS,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Our Brands Section with BOTH logos ────────────────── */
function OurBrandsSection() {
  const navigate = useNavigate()

  const brands = [
    {
      name: 'Morettino',
      logo: '/images/morettino/morettinologo.webp',
      founded: 'Desde 1920',
      origin: 'Palermo, Sicilia',
      description: 'Café artesanal siciliano con más de 100 años de tradición y excelencia. Cuatro generaciones de maestros tostadores.',
      color: COLORS.gold,
      bg: COLORS.snow,
      link: '/morettino',
    },
    {
      name: 'Kottabos',
      logo: '/images/kottabos/kottabos-logo.jpg',
      founded: 'Artesanal',
      origin: 'Sicilia, Italia',
      description: 'Cervezas artesanales sicilianas elaboradas con ingredientes premium y recetas tradicionales mediterráneas.',
      color: COLORS.gold,
      bg: COLORS.black,
      link: '/kottabos',
    },
  ]

  return (
    <section style={{ padding: 'clamp(100px,14vw,140px) clamp(20px,6%,80px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <FleurDeLis size={32} />
          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: COLORS.black,
              marginTop: '24px',
              marginBottom: '24px',
              letterSpacing: '2px',
            }}
          >
            Nuestras Marcas
          </h2>
          <div
            style={{
              width: '100px',
              height: '3px',
              background: COLORS.gold,
              margin: '0 auto 32px',
            }}
          />
          <p
            style={{
              fontSize: '16px',
              color: '#4A4A4A',
              lineHeight: 1.9,
              maxWidth: '700px',
              margin: '0 auto',
              fontFamily: SANS,
              letterSpacing: '0.5px',
            }}
          >
            Importamos y distribuimos productos premium de dos de las marcas más emblemáticas de Sicilia
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: '40px',
          }}
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => navigate(brand.link)}
              style={{
                background: brand.bg,
                padding: '50px 40px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                border: `3px solid ${brand.color}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background gradient */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at top right, ${brand.color}15 0%, transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      height: '100px',
                      width: 'auto',
                      maxWidth: '200px',
                      objectFit: 'contain',
                      filter: brand.bg === COLORS.black ? 'brightness(1.2)' : 'none',
                    }}
                  />
                </div>

                <div
                  style={{
                    fontSize: '12px',
                    letterSpacing: '2px',
                    color: brand.color,
                    marginBottom: '16px',
                    fontFamily: SANS,
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {brand.founded} · {brand.origin}
                </div>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 2,
                    color: brand.bg === COLORS.black ? `${COLORS.snow}DD` : '#4A4A4A',
                    marginBottom: '32px',
                    fontFamily: SANS,
                    letterSpacing: '0.5px',
                    textAlign: 'center',
                  }}
                >
                  {brand.description}
                </p>

                <motion.div
                  whileHover={{ x: 5 }}
                  style={{
                    fontSize: '12px',
                    letterSpacing: '2px',
                    color: brand.color,
                    textTransform: 'uppercase',
                    fontFamily: SANS,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  Conocer Más
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Brand Catalog Section ─────────────────────────────── */
function BrandCatalogSection() {
  const navigate = useNavigate()

  return (
    <section style={{ padding: 'clamp(100px,14vw,140px) clamp(20px,6%,80px)', background: COLORS.snow }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <FleurDeLis size={32} />
          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: COLORS.black,
              marginTop: '24px',
              letterSpacing: '2px',
            }}
          >
            Explora Nuestro Catálogo
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
          }}
          className="catalog-grid"
        >
          {/* Morettino */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => navigate('/catalogo?cat=cafe')}
            style={{
              background: '#fff',
              padding: '60px 40px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              border: `3px solid ${COLORS.gold}`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${COLORS.gold}15 0%, transparent 70%)`,
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  color: COLORS.gold,
                  marginBottom: '20px',
                }}
              >
                Morettino
              </div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '2px',
                  color: '#4A4A4A',
                  fontFamily: SANS,
                  fontWeight: 500,
                }}
              >
                CAFÉ ARTESANAL
              </div>
            </div>
          </motion.div>

          {/* Kottabos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => navigate('/catalogo?cat=cerveza')}
            style={{
              background: COLORS.black,
              padding: '60px 40px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              border: `3px solid ${COLORS.gold}`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${COLORS.gold}15 0%, transparent 70%)`,
              }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div
                style={{
                  fontSize: 'clamp(2rem,4vw,3rem)',
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  color: COLORS.gold,
                  marginBottom: '20px',
                }}
              >
                Kottabos
              </div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '2px',
                  color: COLORS.snow,
                  fontFamily: SANS,
                  fontWeight: 500,
                }}
              >
                CERVEZA ARTESANAL
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Contact CTA ────────────────────────────────────────── */
function ContactCTA() {
  return (
    <section
      style={{
        padding: 'clamp(100px,14vw,140px) clamp(20px,6%,80px)',
        background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 2,
          }}
          style={{
            position: 'absolute',
            top: `${30 + i * 25}%`,
            width: '50%',
            height: '1px',
            background: `linear-gradient(90deg, transparent 0%, ${COLORS.gold} 50%, transparent 100%)`,
            opacity: 0.2,
          }}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FleurDeLis size={40} />
        </motion.div>

        <h2
          style={{
            fontSize: 'clamp(2.5rem,6vw,4rem)',
            fontFamily: SERIF,
            fontWeight: 300,
            fontStyle: 'italic',
            color: COLORS.gold,
            marginTop: '32px',
            marginBottom: '32px',
            letterSpacing: '2px',
          }}
        >
          ¿Listo para Degustar?
        </h2>

        <p
          style={{
            fontSize: '16px',
            color: COLORS.snow,
            lineHeight: 2,
            marginBottom: '48px',
            fontFamily: SANS,
            letterSpacing: '0.5px',
          }}
        >
          Contáctanos para conocer más sobre nuestros productos premium
        </p>

        <motion.a
          href="https://wa.me/59178594506"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.green}66` }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: 'inline-block',
            background: COLORS.green,
            color: COLORS.snow,
            padding: '20px 50px',
            fontSize: '13px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: SANS,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
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
          .catalog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Hero />
      <StatsSection />
      <OurBrandsSection />
      <BrandCatalogSection />
      <ContactCTA />
      <Footer />
    </>
  )
}