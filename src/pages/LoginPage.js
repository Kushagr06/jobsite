import React from 'react'
import img from '../assets/formImage1.png'

function Register() {
  return (
    <div className=' flex justify-between h-screen w-auto '>

      <div className='my-auto mx-auto w-1/3' id="RegisterForm">
          <h1 className='text-3xl font-bold space-x-2 my-2'>
            Already have an account?
          </h1>
          <h3>
            Your personal job finder is here
          </h3>

          <form className=" mt-10 mb-5 w-full">
    <div className="mb-4">
      
      <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
    </div>
    <div className="mb-6">
      
      <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
     
    </div>
    
      <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline text-xl w-1/2" type="button">
       Sign in
      </button>
     
  </form>
  Don't have an account?
  <a className="inline-block px-2 font-medium underline" href="/">
     Sign Up
      </a>
      </div>

      <img src={img} alt="FormImage" className=' w-1/3 h-auto'/>
    </div>
  )
}

export default Register
