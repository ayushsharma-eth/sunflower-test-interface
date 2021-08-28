import { MARKET_ABI } from '../contracts/Market'
import { useContractCall, useContractCalls } from '@usedapp/core'
import { useReturnProductCount } from "../hooks/useReturnMarketAttributes";
import { utils } from "ethers"

export const useReturnProducts = (marketAddress) => {

    const count = useReturnProductCount(marketAddress);

    const marketInterface = new utils.Interface(MARKET_ABI)

    return useContractCalls(
        count ? [...Array(parseInt(count.toString()))].map((e, i) => ({
          abi: marketInterface,
          address: marketAddress,
          method: 'products',
          args: [i],
        })) : []
    )
}

export const useReturnProduct = (marketAddress, productId) => {

    const marketInterface = new utils.Interface(MARKET_ABI)

    return useContractCall(
      marketAddress && {
          abi: marketInterface,
          address: marketAddress,
          method: 'products',
          args: [productId],
        }
    ) ?? []
}

export const useReturnCategories = (marketAddress) => {

    const count = useReturnProductCount(marketAddress);

    const marketInterface = new utils.Interface(MARKET_ABI)

    return useContractCalls(
        count ? [...Array(parseInt(count.toString()))].map((e, i) => ({
          abi: marketInterface,
          address: marketAddress,
          method: 'returnCategory',
          args: [i],
        })) : []
    )
}

export const useReturnRegions = (marketAddress) => {

  const count = useReturnProductCount(marketAddress);

  const marketInterface = new utils.Interface(MARKET_ABI)

  return useContractCalls(
      count ? [...Array(parseInt(count.toString()))].map((e, i) => ({
        abi: marketInterface,
        address: marketAddress,
        method: 'returnRegion',
        args: [i],
      })) : []
  )
}