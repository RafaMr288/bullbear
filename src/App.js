import React from "react";
import "./style.css"
import Header from "./compenents/home.js"
import Prices from "./compenents/prices.js";
import Apresentacao from "./compenents/apresentacao.js";
import Footer from "./compenents/footer.js";
import Fases from "./compenents/fases.js";
import Moedas from "./compenents/moedas.js";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Prices></Prices>
      <Apresentacao></Apresentacao>
      <Fases></Fases>
      <Moedas></Moedas>
      <Footer></Footer>
    </div>
  );
}

export default App;
