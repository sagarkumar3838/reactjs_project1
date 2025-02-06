import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div className='flex flex-col w-64 h-screen items-center m-0 p-0 box-border bg-gray-500'>
      <NavLink to="/adminhomepage/dashboard" className="relative text-center w-full h-[2rem] mt-4 hover:bg-white font-bold text-2xl">Dashboard</NavLink>
      <NavLink to="/adminhomepage/addbus"  className="relative text-center w-full h-[2rem] mt-4 hover:bg-white font-bold text-2xl">Add Bus</NavLink>
      <NavLink to="/"  className="relative text-center w-full h-[2rem] mt-4 hover:bg-white font-bold text-2xl">Logout</NavLink>
    
    </div>
  )
}

export default AdminSideBar
