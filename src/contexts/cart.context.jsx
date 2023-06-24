import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const updatedProductToAdd = { ...productToAdd, quantity: 1 };
  const index = cartItems.findIndex(
    (carItem) => carItem.id === productToAdd.id
  );
  const updatedCartItems = [...cartItems];
  if (index > -1) {
    updatedCartItems[index].quantity = cartItems[index].quantity + 1;
  } else {
    updatedCartItems.push(updatedProductToAdd);
  }
  return updatedCartItems;
};

const removeCartItem = (cartItems, productToRemove, isClear = false) => {
  if (isClear) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  const index = cartItems.findIndex(
    (cartItem) => cartItem.id === productToRemove.id
  );
  let updatedCartItems = Object.assign([], cartItems);
  if (index > -1) {
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity = cartItems[index].quantity - 1;
    } else {
      updatedCartItems = updatedCartItems.filter(
        (cartItem) => cartItem.id !== productToRemove.id
      );
    }
  } else return;
  return updatedCartItems;
};

const CART_INITIAL_STATE = {
  cartItems: [],
  showCart: false,
  cartCount: 0,
  cartTotalPrice: 0,
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
const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  TOGGLE_SHOW_CART: "TOGGLE_SHOW_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS.ADD_TO_CART:
      return { ...state, ...payload };
    case CART_ACTIONS.REMOVE_FROM_CART:
      return { ...state, ...payload };
    case CART_ACTIONS.TOGGLE_SHOW_CART:
      return { ...state, showCart: payload };
    default:
      throw new Error(`Unhandled cart action type ${type} error`);
  }
};
const CartProvider = ({ children }) => {
  const [{ cartItems, showCart, cartCount, cartTotalPrice }, dispatch] =
    useReducer(cartReducer, CART_INITIAL_STATE);

  const updateCartItemsReducer = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTIONS.ADD_TO_CART, {
        cartItems,
        cartCount: newCartCount,
        cartTotalPrice: newCartTotalPrice,
      })
    );
  };

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (product, isClear) => {
    const newCartItems = removeCartItem(cartItems, product, isClear);
    updateCartItemsReducer(newCartItems);
  };
  const setShowCart = (isCartShown) => {
   dispatch(createAction(CART_ACTIONS.TOGGLE_SHOW_CART, isCartShown))
  };

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
