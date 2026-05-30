<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Careers from "./pages/Careers";
=======
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
>>>>>>> fc2b38e50ba06bafb9e0db7be433459abccaba36

function App() {

  return (
<<<<<<< HEAD

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/careers" element={<Careers />} />

    </Routes>

  );
=======
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
>>>>>>> fc2b38e50ba06bafb9e0db7be433459abccaba36
}

export default App;