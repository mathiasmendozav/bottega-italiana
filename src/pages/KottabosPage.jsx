import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import ImgBox from '../components/ImgBox'
import Footer from '../components/Footer'
import { kottabosProducts } from '../data/kottabosProducts'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

function KottabosHero() {
  const navigate = useNavigate()
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(120px,15vw,160px) clamp(20px,6%,80px) 80px',
        overflow: 'hidden',
      }}
    >
      {/* Animated gold lines background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
        }}
      >
        {[...Array(12)].map((_, i) => (
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
              top: `${i * 8}%`,
              width: '200%',
              height: '1px',
              background: `linear-gradient(90deg, transparent, #e2bb00, transparent)`,
            }}
          />
        ))}
      </div>

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(226,187,0,0.1) 0%, transparent 70%)',
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: '1000px', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Logo */}
          <motion.img
            src="/images/kottabos/kottabos-logo.jpeg"
            alt="Kottabos"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              height: 'clamp(80px,12vw,120px)',
              width: 'auto',
              marginBottom: '48px',
              filter: 'brightness(1.2)',
            }}
          />

          <div
            style={{
              fontSize: '13px',
              letterSpacing: '4px',
              color: '#e2bb00',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontFamily: SANS,
              fontWeight: 600,
            }}
          >
            Brewery - An Idea of Sicily
          </div>

          <h1
            style={{
              fontFamily: SANS,
              fontSize: 'clamp(3.5rem,9vw,7rem)',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '6px',
              textTransform: 'uppercase',
              marginBottom: '32px',
              lineHeight: 0.9,
            }}
          >
            KOTTABOS
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem,2vw,1.2rem)',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '700px',
              margin: '0 auto 56px',
              lineHeight: 1.8,
              fontFamily: SANS,
              letterSpacing: '0.5px',
            }}
          >
            Cervezas artesanales sicilianas que capturan la esencia del Mediterráneo en cada sorbo
          </p>

          {/* Decorative line */}
          <div
            style={{
              width: '120px',
              height: '2px',
              background: '#e2bb00',
              margin: '0 auto 56px',
            }}
          />

          <motion.button
            onClick={() => navigate('/catalogo?cat=cerveza')}
            whileHover={{ scale: 1.05, background: '#fff', color: '#000' }}
            style={{
              background: '#e2bb00',
              color: '#000',
              padding: '18px 48px',
              fontSize: '14px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 700,
              cursor: 'pointer',
              border: '2px solid #e2bb00',
              borderRadius: '0',
              transition: 'all 0.3s ease',
            }}
          >
            Explorar Cervezas
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section style={{ padding: 'clamp(100px,13vw,160px) clamp(20px,6%,80px)', background: '#ffffff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="grid-2">
          <Reveal>
            <div>
              <div
                style={{
                  fontSize: '12px',
                  letterSpacing: '3px',
                  color: '#e2bb00',
                  textTransform: 'uppercase',
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
                  fontFamily: SANS,
                  fontWeight: 700,
                  color: '#000',
                  lineHeight: 1.1,
                  marginBottom: '32px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                Pasión Siciliana
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 2,
                  color: '#333',
                  fontWeight: 400,
                  marginBottom: '24px',
                  fontFamily: SANS,
                  letterSpacing: '0.3px',
                }}
              >
                Kottabos nace en Sicilia combinando ingredientes naturales de la más alta calidad,
                técnicas tradicionales de elaboración y una identidad visual única.
              </p>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 2,
                  color: '#333',
                  fontWeight: 400,
                  fontFamily: SANS,
                  letterSpacing: '0.3px',
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
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    background: '#000',
                    padding: '24px',
                    border: '2px solid #e2bb00',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at center, rgba(226,187,0,0.15) 0%, transparent 70%)',
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

function ProductsShowcase() {
  return (
    <section style={{ padding: 'clamp(100px,13vw,160px) clamp(20px,6%,80px)', background: '#f5f5f5' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <Reveal>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '3px',
                color: '#e2bb00',
                textTransform: 'uppercase',
                marginBottom: '20px',
                fontFamily: SANS,
                fontWeight: 600,
              }}
            >
              Nuestra Selección
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                fontFamily: SANS,
                fontWeight: 700,
                color: '#000',
                lineHeight: 1.1,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              Cervezas Artesanales
            </h2>
          </Reveal>
        </div>
        <div className="grid-3">{kottabosProducts.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}</div>
      </div>
    </section>
  )
}

function QualitySection() {
  return (
    <section style={{ padding: 'clamp(100px,13vw,160px) clamp(20px,6%,80px)', background: '#000', color: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div
            style={{
              fontSize: '12px',
              letterSpacing: '3px',
              color: '#e2bb00',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: SANS,
              fontWeight: 600,
            }}
          >
            Calidad Premium
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <h2
            style={{
              fontSize: 'clamp(2rem,5vw,3.5rem)',
              fontFamily: SANS,
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '40px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Excelencia en Cada Detalle
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '60px' }}>
          {[
            { title: 'Ingredientes Naturales', desc: 'Solo los mejores ingredientes sicilianos' },
            { title: 'Proceso Artesanal', desc: 'Elaboración tradicional con técnicas modernas' },
            { title: 'Sabores Únicos', desc: 'Perfiles de sabor distintivos mediterráneos' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={0.1 * i}>
              <div style={{ padding: '32px 24px', border: '1px solid #e2bb00' }}>
                <div
                  style={{
                    fontSize: 'clamp(1.2rem,2.5vw,1.6rem)',
                    fontFamily: SANS,
                    fontWeight: 600,
                    color: '#e2bb00',
                    marginBottom: '16px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', fontFamily: SANS, letterSpacing: '0.5px' }}>
                  {item.desc}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function KottabosPage() {
  return (
    <>
      <style>{`.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(60px, 9vw, 120px); align-items: center; } .grid-3 { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr)); gap: clamp(24px, 4vw, 32px); } @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; gap: 40px; } }`}</style>
      <KottabosHero />
      <StorySection />
      <ProductsShowcase />
      <QualitySection />
      <Footer />
    </>
  )
}