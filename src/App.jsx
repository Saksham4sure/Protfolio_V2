import './App.css'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'

function App() {

  return (
    <>
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
    </>
  )
}

export default App
