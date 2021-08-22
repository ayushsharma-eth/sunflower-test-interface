import React from 'react'
import { useReturnProducts, useReturnCategories } from '../hooks/useReturnProducts'
import './testSplit.css';
import { Link } from 'react-router-dom';
import { useEthers } from '@usedapp/core'
import { useReturnMerchant } from '../hooks/useReturnMarketAttributes';

export function RenderProducts (props) {      

    const products = useReturnProducts(props.MARKET_ADDRESS);
    const categories = useReturnCategories(props.MARKET_ADDRESS);
    const { account } = useEthers();
    const merchant = useReturnMerchant(props.MARKET_ADDRESS);

    return(
        <div> 
            {products && categories && products.length > 0 ? (<h3>{merchant && account && merchant == account ? <div>Your Products</div>: <div>Products</div>}{
                    <div>{products && products.map((e, i) => 
                        <div key={Math.random(1, 9999)}className="boxed">
                            <div className="splitscreen">
                                <div className="left">
                                    <ul key={Math.random(1, 9999)}>Name: {products[i] && products[i].name}</ul>
                                    <ul key={Math.random(1, 9999)}>Quantity: {products[i] && products[i].quantity.toString()}</ul>
                                    <ul key={Math.random(1, 9999)}>Price: {products[i] && products[i].price.toString()}</ul>
                                    <ul key={Math.random(1, 9999)}>Currency: {products[i] && products[i].currency.toString()}</ul>
                                </div>
                                <div className="right">
                                    <ul key={Math.random(1, 9999)}>Region: {0}</ul>
                                    <ul key={Math.random(1, 9999)}>Category: {categories[i]}</ul>
                                    <ul key={Math.random(1, 9999)}>Pending Orders: </ul>
                                    <ul key={Math.random(1, 9999)}><Link to={"/markets/" + props.MARKET_ADDRESS + "/products/" + i}><button>View Product</button></Link></ul>
                                </div>
                            </div>
                        </div>)
            }</div>}</h3>) : (merchant && account && merchant == account ? <h3>You do not have any products</h3> : <h3>This market does not have any products</h3> )}
        </div>
    )
}

export default RenderProducts