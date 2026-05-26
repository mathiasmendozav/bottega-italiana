import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import ImgBox from '../components/ImgBox'
import Footer from '../components/Footer'
import { kottabosProducts } from '../data/kottabosProducts'

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

/* ── Hero Section ────────────────────────────────────────*/
function KottabosHero() {
  const navigate = useNavigate()
  
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(140px,18vw,180px) clamp(20px,6%,80px) clamp(80px,10vw,100px)',
        overflow: 'hidden',
      }}
    >
      {/* Animated gold lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
          style={{
            position: 'absolute',
            top: `${i * 12}%`,
            width: '200%',
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${COLORS.gold}50, transparent)`,
            opacity: 0.3,
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at center, ${COLORS.gold}15 0%, transparent 70%)`,
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: '1000px', position: 'relative', zIndex: 2 }}>
        {/* Fleur de Lis */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <FleurDeLis size={40} />
        </motion.div>

        {/* Logo */}
        <motion.img
          src="/images/kottabos/kottabos-logo.jpg"
          alt="Kottabos"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            height: 'clamp(100px,14vw,140px)',
            width: 'auto',
            margin: '32px auto 40px',
            filter: 'brightness(1.2) drop-shadow(0 8px 24px rgba(226,187,0,0.3))',
          }}
        />

        {/* Italian flag divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              style={{ width: '60px', background: color }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: '13px',
            letterSpacing: '4px',
            color: COLORS.gold,
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontFamily: SANS,
            fontWeight: 600,
          }}
        >
          Brewery - An Idea of Sicily
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(3.5rem,9vw,7rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: COLORS.gold,
            letterSpacing: '4px',
            marginBottom: '32px',
            lineHeight: 1,
          }}
        >
          Kottabos
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            width: '120px',
            height: '3px',
            background: COLORS.gold,
            margin: '0 auto 40px',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{
            fontSize: 'clamp(1rem,2vw,1.2rem)',
            color: `${COLORS.snow}DD`,
            maxWidth: '700px',
            margin: '0 auto 56px',
            lineHeight: 2,
            fontFamily: SANS,
            letterSpacing: '0.5px',
          }}
        >
          Cervezas artesanales sicilianas que capturan la esencia del Mediterráneo en cada sorbo
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          onClick={() => navigate('/catalogo?cat=cerveza')}
          whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.gold}60` }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: COLORS.gold,
            color: COLORS.black,
            padding: '18px 48px',
            fontSize: '13px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: SANS,
            fontWeight: 600,
            cursor: 'pointer',
            border: `3px solid ${COLORS.gold}`,
            transition: 'all 0.3s ease',
          }}
        >
          Explorar Cervezas
        </motion.button>
      </div>
    </section>
  )
}

/* ── Story Section ──────────────────────────────────────*/
function StorySection() {
  return (
    <section style={{ padding: 'clamp(120px,15vw,180px) clamp(20px,6%,80px)', background: COLORS.snow }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="grid-2">
          <Reveal>
            <div>
              <FleurDeLis size={28} />
              
              <div
                style={{
                  fontSize: '12px',
                  letterSpacing: '3px',
                  color: COLORS.gold,
                  textTransform: 'uppercase',
                  marginTop: '24px',
                  marginBottom: '20px',
                  fontFamily: SANS,
                  fontWeight: 600,
                }}
              >
                Nuestra Historia
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: COLORS.black,
                  lineHeight: 1.1,
                  marginBottom: '32px',
                  letterSpacing: '2px',
                }}
              >
                Pasión Siciliana
              </h2>

              <div
                style={{
                  width: '100px',
                  height: '3px',
                  background: COLORS.gold,
                  marginBottom: '32px',
                }}
              />

              <p
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
                Kottabos nace en Sicilia combinando ingredientes naturales de la más alta calidad,
                técnicas tradicionales de elaboración y una identidad visual única.
              </p>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 2,
                  color: '#4A4A4A',
                  fontWeight: 400,
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                }}
              >
                Cada botella representa la fusión perfecta entre la tradición cervecera europea y
                el espíritu vibrante del Mediterráneo.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              {kottabosProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: COLORS.black,
                    padding: '24px',
                    border: `3px solid ${COLORS.gold}`,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(`/producto/${product.id}`)}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at center, ${COLORS.gold}15 0%, transparent 70%)`,
                    }}
                  />
                  <ImgBox
                    src={product.imageAlt || product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ── Products Showcase ──────────────────────────────────*/
function ProductsShowcase() {
  return (
    <section style={{ padding: 'clamp(120px,15vw,180px) clamp(20px,6%,80px)', background: '#FAFAFA' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <Reveal>
            <FleurDeLis size={32} />
          </Reveal>

          <Reveal delay={0.1}>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '3px',
                color: COLORS.gold,
                textTransform: 'uppercase',
                marginTop: '24px',
                marginBottom: '20px',
                fontFamily: SANS,
                fontWeight: 600,
              }}
            >
              Nuestra Selección
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                fontFamily: SERIF,
                fontWeight: 300,
                fontStyle: 'italic',
                color: COLORS.black,
                lineHeight: 1.1,
                letterSpacing: '2px',
                marginBottom: '24px',
              }}
            >
              Cervezas Artesanales
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <div
              style={{
                width: '100px',
                height: '3px',
                background: COLORS.gold,
                margin: '0 auto',
              }}
            />
          </Reveal>
        </div>

        <div className="grid-3">
          {kottabosProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Quality Section ────────────────────────────────────*/
function QualitySection() {
  const navigate = useNavigate()

  return (
    <section
      style={{
        padding: 'clamp(120px,15vw,180px) clamp(20px,6%,80px)',
        background: COLORS.black,
        color: COLORS.snow,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at top right, ${COLORS.gold}10 0%, transparent 60%)`,
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Reveal>
          <FleurDeLis size={32} />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '3px',
              color: COLORS.gold,
              textTransform: 'uppercase',
              marginTop: '24px',
              marginBottom: '20px',
              fontFamily: SANS,
              fontWeight: 600,
            }}
          >
            Calidad Premium
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: COLORS.gold,
              lineHeight: 1.2,
              marginBottom: '32px',
              letterSpacing: '2px',
            }}
          >
            Excelencia en Cada Detalle
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            style={{
              width: '100px',
              height: '3px',
              background: COLORS.gold,
              margin: '0 auto 60px',
            }}
          />
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '40px',
            marginTop: '60px',
          }}
        >
          {[
            { title: 'Ingredientes Naturales', desc: 'Solo los mejores ingredientes sicilianos' },
            { title: 'Proceso Artesanal', desc: 'Elaboración tradicional con técnicas modernas' },
            { title: 'Sabores Únicos', desc: 'Perfiles de sabor distintivos mediterráneos' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  padding: '50px 32px',
                  border: `2px solid ${COLORS.gold}`,
                  background: `${COLORS.gold}10`,
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, type: 'spring' }}
                >
                  <FleurDeLis size={24} />
                </motion.div>

                <div
                  style={{
                    fontSize: 'clamp(1.2rem,2.5vw,1.6rem)',
                    fontFamily: SERIF,
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: COLORS.gold,
                    marginTop: '24px',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    fontSize: '15px',
                    lineHeight: 2,
                    color: `${COLORS.snow}B3`,
                    fontFamily: SANS,
                    letterSpacing: '0.5px',
                  }}
                >
                  {item.desc}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.5}>
          <motion.button
            onClick={() => navigate('/catalogo?cat=cerveza')}
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
              marginTop: '80px',
            }}
          >
            Ver Catálogo Completo
          </motion.button>
        </Reveal>
      </div>
    </section>
  )
}

export default function KottabosPage() {
  const navigate = useNavigate()

  return (
    <>
      <style>{`
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(60px, 9vw, 120px);
          align-items: center;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
          gap: clamp(30px, 5vw, 40px);
        }
        @media (max-width: 968px) {
          .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 50px;
          }
        }
      `}</style>
      <KottabosHero />
      <StorySection />
      <ProductsShowcase />
      <QualitySection />
      <Footer />
    </>
  )
}