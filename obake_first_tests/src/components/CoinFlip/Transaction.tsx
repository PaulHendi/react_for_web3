import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { useCall, useLogs, useTokenBalance, useContractFunction } from '@usedapp/core'
import CoinFlip from '../../abi/CoinFlip.json'
import DidWin from './DidWin'
import {Wrapper, CustomInput, LabelInput, RadioInput, Label} from  "../../styles/HeadsOrTail.jsx"
import styled from 'styled-components'

export default function Play() {
    const CoinFlipContractAddress = "0xb999a44A9f014B7151cF11fCd11c5749A6e2E461"
    const CoinFlipInterface = new utils.Interface(CoinFlip.abi)
    const contract = CoinFlipContractAddress && (new Contract(CoinFlipContractAddress, CoinFlipInterface) )
    const { state, send } = useContractFunction(contract, 'play', { transactionName: 'play' })
    const COIN_FLIP_PRICE = "0.1";
  
    const play = () => {
      // Get ouiput from input field
      const choice = document.getElementsByName('heads_or_tail')[0].checked as boolean

      if (choice) {
        void send(1, {value: utils.parseEther(COIN_FLIP_PRICE), gasLimit: 2500000})}
      else {
        void send(0, {value: utils.parseEther(COIN_FLIP_PRICE), gasLimit: 2500000})}
      console.log(choice)
      //void send(0, {value: utils.parseEther(COIN_FLIP_PRICE), gasLimit: 2500000})
    }
    
        
     
    return (
      <div>
        <h1>Play</h1>
        <p>Cost: 0.1 FTM</p>
        <p>Which side of a coin ?</p>
        <Wrapper>
           <CustomInput>
             <Label>
               <RadioInput id="heads" name="heads_or_tail" defaultChecked/>
               <LabelInput htmlFor="heads">Heads</LabelInput>
              </Label>
           </CustomInput>
           <CustomInput>
             <Label>
               <RadioInput id="tail" name="heads_or_tail"/>
               <LabelInput htmlFor="tail">Tail</LabelInput>
              </Label>
           </CustomInput>
        </Wrapper>
        <button onClick={() => play()}>Play</button>
        <DidWin/>
      </div>
    )
  }



