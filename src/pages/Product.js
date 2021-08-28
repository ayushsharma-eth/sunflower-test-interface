import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { useReturnProduct } from '../hooks/useReturnProducts'
import { useReturnMarketName } from '../hooks/useReturnMarketAttributes'
import { utils } from 'ethers'
import { Link } from 'react-router-dom'

function Product(props) {

    const market_address = props.match.params.marketAddress;
    const name = useReturnMarketName(market_address);
    const productId = props.match.params.productId;
    const product = useReturnProduct(market_address, productId);

    const [quantity, setQuantity] = useState(0);
    const [button, setButton] = useState(0);

    const purchase = (e) => {
        e.preventDefault();
        console.log("Button", button);
        console.log("Quantity", quantity.value);
    }

    return (
        <div>
            <Navigation search={true}  placeholder={"Search..."}/>
            <div className="content-container">
                <h1>{product && product.name}</h1>
                <h3>Market: {name}</h3>
                <Link to={"/markets/" + market_address}><button>View Market</button></Link>
                {product ? <div>
                    <h3>Quantity: {product.quantity && product.quantity.toString()}</h3>
                    {product.currency === 0 && <h3>Price: {product.price && utils.formatEther(product.price.toString())} ETH</h3>}
                    {product.currency === 1 && <h3>Price: {product.price && utils.formatEther(product.price.toString())} DAI</h3>}
                </div> : null}
                <form onSubmit={(e) => purchase(e)}>
                    <input id="quantity" ref={(input) => setQuantity(input)} type="text" placeholder="Quantity..." required/>
                    <input onClick={() => setButton(0)} type="submit" value={"Add To Cart"} hidden={false}/>
                    <input onClick={() => setButton(1)} type="submit" value={"Buy Now"} hidden={false}/>
                </form>
            </div>
        </div>
    )
}

export default Product
