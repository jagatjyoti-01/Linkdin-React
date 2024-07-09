import React from 'react'
import { FaFile } from "react-icons/fa6";

function Profile() {
  return (
    <div className='h-2/3 w-80 border border-gray-400 bg-white rounded-xl'>
      <div className='relative'>
      <div>
        <img src="https://media.licdn.com/dms/image/D5616AQFK6WGg7CgU2w/profile-displaybackgroundimage-shrink_350_1400/0/1706351081622?e=1726099200&v=beta&t=dMMpBG78__D21z3m0gDTrF3CT1f0VPxPv7hlNU0Pfwg" alt="" 
        className='h-16 object-cover rounded-t-xl' />
      </div>
      <div className='absolute top-12 left-1/2 transform -translate-x-1/2'>
        <img src="https://media.licdn.com/dms/image/D5635AQFdPzQdqt07gQ/profile-framedphoto-shrink_200_200/0/1718910565720?e=1721127600&v=beta&t=ewiG1wzTIdw4CMGWsTTbRCNmOSoq8ffZ-WYPTxX9Znc" alt=""  
        className='h-16 w-16 rounded-full relative border-2 border-white'/>
      </div>
      </div>
      <div className='mt-8 '>
        <h2 className='text-xl font-medium ps-10 pt-4'>Jagat Jyoti Dash </h2>
        <h6 className='text-xs flex items-center justify-center px-2 pt-2 text-gray-600'>intern IIT HYDERABAD || MERN STACK Developer || React.js || UI & UX designer || Java || C || MySQL || PYTHON</h6>
      </div>
      <hr  className=' mt-4'/>
      <div className='text-sm px-4 text-neutral-400 pt-2'>
        <p className=' flex justify-between '>  <span>profile Viewer</span> <span className='text-blue-600 font-medium'>123</span></p>
        <p  className=' flex justify-between '> <span>post Impresion</span> <span className='text-blue-600 font-medium'>400</span></p>
        
      </div>
      <hr className=' mt-4' />
      <div className=''>
        <p className='text-sm text-neutral-600 px-4 pt-4'>Strengthen your profile with AI writting Assistance</p>
        <p className='flex ps-6 pt-4 text-sm font-medium'>  <FaFile className='text-yellow-400 mr-2' />Get Hired fast .try primimum Free</p>
      </div>
      <hr className=' mt-1' />
      <div className=''>
        <p className='flex font-medium my-4 px-4'><FaFile className='text-gray-400 mr-2' /> Saved</p>
      </div>
    </div>

  )
}

export default Profile
