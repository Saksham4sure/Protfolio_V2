import './App.css'
import Preloader from './components/AnimationComponents/Preloader'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
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
      <Contact />
    </div>
    </>
  )
}

export default App
