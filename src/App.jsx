import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainHeader from './page/MainHeader'
import LearningSection from './page/LearningSection'

function App() {
  
  return (
    <div className="App pb-40">
      <MainHeader/>
      <LearningSection/>
    </div>
  )
}

export default App
