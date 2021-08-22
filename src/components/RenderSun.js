import React from 'react'
import { useStakedBalance, useUnstakedBalance } from '../hooks/useBankAttributes'
import { utils } from 'ethers'
import Allowance from '../components/Allowance'
import Unstake from '../components/Unstake'
import Stake from '../components/Stake'
import StakeFromSunBalance from '../components/StakeFromSunBalance'
import WithdrawSun from '../components/WithdrawSun'
import DepositSun from '../components/DepositSun'

function RenderSun() {
    const stakedBalance = useStakedBalance();
    const unstakedBalance = useUnstakedBalance();    

    return (
        <div>
            <ul>
                <h3>Sun Balance (Staked): {stakedBalance && utils.formatEther(stakedBalance)} Suns</h3>
                <Allowance />
                <Stake />
                <Unstake />
            </ul>
            <ul>
                <h3>Sun Balance (Unstaked): {unstakedBalance && utils.formatEther(unstakedBalance)} Suns</h3>
                <StakeFromSunBalance />
                <Allowance />
                <DepositSun />
                <WithdrawSun />
            </ul>
        </div>
    )
}

export default RenderSun
