import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  Image,
  ProductCardContainer,
  ProductCardFooter,
  ProductName,
  ProductPrice,
} from "./product-card.style";

const ProductCardComponent = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const toggleAddToCart = () => {
    addItemToCart(product);
  };
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
