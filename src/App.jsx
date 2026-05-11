import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import CatalogoPage from './pages/CatalogoPage'
import HistoriaPage from './pages/HistoriaPage'
import MorettinoPage from './pages/MorettinoPage'
import KottabosPage from './pages/KottabosPage'
import ProductoPage from './pages/ProductoPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/morettino" element={<MorettinoPage />} />
        <Route path="/kottabos" element={<KottabosPage />} />
        <Route path="/producto/:id" element={<ProductoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
