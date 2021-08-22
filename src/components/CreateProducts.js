import React, {useState} from 'react'
import { MARKET_ABI } from '../contracts/Market'
import {Contract, utils} from 'ethers'
import { useContractFunction__fix } from '../hooks/useContractFunction__fix'

export function CreateProducts (props) {
    
    const [name, setName] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [currency, setCurrency] = useState(0);
    const [region, setRegion] = useState(0);
    const [category, setCategory] = useState(0);

    const marketInterface = new utils.Interface(MARKET_ABI);
    const MARKET_ADDRESS = props.MARKET_ADDRESS;
    const contract = new Contract(MARKET_ADDRESS, marketInterface);  

    const { state, send } = useContractFunction__fix(contract, 'createProduct', { transactionName: 'createProduct' });

    function createProduct (e) {
        e.preventDefault();
        send(name.value, quantity.value, price.value, currency.value, [0], [0]);
        Array.from(document.querySelectorAll("createProduct")).forEach(
            input => (input.value = "")
        );
        setName(null);
        return false;
    }

    return (
        <div>
            <h3>Create Products</h3>
            <form onSubmit={(e) => createProduct(e)}>
                <input id="createProduct" ref={(input) => setName(input)} type="text" placeholder="Name..." required/>
                <input id="createProduct" ref={(input) => setQuantity(input)} type="text" placeholder="Quantity..." required/>
                <input id="createProduct" ref={(input) => setPrice(input)} type="text" placeholder="Price..." required/>
                <input id="createProduct" ref={(input) => setCurrency(input)} type="text" placeholder="Currency..." required/>
                <input id="createProduct" ref={(input) => setRegion(input)} type="text" placeholder="Region..." required/>
                <input id="createProduct" ref={(input) => setCategory(input)} type="text" placeholder="Category..." required/>
                <input type="submit" hidden={false}/>
            </form>
        </div>
    )
}

export default CreateProducts
