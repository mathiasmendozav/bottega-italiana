import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
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

export default function MorettinoPage() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero with YouTube Video Background */}
      <section
        style={{
          position: 'relative',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: COLORS.black,
        }}
      >
        {/* YouTube Video Background - Working */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/-Cd4n_rj0Xg?autoplay=1&mute=1&loop=1&playlist=-Cd4n_rj0Xg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>

        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(180deg, ${COLORS.black}99 0%, ${COLORS.black}DD 100%)`,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 clamp(20px,6%,80px)',
            maxWidth: '900px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '13px',
              letterSpacing: '3px',
              color: COLORS.gold,
              marginBottom: '24px',
              fontFamily: SANS,
              fontWeight: 500,
            }}
          >
            DESDE 1920
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              fontSize: 'clamp(3.5rem,10vw,7rem)',
              fontFamily: SANS,
              fontWeight: 300,
              color: COLORS.snow,
              letterSpacing: '8px',
              marginBottom: '32px',
              lineHeight: 1,
            }}
          >
            MORETTINO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontSize: 'clamp(1rem,2vw,1.2rem)',
              color: COLORS.snow,
              letterSpacing: '1px',
              lineHeight: 1.8,
              marginBottom: '48px',
              fontFamily: SANS,
            }}
          >
            Café artesanal siciliano con más de 100 años de tradición y excelencia
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.gold}50` }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/catalogo?cat=cafe')}
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
            VER CAFÉS
          </motion.button>
        </div>
      </section>

      {/* History Section */}
      <section style={{ padding: 'clamp(100px,14vw,140px) clamp(20px,6%,80px)', background: COLORS.snow }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(60px,10vw,100px)',
              alignItems: 'center',
            }}
            className="historia-grid"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '3px',
                  color: COLORS.gold,
                  marginBottom: '20px',
                  fontFamily: SANS,
                  fontWeight: 600,
                }}
              >
                NUESTRA HISTORIA
              </div>

              <h2
                style={{
                  fontSize: 'clamp(2.5rem,6vw,4rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: COLORS.black,
                  marginBottom: '32px',
                  letterSpacing: '1px',
                  lineHeight: 1.1,
                }}
              >
                Cuatro Generaciones de Pasión
              </h2>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 2,
                  color: '#4A4A4A',
                  marginBottom: '24px',
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                }}
              >
                Desde 1920, la familia Morettino ha dedicado su vida al arte del café. Con sede en Palermo,
                Sicilia, cada generación ha perfeccionado el oficio, combinando métodos tradicionales con
                innovación constante.
              </p>

              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 2,
                  color: '#4A4A4A',
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                }}
              >
                Hoy, Morettino representa la excelencia del café italiano, galardonado internacionalmente
                y reconocido por su calidad excepcional y dedicación artesanal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                background: `linear-gradient(135deg, ${COLORS.snow} 0%, #F5F0E8 100%)`,
                border: `4px solid ${COLORS.gold}`,
                padding: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
              }}
            >
              <img
                src="/images/morettino/morettinologo.webp"
                alt="Morettino"
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: 'clamp(100px,14vw,140px) clamp(20px,6%,80px)', background: '#FAFAFA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2
              style={{
                fontSize: 'clamp(2.5rem,6vw,4rem)',
                fontFamily: SERIF,
                fontWeight: 300,
                fontStyle: 'italic',
                color: COLORS.black,
                marginBottom: '24px',
                letterSpacing: '2px',
              }}
            >
              Nuestros Valores
            </h2>
            <div
              style={{
                width: '100px',
                height: '3px',
                background: COLORS.gold,
                margin: '0 auto',
              }}
            />
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                title: 'Tradición Artesanal',
                desc: 'Más de un siglo perfeccionando el arte del tostado siciliano',
              },
              {
                title: 'Calidad Premium',
                desc: 'Solo los mejores granos de las mejores regiones del mundo',
              },
              {
                title: 'Innovación Constante',
                desc: 'Combinando técnicas tradicionales con tecnología moderna',
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                style={{
                  padding: '40px 30px',
                  background: COLORS.snow,
                  border: `2px solid ${COLORS.gold}`,
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.3rem,2.5vw,1.6rem)',
                    fontFamily: SERIF,
                    fontStyle: 'italic',
                    color: COLORS.gold,
                    marginBottom: '16px',
                  }}
                >
                  {value.title}
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.9,
                    color: '#4A4A4A',
                    fontFamily: SANS,
                    letterSpacing: '0.5px',
                  }}
                >
                  {value.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: 'clamp(100px,14vw,140px) clamp(20px,6%,80px)',
          background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem,6vw,4rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: COLORS.gold,
              marginBottom: '32px',
              letterSpacing: '2px',
            }}
          >
            Explora Nuestros Cafés
          </h2>

          <p
            style={{
              fontSize: '16px',
              color: COLORS.snow,
              lineHeight: 2,
              marginBottom: '48px',
              maxWidth: '600px',
              margin: '0 auto 48px',
              fontFamily: SANS,
              letterSpacing: '0.5px',
            }}
          >
            Descubre nuestra selección de cafés premium artesanales
          </p>

          <motion.button
            whileHover={{ scale: 1.08, boxShadow: `0 15px 40px ${COLORS.gold}50` }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/catalogo?cat=cafe')}
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
            Ver Catálogo de Cafés
          </motion.button>
        </motion.div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 968px) {
          .historia-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </>
  )
}