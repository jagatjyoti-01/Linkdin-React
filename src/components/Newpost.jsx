import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa6";
import { LiaShareSolid } from "react-icons/lia";
import { RiSave2Line } from "react-icons/ri";
import posts from './PostData';

function Newpost() {
  return (
    <div className=''>
       {posts.map((post, index) => (
             <div key={index} className='mb-4 border  bg-white rounded-lg'>
      <div  className=' h-20 flex  ps-4 justify-between'>
        <div className='flex mt-2'>
          <div className=" ">
          <img
              src={post.profilePic}
              alt={`${post.name}'s profile`}
              className='w-10 h-10 rounded-full mr-4'
            />
          </div>
          <div  className='ms-2'>
            <span className="text-xl font-medium">{post.name}</span>
            <p className='text-xs flex text-gray-500'>12000 follower</p >
            <p className='text-xs flex text-gray-400'>
              30min .
              <TiWorld className='text-xl ms-2' />
            </p >
          </div>
        </div>
        <div className="text-blue-600 text-lg flex items-center pe-8">
          <span>follow</span>
        </div>
      </div>
      <div className='h-16  mt-1  '>
        <p className='text-gray-700 text-left text-sm ps-2 '>{post.description}</p>
      </div>
      <div className='h-80  object-fill	'>
        <img className='object-cover w-full h-full	' src={post.profilePic} alt="" />
      </div>
      <div className='h-24 w-full   '>
       <div className="flex justify-between px-2">
        <p className='flex '><div className='text-xs flex justify-center items-center'><BiSolidLike className='text-blue-800' /><FaHeart className='text-red-800' /><FaLightbulb className='text-yellow-600'/></div>
        You and 300 other</p>
        <p>9 comments . 3 reports</p>
       </div>
       <hr className='border-b border-gray-300 w-11/12 ms-8 mt-2 ' />
       <div className="like flex items-center justify-between mt-4 px-4  ">
       <p className='flex '><SlLike className='text-xl' /><span className='ps-2 font-medium'>like</span></p>
       <p className='flex'><FaRegComment className='text-xl' /><span className='ps-2 font-medium'>comments</span></p>
       <p className='flex'><LiaShareSolid  className='text-2xl'/><span className='ps-2 font-medium'>shere</span></p>
       <p className='flex'>< RiSave2Line className='text-2xl'/><span className='ps-2 font-medium' >save</span></p>
       </div>
      </div>
      </div>
      ))}
    </div>
  )
}

export default Newpost
