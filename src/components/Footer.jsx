import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  gold: '#E2BB00',
  black: '#010001',
  snow: '#FFFCFE',
  green: '#0C7A2A',
}

function FleurDeLis({ size = 16, color = COLORS.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2M7 7C6 7 5 8 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 8 8 7 7 7M17 7C16 7 15 8 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 8 18 7 17 7M12 8C10 8 9 10 9 12C9 13 9 14 8 14C7 14 7 13 7 12C7 11 7 9 8 8C7 8 6 9 6 10C6 12 7 13 8 14C9 15 10 15 11 15L11 20C11 21 11 22 12 22C13 22 13 21 13 20L13 15C14 15 15 15 16 14C17 13 18 12 18 10C18 9 17 8 16 8C17 9 17 11 17 12C17 13 17 14 16 14C15 14 15 13 15 12C15 10 14 8 12 8Z" />
    </svg>
  )
}

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer
      style={{
        background: `linear-gradient(135deg, ${COLORS.black} 0%, #1A1A1A 100%)`,
        color: COLORS.snow,
        padding: 'clamp(80px,12vw,120px) clamp(20px,6%,80px)',
        marginTop: 'clamp(60px,10vw,100px)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '60px',
            marginBottom: '80px',
          }}
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '24px',
            }}
          >
            <motion.div
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
              }}
            >
              <img
                src="/images/bottega/logo.png"
                alt="Bottega Italiana"
                style={{
                  height: '80px',
                  width: '80px',
                  borderRadius: '50%',
                  boxShadow: `0 8px 24px ${COLORS.gold}40`,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    letterSpacing: '2px',
                    fontWeight: 600,
                    color: COLORS.gold,
                    textTransform: 'uppercase',
                    fontFamily: SANS,
                  }}
                >
                  Bottega
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    letterSpacing: '2px',
                    fontWeight: 600,
                    color: COLORS.gold,
                    textTransform: 'uppercase',
                    fontFamily: SANS,
                  }}
                >
                  Italiana
                </div>
              </div>
            </motion.div>

            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: `${COLORS.snow}B3`,
                fontFamily: SANS,
                letterSpacing: '0.5px',
              }}
            >
              Productos italianos premium importados desde Sicilia
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <h3
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: COLORS.gold,
                textTransform: 'uppercase',
                fontFamily: SANS,
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Navegación
            </h3>
            {[
              { label: 'Inicio', path: '/' },
              { label: 'Catálogo', path: '/catalogo' },
              { label: 'Morettino', path: '/morettino' },
              { label: 'Kottabos', path: '/kottabos' },
              { label: 'Historia', path: '/historia' },
            ].map((link) => (
              <motion.button
                key={link.path}
                onClick={() => navigate(link.path)}
                whileHover={{ x: 5, color: COLORS.gold }}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  color: `${COLORS.snow}B3`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: SANS,
                  letterSpacing: '0.5px',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <h3
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: COLORS.gold,
                textTransform: 'uppercase',
                fontFamily: SANS,
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Marcas
            </h3>
            <div
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <img
                src="/images/morettino/morettinologo.webp"
                alt="Morettino"
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <img
                src="/images/kottabos/kottabos-logo.jpg"
                alt="Kottabos"
                style={{
                  height: '40px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(1.1)',
                }}
              />
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <h3
              style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: COLORS.gold,
                textTransform: 'uppercase',
                fontFamily: SANS,
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Contacto
            </h3>
            <motion.a
              href="https://wa.me/59178594506"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 5 }}
              style={{
                background: COLORS.green,
                color: COLORS.snow,
                padding: '12px 16px',
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: SANS,
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              📱 WhatsApp
            </motion.a>
          </motion.div>
        </div>

        {/* Italian Flag Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            marginBottom: '40px',
          }}
        >
          {['#0C7A2A', '#FFFCFE', '#AB0502'].map((color, i) => (
            <div
              key={i}
              style={{
                width: '60px',
                height: '3px',
                background: color,
              }}
            />
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            paddingTop: '40px',
            borderTop: `1px solid ${COLORS.gold}33`,
          }}
        >
          <FleurDeLis size={20} />

          <p
            style={{
              fontSize: '12px',
              color: `${COLORS.snow}99`,
              marginTop: '24px',
              letterSpacing: '0.5px',
              fontFamily: SANS,
              lineHeight: '1.8',
            }}
          >
            © 2024 Bottega Italiana. Todos los derechos reservados.
            <br />
            Santa Cruz de la Sierra, Bolivia
          </p>

          <p
            style={{
              fontSize: '11px',
              color: `${COLORS.snow}66`,
              marginTop: '16px',
              letterSpacing: '0.5px',
              fontFamily: SANS,
            }}
          >
            Importadora Oficial de Morettino y Kottabos
          </p>
        </motion.div>
      </div>
    </footer>
  )
}