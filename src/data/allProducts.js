import { morettinoProducts } from './morettinoProducts'
import { kottabosProducts } from './kottabosProducts'

// Combine all products
export function getAllProducts() {
  return [...morettinoProducts, ...kottabosProducts]
}

// Filter by category
export function filterByCategory(products, category) {
  if (category === 'cafe') {
    return products.filter((p) => p.brand === 'morettino')
  }
  if (category === 'cerveza') {
    return products.filter((p) => p.brand === 'kottabos')
  }
  return products
}

// Get product by ID
export function getProductById(id) {
  const allProducts = getAllProducts()
  return allProducts.find((p) => p.id === id)
}

// Get related products (same brand, different product)
export function getRelatedProducts(productId, limit = 3) {
  const product = getProductById(productId)
  if (!product) return []

  const allProducts = getAllProducts()
  return allProducts
    .filter((p) => p.brand === product.brand && p.id !== productId)
    .slice(0, limit)
}

// Search products by name or description
export function searchProducts(query) {
  if (!query) return getAllProducts()
  
  const allProducts = getAllProducts()
  const lowerQuery = query.toLowerCase()
  
  return allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description?.toLowerCase().includes(lowerQuery)
  )
}

export default getAllProducts