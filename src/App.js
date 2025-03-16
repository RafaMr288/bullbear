import React, { useState } from "react";
import "./style.css"
import Header from "./compenents/home.js"
import Prices from "./compenents/prices.js";
import Apresentacao from "./compenents/apresentacao.js";
import Footer from "./compenents/footer.js";
import Roadmap from "./compenents/roadmap.js";
import Moedas from "./compenents/moedas.js";
import Redes from "./compenents/redes.js";
import Futures from "./compenents/furures.js";
import Howbuy from "./compenents/howbuy.js";
import { Analytics } from '@vercel/analytics/react';
import PerguntasF from "./compenents/perguntasf.js";
import Grafico from "./compenents/grafico.js";
import Burn from "./compenents/burn.js";
import Whitepaper from "./compenents/whitepaper.js";

function App() {
  
  const [moedasData, setMoedasData] = useState(null); // Define o estado

  return (
    <div className="app">
      <Header></Header>
      <Redes></Redes>
      <Prices dados={moedasData}></Prices>
      <Apresentacao></Apresentacao>
      <Futures></Futures>
      <Grafico></Grafico>
      <Roadmap></Roadmap>
      <Howbuy></Howbuy>
      <Burn></Burn>
      <PerguntasF></PerguntasF>
      <Whitepaper></Whitepaper>
      <Moedas setMoedasData={setMoedasData} ></Moedas>
      <Footer></Footer>
      <Analytics></Analytics>
    </div>
  );
}

export default App;
