import "./cart-icon.style";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.style";
import {useDispatch, useSelector} from "react-redux";
import {
  selectCartCount,
  selectShowCart,
} from "../../store/cart/cart.selector";
import { setShowCart } from "../../store/cart/cart.action";
const CartIconComponent = () => {
    const dispatch = useDispatch()
  const showCart = useSelector(selectShowCart);
  const cartCount = useSelector(selectCartCount);
  const toggleShowCart = () => dispatch(setShowCart(!showCart))
  return (
    <CartIconContainer onClick={toggleShowCart}>
      <ShoppingIcon />
      <ItemCount as={"span"}>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIconComponent;
