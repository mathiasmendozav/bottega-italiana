import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ImgBox from './ImgBox'
import Reveal from './Reveal'

const SANS = '"Jost", sans-serif'

export default function BrandCard({ brand }) {
  const navigate = useNavigate()

  return (
    <Reveal>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0',
          background: brand.bgColor || '#111',
          cursor: 'pointer',
        }}
        onClick={() => navigate(brand.link)}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '400px',
          }}
          className="brand-card-grid"
        >
          {/* Image Side */}
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <ImgBox
              src={brand.image}
              alt={brand.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to right, ${brand.bgColor || '#111'}00, ${brand.bgColor || '#111'}dd)`,
              }}
            />
          </div>

          {/* Content Side */}
          <div
            style={{
              padding: 'clamp(40px,6vw,60px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '3px',
                color: brand.accentColor || '#C89B3C',
                textTransform: 'uppercase',
                marginBottom: '16px',
                fontFamily: SANS,
                fontWeight: 400,
              }}
            >
              {brand.category}
            </div>

            <h3
              style={{
                fontSize: 'clamp(2rem,4vw,3rem)',
                fontFamily: SANS,
                fontWeight: 400,
                color: '#fff',
                marginBottom: '20px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                lineHeight: 1.1,
              }}
            >
              {brand.name}
            </h3>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '32px',
                fontFamily: SANS,
                letterSpacing: '0.5px',
              }}
            >
              {brand.description}
            </p>

            {/* Tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '32px',
              }}
            >
              {brand.tags?.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: '11px',
                    letterSpacing: '2px',
                    color: brand.accentColor || '#C89B3C',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    border: `1px solid ${brand.accentColor || '#C89B3C'}50`,
                    background: `${brand.accentColor || '#C89B3C'}15`,
                    fontFamily: SANS,
                    fontWeight: 400,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => navigate(brand.link)}
              style={{
                background: brand.accentColor || '#C89B3C',
                border: `2px solid ${brand.accentColor || '#C89B3C'}`,
                color: brand.bgColor || '#111',
                padding: '14px 36px',
                fontSize: '12px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: SANS,
                fontWeight: 500,
                cursor: 'pointer',
                borderRadius: '0',
                transition: 'all 0.3s ease',
                width: 'fit-content',
              }}
            >
              Ver Productos
            </motion.button>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .brand-card-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </Reveal>
  )
}
