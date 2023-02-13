import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../abi/CoinFlip.json'

interface TokenID {
    tokenID: string
}

export default function DidWin() {


const CoinFlipContractAddress = "0xBa962CdB7f12d60ECB198E8710DE7A401493E485"
const tokenID = "8535756271203379587723011026139617565979878121373321161064296220413401851982" //for the moment
const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
const coinFlipcontract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )

const { value, error } =
    useCall( {
        contract: coinFlipcontract, // instance of called contract
        method: "games", // Method to be called
        args: [tokenID], // Method arguments - address to be checked for balance
        }
    ) ?? {};

console.log(value)

return (
    <div>
        <h1>Results</h1>
    </div>
)

}