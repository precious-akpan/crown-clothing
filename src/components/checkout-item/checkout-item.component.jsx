import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles";
import {
  Arrow,
  CheckoutItemContainer,
  Image,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItemComponent = ({ product }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const { name, imageUrl, quantity, price } = product;

  function handleRemoveItem() {
    removeItemFromCart(product);
  }

  function handleAddItem() {
    addItemToCart(product);
  }

  function handleClearItem() {
    removeItemFromCart(product, true);
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleRemoveItem}>&lt;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddItem} className={"arrow"}>
          &gt;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleClearItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};
export default CheckoutItemComponent;
