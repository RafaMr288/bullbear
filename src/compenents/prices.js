import "./prices.css";
import Img_solana from "../imgs/solana.png";
import Img_bitcoin from "../imgs/bitcoin.png";
import Img_binance from "../imgs/binance.png";

function Prices({ dados }) {
    // Verifica se os dados estão disponíveis
    if (!dados || dados.length < 3) {
        return <p>Carregando preços...</p>;
    }

    return (
        <div className="prices">
            <div className="price">
                <img src={Img_bitcoin} width="40" alt="Bitcoin" />
                <p>BITCOIN</p>
                <p>{dados[0]?.current_price ?? "Preço indisponível"}</p>
            </div>
            <div className="price">
                <img src={Img_solana} width="40" alt="Solana" />
                <p>SOLANA</p>
                <p>{dados[5]?.current_price ?? "Preço indisponível"}</p>
            </div>
            <div className="price">
                <img src={Img_binance} width="40" alt="Binance" />
                <p>BINANCE</p>
                <p>{dados[4]?.current_price ?? "Preço indisponível"}</p>
            </div>
        </div>
    );
}

export default Prices;
