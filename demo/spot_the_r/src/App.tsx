import "./style/index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Finish from './page/Finish'

function App() {

  return (
    <Routes>
      <Route path="/demo/spot_the_r/" element={<Home />} />
      <Route path='/demo/spot_the_r/finish' element={<Finish />} />
    </Routes>
  )
}

export default App

