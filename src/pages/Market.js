import React from 'react'
import { Navigation } from '../components/Navigation'
import RenderProducts from '../components/RenderProducts'
import { useReturnMarketName, useReturnMerchant } from '../hooks/useReturnMarketAttributes'
import { useEthers } from '@usedapp/core'
import { Link } from 'react-router-dom'

const Market = (props) => {
  
  const market_address = props.match.params.marketAddress
  const name = useReturnMarketName(market_address);
  const merchant = useReturnMerchant(market_address);
  const { account } = useEthers();

  return (
      <div>
          <Navigation search={true} selector={"All"} placeholder={"Search..."}/>
          <div className="content-container">
            <h1>{name}</h1>
            <h3>Merchant: {merchant}</h3>
            <div>
              {merchant && account && merchant != account ? <Link to={"/merchant/" + merchant}><button>View Merchant</button></Link> : <Link to={"/merchant/" + merchant}><button>View Your Merchant Profile</button></Link>}
            </div>
            <div>
              {merchant && account && merchant == account && <Link to={"/markets/" + market_address + "/createproducts"}><button>Create Product</button></Link>}
            </div>
            <RenderProducts MARKET_ADDRESS={market_address} />
          </div>
      </div>
  )
}

export default Market
