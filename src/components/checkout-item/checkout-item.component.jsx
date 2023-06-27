import { useContext } from "react";
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
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItemComponent = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, quantity, price } = product;

  function handleRemoveItem() {
    dispatch(removeItemFromCart(cartItems, product))
  }

  function handleAddItem() {
    dispatch(addItemToCart(cartItems, product))
  }

  function handleClearItem() {
    dispatch(removeItemFromCart(cartItems, product, true))
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
