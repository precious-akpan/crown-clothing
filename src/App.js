
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Homepage from "./routes/home/Homepage";
import SignIn from "./routes/sign-in/SignIn.component";

function Shop() {
  return <h1>I am a shop</h1>;
}

function App(props) {
  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Homepage />} />
        <Route path="Shop" element={<Shop />} />
          <Route path={'sign-in'} element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
