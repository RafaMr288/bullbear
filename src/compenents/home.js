import { useState } from "react";
import "./home.css";
import Img_logo from "../imgs/logo-2.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={Img_logo} width='100'></img>
      </div>

      {/* Botão do menu mobile */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu de navegação */}
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#criptos">PRICES</a>
        <a href="#tokenomics">TOKENOMICS</a>
        <a href="#criptos">ABOUT</a>
        <a href="#">HOME</a>
      </nav>
    </header>
  );
};

export default Header;
