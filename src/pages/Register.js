import React from 'react'
import img from '../assets/formImage1.png'

function Register() {
  return (
    <div className=' flex justify-between h-screen w-auto '>
      <div className='my-auto mx-auto' id="RegisterForm">
          <h1 className='text-3xl font-bold space-x-2 my-2'>
            Already have an account?
          </h1>
          <h3>
            Your personal job finder is here
          </h3>

          <form className=" mt-10 w-full">
    <div className="mb-4">
      
      <input className=" appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
    </div>
    <div className="mb-6">
      
      <input className=" appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
     
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
        Forgot Password?
      </a>
    </div>
  </form>
      </div>
      <img src={img} alt="FormImage" />
    </div>
  )
}

export default Register
