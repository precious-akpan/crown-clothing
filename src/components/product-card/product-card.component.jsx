import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.style";
import {
  Image,
  ProductCardContainer,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./product-card.style";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const ProductCardComponent = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)


  const toggleAddToCart = () => dispatch(addItemToCart(cartItems,product))

  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={name} />
      <ProductCardFooter className={"footer"}>
        <ProductName>{name}</ProductName>
        <ProductPrice>₦{price}</ProductPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={toggleAddToCart}
      >
        Add To Cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCardComponent;
