import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  snow: '#FFFCFE',
  gold: '#E2BB00',
  black: '#010001',
}

export default function ProductCard({ product, index = 0 }) {
  const navigate = useNavigate()
  
  if (!product || !product.id) {
    return null
  }

  const isKottabos = product.brand === 'kottabos'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/producto/${product.id}`)}
      style={{
        background: isKottabos ? COLORS.black : COLORS.snow,
        padding: 'clamp(24px,4vw,32px)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '580px',
        border: `2px solid ${COLORS.gold}`,
      }}
    >
      {/* Brand Badge */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          background: COLORS.gold,
          color: COLORS.black,
          padding: '6px 12px',
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: SANS,
          fontWeight: 600,
          zIndex: 2,
        }}
      >
        {isKottabos ? 'CERVEZA' : 'CAFÉ'}
      </div>

      {/* Radial glow effect */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '240px',
          height: '240px',
          background: `radial-gradient(circle, ${COLORS.gold}40 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Image Container */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          ...(isKottabos && { rotateY: [0, 8, 0, -8, 0] }),
        }}
        transition={{
          duration: isKottabos ? 6 : 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
        style={{
          position: 'relative',
          height: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          zIndex: 1,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
          }}
        />
      </motion.div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Code/Style */}
        {(product.code || product.style) && (
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: COLORS.gold,
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 500,
            }}
          >
            {product.code ? `Cód. ${product.code}` : product.style}
            {product.weight && ` · ${product.weight}`}
            {product.volume && ` · ${product.volume}`}
          </div>
        )}

        {/* Name */}
        <h3
          style={{
            fontSize: 'clamp(1.3rem,2.8vw,1.6rem)',
            fontFamily: SERIF,
            fontWeight: 300,
            fontStyle: 'italic',
            color: isKottabos ? COLORS.snow : COLORS.black,
            letterSpacing: '0.5px',
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>

        {/* Beer specs */}
        {isKottabos && (product.abv || product.ibu) && (
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {product.abv && (
              <div
                style={{
                  padding: '4px 10px',
                  border: `1px solid ${COLORS.gold}50`,
                  fontSize: '11px',
                  letterSpacing: '1px',
                  color: COLORS.gold,
                  fontFamily: SANS,
                  fontWeight: 500,
                }}
              >
                ABV {product.abv}
              </div>
            )}
            {product.ibu && (
              <div
                style={{
                  padding: '4px 10px',
                  border: `1px solid ${COLORS.gold}50`,
                  fontSize: '11px',
                  letterSpacing: '1px',
                  color: COLORS.gold,
                  fontFamily: SANS,
                  fontWeight: 500,
                }}
              >
                IBU {product.ibu}
              </div>
            )}
          </div>
        )}

        {/* Description */}
        {product.description && (
          <p
            style={{
              fontSize: '14px',
              lineHeight: 1.8,
              color: isKottabos ? `${COLORS.snow}B3` : '#4A4A4A',
              fontFamily: SANS,
              letterSpacing: '0.3px',
              minHeight: '50px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.description}
          </p>
        )}

        {/* CTA Button */}
        <motion.div
          whileHover={{ x: 5 }}
          style={{
            fontSize: '12px',
            letterSpacing: '2px',
            color: COLORS.gold,
            textTransform: 'uppercase',
            fontFamily: SANS,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '8px',
          }}
        >
          Ver Detalles
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}