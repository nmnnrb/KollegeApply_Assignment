import { ToastContainer } from "react-toastify"
import BigStory from "./components/BigStory"
import FeaturedNews from "./components/FeaturedNews"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  return (
  <div >
    <ToastContainer />
    <Navbar/>
     
     {/* hero and big story  */}
     <div className="w-[calc(100%-8rem)] m-auto">
     <div className="flex justify-between items-start">
      <HeroSection />
      <BigStory />
      </div>
      <FeaturedNews />
      </div>

     {/*--------------------*/}





  </div>
  )
}

export default App
