import "./styles.css";

import "react-pro-sidebar/dist/css/styles.css";
import Aside from "./Aside";
import Main from "./Main";

export default function App() {
  return (
    <div className="App">
      <Aside />
      <Main />
    </div>
  );
}

function C1() {
  return (
    <div>
      <h1>C1</h1>
    </div>
  );
}

function C2() {
  return (
    <div>
      <h1>C1</h1>
    </div>
  );
}
