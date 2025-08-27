import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import InTouch from './components/InTouch'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='bg-[#000] text-[#000] overflow-hidden'>
        <Home />
        <div className='relative'>
          <About />
          <Projects />
        </div>
        <ContactUs />
        <InTouch />
        <Footer />
      </div>
    </>
  )
}

export default App
