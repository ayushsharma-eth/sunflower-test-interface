import React, { useState } from 'react'
import { MARKET_FACTORY_ADDRESS, MARKET_FACTORY_ABI } from '../contracts/MarketFactory'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { useContractFunction__fix } from '../hooks/useContractFunction__fix'



export const CreateMarkets = () => {

    const marketFactoryInterface = new utils.Interface(MARKET_FACTORY_ABI)
    const contract = new Contract(MARKET_FACTORY_ADDRESS, marketFactoryInterface)  

    const { state, send } = useContractFunction__fix(contract, 'createMarket', { transactionName: 'createMarket' });

    const [task, setTask] = useState(0);

    function createMarket (e) {
        e.preventDefault();
        console.log(task.value);
        send(task.value);
        return false;
    }

    return(
        <div>
            <h3>Create Markets</h3>
            <form onSubmit={(e) => createMarket(e)}>
                <input id="createMarket" ref={(input) => setTask(input)} type="text" placeholder="Name..." required/>
                <input type="submit" hidden={false}/>
            </form>
        </div>
    )
}

export default CreateMarkets
