import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../../abi/CoinFlip.json'
import DidWin from './DidWin'

export default function Play() {
    const CoinFlipContractAddress = "0xb999a44A9f014B7151cF11fCd11c5749A6e2E461"
    const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
    const contract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )
    const { state, send } = useContractFunction(contract, 'play', { transactionName: 'play' })
  
    const play = (ftmAmount: string) => {
      void send(0, {value: utils.parseEther(ftmAmount), gasLimit: 2500000})
    }
  
    return (
      <div>
        <button onClick={() => play('0.1')}>Play</button>
        <DidWin/>
      </div>
    )
  }



