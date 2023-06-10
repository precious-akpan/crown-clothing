import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {Link, redirect, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

export const CartDropdownComponent = ({ cartItems }) => {
    const {setShowCart} = useContext(CartContext)
const navigate = useNavigate()
    const handleGoToCheckout = () => {
    navigate('/checkout')
        setShowCart(false)
    }
  return (
    <div className={"cart-dropdown-container"}>
      <div className={"cart-items"}>
        {cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
        <Button onClick={handleGoToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdownComponent;
