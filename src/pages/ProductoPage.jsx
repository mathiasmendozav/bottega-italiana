import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProductById, getRelatedProducts } from '../data/allProducts'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

const COLORS = {
  snow: '#FFFCFE',
  gold: '#E2BB00',
  black: '#010001',
  green: '#0C7A2A',
}

export default function ProductoPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)

  // If product not found
  if (!product) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: '#F5F0E8',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontFamily: SERIF,
              fontStyle: 'italic',
              color: COLORS.black,
              marginBottom: '20px',
            }}
          >
            Producto no encontrado
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4A4A4A', marginBottom: '32px', fontFamily: SANS }}>
            El producto que buscas no existe o ha sido eliminado.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/catalogo')}
            style={{
              background: COLORS.gold,
              border: `3px solid ${COLORS.gold}`,
              color: COLORS.black,
              padding: '16px 40px',
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontFamily: SANS,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Ver Catálogo
          </motion.button>
        </div>
      </div>
    )
  }

  const isKottabos = product.brand === 'kottabos'
  const relatedProducts = getRelatedProducts(product.id, 3)

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          padding: 'clamp(140px,18vw,180px) clamp(20px,6%,80px) clamp(80px,12vw,120px)',
          background: isKottabos ? COLORS.black : '#F5F0E8',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(60px,10vw,120px)',
              alignItems: 'center',
            }}
            className="product-grid"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '60px',
                background: isKottabos ? `${COLORS.gold}10` : '#ffffff',
                border: `3px solid ${COLORS.gold}`,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.15))',
                }}
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Brand Badge */}
              <div
                style={{
                  display: 'inline-block',
                  background: COLORS.gold,
                  color: COLORS.black,
                  padding: '8px 16px',
                  fontSize: '11px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: SANS,
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                {isKottabos ? 'CERVEZA' : 'CAFÉ'}
              </div>

              {/* Code/Style */}
              {(product.code || product.style) && (
                <div
                  style={{
                    fontSize: '12px',
                    letterSpacing: '2px',
                    color: COLORS.gold,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
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
              <h1
                style={{
                  fontSize: 'clamp(2.5rem,6vw,4.5rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: isKottabos ? COLORS.snow : COLORS.black,
                  marginBottom: '24px',
                  letterSpacing: '1px',
                  lineHeight: 1.1,
                }}
              >
                {product.name}
              </h1>

              {/* Beer Specs */}
              {isKottabos && (product.abv || product.ibu) && (
                <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                  {product.abv && (
                    <div
                      style={{
                        padding: '8px 16px',
                        border: `2px solid ${COLORS.gold}`,
                        fontSize: '12px',
                        letterSpacing: '1px',
                        color: COLORS.gold,
                        fontFamily: SANS,
                        fontWeight: 600,
                      }}
                    >
                      ABV {product.abv}
                    </div>
                  )}
                  {product.ibu && (
                    <div
                      style={{
                        padding: '8px 16px',
                        border: `2px solid ${COLORS.gold}`,
                        fontSize: '12px',
                        letterSpacing: '1px',
                        color: COLORS.gold,
                        fontFamily: SANS,
                        fontWeight: 600,
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
                    fontSize: '17px',
                    lineHeight: 2,
                    color: isKottabos ? `${COLORS.snow}DD` : '#4A4A4A',
                    marginBottom: '32px',
                    fontFamily: SANS,
                    letterSpacing: '0.5px',
                  }}
                >
                  {product.description}
                </p>
              )}

              {/* Characteristics - SAFE CHECK */}
              {product.characteristics && typeof product.characteristics === 'object' && Object.keys(product.characteristics).length > 0 && (
                <div
                  style={{
                    background: isKottabos ? `${COLORS.gold}10` : '#F5F0E8',
                    padding: '32px',
                    border: `2px solid ${COLORS.gold}`,
                    marginBottom: '32px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '14px',
                      letterSpacing: '2px',
                      color: COLORS.gold,
                      textTransform: 'uppercase',
                      marginBottom: '20px',
                      fontFamily: SANS,
                      fontWeight: 600,
                    }}
                  >
                    Características
                  </h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {Object.entries(product.characteristics).map(([key, value]) => (
                      <div
                        key={key}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          paddingBottom: '12px',
                          borderBottom: `1px solid ${isKottabos ? `${COLORS.gold}30` : '#ddd'}`,
                        }}
                      >
                        <span
                          style={{
                            fontSize: '14px',
                            color: isKottabos ? `${COLORS.snow}99` : '#666',
                            fontFamily: SANS,
                            fontWeight: 500,
                          }}
                        >
                          {key}
                        </span>
                        <span
                          style={{
                            fontSize: '14px',
                            color: isKottabos ? COLORS.snow : COLORS.black,
                            fontFamily: SANS,
                            fontWeight: 600,
                          }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {product.notes && (
                <div
                  style={{
                    background: `${COLORS.gold}15`,
                    padding: '24px',
                    border: `2px solid ${COLORS.gold}`,
                    marginBottom: '32px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.9,
                      color: isKottabos ? COLORS.snow : '#4A4A4A',
                      fontFamily: SANS,
                      letterSpacing: '0.5px',
                      margin: 0,
                    }}
                  >
                    <strong style={{ color: COLORS.gold }}>✦</strong> {product.notes}
                  </p>
                </div>
              )}

              {/* Pairing (for beer) */}
              {product.pairing && (
                <div
                  style={{
                    background: `${COLORS.gold}10`,
                    padding: '24px',
                    border: `2px solid ${COLORS.gold}`,
                    marginBottom: '32px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '13px',
                      letterSpacing: '2px',
                      color: COLORS.gold,
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                      fontFamily: SANS,
                      fontWeight: 600,
                    }}
                  >
                    Maridaje
                  </h4>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.9,
                      color: isKottabos ? COLORS.snow : '#4A4A4A',
                      fontFamily: SANS,
                      letterSpacing: '0.5px',
                      margin: 0,
                    }}
                  >
                    {product.pairing}
                  </p>
                </div>
              )}

              {/* WhatsApp CTA */}
              <motion.a
                href="https://wa.me/59178594506"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${COLORS.green}66` }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  background: COLORS.green,
                  color: COLORS.snow,
                  padding: '18px 40px',
                  fontSize: '13px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: SANS,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                📱 Consultar por WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section style={{ padding: 'clamp(80px,12vw,120px) clamp(20px,6%,80px)', background: '#F5F0E8' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2
                style={{
                  fontSize: 'clamp(2rem,5vw,3.5rem)',
                  fontFamily: SERIF,
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: COLORS.black,
                  marginBottom: '16px',
                  letterSpacing: '1px',
                }}
              >
                Productos Relacionados
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
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: '40px',
              }}
            >
              {relatedProducts.map((relProduct, i) => (
                <ProductCard key={relProduct.id} product={relProduct} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <style>{`
        @media (max-width: 968px) {
          .product-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </>
  )
}