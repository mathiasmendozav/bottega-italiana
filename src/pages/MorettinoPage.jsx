import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { morettinoProducts } from '../data/morettinoProducts'

const SANS = '"Jost", sans-serif'

function MorettinoHero() {
  const navigate = useNavigate()
  return (
    <section style={{ position: 'relative', minHeight: '70vh', background: 'linear-gradient(135deg, #1a1410 0%, #2d2520 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(120px,15vw,160px) clamp(20px,6%,80px) 80px' }}>
      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ fontSize: '12px', letterSpacing: '3px', color: '#d6c1ab', textTransform: 'uppercase', marginBottom: '20px', fontFamily: SANS, fontWeight: 400 }}>Desde 1920</div>
          <h1 style={{ fontFamily: SANS, fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 400, color: '#faf7f2', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px', lineHeight: 1 }}>Morettino</h1>
          <p style={{ fontSize: '15px', color: 'rgba(250,247,242,0.85)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.9, fontFamily: SANS, letterSpacing: '0.5px' }}>Café artesanal siciliano con más de 100 años de tradición y excelencia</p>
          <motion.button onClick={() => navigate('/catalogo?cat=cafe')} whileHover={{ scale: 1.05 }} style={{ background: '#d6c1ab', color: '#1a1410', padding: '16px 42px', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: SANS, fontWeight: 500, cursor: 'pointer', border: 'none', borderRadius: '0' }}>Ver Cafés</motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section style={{ padding: 'clamp(80px,11vw,140px) clamp(20px,6%,80px)', background: '#faf7f2', textAlign: 'center' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Reveal><div style={{ fontSize: '12px', letterSpacing: '3px', color: '#a8938d', textTransform: 'uppercase', marginBottom: '20px', fontFamily: SANS, fontWeight: 400 }}>Nuestra Historia</div></Reveal>
        <Reveal delay={0.15}><h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: SANS, fontWeight: 400, color: '#1a1410', lineHeight: 1.2, marginBottom: '28px', letterSpacing: '2px', textTransform: 'uppercase' }}>Cuatro Generaciones de Pasión</h2></Reveal>
        <Reveal delay={0.25}><p style={{ fontSize: '15px', lineHeight: 1.9, color: '#6b5d58', fontWeight: 400, marginBottom: '20px', fontFamily: SANS, letterSpacing: '0.5px' }}>Desde 1920, Morettino representa la auténtica tradición del café siciliano. Más de un siglo de maestría artesanal en cada taza.</p></Reveal>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section style={{ padding: 'clamp(80px,11vw,140px) clamp(20px,6%,80px)', background: '#f2ece0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Reveal><div style={{ fontSize: '12px', letterSpacing: '3px', color: '#a8938d', textTransform: 'uppercase', marginBottom: '20px', fontFamily: SANS, fontWeight: 400 }}>Nuestros Cafés</div></Reveal>
          <Reveal delay={0.15}><h2 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontFamily: SANS, fontWeight: 400, color: '#1a1410', lineHeight: 1.2, letterSpacing: '2px', textTransform: 'uppercase' }}>Selección Premium</h2></Reveal>
        </div>
        <div className="grid-3">{morettinoProducts.map((p, i) => (<ProductCard key={p.id} product={p} index={i} />))}</div>
      </div>
    </section>
  )
}

export default function MorettinoPage() {
  return (<><MorettinoHero /><HistorySection /><ProductsSection /><Footer /></>)
}
