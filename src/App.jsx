import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import { products } from './data/products'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by search term
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartProvider>
      <div className="min-h-screen bg-arcade-bg text-white pb-20">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <main className="container mx-auto px-4 pt-12">
          {/* Banner Hero */}
          <div className="mb-16 border-4 border-black p-8 bg-black relative overflow-hidden group">
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #00f3ff 2px, #00f3ff 4px)',
              backgroundSize: '100% 4px'
            }}></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl text-arcade-warning mb-4">PRESS START TO EAT</h2>
              <p className="text-xs text-gray-300 md:w-1/2 leading-relaxed">
                Bem-vindo ao Playburguer! Escolha seu equipamento, prepare suas poções e derrote a fome.
              </p>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-arcade-danger">
              <p>NENHUM ITEM ENCONTRADO NA DATABASE</p>
            </div>
          ) : (
            <>
              <ProductGrid products={filteredProducts} category="Boss Burgers" />
              <ProductGrid products={filteredProducts} category="Side Quests" />
              <ProductGrid products={filteredProducts} category="Poções" />
            </>
          )}
        </main>

        <CartDrawer />
      </div>
    </CartProvider>
  )
}

export default App
