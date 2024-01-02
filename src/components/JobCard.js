import React from 'react'
import icon from '../assets/icon.jpg' 

function JobCard() {
  return (
    
    <div className='h-[15vh] w-2/3 my-10 rounded-sm flex' id="jobCard">
      <div className='h-[15vh] duration-100 w-2 rounded-sm' id="jobCard-indicator"/>
       <div className='flex justify-start my-auto mx-2'>
        <img src={icon} alt="" className='h-[7vh] w-[7vh] align-top rounded-xl border-2 border-red-500 mx-2' />
        <div className='flex-col justify-center'>
          <div>
            dd
          </div>
          <div>
            ddd
          </div>
        </div>
       </div>
    </div>
  )
}

export default JobCard
