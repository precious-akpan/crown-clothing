import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Homepage from "./routes/home/Homepage";
import Authentication from "./routes/authentication/auth.component";
import ShopComponent from "./routes/shop/shop.component";
import CheckoutComponent from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "./utils/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    return onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop/*" element={<ShopComponent />} />
        <Route path={"auth"} element={<Authentication />} />
        <Route path={"checkout"} element={<CheckoutComponent />} />
        <Route path={"*"} element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
