import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const updatedProductToAdd = { ...productToAdd, quantity: 1 };
  const foundIndex = cartItems.findIndex(
    (carItem) => carItem.id === productToAdd.id
  );
  const updatedCartItems = [...cartItems];
  if (foundIndex > -1) {
    updatedCartItems[foundIndex].quantity++;
  } else {
    updatedCartItems.push(updatedProductToAdd);
  }

  return updatedCartItems;

  // const existingItem = cartItems.find(
  //   (cartItem) => cartItem.id === productToAdd.id
  // );
  //
  // if (existingItem) {
  //   return cartItems.map((cartItem) =>
  //     cartItem.id === productToAdd.id
  //       ? { ...cartItem, quantity: cartItem.quantity+1 }
  //       : cartItem
  //   );
  // }
  // return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  cartItems: [],
  showCart: false,
  setShowCart: () => {},
  addItemToCart: () => {},
  cartCount: 0,
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
  }, [cartItems]);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = {
    showCart,
    setShowCart,
    addItemToCart,
    cartItems,
      cartCount
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
