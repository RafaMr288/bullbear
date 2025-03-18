import { useState } from "react"
import Img_paper from "../imgs/papel.png"
import "./whitepaper.css"
import { Link } from "react-router-dom"
import pdfFile from "./bullbear.pdf"

function Whitepaper() {

    const [showPDF, setShowPDF] = useState(false);

    return (
        <div className="whitepaper">
            <a href={pdfFile} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit" }}>
                <div className="button" onClick={() => setShowPDF(true)}>
                    <img src={Img_paper} width='50'></img>
                    <h2 style={{color:"white"}}>WhitePaper</h2>
                </div>
            </a>
        </div>
    )

}

export default Whitepaper