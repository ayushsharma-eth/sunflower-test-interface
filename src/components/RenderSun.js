import React, { useState } from 'react'
import { BANK_ADDRESS, BANK_ABI } from '../contracts/Bank'
import { useStakedBalance, useUnstakedBalance } from '../hooks/useBankAttributes'
import { utils, Contract } from 'ethers'
import Allowance from '../components/Allowance'
import Unstake from '../components/Unstake'
import { useContractFunction__fix } from '../hooks/useContractFunction__fix'

function RenderSun() {
    const stakedBalance = useStakedBalance();
    const unstakedBalance = useUnstakedBalance();

    const [stakeAmount, setStakeAmount] = useState(0);
    


    const bankInterface = new utils.Interface(BANK_ABI)
    const contract = new Contract(BANK_ADDRESS, bankInterface) 
    const { state, send } = useContractFunction__fix(contract, 'stake', { transactionName: 'stake' });

    const stake = (e) => {
        e.preventDefault();
        console.log(stakeAmount.value);
        send(stakeAmount.value);
        return false;
    }

    return (
        <div>
            <ul>
                <h3>Sun Balance (Staked): {stakedBalance && utils.formatEther(stakedBalance)} Suns</h3>
                <Allowance />
                <form onSubmit={(e) => stake(e)}>
                    <input id="stake" ref={(input) => setStakeAmount(input)} type="text" placeholder="Amount..." required/>
                    <input id="stake" type="submit" value="Stake" hidden={false}/>
                </form>
                <Unstake />
            </ul>
            <ul>
                <h3>Sun Balance (Unstaked): {unstakedBalance && utils.formatEther(unstakedBalance)} Suns</h3>
                <button>Stake</button>
                <button>Deposit</button>
                <button>Withdraw</button>
            </ul>
        </div>
    )
}

export default RenderSun
