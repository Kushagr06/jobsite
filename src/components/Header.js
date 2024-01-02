import React from 'react'

function Header() {
  return (
    <div id="header" className='w-screen h-[15vh] bg-red-400 flex justify-between items-center px-20'>
      <div id="header-name" className='text-white font-semibold text-lg '>
        Jobfinder
      </div>
      <div id="profile">
        <button className='bg-white'>
          Login
        </button>
        <button className='bg-white'>
          Register
        </button>
      </div>
   
    </div>
  )
}

export default Header
