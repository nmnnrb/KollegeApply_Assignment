import { ChevronDown, Search } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white w-full md:h-18 shadow-md flex items-center justify-between px-4'>
            <div className="left flex items-center  justify-between w-[63%]">
               <div className="logo flex items-center">
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS823MOL703U-srtNlgy8ZkIrhtiqyDbFpbjA&s' className='h-10' alt='logo'/>
               <p className='font-bold text-[#40347D] text-3xl mt-4'> KollegeApply</p>
               </div>
               <div className=" flex items-center mt-2 justify-center gap-[32px]">
                      <div className="flex gap-1  text-[#3A3A3A] text-[18px] font-semibold items-center justify-center">
                      <p>University</p> 
                      <ChevronDown className='mt-2' />
                      </div>
                      <div className="flex gap-1  text-[#3A3A3A] text-[18px] font-semibold items-center justify-center">
                      <p>Colleges</p> 
                      <ChevronDown className='mt-2' />
                      </div>
                      <div className="flex gap-1  text-[#3A3A3A] text-[18px] font-semibold items-center justify-center">
                      <p>Exams</p> 
                      <ChevronDown className='mt-2' />
                      </div>
                      <div className="flex gap-1  text-[#3A3A3A] text-[18px] font-semibold items-center justify-center">
                      <p>Courses</p> 
                      <ChevronDown className='mt-2' />
                      </div>
                      <div className="flex gap-1  text-[#3A3A3A] text-[18px] font-semibold items-center justify-center">
                      <p>News</p> 
                      <ChevronDown className='mt-2' />
                      </div>
               </div>
            </div>

            <div className="right flex items-center gap-2">
            <Search className='text-black ' />
            <input className='border-none w-[350px] focus:outline-none' type="text" placeholder='Search for Colleges, Exams, Courses & more...' />
            </div>
    </div>
  )
}

export default Navbar