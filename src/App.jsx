
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Payment from "./pages/Payment"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import Home from "./pages/Home"

function App() {

  return (
    <div className="w-screen bg-primary">
      <Navbar/>
      <Home/>
      <About/>
      <Payment/>
      <Events/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
