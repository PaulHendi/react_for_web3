import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import SFT from '../../abi/SFT.json'

export default function MintNFT() {
    const CoinFlipContractAddress = "0x6643fBC0D66fc580de15a0A0678D4c1f41b0071b"
    const CoinFlipInterface = new utils.Interface(SFT.abi)
    const contract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )
    const { state, send } = useContractFunction(contract, 'mint', { transactionName: 'mint' })
  
    const play = (ftmAmount: string) => {
      void send(1, {value: utils.parseEther(ftmAmount), gasLimit: 2500000})
    }
  
    return (
      <div>
        <button onClick={() => play('0.01')}>Mint</button>
      </div>
    )
  }



