import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/results' element={<Results />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
