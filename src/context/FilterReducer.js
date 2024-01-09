const filterReducer=(state, action)=>{

    switch(action.type){

      case"LOAD_FILTER":
      return {
        ...state,
        filter_products:
          [...action.payload],
        all_products:
          [...action.payload],
      };

      case "UPDATE_FILTERS_VALUE":
        const {name,value}=action.payload;
        return {
          ...state,
          filters:{
            ...state.filters,
            [name]:value
          },
                  }

      case "FILTER_PRODUCTS":
        let {all_products}=state;
        let tempFilterProducts=[...all_products];
        const{text}=state.filters;
        if(text){
          tempFilterProducts=tempFilterProducts.filter((e)=>{
              return e.position.includes(text);
          });
        }

        return {
          ...state,
          filter_products:tempFilterProducts,
        };

      default: 
      return state
    }
};

export default filterReducer