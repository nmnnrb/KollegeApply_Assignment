import { ToastContainer } from "react-toastify"
import BigStory from "./components/BigStory"
import FeaturedNews from "./components/FeaturedNews"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import FullPost from "./components/FullPost"
import Posts from "./components/Posts"
import { Route, Router, Routes } from "react-router-dom"
import PostFilter from "./components/PostFilter"
import TrendPost from "./components/TrendPost"

function App() {

  return (
<div className="overflow-x-hidden">
    <ToastContainer />
    <Navbar/>
    <Routes>
     {/* hero and big story  */}
     <Route path="/" element={
      <>
      <div className="w-full md:w-[calc(100%-8rem)] m-auto px-4 md:px-0">
     <div className="flex flex-col md:flex-row justify-between items-start">
      <HeroSection />
      <BigStory />
      </div>
      <FeaturedNews />
      </div>
      <Posts />
      </>
     } />

     {/*--------------------*/}

    <Route path="/category/:category" element={<Posts />} /> 
    <Route path="/post/:id" element={<FullPost />} />
    <Route path="/post/trend" element={<TrendPost />} />
    </Routes>

 </div>
  );
}

export default App
