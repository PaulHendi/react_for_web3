import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Connect wallet</h1>} />
        <Route path="/mint" element={<h1>Mint an NFT</h1>} />
        <Route path="/Lottery" element={<h1>Lottery</h1>} />
        <Route path="/coinflip" element={<h1>CoinFlip</h1>} />
      </Routes>
    </Router>
  )
}

export default App
