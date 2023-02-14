import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../../abi/CoinFlip.json'

interface TokenID {
    tokenID: string
}

export default function DidWin() {


const CoinFlipContractAddress = "0xb999a44A9f014B7151cF11fCd11c5749A6e2E461"
let tokenID = "" //for the moment
const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
const coinFlipcontract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )
const address = "0x29Fd00FA40c90aec39AC604D875907874f237baA"


const call_id_status =
    useCall( {
        contract: coinFlipcontract, // instance of called contract
        method: "request_ids", // Method to be called
        args: [address], // Method arguments - address to be checked for balance
        }
    ) ?? {};

if ("value" in  call_id_status) {
    tokenID = call_id_status["value"].toString() as string
}

const call_games_status =
    useCall( {
        contract: coinFlipcontract, // instance of called contract
        method: "games", // Method to be called
        args: [tokenID], // Method arguments - address to be checked for balance
        }
    ) ?? {};

let result = ""
if ("value" in call_games_status) {
    let value = call_games_status["value"]
    if (value["ended"] && value["won"]) {
        result = "You won!"
    }
    else if (value["ended"] && !value["won"]) {
        result = "You lost!"
    }
    else {
        result = "Game is still in progress"
    }
}


return (
    <div>
        <h1>Results</h1>
        <p>{result}</p>
    </div>
)

}