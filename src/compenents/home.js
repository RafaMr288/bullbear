import { useState } from "react";
import "./home.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-logo">
                <h1>Bull</h1>
                <h1>Bear</h1>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <nav className={`header-menu ${menuOpen ? "open" : ""}`}>
                <a href="#">ROADMAP</a>
                <a href="#">TOKENOMICS</a>
                <a href="#">HOME</a>
            </nav>
        </header>
    );
}

export default Header;
