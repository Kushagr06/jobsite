const ProductReducer=(state,action)=>{
  

switch(action.type){
  case "API_DATA":
  return{
    ...state,
    products:action.payload,
  };



 default:
  return{
    state
  } 
}

};

export default ProductReducer