import { useParams, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { getProductById, getRelatedProducts } from '../data/allProducts'
import ProductCard from '../components/ProductCard'
import ImgBox from '../components/ImgBox'
import Footer from '../components/Footer'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'
const WA_LINK = 'https://wa.me/59178594506'

function BottleAnimation({ src, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative', height: '100%' }}
    >
      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          inset: '-20%',
          background: 'radial-gradient(circle, rgba(200,155,60,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Floating bottle */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotateY: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImgBox
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
          }}
        />
      </motion.div>

      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeOut',
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#C89B3C',
            top: '50%',
            left: '50%',
          }}
        />
      ))}
    </motion.div>
  )
}

export default function ProductoPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const specsRef = useRef()
  const specsInView = useInView(specsRef, { once: true, margin: '-100px' })
  
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id, 3)

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px', background: '#F8F5EE' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: SANS, color: '#111', marginBottom: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>Producto no encontrado</h2>
          <button onClick={() => navigate('/catalogo')} style={{ background: '#C89B3C', color: '#111', padding: '14px 32px', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 500, cursor: 'pointer', border: 'none', borderRadius: '0' }}>Ver Catálogo</button>
        </div>
      </div>
    )
  }

  const isBeer = product.brand === 'kottabos'
  const brandColor = isBeer ? '#C89B3C' : '#d6c1ab'
  const bgColor = isBeer ? '#111111' : '#F8F5EE'
  const textColor = isBeer ? '#E9DFC8' : '#1a1410'

  return (
    <>
      <div style={{ paddingTop: '85px', minHeight: '100vh', background: bgColor }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: 'clamp(40px,7vw,80px) clamp(20px,6%,80px)' }}>
          
          {/* Back button */}
          <button 
            onClick={() => navigate(-1)} 
            style={{ 
              background: 'transparent', 
              border: `1px solid ${brandColor}40`, 
              color: textColor, 
              fontSize: '13px', 
              fontFamily: SANS, 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              cursor: 'pointer', 
              marginBottom: '40px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${brandColor}15`
              e.currentTarget.style.borderColor = brandColor
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = `${brandColor}40`
            }}
          >
            ← Volver
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(50px,8vw,100px)', alignItems: 'start' }} className="product-detail-grid">
            
            {/* Left: Image with animation */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }} 
              style={{ position: 'sticky', top: '120px' }}
            >
              <div style={{ 
                background: isBeer ? 'linear-gradient(135deg, #1a1410 0%, #0a0805 100%)' : '#fff', 
                padding: 'clamp(40px,6vw,60px)', 
                border: `1px solid ${brandColor}20`,
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {isBeer ? (
                  <BottleAnimation src={product.image} alt={product.name} />
                ) : (
                  <ImgBox src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '500px' }} />
                )}
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Brand badge */}
              <div style={{ display: 'inline-block', padding: '8px 16px', background: `${brandColor}15`, border: `1px solid ${brandColor}40`, marginBottom: '20px' }}>
                <span style={{ fontSize: '11px', letterSpacing: '2px', color: brandColor, textTransform: 'uppercase', fontFamily: SANS, fontWeight: 500 }}>
                  {isBeer ? 'Cerveza Kottabos' : 'Café Morettino'}
                </span>
              </div>

              {product.code && product.weight && (
                <div style={{ fontSize: '13px', letterSpacing: '2px', color: `${textColor}80`, textTransform: 'uppercase', marginBottom: '12px', fontFamily: SANS, fontWeight: 400 }}>
                  {product.code} · {product.weight}
                </div>
              )}

              <h1 style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', fontFamily: SANS, fontWeight: 400, color: textColor, marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1.1 }}>
                {product.name}
              </h1>

              <div style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', fontFamily: SERIF, fontStyle: 'italic', color: brandColor, marginBottom: '32px' }}>
                {product.subtitle}
              </div>

              <p style={{ fontSize: '16px', lineHeight: 1.9, color: `${textColor}cc`, marginBottom: '32px', fontFamily: SANS, letterSpacing: '0.5px' }}>
                {product.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
                {product.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '11px', letterSpacing: '2px', color: textColor, textTransform: 'uppercase', padding: '8px 16px', border: `1px solid ${brandColor}30`, background: `${brandColor}10`, fontFamily: SANS, fontWeight: 400 }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Characteristics */}
              {product.characteristics && (
                <div style={{ background: isBeer ? 'rgba(200,155,60,0.05)' : '#fff', padding: '28px', border: `1px solid ${brandColor}20`, marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: SANS, fontWeight: 400, color: textColor, marginBottom: '20px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Características
                  </h3>
                  <div style={{ display: 'grid', gap: '14px' }}>
                    {Object.entries(product.characteristics).map(([key, value]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px solid ${brandColor}15`, paddingBottom: '10px' }}>
                        <span style={{ fontSize: '13px', color: `${textColor}99`, textTransform: 'capitalize', fontFamily: SANS, letterSpacing: '0.5px' }}>{key}</span>
                        <span style={{ fontSize: '13px', color: textColor, fontFamily: SANS, fontWeight: 500, letterSpacing: '0.5px' }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pairing */}
              {product.pairing && (
                <div style={{ background: `${brandColor}08`, padding: '28px', border: `1px solid ${brandColor}30`, marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: SANS, fontWeight: 400, color: textColor, marginBottom: '16px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    {product.pairing.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {product.pairing.items.map(item => (
                      <span key={item} style={{ fontSize: '12px', color: textColor, padding: '6px 12px', background: isBeer ? 'rgba(200,155,60,0.15)' : '#fff', border: `1px solid ${brandColor}40`, fontFamily: SANS, letterSpacing: '0.5px' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp CTA */}
              <motion.a
                href={`${WA_LINK}?text=Hola! Me interesa ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: '#25D366',
                  color: '#fff',
                  padding: '18px 42px',
                  fontSize: '13px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontFamily: SANS,
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '0',
                  border: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Consultar por WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* Specs image section (solo para Kottabos) */}
          {isBeer && product.imageSpecs && (
            <motion.div
              ref={specsRef}
              initial={{ opacity: 0, y: 40 }}
              animate={specsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{ marginTop: 'clamp(80px,11vw,140px)' }}
            >
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontFamily: SANS, fontWeight: 400, color: textColor, marginBottom: '40px', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center' }}>
                Especificaciones Técnicas
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto', border: `1px solid ${brandColor}20`, overflow: 'hidden' }}>
                <ImgBox src={product.imageSpecs} alt={`${product.name} Specs`} style={{ width: '100%', height: 'auto' }} />
              </div>
            </motion.div>
          )}

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: 'clamp(80px,11vw,140px)' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontFamily: SANS, fontWeight: 400, color: textColor, marginBottom: '40px', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center' }}>
                También te puede interesar
              </h2>
              <div className="grid-3">
                {relatedProducts.map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <style>{`@media (max-width: 768px) { .product-detail-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}