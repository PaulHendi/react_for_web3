import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../abi/CoinFlip.json'

export default function Events() {

    const CoinFlipContractAddress = "0xBa962CdB7f12d60ECB198E8710DE7A401493E485"
    const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
    const coinFlipcontract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )    

    const logs = useLogs(
        {
          contract: coinFlipcontract,
          event: 'GamePlay',
          args: [],
        },
        {
          fromBlock: 0,
          toBlock: 'latest',
        }
        
      )
    let data = logs?.value?.forEach((log) => {log.data})
      
      
    return (
        <div>
            <h1>Events</h1>
            <p>{data}</p>
        </div>
    )

}