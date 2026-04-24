import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionToggle = (option) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handleAdd = () => {
    if (product.options && product.options.length > 0 && !showOptions) {
      setShowOptions(true);
    } else {
      addToCart(product, selectedOptions);
      setSelectedOptions([]);
      setShowOptions(false);
    }
  };

  return (
    <div className="card-arcade relative overflow-hidden group">
      {/* Visual Placeholder for Image */}
      <div 
        className="h-40 w-full border-4 border-black mb-2 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: product.imageColor }}
      >
        {/* Pixel pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 4px 4px'
        }}></div>
        <span className="text-white font-bold text-sm bg-black px-2 py-1 uppercase border-2 border-white">
          {product.category === 'Boss Burgers' ? 'HP +50' : 'ITEM'}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm text-arcade-neon mb-2 leading-tight">{product.name}</h3>
          <p className="text-[10px] text-gray-400 mb-4 font-sans font-medium">{product.description}</p>
        </div>

        {showOptions && product.options && (
          <div className="mb-4 bg-black p-2 border-2 border-gray-700">
            <p className="text-[8px] text-arcade-warning mb-2 uppercase">Modificadores:</p>
            <div className="flex flex-col gap-2">
              {product.options.map(opt => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer text-[10px]">
                  <input 
                    type="checkbox" 
                    checked={selectedOptions.includes(opt)}
                    onChange={() => handleOptionToggle(opt)}
                    className="appearance-none w-4 h-4 border-2 border-white checked:bg-arcade-neon checked:border-arcade-neon relative 
                    before:content-[''] before:absolute before:inset-0 before:m-auto before:w-1.5 before:h-1.5 checked:before:bg-black"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <button 
              className="text-[10px] text-gray-400 underline mt-2 hover:text-white"
              onClick={() => setShowOptions(false)}
            >
              Cancelar
            </button>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs font-bold text-white">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button 
            onClick={handleAdd}
            className="btn-arcade flex items-center gap-1"
          >
            <Plus size={14} /> ADD
          </button>
        </div>
      </div>
    </div>
  );
}
