import { CART_ACTION } from "./cart.types";

export const INITIAL_CART_STATE = {
  cartItems: [],
  showCart: false,
  cartCount: 0,
  cartTotalPrice: 0,
};
export function cartReducer(state = INITIAL_CART_STATE, action={}) {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION.SET_CART:
      return { ...state, cartItems: payload };
    case CART_ACTION.TOGGLE_SHOW_CART:
      return { ...state, showCart: payload };
    default:
      return state;
  }
}
