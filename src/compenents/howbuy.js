import "./howbuy.css"

function Howbuy() {

    return (
        <div className="howbuy">
            <h1>HOW BUY</h1>
            <div className="tapes">
                <div>
                    <h3>1.Create a wallet with Phantom or another wallet that supports SOL.</h3>
                    <p>Visit phantom.App and follow the simple steps to create a new account with the phantom app or browser extension.</p>
                </div>
                <div>
                    <h3>2.Get some $SOL</h3>
                    <p>Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom wallet from the crypto exchange of your choice.</p>
                </div>
            <   div>
                    <h3>3.Swap $SOL for $BBS</h3>
                    <p>Tap the SWAP icon in your Phantom wallet and paste the $BBS token address. Swap your $SOL for $BBS.</p>
                </div>
                <div>
                    <h3>4.You are now an $BBS holder!</h3>
                    <p>Welcome to the $BBS Squad!</p>
                </div>
            </div>
        </div>
    )

}

export default Howbuy