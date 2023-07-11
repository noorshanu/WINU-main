import Navbar from './components/Navbar'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import HowTobuy from './sections/HowTobuy'
import Market from './sections/Market'
import Partners from './sections/Partners'
import Token from './sections/Token'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Token/>
      <HowTobuy/>
      <Partners/>
      <Market/>
      <Footer/>
    </>
  )
}

export default App
