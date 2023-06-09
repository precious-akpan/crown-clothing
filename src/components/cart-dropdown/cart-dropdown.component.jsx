import "./cart-dropdown.style.scss";
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";

export const CartDropdownComponent = ({ cartItems }) => {
  return (
    <div className={"cart-dropdown-container"}>
      <div className={"cart-items"}>
        {cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdownComponent;
