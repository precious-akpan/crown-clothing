import Button from "../button/button.component";
import "./product-card.style.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCardComponent = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const toggleAddToCart = () => {
    addItemToCart(product);
  };
  const { name, price, imageUrl } = product;
  return (
    <div className={"product-card-container"}>
      <img src={imageUrl} alt={name} />
      <footer className={"footer"}>
        <span className="name">{name}</span>
        <span className="price">₦{price}</span>
      </footer>
      <Button buttonType={"inverted"} onClick={toggleAddToCart}>
        Add To Cart
      </Button>
    </div>
  );
};
export default ProductCardComponent;
