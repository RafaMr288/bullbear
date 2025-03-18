import { useState } from "react"
import "./whitepaperpdf.css"
import pdffile from "./bullbear.pdf"

function Whitepaperpdf() {

    const [dados, setDados] = useState()

    return (
        <div className="whitepaperpdf">
<a href={pdffile} target="_blank" rel="noopener noreferrer">
      Abrir PDF
    </a>   </div>
    )

}

export default Whitepaperpdf