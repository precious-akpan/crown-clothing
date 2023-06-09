import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  showCart: false,
  setShowCart: () => {},
  // addToCart: () => {},
});

const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  // const toggleShowCart = () => {
  //   setShowCart(!showCart);
  // };
  // const addToCart = (product) => setCart([...cart, product]);

  const value = {
    showCart, setShowCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
