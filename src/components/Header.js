import React from 'react'

function Header() {
  return (
    <div id="header" className='w-screen h-[15vh] bg-red-400 flex justify-between items-center px-16'>
      <div id="header-name" className='text-white font-semibold text-lg '>
        Jobfinder
      </div>
      <div id="profile" className='px-20'>
      <button className=" text-white border-2 border-white text-center align-middle  px-5 rounded-lg focus:outline-none focus:shadow-outline text-lg w-auto h-[5vh] mx-1" type="button">
       Login
      </button>

      <button className="bg-white text-red-400  text-center align-middle px-5 rounded-lg focus:outline-none focus:shadow-outline text-lg w-auto h-[5vh] mx-1 " type="button">
       Register
      </button>
      </div>
   
    </div>
  )
}

export default Header
