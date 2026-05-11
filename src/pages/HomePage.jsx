import { motion, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import Footer from '../components/Footer'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

/* ── Fleur de Lis ────────────────────────────────────────── */
function FleurDeLis({ size = 24, color = '#C89B3C' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2M7 7C6 7 5 8 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 8 8 7 7 7M17 7C16 7 15 8 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 8 18 7 17 7M12 8C10 8 9 10 9 12C9 13 9 14 8 14C7 14 7 13 7 12C7 11 7 9 8 8C7 8 6 9 6 10C6 12 7 13 8 14C9 15 10 15 11 15L11 20C11 21 11 22 12 22C13 22 13 21 13 20L13 15C14 15 15 15 16 14C17 13 18 12 18 10C18 9 17 8 16 8C17 9 17 11 17 12C17 13 17 14 16 14C15 14 15 13 15 12C15 10 14 8 12 8Z" />
    </svg>
  )
}

/* ── Elegant Parallax Hero ──────────────────────────────── */
function ElegantHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #2A1810 0%, #3D2A1F 50%, #2A1810 100%)',
      }}
    >
      {/* Subtle animated grid */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C89B3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Elegant light rays */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0, 0.08, 0], scaleY: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${15 + i * 14}%`,
            top: 0,
            width: '2px',
            height: '100%',
            background: `linear-gradient(to bottom, transparent 0%, #C89B3C 50%, transparent 100%)`,
            transformOrigin: 'top',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="hero-content"
      >
        <div
          style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 clamp(20px,6%,80px)',
            zIndex: 2,
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <div className="hero-grid">
              {/* Left: Text content */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                  style={{ marginBottom: '24px' }}
                >
                  <FleurDeLis size={42} color="#C89B3C" />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(3.5rem,8vw,7rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: '#C89B3C',
                    letterSpacing: '4px',
                    marginBottom: '32px',
                    lineHeight: 1,
                  }}
                >
                  Bottega Italiana
                </motion.h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  style={{
                    width: '140px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #C89B3C 0%, transparent 100%)',
                    marginBottom: '40px',
                    transformOrigin: 'left',
                  }}
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  style={{
                    fontFamily: SANS,
                    fontSize: 'clamp(1rem,2vw,1.3rem)',
                    color: '#F5F0E8',
                    letterSpacing: '1px',
                    lineHeight: 1.8,
                    marginBottom: '24px',
                    fontWeight: 300,
                  }}
                >
                  Importación de productos premium italianos
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  style={{
                    fontFamily: SANS,
                    fontSize: 'clamp(0.9rem,1.6vw,1.05rem)',
                    color: 'rgba(245,240,232,0.7)',
                    letterSpacing: '0.5px',
                    lineHeight: 2,
                    marginBottom: '48px',
                  }}
                >
                  Café artesanal Morettino y cervezas Kottabos desde Sicilia a Bolivia
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
                >
                  <motion.a
                    href="#marcas"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(200,155,60,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: '#C89B3C',
                      border: '2px solid #C89B3C',
                      color: '#fff',
                      padding: '18px 42px',
                      fontSize: '12px',
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      fontFamily: SANS,
                      fontWeight: 500,
                      cursor: 'pointer',
                      borderRadius: '0',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Explorar Productos
                  </motion.a>
                </motion.div>
              </div>

              {/* Right: Johanna Vargas image */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{ position: 'relative' }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: 'relative',
                    border: '4px solid #C89B3C',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  }}
                >
                  <img
                    src="/images/bottega/johannavargas.jpg"
                    alt="Johanna Vargas - Fundadora"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '32px',
                      background: 'linear-gradient(to top, rgba(42,24,16,0.95) 0%, transparent 100%)',
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          letterSpacing: '3px',
                          color: '#C89B3C',
                          textTransform: 'uppercase',
                          marginBottom: '8px',
                          fontFamily: SANS,
                          fontWeight: 500,
                        }}
                      >
                        Fundadora e Importadora
                      </div>
                      <div
                        style={{
                          fontSize: 'clamp(1.5rem,3vw,2rem)',
                          fontFamily: SERIF,
                          fontWeight: 300,
                          fontStyle: 'italic',
                          color: '#F5F0E8',
                          letterSpacing: '1px',
                        }}
                      >
                        Johanna Vargas
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Corner decoration */}
                <motion.div
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    border: '2px solid #C89B3C',
                    borderRadius: '50%',
                    zIndex: -1,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '30px',
            height: '50px',
            border: '2px solid #C89B3C',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: '4px',
              height: '8px',
              background: '#C89B3C',
              borderRadius: '2px',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ── Stats Section with Animations ──────────────────────── */
function AnimatedStats() {
  return (
    <section style={{ padding: 'clamp(100px,13vw,160px) clamp(20px,6%,80px)', background: '#F5F0E8' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <FleurDeLis size={32} color="#C89B3C" />
          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#2A1810',
              lineHeight: 1.2,
              marginTop: '24px',
              letterSpacing: '1px',
            }}
          >
            Excelencia Italiana en Bolivia
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(40px,7vw,60px)',
          }}
        >
          {[
            { num: '2', label: 'Marcas Premium', desc: 'Morettino & Kottabos', color: '#C89B3C' },
            { num: '8', label: 'Productos Únicos', desc: 'Café y Cerveza Artesanal', color: '#d6c1ab' },
            { num: '100+', label: 'Años de Tradición', desc: 'Sicilia desde 1920', color: '#e2bb00' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              style={{
                textAlign: 'center',
                padding: '40px 30px',
                background: '#fff',
                border: `2px solid ${stat.color}30`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  opacity: 0.1,
                }}
              >
                <FleurDeLis size={60} color={stat.color} />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 + 0.3, type: 'spring' }}
                style={{
                  fontSize: 'clamp(4rem,8vw,6rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {stat.num}
              </motion.div>

              <div
                style={{
                  fontSize: '14px',
                  letterSpacing: '3px',
                  color: '#2A1810',
                  textTransform: 'uppercase',
                  fontFamily: SANS,
                  fontWeight: 500,
                  marginBottom: '12px',
                }}
              >
                {stat.label}
              </div>

              <div
                style={{
                  fontSize: '13px',
                  color: '#7A6A5D',
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                }}
              >
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Brand Catalog Cards ────────────────────────────────── */
function BrandCatalog() {
  const navigate = useNavigate()

  const brands = [
    {
      name: 'Morettino',
      logo: '/images/morettino/morettinologo.webp',
      tagline: 'Café Artesanal desde 1920',
      description: 'Cuatro variedades premium de café siciliano, tostado con maestría y pasión por más de 100 años de tradición familiar.',
      color: '#d6c1ab',
      bg: '#fff',
      textColor: '#2A1810',
      path: '/morettino',
      products: '4 Variedades',
      origin: 'Palermo, Sicilia',
    },
    {
      name: 'Kottabos',
      logo: '/images/kottabos/kottabos-logo.jpg',
      tagline: 'Cerveza Artesanal Mediterránea',
      description: 'Cuatro variedades únicas de cerveza artesanal siciliana, elaboradas con ingredientes naturales y la esencia de Italia.',
      color: '#e2bb00',
      bg: '#000',
      textColor: '#fff',
      path: '/kottabos',
      products: '4 Cervezas',
      origin: 'Sicilia, Italia',
    },
  ]

  return (
    <section id="marcas" style={{ padding: 'clamp(100px,13vw,160px) clamp(20px,6%,80px)', background: '#2A1810' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <FleurDeLis size={36} color="#C89B3C" />
          </motion.div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4.5rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#F5F0E8',
              lineHeight: 1.2,
              marginTop: '32px',
              marginBottom: '24px',
              letterSpacing: '1px',
            }}
          >
            Explora Nuestras Marcas
          </h2>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 2,
              color: 'rgba(245,240,232,0.7)',
              fontWeight: 400,
              fontFamily: SANS,
              letterSpacing: '0.5px',
            }}
          >
            Dos marcas legendarias de Sicilia, ahora en Bolivia
          </p>
        </motion.div>

        <div className="brands-grid">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => navigate(brand.path)}
              style={{
                background: brand.bg,
                padding: 'clamp(50px,7vw,80px)',
                cursor: 'pointer',
                border: `3px solid transparent`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = brand.color
                e.currentTarget.style.boxShadow = `0 20px 60px ${brand.color}30`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at center, ${brand.color}15 0%, transparent 70%)`,
                  backgroundSize: '200% 200%',
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  style={{ marginBottom: '32px' }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{ height: '60px', objectFit: 'contain' }}
                  />
                </motion.div>

                {/* Tagline */}
                <h3
                  style={{
                    fontSize: 'clamp(1.8rem,3.5vw,2.5rem)',
                    fontFamily: SERIF,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: brand.textColor,
                    marginBottom: '24px',
                    letterSpacing: '1px',
                    lineHeight: 1.2,
                  }}
                >
                  {brand.tagline}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 2,
                    color: brand.bg === '#000' ? 'rgba(255,255,255,0.8)' : '#5A4A3D',
                    fontFamily: SANS,
                    letterSpacing: '0.5px',
                    marginBottom: '32px',
                  }}
                >
                  {brand.description}
                </p>

                {/* Info badges */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  <div
                    style={{
                      padding: '8px 16px',
                      border: `1px solid ${brand.color}50`,
                      fontSize: '11px',
                      letterSpacing: '2px',
                      color: brand.color,
                      textTransform: 'uppercase',
                      fontFamily: SANS,
                      fontWeight: 500,
                      background: `${brand.color}10`,
                    }}
                  >
                    {brand.products}
                  </div>
                  <div
                    style={{
                      padding: '8px 16px',
                      border: `1px solid ${brand.color}50`,
                      fontSize: '11px',
                      letterSpacing: '2px',
                      color: brand.color,
                      textTransform: 'uppercase',
                      fontFamily: SANS,
                      fontWeight: 500,
                      background: `${brand.color}10`,
                    }}
                  >
                    {brand.origin}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 10 }}
                  style={{
                    fontSize: '13px',
                    letterSpacing: '3px',
                    color: brand.color,
                    textTransform: 'uppercase',
                    fontFamily: SANS,
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  Ver Colección
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
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

/* ── Final CTA ──────────────────────────────────────────── */
function FinalCTA() {
  const navigate = useNavigate()

  return (
    <section
      style={{
        padding: 'clamp(100px,13vw,160px) clamp(20px,6%,80px)',
        background: 'linear-gradient(135deg, #F5F0E8 0%, #E8DFD0 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle animated lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 1.5,
          }}
          style={{
            position: 'absolute',
            top: `${20 + i * 15}%`,
            width: '40%',
            height: '1px',
            background: `linear-gradient(90deg, transparent 0%, #C89B3C 50%, transparent 100%)`,
            opacity: 0.1,
          }}
        />
      ))}

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FleurDeLis size={40} color="#C89B3C" />
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4.5rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#2A1810',
              lineHeight: 1.2,
              marginTop: '32px',
              marginBottom: '32px',
              letterSpacing: '2px',
            }}
          >
            Descubre la Colección Completa
          </h2>

          <p
            style={{
              fontSize: '17px',
              lineHeight: 2,
              color: '#5A4A3D',
              fontWeight: 400,
              marginBottom: '48px',
              fontFamily: SANS,
              letterSpacing: '0.5px',
            }}
          >
            8 productos premium sicilianos esperando por ti
          </p>

          <motion.button
            onClick={() => navigate('/catalogo')}
            whileHover={{ scale: 1.08, boxShadow: '0 15px 40px rgba(200,155,60,0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: '#C89B3C',
              border: '3px solid #C89B3C',
              color: '#fff',
              padding: '20px 50px',
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '0',
              transition: 'all 0.3s ease',
            }}
          >
            Ir al Catálogo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 10vw, 120px);
          align-items: center;
        }
        .brands-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 60px);
        }
        @media (max-width: 968px) {
          .hero-grid,
          .brands-grid {
            grid-template-columns: 1fr !important;
            gap: 50px;
          }
        }
      `}</style>
      <ElegantHero />
      <AnimatedStats />
      <BrandCatalog />
      <FinalCTA />
      <Footer />
    </>
  )
}