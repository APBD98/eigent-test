import './App.css'
import DetailPage from './pages/DetailPage'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/:id' Component={DetailPage}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
