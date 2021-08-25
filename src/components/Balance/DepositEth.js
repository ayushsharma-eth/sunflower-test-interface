import React, { useState } from 'react'
import { BANK_ADDRESS, BANK_ABI } from '../../contracts/Bank'
import { useEthers } from '@usedapp/core'
import { useContractFunction__fix } from '../../hooks/useContractFunction__fix'
import { utils, Contract } from 'ethers'

function DepositEth() {

    const { account } = useEthers();

    const bankInterface = new utils.Interface(BANK_ABI)
    const contract = new Contract(BANK_ADDRESS, bankInterface) 
    const { state, send } = useContractFunction__fix(contract, 'depositEth', { transactionName: 'depositEth' });

    const [depositAmount, setDepositAmount] = useState(0);

    const deposit = (e) => {
        e.preventDefault();
        console.log("Deposit", depositAmount.value);
        send(account, {value: depositAmount.value});
        return false;
    }

    return (
        <div>
            <form onSubmit={(e) => deposit(e)}>
                <input id="depositETH" ref={(input) => setDepositAmount(input)} type="text" placeholder="" required/>
                <input type="submit" value="Deposit" hidden={false}/>
            </form>
        </div>
    )
}

export default DepositEth
