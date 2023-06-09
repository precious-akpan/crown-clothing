import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Homepage from "./routes/home/Homepage";
import Authentication from "./routes/authentication/auth.component";
import ShopComponent from "./routes/shop/shop.component";


function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<ShopComponent />} />
        <Route path={"auth"} element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
