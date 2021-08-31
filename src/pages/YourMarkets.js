import React from 'react'
import { Navigation } from '../components/Navigation'
import CreateMarkets from '../components/CreateMarkets';
import RenderMarkets from '../components/RenderMarkets';
import { useEthers } from '@usedapp/core'

export function YourMarkets () {
  const { account } = useEthers()

  return (
      <div>
          <Navigation search={true} placeholder={"Search..."}/>
          <div className="content-container">
            <h1>Your Markets</h1>
            <CreateMarkets/>
            <RenderMarkets merchant={account}/>
          </div>
      </div>
  )
}

export default YourMarkets