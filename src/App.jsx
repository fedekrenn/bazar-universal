import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Results />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
