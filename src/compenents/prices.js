import "./prices.css"
import Img_solana from "../imgs/solana.png"
import Img_bitcoin from "../imgs/bitcoin.png"
import Img_binance from "../imgs/binance.png"
import { useEffect, useState } from "react"

function Prices({dados}) {

    const [dadoss, setDados] = useState(null)
    
    useEffect(()=>{
        setDados(dados)
    }, 1000)

    return(
        <div className="prices">
            <div className="price">
                <img src={Img_bitcoin} width="40"></img>
                <p>BITCOIN</p>
                <p>{dadoss[0].current_price}</p>
            </div>
            <div className="price">
                <img src={Img_solana} width="40"></img>
                <p>SOLANA</p>
                <p>{dadoss[5].current_price}</p>
            </div>
            <div className="price">
                <img src={Img_binance} width="40"></img>
                <p>BINANCE</p>
                <p>{dadoss[4].current_price}</p>
            </div>
        </div>
    )

}

export default Prices