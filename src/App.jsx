import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './page/MainHeader'
import LearningSection from './page/LearningSection'
import AboutUs from './page/AboutUs'
import Companies from './page/Companies'
import Testimonial from './page/Testimonial'
import JoinUs from './page/JoinUs'
import Footer from './page/Footer'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App pb-20">
      <Navbar/>
      <MainHeader/>
      <LearningSection/>
      <AboutUs/>
      <Companies/>
      <Testimonial/>
      <JoinUs/>
      <Footer/>
    </div>
  )
}

export default App
