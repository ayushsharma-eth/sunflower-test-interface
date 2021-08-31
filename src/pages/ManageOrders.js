import React from 'react'
import Navigation from '../components/Navigation'
import RenderProductOrders from '../components/RenderProductOrders'
import { useReturnMarkets } from '../hooks/useReturnMarkets'
import { useEthers } from '@usedapp/core'

function ManageOrders() {

    const account = useEthers();
    const markets = useReturnMarkets(account.account);

    return (
        <div>
            <Navigation search={true} selector={"All"} placeholder={"Search..."}/>
            <div className="content-container">
                <h1>Manage Orders</h1>
                {markets && markets.map((e, i) => {
                    return (
                        <div>
                            <h3>Market: {markets[i]}</h3>
                            <RenderProductOrders market_address={markets[i]} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ManageOrders
