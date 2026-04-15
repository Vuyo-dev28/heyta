import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ComingSoon from './components/ComingSoon' // ✅ import it
import Portfolio from './components/Portfolio'
import Partners from './components/Partners'

function App() {
  const isLive = true // 🔥 set to false to show coming soon

  // ✅ If NOT live → show full ComingSoon page ONLY
  if (!isLive) {
    return <ComingSoon />
  }

  // ✅ If live → show full website
  return (
    <div className="app">
      <div className="glow-bg"></div>
      <Navbar />

      <main>
        <Hero />
        <ClientLogos />
        <Features />
        <WhyChooseUs />
        <Portfolio />
        <Industries />
        <Partners />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App