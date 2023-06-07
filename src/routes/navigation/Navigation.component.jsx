import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.styles.scss";

function Navigation() {
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
          <Link className={"nav-link"} to={"/auth"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
