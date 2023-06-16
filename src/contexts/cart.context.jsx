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

const removeCartItem = (cartItems, productToRemove, isClear = false) => {
  // const existingItem = cartItems.find(
  //   (cartItem) => cartItem.id === productToRemove.id
  // );

  if (isClear) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // return existingItem.quantity > 1 && !isClear
  //   ? cartItems.map((cartItem) =>
  //       cartItem.id === productToRemove.id
  //         ? { ...cartItem, quantity: --cartItem.quantity }
  //         : cartItem
  //     )
  //   : cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);

  const index = cartItems.findIndex(
    (cartItem) => cartItem.id === productToRemove.id
  );
  let updatedCartItems = Object.assign([], cartItems);
  // let updatedCartItems = [...cartItems];
  if (index > -1) {
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
    } else {
      updatedCartItems = updatedCartItems.filter(
        (cartItem) => cartItem.id !== productToRemove.id
      );
    }
  } else return;
  return updatedCartItems;
};
export const CartContext = createContext({
  cartItems: [],
  showCart: false,
  setShowCart: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotalPrice: 0,
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setCartTotalPrice(
      cartItems.reduce(
        (total, cartItem) => total + cartItem.price * cartItem.quantity,
        0
      )
    );
  }, [cartItems]);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (product, isClear) =>
    setCartItems(removeCartItem(cartItems, product, isClear));

  const value = {
    showCart,
    setShowCart,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    cartTotalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
