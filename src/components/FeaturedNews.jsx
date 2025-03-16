import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import data from '../assets/data'
const FeaturedNews = () => {

  const posts = data.articles;
  const [index, setIndex] = useState(0);

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

<div className="flex justify-between">
{
  posts.slice(index,index+4).map((post, index) => (
    <div key={index} className='flex gap-3'>

      <div className='w-[250px]'> {/* Adjust width for alignment */}
        <h1 className='text-md font-semibold line-clamp-2 '>{post.title}</h1>
        <p className='text-sm mt-1 line-clamp-4'> 
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