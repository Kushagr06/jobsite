import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./ProductReducer";
import {data} from '../Data'

const AppContext=createContext()

const initialState={
  products:[],
};


const AppProvider=({children})=>{


  const [state,dispatch]=useReducer(reducer, initialState);
   
  const getProduct=()=>{
    const products={data};
    dispatch({type:"API_DATA", payload:products.data})
  };

  useEffect(()=>{
    getProduct()
  },[]);
  
  return( 
  <AppContext.Provider value={{...state}}>
    {children}
  </AppContext.Provider>
  );
};

//custom hook
const UseProductContext=()=>{
  return useContext(AppContext);
}

export {AppProvider, AppContext,UseProductContext}