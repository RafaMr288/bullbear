import { useState } from "react";
import "./home.css";
import Img_logo from "../imgs/logo-2.png"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-logo">
                <img src={Img_logo} width='140' height='40' style={{borderRadius:"0"}}></img>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav className={`header-menu ${menuOpen ? "open" : ""}`}>
                <a href="#phases" onClick={() => setMenuOpen(!menuOpen)}>Phases</a>
                <a href="#tokenomics" onClick={() => setMenuOpen(!menuOpen)}>Tokenomics</a>
                <a href="#criptos" onClick={() => setMenuOpen(!menuOpen)}>Criptos</a>
                <a href="#burn" onClick={() => setMenuOpen(!menuOpen)}>Burn</a>
                <a href="#" onClick={() => setMenuOpen(!menuOpen)}>Home</a>
            </nav>
        </header>
    );
}

export default Header;
