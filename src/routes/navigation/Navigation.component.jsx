import {Outlet} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../assets/crown.svg";
import "./Navigation.styles";
import {signOutUser} from "../../utils/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import {LogoContainer, Navigations, NavLink, NavLinks} from "./Navigation.styles";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectCartItems, selectShowCart} from "../../store/cart/cart.selector";

function Navigation() {
    const currentUser = useSelector(selectCurrentUser)
    const showCart = useSelector(selectShowCart)
    const cartItems = useSelector(selectCartItems)
    return (
        <>
            <Navigations>
                <div>
                    <LogoContainer to={"/"}>
                        <CrownLogo/>
                    </LogoContainer>
                </div>
                <NavLinks>
                    <NavLink to={"/shop"}>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" className="nav-link" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to={"/auth"}>SIGN IN</NavLink>
                    )}
                    <CartIconComponent/>
                </NavLinks>
            </Navigations>
            {showCart && <CartDropdownComponent cartItems={cartItems}/>}
            <Outlet/>
        </>
    );
}

export default Navigation;
