import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { BiSolidMessageRounded } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { PiDotsNineBold } from "react-icons/pi";
import { FaFile } from "react-icons/fa6";
import '../App.css'

function Navbar() {
  return (
    <nav className=' nav bg-white flex w-full border h-15  items-center justify-center border-b fixed '>
      <div className='w-11/12 flex items-center justify-center '>
        <div className='flex w-9/12 '>
          <div className='flex items-center justify-center'>
            <h1 className='flex items-center justify-center' > <FaLinkedin className='color-blue text-5xl text-blue-700 flex items-center justify-center ' /></h1>
            <span className=" bg-gray-100 h-9 w-10 flex items-center justify-center ms-2 text-xl font-black">
              <CiSearch />
            </span>
            <input type="text" placeholder='search here' className='border h-9 w-80  bg-gray-100 border-none outline-none ' />
          </div >

          <div className='flex items-center justify-around  w-2/5  border-r ms-40 my-2'>
            <div>
              <FaHome className=' text-3xl w-10' />
              <span className='border-b border-black text-gray-400'>Home</span>
            </div>
            <div>
              <MdPeopleAlt  className=' text-3xl w-10'/>
              <span className=''>Home</span>
            </div>
            <div>
            <HiShoppingBag className=' text-3xl w-10' />
            <span>Home</span>
          </div>
          <div>
            <BiSolidMessageRounded  className=' text-3xl w-10'/>
            <span>Home</span>
          </div>
          <div>
            <IoNotifications  className=' text-3xl w-10'/>
            <span>Home</span>
          </div>
          <div>
            <RxAvatar className=' text-3xl w-10' />
            <span>Home</span>
          </div>


        </div>
      </div >
      <div className='flex items-center justify-around  w-40' >
        <div>
        <PiDotsNineBold className='text-4xl' />
        <span>Home</span>
          </div>
          <div>
        <FaFile className='text-yellow-400 text-3xl' />
        <span>Home</span>
          </div>
         
      </div>
    </div>
    </nav >
  )
}

export default Navbar
