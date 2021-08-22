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
          <h2>Merchant: {merchant}</h2>
          {account && merchant == account && <CreateMarkets/>}
          <RenderMarkets merchant={merchant}/>
      </div>
  )
}

export default Merchant