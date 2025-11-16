import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { TbSearch } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import jalebi from "../assets/jalebi.png"
import pizza from "../assets/pizza.png"

const Navbar = () => {
  return (
    <div>
      <div className='relative h-[92vh] w-full bg-yellow-400'>
        <div className='h-full w-full px-20 py-10'>
          <div className='flex items-center justify-between'>
            
            {/* company name */}
            <div>
              <h4 className='text-white text-3xl font-extrabold drop-shadow-xl drop-shadow-black/20'>Foodie</h4>
            </div>
            
            {/* log in and sign up button */}
            <div className='flex items-center gap-5'>
              <h4 className='text-white active:scale-95 font-bold drop-shadow-2xl drop-shadow-black mr-3'><a href="">Contact</a></h4>
              <h4 className='text-white active:scale-95 font-bold drop-shadow-2xl drop-shadow-black mr-8'><a href="">About Us</a></h4>
              <button className='text-white active:scale-98 font-bold text-xl rounded-xl border-2 px-4 py-2 drop-shadow-xl drop-shadow-black/30'>Log in</button>
              <button className='text-white active:scale-98 bg-black border-black font-bold text-xl rounded-xl border-2 px-3 py-2 flex items-center gap-2 drop-shadow-2xl'>Sign Up<MdArrowOutward /></button>
            </div>
          </div>
          <img
            src={jalebi}
            alt="jalebi"
            className="absolute w-80 top-70 left-2 rotate-15 drop-shadow-2xl z-20"
          />
          <img
            src={pizza}
            alt="pizza"
            className="absolute w-[480px] top-40 right-6 rotate-10 drop-shadow-2xl z-10"
          />    

          {/* search bar and location bar container */}
          <div className='flex items-center justify-center gap-5 mt-10'>
            {/* search bar */}
            <div className='h-12 w-[480px] px-5 bg-white rounded-xl flex items-center justify-center gap-2'>
              <input name="search" placeholder='Search from over 50+ Restaurants' className='h-full w-full font-semibold outline-none' id="" />
              <div className='active:scale-90'>
                <button className='text-gray-600'><TbSearch /></button>
              </div>
            </div>

            {/* location bar */}
            <div className='flex items-center justify-center gap-2 h-12 w-80 font-semibold px-5 bg-white rounded-xl'>
               <input name="location" placeholder='Enter your delivery location' className='h-full w-full outline-none' id="" />
               <div className='active:scale-90'>
                <button className='text-yellow-400'><FaLocationDot /></button>
               </div>
            </div>
          </div>

          {/* cards */}
          <div className='relative z-0 flex gap-10 items-center justify-center mt-16'>
            <div className='h-[280px] w-[480px] bg-white rounded-2xl drop-shadow-2xl'>
              <div className='p-5 flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Local Favourites</h1>
              </div>
              <div className='h-12 active:scale-98 bg-yellow-400 w-[180px] rounded-full ml-5 mt-[124px]'>
                <button className='h-full w-full font-bold text-xl flex items-center justify-center gap-2'>Explore now<FaArrowRight /></button>
              </div>
            </div>
            <div className='h-[280px] w-[480px] bg-white rounded-2xl drop-shadow-2xl'>
              <div className='p-5 flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>Pure Vegetarian</h1>
              </div>
              <div className=' active:scale-98 h-12 bg-yellow-400 w-[180px] rounded-full ml-5 mt-[132px]'>
                <button className='h-full w-full font-bold text-xl flex items-center justify-center gap-2'>Explore now<FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Navbar
