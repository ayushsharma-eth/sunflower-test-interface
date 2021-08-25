import React, { useState } from 'react'
import { BANK_ADDRESS, BANK_ABI } from '../../contracts/Bank'
import { useContractFunction__fix } from '../../hooks/useContractFunction__fix' 
import { utils, Contract } from 'ethers'

function Stake() {

    const bankInterface = new utils.Interface(BANK_ABI)
    const contract = new Contract(BANK_ADDRESS, bankInterface) 
    const { state, send } = useContractFunction__fix(contract, 'stake', { transactionName: 'stake' });

    const [stakeAmount, setStakeAmount] = useState(0);

    const stake = (e) => {
        e.preventDefault();
        console.log("Stake", stakeAmount.value);
        send(stakeAmount.value);
        return false;
    }

    return (
        <div>
            <form onSubmit={(e) => stake(e)}>
                <input id="stake" ref={(input) => setStakeAmount(input)} type="text" placeholder="Amount..." required/>
                <input type="submit" value="Stake" hidden={false}/>
            </form>
        </div>
    )
}

export default Stake