import "./cart-dropdown.style";
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style";
import { useDispatch } from "react-redux";
import {setShowCart} from "../../store/cart/cart.action";

export const CartDropdownComponent = ({ cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoToCheckout = () => {
    navigate("/checkout");
    dispatch(setShowCart(false));
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdownComponent;
