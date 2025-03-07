import { useEffect, useState } from "react"
import "./moedas.css"

function Moedas() {

    useEffect(()=>{
        get()
    }, [])

    const get = async () => {

        try {

            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
            const d_response = await response.json()
            setDados(d_response)

        }
        catch {

        }

    }

    const [dados, setDados] = useState(null)

    return(
        <div className="moedas">
            {dados ? (
                <div className="moeda">
                    <tbody>
                        <tr key="-1">
                            <td>#</td>
                            <td>Image</td>
                            <td>NAME</td>
                            <td>symbol</td>
                            <td>Price</td>
                            <td>Marketcap</td>
                        </tr>
                        {dados.map((coin) => (
                            <tr key={coin.id}>
                                <td>{coin.market_cap_rank}</td>
                                <td>
                                    <img src={coin.image} width="40"></img>
                                </td>
                                <td>{coin.name}</td>
                                <td>{coin.symbol.toUpperCase()}</td>
                                <td>${coin.current_price.toLocaleString()}</td>
                                <td>${coin.market_cap.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            ):(
                <>
                </>
            )}
        </div>
    )

}

export default Moedas