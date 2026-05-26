import { Link } from 'react-router-dom'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  snow: '#FFFCFE',
  inferno: '#AB0502',
  green: '#0C7A2A',
  black: '#010001',
  gold: '#E2BB00',
}

function FleurDeLis({ size = 20, color = COLORS.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2M7 7C6 7 5 8 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 8 8 7 7 7M17 7C16 7 15 8 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 8 18 7 17 7M12 8C10 8 9 10 9 12C9 13 9 14 8 14C7 14 7 13 7 12C7 11 7 9 8 8C7 8 6 9 6 10C6 12 7 13 8 14C9 15 10 15 11 15L11 20C11 21 11 22 12 22C13 22 13 21 13 20L13 15C14 15 15 15 16 14C17 13 18 12 18 10C18 9 17 8 16 8C17 9 17 11 17 12C17 13 17 14 16 14C15 14 15 13 15 12C15 10 14 8 12 8Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: `linear-gradient(180deg, ${COLORS.black} 0%, #0A0A0A 100%)`,
        color: COLORS.snow,
        padding: 'clamp(60px,10vw,80px) 0 40px',
      }}
    >
      {/* Italian Flag Divider */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '6px',
          marginBottom: '60px',
        }}
      >
        {[COLORS.green, COLORS.snow, COLORS.inferno].map((color, i) => (
          <div
            key={i}
            style={{
              width: '80px',
              height: '4px',
              background: color,
            }}
          />
        ))}
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(20px,6%,80px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(40px,6vw,60px)',
            marginBottom: '60px',
          }}
        >
          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <img
                src="/images/bottega/logo.png"
                alt="Bottega Italiana"
                style={{
                  height: '80px',
                  width: '80px',
                  borderRadius: '50%',
                  marginBottom: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              />
            </Link>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: COLORS.gold,
                marginBottom: '16px',
                letterSpacing: '0.5px',
              }}
            >
              Premium Quality
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <FleurDeLis size={16} />
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: '12px',
                  letterSpacing: '1px',
                  color: `${COLORS.snow}B3`,
                }}
              >
                Import · Export
              </span>
            </div>
            <a
              href="https://wa.me/59178594506"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: COLORS.green,
                color: COLORS.snow,
                padding: '10px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontFamily: SANS,
                fontSize: '12px',
                letterSpacing: '1px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = `0 6px 20px ${COLORS.green}66`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              📱 WhatsApp
            </a>
          </div>

          {/* Products */}
          <div>
            <h4
              style={{
                fontFamily: SANS,
                fontSize: '13px',
                letterSpacing: '3px',
                color: COLORS.gold,
                marginBottom: '24px',
                fontWeight: 600,
              }}
            >
              PRODUCTOS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link
                to="/catalogo?cat=cafe"
                style={{
                  fontFamily: SANS,
                  fontSize: '14px',
                  color: `${COLORS.snow}CC`,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.gold
                  e.currentTarget.style.paddingLeft = '8px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = `${COLORS.snow}CC`
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                Café Morettino
              </Link>
              <Link
                to="/catalogo?cat=cerveza"
                style={{
                  fontFamily: SANS,
                  fontSize: '14px',
                  color: `${COLORS.snow}CC`,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = COLORS.gold
                  e.currentTarget.style.paddingLeft = '8px'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = `${COLORS.snow}CC`
                  e.currentTarget.style.paddingLeft = '0'
                }}
              >
                Cervezas Kottabos
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: SANS,
                fontSize: '13px',
                letterSpacing: '3px',
                color: COLORS.gold,
                marginBottom: '24px',
                fontWeight: 600,
              }}
            >
              NAVEGACIÓN
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { to: '/', label: 'Inicio' },
                { to: '/catalogo', label: 'Catálogo' },
                { to: '/historia', label: 'Nuestra Historia' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: SANS,
                    fontSize: '14px',
                    color: `${COLORS.snow}CC`,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.gold
                    e.currentTarget.style.paddingLeft = '8px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = `${COLORS.snow}CC`
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: SANS,
                fontSize: '13px',
                letterSpacing: '3px',
                color: COLORS.gold,
                marginBottom: '24px',
                fontWeight: 600,
              }}
            >
              CONTACTO
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: '13px',
                    color: `${COLORS.snow}99`,
                    marginBottom: '6px',
                    letterSpacing: '1px',
                  }}
                >
                  Ubicación
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: '14px',
                    color: COLORS.snow,
                    letterSpacing: '0.5px',
                  }}
                >
                  Santa Cruz de la Sierra, Bolivia
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: '13px',
                    color: `${COLORS.snow}99`,
                    marginBottom: '6px',
                    letterSpacing: '1px',
                  }}
                >
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/59178594506"
                  style={{
                    fontFamily: SANS,
                    fontSize: '14px',
                    color: COLORS.gold,
                    textDecoration: 'none',
                    letterSpacing: '0.5px',
                  }}
                >
                  +591 78594506
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            marginBottom: '40px',
            padding: '40px 0',
            borderTop: `1px solid ${COLORS.gold}40`,
            borderBottom: `1px solid ${COLORS.gold}40`,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: COLORS.gold,
                marginBottom: '8px',
              }}
            >
              Morettino
            </div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: '11px',
                color: `${COLORS.snow}99`,
                letterSpacing: '1px',
              }}
            >
              Desde 1920
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: COLORS.gold,
                marginBottom: '8px',
              }}
            >
              Kottabos
            </div>
            <div
              style={{
                fontFamily: SANS,
                fontSize: '11px',
                color: `${COLORS.snow}99`,
                letterSpacing: '1px',
              }}
            >
              Cerveza Artesanal
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <FleurDeLis size={18} />
          </div>
          <div
            style={{
              fontFamily: SANS,
              fontSize: '12px',
              color: `${COLORS.snow}80`,
              letterSpacing: '1px',
            }}
          >
            © {new Date().getFullYear()} Bottega Italiana. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}