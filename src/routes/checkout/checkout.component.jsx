import "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartTotal,
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
} from "./checkout.styles";

const CheckoutComponent = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  let element;

  if (cartItems.length) {
    element = (
      <CheckoutContainer>
        <CheckoutHeader>
          <CheckoutHeaderBlock className="header-block">
            <span>Product</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock className="header-block">
            <span>Description</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock className="header-block">
            <span>Quantity</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock className="header-block">
            <span>Price</span>
          </CheckoutHeaderBlock>
          <CheckoutHeaderBlock className="header-block">
            <span>Remove</span>
          </CheckoutHeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} product={cartItem} />
        ))}
        <CartTotal>Total: {cartTotalPrice}</CartTotal>
      </CheckoutContainer>
    );
  } else element = <span>Your cart is empty</span>;
  return element;
};
export default CheckoutComponent;
