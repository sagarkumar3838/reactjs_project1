import React from 'react'
import { Link } from 'react-router-dom'

import { FaRegUser } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
const LandingPage = () => {
  return (

   <div className='relative h-screen overflow-hidden'>
     <video 
    className='absolute top-0 left-0 w-full h-full object-cover opacity-40 hover:opacity-20 ' 
    autoPlay 
    loop 
    muted 
  >
    <source src='/assests/video/video2.mp4' type='video/mp4' />
    
  </video>
    <h1 className='text-center mt-8 font-bold text-6xl '>WelCome to NandiExpress</h1>
    <div className='landingpage relative z-10 border-0 flex flex-wrap items-center justify-center gap-10 mt-24 h-[25rem] w-[50%] ml-[25%] bg-transparent  '>
       <div className='text-center rounded-full  hover:bg-[#418c4c] h-[10rem] md:h-[12rem] w-[10rem] md:w-[12rem] pt-4 transition-transform transform hover:scale-105 '>
       <GrUserAdmin className='h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] mb-2 mx-auto  ' />
       <button className='border-0 w-[6rem] md:w-[7rem] font-bold uppercase btn btn-outline btn-gray-400'>
       <span className="loading loading-spinner"></span>
        <Link state={{name: "sagar", password:"password"}} to='/adminlogin'>admin</Link>
        </button>
       </div>


       <div className='text-center rounded-full  hover:bg-[#678dc6] h-[10rem] md:h-[12rem] w-[10rem] md:w-[12rem] pt-4 transition-transform transform hover:scale-105 '>
       <FaRegUser className='h-[4rem] md:h-[6rem] w-[4rem] md:w-[6rem] mb-2 mx-auto ' />
       <button className='border-0 w-[6rem] md:w-[7rem] font-bold uppercase btn btn-outline btn-gray-400'>
       <span className="loading loading-spinner"></span>
       <Link to='/userlogin'>user</Link>
        </button>
       </div>

   </div>
       
      
       
       
    </div>
  )
}

export default LandingPage
