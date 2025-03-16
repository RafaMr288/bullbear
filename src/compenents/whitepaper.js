import { useState } from "react"
import Img_paper from "../imgs/papel.png"
import "./whitepaper.css"

function Whitepaper() {

    const [showPDF, setShowPDF] = useState(false);

    return (
        <div className="whitepaper">
            <div className="button" onClick={() => setShowPDF(true)}>
                <img src={Img_paper} width='50'></img>
                <h2 style={{color:"white"}}>WhitePaper</h2>
            </div>
        </div>
    )

}

export default Whitepaper