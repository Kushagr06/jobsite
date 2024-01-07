import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./ProductReducer";

const AppContext=createContext()

const initialState={
  products:[],
};

const data=
[{
  "id":1,
  "position":"FrontEnd Developer",
  "no":10,
  "stipend":50000,
  "mode":"Office",
  "time":"Full Time",
  "location":"India",
  "skills":[
    "javascript",
    "html",
    "css"
  ],
  "image":"/"

},
{
  "id":2,
  "position":"BackEnd Developer",
  "no":10,
  "stipend":50000,
  "mode":"Office",
  "time":"Full Time",
  "location":"India",
  "skills":[
    "javascript",
    "html",
    "css"
  ],
  "image":"/"

},
{
  "id":3,
  "position":"BackEnd Developer",
  "no":1,
  "stipend":20000,
  "mode":"Office",
  "time":"Part Time",
  "location":"India",
  "skills":[
    "javascript",
    "html",
    "css"
  ],
  "image":"/"

}
]




const AppProvider=({children})=>{


  const [state,dispatch]=useReducer(reducer, initialState);
   
  const getProduct=()=>{
    const products={data};
    dispatch({type:"API_DATA", payload:products})
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