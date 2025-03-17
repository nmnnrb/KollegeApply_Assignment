import { ChevronDown, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import data from '../assets/data' 
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [visibleResults, setVisibleResults] = useState(5)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setSearchResults([]);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value
    setSearchTerm(term)
    if (term.length > 0) {
      const results = data.articles.map((it, index) => ({...it, indexNumber:index})).filter(item => item.title.toLowerCase().includes(term.toLowerCase()));
      setSearchResults(results)
      setVisibleResults(5)
    } else {
      setSearchResults([])
      setVisibleResults(5)
    }
  }

  const loadMoreResults = (event) => {
    event.stopPropagation();
    setVisibleResults(prevVisibleResults => prevVisibleResults + 5);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='bg-white w-full  md:h-18 shadow-md flex flex-col md:flex-row items-center justify-between px-4'>
      <div onClick={() =>{ navigate(`/`)
        window.scrollTo({top:0, behavior: 'smooth'})
      }} className="logo flex cursor-pointer items-center justify-center px-12 w-full mt-4 md:mt-0 md:w-auto">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS823MOL703U-srtNlgy8ZkIrhtiqyDbFpbjA&s' className='h-10' alt='logo'/>
        <p className='font-bold text-[#40347D] text-2xl md:text-3xl'> KollegeApply</p>
      </div>
      <div className="flex items-center mt-2 justify-center gap-[16px] md:gap-[32px] w-full md:hidden">
        <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer z-10 transition duration-700 relative" onClick={toggleDropdown}>
          <p>Menu</p> 
          <ChevronDown className='mt-2' />
          {isDropdownOpen && (
            <div className="dropdown-content absolute py-5 px-5 top-full bg-gray-200  text-white shadow-md mt-2 rounded-md">
              <div className="flex flex-col">
                <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
                  <p>University</p> 
                </div>
                <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
                  <p>Colleges</p> 
                </div>
                <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
                  <p>Exams</p> 
                </div>
                <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
                  <p>Courses</p> 
                </div>
                <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
                  <p>News</p> 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex flex-col md:flex-row items-center mt-2 justify-center gap-[16px] md:gap-[32px] w-full">
        <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
          <p>University</p> 
          <ChevronDown className='mt-2' />
        </div>
        <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
          <p>Colleges</p> 
          <ChevronDown className='mt-2' />
        </div>
        <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
          <p>Exams</p> 
          <ChevronDown className='mt-2' />
        </div>
        <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
          <p>Courses</p> 
          <ChevronDown className='mt-2' />
        </div>
        <div className="flex gap-1 text-[#3A3A3A] text-[14px] md:text-[18px] font-semibold items-center justify-center cursor-pointer">
          <p>News</p> 
          <ChevronDown className='mt-2' />
        </div>
      </div>
      <div className="right relative flex items-center gap-2 mt-4 md:mt-0 w-full search-container md:w-auto">
        <Search className='text-black ' />
        <input 
          className='border-none w-full text-sm md:w-[350px] focus:outline-none' 
          type="text" 
          placeholder='Search for Colleges, Exams, Courses & more...' 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchResults.length > 0 && (
      <div className='bg-[#F3F3F3] absolute top-32 md:top-16  w-full md:w-[420px] z-10 md:right-10 shadow-md mt-2 p-4'>
        <ul className='overflow-y-auto max-h-[500px]'>
          {searchResults.slice(0, visibleResults).map((result, index) => (
            <li key={index} onClick={() => {
              navigate(`/post/${result.indexNumber}`)
              setSearchResults([])
              setSearchTerm('')
              window.scrollTo({top:0, behavior: 'smooth'})
            }} className='py-2 hover:text-blue-900 transition duration-200 hover:font-bold border-b cursor-pointer'>
              {result.title}
            </li>
          ))}
        </ul>
        {visibleResults < searchResults.length && (
          <div className='text-blue-500 cursor-pointer mt-2' onClick={loadMoreResults}>
            See more...
          </div>
        )}
      </div>
    )}
    </div>
  )
}

export default Navbar