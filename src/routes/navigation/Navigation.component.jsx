import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { LogoContainer, Navigations, NavLink, NavLinks } from "./Navigation.styles";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { showCart } = useContext(CartContext);
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navigations>
        <div>
          <LogoContainer to={"/"}>
            <CrownLogo />
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
          <CartIconComponent />
        </NavLinks>
      </Navigations>
      {showCart && <CartDropdownComponent cartItems={cartItems} />}
      <Outlet />
    </>
  );
}

export default Navigation;
