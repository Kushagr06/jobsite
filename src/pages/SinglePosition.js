import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'


function SinglePosition() {
  const navigate=useNavigate()
  const location= useLocation();
  const data=location.state
  // console.log(data)
  return (
    <div className='flex-col justify-center items-center mt-5 m-auto w-3/4'>
      {
        <>
    <div className=' w-full h-[15vh] bg-white shadow-md border-2 flex justify-center items-center overflow-clip font-semibold text-xl'>
      {data.position}
    </div>
    <div className='mt-5 mb-5 w-full bg-white shadow-md min-h-screen h-auto text-left px-10 py-10'>
          <div id="headingSinglePage" className='text-2xl font-semibold'> 
              {data.position}
          </div>
          <div id="location" className=' text-sm text-red-600 font-semibold'>
            Bangalore | {data.location}
          </div>
          <table className='my-10 text-sm'>
            <tr>
              <th className=' pr-5 text-gray-400'>
                &#36; Stipend
              </th>
              <th className=' text-gray-400'>
                &#128197; Duration
              </th>
            </tr>
            <tr>
              <td className=' pr-5'>
                &#8377; {data.stipend} per month
              </td>
              <td>
                6 months
              </td>
            </tr>
          </table>

      {/* Company Description */}
      <div className='mb-10'>
        <div className=' font-semibold mb-2'>
          About Company
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, dolores officiis nihil labore ullam neque suscipit, dolorum eius ab sunt! Quibusdam harum consequuntur culpa earum expedita labore provident. Corporis!
      </div>

      {/* Job description */}
      <div className='mb-10'>
      <div className=' font-semibold mb-2'>
          About the job/internship
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, dolores officiis nihil labore ullam neque suscipit, dolorum eius ab sunt! Quibusdam harum consequuntur culpa earum expedita labore provident. Corporis!
      </div>

      {/* skill description */}
      <div className='mb-10'>
      <div className=' font-semibold mb-2'>
          Skill(s) Required
        </div>
        {data.skills.map((info)=>(
          <span className=' m-2 bg-red-200 rounded-md px-5 py-1'>
          {info}
          </span>
        ))}
      </div>
      <div>
      <div className=' font-semibold mb-2'>
          Additional Information
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit, dolores officiis nihil labore ullam neque suscipit, dolorum eius ab sunt! Quibusdam harum consequuntur culpa earum expedita labore provident. Corporis!
      </div>
    </div>
    </>
    }
    </div>
  )
}

export default SinglePosition
