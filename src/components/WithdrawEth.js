import React, { useState } from 'react'
import { BANK_ADDRESS, BANK_ABI } from '../contracts/Bank'
import { useEthers } from '@usedapp/core' 
import { useContractFunction__fix } from '../hooks/useContractFunction__fix'
import { utils, Contract } from 'ethers'

function WithdrawEth() {

    const bankInterface = new utils.Interface(BANK_ABI)
    const contract = new Contract(BANK_ADDRESS, bankInterface) 
    const { state, send } = useContractFunction__fix(contract, 'withdrawEth', { transactionName: 'withdrawEth' });

    const [withdrawAmount, setWithdrawAmount] = useState(0);

    const withdraw = (e) => {
        e.preventDefault();
        console.log("Withdraw", withdrawAmount.value);
        send(withdrawAmount.value);
        return false;
    }

    return (
        <div>
            <form onSubmit={(e) => withdraw(e)}>
                <input id="withdrawETH" ref={(input) => setWithdrawAmount(input)} type="text" placeholder="" required/>
                <input type="submit" value="Withdraw" hidden={false}/>
            </form>
        </div>
    )
}

export default WithdrawEth
