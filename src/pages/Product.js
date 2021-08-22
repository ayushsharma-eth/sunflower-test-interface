import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { useReturnProduct } from '../hooks/useReturnProducts'
import { useReturnMarketName } from '../hooks/useReturnMarketAttributes'

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
            <h1>Market: {name}</h1>
            <h2>Product: {product && product.name}</h2>
            {product ? <div>
                <h3>Quantity: {product.quantity && product.quantity.toString()}</h3>
                <h3>Price: {product.price && product.price.toString()}</h3>
                <h3>Currency: {product.currency}</h3>
            </div> : null}
            <form onSubmit={(e) => purchase(e)}>
                <input id="quantity" ref={(input) => setQuantity(input)} type="text" placeholder="Quantity..." required/>
                <input onClick={() => setButton(0)} type="submit" value={"Add To Cart"} hidden={false}/>
                <input onClick={() => setButton(1)} type="submit" value={"Buy Now"} hidden={false}/>
            </form>
        </div>
    )
}

export default Product
