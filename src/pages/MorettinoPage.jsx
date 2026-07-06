import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import { morettinoProducts } from '../data/morettinoProducts'

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

/* ─── Hero ──────────────────────────────────────────────── */
function Hero() {
  const navigate = useNavigate()

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      background: COLORS.black,
    }}>
      {/* YouTube Video Background */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}>
        <iframe
          src="https://www.youtube.com/embed/-Cd4n_rj0Xg?autoplay=1&mute=1&loop=1&playlist=-Cd4n_rj0Xg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            position: 'absolute', top: '50%', left: '50%',
            width: '100vw', height: '56.25vw',
            minHeight: '100vh', minWidth: '177.77vh',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Gradient overlays - darker on left for readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to right, ${COLORS.black}F0 0%, ${COLORS.black}80 50%, transparent 100%)`,
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: `linear-gradient(to top, ${COLORS.black}CC 0%, transparent 60%)`,
      }} />

      {/* Content - bottom left aligned like morettino.com */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(120px,15vw,180px) clamp(40px,8%,120px) clamp(80px,12vw,120px)',
        maxWidth: '800px',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '12px', letterSpacing: '4px',
            color: COLORS.gold, marginBottom: '20px',
            fontFamily: SANS, fontWeight: 600,
            textTransform: 'uppercase',
          }}
        >
          Palermo, Sicilia · Desde 1920
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(3.5rem,9vw,7.5rem)',
            color: COLORS.snow, letterSpacing: '2px',
            lineHeight: 0.95, marginBottom: '32px',
          }}
        >
          We Love<br />
          <span style={{ color: COLORS.gold }}>Coffee.</span><br />
          We Love<br />
          <span style={{ color: COLORS.gold }}>Sicily.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            width: '80px', height: '3px',
            background: COLORS.gold, marginBottom: '28px',
            transformOrigin: 'left',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          style={{
            fontSize: 'clamp(1rem,1.8vw,1.15rem)',
            color: `${COLORS.snow}CC`, lineHeight: 1.9,
            marginBottom: '48px', fontFamily: SANS,
            letterSpacing: '0.5px', maxWidth: '500px',
          }}
        >
          Una historia de amor auténtica por el café que comenzó en 1920 en Sicilia. Cuatro generaciones dedicadas a la excelencia artesanal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <motion.button
            onClick={() => navigate('/catalogo?cat=cafe')}
            whileHover={{ scale: 1.05, boxShadow: `0 15px 40px ${COLORS.gold}50` }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: COLORS.gold, border: `2px solid ${COLORS.gold}`,
              color: COLORS.black, padding: '16px 40px',
              fontSize: '12px', letterSpacing: '3px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease',
            }}
          >
            Ver Cafés
          </motion.button>

          <motion.button
            onClick={() => {
              const el = document.getElementById('historia-morettino')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'transparent', border: `2px solid ${COLORS.snow}80`,
              color: COLORS.snow, padding: '16px 40px',
              fontSize: '12px', letterSpacing: '3px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s ease',
            }}
          >
            Nuestra Historia
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '40px', right: '60px',
          zIndex: 2, display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
        }}
      >
        <div style={{ fontSize: '9px', letterSpacing: '2px', color: `${COLORS.snow}80`, fontFamily: SANS }}>
          SCROLL
        </div>
        <div style={{ width: '1px', height: '50px', background: `linear-gradient(to bottom, ${COLORS.gold}, transparent)` }} />
      </motion.div>
    </section>
  )
}

/* ─── Stats Banner ──────────────────────────────────────── */
function StatsBanner() {
  const stats = [
    { num: '1920', label: 'Año de Fundación' },
    { num: '4', label: 'Generaciones' },
    { num: '100+', label: 'Años de Tradición' },
    { num: '6', label: 'Variedades Premium' },
  ]

  return (
    <section style={{ background: COLORS.gold, padding: '32px clamp(20px,6%,80px)' }}>
      <div style={{
        maxWidth: '1300px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
        gap: '0',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              textAlign: 'center', padding: '20px',
              borderRight: i < stats.length - 1 ? `1px solid ${COLORS.black}30` : 'none',
            }}
          >
            <div style={{
              fontSize: 'clamp(1.8rem,4vw,2.5rem)',
              fontFamily: SERIF, fontStyle: 'italic',
              fontWeight: 300, color: COLORS.black, lineHeight: 1,
            }}>
              {s.num}
            </div>
            <div style={{
              fontSize: '10px', letterSpacing: '2px',
              color: COLORS.black, textTransform: 'uppercase',
              fontFamily: SANS, fontWeight: 600, marginTop: '6px',
            }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── History Section ───────────────────────────────────── */
function HistorySection() {
  return (
    <section id="historia-morettino" style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.black,
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div className="historia-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(60px,10vw,120px)',
          alignItems: 'center',
        }}>
          {/* Image - Alberto Morettino maestro tostador */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
            style={{ position: 'relative' }}
          >
            <img
              src="https://dailycoffeenews.com/wp-content/uploads/2021/11/Alberto-Morettino_maestro-torrefattore-3.jpg"
              alt="Alberto Morettino - Maestro Tostador"
              style={{
                width: '100%', height: 'clamp(400px,55vw,650px)',
                objectFit: 'cover',
                filter: 'grayscale(20%) contrast(1.05)',
              }}
            />
            {/* Gold border accent */}
            <div style={{
              position: 'absolute', top: '-12px', left: '-12px',
              right: '12px', bottom: '12px',
              border: `3px solid ${COLORS.gold}`,
              zIndex: -1, pointerEvents: 'none',
            }} />
            {/* Caption */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: `linear-gradient(transparent, ${COLORS.black}DD)`,
              padding: '40px 24px 20px',
            }}>
              <div style={{
                fontSize: '11px', letterSpacing: '2px',
                color: COLORS.gold, fontFamily: SANS, fontWeight: 600,
              }}>
                ALBERTO MORETTINO · MAESTRO TOSTADOR
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9 }}
          >
            <div style={{
              fontSize: '11px', letterSpacing: '4px',
              color: COLORS.gold, marginBottom: '20px',
              fontFamily: SANS, fontWeight: 600, textTransform: 'uppercase',
            }}>
              Nuestra Historia
            </div>

            <h2 style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)',
              fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
              color: COLORS.snow, marginBottom: '32px',
              letterSpacing: '1px', lineHeight: 1.1,
            }}>
              Cuatro Generaciones<br />
              <span style={{ color: COLORS.gold }}>de Pasión</span>
            </h2>

            <div style={{
              width: '80px', height: '3px',
              background: COLORS.gold, marginBottom: '32px',
            }} />

            {[
              'Desde 1920, la familia Morettino ha dedicado su vida al arte del café. Con sede en Palermo, Sicilia, cada generación ha perfeccionado el oficio, combinando métodos tradicionales con innovación constante.',
              'Hoy, Alberto y Andrea Morettino continúan el legado familiar con una visión pionera: ser la primera torrefacción italiana en cultivar café en Sicilia, en una plantación experimental dentro de los jardines botánicos de Palermo.',
            ].map((text, i) => (
              <p key={i} style={{
                fontSize: '16px', lineHeight: 2, color: `${COLORS.snow}CC`,
                marginBottom: '24px', fontFamily: SANS, letterSpacing: '0.5px',
              }}>
                {text}
              </p>
            ))}

            <div style={{
              borderLeft: `3px solid ${COLORS.gold}`,
              paddingLeft: '24px', marginTop: '32px',
            }}>
              <p style={{
                fontSize: '18px', fontFamily: SERIF, fontStyle: 'italic',
                color: COLORS.gold, lineHeight: 1.6, margin: 0,
              }}>
                "Per noi siciliani il caffè è un rituale, un simbolo di condivisione e convivialità."
              </p>
              <div style={{
                fontSize: '11px', letterSpacing: '2px',
                color: `${COLORS.snow}99`, fontFamily: SANS,
                fontWeight: 600, marginTop: '12px',
              }}>
                — ANDREA MORETTINO, IV Generación
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Products Showcase ─────────────────────────────────── */
function ProductsSection() {
  return (
    <section style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.beige,
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{
            fontSize: '11px', letterSpacing: '4px',
            color: COLORS.gold, marginBottom: '20px',
            fontFamily: SANS, fontWeight: 600,
          }}>
            SELEZIONE MORETTINO
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem,6vw,4rem)',
            fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            color: COLORS.black, marginBottom: '24px', letterSpacing: '2px',
          }}>
            Nuestros Cafés
          </h2>

          <div style={{
            width: '80px', height: '3px',
            background: COLORS.gold, margin: '0 auto 32px',
          }} />

          <p style={{
            fontSize: '16px', color: '#4A4A4A', lineHeight: 1.9,
            maxWidth: '650px', margin: '0 auto',
            fontFamily: SANS, letterSpacing: '0.5px',
          }}>
            Cada café Morettino es el resultado de generaciones de expertise, seleccionando los mejores granos de las regiones cafetaleras más prestigiosas del mundo.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '40px',
        }}>
          {morettinoProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process Section ───────────────────────────────────── */
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Selección del Grano',
      desc: 'Selección rigurosa de las mejores variedades Arábica de Colombia, Etiopía, Brasil y Centroamérica.',
    },
    {
      number: '02',
      title: 'Tostado Lento',
      desc: 'Tostado artesanal ecológico a baja temperatura con aire caliente limpio para preservar los aromas naturales.',
    },
    {
      number: '03',
      title: 'Stagionatura',
      desc: 'Fase de maduración cuidadosa que realza todas las características organolépticas naturales del café.',
    },
    {
      number: '04',
      title: 'Envasado Premium',
      desc: 'Sellado en atmósfera protegida inmediatamente después del tostado para garantizar frescura óptima.',
    },
  ]

  return (
    <section style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.black,
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{
            fontSize: '11px', letterSpacing: '4px',
            color: COLORS.gold, marginBottom: '20px',
            fontFamily: SANS, fontWeight: 600,
          }}>
            IL METODO MORETTINO
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem,6vw,4rem)',
            fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            color: COLORS.snow, marginBottom: '24px', letterSpacing: '2px',
          }}>
            Ciencia con <span style={{ color: COLORS.gold }}>Conciencia</span>
          </h2>

          <div style={{ width: '80px', height: '3px', background: COLORS.gold }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '40px',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                padding: '40px 30px',
                border: `1px solid ${COLORS.gold}40`,
                background: `${COLORS.gold}08`,
                transition: 'all 0.4s ease',
                position: 'relative',
              }}
            >
              <div style={{
                fontSize: 'clamp(3rem,6vw,4rem)',
                fontFamily: SERIF, fontStyle: 'italic',
                color: `${COLORS.gold}30`, lineHeight: 1,
                marginBottom: '20px',
              }}>
                {step.number}
              </div>

              <div style={{
                width: '40px', height: '2px',
                background: COLORS.gold, marginBottom: '20px',
              }} />

              <h3 style={{
                fontSize: 'clamp(1.1rem,2vw,1.3rem)',
                fontFamily: SERIF, fontStyle: 'italic',
                color: COLORS.gold, marginBottom: '16px',
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '14px', lineHeight: 1.9,
                color: `${COLORS.snow}B3`,
                fontFamily: SANS, letterSpacing: '0.3px',
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Palermo Section ───────────────────────────────────── */
function PalermoSection() {
  return (
    <section style={{ position: 'relative', minHeight: '60vh', overflow: 'hidden' }}>
      {/* Dark background representing Palermo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, #1A0E00 0%, #2D1A00 50%, ${COLORS.black} 100%)`,
        zIndex: 0,
      }} />

      {/* Decorative gold pattern */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          style={{
            position: 'absolute',
            top: `${10 + i * 20}%`, left: `${i * 20}%`,
            width: '1px', height: '100%',
            background: `linear-gradient(to bottom, transparent, ${COLORS.gold}, transparent)`,
          }}
        />
      ))}

      <div style={{
        position: 'relative', zIndex: 2,
        padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
        textAlign: 'center', maxWidth: '900px', margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div style={{
            fontSize: '11px', letterSpacing: '4px',
            color: COLORS.gold, marginBottom: '24px',
            fontFamily: SANS, fontWeight: 600,
          }}>
            PALERMO, SICILIA
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem,7vw,5.5rem)',
            fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
            color: COLORS.snow, lineHeight: 1.1, marginBottom: '40px',
          }}>
            "Per noi siciliani il caffè<br />
            <span style={{ color: COLORS.gold }}>è un rituale.</span>"
          </h2>

          {/* Italian flag divider */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '40px',
          }}>
            {['#0C7A2A', '#FFFCFE', '#AB0502'].map((c, i) => (
              <div key={i} style={{ width: '50px', height: '3px', background: c }} />
            ))}
          </div>

          <p style={{
            fontSize: '17px', color: `${COLORS.snow}CC`,
            lineHeight: 2, fontFamily: SANS,
            letterSpacing: '0.5px', maxWidth: '600px', margin: '0 auto',
          }}>
            Para los sicilianos, el café es un símbolo de compartir y convivialidad, una auténtica expresión de los colores y sabores de nuestra tierra.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── CTA ───────────────────────────────────────────────── */
function CTA() {
  const navigate = useNavigate()

  return (
    <section style={{
      padding: 'clamp(100px,14vw,160px) clamp(20px,6%,80px)',
      background: COLORS.gold, textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={{
          fontSize: 'clamp(2.5rem,6vw,4rem)',
          fontFamily: SERIF, fontWeight: 300, fontStyle: 'italic',
          color: COLORS.black, marginBottom: '24px', letterSpacing: '2px',
        }}>
          Descubre el Auténtico Café Siciliano
        </h2>

        <p style={{
          fontSize: '16px', color: `${COLORS.black}CC`,
          lineHeight: 2, marginBottom: '48px',
          maxWidth: '600px', margin: '0 auto 48px',
          fontFamily: SANS, letterSpacing: '0.5px',
        }}>
          Disponible exclusivamente en Bolivia a través de Bottega Italiana
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.button
            whileHover={{ scale: 1.05, background: COLORS.black, color: COLORS.snow }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/catalogo?cat=cafe')}
            style={{
              background: COLORS.black, border: `2px solid ${COLORS.black}`,
              color: COLORS.snow, padding: '18px 48px',
              fontSize: '12px', letterSpacing: '3px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease',
            }}
          >
            Ver Catálogo
          </motion.button>

          <motion.a
            href="https://wa.me/59178594506"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: COLORS.green, border: `2px solid ${COLORS.green}`,
              color: COLORS.snow, padding: '18px 48px',
              fontSize: '12px', letterSpacing: '3px',
              textTransform: 'uppercase', fontFamily: SANS,
              fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease',
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            📱 WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}

export default function MorettinoPage() {
  return (
    <>
      <style>{`
        @media (max-width: 968px) {
          .historia-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
      <Hero />
      <StatsBanner />
      <HistorySection />
      <ProductsSection />
      <ProcessSection />
      <PalermoSection />
      <CTA />
      <Footer />
    </>
  )
}