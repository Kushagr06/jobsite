import React from 'react'
import JobCard from '../components/JobCard'
import SearchBar from '../components/SearchBar';
import { UseProductContext } from '../context/ProductContext';
import { useFilterContext } from '../context/FilterContext';


function MainPage() {
 // console.log(products.data);
 const {products}=UseProductContext();
 const {filter_products}=useFilterContext();
//  console.log(filter_products);
  return (
    <>
    
    <div className=' flex-col justify-center'>
      
    <SearchBar/>
      <JobCard data={filter_products} />
      

    </div>
    </>
  )
}

export default MainPage
