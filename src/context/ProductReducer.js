const ProductReducer=(state,action)=>{
  
  return{
    ...state,
    products:action.payload
  };
};

export default ProductReducer