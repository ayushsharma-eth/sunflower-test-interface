import React, { useState } from 'react'
import { BANK_ADDRESS, BANK_ABI } from '../../contracts/Bank'
import { useContractFunction__fix } from '../../hooks/useContractFunction__fix' 
import { utils, Contract } from 'ethers'

function Unstake() {

    const bankInterface = new utils.Interface(BANK_ABI)
    const contract = new Contract(BANK_ADDRESS, bankInterface) 
    const { state, send } = useContractFunction__fix(contract, 'unstake', { transactionName: 'unstake' });

    const [unstakeAmount, setUnstakeAmount] = useState(0);

    const unstake = (e) => {
        e.preventDefault();
        console.log("Unstake", unstakeAmount.value);
        send(unstakeAmount.value);
        return false;
    }

    return (
        <div>
            <form onSubmit={(e) => unstake(e)}>
                <input id="unstake" ref={(input) => setUnstakeAmount(input)} type="text" placeholder="" required/>
                <input type="submit" value="Unstake" hidden={false}/>
            </form>
        </div>
    )
}

export default Unstake
