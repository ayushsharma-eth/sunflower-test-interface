import { MARKET_ABI } from '../contracts/Market'
import { useContractCall, useEthers } from '@usedapp/core'
import { useReturnMarkets } from './useReturnMarkets'
import { useReturnProductCount } from "../hooks/useReturnMarketAttributes";
import { utils } from "ethers"

export const useReturnProductOrders = (market_address, productId) => {
    const marketInterface = new utils.Interface(MARKET_ABI)

    return useContractCall(
        {
          abi: marketInterface,
          address: market_address,
          method: 'returnOrders',
          args: [productId],
        }
    ) ?? []
}

