import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import './App.css'
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App