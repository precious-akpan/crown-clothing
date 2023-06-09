import { ReactComponent as ShoppingCartIcon } from "../../assets/115 - shopping-bag.svg";
import "./cart-icon.style.scss";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
const CartIconComponent = () => {
    const { showCart, setShowCart } = useContext(CartContext)
    const {cartCount} = useContext(CartContext)
  const toggleShowCart = () => setShowCart(!showCart);
  return (
    <div className={"cart-icon-container"} onClick={toggleShowCart}>
      <ShoppingCartIcon className={"shopping-icon"} />
      <span className={"item-count"}>{cartCount}</span>
    </div>
  );
};
export default CartIconComponent;
