import "./style/index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Finish from './page/Finish'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/finish' element={<Finish />} />
    </Routes>
  )
}

export default App

