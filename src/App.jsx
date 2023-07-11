import Navbar from './components/Navbar'
import AboutUs from './sections/AboutUs'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import HowTobuy from './sections/HowTobuy'
import Market from './sections/Market'
import Partners from './sections/Partners'
import Roadmap from './sections/Roadmap'
import Token from './sections/Token'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <AboutUs/>
      <Token/>
      <HowTobuy/>
      <Roadmap/>
      <Partners/>
      
      <Market/>
      <Footer/>
    </>
  )
}

export default App
