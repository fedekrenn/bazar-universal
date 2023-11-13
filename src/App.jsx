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
        <Route path='/items/:id' element={<Detail />} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
