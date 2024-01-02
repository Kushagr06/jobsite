import React from 'react'
import icon from '../assets/icon.jpg' 

function JobCard() {
  return (
    
    <div className='h-[20vh] w-2/3 my-10 rounded-sm flex bg-white' id="jobCard">
      <div className='h-full duration-100 w-2 rounded-sm' id="jobCard-indicator"/>
       <div className='flex justify-start my-auto mx-2'>
        <img src={icon} alt="" className='h-[7vh] w-[7vh] my-auto rounded-xl border-2 border-red-500 mx-5' />
        <div className='flex-col justify-center' id="jobCard-generalInfo">

              <div className=' font-semibold my-2'>
                Frontend Developer
              </div>

              <div className='flex justify-around text-[#b4acac] my-2 text-sm'>
                    <div className='my-2 mx-2'>
                      <span className=' inline-flex align-middle'>
                    <svg fill="#b4acac" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#b4acac"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M735.385 336.094c218.24 0 395.977 177.624 395.977 395.976v113.137c0 121.96-56.568 229.78-143.57 302.526 94.13 13.916 187.354 34.959 278.315 64.6 122.414 39.825 204.664 155.676 204.664 288.159v200.364l-26.814 16.63c-148.434 92.32-392.017 202.515-708.572 202.515-174.795 0-439.76-35.186-708.685-202.514L0 1700.856v-189.39c0-140.629 89.264-263.042 221.973-304.79 85.418-26.7 172.533-46.498 260.327-59.509-86.55-72.746-142.891-180.339-142.891-301.96V732.07c0-218.352 177.623-395.976 395.976-395.976ZM1183.405 0c218.24 0 395.976 177.624 395.976 395.977v113.136c0 121.96-56.568 229.893-143.57 302.526 94.13 13.916 187.241 35.072 278.316 64.6 122.413 40.051 204.663 155.79 204.663 288.272v200.364l-26.7 16.631c-77.612 48.31-181.81 101.03-308.183 140.742v-21.723c0-181.696-113.589-340.766-282.727-395.75a1720.133 1720.133 0 0 0-111.553-32.244c35.751-69.805 54.871-147.416 54.871-227.29V732.104c0-250.483-182.036-457.975-420.414-500.175C886.762 95.487 1023.656 0 1183.404 0Z" fill-rule="evenodd"></path> </g></svg>
                    </span>
                    11-20
                    </div>

                  <div className='my-2 mx-2'>
                      <span className=' inline-flex align-middle'>
                      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="#b4acac" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                    50000
                    </div>

                    <div className='my-2 mx-2 text-red-500 font-semibold'>
                    India
                    </div>

              </div>  
            <div className='my-2 flex text-sm'>
              <div className='mx-4 text-red-500'>
                  Office
              </div>
              <div className='mx-4 text-red-500'>
                  Full time
              </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default JobCard
