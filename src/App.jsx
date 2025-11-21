import { useState } from "react";
import './App.css'

import Preloader from './components/AnimationComponents/Preloader'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Preloader setLoading={setLoading} />
      )}

      {!loading && (
        <div className='overflow-x-hidden'>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  )
}

export default App
