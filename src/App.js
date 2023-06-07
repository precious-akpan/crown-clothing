import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Homepage from "./routes/home/Homepage";
import Authentication from "./routes/authentication/auth.component";

function Shop() {
  return <h1>I am a shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path={"auth"} element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
