import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
<<<<<<< HEAD
import Sustainability from './components/Sustainability'
import Blog from './components/Blog';
=======
import CO2Savings from './components/CO2Savings/CO2Dashboard'
import Team from './components/Team'
>>>>>>> e45291d (Graph UI built)
import Contact from './components/Contact'
import GetQuote from './components/GetQuote'

function App() {
  

  return (
   <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <GetQuote/>
   <Sustainability/>
   <Blog/>
   <CO2Savings/>
   <Team/>
   <Contact/>
   </>
  )
}

export default App
