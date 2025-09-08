import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Hero from './Sections/Hero'

function App() {

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
    </div>
    </>
  )
}

export default App
