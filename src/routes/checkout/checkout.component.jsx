import "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CartTotal,
  CheckoutContainer,
  CheckoutHeader,
  CheckoutHeaderBlock,
} from "./checkout.styles";
import {useSelector} from "react-redux";
import {selectCartTotal, selectCartItems} from "../../store/cart/cart.selector";

const CheckoutComponent = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotalPrice = useSelector(selectCartTotal)

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
        <CartTotal>Total: ₦{cartTotalPrice}</CartTotal>
      </CheckoutContainer>
    );
  } else element = <span>Your cart is empty</span>;
  return element;
};
export default CheckoutComponent;
