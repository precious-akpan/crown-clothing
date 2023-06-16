import "./cart-dropdown.style";
import Button from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {CartDropdownContainer, CartItems, EmptyMessage,} from "./cart-dropdown.style";

export const CartDropdownComponent = ({cartItems}) => {
    const {setShowCart} = useContext(CartContext);
    const navigate = useNavigate();
    const handleGoToCheckout = () => {
        navigate("/checkout");
        setShowCart(false);
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItemComponent key={cartItem.id} cartItem={cartItem}/>
                    ))
                ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={handleGoToCheckout}>Go To Checkout</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdownComponent;
