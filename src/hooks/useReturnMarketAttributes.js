import { MARKET_ABI } from '../contracts/Market'
import { useContractCalls, useContractCall } from '@usedapp/core'
import { useReturnMarkets } from "../hooks/useReturnMarkets";
import { utils } from "ethers"

export const useReturnMarketNames = (account) => {
    const address = useReturnMarkets(account)
    
    const marketInterface = new utils.Interface(MARKET_ABI)

    return useContractCalls(
        address ? address.map((e, i) => ({
          abi: marketInterface,
          address: address[i],
          method: 'name',
          args: [],
        })) : []
    )
}

export const useReturnMarketName = (marketAddress) => {
  
  const marketInterface = new utils.Interface(MARKET_ABI)

  const [name] =
    useContractCall(
      marketAddress && {
          abi: marketInterface,
          address: marketAddress,
          method: 'name',
          args: [],
        }
    ) ?? []
  return name
}

export const useReturnMarketProductCounts = (account) => {
    const address = useReturnMarkets(account)
    
    const marketInterface = new utils.Interface(MARKET_ABI)

    return useContractCalls(
        address ? address.map((e, i) => ({
          abi: marketInterface,
          address: address[i],
          method: 'totalProducts',
          args: [],
        })) : []
    )
}

export const useReturnProductCount = (marketAddress) => {
  
  const marketInterface = new utils.Interface(MARKET_ABI)

  const [count] =
    useContractCall(
      marketAddress && {
          abi: marketInterface,
          address: marketAddress,
          method: 'totalProducts',
          args: [],
        }
    ) ?? []
  return count
}

export const useReturnMerchant = (marketAddress) => {
  
  const marketInterface = new utils.Interface(MARKET_ABI)

  const [merchant] =
    useContractCall(
      marketAddress && {
          abi: marketInterface,
          address: marketAddress,
          method: 'merchant',
          args: [],
        }
    ) ?? []
  return merchant
}
