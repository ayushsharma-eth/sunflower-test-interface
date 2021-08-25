import React from 'react'
import { Link } from "react-router-dom";
import { useReturnMarkets } from "../hooks/useReturnMarkets";
import { useReturnMarketNames, useReturnMarketProductCounts } from "../hooks/useReturnMarketAttributes";
import { useEthers } from '@usedapp/core'
import '../css/App.css'
export const RenderMarkets = (props) => {
    
    const merchant = props.merchant;
    const address = useReturnMarkets(merchant)
    const name = useReturnMarketNames(merchant);
    const productCount = useReturnMarketProductCounts(merchant); // PROBLEM
    
    return(
        <div>
            <h3>Markets: 
                {
                    address && name && productCount && productCount.map((e, i) => {
                        return (
                            <div className="boxed">
                                <ul>Market: {address[i]} </ul>
                                <ul>Name: {name[i]} </ul>
                                <ul>Products: {productCount[i] && productCount[i].toString()}</ul>
                                <ul><Link to={"/markets/" + address[i]}><button>View Market</button></Link></ul>
                            </div>
                        )
                    })
                }
            </h3> 
        </div>
    )
}

export default RenderMarkets