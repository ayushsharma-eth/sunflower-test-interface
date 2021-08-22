import React from 'react'
import { useEthereumBalance } from '../hooks/useBankAttributes'
import { utils } from 'ethers'
import DepositEth from '../components/DepositEth'
import WithdrawEth from '../components/WithdrawEth'

function RenderEth() {

    const ethereumBalance  = useEthereumBalance();

    return (
        <div>
            <ul>
                <h3>Ethereum Balance: {ethereumBalance && utils.formatEther(ethereumBalance)} Eth</h3>
                <DepositEth />
                <WithdrawEth />
            </ul>
        </div>
    )
}

export default RenderEth
