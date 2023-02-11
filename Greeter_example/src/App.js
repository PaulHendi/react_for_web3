import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import WalletBalance from './WalletBalance';

// Update with the contract address logged out to the CLI when it was deployed 
const greeterAddress = "0xD2dd2D593802148C95e0ef1C187832cc215C5AEA"

function App() {
  // store greeting in local state
  const [greeting, setGreetingValue] = useState()
  const [signer_address, setSignerAddress] = useState(null)
  const [provider, setProvider] = useState(null)
  const [signer, setSigner] = useState(null)

  let data;



  async function connectWallet(){
    if (typeof window.ethereum !== 'undefined') {
      requestAccount()
      let _provider = new ethers.providers.Web3Provider(window.ethereum);
      let _signer = await _provider.getSigner();
      setSignerAddress(await _signer.getAddress())
      setProvider(_provider)
      setSigner(_signer)
    }
  }

  async function disconnectWallet() {
    setSigner(null);
  }

  

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current greeting value
  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, provider)
      try {
        data = await contract.greet()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract, send an update
  async function setGreeting() {
    if (!greeting) return
    
    const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer)
    const transaction = await contract.setGreeting(greeting)
    await transaction.wait()
    fetchGreeting()
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>ConnectWallet</button>
        <button onClick={disconnectWallet}>DisconnectWallet</button>
        <button onClick={fetchGreeting}>Fetch Greeting</button>
        <button onClick={setGreeting}>Set Greeting</button>
        <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" />
        <WalletBalance provider={provider} address={signer_address}  />
      </header>
    </div>
  );
}

export default App;