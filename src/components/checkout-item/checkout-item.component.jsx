import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

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
    <div className={"checkout-item-container"}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className={"name"}>{name}</span>
      <span className={"quantity"}>
        <div onClick={handleRemoveItem} className={"arrow"}>
          &lt;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={handleAddItem} className={"arrow"}>
          &gt;
        </div>
      </span>
      <span className={"price"}>{price}</span>
      <div
        className={"remove-button"}
        onClick={handleClearItem}
      >
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItemComponent;
