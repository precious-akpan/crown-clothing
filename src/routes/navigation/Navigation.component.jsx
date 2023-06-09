import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIconComponent from "../../components/cart-icon/cart-icon.component";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { toggleShowCart, showCart } = useContext(CartContext);
  console.log(toggleShowCart);
  console.log(showCart);
const handleClick = () => {
    toggleShowCart()
}
  return (
    <>
      <div className={"navigation"}>
        <div>
          <Link className={"logo-container"} to={"/"}>
            <CrownLogo />
          </Link>
        </div>
        <div className={"nav-links-container"}>
          <Link className={"nav-link"} to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className={"nav-link"} to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIconComponent />
        </div>
      </div>
      {showCart && <CartDropdownComponent />}
      <Outlet />
    </>
  );
}

export default Navigation;
