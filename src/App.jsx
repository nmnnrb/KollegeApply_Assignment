import { ToastContainer } from "react-toastify"
import BigStory from "./components/BigStory"
import FeaturedNews from "./components/FeaturedNews"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"


import Posts from "./components/Posts"
import { Route, Router, Routes } from "react-router-dom"
import PostFilter from "./components/PostFilter"

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

    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/category/:category" element={<Posts />} />
    </Routes>

  </div>
  )
}

export default App
