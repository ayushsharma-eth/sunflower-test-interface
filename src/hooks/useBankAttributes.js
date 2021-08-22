import { BANK_ADDRESS, BANK_ABI } from '../contracts/Bank'
import { useContractCall, useEthers } from '@usedapp/core'
import { utils } from "ethers"

export const useStakedBalance = () => {
    const bankInterface = new utils.Interface(BANK_ABI)

    const { account } = useEthers();

    const [stake] =
    useContractCall(
        account && {
          abi: bankInterface,
          address: BANK_ADDRESS,
          method: 'stakedBalance',
          args: [account],
        }
    ) ?? []
  return stake
}

export const useUnstakedBalance = () => {
    const bankInterface = new utils.Interface(BANK_ABI)

    const { account } = useEthers();

    const [unstaked] =
    useContractCall(
        account && {
          abi: bankInterface,
          address: BANK_ADDRESS,
          method: 'sunBalance',
          args: [account],
        }
    ) ?? []
  return unstaked
}

export const useEthereumBalance = () => {
    const bankInterface = new utils.Interface(BANK_ABI)

    const { account } = useEthers();

    const [eth] =
    useContractCall(
        account && {
          abi: bankInterface,
          address: BANK_ADDRESS,
          method: 'ethBalance',
          args: [account],
        }
    ) ?? []
  return eth
}

export const useDaiBalance = () => {
    const bankInterface = new utils.Interface(BANK_ABI)

    const { account } = useEthers();

    const [dai] =
    useContractCall(
        account && {
          abi: bankInterface,
          address: BANK_ADDRESS,
          method: 'daiBalance',
          args: [account],
        }
    ) ?? []
  return dai
}