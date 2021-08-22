import { useContractCall } from '@usedapp/core'
import { ERC20BASIC_ADDRESS, ERC20BASIC_ABI } from '../contracts/ERC20Basic';
import { utils } from "ethers";
import { useEthers } from '@usedapp/core'

export const useSunBalance = () => {
  const { account } = useEthers();

  const sunInterface = new utils.Interface(ERC20BASIC_ABI)

  const [balance] =
  useContractCall(
    account && {
        abi: sunInterface,
        address: ERC20BASIC_ADDRESS,
        method: 'balanceOf',
        args: [account],
      }
  ) ?? []
  return balance
}

export default useSunBalance