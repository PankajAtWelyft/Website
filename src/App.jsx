import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Sustainability from './components/Sustainability'
import Team from './components/Team'
import Contact from './components/Contact'

function App() {
  

  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Sustainability/>
   <Team/>
   <Contact/>
   </>
  )
}

export default App
