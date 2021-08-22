/* eslint-disable eqeqeq */
import React from 'react'
import Navigation from '../components/Navigation';
import '../App.css'
import { useReturnAllMarkets, useReturnAllMarketNames, useReturnAllMarketMerchants } from '../hooks/useReturnAllMarkets';
import { Link } from "react-router-dom";
import { metaphone } from 'metaphone'


export const Results = (props) => {
    
    const query = props.match.params.query;
    const addresses = useReturnAllMarkets();
    const names = useReturnAllMarketNames();
    const merchants = useReturnAllMarketMerchants();

    return (
        <div>
            <Navigation search={true} placeholder={query} />
            <h3>Results for: {query}</h3>
            <div>
                <h3>Markets: </h3>{addresses && names && merchants && addresses.map((e, i) => {
                    return (
                        <h3>
                            {metaphone(names[i]) == metaphone(query) ? <div className="boxed">
                                <ul>Market: {addresses[i]}</ul>
                                <ul>Name: {names[i]}</ul>
                                <ul>Merchant: {merchants[i]}</ul>
                                <ul><Link to={"/markets/" + addresses[i]}><button>View Market</button></Link></ul>
                            </div> : null}
                        </h3>
                    )
                })}
            </div>
        </div>
    )
}

export default Results