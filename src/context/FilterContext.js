import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "./ProductContext";
import reducer from './FilterReducer';

const FilterContext=createContext();

const initialState={
  filter_products:[],
  all_products:[],
  filters:{
    text:"",
  }
};

export const FilterContextProvider=({children})=>{

  const {products}= UseProductContext();

  const [state,dispatch]=useReducer(reducer, initialState);


  //update filter values
  const updateFilterValue=(event)=>{
    let name="text"
    let value=event.target.value;

    return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value} });
  };

  useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"});
    dispatch({type:"LOAD_FILTER", payload:products})
  },[products, state.filters]);

  return (
  <FilterContext.Provider value={{...state,updateFilterValue}}>
    {children}
  </FilterContext.Provider>
);
};

export const useFilterContext=()=>{
  return useContext(FilterContext);
};