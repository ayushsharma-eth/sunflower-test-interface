import React, { useState } from 'react'
import { BANK_ADDRESS, BANK_ABI } from '../contracts/Bank'
import { useContractFunction__fix } from '../hooks/useContractFunction__fix'
import { utils, Contract } from 'ethers'

function WithdrawSun() {

    const bankInterface = new utils.Interface(BANK_ABI)
    const contract = new Contract(BANK_ADDRESS, bankInterface) 
    const { state, send } = useContractFunction__fix(contract, 'withdrawSun', { transactionName: 'withdrawSun' });

    const [withdrawAmount, setWithdrawAmount] = useState(0);

    const withdraw = (e) => {
        e.preventDefault();
        console.log("withdrawSun", withdrawAmount.value);
        send(withdrawAmount.value);
        return false;
    }

    return (
        <div>
            <form onSubmit={(e) => withdraw(e)}>
                <input id="withdrawSun" ref={(input) => setWithdrawAmount(input)} type="text" placeholder="Amount..." required/>
                <input type="submit" value="Withdraw" hidden={false}/>
            </form>
        </div>
    )
}

export default WithdrawSun