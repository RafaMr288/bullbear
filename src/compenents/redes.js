import "./redes.css"
import Img_telegram from "../imgs/telegram.png"

function Redes() {

    function OpenT(){
        window.location.href = "https://t.me/bullbeartoken2025";
    }


    return (
        <div className="redes">
            <div className="rede" onClick={()=>{OpenT()}}>
                <img src={Img_telegram} width="40"></img>
                <h3>Telegram</h3>
            </div>
        </div>
    )

}

export default Redes