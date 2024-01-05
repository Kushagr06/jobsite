import React from 'react'
import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar';

function MainPage() {
  return (
    <>
    
    <div className=' flex-col justify-center'>
    <SearchBar/>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />

    </div>
    </>
  )
}

export default MainPage
