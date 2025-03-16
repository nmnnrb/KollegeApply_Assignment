import React, { useState } from 'react'

const PostFilter = ({ onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState("All News");
    const categories = [
        {name: "All News" },
        { name: "Admission Alert" },
        { name: "College News"},
        { name: "Exam News" },
        { name: "Latest News" }
    ]

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    }

    return (
        <div className='bg-white py-2 px-2 md:px-6 rounded-lg shadow-xl flex flex-col md:flex-row justify-between items-center'>
            <div className="flex gap-1 md:gap-2 text-black text-xs md:text-sm transition duration-300 rounded-lg overflow-x-auto">
                {
                    categories.map((cat) => (
                        <button 
                            key={cat.name}
                            onClick={() => handleCategoryChange(cat.name)}  
                            className={`px-2 md:px-6 flex cursor-pointer flex-col relative py-1 md:py-3 rounded-md mx-[1px] transition duration-300 
                                ${selectedCategory === cat.name ? ' text-[#40347D] font-extrabold' : 'bg-white'}`}
                        >
                            {cat.name} 
                            <span 
                                className={`w-[70%] h-[2px] bg-[#40347D] absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-300
                                    ${selectedCategory === cat.name ? 'opacity-100 scale-x-100' : 'opacity-10 scale-x-0'}`}
                            ></span>
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default PostFilter