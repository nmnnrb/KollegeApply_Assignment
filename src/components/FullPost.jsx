import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import posts from '../assets/data'
import BigStory from './BigStory';
import Left from './PostFull/Left';
import Right from './PostFull/Right';

const FullPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const post = posts.articles[id];
   
    return (
        <div className='flex flex-col lg:flex-row justify-between items-start'>
            <div className="w-full lg:w-2/3 mx-2 sm:mx-4 lg:mx-12">
                <div className='mt-12 mb-12 cursor-pointer text-[#40347D] font-bold px-2 sm:px-4 lg:px-8 flex py-4'>
                    <span onClick={() =>{ navigate('/')
                        window.scrollTo({top:0, behavior: 'smooth'})
                    }} className='text-[#A7B2C0] cursor-pointer hover:text-[#6d7074] transition-all text-md font-medium font-sans'>{'News Listing Page >'}</span>&nbsp; Individual News
                </div>
                <Left post={post} />
            </div>

            <div className="w-full lg:w-1/3 mx-2 sm:mx-4 lg:mx-12">
                <div className='mt-12 mb-12 cursor-pointer text-[#40347D] font-bold px-2 sm:px-4 lg:px-8 flex py-4'>
                    <span onClick={() =>{ navigate('/')
                        window.scrollTo({top:0, behavior: 'smooth'})
                    }} className='text-[#A7B2C0] cursor-pointer hover:text-[#6d7074] transition-all text-md font-medium font-sans'>{''}</span>
                </div>
                <Right post={post} />
            </div>
        </div>
    )
}

export default FullPost
