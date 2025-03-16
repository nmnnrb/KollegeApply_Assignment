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
<>
    <ToastContainer />
    <Navbar/>
    <Routes>
     {/* hero and big story  */}
     <Route path="/" element={
      <>
      <div className="w-[calc(100%-8rem)] m-auto">
     <div className="flex justify-between items-start">
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

 </>
  );
}

export default App
