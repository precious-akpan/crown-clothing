import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION } from "./cart.types";

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

export const setShowCart = (bool) =>
  createAction(CART_ACTION.TOGGLE_SHOW_CART, bool);

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION.SET_CART, newCartItems);
};

export const removeItemFromCart = (cartItems, product, isClear) => {
  const newCartItems = removeCartItem(cartItems, product, isClear);
  return createAction(CART_ACTION.SET_CART, newCartItems);
};

// export const updateCartItemsReducer = (cartItems) => {
//   return createAction(CART_ACTIONS.ADD_TO_CART, {
//     cartItems,
//     cartCount: newCartCount,
//     cartTotalPrice: newCartTotalPrice,
//   });
// };
