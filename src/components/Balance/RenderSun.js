import React from 'react'
import { useStakedBalance, useUnstakedBalance } from '../../hooks/useBankAttributes'
import { utils } from 'ethers'
import Allowance from './Allowance'
import Unstake from './Unstake'
import Stake from './Stake'
import StakeFromSunBalance from './StakeFromSunBalance'
import WithdrawSun from './WithdrawSun'
import DepositSun from './DepositSun'

function RenderSun() {
    const stakedBalance = useStakedBalance();
    const unstakedBalance = useUnstakedBalance();    

    return (
        <div>
            <div className="boxed">
                <ul>
                    <h3>Sun Balance (Staked): {stakedBalance && utils.formatEther(stakedBalance)} Suns</h3>
                    <Allowance />
                    <Stake />
                    <Unstake />
                </ul>
            </div>
            <div className="boxed">
                <ul>
                    <h3>Sun Balance (Unstaked): {unstakedBalance && utils.formatEther(unstakedBalance)} Suns</h3>
                    <StakeFromSunBalance />
                    <Allowance />
                    <DepositSun />
                    <WithdrawSun />
                </ul>
            </div>
        </div>
    )
}

export default RenderSun
