import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, selectedOptions = []) => {
    setCartItems(prev => {
      // Check if item with same options already exists
      const existingItemIndex = prev.findIndex(item => 
        item.id === product.id && 
        JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      }

      return [...prev, { ...product, selectedOptions, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, delta) => {
    setCartItems(prev => {
      const newItems = [...prev];
      newItems[index].quantity += delta;
      if (newItems[index].quantity <= 0) {
        return prev.filter((_, i) => i !== index);
      }
      return newItems;
    });
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};
