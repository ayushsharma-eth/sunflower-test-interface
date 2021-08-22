import { MARKET_FACTORY_ADDRESS, MARKET_FACTORY_ABI } from '../contracts/MarketFactory'
import { useContractCall, useContractCalls } from '@usedapp/core'
import { MARKET_ABI } from '../contracts/Market'
import { utils } from "ethers"

export const useReturnAllMarkets = () => {
    const marketFactoryInterface = new utils.Interface(MARKET_FACTORY_ABI)

    const [markets] =
    useContractCall(
        {
          abi: marketFactoryInterface,
          address: MARKET_FACTORY_ADDRESS,
          method: 'returnAllMarkets',
          args: [],
        }
    ) ?? []
  return markets
}

export const useReturnAllMarketNames = () => {
  const address = useReturnAllMarkets()
  
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

export const useReturnAllMarketMerchants = () => {
  const address = useReturnAllMarkets()
  
  const marketInterface = new utils.Interface(MARKET_ABI)

  return useContractCalls(
      address ? address.map((e, i) => ({
        abi: marketInterface,
        address: address[i],
        method: 'merchant',
        args: [],
      })) : []
  )
}

export default useReturnAllMarkets