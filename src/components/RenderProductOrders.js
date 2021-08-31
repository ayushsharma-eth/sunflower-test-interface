import React from 'react'
import { useReturnProductCount } from '../hooks/useReturnMarketAttributes'
import RenderOrder from './RenderOrder'

function RenderProductOrders(props) {

    const productCount = useReturnProductCount(props.market_address);

    return (
        <div>
            {productCount && [...Array(parseInt(productCount.toString()))].map((e, i) => {
                return <RenderOrder market_address={props.market_address} productId={i} />
            })}
        </div>
    )
}

export default RenderProductOrders
