import React from 'react'
import { Navigation } from '../components/Navigation'
import CreateProducts from '../components/CreateProducts'
import { useReturnMarketName, useReturnMerchant } from '../hooks/useReturnMarketAttributes'
import { useEthers } from '@usedapp/core'

export function CreateProduct (props) {
  
  const market_address = props.match.params.marketAddress
  const name = useReturnMarketName(market_address);
  const merchant = useReturnMerchant(market_address);
  const { account } = useEthers();

  return (
      <div>
          <Navigation search={true} placeholder={"Search..."}/>
          <div className="content-container">
            <h1>{name}</h1>
            {merchant && account && merchant == account && <CreateProducts MARKET_ADDRESS={market_address} />}
          </div>
      </div>
  )
}

export default CreateProduct