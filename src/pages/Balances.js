import React from 'react'
import Navigation from '../components/Navigation'
import { useSunBalance } from '../hooks/useSunBalance'
import { useEthers } from '@usedapp/core'
import { useDaiBalance } from '../hooks/useBankAttributes'
import { utils } from 'ethers'
import RenderSun from '../components/RenderSun'
import RenderEth from '../components/RenderEth'

export const Balances = () => {

    const { account } = useEthers();
    const walletBalance = useSunBalance();
    const daiBalance = useDaiBalance();
    
    return (
        <div>
            <Navigation search={true} category={3} placeeholder={"Search..."}/>
            <div className="content-container">
                <h1>Active Account: {account}</h1>
                <h3>Wallet Balance: {walletBalance && utils.formatEther(walletBalance)} Suns</h3>
                <h2>Bank</h2>
                <div> {/* Each ul component below likely to be React Component */}
                    <RenderSun />
                    <RenderEth />
                    <div className="boxed">
                        <ul>
                            <h3>Dai Balance: {daiBalance && utils.formatEther(daiBalance)} Dai</h3>
                            <button>Deposit</button>
                            <button>Withdraw</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balances
