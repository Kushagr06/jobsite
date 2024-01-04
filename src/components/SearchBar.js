import React from 'react'
import { Link } from 'react-router-dom'

function SearchBar() {
  return (
    <div className="flex justify-center">
    <div className='h-[30vh] max-h-[40vh] w-2/3 my-5 rounded-sm mx-2 bg-white flex justify-center  items-center' id="SearchBar">
    <div className="w-2/3">
      <input className=" appearance-none border-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
      <div className='flex justify-between'>

      <div className="my-4 flex align-middle m-1">
        <select name="JobType" id="jobType" className=" border-2 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-sm">
        <option value="">Skills:</option>
        <option value="html">html</option>
        <option value="javascript">js</option>
        <option value="React">React</option>
        </select>

        <div className=' px-2 py-3 bg-red-100 mx-2 text-center w-auto'>
          html  
        </div>
        <div className=' px-2 py-3 bg-red-100 mx-2 text-center w-auto'>
          javascript
        </div>
        <div className=' px-2 py-3 bg-red-100 mx-2 text-center w-auto'>
          Reactjs
        </div>
      </div>

      <div className="my-4 flex align-middle m-1">
        <Link to="/addjob">
      <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline text-sm" type="button">
       + Add Job
      </button>
      </Link>
      </div>

      </div>
      <div className=' px-3 text-red-500'><button className=' py-1 px-2 border-red-500 border-2 rounded-sm'>clear</button></div>
      
    </div>

    </div>
    </div>
  )
}

export default SearchBar
