import React from "react";
import "./style.css"
import Header from "./compenents/home.js"
import Prices from "./compenents/prices.js";
import Apresentacao from "./compenents/apresentacao.js";
import Footer from "./compenents/footer.js";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Prices></Prices>
      <Apresentacao></Apresentacao>
      <Footer></Footer>
    </div>
  );
}

export default App;
