import { MARKET_FACTORY_ADDRESS, MARKET_FACTORY_ABI } from '../contracts/MarketFactory'
import { useContractCall } from '@usedapp/core'
import { utils } from "ethers"

export const useReturnMarkets = (merchant) => {
    const marketFactoryInterface = new utils.Interface(MARKET_FACTORY_ABI)

    const [markets] =
    useContractCall(
        merchant && {
          abi: marketFactoryInterface,
          address: MARKET_FACTORY_ADDRESS,
          method: 'returnMarkets',
          args: [merchant],
        }
    ) ?? []
  return markets
}

export default useReturnMarkets