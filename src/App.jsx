import { Routes, Route } from 'react-router-dom'
// Pages
import Home from './pages/Home/Home'
import Results from './pages/Results/Results'
import Detail from './pages/Detail/Detail'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<Results />} />
        <Route path='/items/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
