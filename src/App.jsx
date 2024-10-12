import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import './App.css'
import About from "./components/about/About"
import Skills from "./skills/Skills"
import Contact from "./contact/Contact"
import Projects from "./components/projects/Projects"
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App