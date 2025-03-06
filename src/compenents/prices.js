import "./prices.css"
import Img_solana from "../imgs/solana.png"
import Img_bitcoin from "../imgs/bitcoin.png"
import Img_binance from "../imgs/binance.png"

function Prices() {

    return(
        <div className="prices">
            <div className="price">
                <img src={Img_bitcoin} width="40"></img>
                <p>BITCOIN</p>
                <p>$499233</p>
            </div>
            <div className="price">
                <img src={Img_solana} width="40"></img>
                <p>SOLANA</p>
                <p>$250</p>
            </div>
            <div className="price">
                <img src={Img_binance} width="40"></img>
                <p>BINANCE</p>
                <p>$700</p>
            </div>
        </div>
    )

}

export default Prices