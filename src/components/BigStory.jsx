import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import newsData from "../assets/data"
const BigStory = ({Categ= "All News"}) => {

    const categories = [
        {name: "All News" },
        { name: "Admission Alert" },
        { name: "College News"},
        { name: "Exam News" },
        { name: "Latest News" }
    ]

    const [selectedCategory, setSelectedCategory] = useState(Categ);
    const navigate = useNavigate();
    const filterData = selectedCategory === "All News" ? newsData.articles : newsData.articles.filter((article) => article.category === selectedCategory);

  return (
    <div className='flex w-full md:w-[500px] flex-col gap-4 px-4 md:px-0'>
        {/* big story Navbar */}
        <div className="flex gap-2 text-black text-sm rounded-lg mt-12 ">
            {
                categories.map((cat) => (
                    <NavLink to={`/`}  onClick={() =>{ setSelectedCategory(cat.name)
                        window.scrollTo({top:0, behavior: 'smooth'})
                    }}  className={`px-[5px] py-1 rounded-md mx-[1px] transition duration-200 
                        ${selectedCategory === cat.name ? ' bg-[#f3f3f3]' : 'bg-white'}`}>
                        {cat.name}
                    </NavLink>
                ))
            }
        </div>
        {/* big story posts */}
        <div className="bigPosts flex flex-col gap- shadow-lg bg-[#FFFFFF] mt-8 p-4 rounded-lg">
            <p className='text-[#40347D] italic font-semibold text-2xl md:text-3xl'>THE BIG STORIES  <span className='text-sm absolute '>✨</span></p>
            {/* dynamic post show  */}
            {
                filterData.slice(0,6).map((data,index)=>{
                    return(
                        <div className="flex flex-col">
                            <div key={index} onClick={() =>{ navigate(`/post/${index}`)
                                window.scrollTo({top:0, behavior: 'smooth'})
                            }} className="flex overflow-hidden cursor-pointer gap-4">
                                <div className="w-[100px] md:w-[150px] h-[50px] relative">
                                    <img src={data.image} alt="" className="min-w-[100px] md:min-w-[150px] hover:scale-125 transition duration-300 min-h-[50px] max-h-[90px] object-fit "/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className='text-[#40347D] font-semibold text-sm md:text-md'>{data.title}</p>
                                    <p className='text-[#40347D] text-xs md:text-sm'>{
                                    data.description.split(" ").length >10 ?  data.description.split(" ").slice(0, 6).join(" ") + "..." : data.description
                                        }</p>
                                    <p className='text-[#40347D] text-xs'>{new Date(data.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <span className='w-full p-[1px] bg-[#E6E9EE] my-4 rounded'></span>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BigStory