import React from 'react'
import data from '../assets/Trending'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const TrendPost = () => {
    const navigate = useNavigate();
    const post = data.articles[0];
  return  (
    <div className=' px-8 flex flex-col bg-white shadow-xl rounded-lg py-4'>
        <div className=' cursor-pointer  text-[#40347D] font-bold px-8 flex   py-4'>
            <span onClick={() => {navigate('/')
              window.scrollTo({top:0, behavior: 'smooth'})
            }} className='text-[#A7B2C0] cursor-pointer hover:text-[#6d7074] transition-all text-md font-medium font-sans'>{'News Listing Page >'}</span>&nbsp; Individual News
         </div>
        <img src={post.image} alt={post.title} className="w-full h-[500px] object-fit rounded-lg"/>  
        <h1 className="text-4xl text-[#02234D] font-bold mt-4">{post.title}</h1>

        <h1 className="text-md text-end text-[#8F81CE] font-mono mt-2">{new Date(post.publishedAt).toLocaleDateString()}</h1>

        <p className="whitespace-pre-line mt-6 mb-10 leading-tight">{post.content}</p>

            <p onClick={() => {
                navigate('/')
                window.scrollTo({top:0, behavior: 'smooth'})
            }} className='text-2xl flex hover:translate-x-3 text-blue-400 cursor-pointer hover:text-blue-700 transition duration-300 underline' ><ArrowLeft className='hover:translate-x-[-10px] transition duration-300 ' /> {"Main Page"}    </p>
    </div>
  )
}

export default TrendPost