import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "./ProductContext";
import reducer from './FilterReducer';

const FilterContext=createContext();

const initialState={
  filter_products:[],
  all_products:[],
  sorting_value:"html",
  filters:{
    text:"",
  },
 
};

export const FilterContextProvider=({children})=>{

  const {products}= UseProductContext();

  const [state,dispatch]=useReducer(reducer, initialState);


  //update filter values
  const updateFilterValue=(event)=>{
    let name="text";
    let value=event.target.value;

    return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value} });
  };

    // sorting Function
    const sorting=()=>{
        dispatch({type:"GET_SORT_VALUE"});
    };

  useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"});
  },[products,state.filters])

  useEffect(()=>{
    dispatch({type:"LOAD_FILTER", payload:products})
  },[products]);

  useEffect(()=>{
    
  },[state.sorting_value])

  return (
  <FilterContext.Provider value={{...state,updateFilterValue,sorting}}>
    {children}
  </FilterContext.Provider>
);
};

export const useFilterContext=()=>{
  return useContext(FilterContext);
};