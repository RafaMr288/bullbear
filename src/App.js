import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Header from "./compenents/home";
import Prices from "./compenents/prices";
import Apresentacao from "./compenents/apresentacao";
import Footer from "./compenents/footer";
import Roadmap from "./compenents/roadmap";
import Moedas from "./compenents/moedas";
import Redes from "./compenents/redes";
import Futures from "./compenents/furures";
import Howbuy from "./compenents/howbuy";
import { Analytics } from "@vercel/analytics/react";
import PerguntasF from "./compenents/perguntasf";
import Grafico from "./compenents/grafico";
import Burn from "./compenents/burn";
import Whitepaper from "./compenents/whitepaper";
import Game from "./compenents/game/game.js"
import Whitepaperpdf from "./compenents/whitepaperpdf.js";

function HomePage({ moedasData, setMoedasData }) {
  return (
    <div className="app">
      <Header />
      <Prices dados={moedasData} />
      <Redes />
      <Apresentacao />
      <Futures />
      <Grafico />
      <Roadmap />
      <Howbuy />
      <Burn />
      <PerguntasF />
      <Whitepaper />
      <Moedas setMoedasData={setMoedasData} />
      <Footer />
      <Analytics />
    </div>
  );
}

function App() {
  const [moedasData, setMoedasData] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<HomePage moedasData={moedasData} setMoedasData={setMoedasData} />} />
      <Route path="/whitepaper" element={<Whitepaperpdf />} /> {/* Nova rota do jogo */}
    </Routes>
  );
}

export default App;
