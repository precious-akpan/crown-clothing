import "./cart-item.style.scss";

const CartItemComponent = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className={'item-details'}>
        <span>{name}</span>
        <span className={'price'}>
          {quantity} X ₦{price*quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItemComponent;
