import { createContext, useContext, useReducer } from "react";
import {data} from '../Data'
import reducer from "./ProductReducer";

const AppContext=createContext()


const AppProvider=({children})=>{

  const initialState={
    products:[]
  };
  const [state,dispatch]=useReducer(reducer, initialState)
  const products=data;
  dispatch({type:'API_DATA', payload:products})

  return <AppContext.Provider value={{...state}}>
    {children}
  </AppContext.Provider>
};

const UseProductContext=()=>{
  return useContext(AppContext);
}

export {AppProvider, AppContext,UseProductContext}