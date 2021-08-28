import React, { useState } from 'react'
import {BANK_ABI, BANK_ADDRESS } from '../contracts/Bank'
import { Contract, utils } from 'ethers'
import useContractFunction__fix from '../hooks/useContractFunction__fix'

function BuyNow(props) {

    const [firstName, setFirstName] = useState(0);
    const [MI, setMI] = useState(0);
    const [lastName, setLastName] = useState(0);
    const [address, setAddress] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [arbitrator, setArbitrator] = useState(0);

    const productId = props.productId;
    const market_address = props.market_address;
    const price = props.price;

    const bankInterface = new utils.Interface(BANK_ABI);
    const contract = new Contract(BANK_ADDRESS, bankInterface);  

    const { state, send } = useContractFunction__fix(contract, 'purchaseWithEth', { transactionName: 'purchaseWithEth' });


    const purchase = (e) => {
        e.preventDefault();
        send(market_address, productId, address.value, quantity.value, "0", arbitrator.value, {value: price.mul(quantity.value)});
    }


    return (
        <div className="buynow"> 
            <h1>Purchase</h1>
            <form onSubmit={(e) => purchase(e)}>
                <div>
                    <strong>First Name: </strong>
                    <input id="buynowform" ref={(input) => setFirstName(input)} type="text" required/>
                    <strong>MI: </strong>
                    <input id="buynowform" ref={(input) => setMI(input)} type="text"/>
                    <strong>Last Name: </strong>
                    <input id="buynowform" ref={(input) => setLastName(input)} type="text" required/>
                </div>
                <div>
                    <strong>Address: </strong>
                    <input id="buynowform" ref={(input) => setAddress(input)} type="text" required/>
                </div>
                <div>
                    <strong>Quantity: </strong>
                    <input id="buynowform" ref={(input) => setQuantity(input)} type="text" required/>
                </div>
                <div>
                    <strong>Arbitrator: </strong>
                    <input id="buynowform" ref={(input) => setArbitrator(input)} type="text" required/>
                </div>
                <div>
                    <input id="buynowform" type="submit" hidden={false}/>
                </div>
            </form>
      </div>
    )
}

export default BuyNow
