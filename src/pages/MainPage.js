import React from 'react'
import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar';
import { UseProductContext } from '../context/ProductContext';

function MainPage() {
  const {products}=UseProductContext();
  console.log(products);

  return (
    <>
    
    <div className=' flex-col justify-center'>
      
    <SearchBar/>
      <JobCard />
      

    </div>
    </>
  )
}

export default MainPage
