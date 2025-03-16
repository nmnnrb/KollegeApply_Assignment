import { ChevronDown, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import data from '../assets/data' 
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [visibleResults, setVisibleResults] = useState(5)
  const navigate = useNavigate()
  useEffect(() => {
    const handleClickOutside = () => setSearchResults([]); 

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value
    setSearchTerm(term)
    if (term.length > 0) {
      const results = data.articles.filter(item => item.title.toLowerCase().includes(term.toLowerCase()))
      setSearchResults(results)
      setVisibleResults(5)
    } else {
      setSearchResults([])
      setVisibleResults(5)
    }
  }

  const loadMoreResults = () => {
    setVisibleResults(prevVisibleResults => prevVisibleResults + 5)
  }

  return (
    <div className='bg-white w-full md:h-18 shadow-md flex items-center justify-between px-4'>
      <div className="left flex items-center justify-between w-[63%]">
        <div className="logo flex items-center">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS823MOL703U-srtNlgy8ZkIrhtiqyDbFpbjA&s' className='h-10' alt='logo'/>
          <p className='font-bold text-[#40347D] text-3xl mt-4'> KollegeApply</p>
        </div>
        <div className="flex items-center mt-2 justify-center gap-[32px]">
          <div className="flex gap-1 text-[#3A3A3A] text-[18px] font-semibold items-center justify-center cursor-pointer">
            <p>University</p> 
            <ChevronDown className='mt-2' />
          </div>
          <div className="flex gap-1 text-[#3A3A3A] text-[18px] font-semibold items-center justify-center cursor-pointer">
            <p>Colleges</p> 
            <ChevronDown className='mt-2' />
          </div>
          <div className="flex gap-1 text-[#3A3A3A] text-[18px] font-semibold items-center justify-center cursor-pointer">
            <p>Exams</p> 
            <ChevronDown className='mt-2' />
          </div>
          <div className="flex gap-1 text-[#3A3A3A] text-[18px] font-semibold items-center justify-center cursor-pointer">
            <p>Courses</p> 
            <ChevronDown className='mt-2' />
          </div>
          <div className="flex gap-1 text-[#3A3A3A] text-[18px] font-semibold items-center justify-center cursor-pointer">
            <p>News</p> 
            <ChevronDown className='mt-2' />
          </div>
        </div>
      </div>

      <div className="right flex items-center gap-2">
        <Search className='text-black ' />
        <input 
          className='border-none w-[350px] focus:outline-none' 
          type="text" 
          placeholder='Search for Colleges, Exams, Courses & more...' 
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {searchResults.length > 0 && (
      <div className='bg-[#F3F3F3] absolute top-12 w-[420px] z-10 right-10 shadow-md mt-2 p-4'>
        <ul className='overflow-y-auto  max-h-[500px]'>
          {searchResults.slice(0, visibleResults).map((result, index) => (
            <li key={index} onClick={() => {
              navigate(`/post/${index}`)
              setSearchResults([])
              setSearchTerm('')
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