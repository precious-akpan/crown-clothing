import "./cart-icon.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.style";
const CartIconComponent = () => {
  const { showCart, setShowCart } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);
  const toggleShowCart = () => setShowCart(!showCart);
  return (
    <CartIconContainer onClick={toggleShowCart}>
      <ShoppingIcon />
      <ItemCount as={"span"} >
        {cartCount}
      </ItemCount>
    </CartIconContainer>
  );
};
export default CartIconComponent;
