import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes,  Route, Navigate} from 'react-router-dom'
import ConnectWallet from './components/ConnectWallet'
import CoinFlip from './components/CoinFlip'
import Lottery from './components/Lottery'
import Nft from './components/Nft'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ConnectWallet/>}/>
        <Route path="/CoinFlip" element={<CoinFlip/>}/>
        <Route path="/Lottery" element={<Lottery/>}/>
        <Route path="/Nft" element={<Nft/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
