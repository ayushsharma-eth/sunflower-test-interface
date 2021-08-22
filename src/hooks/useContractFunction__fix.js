import { useCallback, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { usePromiseTransaction } from '@usedapp/core/dist/esm/src/hooks/usePromiseTransaction'

export function connectContractToSigner__fix(contract, options, library) {
    if (contract.signer) {
        return contract;
    }
    if (options === null || options === void 0 ? void 0 : options.signer) {
        return contract.connect(options.signer);
    }
    if (library === null || library === void 0 ? void 0 : library.getSigner()) {
        return contract.connect(library.getSigner());
    }
    throw new TypeError('No signer available in contract, options or library');
}
export function useContractFunction__fix(contract, functionName, options) {
    const { library, chainId } = useEthers();
    const { promiseTransaction, state } = usePromiseTransaction(chainId, options);
    const [events, setEvents] = useState(undefined);
    const send = useCallback(async (...args) => {
        const contractWithSigner = connectContractToSigner__fix(contract, options, library);
        
        const sendPromise = contractWithSigner[functionName](...args).then(
            (result) => {
              // Need to add chainId here to prevent "TypeError: Unsupported Chain" error message
              result.chainId = chainId
              return result
            }
          )
        
        const receipt = await promiseTransaction(sendPromise);
        if (receipt) {
            if (receipt.logs && receipt.logs.length > 0) {
                //setEvents(receipt.logs.map((log) => contract.interface.parseLog(log)));
                setEvents(receipt.logs.reduce((result, log) => {
                    if (log.address === contract.address) {
                      result.push(contract.interface.parseLog(log))
                    }
                    return result
                  }, []))
            }
            else {
                setEvents([]);
            }
        }
    }, [contract, functionName, options]);
    return { send, state, events };
}
//# sourceMappingURL=useContractFunction.js.map