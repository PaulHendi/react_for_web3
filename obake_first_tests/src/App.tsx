import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Connector from "./components/Connector"
import {Config} from '@usedapp/core'
import Play from './components/CoinFlip/Transaction'
import MintNFT from './components/MintNFT/Transaction'

interface ConfigProps {
  config: Config
}


function App({config} : ConfigProps) {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Connector config={config}/>} />
        <Route path="/mint" element={<MintNFT/>} />
        <Route path="/Lottery" element={<h1>Lottery</h1>} />
        <Route path="/coinflip" element={<Play/>} />
        <Route path="/staking" element={<h1>Staking</h1>} />
      </Routes>
    </Router>
  )
}

export default App
