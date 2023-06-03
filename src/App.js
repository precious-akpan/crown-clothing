import "./App.css";

import "./pages/homepage/Homepage.scss";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE {props.match.params.topicId}</h1>
    </div>
  );
};
function App(props) {
    console.log(props);
    return (
    <div>
      <Routes>
        <Route path={"/"} Component={Homepage} />
        <Route path={"/hats"} Component={HatsPage} />
      </Routes>
      {/*<Homepage />*/}
    </div>
  );
}

export default App;
