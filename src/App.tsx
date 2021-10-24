import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Time from "./components/Time";
import Icon from "../src/assets/icons85.png";

function App() {
  const [name] = useState<string>("What is your purpose?");
  return (
    <div className="App">
      <Time></Time>
      <div className="iconHeader">
        <div>
          <img src={Icon} alt="icon"></img>
        </div>
        <div>
          <h1>Astronotes</h1>
        </div>
      </div>

      <Main name={name}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
