import React from 'react'
import img from '../assets/formImage1.png'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className=' flex justify-between h-screen w-auto '>

      <div className='my-auto mx-auto w-1/3' id="RegisterForm">
          <h1 className='text-3xl font-bold space-x-2 my-2'>
            Create an account
          </h1>
          <h3>
            Your personal job finder is here
          </h3>

  <form className=" mt-10 mb-5 w-full">
    <div className="mb-4">
      
      <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
    </div>

    <div className="mb-6">

    <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
    </div>
    <div className="mb-6">

    <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile" />
    </div>
    <div className="mb-6">

    <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password" />
    </div>
   
    <div class="form-check mb-10">
      <input  type="checkbox" value="" id="" />
      <label className='text-sm' for=""> By creating an account, I agree to our terms of use and privacy policy </label>
    </div>
   
    
      <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline text-xl w-1/2" type="button">
       Sign Up
      </button>
     
  </form>
  Already have an account?
  <Link className="inline-block px-2 font-medium underline" to="/login">
     Sign In
      </Link>
      </div>

      <img src={img} alt="FormImage" className=' w-1/3 h-auto'/>
    </div>
  )
}

export default Register
