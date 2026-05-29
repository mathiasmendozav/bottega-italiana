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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/producto/${product.id}`)}
      style={{
        background: isKottabos ? COLORS.black : '#ffffff',
        padding: 'clamp(20px,3vw,28px)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '620px',
        border: `2px solid ${COLORS.gold}`,
      }}
    >
      {/* Brand Badge */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: COLORS.gold,
          color: COLORS.black,
          padding: '5px 10px',
          fontSize: '9px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: SANS,
          fontWeight: 600,
          zIndex: 3,
        }}
      >
        {isKottabos ? 'CERVEZA' : 'CAFÉ'}
      </div>

      {/* Subtle background glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '280px',
          height: '280px',
          background: `radial-gradient(circle, ${COLORS.gold} 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Image Container - NORMALIZED SIZE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
        style={{
          position: 'relative',
          height: '380px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          zIndex: 2,
          background: isKottabos ? `${COLORS.gold}05` : '#f8f8f8',
          borderBottom: `1px solid ${COLORS.gold}33`,
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            maxWidth: '280px',
            maxHeight: '340px',
            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
          }}
        />
      </motion.div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Code/Style */}
        {(product.code || product.style) && (
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '1.5px',
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
            fontSize: 'clamp(1.15rem,2.5vw,1.45rem)',
            fontFamily: SERIF,
            fontWeight: 300,
            fontStyle: 'italic',
            color: isKottabos ? COLORS.snow : COLORS.black,
            letterSpacing: '0.3px',
            lineHeight: 1.2,
            margin: '4px 0 0 0',
          }}
        >
          {product.name}
        </h3>

        {/* Beer specs */}
        {isKottabos && (product.abv || product.ibu) && (
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
            {product.abv && (
              <div
                style={{
                  padding: '3px 8px',
                  border: `1px solid ${COLORS.gold}50`,
                  fontSize: '9px',
                  letterSpacing: '0.5px',
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
                  padding: '3px 8px',
                  border: `1px solid ${COLORS.gold}50`,
                  fontSize: '9px',
                  letterSpacing: '0.5px',
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
              fontSize: '13px',
              lineHeight: 1.6,
              color: isKottabos ? `${COLORS.snow}99` : '#666',
              fontFamily: SANS,
              letterSpacing: '0.2px',
              minHeight: '40px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              marginTop: '8px',
            }}
          >
            {product.description}
          </p>
        )}

        {/* CTA Button */}
        <motion.div
          whileHover={{ x: 3 }}
          style={{
            fontSize: '11px',
            letterSpacing: '1.5px',
            color: COLORS.gold,
            textTransform: 'uppercase',
            fontFamily: SANS,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '12px',
            paddingTop: '12px',
            borderTop: `1px solid ${COLORS.gold}33`,
          }}
        >
          Detalles
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  )
}