import Section from './components/Section'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Price from './pages/Price'
import Bridge from './pages/Bridge'
import Relayer from './pages/Relayer'
import Swap from './pages/Swap'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/price' element={<Price />} />
        <Route path='/bridge' element={<Bridge />} />
        <Route path='/relayer' element={<Relayer />} />
        <Route path='/swap' element={<Swap />} />
        <Route path='/section' element={<Section />} />
      </Routes>
    </Router>
  )
}