import React from 'react'
import Search from '../components/Search'
import { Link } from "react-router-dom"
import { shortenAddress, useEthers } from '@usedapp/core'
import '../css/testSplit.css'
import '../css/nav.css'

export const Navigation = (props) => {
    const search = props.search;
    const placeholder = props.placeholder;
    const selector = props.selector;
    const { account, activateBrowserWallet, chainId } = useEthers();

    return (
        <div className="nav">
            <div className="navFlex">
                <div className="buttons">
                    <div id="navButton">
                        <Link to={"/"}>Home</Link>
                    </div>
                    {account && <div id="navButton">
                        <Link to={"/merchant/"}>Markets</Link>
                    </div>}
                    {account && <div id="navButton">
                        <Link to={"/orders/"}>Orders</Link>
                    </div>}
                    {account && <div id="navButton">
                        <Link to={"/balances/"}>Bank</Link>
                    </div>}
                </div>
                {search && <div>
                    {search && <Search placeholder={placeholder} selector={selector}/>}
                </div>}
                <div>
                    {account 
                    ? <div className="navFlex">
                        <div id="connectedNetwork">
                            {chainId === 42 
                            ? "Kovan"
                            : chainId === 1
                            ? "Mainnet"
                            : chainId === 3
                            ? "Ropsten"
                            : "Unsupported Network"}
                        </div>
                        <div id="connectedAccount">{shortenAddress(account)}</div>
                    </div>
                    : <button id="connectButton" onClick={() => activateBrowserWallet()}>Connect</button>}
                </div>
            </div>
        </div>
    )
}

export default Navigation
