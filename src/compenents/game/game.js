import { useEffect } from "react";

function Game() {
    useEffect(() => {
        console.log("Página de Games carregada!");
    }, []);

    return <h1>Página de Games</h1>;
}

export default Game;
