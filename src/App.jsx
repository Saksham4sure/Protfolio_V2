import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './Sections/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <section className='h-screen' id='skills'></section>
    </div>
    </>
  )
}

export default App
