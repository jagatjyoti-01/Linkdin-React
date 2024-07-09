import React from 'react'
import Newpost from './Newpost.jsx'
import { MdPhoto } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";
import { GoFileSubmodule } from "react-icons/go";


function Post() {
  return (
    <div className='h-screen w-4/5 flex  items-center flex-col  border-gray-400 '>
      <div className='h-32 w-10/12 border bg-white py-4 rounded-xl'>
        <div className='flex px-4 text-slate-950'>
          <div className=" text-5xl  text-blue-400">
            <img src="https://media.licdn.com/dms/image/D5635AQFdPzQdqt07gQ/profile-framedphoto-shrink_100_100/0/1718910565672?e=1721127600&v=beta&t=F14CtMrpNdwT-a_7H8-TyGWrnjb7eHYK7t82j_y7ySk" alt="" className='w-12 h-12 rounded-full' />
          </div>
          <input className=' border border-gray-600 w-10/12 rounded-3xl text-lg font-normal ms-4 ' type="text" placeholder='start a post or try writting with AI' />
        </div>
        <div className="like flex items-center justify-between mt-4 px-8 mb-4  ">
          <p className='flex '><MdPhoto className='text-2xl text-blue-400' /><span className='ps-2 font-medium'>media</span></p>
          <p className='flex'><FaRegComment className='text-2xl text-orange-500 ' /><span className='ps-2 font-medium'>contribute expectise</span></p>
          <p className='flex'><GoFileSubmodule className='text-2xl text-yellow-500' /><span className='ps-2 font-medium'>write arcticle</span></p>
        </div>
      </div>
      <hr className='border border-gray-400 w-10/12 mt-4' />
      <div className='h-11/12 w-10/12  mt-5 rounded-lg '>

        < Newpost></Newpost>
      </div>
    </div>
  )
}

export default Post
