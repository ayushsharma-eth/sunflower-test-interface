import React from 'react'
import { Navigation } from '../components/Navigation'
import CreateProducts from '../components/CreateProducts'
import RenderProducts from '../components/RenderProducts'
import { useReturnMarketName, useReturnMerchant } from '../hooks/useReturnMarketAttributes'
import { useEthers } from '@usedapp/core'
import { Link } from 'react-router-dom'

export function Market (props) {
  
  const market_address = props.match.params.marketAddress
  const name = useReturnMarketName(market_address);
  const merchant = useReturnMerchant(market_address);
  const { account } = useEthers();

  return (
      <div>
          <Navigation search={true} placeholder={"Search..."}/>
          <h1>{name}</h1>
          <h3>Merchant: {merchant}</h3>
          {merchant && account && merchant != account ? <Link to={"/merchant/" + merchant}><button>View Merchant</button></Link> : <Link to={"/merchant/" + merchant}><button>View Your Merchant Profile</button></Link>}
          {merchant && account && merchant == account && <CreateProducts MARKET_ADDRESS={market_address} />}
          <RenderProducts MARKET_ADDRESS={market_address} />
      </div>
  )
}

export default Market
