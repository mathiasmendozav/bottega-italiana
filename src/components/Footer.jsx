import { Link } from 'react-router-dom'

const SANS = '"Jost", sans-serif'
const WA_LINK = 'https://wa.me/59178594506'

function WaIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function FleurDeLis({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#C89B3C">
      <path d="M12 2C11 2 10 3 10 4C10 5 11 6 12 6C13 6 14 5 14 4C14 3 13 2 12 2M7 7C6 7 5 8 5 9C5 10 6 11 7 11C8 11 9 10 9 9C9 8 8 7 7 7M17 7C16 7 15 8 15 9C15 10 16 11 17 11C18 11 19 10 19 9C19 8 18 7 17 7M12 8C10 8 9 10 9 12C9 13 9 14 8 14C7 14 7 13 7 12C7 11 7 9 8 8C7 8 6 9 6 10C6 12 7 13 8 14C9 15 10 15 11 15L11 20C11 21 11 22 12 22C13 22 13 21 13 20L13 15C14 15 15 15 16 14C17 13 18 12 18 10C18 9 17 8 16 8C17 9 17 11 17 12C17 13 17 14 16 14C15 14 15 13 15 12C15 10 14 8 12 8Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#2A1810',
        color: '#F5F0E8',
        padding: 'clamp(70px,10vw,100px) clamp(20px,6%,80px) clamp(40px,6vw,60px)',
        borderTop: '2px solid #C89B3C',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(50px,7vw,70px)',
            marginBottom: 'clamp(50px,8vw,70px)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
              <div style={{ width: '54px', height: '54px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #C89B3C', background: '#fff' }}>
                <img src="/images/bottega/BottegaItalianaLogo.jpeg" alt="Bottega Italiana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontFamily: SANS, fontWeight: 400, color: '#C89B3C', letterSpacing: '2px', textTransform: 'uppercase' }}>Bottega Italiana</div>
                <div style={{ fontSize: '10px', letterSpacing: '2px', color: '#F5F0E8', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 400 }}>Import · Export</div>
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}><FleurDeLis size={18} /></div>
            <p style={{ fontSize: '14px', lineHeight: 2, color: 'rgba(245,240,232,0.75)', marginBottom: '28px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px' }}>Importamos productos premium italianos a Bolivia. Café artesanal Morettino y cervezas Kottabos desde Sicilia.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(37,211,102,0.12)', border: '2px solid rgba(37,211,102,0.4)', color: '#25D366', padding: '12px 22px', textDecoration: 'none', fontSize: '12px', fontFamily: SANS, fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', transition: 'all 0.3s ease' }}><WaIcon size={16} />WhatsApp</a>
          </div>

          <div>
            <div style={{ fontSize: '12px', letterSpacing: '3px', color: '#C89B3C', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 500, marginBottom: '24px' }}>Productos</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/morettino" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Café Morettino</Link>
              <Link to="/kottabos" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Cervezas Kottabos</Link>
              <Link to="/catalogo?cat=cafe" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Todo el Café</Link>
              <Link to="/catalogo?cat=cerveza" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Todas las Cervezas</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', letterSpacing: '3px', color: '#C89B3C', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 500, marginBottom: '24px' }}>Navegación</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link to="/" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Inicio</Link>
              <Link to="/catalogo" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Catálogo</Link>
              <Link to="/historia" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Historia</Link>
              <Link to="/morettino" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Morettino</Link>
              <Link to="/kottabos" style={{ color: 'rgba(245,240,232,0.75)', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>Kottabos</Link>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', letterSpacing: '3px', color: '#C89B3C', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 500, marginBottom: '24px' }}>Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ color: 'rgba(245,240,232,0.75)', fontSize: '14px', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px' }}>
                <div style={{ marginBottom: '10px', color: '#C89B3C', fontSize: '13px', letterSpacing: '2px' }}>Johanna Vargas</div>
                <div style={{ marginBottom: '6px' }}>Santa Cruz de la Sierra</div>
                <div>Bolivia</div>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontSize: '14px', fontFamily: SANS, fontWeight: 500, letterSpacing: '0.5px', transition: 'color 0.3s ease' }}>+591 78594506</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: 'clamp(35px,6vw,50px)' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(200,155,60,0.3)' }} />
          <FleurDeLis size={18} />
          <div style={{ flex: 1, height: '1px', background: 'rgba(200,155,60,0.3)' }} />
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '28px' }}>
          <div style={{ fontSize: '12px', color: 'rgba(245,240,232,0.5)', fontFamily: SANS, fontWeight: 400, letterSpacing: '0.5px' }}>
            <div style={{ marginBottom: '8px' }}>© {new Date().getFullYear()} Bottega Italiana Bolivia</div>
            <div style={{ fontSize: '11px' }}>Importación de Productos Italianos Premium</div>
          </div>
          <div style={{ display: 'flex', gap: '3px' }}>
            <div style={{ width: '30px', height: '20px', background: '#009246' }} />
            <div style={{ width: '30px', height: '20px', background: '#fff' }} />
            <div style={{ width: '30px', height: '20px', background: '#CE2B37' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid #d6c1ab50' }}><span style={{ fontSize: '11px', letterSpacing: '2px', color: '#d6c1ab', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 400 }}>Morettino</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid #e2bb0050' }}><span style={{ fontSize: '11px', letterSpacing: '2px', color: '#e2bb00', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 400 }}>Kottabos</span></div>
          </div>
        </div>
      </div>
    </footer>
  )
}