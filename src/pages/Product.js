import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { useReturnProduct } from '../hooks/useReturnProducts'
import { useReturnMarketName } from '../hooks/useReturnMarketAttributes'
import { utils } from 'ethers'
import { Link } from 'react-router-dom'
import BuyNow from '../components/BuyNow'

function Product(props) {

    const market_address = props.match.params.marketAddress;
    const name = useReturnMarketName(market_address);
    const productId = props.match.params.productId;
    const product = useReturnProduct(market_address, productId);

    const [quantity, setQuantity] = useState(0);
    const [button, setButton] = useState(0);
    const [showForm, setShowForm] = useState(0);

    const purchase = (e) => {
        e.preventDefault();
        console.log("Button", button);
        console.log("Quantity", quantity.value);
    }

    return (
        <div>
            <Navigation search={true}  placeholder={"Search..."}/>
            <div className="content-container">
                {product && showForm ? <BuyNow price={product.price} productId={productId} market_address={market_address}/> : null}
                <h1>{product && product.name}</h1>
                <h3>Market: {name}</h3>
                <Link to={"/markets/" + market_address}><button>View Market</button></Link>
                {product ? <div>
                    <h3>Quantity: {product.quantity && product.quantity.toString()}</h3>
                    {product.currency === 0 && <h3>Price: {product.price && utils.formatEther(product.price.toString())} ETH</h3>}
                    {product.currency === 1 && <h3>Price: {product.price && utils.formatEther(product.price.toString())} DAI</h3>}
                </div> : null}
                <button onClick={() => !showForm ? setShowForm(true) : setShowForm(false)}>Buy Now</button>
                <form onSubmit={(e) => purchase(e)}>
                    <input id="quantity" ref={(input) => setQuantity(input)} type="text" placeholder="Quantity..." required/>
                    <input onClick={() => setButton(0)} type="submit" value={"Add To Cart"} hidden={false}/>
                </form>
            </div>
        </div>
    )
}

export default Product
