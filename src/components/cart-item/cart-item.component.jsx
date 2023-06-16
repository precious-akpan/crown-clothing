import "./cart-item.style";
import {
    CartItemContainer,
    CartItemImage,
    ItemDetails,
    ItemName, ItemPrice,
} from "./cart-item.style";

const CartItemComponent = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemName as={"span"}>{name}</ItemName>
        <ItemPrice as={"span"}>
          {quantity} X ₦{price * quantity}
        </ItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItemComponent;
