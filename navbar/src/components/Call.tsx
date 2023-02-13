import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../abi/CoinFlip.json'

export default function Call() {


const CoinFlipContractAddress = "0xBa962CdB7f12d60ECB198E8710DE7A401493E485"
const address = "0x29Fd00FA40c90aec39AC604D875907874f237baA"
const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
const coinFlipcontract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )

const { value, error } =
    useCall( {
        contract: coinFlipcontract, // instance of called contract
        method: "request_ids", // Method to be called
        args: [address], // Method arguments - address to be checked for balance
        }
    ) ?? {};

return (
    <div>
        <h1>Call</h1>
        <p>{value?.toString()}</p>
    </div>
)

}