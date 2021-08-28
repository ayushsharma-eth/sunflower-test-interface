import React from 'react'
import { Navigation } from '../components/Navigation'
import CreateMarkets from '../components/CreateMarkets';
import RenderMarkets from '../components/RenderMarkets';
import { useEthers } from '@usedapp/core'

export function Merchant (props) {
  const merchant = props.match.params.merchantAddress
  const { account } = useEthers()

  return (
      <div>
          <Navigation search={true} placeholder={"Search..."}/>
          <div className="content-container">
            <h1>Merchant: {merchant}</h1>
            {account && merchant == account && <CreateMarkets/>}
            <RenderMarkets merchant={merchant}/>
          </div>
      </div>
  )
}

export default Merchant
