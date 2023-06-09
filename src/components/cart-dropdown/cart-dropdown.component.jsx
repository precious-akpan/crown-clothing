import './cart-dropdown.style.scss'
import Button from "../button/button.component";

export const CartDropdownComponent = () => {
return <div className={'cart-dropdown-container'}>
    <div className={'cart-items'}/>
    <Button>Go To Checkout</Button>
</div>
}

export default CartDropdownComponent