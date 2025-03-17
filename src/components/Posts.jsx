import React, { useEffect, useState } from 'react'
import PostFilter from './PostFilter'
import posts from '../assets/data'
import { useParams, useNavigate } from 'react-router-dom';

const Posts = () => {
    const allPost = posts.articles;
    const { category } = useParams();
    const [filteredPosts, setFilteredPosts] = useState(allPost);
    const navigate = useNavigate();

    const handleCategoryChange = (category) => {
        if (category && category !== "All News") {
            setFilteredPosts(allPost.filter(post => post.category === category));
        } else {
            setFilteredPosts(allPost);
        }
    };

    useEffect(() => {
        if (category && category !== "All News") {
            setFilteredPosts(allPost.filter(post => post.category === category));
        } else {
            setFilteredPosts(allPost);
        }
    }, [category, allPost]);

  return (
    <div className='bg-[#F5F3FF] border border-[#E5DFFF]'>
      <div className="justify-center items-center flex w-full h-[110px]">
      <PostFilter onCategoryChange={handleCategoryChange} />
      </div>


    <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {
            filteredPosts.map((post,index) => (
                <div 
                    key={index} 
                    className=" cursor-pointer overflow-hidden relative w-[300px] h-[400px] bg-white rounded-lg shadow-xl"
                    onClick={() =>{ navigate(`/post/${index}`)
                        window.scrollTo({top:0, behavior: 'smooth'})
                    }}
                >
                    <img src={post.image} alt={post.title} className="w-full hover:scale-110 transition-all h-[200px] object-cover rounded-t-lg"/>
                    <div className="p-4">
                        <h1 className="text-md font-semibold text-black">{post.title}</h1>
                        <p className="text-sm line-clamp-3 text-[#40347D]">{post.description}  </p>
                        <p className='text-xs font-bold font-mono mt-3'>{new Date(post.publishedAt).toLocaleString()}</p>
                    </div>
                    <p className='absolute right-2 bottom-0 underline italic text-sm text-blue-500 font-bold cursor-pointer'> Read More</p>
                </div>
            ))
        }

    </div>

    </div>
  )
}

export default Posts