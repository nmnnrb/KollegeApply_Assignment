import React, { useState } from 'react'
import newsData from "../../assets/data"
import { useNavigate } from 'react-router-dom';
const Right = ({post}) => {

    const selectedCategory = post.category;
    const navigate = useNavigate();

    const print = () => { 
        console.log("clicked" , selectedCategory);
    }

    const filterData = newsData.articles.filter((article) => article.category === selectedCategory);

  return (
    <div className='flex flex-col gap-4 items-start justify-start'> 
        <button onClick={print} className='bg-[#40347C] w-full shadow-lg font-semibold py-3 px-6 rounded-lg cursor-pointer transition-all text-white hover:bg-blue-600'>Apply Now</button>
        <button className='bg-[#edf3f5ee] shadow-lg w-full font-semibold py-3 px-6 rounded-lg cursor-pointer transition-all text-[#40347C] border-[0.5px] border-[#d7d3ea] hover:bg-[#D3CCF5]'>Apply Now</button>

        {/* advertising banner */}

        <div className='w-full rounded-xl text-white h-[106px] font-mono bg-[#DDC3FFCC] border-[#E5DFFF] flex items-center justify-center'>
            ADVERTISING BANNER
        </div>
        <div className='w-full rounded-xl text-white h-[106px] font-mono bg-[#ACDBFF] border-[#E5DFFF] flex items-center justify-center'>
            ADVERTISING BANNER
        </div>
        <div className='w-full rounded-xl text-white h-[106px] font-mono bg-[#fdefa6] border-[#fdefa6] flex items-center justify-center'>
            ADVERTISING BANNER
        </div>


        <div className="RANDOM bg-white rounded-lg py-6 px-3 w-full flex flex-col gap-3 ">
        <h1 className='text-2xl font-medium text-[#40347D] italic '>Related News...</h1>

        <div className="flex flex-col gap-3">
        {
                filterData.slice(0,3).map((data,index)=>{
                    return(
                        <div className="flex flex-col">

  
                        <div key={index}  onClick={() =>{ navigate(`/post/${index}`)
                            window.scrollTo({top:0, behavior: 'smooth'})
                        }} className="flex flex-col sm:flex-row overflow-hidden cursor-pointer gap-4">
                            <div className="w-full sm:w-[150px] h-[50px] relative">
                                <img src={data.image} alt="" className="w-full sm:min-w-[150px] hover:scale-125 transition duration-300 h-[50px] sm:max-h-[90px] object-cover"/>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className='text-[#40347D] font-semibold text-md'>{data.title}</p>
                                <p className='text-[#40347D] text-sm'>{
                                data.description.split(" ").length >10 ?  data.description.split(" ").slice(0, 6).join(" ") + "... " : data.description
                                    }</p>
                              <div className="flex justify-between items-center">
                              <p className='text-[#40347D] text-xs'>{new Date(data.publishedAt).toLocaleDateString()}</p> 
                              <p className='text-[#40347D] hover:text-blue-500 transition-all hover:scale-110 text-xs'> Read More...</p>
                              </div>
                            </div>
                           
                        </div>
                        <span className='w-full p-[1px] bg-[#E6E9EE] my-4 rounded'></span>
                        </div>
                    )
                })
            }
        </div>
       
        </div>
        </div>
  )
}

export default Right