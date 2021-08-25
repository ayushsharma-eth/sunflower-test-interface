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
            <h3>Create Product</h3>
            <form className="boxed" onSubmit={(e) => createProduct(e)}>
                <div className="splitscreen">
                    <div className="left">
                        <ul>
                            <strong>Name {}
                                <input id="createProduct" ref={(input) => setName(input)} type="text" placeholder="" required/>
                            </strong> 
                        </ul>
                        <ul>
                            <strong>Quantity {}
                            <input id="createProduct" ref={(input) => setQuantity(input)} type="text" placeholder="" required/>
                            </strong>
                        </ul>
                        <ul>
                            <strong>Price {}
                            <input id="createProduct" ref={(input) => setPrice(input)} type="text" placeholder="" required/>
                            <select id="dropdown" ref = {(input) => setCurrency(input)} required>
                                <option value="0">ETH</option>
                                <option value="1">DAI</option>
                            </select>
                            </strong>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <strong> Region {}
                            <input id="createProduct" ref={(input) => setRegion(input)} type="text" placeholder="Region..." required/>
                            </strong>
                        </ul>
                        <ul>
                            <strong> Category {}
                            <input id="createProduct" ref={(input) => setCategory(input)} type="text" placeholder="Category..." required/>
                            </strong>
                        </ul>
                    </div>
                </div>
                <div>
                    <input id="createProduct" type="file" required/>
                </div>
                <input type="submit" hidden={false}/>
            </form>
        </div>
    )
}

export default CreateProducts
