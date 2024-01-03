import React from 'react'
import img from '../assets/addJobImage.png'

function AddJob() {
  return (
    <div className=' flex justify-between h-screen w-auto ' id="AddjobForm">

    <div className='my-auto mx-auto w-1/3 mt-3' id="RegisterForm">
        <h1 className='text-3xl font-bold space-x-2 my-2'>
          Hire with Us!
        </h1>
        <h3>
          Add description for your position
        </h3>

<form className=" mt-10 mb-5 w-full">
  <div className="mb-4">
    
    <input className=" appearance-none border-2 rounded w-full py-3 px-3 leading-tight focus:outline-none focus:shadow-outline" id="companyName" type="text" placeholder="Company Name" />
  </div>

  <div className="mb-6">

  <input className=" appearance-none border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline" id="url" type="text" placeholder="Add logo URL" />
  </div>
  <div className="mb-6">

  <input className=" appearance-none border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline" id="stipend" type="text" placeholder="Monthly Stipend" />
  </div>
  <div className="mb-6">

  <select name="JobType" id="jobType" className=" border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline">
  <option value="">Select the Type of job:</option>
  <option value="P+I">P+I</option>
  <option value="I">I</option>
  <option value="P">P</option>
</select>
</div>
<div className="mb-6">

  <select name="Remote/Office" id="remote/office" className=" border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline">
  <option value="">Remote/On-site:</option>
  <option value="remote">Remote</option>
  <option value="onsite">On-site</option>
</select>
</div>
  <div className="mb-6">

  <input className=" appearance-none border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Location" />
  </div>
  <div className="mb-6">

  <textarea className=" appearance-none border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline" id="jobDescription" type="text" placeholder="Job Description" />
  </div>
  <div className="mb-6">

  <textarea className=" appearance-none border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline" id="aboutCompany" type="text" placeholder="About Company" />
  </div>
  <div className="mb-6">

  <input className=" appearance-none border-2 rounded w-full py-3 px-3  leading-tight focus:outline-none focus:shadow-outline" id="skillsRequired" type="text" placeholder="Skills Required" />
  </div>
  
 
 
 
  
    <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline text-lg w-1/3 mx-1" type="button">
     Add Job+
    </button>
    <button className="bg-white hover:bg-red-500 hover:text-white hover:border-white  font-semibold py-3 px-4 rounded focus:outline-none focus:shadow-outline text-lg w-1/3 border-2 border-black mx-1 " type="button">
     Cancel
    </button>
   
</form>

    </div>

    <img src={img} alt="FormImage" className=' w-1/3 h-auto'/>
  </div>
  )
}

export default AddJob
