import React, { useState } from 'react'
import {ERC20BASIC_ABI, ERC20BASIC_ADDRESS} from '../../contracts/ERC20Basic'
import { BANK_ADDRESS } from '../../contracts/Bank' 
import { utils, Contract } from 'ethers'
import { useContractFunction__fix } from '../../hooks/useContractFunction__fix'

function Allowance() {

    const [allowance, setAllowance] = useState(0);

    const erc20Interface = new utils.Interface(ERC20BASIC_ABI)
    const contract = new Contract(ERC20BASIC_ADDRESS, erc20Interface) 
    const { state, send } = useContractFunction__fix(contract, 'approve', { transactionName: 'approve' });

    const allow = (e) => {
        e.preventDefault();
        console.log(allowance.value);
        send(BANK_ADDRESS, allowance.value);
    }

    return (
        <div>
            <form onSubmit={(e) => allow(e)}>
                <input id="allowance" ref={(input) => setAllowance(input)} type="text" placeholder="Amount..." required/>
                <input type="submit" value="Allow" hidden={false}/>
            </form>
        </div>
    )
}

export default Allowance
