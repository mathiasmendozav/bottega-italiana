import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { getAllProducts, filterByCategory } from '../data/allProducts'

const SANS = '"Jost", sans-serif'
const SERIF = '"Cormorant Garamond", serif'

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeFilter, setActiveFilter] = useState('todo')

  const allProducts = getAllProducts()

  useEffect(() => {
    const cat = searchParams.get('cat')
    if (cat === 'cafe') setActiveFilter('cafe')
    else if (cat === 'cerveza') setActiveFilter('cerveza')
    else setActiveFilter('todo')
  }, [searchParams])

  const filteredProducts =
    activeFilter === 'todo' ? allProducts : filterByCategory(allProducts, activeFilter)

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    if (filter === 'todo') {
      setSearchParams({})
    } else {
      setSearchParams({ cat: filter })
    }
  }

  const filters = [
    { id: 'todo', label: 'Todo', count: allProducts.length },
    { id: 'cafe', label: 'Café', count: filterByCategory(allProducts, 'cafe').length },
    { id: 'cerveza', label: 'Cerveza', count: filterByCategory(allProducts, 'cerveza').length },
  ]

  return (
    <>
      <style>{`
        .catalog-filters {
          position: sticky;
          top: 85px;
          z-index: 50;
          background: #F5F0E8;
          padding: clamp(20px, 4vw, 32px) clamp(20px, 6%, 80px);
          border-bottom: 2px solid #C89B3C;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .filter-btn {
          background: transparent;
          border: 2px solid #C89B3C;
          color: #2A1810;
          padding: 12px 24px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: ${SANS};
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .filter-btn.active {
          background: #C89B3C;
          color: #fff;
        }
        .filter-btn:hover:not(.active) {
          background: rgba(200,155,60,0.1);
        }
        .filter-badge {
          background: rgba(255,255,255,0.3);
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
        }
        .filter-btn.active .filter-badge {
          background: rgba(255,255,255,0.2);
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .catalog-filters {
            padding: 16px 20px;
            top: 85px;
          }
          .filter-btn {
            padding: 10px 16px;
            font-size: 11px;
            letter-spacing: 1.5px;
            flex: 1;
            justify-content: center;
          }
          .filter-badge {
            padding: 2px 6px;
            font-size: 10px;
          }
        }
        
        @media (max-width: 480px) {
          .catalog-filters {
            padding: 12px 16px;
          }
          .filter-btn {
            padding: 8px 12px;
            font-size: 10px;
            letter-spacing: 1px;
            gap: 6px;
          }
        }
      `}</style>

      {/* Hero */}
      <section
        style={{
          minHeight: '50vh',
          background: 'linear-gradient(135deg, #2A1810 0%, #3D2A1F 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(120px,15vw,140px) clamp(20px,6%,80px) clamp(60px,8vw,80px)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem,7vw,5rem)',
              fontFamily: SERIF,
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#C89B3C',
              letterSpacing: '3px',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            Nuestro Catálogo
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              width: '100px',
              height: '3px',
              background: '#C89B3C',
              margin: '0 auto 32px',
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: 'clamp(0.95rem,1.8vw,1.1rem)',
              color: 'rgba(245,240,232,0.85)',
              letterSpacing: '0.5px',
              lineHeight: 1.9,
              fontFamily: SANS,
            }}
          >
            Café artesanal Morettino y cervezas Kottabos desde Sicilia
          </motion.p>
        </div>
      </section>

      {/* Compact Filters */}
      <div className="catalog-filters">
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            gap: 'clamp(12px, 2vw, 16px)',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            >
              <span>{filter.label}</span>
              <span className="filter-badge">{filter.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section style={{ padding: 'clamp(60px,10vw,100px) clamp(20px,6%,80px)', background: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              marginBottom: 'clamp(40px,7vw,60px)',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.3rem,3vw,1.8rem)',
                fontFamily: SERIF,
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#2A1810',
                letterSpacing: '1px',
                marginBottom: '12px',
              }}
            >
              {activeFilter === 'todo' && 'Todos los Productos'}
              {activeFilter === 'cafe' && 'Café Morettino'}
              {activeFilter === 'cerveza' && 'Cervezas Kottabos'}
            </h2>
            <div
              style={{
                fontSize: '14px',
                color: '#7A6A5D',
                letterSpacing: '0.5px',
                fontFamily: SANS,
              }}
            >
              {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
            </div>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(30px,5vw,40px)',
            }}
          >
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: 'center',
                padding: '80px 20px',
                color: '#7A6A5D',
                fontFamily: SANS,
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔍</div>
              <div style={{ fontSize: '1.2rem', marginBottom: '12px' }}>No se encontraron productos</div>
              <div style={{ fontSize: '0.95rem' }}>Intenta con otro filtro</div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}