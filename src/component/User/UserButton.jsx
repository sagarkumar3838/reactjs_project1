import React from 'react'

const UserButton = () => {
  return (
    <div>
      <div className="relative inline-block">
      <div className="text-white bg-blue-600 cursor-pointer transition-all duration-200 text-md py-3 px-7 rounded group">
        <span className="absolute flex items-center justify-center left-1/2 transform -translate-x-1/2 bg-red-300 px-4 py-2 opacity-0 pointer-events-none transition-all duration-300 rounded group-hover:top-[-120%] group-hover:opacity-100 group-hover:pointer-events-auto tooltip">
          SignUp_Please 
        </span>
        <span className="text">SignUp</span>
      </div>
    </div>
    </div>
  )
}

export default UserButton
