const filterReducer=(state, action)=>{

    switch(action.type){

      case"LOAD_FILTER":
      return {
        ...state,
        filter_products:action.payload,
        all_products:action.payload,
      };

      default: 
      return state
    }
};

export default filterReducer