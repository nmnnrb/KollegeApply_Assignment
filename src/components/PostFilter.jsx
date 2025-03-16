import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const PostFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("All News");
    const categories = [
        {name: "All News" },
        { name: "Admission Alert" },
        { name: "College News"},
        { name: "Exam News" },
        { name: "Latest News" }
    ]
  return (
    <div className='bg-white py- relative px-6 rounded-lg shadow-xl flex justify-between items-center'>

<div className=" flex gap-2 text-black text-sm transition duration-300 rounded-lg ">
            {
                categories.map((cat) => (
                    <NavLink 
                    key={cat.name}
                    to={`/category/${cat.name}`}  
                    onClick={() => setSelectedCategory(cat.name)}  
                    className={`px-6 flex flex-col relative py-3 rounded-md mx-[1px] transition duration-300 
                        ${selectedCategory === cat.name ? ' text-[#40347D] font-extrabold' : 'bg-white'}`}
                >
                    {cat.name} 
                   
                      <span 
                            className={`w-[70%] h-[2px] bg-[#40347D] absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300
                                ${selectedCategory === cat.name ? 'opacity-100 scale-x-100' : 'opacity-10 scale-x-0'}`}
                        ></span>
                </NavLink>
                
                
                ))
            }
         
            </div>
        
    </div>
  )
}

export default PostFilter