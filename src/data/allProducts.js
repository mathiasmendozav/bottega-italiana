import { morettinoProducts } from './morettinoProducts'
import { kottabosProducts } from './kottabosProducts'
import { xlviProducts } from './xlviProducts'

export function getAllProducts() {
  return [...morettinoProducts, ...kottabosProducts, ...xlviProducts]
}

export function filterByCategory(products, category) {
  if (category === 'cafe') return products.filter(p => p.brand === 'morettino')
  if (category === 'cerveza') return products.filter(p => p.brand === 'kottabos')
  if (category === 'maquina') return products.filter(p => p.brand === 'xlvi')
  return products
}

export function getProductById(id) {
  return getAllProducts().find(p => p.id === id)
}

export function getRelatedProducts(productId, limit = 3) {
  const product = getProductById(productId)
  if (!product) return []
  return getAllProducts()
    .filter(p => p.brand === product.brand && p.id !== productId)
    .slice(0, limit)
}

export function searchProducts(query) {
  if (!query) return getAllProducts()
  const q = query.toLowerCase()
  return getAllProducts().filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description?.toLowerCase().includes(q)
  )
}

export default getAllProducts