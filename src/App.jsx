import { useEffect, useState } from "react";
import './App.css'

import Preloader from './components/AnimationComponents/Preloader'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'

function App() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      await document.fonts.ready;
      await new Promise(res => setTimeout(res, 2000));
      setReady(true);
    }

    prepare();
  }, []);

  return (
    <>
      {loading && (
        <Preloader
          ready={ready}
          setLoading={setLoading}
        />
      )}

      {!loading && (
        <div className="overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;
