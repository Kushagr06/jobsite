import React from 'react'
import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar';
import { UseProductContext } from '../context/ProductContext';


function MainPage() {
 // console.log(products.data);
 const {products}=UseProductContext();
  return (
    <>
    
    <div className=' flex-col justify-center'>
      
    <SearchBar/>
      <JobCard data={products} />
      

    </div>
    </>
  )
}

export default MainPage
