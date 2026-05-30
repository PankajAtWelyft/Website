import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog';

import CO2Savings from './components/CO2Savings/CO2Dashboard'
import Team from './components/Team'

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
   <Blog/>
   <CO2Savings/>
   <Team/>
   <Contact/>
   </>
  )
}

export default App
