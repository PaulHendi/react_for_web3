import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../abi/CoinFlip.json'
import Call from './Call'
import DidWin from './DidWin'

export default function Play() {
    const CoinFlipContractAddress = "0xBa962CdB7f12d60ECB198E8710DE7A401493E485"
    const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
    const contract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )
    const { state, send } = useContractFunction(contract, 'play', { transactionName: 'play' })
  
    const play = (ftmAmount: string) => {
      void send(0, {value: utils.parseEther(ftmAmount), gasLimit: 2500000})
    }
  
    return (
      <div>
        <button onClick={() => play('0.1')}>Play</button>
        <Call/>
        <DidWin/>
      </div>
    )
  }



