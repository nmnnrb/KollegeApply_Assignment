import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import data from '../assets/data'
import { useNavigate } from 'react-router-dom';
const FeaturedNews = () => {

  const posts = data.articles;
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const nextPost = () => {
    setIndex(prevIndex =>  prevIndex < posts.length - 4 ? prevIndex + 4 : 0);
  }
  return (
   <div className="flex mt-12 mb-12 border border-[#f2e08a] flex-col p-4 gap-4">

{/* heading for featured posts */}
<div className=' flex justify-between items-center  '>
      <h1 className='text-[#e4b762] italic text-2xl font-bold'> FEATURED NEWS</h1>
      <ChevronRight onClick={nextPost} className='cursor-pointer hover:translate-x-2 transition-all animate-pulse bg-[#e4b762] text-white rounded-full' />

    </div>

    {/* post map */}

<div className="flex flex-col md:flex-row justify-between gap-4">
{
  posts.slice(index,index+4).map((post, index) => (
    <div key={index} onClick={() =>{ navigate(`/post/${index}`)
      window.scrollTo({top:0, behavior: 'smooth'})
    }} className='flex cursor-pointer gap-3'>

      <div className='w-full md:w-[250px]'> {/* Adjust width for alignment */}
        <h1 className='text-md font-semibold hover:text-[#8d713d] transition duration-300 line-clamp-2 '>{post.title}</h1>
        <p className='text-sm mt-1 hover:text-gray-400 transition duration-75 line-clamp-4'> 
          {post.description.split(" ").length > 10 
            ? post.description.split(" ").slice(0, 11).join(" ") + "..." 
            : post.description}
        </p>
        <p className='text-xs font-bold font-mono mt-3'>{new Date(post.publishedAt).toLocaleString()}</p>
      </div>

    </div>
  ))
}

</div>
   </div>
  )
}

export default FeaturedNews