import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Sustainability from './components/Sustainability'
import Blog from './components/Blog';
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
   <Contact/>
   </>
  )
}

export default App
