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
        var tempFilterProducts=[...all_products];

        const{text}=state.filters;
        console.log("Current text",text)

        if(text){
          tempFilterProducts=tempFilterProducts.filter((e)=>{
              return e.id===1;

          });
        }
        console.log("temp",tempFilterProducts)

        return {
          ...state,
          filter_products:tempFilterProducts,
        };

      default: 
      return state
    }
};

export default filterReducer