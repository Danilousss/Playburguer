import { ShoppingCart, Search, Gamepad2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header({ searchTerm, setSearchTerm }) {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-arcade-bg border-b-4 border-black shadow-pixel py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2 text-arcade-neon cursor-pointer">
          <Gamepad2 size={32} />
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter">PLAYBURGUER</h1>
        </div>

        {/* Search */}
        <div className="flex-1 w-full md:w-auto max-w-md relative">
          <input 
            type="text" 
            placeholder="Search items..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-arcade-surface border-4 border-black text-white px-4 py-2 pl-10 focus:outline-none focus:border-arcade-neon font-pixel text-xs"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Navigation & Cart */}
        <div className="flex items-center gap-6 text-xs">
          <nav className="hidden lg:flex gap-6 text-gray-300">
            <a href="#boss-burgers" className="hover:text-arcade-neon transition-colors">Boss Burgers</a>
            <a href="#side-quests" className="hover:text-arcade-neon transition-colors">Side Quests</a>
            <a href="#pocoes" className="hover:text-arcade-neon transition-colors">Poções</a>
          </nav>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 btn-arcade bg-arcade-warning text-black"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">INVENTÁRIO</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-arcade-danger text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
