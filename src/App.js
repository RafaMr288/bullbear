import React, { useState } from "react";
import "./style.css"
import Header from "./compenents/home.js"
import Prices from "./compenents/prices.js";
import Apresentacao from "./compenents/apresentacao.js";
import Footer from "./compenents/footer.js";
import Fases from "./compenents/fases.js";
import Moedas from "./compenents/moedas.js";
import Redes from "./compenents/redes.js";
import Futures from "./compenents/furures.js";
import Howbuy from "./compenents/howbuy.js";

function App() {
  
  const [moedasData, setMoedasData] = useState(null); // Define o estado

  return (
    <div className="app">
      <Header></Header>
      <Prices dados={moedasData}></Prices>
      <Apresentacao></Apresentacao>
      <Futures></Futures>
      <Fases></Fases>
      <Redes></Redes>
      <Howbuy></Howbuy>
      <Moedas setMoedasData={setMoedasData} ></Moedas>
      <Footer></Footer>
    </div>
  );
}

export default App;
