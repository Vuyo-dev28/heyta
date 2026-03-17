import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <div className="glow-bg"></div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyChooseUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
