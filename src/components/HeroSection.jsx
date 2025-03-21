import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react'
import React, { useState } from 'react'
import newsData from "../assets/data"
import trendData from "../assets/Trending"
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
    // const trendData = useState(trendData[0]);
    const [index,setIndex] = useState(0);
    const [post, setPost] = useState(newsData.articles[0]);
    const increment = () => {
      if(index === newsData.articles.length - 1){
        toast.error("Can't go back further", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return;
      }
        setIndex(prevIndex => {
            const newIndex = prevIndex < newsData.articles.length - 1 ? prevIndex + 1 : 0;
            setPost(newsData.articles[newIndex]); // Update post state correctly
            return newIndex;
        });
        console.log("post:", post);
    };

    const decrement = () => {
      if(index === 0){
        toast.error("Can't go back further", {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return;
      }
        setIndex(prevIndex => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : 0 ;
            setPost(newsData.articles[newIndex]); // Update post state correctly
            return newIndex;
        });
        console.log("post:", post);
    };
    const navigate = useNavigate();
  return (
    <div className="px-4 md:px-0">
        <ToastContainer />
            {/* Trending Now */}
    <div onClick={() =>{ navigate(`/post/trend`)
      window.scrollTo({top:0, behavior: 'smooth'})
    }} className="trending bg-[#F2EFFF] mb-10 flex flex-col md:flex-row justify-between border-[0.1px] border-violet-500 py-2 px-4 rounded-lg mt-12">
            <p onClick={() =>{ navigate(`/post/trend`)
              window.scrollTo({top:0, behavior: 'smooth'})
            }} className='text-sm font-semibold cursor-pointer text-[#262628]'> ⚡️<span className='font-bold cursor-pointer text-[#090909] text-sm'>Trending Now:  </span>{trendData.articles[0].title}</p>
            <p onClick={() =>{ navigate(`/post/trend`)
              window.scrollTo({top:0, behavior: 'smooth'})
            }}  className='text-sm font-extrabold flex cursor-pointer text-[#262628]'>Check Now  <MoveRight className="w-5 mt-[1px] hover:translate-x-2 transition duration-300 cursor-pointer font-extrabold justify-center text-center h-5" /></p>
    </div>
            {/* ------------------------------------------ */}
           

                   {/* image and post */}
           <div  className="heroImage cursor-pointer bg-white shadow-lg rounded-t-2xl">
            <div className="relative flex justify-between items-center">
            <button onClick={increment} className='absolute right-0 bg-black/20 hover:cursor-pointer transition duration-200 rounded-full p-5 text-white'>
  <svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide hover:translate-x-3 hover:animate-bounce animate-pulse transition duration-200 lucide-chevron-right">
    <path d="m9 18 6-6-6-6"/>
  </svg>
</button>

            <img onClick={() =>{ navigate(`/post/${index}`)
              window.scrollTo({top:0, behavior: 'smooth'})
            }} src={post.image} className="w-full md:w-[750px] overflow-hidden h-[300px] md:h-[500px] object-cover rounded-t-lg" alt="HeroImage" />
            <button className='absolute left-0 bg-black/20 hover:cursor-pointer transition duration-200 rounded-full p-5 text-white' onClick={decrement}> <svg  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide hover:translate-x-[-10px] hover:animate-bounce animate-pulse transition duration-300 lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></button>
            </div>
         
            <h1 onClick={() =>{ navigate(`/post/${index}`)
              window.scrollTo({top:0, behavior: 'smooth'})
            }} className='text-[#02234D] max-w-full md:max-w-[750px] break-words font-bold py-[5px] px-[22px] text-[24px] md:text-[30px] mt-2'>{post.title}</h1>
            <p className='text-[#40347D] px-[22px] py-[5px] text-xs'>{new Date(post.publishedAt).toLocaleString()}</p>
            <p onClick={() => {navigate(`/post/${index}`)
              window.scrollTo({top:0, behavior: 'smooth'})
            }} className='text-[#40347D] max-w-full md:max-w-[750px] px-[22px] py-[5px] text-xs md:text-sm'> {
                                post.description.split(" ").length >200 ?  post.description.split(" ").slice(0, 90).join(" ") + "..." : post.description
                                    }</p>
        <p onClick={() =>{ navigate(`/post/${index}`)
          window.scrollTo({top:0, behavior: 'smooth'})
        }}   className='text-[#40347D] max-w-full md:max-w-[750px] px-[22px] py-[5px] hover:text-blue-600 text-end hover:font-bold transition duration-300 text-xs md:text-sm'  >Read More...</p>
                            
           </div>
  
              
                   

           
           
 {/* ------------------------------------------ */}




    </div>
  )
}

export default HeroSection