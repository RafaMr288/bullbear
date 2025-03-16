import Img_futures from "../imgs/futures.png"
import "./futures.css"
import Img_dex_s from "../imgs/dex-screener.png"
import Img_bullx from "../imgs/bullx.png"
import Img_okx from "../imgs/okx2.png"
import Header from "./home"

function Futures() {

    return (
        <div className="futures">
            <h1>Futures Exchanges Confirmed</h1>
            <img src={Img_dex_s}></img>
            <img src={Img_bullx} onClick={()=>{Header("https://bullx.io/")}}></img>
            <img src={Img_okx}></img>
        </div>
    )

}

export default Futures