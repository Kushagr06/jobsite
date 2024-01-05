import { createContext, useContext, useEffect, useReducer } from "react";
import {data} from '../Data'
import reducer from "./ProductReducer";

const AppContext=createContext()

const initialState={
  products:[]
};

const AppProvider=({children})=>{


  const [state,dispatch]=useReducer(reducer, initialState);

  const getProduct=()=>{dispatch({type:"API_DATA", payload:data})};

  useEffect(()=>{
    getProduct()
  },[]);
  
  return <AppContext.Provider value={{...state}}>
    {children}
  </AppContext.Provider>
};

const UseProductContext=()=>{
  return useContext(AppContext);
}

export {AppProvider, AppContext,UseProductContext}