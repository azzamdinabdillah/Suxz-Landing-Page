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

function App() {
  
  return (
    <div className="App pb-40">
      <MainHeader/>
      <LearningSection/>
      <AboutUs/>
      <Companies/>
      <Testimonial/>
      <JoinUs/>
    </div>
  )
}

export default App
