import { X, Minus, Plus, Gamepad2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sendWhatsAppOrder } from '../utils/whatsappHelper';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    sendWhatsAppOrder(cartItems, cartTotal);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 z-50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-arcade-bg border-l-4 border-black z-50 flex flex-col shadow-[-8px_0_0_0_rgba(0,0,0,1)]">
        
        {/* Header */}
        <div className="p-4 border-b-4 border-black flex items-center justify-between bg-arcade-surface">
          <div className="flex items-center gap-2 text-arcade-warning">
            <Gamepad2 size={24} />
            <h2 className="text-sm font-bold">INVENTÁRIO</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-white hover:text-arcade-danger transition-colors"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center gap-4">
              <Gamepad2 size={48} className="opacity-20" />
              <p className="text-xs leading-loose">SEU INVENTÁRIO<br/>ESTÁ VAZIO</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="bg-black border-2 border-gray-700 p-3 flex flex-col gap-3">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="text-[10px] text-white leading-tight">{item.name}</h3>
                    {item.selectedOptions.length > 0 && (
                      <p className="text-[8px] text-arcade-neon mt-1">
                        + {item.selectedOptions.join(', ')}
                      </p>
                    )}
                  </div>
                  <button 
                    onClick={() => removeFromCart(index)}
                    className="text-gray-500 hover:text-arcade-danger"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 bg-arcade-surface border-2 border-black px-2 py-1">
                    <button 
                      onClick={() => updateQuantity(index, -1)}
                      className="text-white hover:text-arcade-neon"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-[10px] w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(index, 1)}
                      className="text-white hover:text-arcade-neon"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-[10px] font-bold text-arcade-warning">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t-4 border-black bg-arcade-surface">
            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="text-gray-300">TOTAL:</span>
              <span className="text-arcade-neon font-bold text-sm">
                R$ {cartTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full btn-arcade text-center justify-center flex py-4 text-sm bg-arcade-neon hover:bg-white text-black"
            >
              FINALIZAR MISSÃO
            </button>
          </div>
        )}

      </div>
    </>
  );
}
